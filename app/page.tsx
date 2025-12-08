// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-slate-900/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-200/90">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,242,197,0.9)]" />
            Built for modern music creatives and creative teams
          </div>

          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-[3.2rem]">
            Focused tools for{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-sky-300 bg-clip-text text-transparent">
              cutting-edge creative work
            </span>
            .
          </h1>

          <p className="mt-4 max-w-xl text-sm text-slate-300 sm:text-base">
            Soniteq builds AI-powered tools that remove friction from the
            creative process. From planning your week of projects with{" "}
            <span className="font-semibold">Kora</span> to exporting multi-key
            audio deliverables with <span className="font-semibold">Key Shift Pro</span>,
            we help you keep momentum where it matters.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/kora"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-2 text-sm font-semibold text-slate-950 shadow-xl shadow-emerald-400/40 hover:bg-emerald-300"
            >
              Explore Kora
            </Link>
            <Link
              href="/key-shift-pro"
              className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/60 px-6 py-2 text-sm font-semibold text-slate-100 hover:border-emerald-400/70 hover:text-emerald-200"
            >
              See Key Shift Pro
            </Link>
          </div>

          <p className="mt-4 text-xs text-slate-400 sm:text-[13px]">
            Start small with one tool, or build a workflow that runs across your
            projects and deliverables.
          </p>
        </div>

        {/* Right: “suite” card */}
        <div className="relative">
          <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[36px] bg-emerald-500/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[26px] border border-slate-700/60 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 shadow-2xl shadow-black/60">
            <div className="border-b border-slate-800/80 bg-slate-900/70 px-4 py-3">
              <div className="flex items-center justify-between gap-2">
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                    Soniteq Suite
                  </span>
                  <span className="text-xs text-slate-300">
                    Your projects · Your audio · Less friction
                  </span>
                </div>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
                  2 products · Growing roadmap
                </span>
              </div>
            </div>
            <div className="space-y-4 px-4 pb-4 pt-3 text-xs">
              {/* Kora preview row */}
              <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                      Kora
                    </p>
                    <p className="mt-1 text-[13px] font-medium text-slate-100">
                      AI-backed project planner
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Auto-prioritized “Top 3 Today”, deadlines & context from
                      your real projects.
                    </p>
                  </div>
                  <Link
                    href="/kora"
                    className="rounded-full border border-emerald-400/50 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold text-emerald-200 hover:bg-emerald-400/20"
                  >
                    View
                  </Link>
                </div>
              </div>

              {/* KSP preview row */}
              <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                      Key Shift Pro
                    </p>
                    <p className="mt-1 text-[13px] font-medium text-slate-100">
                      Multi-key export engine
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Turn one mix into all-key deliverables with clean filenames.
                    </p>
                  </div>
                  <Link
                    href="/key-shift-pro"
                    className="rounded-full border border-slate-700/80 px-3 py-1 text-[11px] font-semibold text-slate-200 hover:border-emerald-400/70 hover:text-emerald-200"
                  >
                    View
                  </Link>
                </div>
              </div>

              {/* Simple roadmap stub */}
              <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-3">
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  What we care about
                </p>
                <ul className="mt-2 space-y-1.5 text-[11px] text-slate-300">
                  <li>• Tools that feel native to creative workflows.</li>
                  <li>• Informed defaults, flexible details.</li>
                  <li>• No endless bloat – just what earns back hours.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products section */}
      <section className="mt-16 border-t border-slate-800/70 pt-10">
        <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
          Products
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-300">
          Each Soniteq product aims at a specific bottleneck in the creative
          process. Start with the one that solves today&apos;s pain and add more
          as your workflow grows.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* Kora card */}
          <div className="flex flex-col rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300 uppercase">
                  Kora
                </p>
                <p className="mt-1 text-sm font-medium text-slate-100">
                  AI productivity planner for creative projects
                </p>
              </div>
              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[11px] text-emerald-200">
                In active development
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-300">
              Kora turns your scattered tasks, album briefs, and project notes
              into a focused “Today” plan. Automatically surfaces your top 3
              priorities, flags label deadlines, and keeps publisher projects
              front and center.
            </p>
            <div className="mt-4 flex gap-2 text-[11px] text-slate-400">
              <span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1">
                AI-assisted prioritization
              </span>
              <span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1">
                Project + track level
              </span>
            </div>
            <div className="mt-5">
              <Link
                href="/kora"
                className="inline-flex items-center text-sm font-semibold text-emerald-300 hover:text-emerald-200"
              >
                Learn more about Kora →
              </Link>
            </div>
          </div>

          {/* Key Shift Pro card */}
          <div className="flex flex-col rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">
                  Key Shift Pro
                </p>
                <p className="mt-1 text-sm font-medium text-slate-100">
                  Multi-key export engine for audio deliverables
                </p>
              </div>
              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-[11px] text-cyan-200">
                Beta tooling
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-300">
              Built for trailer composers and sound designers who deliver hits,
              risers, and cues in multiple keys. Detects key, shifts with
              quality, and names files the way publishers expect.
            </p>
            <div className="mt-4 flex gap-2 text-[11px] text-slate-400">
              <span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1">
                All keys / white keys
              </span>
              <span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1">
                Filename presets
              </span>
            </div>
            <div className="mt-5">
              <Link
                href="/key-shift-pro"
                className="inline-flex items-center text-sm font-semibold text-emerald-300 hover:text-emerald-200"
              >
                Learn more about Key Shift Pro →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / waitlist anchor */}
      <section id="contact" className="mt-16 border-t border-slate-800/70 pt-10">
        <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
          Stay in the loop
        </h2>
        <p className="mt-3 max-w-xl text-sm text-slate-300">
          Want updates as Kora and Key Shift Pro evolve? Join the early update
          list and we&apos;ll send occasional, high-signal notes as new features and
          releases land.
        </p>
        <form className="mt-5 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            placeholder="you@studio.com"
            className="w-full rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400/80 focus:outline-none sm:w-72"
          />
          <button
            type="submit"
            className="rounded-full bg-emerald-400 px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-400/40 hover:bg-emerald-300"
          >
            Join the list
          </button>
        </form>
      </section>
    </div>
  );
}
