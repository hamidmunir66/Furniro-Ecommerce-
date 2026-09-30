# Furniro — Furniture E-Commerce Frontend

A responsive furniture shopping frontend built with React, Redux Toolkit, and Tailwind CSS. Users can browse products by category, add items to a persistent cart, and sign up / log in with a simple client-side auth flow.

> Frontend only — no backend/API is connected yet. Users, sessions, and cart state currently live in Redux + `localStorage`.

## Features

- **Product browsing** — homepage hero, category browse cards, a paginated "Our Products" grid (Show More / Show Less), and a furniture inspiration gallery
- **Shopping cart** — add/remove items with quantity tracking, live subtotal and total, powered by Redux Toolkit
- **Auth (demo)** — signup and login forms with full client-side validation via `react-hook-form`; session persisted in `localStorage`
- **Responsive design** — mobile menu, responsive grid layouts, Tailwind CSS throughout
- **Route-based code splitting** — `Login`, `Signup`, and the cart page are lazy-loaded with `React.lazy` + `Suspense`
- **Custom hooks** — `useToggle` (boolean state), `useLocalStorage` (state synced to `localStorage`)

## Tech Stack

| Category | Tools |
|---|---|
| Framework | React (Vite) |
| Styling | Tailwind CSS |
| State management | Redux Toolkit, React Redux |
| Routing | React Router |
| Forms | react-hook-form |
| Icons | react-icons |

## Project Structure

```
src/
├── assets/              # Images (products, rooms, banners)
├── component/
│   ├── browse/          # Category browse section
│   ├── cart/            # Cart page
│   ├── footer/
│   ├── gallery/         # Furniture inspiration gallery
│   ├── header/          # Navbar
│   ├── hero/            # Homepage hero banner
│   ├── inspiration/     # Room inspiration slider
│   └── products/        # Product grid + product cards
├── data/
│   └── data.js          # Static product/category/gallery data
├── hooks/
│   ├── useLocalStorage.js
│   └── useToggle.js
├── layout/
│   └── MainLayout.jsx   # Navbar + Outlet + Footer wrapper
├── pages/
│   ├── auth/            # Login, Signup
│   └── home/            # Home page
├── redux/
│   ├── cartSlice.js
│   └── store.js
├── App.jsx
└── main.jsx
```

## Getting Started

### Prerequisites
- Node.js (v18 or later recommended)
- npm

### Installation

```bash
git clone <repo-url>
cd furniro
npm install
```

### Running the app

```bash
npm run dev       # start the local dev server
npm run build     # production build
npm run preview   # preview the production build locally
```

## Known Limitations / Roadmap

- No backend — auth and cart data are not persisted server-side and won't survive across devices/browsers
- Passwords are currently stored in plain text in `localStorage` — **not production-safe**; needs a real backend with hashed credentials before going live
- No checkout/payment flow yet
- Product data is static (`data/data.js`) — needs to move to an API once a backend exists

## License

This project is for personal/educational use.