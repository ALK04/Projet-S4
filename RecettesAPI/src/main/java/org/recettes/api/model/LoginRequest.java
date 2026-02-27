package org.recettes.api.model;

public class LoginRequest {
    private String adresseElectronique;
    private String motDePasse;

    // Getters / Setters
    public String getAdresseElectronique() {
        return adresseElectronique;
    }

    public void setAdresseElectronique(String adresseElectronique) {
        this.adresseElectronique = adresseElectronique;
    }

    public String getMotDePasse() {
        return motDePasse;
    }

    public void setMotDePasse(String motDePasse) {
        this.motDePasse = motDePasse;
    }
}
