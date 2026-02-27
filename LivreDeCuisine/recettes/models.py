from django.db import models


class Categorie(models.Model):
    id_categorie = models.BigAutoField(primary_key=True)
    nom_categorie = models.CharField(max_length=50)

    class Meta:
        db_table = 'categorie'
        managed = False

    def __str__(self):
        return self.nom_categorie


class Utilisateur(models.Model):
    id_utilisateur = models.BigAutoField(primary_key=True)
    nom_utilisateur = models.CharField(max_length=50)
    adresse_electronique = models.CharField(max_length=100, blank=True, null=True)
    mot_de_passe = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        db_table = 'utilisateur'
        managed = False

    def __str__(self):
        return self.nom_utilisateur



class Recette(models.Model):
    id_recette = models.BigAutoField(primary_key=True)
    titre = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    image_url = models.CharField(max_length=255, blank=True, null=True)  # ✅ ajout

    id_utilisateur = models.ForeignKey(
        Utilisateur,
        on_delete=models.SET_NULL,
        db_column='id_utilisateur',
        blank=True,
        null=True
    )
    id_categorie = models.ForeignKey(
        Categorie,
        on_delete=models.SET_NULL,
        db_column='id_categorie',
        blank=True,
        null=True
    )

    class Meta:
        db_table = 'recette'
        managed = False


    def __str__(self):
        return self.titre


class Etape(models.Model):
    id_etape = models.BigAutoField(primary_key=True)
    id_recette = models.ForeignKey(
        Recette,
        on_delete=models.CASCADE,
        db_column='id_recette',
        blank=True,
        null=True
    )
    numero_etape = models.BigIntegerField(blank=True, null=True)
    instruction = models.TextField(blank=True, null=True)

    class Meta:
        db_table = 'etape'
        ordering = ['id_recette', 'numero_etape']
        managed = False

    def __str__(self):
        return f"Étape {self.numero_etape} - {self.id_recette}"


class Ingredient(models.Model):
    id_ingredient = models.BigAutoField(primary_key=True)
    nom_ingredient = models.CharField(max_length=100)

    class Meta:
        db_table = 'ingredient'
        managed = False

    def __str__(self):
        return self.nom_ingredient


class RecetteIngredient(models.Model):
    id = models.BigAutoField(primary_key=True)
    id_recette = models.ForeignKey(
        Recette,
        on_delete=models.CASCADE,
        db_column='id_recette'
    )
    id_ingredient = models.ForeignKey(
        Ingredient,
        on_delete=models.CASCADE,
        db_column='id_ingredient'
    )
    quantite = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        db_table = 'recette_ingredient'
        unique_together = (('id_recette', 'id_ingredient'),)
        managed = False

    def __str__(self):
        return f"{self.id_ingredient} dans {self.id_recette}"
