package org.recettes.api.service;

import org.recettes.api.dto.request.categorie.CreateCategorieRequest;
import org.recettes.api.dto.request.categorie.UpdateCategorieRequest;
import org.recettes.api.dto.response.categorie.CategorieResponse;

import java.util.List;

public interface CategorieService {
    List<CategorieResponse> getAll();
    CategorieResponse getById(Long id);
    CategorieResponse create(CreateCategorieRequest request);
    CategorieResponse update(Long id, UpdateCategorieRequest request);
    void delete(Long id);
}
