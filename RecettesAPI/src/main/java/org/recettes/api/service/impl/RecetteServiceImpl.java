package org.recettes.api.service.impl;

import org.recettes.api.dto.request.recette.CreateRecetteRequest;
import org.recettes.api.dto.request.recette.UpdateRecetteRequest;
import org.recettes.api.dto.response.recette.RecetteResponse;
import org.recettes.api.mapper.RecetteMapper;
import org.recettes.api.model.Categorie;
import org.recettes.api.model.Recette;
import org.recettes.api.model.Utilisateur;
import org.recettes.api.repository.CategorieRepository;
import org.recettes.api.repository.RecetteRepository;
import org.recettes.api.repository.UtilisateurRepository;
import org.recettes.api.service.RecetteService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RecetteServiceImpl implements RecetteService {

    private final RecetteRepository recetteRepository;
    private final UtilisateurRepository utilisateurRepository;
    private final CategorieRepository categorieRepository;


    public RecetteServiceImpl(RecetteRepository recetteRepository,
                              UtilisateurRepository utilisateurRepository,
                              CategorieRepository categorieRepository) {
        this.recetteRepository = recetteRepository;
        this.utilisateurRepository = utilisateurRepository;
        this.categorieRepository = categorieRepository;
    }

    @Override
    public List<RecetteResponse> getAll() {
        return recetteRepository.findAll()
                .stream()
                .map(RecetteMapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    public RecetteResponse getById(Long id) {
        Recette recette = recetteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Recette non trouvée"));
        return RecetteMapper.toResponse(recette);
    }

    @Override
    public RecetteResponse create(CreateRecetteRequest request) {
        Recette recette = new Recette();
        recette.setTitre(request.getTitre());
        recette.setDescription(request.getDescription());
        recette.setImageUrl(request.getImageUrl());

        Utilisateur utilisateur = utilisateurRepository.findById(request.getUtilisateurId())
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        recette.setUtilisateur(utilisateur);

        Categorie categorie = categorieRepository.findById(request.getCategorieId())
                .orElseThrow(() -> new RuntimeException("Catégorie non trouvée"));
        recette.setCategorie(categorie);

        return RecetteMapper.toResponse(recetteRepository.save(recette));
    }

    @Override
    public RecetteResponse update(Long id, UpdateRecetteRequest request) {
        Recette recette = recetteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Recette non trouvée"));

        recette.setTitre(request.getTitre());
        recette.setDescription(request.getDescription());
        recette.setImageUrl(request.getImageUrl());

        if (request.getCategorieId() != null) {
            Categorie categorie = categorieRepository.findById(request.getCategorieId())
                    .orElseThrow(() -> new RuntimeException("Catégorie non trouvée"));
            recette.setCategorie(categorie);
        }

        return RecetteMapper.toResponse(recetteRepository.save(recette));
    }

    @Override
    public void delete(Long id) {
        recetteRepository.deleteById(id);
    }

    @Override
    public List<RecetteResponse> getByUtilisateur(Long idUtilisateur) {
        return recetteRepository.findByUtilisateur_IdUtilisateur(idUtilisateur)
                .stream()
                .map(RecetteMapper::toResponse)
                .collect(Collectors.toList());
    }
}
