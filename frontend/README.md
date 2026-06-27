# Eeengenharia — Website

Website institucional da **Eeengenharia**, empresa de construção civil especializada em LSF
(Light Steel Framing). SPA multilingue (PT/EN/ES/FR) com portfólio, serviços e formulário de
contacto funcional.

## Stack

- **React 19** + **Vite 7**
- **Tailwind CSS 4**
- **React Router DOM 7** (com code splitting por rota)
- **i18next** + react-i18next (4 línguas)
- **Web3Forms** (envio do formulário, sem backend)
- **sharp** (geração de imagens — só em dev)

## Comandos

```bash
npm install        # instalar dependências
npm run dev        # servidor de desenvolvimento (http://localhost:5173)
npm run build      # build de produção (dist/)
npm run preview    # pré-visualizar o build
npm run lint       # ESLint
```

## Configuração do formulário de contacto (Web3Forms)

O envio de emails usa o [Web3Forms](https://web3forms.com). É preciso uma *access key*:

1. Regista o email que vai **receber** os pedidos em https://web3forms.com e copia a access key.
2. Cria um ficheiro `.env` (a partir de `.env.example`):
   ```
   VITE_WEB3FORMS_ACCESS_KEY=a-tua-chave
   ```
3. Reinicia o `npm run dev` (o Vite só lê o `.env` ao arrancar).

> Em produção (Vercel/Netlify/etc.), define `VITE_WEB3FORMS_ACCESS_KEY` nas variáveis de ambiente do serviço.

## Estrutura

```
src/
├── components/
│   ├── layout/      NavBar, Footer
│   ├── sections/    Carousel, ContactForm, Modal, Lightbox
│   └── ui/          FlyOutLink, LanguageFlyOut, ThemeToggle, Reveal, PageLoader
├── pages/           HomePage, AboutUs, Services, Portfollium, Contacts, LegalPage, NotFound
├── data/            navItems, services, team, projects
├── hooks/           useInView, useTheme
├── i18n/            i18n.js + locales/ (pt, en, es, fr)
└── index.css        Tailwind + tema (inclui dark mode)
```

## Assets (`public/`)

```
public/
├── brand/        logos (logo + logo-footer, .webp e .png)
├── team/         fotos da equipa
├── portfolio/    fotos das obras por categoria (moradias, remodelacoes, projetos)
├── favicon.png · icon-192.png · icon-512.png · og-image.jpg   (gerados; ver abaixo)
└── manifest.webmanifest · robots.txt · sitemap.xml            (web/SEO, ficam na raiz)
```

## Imagens geradas

Os assets `og-image.jpg`, `favicon.png` e os ícones PWA (`icon-192/512.png`) são gerados a
partir de `public/brand/logo.png` e da foto do hero:

```bash
node scripts/generate-images.mjs
```

As fotos das obras são convertidas para WebP e a estrutura `src/data/projects.js` é gerada
automaticamente (agrupadas por obra) com:

```bash
node scripts/convert-photos.mjs
```

## Notas

- **Dark mode**: o código está completo (variantes `dark:`, `useTheme`, `ThemeToggle`), mas o
  toggle está desativado — para reativar, descomenta o `ThemeToggle` no `NavBar`, o script
  anti-FOUC no `index.html` e segue os comentários.
- **Domínio**: as meta tags sociais e o `sitemap.xml` usam `https://eeegenharia.com` — atualiza
  se o domínio mudar.
- **Conteúdo placeholder**: imagens do portfólio/hero, equipa e textos legais são provisórios,
  à espera de conteúdo real.
```
