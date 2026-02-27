package org.recettes.api.model;

import jakarta.persistence.*;

@Entity
@Table(name = "ingredient")
public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_ingredient")
    private Long idIngredient;

    @Column(name = "nom_ingredient", length = 100, nullable = false)
    private String nomIngredient;

    // Getters et setters
    public Long getIdIngredient() { return idIngredient; }
    public void setIdIngredient(Long idIngredient) { this.idIngredient = idIngredient; }

    public String getNomIngredient() { return nomIngredient; }
    public void setNomIngredient(String nomIngredient) { this.nomIngredient = nomIngredient; }
}
