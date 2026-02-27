// URL de base
const API_BASE_URL = "http://localhost:8080";

export async function fetchRecettes() {
    try {
        const response = await fetch(`${API_BASE_URL}/recettes`);

        if (!response.ok) {
            throw new Error(`Erreur API: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erreur lors de la récupération des recettes:", error);
        throw error;
    }
}

export const fetchRecettesByUtilisateur = async (idUtilisateur: number) => {
    const response = await fetch(`http://localhost:8080/recettes/utilisateur/${idUtilisateur}`);
    if (!response.ok) throw new Error("Erreur lors du chargement des recettes utilisateur");
    return await response.json();
};
