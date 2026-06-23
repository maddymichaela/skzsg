# Stray Kids Singapore

A small Astro site for the Stray Kids `RUN IT` World Tour Singapore stop on 6 and 7 March 2027.

## Links

- Site: <https://skzsg.netlify.app/>
- X: <https://x.com/SKZ_SG>
- Telegram: <https://t.me/straykidsingapore>

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

```sh
npm install
```

Start the local dev server:

```sh
npm run dev
```

Open:

```txt
http://localhost:4321
```

## Project Structure

```txt
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
```
