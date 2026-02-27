package org.recettes.api.dto.request.recette;

public class CreateRecetteRequest {
    private String titre;
    private String description;
    private String imageUrl;
    private Long utilisateurId;
    private Long categorieId;

    public String getTitre() {
        return titre;
    }

    public String getDescription() {
        return description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public Long getUtilisateurId() {
        return utilisateurId;
    }

    public Long getCategorieId() {
        return categorieId;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public void setUtilisateurId(Long utilisateurId) {
        this.utilisateurId = utilisateurId;
    }

    public void setCategorieId(Long categorieId) {
        this.categorieId = categorieId;
    }
}
