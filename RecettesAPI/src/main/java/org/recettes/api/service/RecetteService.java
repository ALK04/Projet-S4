package org.recettes.api.service;

import org.recettes.api.dto.request.recette.CreateRecetteRequest;
import org.recettes.api.dto.request.recette.UpdateRecetteRequest;
import org.recettes.api.dto.response.recette.RecetteResponse;

import java.util.List;

public interface RecetteService {
    List<RecetteResponse> getAll();
    RecetteResponse getById(Long id);
    RecetteResponse create(CreateRecetteRequest request);
    RecetteResponse update(Long id, UpdateRecetteRequest request);
    void delete(Long id);
    List<RecetteResponse> getByUtilisateur(Long idUtilisateur);
}