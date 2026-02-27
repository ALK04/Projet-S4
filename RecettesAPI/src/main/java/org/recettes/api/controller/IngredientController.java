package org.recettes.api.controller;

import org.recettes.api.dto.request.ingredient.CreateIngredientRequest;
import org.recettes.api.dto.request.ingredient.UpdateIngredientRequest;
import org.recettes.api.dto.response.ingredient.IngredientResponse;
import org.recettes.api.service.IngredientService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ingredients")
public class IngredientController {

    private final IngredientService service;

    public IngredientController(IngredientService service) {
        this.service = service;
    }

    @GetMapping
    public List<IngredientResponse> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public IngredientResponse getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PostMapping
    public IngredientResponse create(@RequestBody CreateIngredientRequest request) {
        return service.create(request);
    }

    @PutMapping("/{id}")
    public IngredientResponse update(@PathVariable Long id, @RequestBody UpdateIngredientRequest request) {
        return service.update(id, request);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
