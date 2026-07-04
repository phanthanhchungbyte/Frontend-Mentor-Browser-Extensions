# Frontend Mentor - Browser extensions manager UI

A solution to the [Browser extensions manager UI challenge](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp) on Frontend Mentor. A dashboard for managing browser extensions — toggle active states, filter by status, remove extensions, and switch between light/dark themes.

## Features

- Toggle extensions between active and inactive states
- Filter extensions by **All**, **Active**, or **Inactive**
- Remove extensions from the list
- Light / dark theme toggle (persisted in localStorage, respects OS preference)
- Responsive layout (mobile-first, adapts from 375px to large screens)
- Hover and focus states on all interactive elements

## Built with

- **React 19** with TypeScript
- **Vite 8** (build tool with HMR)
- React Compiler enabled
- CSS (custom properties, media queries)
- Context API for state management (theme, filter, extensions list)
- ESLint + Prettier

## Project structure

```
src/
├── main.tsx                   # Entry point
├── App.tsx                    # Root layout
├── index.css / App.css        # Global and app-level styles
├── context/
│   ├── ThemeContext.tsx        # Light/dark theme context
│   └── ListBodyContext.ts      # Extensions list context
├── components/
│   └── ui/
│       ├── FilterButton.tsx    # Reusable filter toggle button
│       └── list/
│           ├── ListBody.tsx    # List wrapper (provides context)
│           └── hooks/
│               └── useExtensions.tsx  # Custom hook for list state & filters
├── features/
│   ├── nav/
│   │   └── Navbar.tsx         # Navigation bar with logo & theme toggle
│   ├── filter/
│   │   └── FilterBar.tsx      # All / Active / Inactive filter bar
│   └── list/
│       ├── ExtensionList.tsx   # Card grid container
│       ├── ExtensionCard.tsx   # Individual extension card
│       └── utils/
│           └── FilterExtensions.ts  # Filter logic
├── data/
│   └── data.ts                # Extension seed data
└── types/
    └── utils.ts               # TypeScript utility types
```

## Getting started

```bash
pnpm install
pnpm run dev      # Start dev server (Vite HMR)
pnpm run build    # Type-check + production build
pnpm run preview  # Preview production build
pnpm run lint     # Run ESLint
```

## Challenge requirements

Users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout depending on device screen size
- See hover and focus states for all interactive elements

## Design

- **Mobile**: 375px | **Desktop**: 1440px
- **Font**: [Noto Sans](https://fonts.google.com/noto/specimen/Noto+Sans) (400, 500, 700)
- **Colors**: Neutral palette (`hsl(227, 75%, 14%)` through `hsl(200, 60%, 99%)`), Red accents (`hsl(3, 86%, 64%)` etc.), light/dark gradient backgrounds
