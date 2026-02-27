package org.recettes.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.recettes.api.model.Categorie;

public interface CategorieRepository extends JpaRepository<Categorie, Long> {
}
