/**
 * QA de rotas: status HTTP, links internos, imagens, links de WhatsApp,
 * formulários, metadata (title/description/canonical/OG) e JSON-LD válido.
 *
 * Uso: npm run qa:routes            (servidor em :3000)
 *      BASE_URL=http://localhost:3100 npm run qa:routes
 */
const BASE = process.env.BASE_URL ?? "http://localhost:3000";

const routes = [
  "/",
  "/o-espaco",
  "/terapeutas",
  "/terapeutas/babi",
  "/terapeutas/luana",
  "/terapeutas/mily",
  "/terapeutas/adriana",
  "/terapeutas/manu",
  "/terapeutas/mariah",
  "/terapeutas/maya",
  "/experiencias",
  "/experiencias/massagem-tantrica",
  "/experiencias/massagem-relaxante",
  "/experiencias/experiencia-sensorial",
  "/como-funciona",
  "/galeria",
  "/trabalhe-conosco",
  "/aluguel-de-salas",
  "/contato",
  "/sitemap.xml",
  "/robots.txt",
];

const attr = (html, tag, name, value, key) => {
  const re = new RegExp(`<${tag}\\b[^>]*\\b${name}=["']${value}["'][^>]*>`, "gi");
  const found = html.match(re) ?? [];
  return found.map((m) => (m.match(new RegExp(`\\b${key}=["']([^"']*)["']`, "i")) ?? [])[1]).filter(Boolean);
};

const statusCache = new Map();
async function status(url) {
  if (statusCache.has(url)) return statusCache.get(url);
  const res = await fetch(url, { method: "GET", redirect: "manual" });
  statusCache.set(url, res.status);
  return res.status;
}

let failures = 0;
const fail = (route, message) => {
  failures += 1;
  console.log(`  !! ${route}: ${message}`);
};

for (const route of routes) {
  const res = await fetch(BASE + route);
  const html = await res.text();
  console.log(`${res.status === 200 ? "ok" : "!!"} ${res.status} ${route}`);
  if (res.status !== 200) { failures += 1; continue; }
  if (!route.endsWith(".xml") && !route.endsWith(".txt")) {
    // Metadata
    const title = (html.match(/<title>([^<]*)<\/title>/i) ?? [])[1];
    if (!title || title.includes("Create Next App")) fail(route, "title ausente/genérico");
    if (!attr(html, "meta", "name", "description", "content")[0]) fail(route, "description ausente");
    const canonical = attr(html, "link", "rel", "canonical", "href")[0];
    if (!canonical) fail(route, "canonical ausente");
    for (const p of ["og:title", "og:description", "og:image", "og:url"]) {
      if (!attr(html, "meta", "property", p, "content")[0]) fail(route, `${p} ausente`);
    }
    if (!attr(html, "meta", "name", "twitter:card", "content")[0]) fail(route, "twitter:card ausente");

    // JSON-LD válido
    const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
    if (blocks.length === 0) fail(route, "sem JSON-LD");
    for (const [, json] of blocks) {
      try { JSON.parse(json); } catch { fail(route, "JSON-LD inválido"); }
    }

    // Links internos
    const hrefs = [...new Set([...html.matchAll(/href="([^"#]+)(#[^"]*)?"/g)].map((m) => m[1].replace(/&amp;/g, "&")))];
    for (const href of hrefs) {
      if (href.startsWith("/") && !href.startsWith("/_next")) {
        const st = await status(BASE + href);
        if (st !== 200) fail(route, `link ${href} → ${st}`);
      } else if (href.startsWith("https://wa.me/")) {
        if (!/^https:\/\/wa\.me\/\d{10,15}(\?text=.+)?$/.test(href)) fail(route, `WhatsApp malformado: ${href.slice(0, 60)}`);
      }
    }
    if (!hrefs.some((h) => h.startsWith("https://wa.me/"))) fail(route, "nenhum CTA de WhatsApp");

    // Imagens
    const unescape = (v) => v.replace(/&amp;/g, "&");
    const srcs = [...new Set([...html.matchAll(/<img[^>]*\bsrc="([^"]+)"/g)].map((m) => unescape(m[1])))];
    for (const src of srcs) {
      const url = src.startsWith("/") ? BASE + src : src;
      const st = await status(url);
      if (st !== 200) fail(route, `imagem ${src} → ${st}`);
    }
    const noAlt = [...html.matchAll(/<img(?![^>]*\balt=)[^>]*>/g)].length;
    if (noAlt) fail(route, `${noAlt} imagem(ns) sem alt`);

    // Formulário
    if (route === "/trabalhe-conosco") {
      const fields = ["nome", "telefone", "instagram", "experiencia", "mensagem"];
      for (const f of fields) if (!html.includes(`name="${f}"`)) fail(route, `campo ${f} ausente`);
      if (!/<button[^>]*type="submit"/.test(html)) fail(route, "botão submit ausente");
    }
  }
}

// 404 real para slug inexistente
const nf = await fetch(BASE + "/terapeutas/nao-existe");
console.log(`${nf.status === 404 ? "ok" : "!!"} ${nf.status} /terapeutas/nao-existe (esperado 404)`);
if (nf.status !== 404) failures += 1;

console.log(failures ? `\n${failures} problema(s)` : "\nTodas as rotas ok");
process.exit(failures ? 1 : 0);
