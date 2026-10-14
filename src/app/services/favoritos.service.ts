import { Injectable, signal } from '@angular/core';

import { guardarJSON, leerJSON, STORAGE_KEYS } from './storage';

/** Favoritos del usuario, persistidos en localStorage. Expone una señal para que la UI se actualice sola. */
@Injectable({ providedIn: 'root' })
export class FavoritosService {
  private readonly _ids = signal<number[]>(leerJSON<number[]>(STORAGE_KEYS.FAVORITOS, []));

  /** Ids favoritos (solo lectura). */
  readonly ids = this._ids.asReadonly();

  esFavorito(id: number): boolean {
    return this._ids().includes(id);
  }

  /** Agrega o quita el id de favoritos y devuelve el nuevo estado. */
  alternar(id: number): boolean {
    const nuevos = this.esFavorito(id) ? this._ids().filter((favId) => favId !== id) : [...this._ids(), id];
    this.actualizar(nuevos);
    return nuevos.includes(id);
  }

  quitar(id: number): void {
    if (this.esFavorito(id)) this.actualizar(this._ids().filter((favId) => favId !== id));
  }

  private actualizar(ids: number[]): void {
    this._ids.set(ids);
    guardarJSON(STORAGE_KEYS.FAVORITOS, ids);
  }
}
