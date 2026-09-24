# Deploy no Coolify

O projeto está pronto para o Coolify puxando direto do GitHub, sem alterações.
Há um `Dockerfile` na raiz que constrói e executa o site em um servidor Node
enxuto (`output: standalone`, ~54MB). O GitHub Pages continua funcionando em
paralelo, com export estático — os dois modos convivem no mesmo repositório.

## Configuração no painel

| Campo | Valor |
|---|---|
| Tipo de recurso | **Application → Private/Public Repository (GitHub)** |
| Repositório | `nowpublicidade/espacosavanna` |
| Branch | `main` |
| Build Pack | **Dockerfile** |
| Dockerfile Location | `/Dockerfile` |
| Base Directory | `/` |
| Port Exposes | **3000** |
| Health Check Path | `/` (o Dockerfile já traz HEALTHCHECK) |
| Domínio | ex.: `https://espacosavanna.com.br` (o Coolify emite o SSL) |

## Variáveis de ambiente

Marque as duas como **"Build Variable"** — elas são embutidas no bundle durante
o build (prefixo `NEXT_PUBLIC_`); se só existirem em runtime, não têm efeito.

| Variável | Valor | Observação |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://espacosavanna.com.br` | Sem barra final. Usada em canonical, Open Graph, sitemap e JSON-LD. |
| `NEXT_PUBLIC_INDEXABLE` | `true` na publicação oficial · `false` em ambiente de revisão | Controla `robots.txt` e a meta `robots`. |

Não defina `PORT` nem `HOSTNAME`: já estão no Dockerfile (`3000` / `0.0.0.0`).
Não defina `STATIC_EXPORT` — ela é exclusiva do GitHub Pages.

## O que o Coolify faz a cada push na `main`

1. Clona o repositório e constrói a imagem (`npm ci` → `npm run build`).
2. Sobe o container novo, valida o health check e só então tira o antigo do ar.
3. O GitHub Actions publica, em paralelo, a versão de revisão no GitHub Pages.

## Por que Dockerfile (e não Nixpacks)

O Nixpacks também detecta Next.js e funcionaria, mas o Dockerfile:

- fixa o **Node 22** (o Nixpacks pode escolher outra versão e quebrar o build);
- usa `output: standalone` — imagem ~54MB em vez de ~1,2GB com `node_modules`;
- roda como usuário sem privilégios (`nextjs`), não como root;
- traz health check, então o deploy só troca o container quando o site responde.

## Recursos recomendados

Site estático-dinâmico, 17 rotas pré-renderizadas: **0,5 vCPU e 512MB** bastam.
Com otimização de imagens sob demanda, 1GB dá folga no primeiro acesso a cada foto.

## Verificações após o primeiro deploy

```bash
curl -I https://espacosavanna.com.br/
curl -s https://espacosavanna.com.br/robots.txt
curl -s https://espacosavanna.com.br/sitemap.xml | head -5
```

Espere: `200`, `Allow: /` (com `NEXT_PUBLIC_INDEXABLE=true`) e as 15 URLs do
sitemap com o domínio correto.

## Persistência e serviços

Nenhum: o site não tem banco de dados, sessão, upload nem formulário com
backend (o formulário abre o WhatsApp). Não é preciso volume — o cache de
imagens otimizadas em `.next/cache` é reconstruído sob demanda. Se quiser
evitar reprocessar imagens a cada deploy, monte um volume em
`/app/.next/cache` (opcional).
