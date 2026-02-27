package org.recettes.api.model;

import jakarta.persistence.*;

@Entity
@Table(name = "recette")
public class Recette {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_recette")
    private Long idRecette;

    @Column(name = "titre", length = 100, nullable = false)
    private String titre;

    @Column(name = "description")
    private String description;

    // ✅ Nouvelle colonne pour l'URL de l'image
    @Column(name = "image_url", length = 255)
    private String imageUrl;

    @ManyToOne
    @JoinColumn(name = "id_utilisateur", referencedColumnName = "id_utilisateur")
    private Utilisateur utilisateur;

    @ManyToOne
    @JoinColumn(name = "id_categorie", referencedColumnName = "id_categorie")
    private Categorie categorie;

    // Getters et setters
    public Long getIdRecette() { return idRecette; }
    public void setIdRecette(Long idRecette) { this.idRecette = idRecette; }

    public String getTitre() { return titre; }
    public void setTitre(String titre) { this.titre = titre; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public Utilisateur getUtilisateur() { return utilisateur; }
    public void setUtilisateur(Utilisateur utilisateur) { this.utilisateur = utilisateur; }

    public Categorie getCategorie() { return categorie; }
    public void setCategorie(Categorie categorie) { this.categorie = categorie; }
}
