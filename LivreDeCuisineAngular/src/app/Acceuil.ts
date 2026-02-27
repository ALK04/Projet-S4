import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  template: `
    <h1>Bienvenue sur l'accueil</h1>
    <a routerLink="/">Accueil</a> <br>
    <a routerLink="/Acceuil2">Accueil2</a>
    <router-outlet />
    <h2>Résultat API :</h2>
    <pre>{{ recettes | json }}</pre>
  `
})

export class Acceuil implements OnInit {
  recettes: any;
  constructor(private api: ApiService) {}

  // 'ngOnInit' est une méthode du cycle de vie, appelée après la création du composant
  ngOnInit() {
    this.api.getRecettes().subscribe({
      next: (data) => {
        console.log('Réponse API:', data);
        this.recettes = data;
      },
      error: (err) => {
        console.error('Erreur API:', err);
      }
    });
  }
}
