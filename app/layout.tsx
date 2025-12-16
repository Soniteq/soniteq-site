// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Soniteq – Tools for Modern Creators",
  description:
    "Soniteq builds focused tools for modern composers and creators, including Kora (AI project planner) and Key Shift Pro (multi-key audio export engine).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
        {/* background aura */}
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-emerald-500/20 via-cyan-500/10 to-transparent blur-3xl" />

        <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-10 pt-4 sm:px-6 lg:px-8">
          {/* Global nav */}
          <header className="flex items-center justify-between gap-4 py-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 shadow-lg shadow-emerald-500/40">
                <span className="text-lg font-semibold text-slate-950">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-[0.2em] text-slate-200 uppercase">
                  Soniteq
                </span>
                <span className="text-xs text-slate-400">
                  Tools for modern creators
                </span>
              </div>
            </Link>

            <nav className="flex items-center gap-5 text-xs font-medium text-slate-300/90">
              <Link href="/kora" className="hover:text-emerald-300">
                Kora
              </Link>
              <Link href="/export-flow" className="hover:text-emerald-300">
                Export Flow
              </Link>
              <Link href="/key-shift-pro" className="hover:text-emerald-300">
                Key Shift Pro
              </Link>
              <Link href="/contact" className="hidden hover:text-emerald-300 sm:inline">
                Contact
              </Link>
            </nav>
          </header>

          {/* Page content */}
          <main className="mt-4 flex-1">{children}</main>

          {/* Global footer */}
          <footer className="mt-10 border-t border-slate-800/70 pt-5 text-xs text-slate-500">
            <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <p>© {new Date().getFullYear()} Soniteq. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-emerald-300">
                  Terms
                </a>
                <a href="#" className="hover:text-emerald-300">
                  Privacy
                </a>
                <a href="#top" className="hover:text-emerald-300">
                  Back to top
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
