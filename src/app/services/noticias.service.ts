import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';

import { Noticia } from '../models/noticia';
import { FavoritosService } from './favoritos.service';
import { guardarJSON, leerJSON, STORAGE_KEYS } from './storage';

/** Datos de un formulario de alta (el servicio completa id, fecha y destacada). */
export type NuevaNoticia = Pick<Noticia, 'nombre' | 'raza' | 'imagen' | 'resumen' | 'contenido'>;

/**
 * Fuente única de noticias: combina data/noticias.json con las noticias creadas por el usuario
 * (localStorage) y descarta las eliminadas. Implementa el mini CRUD: listar, leer, crear y eliminar.
 */
@Injectable({ providedIn: 'root' })
export class NoticiasService {
  private readonly http = inject(HttpClient);
  private readonly favoritos = inject(FavoritosService);

  private readonly base = signal<Noticia[]>([]);
  private readonly extra = signal<Noticia[]>(leerJSON<Noticia[]>(STORAGE_KEYS.NOTICIAS_EXTRA, []));
  private readonly eliminadas = signal<number[]>(leerJSON<number[]>(STORAGE_KEYS.NOTICIAS_ELIMINADAS, []));

  readonly cargando = signal(true);
  readonly error = signal(false);

  /** Noticias visibles: base + creadas por el usuario, menos las eliminadas. */
  readonly noticias = computed(() =>
    [...this.base(), ...this.extra()].filter((noticia) => !this.eliminadas().includes(noticia.id)),
  );

  constructor() {
    this.http.get<Noticia[]>('data/noticias.json').subscribe({
      next: (datos) => {
        this.base.set(datos);
        this.cargando.set(false);
      },
      error: (error) => {
        console.error('No se pudieron cargar las noticias', error);
        this.error.set(true);
        this.cargando.set(false);
      },
    });
  }

  obtenerPorId(id: number): Noticia | undefined {
    return this.noticias().find((noticia) => noticia.id === id);
  }

  crear(datos: NuevaNoticia): Noticia {
    const noticia: Noticia = {
      ...datos,
      // Date.now() evita repetir ids aunque se hayan eliminado noticias antes.
      id: Date.now(),
      fecha: new Date().toISOString().slice(0, 10),
      destacada: false,
    };
    const extra = [...this.extra(), noticia];
    this.extra.set(extra);
    guardarJSON(STORAGE_KEYS.NOTICIAS_EXTRA, extra);
    return noticia;
  }

  eliminar(id: number): void {
    if (this.extra().some((noticia) => noticia.id === id)) {
      // Las creadas por el usuario se borran de localStorage.
      const extra = this.extra().filter((noticia) => noticia.id !== id);
      this.extra.set(extra);
      guardarJSON(STORAGE_KEYS.NOTICIAS_EXTRA, extra);
    } else if (!this.eliminadas().includes(id)) {
      // Las del JSON base no se pueden borrar del archivo: se marcan como eliminadas.
      const eliminadas = [...this.eliminadas(), id];
      this.eliminadas.set(eliminadas);
      guardarJSON(STORAGE_KEYS.NOTICIAS_ELIMINADAS, eliminadas);
    }
    this.favoritos.quitar(id);
  }
}
