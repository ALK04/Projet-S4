import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
export const isDesktop = width >= 475;

export const mainStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#B6D8F2",
        padding: 20,
    },
    mainHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#1A1A1A", // Couleur ajustée pour un meilleur contraste
        textAlign: "left",
    },
    profileButton: {
        backgroundColor: "#F7F6CF",
        borderRadius: 25,
        width: 45,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F7F6CF",
        borderRadius: 25,
        paddingHorizontal: 15,
        height: 45,
        flex: 1,
        marginRight: 10,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: "#1A1A1A", // Couleur ajustée pour un meilleur contraste
    },
    menuButton: {
        backgroundColor: "#F7F6CF",
        borderRadius: 25,
        width: 45,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
    },
    menuOverlay: {
        position: "absolute",
        right: 20,
        top: 110,
        backgroundColor: "#F7F6CF",
        borderRadius: 10,
        padding: 10,
        zIndex: 10,
        minWidth: 150,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 5,
    },
    menuTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#1A1A1A", // Couleur ajustée pour un meilleur contraste
        marginBottom: 10,
    },
    menuItem: {
        paddingVertical: 8,
        paddingHorizontal: 5,
    },
    menuItemActive: {
        backgroundColor: "#B6D8F2",
        borderRadius: 5,
    },
    menuText: {
        fontSize: 16,
        color: "#1A1A1A", // Couleur ajustée pour un meilleur contraste
    },
    recipeList: {
        marginTop: 10,
    },
    card: {
        backgroundColor: "#9AC8EB",
        padding: 15,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 4,
    },
    recipeImage: {
        width: "100%",
        height: 180,
        borderRadius: 12,
        marginBottom: 10,
    },
    cardContent: {
        marginBottom: 10,
    },
    recipeTitle: {
        fontSize: 20,
        fontWeight: "700",
        color: "#1A1A1A", // Couleur ajustée pour un meilleur contraste
        marginBottom: 5,
    },
    recipeDesc: {
        fontSize: 14,
        color: "#1A1A1A", // Couleur ajustée pour un meilleur contraste
    },
    button: {
        backgroundColor: "#5784BA",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        alignSelf: "flex-start",
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 2,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "600",
    },

    // Styles de Pagination
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F6CF', // Couleur de fond du conteneur (jaune clair)
        borderRadius: 30,
        padding: 5,
        marginVertical: 20,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    paginationButton: {
        backgroundColor: '#5784BA', // Couleur du bouton (bleu foncé)
        borderRadius: 20,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 4,
    },
    paginationButtonDisabled: {
        opacity: 0.5,
    },
    paginationText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    paginationActive: {
        backgroundColor: '#2E5E8C',
    },
    fabButton: {
        position: "absolute",
        bottom: 25,
        right: 25,
        backgroundColor: "#365070",
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 3,
        zIndex: 9999,
    },
    fabIcon: {
        color: "#fff",
        fontSize: 32,
        fontWeight: "bold",
        marginTop: -2, // petit ajustement visuel
    },

    formSection: {
        backgroundColor: "#F7F6CF",
        borderRadius: 15,
        padding: 15,
        marginBottom: 20,
    },
    input: {
        backgroundColor: "#FFFDF3",
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        fontSize: 16,
        color: "#1A1A1A",
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "700",
        color: "#1A1A1A",
        marginBottom: 10,
    },
    ingredientHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        marginBottom: 5,
    },
    colText: {
        flex: 1,
        fontWeight: "bold",
        textAlign: "center",
        color: "#1A1A1A",
    },
    ingredientRow: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F7F6CF",
        borderRadius: 10,
        marginBottom: 8,
        paddingVertical: 5,
        paddingHorizontal: 8,
    },
    cellInput: {
        // Flex est retiré ici pour être mis sur les styles spécifiques
        backgroundColor: "#FFFDF3",
        borderRadius: 8,
        padding: 8,
        fontSize: 14,
        height: 45, // Maintient une hauteur fixe
    },
    deleteIcon: {
        marginRight: 6,
    },
    addLink: {
        color: "#365070",
        fontSize: 16,
        fontWeight: "600",
        marginVertical: 10,
    },
    stepRow: {
        flexDirection: "row",
        alignItems: "flex-start",
        backgroundColor: "#F7F6CF",
        borderRadius: 10,
        padding: 10,
        marginBottom: 8,
    },
    stepLabel: {
        fontWeight: "bold",
        marginRight: 5,
        color: "#1A1A1A",
    },
    stepInput: {
        flex: 1,
        backgroundColor: "#FFFDF3",
        borderRadius: 8,
        padding: 6,
        fontSize: 14,
    },
    submitButton: {
        backgroundColor: "#5784BA",
        borderRadius: 25,
        alignSelf: "center",
        marginTop: 20,
        paddingVertical: 12,
        paddingHorizontal: 40,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 3,
    },
    submitText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "700",
    },
    // Nouveaux styles ajoutés pour le formulaire
    formGroup: {
        marginBottom: 15,
    },
    label: {
        fontWeight: "700",
        marginBottom: 5,
        color: "#1A1A1A",
    },

    pickerStyle: {
        height: 45,
        justifyContent: 'center',
        color: '#1A1A1A',
    },

    pickerContainer: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        overflow: "hidden",
    },
    descriptionInput: {
        height: 100,
        textAlignVertical: "top",
    },
    ingredientRowContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
// Colonne 1: Nom (La plus large)
    ingredientNameInput: {
        flex: 3,
        marginRight: 5,
    },

    // Colonne 2: Quantité
    ingredientQuantityInput: {
        flex: 1.5,
        marginRight: 5,
    },

    // Colonne 3: Unité (Doit être un conteneur et non l'input)
    unitPickerContainer: {
        flex: 2.5, // Moins large que la quantité, mais plus que la poubelle
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        height: 45,
        justifyContent: 'center',
        marginRight: 5, // Ajout d'une marge à droite pour séparer de la poubelle
    },
    stepInputLarge: {
        height: 80,
        textAlignVertical: "top",
    },
    alignRight: {
        textAlign: "right",
    },
    // Style pour l'icône de suppression (pour éviter le style en ligne)
    deleteIngredientIcon: {
        marginLeft: 5,
    },
    deleteStepIcon: {
        marginRight: 8,
    },
    deleteIngredientIconContainer: {
        flex: 1, // La plus petite des colonnes
        width: 45, // Fallback width
        height: 45,
        alignItems: 'center', // Centre l'icône horizontalement
        justifyContent: 'center', // Centre l'icône verticalement
    },

});