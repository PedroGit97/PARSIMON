const articles = [
  {
    id: "inflacion-global",
    title: "El futuro de la inflación global: cambios estructurales",
    date: "2023-10-24",
    author: "Redacción",
    category: "finanzas",
    excerpt: "Cambios en la inflación global, desglobalización y efectos en políticas fiscales.",
    url: "./pages/articulo.html"
  }
];

function byDateDesc(a, b) {
  return new Date(b.date) - new Date(a.date);
}

function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}

function renderArticles(list, container, limit) {
  const items = list.sort(byDateDesc).slice(0, limit ?? list.length);
  if (!items.length) {
    container.innerHTML = `
      <div class="border border-[var(--border-subtle)] rounded-sm p-12 text-center">
        <p class="text-sm font-black uppercase tracking-[0.3em] text-subtle-grey">Sin artículos publicados</p>
        <p class="mt-4 text-lg text-subtle-grey">Próximamente se publicarán nuevos análisis.</p>
      </div>`;
    return;
  }
  container.innerHTML = items
    .map(
      (a) => `
      <article class="group" itemscope itemtype="https://schema.org/BlogPosting">
        <div class="flex flex-col gap-8">
          <div class="flex items-center gap-4 text-xs font-black text-subtle-grey uppercase tracking-[0.2em]">
            <time datetime="${a.date}" itemprop="datePublished">${formatDate(a.date)}</time>
            <span aria-hidden="true" class="opacity-30">•</span>
            <span itemprop="author" itemscope itemtype="https://schema.org/Person">
              <span itemprop="name">${a.author}</span>
            </span>
          </div>
          <a class="block no-underline" href="${a.url}" itemprop="url">
            <h2 class="article-title text-4xl md:text-5xl font-bold leading-[1.2] tracking-tight group-hover:text-subtle-grey transition-colors duration-300" itemprop="headline">
              ${a.title}
            </h2>
          </a>
          <p class="text-[var(--text-main)] text-xl leading-relaxed max-w-3xl opacity-90" itemprop="description">
            ${a.excerpt}
          </p>
          <div class="mt-4">
            <a class="inline-flex items-center text-sm font-black text-[var(--text-main)] uppercase tracking-[0.25em] border-b-[3px] border-black-pure dark:border-porcelain pb-1 transition-all duration-500 hover:pb-3 hover:translate-x-2 hover:opacity-70 group" href="${a.url}">
              Leer análisis completo <span aria-hidden="true" class="material-symbols-outlined text-xl ml-2 transition-transform duration-500 group-hover:translate-x-2">arrow_right_alt</span>
            </a>
          </div>
        </div>
      </article>`
    )
    .join("\n");
}

function renderIndex() {
  const container = document.querySelector("[data-articles-index]");
  if (!container) return;
  renderArticles(articles, container, 5);
}

function renderCategory() {
  const container = document.querySelector("[data-articles-category]");
  if (!container) return;
  const category = container.getAttribute("data-category");
  const filtered = articles.filter((a) => a.category === category);
  renderArticles(filtered, container);
}

window.addEventListener("DOMContentLoaded", () => {
  renderIndex();
  renderCategory();
});

