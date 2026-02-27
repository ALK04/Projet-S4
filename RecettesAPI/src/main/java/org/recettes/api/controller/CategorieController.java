package org.recettes.api.controller;

import org.recettes.api.dto.request.categorie.CreateCategorieRequest;
import org.recettes.api.dto.request.categorie.UpdateCategorieRequest;
import org.recettes.api.dto.response.categorie.CategorieResponse;
import org.recettes.api.service.CategorieService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class CategorieController {

    private final CategorieService service;

    public CategorieController(CategorieService service) {
        this.service = service;
    }

    @GetMapping
    public List<CategorieResponse> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public CategorieResponse getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PostMapping
    public CategorieResponse create(@RequestBody CreateCategorieRequest request) {
        return service.create(request);
    }

    @PutMapping("/{id}")
    public CategorieResponse update(@PathVariable Long id, @RequestBody UpdateCategorieRequest request) {
        return service.update(id, request);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
