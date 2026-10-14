import { DatePipe } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Noticia } from '../../models/noticia';
import { FavoritosService } from '../../services/favoritos.service';

/**
 * Tarjeta reutilizable de una noticia (Home, Listado y Favoritos).
 * - @Input  noticia / mostrarEliminar  (property binding desde el padre)
 * - @Output eliminar                   (event binding hacia el padre)
 */
@Component({
  selector: 'app-noticia-card',
  imports: [RouterLink, DatePipe],
  templateUrl: './noticia-card.html',
})
export class NoticiaCardComponent {
  protected readonly favoritos = inject(FavoritosService);

  readonly noticia = input.required<Noticia>();
  readonly mostrarEliminar = input(false);
  readonly eliminar = output<number>();

  protected alternarFavorito(): void {
    this.favoritos.alternar(this.noticia().id);
  }
}
