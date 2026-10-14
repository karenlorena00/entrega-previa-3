import { DatePipe } from '@angular/common';
import { Component, computed, effect, inject, input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { FavoritosService } from '../../services/favoritos.service';
import { NoticiasService } from '../../services/noticias.service';

/** Detalle de una noticia. El parámetro :id de la ruta llega como input (withComponentInputBinding). */
@Component({
  selector: 'app-detalle',
  imports: [RouterLink, DatePipe],
  templateUrl: './detalle.html',
})
export class DetalleComponent {
  protected readonly servicio = inject(NoticiasService);
  protected readonly favoritos = inject(FavoritosService);
  private readonly titulo = inject(Title);

  readonly id = input.required<string>();

  protected readonly noticia = computed(() => this.servicio.obtenerPorId(Number(this.id())));

  constructor() {
    effect(() => {
      const noticia = this.noticia();
      this.titulo.setTitle(noticia ? `Patitas que Sanan - ${noticia.nombre}` : 'Patitas que Sanan - Noticia');
    });
  }
}
