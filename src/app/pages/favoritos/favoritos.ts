import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NoticiaCardComponent } from '../../components/noticia-card/noticia-card';
import { FavoritosService } from '../../services/favoritos.service';
import { NoticiasService } from '../../services/noticias.service';

/** Noticias guardadas por el usuario; la lista se actualiza sola al quitar un favorito. */
@Component({
  selector: 'app-favoritos',
  imports: [RouterLink, NoticiaCardComponent],
  templateUrl: './favoritos.html',
})
export class FavoritosComponent {
  protected readonly servicio = inject(NoticiasService);
  private readonly favoritos = inject(FavoritosService);

  protected readonly guardadas = computed(() =>
    this.servicio.noticias().filter((noticia) => this.favoritos.ids().includes(noticia.id)),
  );
}
