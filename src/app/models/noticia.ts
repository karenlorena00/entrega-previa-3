/** Una historia de rescate/rehabilitación (misma forma que data/noticias.json). */
export interface Noticia {
  id: number;
  nombre: string;
  raza: string;
  fecha: string; // YYYY-MM-DD
  destacada: boolean;
  imagen: string; // ruta relativa (img/xxx.jpg); vacía si no tiene foto
  resumen: string;
  contenido: string[]; // párrafos del relato
}
