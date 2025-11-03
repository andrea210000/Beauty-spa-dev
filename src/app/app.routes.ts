import { Routes } from '@angular/router';
import { HomeComponent } from '../app/views/home-component/home-component';

export const routes: Routes = [
  // carga HomeComponent en la ruta raíz
  { path: '', component: HomeComponent, pathMatch: 'full' },

  // otras rutas (ejemplo)
  // { path: 'about', component: AboutComponent },

  // fallback: redirige cualquier ruta no encontrada a Home
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
