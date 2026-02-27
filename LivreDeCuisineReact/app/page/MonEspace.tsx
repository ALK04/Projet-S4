import React, { useEffect, useState, useMemo } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Image,
    TextInput,
    ViewStyle,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { mainStyles, isDesktop } from "../styles";
import { fetchRecettesByUtilisateur } from "../api/recettesService";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";


const RECIPES_PER_PAGE = 10;

export default function MonEspace() {
    const router = useRouter();

    const [recettes, setRecettes] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Toutes");
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const loadUserAndRecettes = async () => {
            try {
                const storedUser = await AsyncStorage.getItem("user");
                if (!storedUser) {
                    router.push("/page/login");
                    return;
                }

                const { idUtilisateur } = JSON.parse(storedUser);
                const data = await fetchRecettesByUtilisateur(idUtilisateur);
                setRecettes(data);
            } catch (error) {
                console.error(error);
                Toast.show({
                    type: "error",
                    text1: "Erreur",
                    text2: "Impossible de charger vos recettes.",
                    position: "top",
                });
            } finally {
                setLoading(false);
            }
        };
        loadUserAndRecettes();
    }, []);

    // ✅ Reset la pagination quand filtre ou recherche change
    useEffect(() => {
        setCurrentPage(1);
    }, [search, selectedCategory]);

    // 🔹 Catégories uniques
    const categories = useMemo(() => {
        return ["Toutes", ...new Set(recettes.map((r) => r.categorieNom))];
    }, [recettes]);

    // 🔹 Filtrage + recherche
    const filteredRecettes = useMemo(() => {
        return recettes.filter((r) => {
            const matchesSearch = r.titre
                ?.toLowerCase()
                .includes(search.toLowerCase());
            const matchesCategory =
                selectedCategory === "Toutes" ||
                r.categorieNom === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [recettes, search, selectedCategory]);

    // 🔹 Pagination
    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * RECIPES_PER_PAGE;
        const endIndex = startIndex + RECIPES_PER_PAGE;
        const totalPages = Math.ceil(filteredRecettes.length / RECIPES_PER_PAGE);

        return {
            recettes: filteredRecettes.slice(startIndex, endIndex),
            totalPages,
        };
    }, [filteredRecettes, currentPage]);

    const goToPage = (pageNumber: number) => {
        if (pageNumber >= 1 && pageNumber <= paginatedData.totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const renderPaginationButtons = () => {
        const { totalPages } = paginatedData;
        const buttons = [];
        if (totalPages <= 1) return null;

        let start = Math.max(1, currentPage - 2);
        let end = Math.min(totalPages, start + 4);
        start = Math.max(1, end - 4);

        for (let i = start; i <= end; i++) {
            const isActive = i === currentPage;
            buttons.push(
                <TouchableOpacity
                    key={i}
                    style={[
                        mainStyles.paginationButton,
                        isActive && mainStyles.paginationActive,
                    ]}
                    onPress={() => goToPage(i)}
                >
                    <Text style={mainStyles.paginationText}>{i}</Text>
                </TouchableOpacity>
            );
        }
        return buttons;
    };

    const renderRecipeCard = ({ item: recette }: any) => (
        <TouchableOpacity
            key={recette.id}
            style={{
                ...mainStyles.card,
                width: isDesktop ? "48%" : "100%",
                marginBottom: 20,
                marginHorizontal: isDesktop ? "1%" : 0,
            } as ViewStyle}
        >
            {recette.imageUrl && (
                <Image
                    source={{ uri: recette.imageUrl }}
                    style={mainStyles.recipeImage}
                />
            )}
            <View style={mainStyles.cardContent}>
                <Text style={mainStyles.recipeTitle}>{recette.titre}</Text>
                <Text style={mainStyles.recipeDesc}>
                    {recette.description?.length > 100
                        ? `${recette.description.substring(0, 100)}...`
                        : recette.description}
                </Text>
            </View>
            <TouchableOpacity style={mainStyles.button} activeOpacity={0.7}>
                <Text style={mainStyles.buttonText}>Voir la recette</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1 }}>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={mainStyles.container}>
                {/* HEADER */}
                <View style={mainStyles.mainHeader}>
                    <TouchableOpacity
                        style={mainStyles.profileButton}
                        onPress={() => router.back()}
                    >
                        <Text style={{ fontSize: 20 }}>⬅</Text>
                    </TouchableOpacity>
                    <Text style={mainStyles.title}>Mes Recettes</Text>
                </View>

                {/* RECHERCHE + FILTRE */}
                <View style={mainStyles.headerContainer}>
                    <View style={mainStyles.searchContainer}>
                        <FontAwesome
                            name="search"
                            size={20}
                            color="#000"
                            style={mainStyles.searchIcon}
                        />
                        <TextInput
                            placeholder="Rechercher dans mes recettes..."
                            placeholderTextColor="#555"
                            style={mainStyles.searchInput}
                            value={search}
                            onChangeText={setSearch}
                        />
                    </View>
                    <TouchableOpacity
                        style={mainStyles.menuButton}
                        onPress={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <FontAwesome name="bars" size={24} color="#000" />
                    </TouchableOpacity>
                </View>

                {/* MENU DE CATÉGORIES */}
                {isMenuOpen && (
                    <View style={mainStyles.menuOverlay}>
                        <Text style={mainStyles.menuTitle}>Catégories</Text>
                        {categories.map((cat) => (
                            <TouchableOpacity
                                key={cat}
                                style={[
                                    mainStyles.menuItem,
                                    selectedCategory === cat && mainStyles.menuItemActive,
                                ]}
                                onPress={() => {
                                    setSelectedCategory(cat);
                                    setIsMenuOpen(false);
                                }}
                            >
                                <Text style={mainStyles.menuText}>{cat}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}

                {/* CONTENU */}
                {loading ? (
                    <Text style={{ textAlign: "center", marginTop: 40 } as any}>
                        Chargement de vos recettes...
                    </Text>
                ) : paginatedData.recettes.length === 0 ? (
                    <Text style={{ textAlign: "center", marginTop: 40 } as any}>
                        Vous n’avez pas encore publié de recettes 🍳
                    </Text>
                ) : (
                    <FlatList
                        data={paginatedData.recettes}
                        renderItem={renderRecipeCard}
                        keyExtractor={(item) => String(item.id)}
                        numColumns={isDesktop ? 2 : 1}
                        contentContainerStyle={mainStyles.recipeList}
                        style={{ flex: 1 }}
                        ListFooterComponent={() =>
                            paginatedData.totalPages > 1 && (
                                <View style={mainStyles.paginationContainer}>
                                    <TouchableOpacity
                                        style={[
                                            mainStyles.paginationButton,
                                            currentPage === 1 &&
                                            mainStyles.paginationButtonDisabled,
                                        ]}
                                        onPress={() => goToPage(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    >
                                        <Text style={mainStyles.paginationText}>{"<"}</Text>
                                    </TouchableOpacity>

                                    {renderPaginationButtons()}

                                    <TouchableOpacity
                                        style={[
                                            mainStyles.paginationButton,
                                            currentPage === paginatedData.totalPages &&
                                            mainStyles.paginationButtonDisabled,
                                        ]}
                                        onPress={() => goToPage(currentPage + 1)}
                                        disabled={
                                            currentPage === paginatedData.totalPages
                                        }
                                    >
                                        <Text style={mainStyles.paginationText}>{">"}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                    />
                )}
            </View>
            <TouchableOpacity
                style={mainStyles.fabButton}
                onPress={() => router.push("/page/ajoutRecette")}
            >
                <Text style={mainStyles.fabIcon}>+</Text>
            </TouchableOpacity>
        </View>
    );
}
