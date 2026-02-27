package org.recettes.api.controller;

import org.recettes.api.dto.request.utilisateur.CreateUtilisateurRequest;
import org.recettes.api.dto.request.utilisateur.UpdateUtilisateurRequest;
import org.recettes.api.dto.response.utilisateur.UtilisateurResponse;
import org.recettes.api.service.UtilisateurService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/utilisateurs")
public class UtilisateurController {

    private final UtilisateurService service;

    public UtilisateurController(UtilisateurService service) {
        this.service = service;
    }

    @GetMapping
    public List<UtilisateurResponse> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public UtilisateurResponse getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PostMapping
    public UtilisateurResponse create(@RequestBody CreateUtilisateurRequest request) {
        return service.create(request);
    }

    @PutMapping("/{id}")
    public UtilisateurResponse update(@PathVariable Long id, @RequestBody UpdateUtilisateurRequest request) {
        return service.update(id, request);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
