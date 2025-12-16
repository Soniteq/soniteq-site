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
            Kora is{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-sky-300 bg-clip-text text-transparent">
              the operating system for music creators
            </span>
            .
          </h1>

          <p className="mt-4 max-w-xl text-sm text-slate-300 sm:text-base">
            Kora isn’t a replacement for macOS or Windows. It’s the system that organizes and runs your creative work. Plan albums like real deliverables, monitor important relationships, and ship faster with fewer
            mistakes. Local-first and creator-first by design. No AI Training, no data mining — your work stays yours. Always.
          </p>

          <ul className="mt-5 space-y-2 text-sm text-slate-200">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-6 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
              <span>Dashboard with real-time urgency weighting. Prioritize what matters in the moment.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-6 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
              <span>Organize and stay-on-top of all of your DAW project files, exports, and deliverables. Linked automatically.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-6 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
              <span>Prep and plan albums. Ship faster with fewer mistakes.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-6 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
              <span>AI helps you plan and prioritize your creative work. AI drives your career forward, not replace you.</span>
            </li>
          </ul>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/kora"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-2 text-sm font-semibold text-slate-950 shadow-xl shadow-emerald-400/40 hover:bg-emerald-300"
            >
              Explore Kora
            </Link>
            <Link
              href="/export-flow"
              className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/60 px-6 py-2 text-sm font-semibold text-slate-100 hover:border-emerald-400/70 hover:text-emerald-200"
            >
              See Export Flow
            </Link>
            <Link
              href="/key-shift-pro"
              className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/60 px-6 py-2 text-sm font-semibold text-slate-100 hover:border-emerald-400/70 hover:text-emerald-200"
            >
              See Key Shift Pro
            </Link>
          </div>

          <p className="mt-4 text-xs text-slate-400 sm:text-[13px]">
            Export Flow is the premium delivery system. Key Shift Pro is the special weapon for niche all-key exports. Get them both bundled with Kora Creator or Pro
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
                  3 products · Growing roadmap
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
                      Operating system for music creators
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Deliverables-first planning, relationship follow-ups, and a realistic “Top 3 Today”.
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
                      Special weapon for niche exports
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Sound designers: turn one mix into deliverable-ready all-key exports.
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

              {/* Export Flow preview row */}
              <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                      Export Flow
                    </p>
                    <p className="mt-1 text-[13px] font-medium text-slate-100">
                      Premium delivery system
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Metadata, filename rules, batch export automation, and HQ file conversions.
                    </p>
                  </div>
                  <Link
                    href="/export-flow"
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
                  <li>• Creator-first AI policy (your data stays yours).</li>
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
          Save countless hours with Kora as your operating system, add Export Flow when delivery quality matters, and pull out Key Shift
          Pro for powerful all-key export workflows.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {/* Kora card */}
          <div className="flex flex-col rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300 uppercase">
                  Kora
                </p>
                <p className="mt-1 text-sm font-medium text-slate-100">
                  The operating system for music creators
                </p>
              </div>
              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[11px] text-emerald-200">
                In active development
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-300">
              Plan albums like deliverables, track real-world deadlines, and keep relationships warm with automatic
              follow-ups — while staying local-first and creator-first.
            </p>
            <div className="mt-4 flex gap-2 text-[11px] text-slate-400">
              <span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1">
                Deliverables-first planning
              </span>
              <span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1">
                Follow-ups + relationships
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

          {/* Export Flow card */}
          <div className="flex flex-col rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300 uppercase">
                  Export Flow
                </p>
                <p className="mt-1 text-sm font-medium text-slate-100">
                  The premium delivery system for exports
                </p>
              </div>
              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[11px] text-emerald-200">
                New
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-300">
              Metadata templates, filename rule logic, batch export automation, and HQ file conversions — built for calm,
              repeatable delivery.
            </p>
            <div className="mt-4 flex gap-2 text-[11px] text-slate-400">
              <span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1">
                Metadata + filenames
              </span>
              <span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1">
                Batch recipes + conversions
              </span>
            </div>
            <div className="mt-5">
              <Link
                href="/export-flow"
                className="inline-flex items-center text-sm font-semibold text-emerald-300 hover:text-emerald-200"
              >
                Learn more about Export Flow →
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
              The special weapon for niche workflows: sound designers and power users exporting deliverable-ready mixes
              in multiple keys. Detects key, shifts with quality, and names files the way publishers expect.
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
