package org.recettes.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.recettes.api.model.Etape;
import java.util.List;

public interface EtapeRepository extends JpaRepository<Etape, Long> {
    List<Etape> findByRecetteIdRecette(Long idRecette);
}
