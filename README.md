<div align="center">

# 🛤️ CodeTrail

### Master DSA with Precision

[![Live Demo](https://img.shields.io/badge/▶_Live_Demo-code--trail--indol.vercel.app-9BFF2E?style=for-the-badge&logo=vercel&logoColor=white)](https://code-trail-indol.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js_15-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Clerk](https://img.shields.io/badge/Clerk_Auth-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com/)

**The ultimate, intelligence-driven LeetCode progress tracker.**
**500+ problems • 80+ structural patterns • 20 categories • Real-time cloud sync**

</div>

---

## ✨ Features

### 📊 Intelligent Dashboard
- **Pattern-first approach** — Problems are organized by 80+ structural patterns across 20 DSA categories, not just random lists
- **Real-time analytics** — Difficulty breakdown, weekly stats, streak tracking, category progress, and focus area analysis
- **Interactive charts** — Monthly progress bars, difficulty distribution pie charts, and topic heatmaps powered by Recharts
- **Achievement system** — 12 unlockable milestones across problems solved, patterns mastered, streaks, and category completions

### 🧠 Pattern Roadmap
- **20 DSA categories**: Arrays, Strings, Linked Lists, Stacks, Queues, Trees, Graphs, DP, Binary Search, Backtracking, Recursion, Greedy, Heaps, Hashing, Bit Manipulation, Tries, Segment Trees, Union-Find, Math, and Advanced DS
- **Theory guides** — Every pattern includes a "How to solve" section with markdown-rendered explanations, code snippets, and complexity analysis
- **Problem levels** — Problems within each pattern are grouped by level: Basic → Standard → Pattern → Mixed → Interview → Challenge
- **Filter & search** — Filter by difficulty, completion status, or bookmarks. Use `Ctrl+K` to instantly search across all problems

### 🔐 Authentication & Cloud Sync
- **Clerk authentication** — Sign in with GitHub or Google in one click
- **Supabase real-time sync** — Progress automatically syncs to the cloud, accessible from any device
- **Local-first architecture** — Works offline with `localStorage`, syncs to cloud when connected
- **Debounced saves** — Intelligent 1-second debounce prevents excessive database writes

### 🎨 Premium Design
- **Dark theme** — Meticulously crafted dark UI with glassmorphism, glow effects, and subtle grid backgrounds
- **Custom typography** — Orbitron for branding, Space Grotesk for headings, JetBrains Mono for code
- **Confetti celebrations** — Solving a problem triggers a satisfying confetti animation
- **Responsive** — Fully optimized for desktop, tablet, and mobile

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 15 (App Router, Turbopack) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS 3 + custom design tokens |
| **UI Components** | Radix UI primitives (Dialog, Dropdown, Progress, Tabs) |
| **Charts** | Recharts |
| **Markdown** | react-markdown + remark-gfm (lazy-loaded) |
| **Animations** | CSS keyframes + Framer Motion (lazy-loaded) |
| **Auth** | Clerk |
| **Database** | Supabase (PostgreSQL) |
| **Deployment** | Vercel |
| **Fonts** | Google Fonts (Orbitron, Space Grotesk, JetBrains Mono) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- A [Clerk](https://clerk.com) account (free tier)
- A [Supabase](https://supabase.com) project (free tier)

### 1. Clone the repo

```bash
git clone https://github.com/yash-mishraa/CodeTrail.git
cd CodeTrail
```

### 2. Install dependencies

```bash
npm install --legacy-peer-deps
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
CLERK_SECRET_KEY=sk_test_your_key_here

NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here

NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/dashboard
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/dashboard
```

### 4. Set up Supabase database

Go to your Supabase project → SQL Editor → Run this query:

```sql
CREATE TABLE public.user_progress (
  user_id TEXT PRIMARY KEY,
  state JSONB NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and sign in to access the dashboard.

---

## 📁 Project Structure

```
CodeTrail/
├── app/
│   ├── layout.tsx              # Root layout (Clerk, fonts, metadata)
│   ├── page.tsx                # Landing page (animated hero)
│   ├── globals.css             # Global styles & design tokens
│   └── dashboard/
│       ├── layout.tsx          # Dashboard layout (TrackerProvider)
│       └── page.tsx            # Main dashboard (lazy-loaded sections)
├── components/
│   ├── app-shell.tsx           # Navbar, command palette (Ctrl+K)
│   ├── dashboard-hero.tsx      # Stats cards, current focus, difficulty split
│   ├── weekly-insights.tsx     # Difficulty breakdown, quick stats, focus areas
│   ├── pattern-roadmap.tsx     # Full 20-category pattern browser
│   ├── pattern-card.tsx        # Expandable pattern with theory & problems
│   ├── pattern-problem-card.tsx# Individual problem toggle card
│   ├── activity.tsx            # Heatmap + recent activity
│   ├── analytics-panel.tsx     # Charts + achievements
│   └── ui/                     # Reusable primitives (Card, Badge, Progress...)
├── hooks/
│   └── use-tracker.tsx         # Global state (React Context + Supabase sync)
├── lib/
│   ├── patterns/               # 20 category files with theory & problems
│   ├── pattern-types.ts        # TypeScript types for the pattern system
│   ├── pattern-analytics.ts    # Analytics, streaks, heatmaps, difficulty counts
│   ├── roadmap.ts              # Phase-based problem definitions
│   ├── storage.ts              # localStorage adapter
│   ├── supabase.ts             # Supabase client
│   └── types.ts                # Core TypeScript types
├── middleware.ts               # Clerk auth middleware
├── public/
│   ├── logo.png                # Brand logo
│   ├── favicon.png             # Browser favicon
│   └── og-image.png            # Social media preview
└── .env.local                  # Environment variables (not tracked)
```

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl/⌘ + K` | Open command palette |
| `Esc` | Close command palette / modals |

---

## 🏆 Achievement System

| Badge | Requirement |
|-------|------------|
| 🩸 First Blood | Solve 1 problem |
| 🔥 7 Day Streak | 7 consecutive days |
| 💪 30 Day Streak | 30 consecutive days |
| ⭐ 50 Problems | 50 problems solved |
| 💯 Century | 100 problems solved |
| 🏅 250 Club | 250 problems solved |
| 👑 500 Legend | All 500+ problems solved |
| 📐 Pattern Apprentice | 10 patterns completed |
| 🧩 Pattern Master | 40 patterns completed |
| 🏛️ Pattern Grandmaster | All 80 patterns completed |
| ✅ Category Clear | 1 full category completed |
| 🗺️ Half Map | 10 categories completed |

---

## 📊 Data Architecture

```
User signs in (Clerk) 
    → TrackerProvider loads state
        → Check Supabase for cloud data
        → Fallback to localStorage
        → Merge progress with latest static data (preserves theory updates)
    → On state change
        → Save to localStorage (instant)
        → Debounced upsert to Supabase (1s delay)
```

**Key design decisions:**
- **Local-first**: The app works fully offline. Cloud sync is additive, not required.
- **Merge, don't replace**: When loading saved progress, it merges user checkmarks with the latest code-defined theory/descriptions. This means deploying new theory content never erases user progress.
- **Lazy loading**: Pattern data (200KB+) is loaded via dynamic imports to keep initial page load fast.

---

## 🌐 Deployment

The app is deployed on **Vercel** with automatic deployments on push to `main`.

### Environment Variables on Vercel

Add the same 6 variables from `.env.local` to your Vercel project:

**Settings → Environment Variables** → Add each key-value pair for Production, Preview, and Development.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with ☕ and persistence by [Yash Mishra](https://github.com/yash-mishraa)**

*"Small commits. Serious momentum."*

</div>
