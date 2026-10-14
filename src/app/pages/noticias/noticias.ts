import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { NoticiaCardComponent } from '../../components/noticia-card/noticia-card';
import { NoticiasService } from '../../services/noticias.service';

/**
 * Listado completo con buscador y mini CRUD:
 * crear (formulario con ngModel) y eliminar (evento de la tarjeta).
 */
@Component({
  selector: 'app-noticias',
  imports: [FormsModule, NoticiaCardComponent],
  templateUrl: './noticias.html',
})
export class NoticiasComponent {
  protected readonly servicio = inject(NoticiasService);

  /** Texto del buscador (two-way binding con [(ngModel)]). */
  protected readonly filtro = signal('');

  protected readonly filtradas = computed(() => {
    const texto = this.filtro().trim().toLowerCase();
    return this.servicio
      .noticias()
      .filter((n) => !texto || `${n.nombre} ${n.raza} ${n.resumen}`.toLowerCase().includes(texto));
  });

  /** Campos del formulario "Nueva noticia". */
  protected nueva = { nombre: '', raza: '', imagen: '', resumen: '', contenido: '' };
  protected creada = signal(false);

  protected crear(form: NgForm): void {
    const nombre = this.nueva.nombre.trim();
    const raza = this.nueva.raza.trim();
    const resumen = this.nueva.resumen.trim();
    if (form.invalid || !nombre || !raza || !resumen) return;

    // Cada línea en blanco separa un párrafo; si no hay contenido se usa el resumen.
    const parrafos = this.nueva.contenido
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean);

    this.servicio.crear({
      nombre,
      raza,
      resumen,
      imagen: this.nueva.imagen.trim(),
      contenido: parrafos.length ? parrafos : [resumen],
    });

    form.resetForm({ nombre: '', raza: '', imagen: '', resumen: '', contenido: '' });
    this.creada.set(true);
  }

  protected eliminar(id: number): void {
    if (confirm('¿Seguro que deseas eliminar esta noticia?')) this.servicio.eliminar(id);
  }
}
