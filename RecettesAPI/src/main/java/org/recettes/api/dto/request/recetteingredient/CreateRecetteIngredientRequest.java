package org.recettes.api.dto.request.recetteingredient;

public class CreateRecetteIngredientRequest {
    private Long recetteId;
    private Long ingredientId;
    private String quantite;

    public Long getRecetteId() { return recetteId; }
    public void setRecetteId(Long recetteId) { this.recetteId = recetteId; }

    public Long getIngredientId() { return ingredientId; }
    public void setIngredientId(Long ingredientId) { this.ingredientId = ingredientId; }

    public String getQuantite() { return quantite; }
    public void setQuantite(String quantite) { this.quantite = quantite; }
}
