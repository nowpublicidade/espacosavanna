/**
 * QA: verifica overflow horizontal por elemento em todas as rotas públicas,
 * em 375 / 768 / 1024 / 1280 / 1440px, usando o Chrome local via CDP (sem dependências).
 *
 * Uso: npm run qa:overflow  (com `npm run dev` ativo em :3000)
 *      CHROME=/caminho/para/chrome npm run qa:overflow
 */
import { spawn } from "node:child_process";

const CHROME = process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE = process.env.BASE_URL ?? "http://localhost:3000";
const PORT = 9333;

const routes = [
  "/",
  "/o-espaco",
  "/terapeutas",
  "/terapeutas/babi",
  "/experiencias",
  "/experiencias/massagem-tantrica",
  "/como-funciona",
  "/galeria",
  "/trabalhe-conosco",
  "/aluguel-de-salas",
  "/contato",
  "/terapeutas/luana",
  "/experiencias/experiencia-sensorial",
];
const viewports = [
  [375, 812],
  [768, 1024],
  [1024, 800],
  [1280, 800],
  [1440, 900],
];

const chrome = spawn(
  CHROME,
  ["--headless=new", "--disable-gpu", `--remote-debugging-port=${PORT}`, "--user-data-dir=/tmp/savanna-qa-cdp", "about:blank"],
  { stdio: "ignore" },
);
await new Promise((r) => setTimeout(r, 1500));

const targets = await (await fetch(`http://127.0.0.1:${PORT}/json`)).json();
const ws = new WebSocket(targets.find((t) => t.type === "page").webSocketDebuggerUrl);
await new Promise((r) => (ws.onopen = r));

let id = 0;
const pending = new Map();
ws.onmessage = (event) => {
  const message = JSON.parse(event.data);
  if (message.id && pending.has(message.id)) {
    pending.get(message.id)(message);
    pending.delete(message.id);
  }
};
const send = (method, params = {}) =>
  new Promise((resolve) => {
    const current = ++id;
    pending.set(current, resolve);
    ws.send(JSON.stringify({ id: current, method, params }));
  });

// Elementos fixos, carrosséis e o painel do menu são excluídos por desenho.
const check = `(() => {
  const vw = innerWidth;
  const over = [...document.querySelectorAll('body *')]
    .filter((el) => {
      const rect = el.getBoundingClientRect();
      const style = getComputedStyle(el);
      return rect.width > 0 && rect.right > vw + 1 && style.position !== 'fixed'
        && !el.closest('.snap-x') && !el.closest('[data-slot=sheet-content]');
    })
    .slice(0, 4)
    .map((el) => el.tagName + '.' + String(el.className).slice(0, 60) + ' -> ' + Math.round(el.getBoundingClientRect().right));
  return { docW: document.documentElement.scrollWidth, over };
})()`;

let failures = 0;
for (const [width, height] of viewports) {
  await send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: width < 768 });
  for (const route of routes) {
    await send("Page.navigate", { url: BASE + route });
    await new Promise((r) => setTimeout(r, 2500));
    const { result } = await send("Runtime.evaluate", { expression: check, awaitPromise: true, returnByValue: true });
    const { docW, over } = result.result.value;
    const failed = over.length > 0 || docW > width;
    if (failed) failures += 1;
    console.log(`${String(width).padStart(4)}px ${route.padEnd(34)} ${failed ? "!!" : "ok"} docW=${docW}${over.length ? "\n        " + over.join("\n        ") : ""}`);
  }
}

chrome.kill();
process.exit(failures ? 1 : 0);
