package org.recettes.api.service.impl;

import org.recettes.api.dto.request.categorie.CreateCategorieRequest;
import org.recettes.api.dto.request.categorie.UpdateCategorieRequest;
import org.recettes.api.dto.response.categorie.CategorieResponse;
import org.recettes.api.mapper.CategorieMapper;
import org.recettes.api.model.Categorie;
import org.recettes.api.repository.CategorieRepository;
import org.recettes.api.service.CategorieService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategorieServiceImpl implements CategorieService {

    private final CategorieRepository repository;

    public CategorieServiceImpl(CategorieRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<CategorieResponse> getAll() {
        return CategorieMapper.toResponseList(repository.findAll());
    }

    @Override
    public CategorieResponse getById(Long id) {
        Categorie categorie = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Catégorie non trouvée"));
        return CategorieMapper.toResponse(categorie);
    }

    @Override
    public CategorieResponse create(CreateCategorieRequest request) {
        Categorie categorie = new Categorie();
        categorie.setNomCategorie(request.getNom());
        return CategorieMapper.toResponse(repository.save(categorie));
    }

    @Override
    public CategorieResponse update(Long id, UpdateCategorieRequest request) {
        Categorie categorie = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Catégorie non trouvée"));
        categorie.setNomCategorie(request.getNom());
        return CategorieMapper.toResponse(repository.save(categorie));
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
