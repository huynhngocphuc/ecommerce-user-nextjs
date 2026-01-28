# E-commerce Store - Next.js

A modern e-commerce website built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

**Note:** This project is configured for **client-side only rendering** using Next.js static export. All pages are pre-rendered at build time and served as static HTML files.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── public/             # Static assets
└── ...config files
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (generates static HTML in `out/` directory)
- `npm start` - Serve the production build locally (requires running `npm run build` first)
- `npm run lint` - Run ESLint

## Deployment

Since this project uses static export (`output: 'export'`), you can deploy the generated `out/` directory to any static hosting service like:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any static file server

## Development

Start building your UI components in the `app` directory. The project uses the Next.js App Router structure.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
