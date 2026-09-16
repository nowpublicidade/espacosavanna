1. Objetivo deste documento

Este documento define a configuração inicial do projeto para desenvolvimento utilizando Claude Code localmente.

A finalidade é garantir que o projeto comece com uma arquitetura profissional, organizada e preparada para um site premium.

O desenvolvimento deve seguir todos os documentos anteriores:

- CLAUDE.md
- DESIGN_SYSTEM.md
- ART_DIRECTION.md
- Documentos de estrutura, especificação e copy

2. Stack Oficial do Projeto

Framework:
Next.js

Linguagem:
TypeScript

Estilização:
Tailwind CSS

Componentes:
Shadcn/UI

Animações:
Framer Motion

Ícones:
Lucide React

Gerenciamento de imagens:
Next/Image

Deploy recomendado:
Vercel

3. Criação Inicial do Projeto

Criar o projeto utilizando Next.js com:

- TypeScript
- App Router
- ESLint
- Tailwind CSS
- Estrutura preparada para componentes reutilizáveis

4. Estrutura de Pastas Recomendada

Estrutura:

src/

├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── páginas internas

├── components/

│   ├── ui/
│   ├── layout/
│   ├── sections/
│   └── shared/

├── styles/

├── lib/

├── data/

├── assets/

└── types/


A estrutura deve manter separação entre:

- componentes
- páginas
- dados
- estilos
- funções auxiliares

5. Instalação de Dependências

Instalar:

- Shadcn/UI
- Framer Motion
- Lucide React

Configurar os componentes necessários antes da criação das páginas.

6. Ordem de Desenvolvimento

Seguir obrigatoriamente:

Etapa 1:
Configurar ambiente.

Etapa 2:
Criar Design Tokens.

Etapa 3:
Criar componentes globais.

Etapa 4:
Criar layout base.

Etapa 5:
Criar Home.

Etapa 6:
Criar páginas internas.

Etapa 7:
Aplicar animações.

Etapa 8:
Revisar responsividade.

Etapa 9:
Otimizar SEO e performance.

7. Design Tokens

Criar variáveis globais para:

Cores:
- background
- texto
- dourado
- dourado suave

Tipografia:
- títulos
- corpo

Espaçamento:
- seções
- componentes
- containers

Nenhuma cor ou espaçamento deve ser criado aleatoriamente no código.

8. Componentes Prioritários

Criar primeiro:

Header:
- logo
- navegação
- CTA WhatsApp

Hero:
- imagem
- título
- descrição
- botão

Button:
- variantes premium

Section:
- estrutura padrão de páginas

Card:
- terapeutas
- experiências

Gallery:
- imagens

FAQ:
- accordion

Footer:
- informações institucionais

9. Regras de Código

O código deve:

- Ser limpo
- Utilizar componentes reutilizáveis
- Evitar repetição
- Possuir nomes claros
- Seguir boas práticas React/Next.js

Evitar:

- Componentes gigantes
- Código duplicado
- Soluções temporárias

10. Responsividade

Prioridade:

Mobile first.

Validar:

- menu mobile
- tamanhos de fonte
- espaçamento
- imagens
- botões
- navegação

O site deve funcionar perfeitamente em celulares antes da versão desktop.

11. Performance

Aplicar:

- Otimização de imagens
- Lazy loading quando necessário
- Componentes leves
- Boas práticas Next.js

Evitar:

- Animações pesadas
- Bibliotecas desnecessárias
- Elementos que prejudiquem carregamento

12. Workflow com Claude Code

Antes de criar código:

1. Ler documentos do projeto.

2. Explicar a estratégia.

3. Criar plano de implementação.

4. Aguardar validação quando houver decisões visuais importantes.

5. Implementar em etapas.

Nunca gerar todo o projeto de uma vez sem validação.

13. Critério Final de Qualidade

O resultado final deve parecer um projeto criado por uma agência especializada em marcas premium.

A avaliação deve considerar:

- Design
- Experiência
- Código
- Performance
- Conversão

O objetivo não é apenas funcionar.

O objetivo é criar uma experiência digital memorável para o Espaço Savanna.