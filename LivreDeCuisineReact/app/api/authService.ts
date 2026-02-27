export const registerUser = async (userData: any) => {
    const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    });
    return await response.json();
};

export const loginUser = async (email: string, motDePasse: string) => {
    console.log("LOGIN BODY:", JSON.stringify({ adresseElectronique: email, motDePasse }));
    const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ adresseElectronique: email, motDePasse }),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Erreur de connexion");
    }

    return data;
};

