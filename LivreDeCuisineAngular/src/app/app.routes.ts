import { Routes } from '@angular/router';
import { Acceuil } from './Acceuil';
import { Acceuil2 } from './Acceuil2';

export const routes: Routes = [
  {
    path:'',
    component:Acceuil
  },
  {
    path:'Acceuil2',
    component:Acceuil2
  },
];
