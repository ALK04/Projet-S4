import { StyleSheet } from "react-native";

// Les styles sont basés sur votre image fournie et les couleurs de votre thème
export const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B6D8F2', // Fond bleu clair
        padding: 20,
    },

    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 10,
        backgroundColor: '#F7F6CF',
        borderRadius: 20,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },

    card: {
        width: '90%',
        maxWidth: 400,
        backgroundColor: '#9AC8EB', // Fond bleu moyen
        borderRadius: 20,
        padding: 30,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 30,
    },
    input: {
        width: '100%',
        backgroundColor: '#F7F6CF', // Fond jaune clair
        borderRadius: 25,
        height: 50,
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#000',
        marginBottom: 20,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
    signupLink: {
        alignSelf: 'flex-end',
        color: '#000',
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 15,
        marginTop: -10,
    },
    button: {
        backgroundColor: '#5784BA', // Couleur du bouton Valider
        width: '100%',
        paddingVertical: 12,
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 10,
    },

    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },

});