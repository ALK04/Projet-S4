package org.recettes.api.model;

import jakarta.persistence.*;

@Entity
@Table(name = "etape")
public class Etape {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_etape")
    private Long idEtape;

    @ManyToOne
    @JoinColumn(name = "id_recette", referencedColumnName = "id_recette")
    private Recette recette;

    @Column(name = "numero_etape")
    private Integer numeroEtape;

    @Column(name = "instruction")
    private String instruction;

    // Getters et setters
    public Long getIdEtape() { return idEtape; }
    public void setIdEtape(Long idEtape) { this.idEtape = idEtape; }

    public Recette getRecette() { return recette; }
    public void setRecette(Recette recette) { this.recette = recette; }

    public Integer getNumeroEtape() { return numeroEtape; }
    public void setNumeroEtape(Integer numeroEtape) { this.numeroEtape = numeroEtape; }

    public String getInstruction() { return instruction; }
    public void setInstruction(String instruction) { this.instruction = instruction; }
}
