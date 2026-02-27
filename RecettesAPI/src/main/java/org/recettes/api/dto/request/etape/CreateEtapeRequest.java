package org.recettes.api.dto.request.etape;

public class CreateEtapeRequest {
    private Long recetteId;
    private Integer numeroEtape;
    private String instruction;

    public Long getRecetteId() { return recetteId; }
    public void setRecetteId(Long recetteId) { this.recetteId = recetteId; }

    public Integer getNumeroEtape() { return numeroEtape; }
    public void setNumeroEtape(Integer numeroEtape) { this.numeroEtape = numeroEtape; }

    public String getInstruction() { return instruction; }
    public void setInstruction(String instruction) { this.instruction = instruction; }
}
