package org.recettes.api.dto.request.etape;

public class UpdateEtapeRequest {
    private Integer numeroEtape;
    private String instruction;

    public Integer getNumeroEtape() { return numeroEtape; }
    public void setNumeroEtape(Integer numeroEtape) { this.numeroEtape = numeroEtape; }

    public String getInstruction() { return instruction; }
    public void setInstruction(String instruction) { this.instruction = instruction; }
}
