# Patitas que Sanan

Historias reales de perros rescatados que hoy acompañan a pacientes oncológicos en hospitales. Una plataforma para conocer sus viajes de rehabilitación y el impacto que dejan.

**[→ Entra aquí](https://karenlorena00.github.io/entrega-previa-3/)**

## ¿Qué es esto?

Es la entrega final de un proyecto del Politécnico Grancolombiano. Empezó con unos mockups en Figma, pasó a ser un sitio con HTML, CSS y JavaScript, y ahora es una app en **Angular** con componentes que se reutilizan, datos centralizados, y publicación automática cada vez que subes código a GitHub.

## Qué puedes hacer

- **Inicio:** ve las 3 historias destacadas al llegar.
- **Noticias:** listado de todos los casos, con buscador en vivo. Puedes agregar nuevas historias y eliminar las que quieras.
- **Detalle de una historia:** lee la historia completa de cada perro.
- **Favoritos:** marca historias con el corazón para guardarlas. Se quedan guardadas aunque cierres el navegador.
- **Contacto:** formulario para escribir a la fundación (con validaciones).
- **Sobre nosotros:** quiénes son y qué hacen.
- Funciona en celular, tablet y desktop.

## Cómo está organizado

```
src/app/
├── models/           tipos de datos (qué es una noticia)
├── services/         la lógica compartida (favoritos, noticias)
├── components/       piezas que se reutilizan (encabezado, tarjeta)
├── pages/            las 6 vistas principales
├── app.routes.ts     dónde va cada ruta
└── app.config.ts     configuración global

public/
├── data/noticias.json    las 6 historias
└── img/                  las fotos

docs/
├── Entrega Final.docx    el documento
├── guion-video.md        ideas para grabar
└── mockups/              los diseños originales
```

## Lo que cambió vs. HTML puro

| Antes (HTML + JS) | Ahora (Angular) |
|---|---|
| 6 archivos HTML con encabezado copiado en cada uno | 1 HTML + componentes reutilizables |
| Tarjeta de noticia pintada 3 veces con código repetido | Componente `noticia-card` usado 3 veces |
| JavaScript manipulando DOM: `innerHTML = '<div>...'` | Binding: `{{ noticia.nombre }}` |
| Favoritos: función `obtenerFavoritos()` suelta | Servicio `FavoritosService` + signals (se actualiza sola) |
| Navegar entre páginas: links `.html` | Rutas Angular (sin recargar) |
| Mini CRUD: código escrito pero no conectado | CRUD funcional: crear y eliminar noticias de verdad |

## Cómo ejecutar en tu máquina

Necesitas Node 20+ y npm instalados.

```bash
npm install              # instala las dependencias

npm start                # ejecuta en http://localhost:4200
                         # verás cambios al instante cuando edites

npm run build            # compila para producción
                         # genera la carpeta dist/
```

Las rutas tendrán un `#/` en la URL (ej: `localhost:4200/#/noticias`). Eso es normal, permite que funcione bien en GitHub Pages.

## Despliegue

Está configurado para publicarse automáticamente en GitHub Pages. Cada vez que haces push a `main`:

1. GitHub Actions ejecuta el workflow
2. Compila la app con `ng build`
3. Publica en https://karenlorena00.github.io/entrega-previa-3/

No tienes que hacer nada manual.

## Créditos

- Fotos de Eva y Kloey: las autoras
- Fotos de Oreo, Niko, Toby y Zoe: [Dog CEO API](https://dog.ceo/dog-api/)
