# Pendências para conteúdo final — Espaço Savanna

Tudo o que está marcado aqui é **placeholder** e deve ser substituído antes da publicação.
Onde cada item vive no código está indicado para facilitar a troca.

## Identidade
- [x] **Logo oficial** aplicada → `public/brand/logo.png` (1024×255, lettering recortado de `design/logo-original.png`)
- [x] **Favicon** oficial aplicado → `src/app/icon.png`, `apple-icon.png`, `favicon.ico` (gerados do emblema entregue)
- [x] **Imagem Open Graph** com fotografia real → `public/og/default.jpg` (foto entregue + logo)
- [x] `siteConfig.placeholders.logo = false` — JSON-LD já publica `logo`

## Imagens
- [x] Heros (Home, O Espaço e demais páginas) em duas versões — `src/data/images.ts` (`heroes`)
- [x] Mosaico "O Espaço" (3 fotos) — `mosaic`; reaproveitado em O Espaço e Aluguel de Salas
- [x] Galeria (8 fotos) — `galleryPhotos`
- [x] Experiências (3 fotos) — `experiencePhotos`
- [x] CTA final — `ctaPhoto` (reaproveitado em todas as páginas)
- [ ] Opcional: fotos específicas para os heros de Terapeutas/Experiências/Como Funciona/Galeria/Trabalhe Conosco/Aluguel/Contato (hoje todas usam a mesma foto "demais páginas")
- [ ] Opcional: um segundo conjunto de mosaico para Aluguel de Salas (hoje repete o da Home)
- Originais entregues ficam em `savanna img/` (fora do git); versões web em `public/images/`

## Dados operacionais (`src/data/site.ts`)
- [x] **WhatsApp oficial** (11) 94565-3708 → `contact.whatsappNumber`
- [ ] **Instagram** → `contact.instagramHandle` / `contact.instagramUrl`
- [x] **Endereço** R. Dr. Miranda de Azevedo, 360 — Vila Anglo Brasileira, São Paulo/SP → `contact.address.*`
- [x] **Horários** seg–sáb 10h–22h, domingo fechado → `contact.openingHours`
- [x] **Mapa**: embed por endereço aplicado; opcional trocar pelo embed da ficha do negócio no Google Maps
- [ ] **Domínio oficial** → `NEXT_PUBLIC_SITE_URL` (ver `.env.example`)
- [ ] Ao confirmar o Instagram, virar `siteConfig.placeholders.instagram = false` (o JSON-LD já publica telefone, endereço e horários)

## Terapeutas (`src/data/therapists.ts`)
- [x] Nomes e fotos aplicados: Babi, Luana, Mily, Adriana, Manu, Mariah, Maya (Júlia, do layout, saiu por não ter foto)
- [ ] Confirmar quais aparecem na Home (`featured` — hoje Babi, Luana e Mily) e a ordem da listagem
- [ ] Confirmar a foto principal de cada card (escolhi a mais editorial; as demais vão para "Mais fotos" no perfil)
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
