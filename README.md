# CodeTrail

A premium, local-first LeetCode progress dashboard built with Next.js 15, TypeScript, Tailwind CSS, shadcn-style UI primitives, Framer Motion, and Recharts.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Data architecture

Progress is persisted through the `ProgressRepository` interface in `lib/storage.ts`. The current adapter uses `localStorage`; a Firebase adapter can implement the same `load` and `save` contract without touching dashboard components or state actions.

## Shortcuts

- `Ctrl/Cmd + K`: open command palette
- `Esc`: close command palette

Use the sidebar to export or import a complete progress snapshot as JSON.
