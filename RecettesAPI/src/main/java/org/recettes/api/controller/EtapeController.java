package org.recettes.api.controller;

import org.recettes.api.dto.request.etape.CreateEtapeRequest;
import org.recettes.api.dto.request.etape.UpdateEtapeRequest;
import org.recettes.api.dto.response.etape.EtapeResponse;
import org.recettes.api.service.EtapeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/etapes")
public class EtapeController {

    private final EtapeService service;

    public EtapeController(EtapeService service) {
        this.service = service;
    }

    @GetMapping("/recette/{idRecette}")
    public List<EtapeResponse> getByRecette(@PathVariable Long idRecette) {
        return service.getByRecette(idRecette);
    }

    @GetMapping("/{id}")
    public EtapeResponse getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PostMapping
    public EtapeResponse create(@RequestBody CreateEtapeRequest request) {
        return service.create(request);
    }

    @PutMapping("/{id}")
    public EtapeResponse update(@PathVariable Long id, @RequestBody UpdateEtapeRequest request) {
        return service.update(id, request);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
