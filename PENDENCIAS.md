# Pendências para conteúdo final — Espaço Savanna

Tudo o que está marcado aqui é **placeholder** e deve ser substituído antes da publicação.
Onde cada item vive no código está indicado para facilitar a troca.

## Identidade
- [ ] **Logo oficial** (SVG ou PNG em alta, proporção do layout 4:1) → `public/brand/logo-placeholder.svg`, referenciada em `src/data/images.ts` (`brand.logo`)
- [ ] **Favicon** oficial → `public/favicon.svg` (hoje monograma "S" provisório); opcional `apple-touch-icon.png` 180×180
- [ ] **Imagem Open Graph** com fotografia real (1200×630) → `public/og/default.png` (hoje arte com logo placeholder)
- [ ] Ao trocar a logo, virar `siteConfig.placeholders.logo = false` para o JSON-LD publicar `logo`/`image`

## Imagens
- [ ] Fotografia do **hero** da Home (luz quente, ambiente) → `src/content/home.ts` (`hero.image`)
- [ ] Heros das páginas internas → `hero.image` em `src/content/{space,therapists,experiences,how-it-works,gallery,careers,rooms,contact}.ts`
- [ ] Mosaico "O Espaço" (3 fotos: 1 vertical + 2 horizontais) → `home.ts` (`space.images`), `space.ts` (`structure.images`), `rooms.ts` (`structure.images`)
- [ ] **Galeria** (8+ fotos; a 1ª e a 6ª ganham destaque 2×2) → `src/data/gallery.ts`
- [ ] Imagens das **experiências** (16:9, com ponto focal) → `src/data/experiences.ts` (`image`, `focal`)
- [ ] Imagem do **CTA final** → `finalCta.image` nos arquivos de conteúdo
- Placeholders atuais: `public/images/placeholders/*.svg` (podem ser removidos ao final)

## Dados operacionais (`src/data/site.ts`)
- [ ] **WhatsApp oficial** → `contact.whatsappNumber` (somente dígitos com DDI) e `contact.whatsappDisplay`
- [ ] **Instagram** → `contact.instagramHandle` / `contact.instagramUrl`
- [ ] **Endereço** completo → `contact.address.*`
- [ ] **Horários** → `contact.openingHours`
- [ ] **Mapa**: URL de embed do Google Maps → `contact.address.mapsEmbedUrl` (sem ela a página Contato mostra um bloco "Mapa") e `mapsUrl`
- [ ] **Domínio oficial** → `NEXT_PUBLIC_SITE_URL` (ver `.env.example`)
- [ ] Após preencher, virar as flags `siteConfig.placeholders.{contact,address,hours,domain}` para `false` — o JSON-LD passa a incluir telefone, endereço e horários automaticamente

## Terapeutas (`src/data/therapists.ts`)
- [ ] Nomes definitivos (hoje: Babi, Luana, Júlia — do layout aprovado)
- [ ] Fotos 3:4 de cada terapeuta (`image`, com `focal`)
- [ ] Apresentação curta (`summary`) e completa (`bio`)
- [ ] Até 3 destaques por card (`highlights`)
- [ ] Disponibilidade (`availability`)
- [ ] Experiências oferecidas (`experiences` — slugs)
- [ ] Quais aparecem na Home (`featured`)

## Experiências (`src/data/experiences.ts`)
- [ ] Nomes definitivos (hoje: Massagem Tântrica, Massagem Relaxante, Experiência Sensorial — do layout aprovado)
- [ ] Frase curta (`tagline`) e descrição completa (`description`)
- [ ] Ícone de cada experiência (`icon`, do conjunto do layout)

## Copy (textos de referência a revisar/aprovar)
- [ ] **Home** — `src/content/home.ts`: textos vêm do layout aprovado e do Documento 03; revisar "Agendar é simples." (com/sem ponto) e o título curto mobile de Experiências
- [ ] **O Espaço** — `src/content/space.ts`: Conceito, Estrutura, Diferenciais (propostas)
- [ ] **Terapeutas** — `src/content/therapists.ts`: textos do hero, listagem e CTA final (propostas)
- [ ] **Experiências** — `src/content/experiences.ts`: hero e listagem (propostas)
- [ ] **Como Funciona** — `src/content/how-it-works.ts`: "Como escolher" e "O atendimento" (propostas); FAQ completo em `src/data/faq.ts` (Documento 03 + layout)
- [ ] **Galeria** — `src/content/gallery.ts`: título e frase (propostas)
- [ ] **Trabalhe Conosco** — `src/content/careers.ts`: "O que valorizamos" e textos do formulário (propostas)
- [ ] **Aluguel de Salas** — `src/content/rooms.ts`: **não contém preços, condições, horários ou regras**; textos de estrutura/utilização são propostas genéricas a confirmar
- [ ] **Contato** — `src/content/contact.ts`
- [ ] **Metadata** (titles e descriptions) — `src/content/pages.ts`
- [ ] **Rodapé** — tagline em `home.ts` (`footer.tagline`) e aviso de maioridade em `site.ts`

## Técnico (antes de publicar)
- [ ] Definir `NEXT_PUBLIC_SITE_URL` e `NEXT_PUBLIC_INDEXABLE=true` no ambiente de produção (libera `robots.txt` e meta robots)
- [ ] Remover as rotas `/dev/*` do build ou mantê-las (já retornam 404 em produção)
- [ ] Decidir sobre analytics/consentimento (não implementado por não ter sido solicitado)
- [ ] Decidir sobre o balão de WhatsApp no desktop (`siteConfig.features.whatsappBubble`, hoje desligado)
