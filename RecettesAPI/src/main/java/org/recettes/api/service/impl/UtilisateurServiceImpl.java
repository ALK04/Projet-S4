package org.recettes.api.service.impl;

import org.recettes.api.dto.request.utilisateur.CreateUtilisateurRequest;
import org.recettes.api.dto.request.utilisateur.UpdateUtilisateurRequest;
import org.recettes.api.dto.response.utilisateur.UtilisateurResponse;
import org.recettes.api.mapper.UtilisateurMapper;
import org.recettes.api.model.Utilisateur;
import org.recettes.api.repository.UtilisateurRepository;
import org.recettes.api.service.UtilisateurService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UtilisateurServiceImpl implements UtilisateurService {

    private final UtilisateurRepository repository;

    public UtilisateurServiceImpl(UtilisateurRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<UtilisateurResponse> getAll() {
        return UtilisateurMapper.toResponseList(repository.findAll());
    }

    @Override
    public UtilisateurResponse getById(Long id) {
        Utilisateur utilisateur = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        return UtilisateurMapper.toResponse(utilisateur);
    }

    @Override
    public UtilisateurResponse create(CreateUtilisateurRequest request) {
        Utilisateur utilisateur = new Utilisateur();
        utilisateur.setNomUtilisateur(request.getNomUtilisateur());
        utilisateur.setAdresseElectronique(request.getAdresseElectronique());

        return UtilisateurMapper.toResponse(repository.save(utilisateur));
    }

    @Override
    public UtilisateurResponse update(Long id, UpdateUtilisateurRequest request) {
        Utilisateur utilisateur = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));

        utilisateur.setNomUtilisateur(request.getNomUtilisateur());
        utilisateur.setAdresseElectronique(request.getAdresseElectronique());

        return UtilisateurMapper.toResponse(repository.save(utilisateur));
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
