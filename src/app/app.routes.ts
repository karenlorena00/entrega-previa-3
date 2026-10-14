import { Routes } from '@angular/router';

import { ContactoComponent } from './pages/contacto/contacto';
import { DetalleComponent } from './pages/detalle/detalle';
import { FavoritosComponent } from './pages/favoritos/favoritos';
import { HomeComponent } from './pages/home/home';
import { NoticiasComponent } from './pages/noticias/noticias';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros';

/** Rutas de la aplicación (equivalen a las 6 páginas HTML de la Entrega 2). */
export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Patitas que Sanan - Inicio' },
  { path: 'noticias', component: NoticiasComponent, title: 'Patitas que Sanan - Noticias' },
  { path: 'noticias/:id', component: DetalleComponent },
  { path: 'favoritos', component: FavoritosComponent, title: 'Patitas que Sanan - Favoritos' },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent, title: 'Patitas que Sanan - Sobre nosotros' },
  { path: 'contacto', component: ContactoComponent, title: 'Patitas que Sanan - Contacto' },
  { path: '**', redirectTo: '' },
];
