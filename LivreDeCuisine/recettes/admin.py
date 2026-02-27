from django.contrib import admin
from .models import Categorie, Recette, Etape, Ingredient, RecetteIngredient, Utilisateur

admin.site.register(Categorie)
admin.site.register(Recette)
admin.site.register(Etape)
admin.site.register(Ingredient)
admin.site.register(RecetteIngredient)
admin.site.register(Utilisateur)

