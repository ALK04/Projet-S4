import { Component, signal } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-Acceuil2',
  imports: [RouterLink, RouterOutlet],
  /*  templateUrl: './app.html',
    styleUrl: './app.css'*/
  template: `
    <h1>Bienvenue sur l'acceuil222222</h1>
    <a routerLink="/">Acceuil</a> <br>
    <a routerLink="/Acceuil2">Acceuil2</a>
    <router-outlet />
    `
})
export class Acceuil2 {}
