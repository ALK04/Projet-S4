package org.recettes.api.dto.request.utilisateur;

public class CreateUtilisateurRequest {
    private String nomUtilisateur;
    private String adresseElectronique;

    public String getNomUtilisateur() { return nomUtilisateur; }
    public void setNomUtilisateur(String nomUtilisateur) { this.nomUtilisateur = nomUtilisateur; }

    public String getAdresseElectronique() { return adresseElectronique; }
    public void setAdresseElectronique(String adresseElectronique) { this.adresseElectronique = adresseElectronique; }
}
