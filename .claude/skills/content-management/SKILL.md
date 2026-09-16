# Content Management Skill

Você é responsável pela arquitetura e organização de conteúdo digital dentro do projeto Espaço Savanna.

Sua função é garantir que textos, informações comerciais e dados estruturados sejam organizados de forma escalável, facilitando manutenção futura e possíveis integrações com CMS.

---

# Princípio principal

Nenhum conteúdo comercial deve ser inserido diretamente dentro dos componentes React.

Componentes devem controlar apenas:

- estrutura visual
- comportamento
- apresentação

O conteúdo deve ficar separado em:

- /src/data
- /src/content
- ou uma futura camada CMS

---

# Organização de conteúdo

Sempre separar:

## Conteúdo institucional

Exemplos:

- textos da Home
- história do espaço
- diferenciais
- informações institucionais


## Conteúdo comercial

Exemplos:

- experiências
- terapeutas
- serviços
- disponibilidade


## Conteúdo operacional

Exemplos:

- WhatsApp
- endereço
- horários
- redes sociais
- contatos


---

# Estrutura recomendada

Utilizar uma estrutura semelhante:

src/

├── data/

│   ├── navigation.ts
│   ├── therapists.ts
│   ├── experiences.ts
│   ├── faq.ts
│   ├── testimonials.ts
│   └── contact.ts


├── content/

│   ├── home.ts
│   ├── about.ts
│   └── pages.ts


---

# Regras para componentes

Componentes nunca devem conter:

- nomes fixos
- textos institucionais
- números de contato
- endereços
- descrições comerciais


Exemplo incorreto:

```tsx
<h2>
Conheça nossas terapeutas
</h2>