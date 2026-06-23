<!-- # Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat). -->

# Stray Kids Singapore

A small Astro site for the Stray Kids `RUN IT` World Tour Singapore stop (6 & 7 March 2027).

Socials:
<https://skzsg.netlify.app/>
<https://x.com/SKZ_SG>
<https://t.me/straykidsingapore>

## Features

- Countdown to the Singapore concert dates
- Responsive landing page
- Fixed nav and footer
- Social links for X, Telegram, and email
- Custom background and tour artwork
- Google Font: Oswald

## Tech Stack

- Astro 7
- HTML/CSS
- JavaScript countdown timer
- Netlify hosting

## Requirements

Node.js `>=22.12.0`

Check your version:

```sh
node -v
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Open:

<http://localhost:4321>

## Project Structure

src/
├── assets/
├── components/
│   ├── Countdown.astro
│   ├── Footer.astro
│   └── Nav.astro
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro
└── styles/
    ├── countdown.css
    ├── footer.css
    ├── layout.css
    └── nav.css
