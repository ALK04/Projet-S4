package org.recettes.api.dto.response.etape;

public class EtapeResponse {
    private Long id;
    private Integer numeroEtape;
    private String instruction;
    private Long recetteId;

    // Getters / Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Integer getNumeroEtape() { return numeroEtape; }
    public void setNumeroEtape(Integer numeroEtape) { this.numeroEtape = numeroEtape; }

    public String getInstruction() { return instruction; }
    public void setInstruction(String instruction) { this.instruction = instruction; }

    public Long getRecetteId() { return recetteId; }
    public void setRecetteId(Long recetteId) { this.recetteId = recetteId; }
}
