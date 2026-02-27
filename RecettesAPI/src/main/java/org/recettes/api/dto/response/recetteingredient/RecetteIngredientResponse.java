package org.recettes.api.dto.response.recetteingredient;

public class RecetteIngredientResponse {
    private Long id;
    private Long recetteId;
    private Long ingredientId;
    private String nomIngredient;
    private String quantite;

    // Getters / Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getRecetteId() { return recetteId; }
    public void setRecetteId(Long recetteId) { this.recetteId = recetteId; }

    public Long getIngredientId() { return ingredientId; }
    public void setIngredientId(Long ingredientId) { this.ingredientId = ingredientId; }

    public String getNomIngredient() { return nomIngredient; }
    public void setNomIngredient(String nomIngredient) { this.nomIngredient = nomIngredient; }

    public String getQuantite() { return quantite; }
    public void setQuantite(String quantite) { this.quantite = quantite; }
}
