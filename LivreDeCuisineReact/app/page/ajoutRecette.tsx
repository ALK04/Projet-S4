import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { mainStyles } from "../styles";
import { Picker } from "@react-native-picker/picker";

// Définition de l'union de types pour les unités (meilleure pratique pour TypeScript)
type UniteType = "gramme" | "litre" | "cac" | "cas" | "centilitre";

export default function AjoutRecette() {
    const router = useRouter();

    const [nom, setNom] = useState("");
    const [categorie, setCategorie] = useState<string>("");
    const [categories, setCategories] = useState<string[]>([]);
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState([
        { nom: "", quantite: "", unite: "gramme" as UniteType },
    ]);
    const [instructions, setInstructions] = useState(["", ""]);

    useEffect(() => {
        setCategories(["Entrée", "Plat", "Dessert", "Boisson"]);
    }, []);

    const ajouterIngredient = () =>
        setIngredients([...ingredients, { nom: "", quantite: "", unite: "gramme" as UniteType }]);
    const supprimerIngredient = (i: number) =>
        setIngredients(ingredients.filter((_, idx) => idx !== i));
    const ajouterEtape = () => setInstructions([...instructions, ""]);
    const supprimerEtape = (i: number) =>
        setInstructions(instructions.filter((_, idx) => idx !== i));
    const handleSubmit = () => {
        console.log({ nom, categorie, description, ingredients, instructions });
        router.back();
    };

    return (
        <View style={mainStyles.container}>
            <Stack.Screen options={{ headerShown: false }} />

            {/* Header */}
            <View style={mainStyles.mainHeader}>
                <TouchableOpacity
                    style={mainStyles.profileButton}
                    onPress={() => router.back()}
                >
                    <Text style={{ fontSize: 20 }}>⬅</Text>
                </TouchableOpacity>
                <Text style={mainStyles.title}>Crée une recette</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Nom */}
                <View style={mainStyles.formGroup}>
                    <Text style={mainStyles.label}>
                        Nom de la recette
                    </Text>
                    <TextInput
                        style={mainStyles.input}
                        placeholder="Nom de la recette"
                        value={nom}
                        onChangeText={setNom}
                    />
                </View>

                {/* Catégorie */}
                <View style={mainStyles.formGroup}>
                    <Text style={mainStyles.label}>Catégorie</Text>
                    <View style={mainStyles.pickerContainer}>
                        <Picker
                            selectedValue={categorie}
                            onValueChange={(itemValue: string) => setCategorie(itemValue)}
                            style={mainStyles.pickerStyle}
                        >
                            <Picker.Item label="Sélectionner une catégorie" value="" />
                            {categories.map((cat) => (
                                <Picker.Item key={cat} label={cat} value={cat} />
                            ))}
                        </Picker>
                    </View>
                </View>

                {/* Description */}
                <View style={mainStyles.formGroup}>
                    <Text style={mainStyles.label}>Description</Text>
                    <TextInput
                        style={[mainStyles.input, mainStyles.descriptionInput]}
                        multiline
                        placeholder="Description de la recette"
                        value={description}
                        onChangeText={setDescription}
                    />
                </View>

                {/* Ingrédients */}
                <Text style={[mainStyles.sectionTitle, { marginBottom: 10 }]}>
                    Ingrédients
                </Text>
                {ingredients.map((ing, index) => (
                    <View
                        key={index}
                        style={mainStyles.ingredientRowContainer}
                    >
                        {/* Colonne 1: Nom */}
                        <TextInput
                            style={[mainStyles.cellInput, mainStyles.ingredientNameInput]}
                            placeholder="Nom (ex: Farine)"
                            value={ing.nom}
                            onChangeText={(text) => {
                                const copy = [...ingredients];
                                copy[index].nom = text;
                                setIngredients(copy);
                            }}
                        />
                        {/* Colonne 2: Quantité */}
                        <TextInput
                            style={[mainStyles.cellInput, mainStyles.ingredientQuantityInput]}
                            placeholder="Qté"
                            keyboardType="numeric"
                            value={ing.quantite}
                            onChangeText={(text) => {
                                const copy = [...ingredients];
                                copy[index].quantite = text;
                                setIngredients(copy);
                            }}
                        />
                        {/* Colonne 3: Unité */}
                        <View style={mainStyles.unitPickerContainer}>
                            <Picker
                                selectedValue={ing.unite}
                                onValueChange={(val) => {
                                    const copy = [...ingredients];
                                    copy[index].unite = val as UniteType;
                                    setIngredients(copy);
                                }}
                                style={mainStyles.pickerStyle}
                            >
                                {["gramme", "litre", "cac", "cas", "centilitre"].map((u) => (
                                    <Picker.Item key={u} label={u} value={u} />
                                ))}
                            </Picker>
                        </View>
                        {/* Colonne 4: Poubelle */}
                        <TouchableOpacity
                            onPress={() => supprimerIngredient(index)}
                            // Utilisation du conteneur de flex pour l'alignement
                            style={mainStyles.deleteIngredientIconContainer}
                        >
                            <FontAwesome name="trash" size={20} color="red" />
                        </TouchableOpacity>
                    </View>
                ))}

                <TouchableOpacity onPress={ajouterIngredient}>
                    <Text style={[mainStyles.addLink, mainStyles.alignRight]}>
                        + Ajouter un autre ingrédient
                    </Text>
                </TouchableOpacity>

                {/* Instructions */}
                <Text style={[mainStyles.sectionTitle, { marginTop: 25 }]}>Instructions</Text>
                {instructions.map((step, index) => {
                    // Styles conditionnels pour l'input des étapes
                    const stepStyles = [
                        mainStyles.stepInput,
                        index === 1 && mainStyles.stepInputLarge
                    ].filter(Boolean);

                    return (
                        <View key={index} style={mainStyles.stepRow}>
                            <TouchableOpacity onPress={() => supprimerEtape(index)}>
                                <FontAwesome
                                    name="trash"
                                    size={18}
                                    color="red"
                                    style={mainStyles.deleteStepIcon}
                                />
                            </TouchableOpacity>
                            <Text style={mainStyles.stepLabel}>{index + 1} - </Text>
                            <TextInput
                                style={stepStyles}
                                multiline={index === 1}
                                placeholder={`Étape ${index + 1}`}
                                value={step}
                                onChangeText={(text) => {
                                    const copy = [...instructions];
                                    copy[index] = text;
                                    setInstructions(copy);
                                }}
                            />
                        </View>
                    );
                })}

                <TouchableOpacity onPress={ajouterEtape}>
                    <Text style={[mainStyles.addLink, mainStyles.alignRight]}>+ Ajouter une étape</Text>
                </TouchableOpacity>

                <TouchableOpacity style={mainStyles.submitButton} onPress={handleSubmit}>
                    <Text style={mainStyles.submitText}>Valider</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}