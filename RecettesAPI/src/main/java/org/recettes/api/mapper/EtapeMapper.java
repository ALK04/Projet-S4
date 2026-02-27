package org.recettes.api.mapper;

import org.recettes.api.dto.response.etape.EtapeResponse;
import org.recettes.api.model.Etape;

import java.util.List;
import java.util.stream.Collectors;

public class EtapeMapper {

    public static EtapeResponse toResponse(Etape etape) {
        EtapeResponse response = new EtapeResponse();
        response.setId(etape.getIdEtape());
        response.setNumeroEtape(etape.getNumeroEtape());
        response.setInstruction(etape.getInstruction());

        if (etape.getRecette() != null) {
            response.setRecetteId(etape.getRecette().getIdRecette());
        }

        return response;
    }

    public static List<EtapeResponse> toResponseList(List<Etape> etapes) {
        return etapes.stream()
                .map(EtapeMapper::toResponse)
                .collect(Collectors.toList());
    }
}
