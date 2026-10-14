import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NoticiaCardComponent } from '../../components/noticia-card/noticia-card';
import { NoticiasService } from '../../services/noticias.service';

/**
 * Listado de noticias con buscador.
 */
@Component({
  selector: 'app-noticias',
  imports: [FormsModule, NoticiaCardComponent],
  templateUrl: './noticias.html',
})
export class NoticiasComponent {
  protected readonly servicio = inject(NoticiasService);

  protected readonly filtro = signal('');

  protected readonly filtradas = computed(() => {
    const texto = this.filtro().trim().toLowerCase();
    return this.servicio
      .noticias()
      .filter((n) => !texto || `${n.nombre} ${n.raza} ${n.resumen}`.toLowerCase().includes(texto));
  });
}
