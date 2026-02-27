package org.recettes.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.recettes.api.model.RecetteIngredient;
import java.util.List;

public interface RecetteIngredientRepository extends JpaRepository<RecetteIngredient, Long> {
    List<RecetteIngredient> findByRecetteIdRecette(Long idRecette);
}
