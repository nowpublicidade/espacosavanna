/**
 * Leitura de variáveis de ambiente tolerante a valores vazios.
 *
 * Plataformas de deploy (Coolify, Docker com ARG sem valor, CI) frequentemente
 * injetam a variável como string vazia em vez de deixá-la ausente. `??` não
 * cobre esse caso — `"" ?? padrão` devolve `""` — e um `new URL("")` quebra o
 * build inteiro. Estas funções tratam vazio como "não definido".
 */

/** Valor da variável, ou `fallback` quando ausente, vazia ou só espaços. */
export function env(value: string | undefined, fallback: string): string {
  const trimmed = value?.trim();
  return trimmed ? trimmed : fallback;
}

/** URL da variável sem barra final, ou `fallback` se ausente/vazia/inválida. */
export function envUrl(value: string | undefined, fallback: string): string {
  const candidate = env(value, fallback);
  try {
    return new URL(candidate).origin + new URL(candidate).pathname.replace(/\/$/, "");
  } catch {
    return fallback;
  }
}

/** `true` apenas quando a variável é exatamente "true". */
export function envFlag(value: string | undefined): boolean {
  return value?.trim().toLowerCase() === "true";
}
