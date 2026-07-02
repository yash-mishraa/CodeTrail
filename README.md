# CodeTrail — Master DSA with Precision

<div align="center">
  
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com/)

**[Visit CodeTrail](https://codetrailapp.site)** • **[View Roadmap](/dashboard?tab=roadmap)** • **[Analytics](/dashboard?tab=analytics)**

</div>

<br/>

CodeTrail is an elite, highly optimized Data Structures and Algorithms tracking platform designed to guide developers through a structured curriculum of 580+ curated problems across 97 learning patterns. Built for speed and focus, it eliminates the noise of traditional coding platforms and provides a clear path to mastery.

## 🚀 Features

- **Structured Roadmap** — Follow a mathematically optimal progression through 97 core algorithmic patterns.
- **Client-First Architecture** — Lightning fast hydration utilizing Next.js 15 Server Components and Zustand for instant state updates.
- **Cloud Sync** — Real-time progress synchronization powered by Supabase and Clerk Auth.
- **Advanced Analytics** — Track your completion rate, pattern mastery, and recent activity streaks using Recharts.
- **PWA Ready** — Fully installable as a Progressive Web App with offline fallback support via Serwist.
- **Accessible & Responsive** — >95 Lighthouse accessibility score with full keyboard navigation and ARIA support.

---

## 🏗 Architecture

CodeTrail utilizes a modern **React Server Components** paradigm combined with a **BaaS (Backend-as-a-Service)** data layer.

- **Frontend:** Next.js 15 (App Router), React 19, Tailwind CSS
- **State Management:** Zustand (with local persistence)
- **Authentication:** Clerk
- **Database:** Supabase (PostgreSQL)
- **Security:** Strict CSP headers, Row Level Security (RLS) via injected Clerk JWTs
- **Deployment:** Vercel

---

## 📦 Installation Guide

To run CodeTrail locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/yash-mishraa/CodeTrail.git
cd CodeTrail
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Copy the `.env.example` file to `.env.local` (or create it) and fill in the following keys:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/dashboard
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/dashboard

# Supabase Database
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
```

### 4. Setup Database
Execute the following SQL in your Supabase SQL Editor to configure the database schema and Row Level Security:

```sql
CREATE TABLE user_progress (
  user_id text PRIMARY KEY,
  state jsonb NOT NULL,
  updated_at timestamp with time zone DEFAULT now()
);

-- Enable RLS
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- Allow users to manage their own data via Clerk JWT
CREATE POLICY "Users can view their own progress" 
ON user_progress FOR SELECT USING ((auth.jwt() ->> 'sub') = user_id);

CREATE POLICY "Users can update their own progress" 
ON user_progress FOR ALL USING ((auth.jwt() ->> 'sub') = user_id);
```

### 5. Start the development server
```bash
npm run dev
```
Navigate to `http://localhost:3000` to view the application.

---

## 🌍 Deployment Guide

CodeTrail is optimized for deployment on Vercel.

1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. In the Vercel dashboard, go to **Settings > Environment Variables** and add all the keys from your `.env.local` file.
4. (Optional) Configure the Clerk JWT Template: In Clerk, go to **Configure > JWT Templates**, create a new `supabase` template, and paste your Supabase Legacy JWT Secret into the Custom Signing Key field.
5. Click **Deploy**.

---

## 🤝 Contribution Guide

We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

Please ensure you run `npm run lint` and `npm run build` before submitting your PR to ensure type safety and performance standards are met.

---

## 📝 Release Notes (v1.0.0)
- **Launch Release:** Complete architectural overhaul to Next.js 15.
- **Performance:** Enabled Babel React Compiler for aggressive auto-memoization.
- **Security:** Implemented robust HTTP security headers and strictly enforced Supabase RLS using Clerk JWT injection.
- **UX:** Total accessibility overhaul (Focus outlines, semantic HTML) and integration of Vercel Analytics.
- **PWA:** Added Serwist service workers for offline caching and installability.

---

<div align="center">
  <p>&copy; 2026 CodeTrail. Not affiliated with LeetCode.</p>
</div>
