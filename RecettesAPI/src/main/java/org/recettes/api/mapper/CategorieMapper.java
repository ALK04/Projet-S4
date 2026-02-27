package org.recettes.api.mapper;

import org.recettes.api.dto.response.categorie.CategorieResponse;
import org.recettes.api.model.Categorie;

import java.util.List;
import java.util.stream.Collectors;

public class CategorieMapper {

    public static CategorieResponse toResponse(Categorie categorie) {
        CategorieResponse response = new CategorieResponse();
        response.setId(categorie.getIdCategorie());
        response.setNom(categorie.getNomCategorie());
        return response;
    }

    public static List<CategorieResponse> toResponseList(List<Categorie> categories) {
        return categories.stream()
                .map(CategorieMapper::toResponse)
                .collect(Collectors.toList());
    }
}
