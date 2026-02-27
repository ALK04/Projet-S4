package org.recettes.api.controller;

import org.recettes.api.dto.request.recette.CreateRecetteRequest;
import org.recettes.api.dto.request.recette.UpdateRecetteRequest;
import org.recettes.api.dto.response.recette.RecetteResponse;
import org.recettes.api.service.RecetteService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recettes")
public class RecetteController {

    private final RecetteService recetteService;

    public RecetteController(RecetteService recetteService) {
        this.recetteService = recetteService;
    }

    @GetMapping
    public List<RecetteResponse> getAll() {
        return recetteService.getAll();
    }

    @GetMapping("/{id}")
    public RecetteResponse getById(@PathVariable Long id) {
        return recetteService.getById(id);
    }

    @GetMapping("/utilisateur/{idUtilisateur}")
    public List<RecetteResponse> getByUtilisateur(@PathVariable Long idUtilisateur) {
        return recetteService.getByUtilisateur(idUtilisateur);
    }

    @PostMapping
    public RecetteResponse create(@RequestBody CreateRecetteRequest request) {
        return recetteService.create(request);
    }

    @PutMapping("/{id}")
    public RecetteResponse update(@PathVariable Long id, @RequestBody UpdateRecetteRequest request) {
        return recetteService.update(id, request);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        recetteService.delete(id);
    }
}
