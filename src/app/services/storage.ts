/** Utilidades mínimas para leer/guardar JSON en localStorage sin romper la app si falla. */

export const STORAGE_KEYS = {
  FAVORITOS: 'pqs_favoritos',
  NOTICIAS_EXTRA: 'pqs_noticias_extra',
  NOTICIAS_ELIMINADAS: 'pqs_noticias_eliminadas',
} as const;

export function leerJSON<T>(clave: string, valorPorDefecto: T): T {
  try {
    const valor = localStorage.getItem(clave);
    return valor ? (JSON.parse(valor) as T) : valorPorDefecto;
  } catch (error) {
    console.error(`No se pudo leer "${clave}" de localStorage`, error);
    return valorPorDefecto;
  }
}

export function guardarJSON(clave: string, valor: unknown): void {
  try {
    localStorage.setItem(clave, JSON.stringify(valor));
  } catch (error) {
    console.error(`No se pudo guardar "${clave}" en localStorage`, error);
  }
}
