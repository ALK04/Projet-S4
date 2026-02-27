package org.recettes.api.repository;

import org.recettes.api.model.Recette;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface RecetteRepository extends JpaRepository<Recette, Long> {
    List<Recette> findByUtilisateur_IdUtilisateur(Long idUtilisateur);
}
