package org.recettes.api.service;

import org.recettes.api.dto.request.utilisateur.CreateUtilisateurRequest;
import org.recettes.api.dto.request.utilisateur.UpdateUtilisateurRequest;
import org.recettes.api.dto.response.utilisateur.UtilisateurResponse;

import java.util.List;

public interface UtilisateurService {
    List<UtilisateurResponse> getAll();
    UtilisateurResponse getById(Long id);
    UtilisateurResponse create(CreateUtilisateurRequest request);
    UtilisateurResponse update(Long id, UpdateUtilisateurRequest request);
    void delete(Long id);
}
