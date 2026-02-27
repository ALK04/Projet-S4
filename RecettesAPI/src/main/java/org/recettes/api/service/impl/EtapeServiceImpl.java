package org.recettes.api.service.impl;

import org.recettes.api.dto.request.etape.CreateEtapeRequest;
import org.recettes.api.dto.request.etape.UpdateEtapeRequest;
import org.recettes.api.dto.response.etape.EtapeResponse;
import org.recettes.api.mapper.EtapeMapper;
import org.recettes.api.model.Etape;
import org.recettes.api.model.Recette;
import org.recettes.api.repository.EtapeRepository;
import org.recettes.api.repository.RecetteRepository;
import org.recettes.api.service.EtapeService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EtapeServiceImpl implements EtapeService {

    private final EtapeRepository repository;
    private final RecetteRepository recetteRepository;

    public EtapeServiceImpl(EtapeRepository repository, RecetteRepository recetteRepository) {
        this.repository = repository;
        this.recetteRepository = recetteRepository;
    }

    @Override
    public List<EtapeResponse> getByRecette(Long recetteId) {
        return EtapeMapper.toResponseList(repository.findByRecetteIdRecette(recetteId));
    }

    @Override
    public EtapeResponse getById(Long id) {
        Etape etape = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Étape non trouvée"));
        return EtapeMapper.toResponse(etape);
    }

    @Override
    public EtapeResponse create(CreateEtapeRequest request) {
        Recette recette = recetteRepository.findById(request.getRecetteId())
                .orElseThrow(() -> new RuntimeException("Recette non trouvée"));

        Etape etape = new Etape();
        etape.setRecette(recette);
        etape.setNumeroEtape(request.getNumeroEtape());
        etape.setInstruction(request.getInstruction());

        return EtapeMapper.toResponse(repository.save(etape));
    }

    @Override
    public EtapeResponse update(Long id, UpdateEtapeRequest request) {
        Etape etape = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Étape non trouvée"));

        etape.setNumeroEtape(request.getNumeroEtape());
        etape.setInstruction(request.getInstruction());

        return EtapeMapper.toResponse(repository.save(etape));
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
