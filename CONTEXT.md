# CONTEXT.md

## Estado actual del repo (PARSIMON)

### Estructura
- `index.html` (home, requerido por GitHub Pages)
- `pages/` (todas las páginas internas)
  - `fiscal.html`
  - `financiero.html`
  - `comercial.html`
  - `internacional.html`
  - `sobre-mi.html`
  - `articulo.html` (plantilla/ejemplo)
- `assets/`
  - `js/articles.js` (sistema de artículos)
  - `images/` (imágenes de gráficos/diagramas)
    - `grafico-tendencia.svg`
    - `diagrama-barras.svg`
    - `diagrama-comparativo.svg`

### Sistema de artículos
- Se renderiza desde `assets/js/articles.js`.
- La home muestra solo los **5 más recientes** por fecha.
- Las páginas de categoría muestran **todos** los de su categoría.
- Categorías válidas: `fiscal`, `finanzas`, `comercial`, `internacional`.

#### Formato de artículo en `assets/js/articles.js`
```js
{
  id: "slug-corto",
  title: "Título del artículo",
  date: "YYYY-MM-DD",
  author: "Redacción",
  category: "fiscal|finanzas|comercial|internacional",
  excerpt: "Resumen breve",
  url: "pages/slug.html",
  image: "assets/images/grafico-tendencia.svg",
  imageAlt: "Descripción corta"
}
```

### Rutas y enlaces
- Desde `index.html`:
  - páginas internas: `./pages/*.html`
  - script: `./assets/js/articles.js`
- Desde `pages/*.html`:
  - volver a home: `../index.html`
  - categorías y sobre mí: `./nombre.html`
  - script: `../assets/js/articles.js`

### Sobre mí
- Perfil profesional en `pages/sobre-mi.html`.
- Links de “Sobre mí” ya apuntan a esa página.

### Imágenes de artículos
- Placeholders SVG en `assets/images/`.
- Se usan desde el objeto `image` en `articles.js`.

### Publicación en GitHub Pages
- Requiere `index.html` en raíz.
- `pages/` es solo para internas.
- Workflow: `.github/workflows/static.yml` despliega el repo completo.

### Para agregar un artículo nuevo
1) Crear `pages/<slug>.html`.
2) Agregar entrada en `assets/js/articles.js`.
3) Commit y push.

### Checklist antes de publicar
- `index.html` existe en la raíz (GitHub Pages lo requiere).
- Rutas correctas:
  - Desde `index.html`: `./pages/*.html` y `./assets/js/articles.js`
  - Desde `pages/`: `../index.html` y `../assets/js/articles.js`
- `assets/js/articles.js` incluye el nuevo artículo con `url` y `category` correctos.
- Imágenes referenciadas existen en `assets/images/`.
- Deploy en Actions terminó en verde.

### FAQ rápido de enlaces
- **“Inicio” no vuelve al home:** revisar que sea `../index.html` en páginas internas.
- **Artículo no aparece en la home:** verificar la fecha y que esté entre los 5 más nuevos.
- **Categoría vacía:** confirmar `category` coincide con el `data-category` de la página.

### Comandos git rápidos
```bash
git status
git add -A
git commit -m "mensaje claro"
git pull --rebase origin main
git push origin main
```

### Errores comunes en GitHub Pages
- **404 al abrir la home:** asegurarse de que `index.html` exista en la raíz.
- **Cambios no aparecen:** esperar el deploy, recargar con Ctrl+F5, o abrir en incógnito.
- **Links rotos en páginas internas:** revisar rutas relativas (`../index.html`).

