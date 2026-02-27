package org.recettes.api.controller;

import org.recettes.api.dto.request.recetteingredient.CreateRecetteIngredientRequest;
import org.recettes.api.dto.request.recetteingredient.UpdateRecetteIngredientRequest;
import org.recettes.api.dto.response.recetteingredient.RecetteIngredientResponse;
import org.recettes.api.service.RecetteIngredientService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recette-ingredients")
public class RecetteIngredientController {

    private final RecetteIngredientService service;

    public RecetteIngredientController(RecetteIngredientService service) {
        this.service = service;
    }

    @GetMapping("/recette/{idRecette}")
    public List<RecetteIngredientResponse> getByRecette(@PathVariable Long idRecette) {
        return service.getByRecette(idRecette);
    }

    @GetMapping("/{id}")
    public RecetteIngredientResponse getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PostMapping
    public RecetteIngredientResponse create(@RequestBody CreateRecetteIngredientRequest request) {
        return service.create(request);
    }

    @PutMapping("/{id}")
    public RecetteIngredientResponse update(@PathVariable Long id, @RequestBody UpdateRecetteIngredientRequest request) {
        return service.update(id, request);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
