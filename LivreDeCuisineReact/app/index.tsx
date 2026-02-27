import React, { useEffect, useState, useMemo } from "react";
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image,
    TextInput,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router"; // <-- Importation de useRouter

import { mainStyles, isDesktop } from "./styles";
import { fetchRecettes } from "./api/recettesService";

// CONSTANTE FACILEMENT MODIFIABLE
const RECIPES_PER_PAGE = 10;

export default function Index() {
    const router = useRouter(); // <-- Initialisation du router

    const [recettes, setRecettes] = useState([]);
    const [search, setSearch] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Toutes");
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetchRecettes()
            .then((data) => setRecettes(data))
            .catch((err) => console.error("Échec du chargement des recettes:", err));
    }, []);

    // RESET la page à 1 si le filtre ou la recherche change
    useEffect(() => {
        setCurrentPage(1);
    }, [search, selectedCategory]);

    const categories = useMemo(() => {
        return ["Toutes", ...new Set(recettes.map((r) => r.categorieNom))];
    }, [recettes]);

    const filteredRecettes = useMemo(() => {
        return recettes.filter((r) => {
            const matchesSearch = r.titre.toLowerCase().includes(search.toLowerCase());
            const matchesCategory =
                selectedCategory === "Toutes" || r.categorieNom === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [recettes, search, selectedCategory]);

    // LOGIQUE DE PAGINATION
    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * RECIPES_PER_PAGE;
        const endIndex = startIndex + RECIPES_PER_PAGE;
        const totalPages = Math.ceil(filteredRecettes.length / RECIPES_PER_PAGE);

        return {
            recettes: filteredRecettes.slice(startIndex, endIndex),
            totalPages,
        };
    }, [filteredRecettes, currentPage]);

    const goToPage = (pageNumber) => {
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

    const renderRecipeCard = ({ item: recette }) => (
        <TouchableOpacity
            key={recette.id}
            style={StyleSheet.flatten([
                mainStyles.card,
                {
                    width: isDesktop ? "48%" : "100%",
                    marginBottom: 20,
                    marginHorizontal: isDesktop ? "1%" : 0,
                },
            ])}
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
                    {recette.description.length > 100
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
                <View style={mainStyles.mainHeader}>
                    {/* Bouton de Profil avec navigation vers /login */}
                    <TouchableOpacity
                        style={mainStyles.profileButton}
                        onPress={() => router.push('/page/login')}
                    >
                        <FontAwesome name="user-circle" size={30} color="#000" />
                    </TouchableOpacity>
                    <Text style={mainStyles.title}>Mon Livre de Recettes</Text>
                </View>

                <View style={mainStyles.headerContainer}>
                    <View style={mainStyles.searchContainer}>
                        <FontAwesome
                            name="search"
                            size={20}
                            color="#000"
                            style={mainStyles.searchIcon}
                        />
                        <TextInput
                            placeholder="Rechercher une recette..."
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

                <FlatList
                    data={paginatedData.recettes}
                    renderItem={renderRecipeCard}
                    keyExtractor={(item) => String(item.id)}
                    numColumns={isDesktop ? 2 : 1}
                    contentContainerStyle={mainStyles.recipeList}
                    style={{ flex: 1 }}
                    ListFooterComponent={() => (
                        // Conteneur de la pagination en bas de la liste
                        paginatedData.totalPages > 1 && (
                            <View style={mainStyles.paginationContainer}>
                                {/* Bouton Précédent */}
                                <TouchableOpacity
                                    style={[
                                        mainStyles.paginationButton,
                                        currentPage === 1 && mainStyles.paginationButtonDisabled,
                                    ]}
                                    onPress={() => goToPage(currentPage - 1)}
                                    disabled={currentPage === 1}
                                >
                                    <Text style={mainStyles.paginationText}>{'<'}</Text>
                                </TouchableOpacity>

                                {/* Boutons de numéros de page */}
                                {renderPaginationButtons()}

                                {/* Bouton Suivant */}
                                <TouchableOpacity
                                    style={[
                                        mainStyles.paginationButton,
                                        currentPage === paginatedData.totalPages && mainStyles.paginationButtonDisabled,
                                    ]}
                                    onPress={() => goToPage(currentPage + 1)}
                                    disabled={currentPage === paginatedData.totalPages}
                                >
                                    <Text style={mainStyles.paginationText}>{'>'}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    )}
                />
            </View>
        </View>
    );
}