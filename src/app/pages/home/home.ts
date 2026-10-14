import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NoticiaCardComponent } from '../../components/noticia-card/noticia-card';
import { NoticiasService } from '../../services/noticias.service';

/** Inicio: mensaje de bienvenida y noticias marcadas como destacadas. */
@Component({
  selector: 'app-home',
  imports: [RouterLink, NoticiaCardComponent],
  templateUrl: './home.html',
})
export class HomeComponent {
  protected readonly servicio = inject(NoticiasService);
  protected readonly destacadas = computed(() => this.servicio.noticias().filter((noticia) => noticia.destacada));
}
