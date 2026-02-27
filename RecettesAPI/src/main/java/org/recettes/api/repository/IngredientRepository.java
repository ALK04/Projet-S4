package org.recettes.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.recettes.api.model.Ingredient;

public interface IngredientRepository extends JpaRepository<Ingredient, Long> {
}
