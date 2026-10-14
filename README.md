# 🐾 Patitas que Sanan

> **Historias de resiliencia y amor:** conoce a los perros rescatados que transforman vidas a través de la zooterapia.

<div align="center">

[![Angular 20](https://img.shields.io/badge/Angular-20-dd0031?style=flat-square&logo=angular)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![GitHub Pages](https://img.shields.io/badge/Hosting-GitHub%20Pages-white?style=flat-square&logo=github)](https://pages.github.com)
[![License](https://img.shields.io/badge/License-Educational-blue?style=flat-square)](LICENSE)

**[🌐 Visita la aplicación](https://karenlorena00.github.io/entrega-previa-3/)** • **[📹 Ver video](docs/Entrega%20Final.docx)** • **[📄 Documento APA](docs/Entrega%20Final.docx)**

</div>

---

## 🎯 ¿De qué va esto?

Una plataforma web que comparte las historias de rescate y rehabilitación de perros entrenados en **zooterapia**: animales que brindaron compañía emocional a pacientes oncológicos en hospitales. 

Es la **versión final** del módulo *Desarrollo Front-End* del Politécnico Grancolombiano. Comenzó como mockups en Figma, pasó a HTML + CSS + JavaScript, y ahora es una **aplicación interactiva en Angular** con componentes reutilizables, gestión de datos centralizada y despliegue automático.

## ✨ Características

<table>
  <tr>
    <td width="50%">

### 🏠 Inicio
Bienvenida + 3 historias destacadas para captar atención al llegar.

### 📰 Noticias
- Listado completo de todos los casos
- 🔍 Buscador en **vivo** (escribe, filtra al instante)
- ➕ **Crear** nuevas noticias con formulario
- ❌ **Eliminar** historias (con confirmación)

### ❤️ Favoritos
Marca con el corazón las historias que quieres releer. **Persisten** al cerrar el navegador.

    </td>
    <td width="50%">

### 📖 Detalle
Lee la historia completa de cada perro: quién fue rescatado, cómo se rehabilitó y el impacto que dejó.

### 📞 Contacto
Formulario para escribir a la fundación.
- Validaciones (campos obligatorios, email válido)
- Confirmación al enviar

### ℹ️ Sobre nosotros
La misión y el contexto de la fundación.

    </td>
  </tr>
</table>

📱 **Diseño responsive** — se ve bien en celular, tablet y desktop.

## 🏗️ Cómo está construida

### Estructura de carpetas

```
📁 src/app/
 ├─ 📋 models/
 │  └─ noticia.ts                 Interface: forma de un dato de noticia
 ├─ 🔌 services/
 │  ├─ noticias.service.ts        Lee JSON + CRUD (crear/eliminar)
 │  ├─ favoritos.service.ts       Guarda ❤️ en localStorage
 │  └─ storage.ts                 Helpers para localStorage
 ├─ 🧩 components/
 │  ├─ header/  footer/           Barra y pie (reutilizados)
 │  └─ noticia-card/              Tarjeta 1x, usada 3 veces
 ├─ 📄 pages/
 │  ├─ home/  noticias/  detalle/  favoritos/  contacto/  sobre-nosotros/
 ├─ 🛣️  app.routes.ts             Las 6 rutas + ruta de inicio
 └─ ⚙️  app.config.ts             Configuración (router, HTTP, idioma)
 
 📁 public/
  ├─ data/noticias.json           6 perros + sus historias
  └─ img/                         Fotos de los perros
 
 📁 docs/
  ├─ Entrega Final.docx           Documento APA
  ├─ guion-video.md               Script del video
  └─ mockups/                     Diseños originales en Figma
```

### Angular en acción

Lo que hace **fuerte** a Angular en este proyecto:

| Concepto | Qué hace | Ejemplo |
|---|---|---|
| **Componentes** | Piezas reutilizables | `NoticiaCardComponent` usada 3 veces |
| **Interpolación** `{{ }}` | Muestra datos | `{{ noticia.nombre }}` |
| **Property binding** `[src]` | Asigna propiedades | `[src]="noticia.imagen"` |
| **Event binding** `(click)` | Escucha clics | `(click)="marcarFavorito()"` |
| **Two-way** `[(ngModel)]` | Sincroniza entrada ↔ datos | Buscador en vivo |
| **@Input / @Output** | Padre ↔ Hijo | Tarjeta recibe noticia, avisa al padre |
| **@if, @for, @empty** | Control de flujo | Lista vacía → "No hay favoritos" |
| **Signals** | Datos reactivos | Cambias un favorito, la UI se actualiza sola |
| **Servicios** | Lógica compartida | `NoticiasService`, `FavoritosService` |
| **Rutas** | Navega sin recargar | `/noticias/:id` → detalle dinámico |
| **Reactive Forms** | Formularios inteligentes | Validaciones automáticas en Contacto |

## 🚀 Ejecutar localmente

**Requisitos:** Node 20+ y npm

```bash
# 1️⃣  Instalar dependencias
npm install

# 2️⃣  Correr en desarrollo (auto-reload)
npm start
# → Abre http://localhost:4200 en tu navegador

# 3️⃣  Compilar para producción
npm run build
# → Genera dist/patitas-que-sanan/browser/
```

**Tip:** Al abrir en navegador, si ves una URL con `#/` (ej: `localhost:4200/#/noticias`), eso es normal. Permite que las rutas funcionen correctamente en GitHub Pages sin 404.

---

## 🌍 Despliegue automático

Cada vez que subes a `main`:

```mermaid
git push main → GitHub Actions compila → publica en Pages
```

**Cómo funciona:**
1. Editas código y haces `git push`
2. GitHub Actions ejecuta `.github/workflows/deploy.yml`
3. Compila con `ng build --base-href /entrega-previa-3/`
4. Publica automáticamente en **GitHub Pages**
5. 🎉 Los cambios viven en https://karenlorena00.github.io/entrega-previa-3/

Sin que tengas que compilar ni subir archivos manualmente.

---

## 📸 Créditos

| Foto | Origen |
|---|---|
| 🐕 **Eva** | Foto de las autoras |
| 🐕 **Kloey** | Foto de las autoras |
| 🐕 **Oreo, Niko, Toby, Zoe** | [Dog CEO API](https://dog.ceo/dog-api/) (uso académico) |
| 🎨 **Diseño** | Figma, ver en `docs/mockups/` |

---

## 📚 Referencias

- [Angular Documentation](https://angular.dev)
- [GitHub Pages](https://pages.github.com)
- [Zooterapia en hospitales](https://www.ncbi.nlm.nih.gov/pubmed/) (contexto académico)

---

<div align="center">

**Hecho con ❤️ para el módulo Desarrollo Front-End**

Politécnico Grancolombiano • 2026

</div>
