package org.recettes.api.service;

import org.recettes.api.dto.request.etape.CreateEtapeRequest;
import org.recettes.api.dto.request.etape.UpdateEtapeRequest;
import org.recettes.api.dto.response.etape.EtapeResponse;

import java.util.List;

public interface EtapeService {
    List<EtapeResponse> getByRecette(Long recetteId);
    EtapeResponse getById(Long id);
    EtapeResponse create(CreateEtapeRequest request);
    EtapeResponse update(Long id, UpdateEtapeRequest request);
    void delete(Long id);
}
