package org.recettes.api.mapper;

import org.recettes.api.dto.response.utilisateur.UtilisateurResponse;
import org.recettes.api.model.Utilisateur;

import java.util.List;
import java.util.stream.Collectors;

public class UtilisateurMapper {

    public static UtilisateurResponse toResponse(Utilisateur entity) {
        UtilisateurResponse response = new UtilisateurResponse();
        response.setId(entity.getIdUtilisateur());
        response.setNomUtilisateur(entity.getNomUtilisateur());
        response.setAdresseElectronique(entity.getAdresseElectronique());
        return response;
    }

    public static List<UtilisateurResponse> toResponseList(List<Utilisateur> entities) {
        return entities.stream()
                .map(UtilisateurMapper::toResponse)
                .collect(Collectors.toList());
    }
}
