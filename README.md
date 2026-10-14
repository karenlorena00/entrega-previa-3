# Patitas que Sanan — Entrega final (Angular)

Plataforma web tipo periódico con noticias sobre **zooterapia**: historias de perros rescatados que, tras un proceso de rehabilitación, brindan apoyo emocional a pacientes oncológicos.

Es la versión final del proyecto del módulo *Desarrollo Front-End* (Politécnico Grancolombiano). Parte de la Entrega Previa 2 (HTML + CSS + JavaScript) y la reconstruye en **Angular 20** con componentes, servicios, enrutamiento y *data binding*.

- **Aplicación desplegada:** https://karenlorena00.github.io/entrega-previa-3/
- **Video explicativo:** [LINK_YOUTUBE]
- **Documento final (APA):** [`docs/Entrega Final.docx`](docs/Entrega%20Final.docx)

## Funcionalidades

- **Inicio:** bienvenida y noticias destacadas.
- **Noticias:** listado completo, buscador (filtro en vivo), **crear** noticias nuevas con un formulario y **eliminar** noticias.
- **Detalle:** historia completa por `id` (ruta `/noticias/:id`).
- **Favoritos:** marcar/quitar con el corazón; se conservan en `localStorage`.
- **Contacto:** formulario reactivo con validaciones (campos obligatorios y correo válido) y mensaje de confirmación.
- **Sobre nosotros:** página institucional.
- Diseño responsive (Figma → CSS).

## Arquitectura

```
src/app/
├── models/noticia.ts               Interfaz Noticia
├── services/
│   ├── noticias.service.ts         Carga data/noticias.json + CRUD (localStorage)
│   ├── favoritos.service.ts        Favoritos persistentes
│   └── storage.ts                  Helpers de localStorage
├── components/
│   ├── header/  footer/            Navegación y pie (compartidos)
│   └── noticia-card/               Tarjeta reutilizable (@Input / @Output)
├── pages/
│   ├── home/  noticias/  detalle/  favoritos/  contacto/  sobre-nosotros/
├── app.routes.ts                   Rutas
└── app.config.ts                   Providers (router, HttpClient, locale es)
public/  data/noticias.json, img/   Datos y fotografías
docs/    Documento APA, guion del video, mockups de Figma
```

### Conceptos de Angular aplicados

| Concepto | Dónde |
|---|---|
| Componentes *standalone* | `components/*`, `pages/*` |
| Interpolación `{{ }}` | tarjetas, detalle |
| Property binding `[src]`, `[class.x]`, `[attr.aria-pressed]` | `noticia-card`, formularios |
| Event binding `(click)`, `(ngSubmit)` | favoritos, eliminar, formularios |
| Two-way binding `[(ngModel)]` | buscador y alta de noticias |
| `@Input` / `@Output` (`input()`, `output()`) | `noticia-card` |
| Control de flujo `@if`, `@for`, `@empty` | todas las vistas |
| Servicios + inyección de dependencias + *signals* | `services/*` |
| Enrutamiento con parámetro (`:id`) | `app.routes.ts`, `detalle` |
| Reactive Forms | `contacto` |
| `HttpClient` | `noticias.service.ts` |

## Ejecutar en local

Requiere Node 20.19+ (o 22/24) y npm.

```bash
npm install
npm start          # http://localhost:4200
npm run build      # compila a dist/
```

## Despliegue

GitHub Pages mediante GitHub Actions (`.github/workflows/deploy.yml`): cada push a `main` compila con `--base-href /entrega-previa-3/` y publica. Las rutas usan `#/` (hash) para que recargar una página interna no genere 404 en Pages.

## Créditos

Las fotografías de Eva y Kloey son de las autoras; Oreo, Niko, Toby y Zoe provienen de la API pública [Dog CEO](https://dog.ceo/dog-api/) con fines académicos. Maquetación original en Figma (`docs/mockups/`).
