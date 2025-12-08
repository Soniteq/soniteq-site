// app/kora/page.tsx
import Link from "next/link";

export default function KoraPage() {
  return (
    <div>
      {/* Hero */}
      <section className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-slate-900/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-200/90">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,242,197,0.9)]" />
            Kora · by Soniteq
          </div>

          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-[3.2rem]">
            An AI-backed project planner
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-sky-300 bg-clip-text text-transparent">
              {" "}
              built for real creative work
            </span>
            .
          </h1>

          <p className="mt-4 max-w-xl text-sm text-slate-300 sm:text-base">
            Kora helps you turn a wall of projects, album briefs, and random
            notes into a focused, realistic plan. It understands priorities,
            deadlines, and context—so your &quot;Top 3 Today&quot; is actually the three
            things that move the needle.
          </p>

          <ul className="mt-5 space-y-2 text-sm text-slate-200">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-6 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
              <span>
                AI-assisted daily plan that weighs priority, due dates, and
                project importance (like publisher or client).
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-6 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
              <span>
                Projects, tracks, and subtasks organized in one place—especially
                useful for multi-album and multi-client workflows.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-6 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
              <span>
                Built for creatives first: language around releases, albums,
                cues, briefs, and deliverables instead of corporate jargon.
              </span>
            </li>
          </ul>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-2 text-sm font-semibold text-slate-950 shadow-xl shadow-emerald-400/40 hover:bg-emerald-300"
            >
              Join Kora early access
            </a>
            <p className="text-xs text-slate-400 sm:text-[13px]">
              Web-based first · deeper integrations and native apps on the
              roadmap.
            </p>
          </div>
        </div>

        {/* Right: mock UI of Top 3 Today */}
        <div className="relative">
          <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[36px] bg-emerald-500/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[26px] border border-slate-700/60 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 shadow-2xl shadow-black/60">
            <div className="border-b border-slate-800/80 bg-slate-900/70 px-4 py-3">
              <div className="flex items-center justify-between gap-2">
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                    Today with Kora
                  </span>
                  <span className="text-xs text-slate-300">
                    AI-prioritized focus list · synced with your projects
                  </span>
                </div>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
                  Top 3 selected
                </span>
              </div>
            </div>

            <div className="space-y-3 px-4 pb-4 pt-3 text-xs">
              {/* Row: Top 3 Today */}
              <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-3">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                    Top 3 today
                  </p>
                  <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-[10px] text-emerald-200">
                    Auto-picked by Kora
                  </span>
                </div>
                <ol className="mt-2 space-y-1.5 text-[11px] text-slate-200">
                  <li className="flex justify-between gap-2 rounded-xl bg-slate-950/80 px-2.5 py-1.5">
                    <span>
                      1 · Finish mix tweaks on{" "}
                      <span className="font-medium">Sports Promo – Main Edit</span>
                    </span>
                    <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] text-emerald-200">
                      Due today · High
                    </span>
                  </li>
                  <li className="flex justify-between gap-2 rounded-xl bg-slate-950/80 px-2.5 py-1.5">
                    <span>
                      2 · Outline next 3 tracks for{" "}
                      <span className="font-medium">Ad Pop album</span>
                    </span>
                    <span className="rounded-full bg-sky-400/10 px-2 py-0.5 text-[10px] text-sky-200">
                      Warner · Medium
                    </span>
                  </li>
                  <li className="flex justify-between gap-2 rounded-xl bg-slate-950/80 px-2.5 py-1.5">
                    <span>
                      3 · Prep deliverables list for{" "}
                      <span className="font-medium">Kora v1 launch</span>
                    </span>
                    <span className="rounded-full bg-amber-400/10 px-2 py-0.5 text-[10px] text-amber-200">
                      Soniteq · Planning
                    </span>
                  </li>
                </ol>
              </div>

              {/* Projects snapshot */}
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-3">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                    Projects
                  </p>
                  <ul className="mt-2 space-y-1.5 text-[11px] text-slate-200">
                    <li className="flex justify-between">
                      <span>Warner – Ad Pop Album</span>
                      <span className="text-slate-500">3 tracks in progress</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sports SDX – Impacts</span>
                      <span className="text-slate-500">12 cues</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Kora v1 Launch</span>
                      <span className="text-slate-500">Roadmap draft</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-3">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                    Focus mode
                  </p>
                  <p className="mt-2 text-[11px] text-slate-200">
                    Kora hides everything except what you committed to for this
                    block. When the session ends, it suggests a realistic next
                    block based on remaining energy and deadlines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="mt-16 grid gap-10 border-t border-slate-800/70 pt-10 md:grid-cols-3"
      >
        <div className="md:col-span-1">
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
            How Kora thinks about your week
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Instead of juggling dozens of tasks across random lists, Kora gives
            you a clear lane for today, the week, and upcoming commitments—rooted
            in the reality of your workload.
          </p>
        </div>
        <div className="md:col-span-2 grid gap-4 text-sm text-slate-200 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              1 · Capture & connect
            </p>
            <p className="mt-2 text-sm text-slate-300">
              Add projects, tracks, and tasks in simple language. Tag them with
              clients, publishers, or labels so Kora understands what&apos;s important.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              2 · Let Kora prioritize
            </p>
            <p className="mt-2 text-sm text-slate-300">
              Kora weighs deadlines, status, and priority levels (plus notes you
              give it) to surface a realistic Top 3 and supportive tasks.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              3 · Focus & review
            </p>
            <p className="mt-2 text-sm text-slate-300">
              Work in focused blocks, then review what moved. Kora suggests what
              to pull forward tomorrow so nothing important slips.
            </p>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section
        id="for-who"
        className="mt-16 grid gap-10 border-t border-slate-800/70 pt-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1.2fr)]"
      >
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
            Built for overloaded creatives
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Kora is opinionated about working in creative seasons, not just
            sprints. It assumes your day has deep work blocks, admin pockets,
            and last-minute requests—then helps you design around that.
          </p>

          <ul className="mt-5 space-y-2 text-sm text-slate-200">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-6 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
              <span>Composers, producers, and sound designers juggling albums and briefs.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-6 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
              <span>Multidisciplinary creatives balancing client work and original projects.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-6 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
              <span>Small teams who want a shared view of what today actually looks like.</span>
            </li>
          </ul>
        </div>

        {/* Spec / roadmap card */}
        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Kora roadmap (high level)
              </span>
              <span className="mt-1 text-sm font-medium text-slate-100">
                Early focus on solo creators · Teams later
              </span>
            </div>
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
              Private alpha
            </span>
          </div>

          <ul className="mt-4 space-y-2 text-[13px] text-slate-200">
            <li>• Smart &quot;Top 3 Today&quot; + weekly planning view.</li>
            <li>• Projects, tracks, and subtask hierarchy tuned for creative work.</li>
            <li>• Notes and context that Kora actually reads when prioritizing.</li>
            <li>• Later: calendar views, integrations, and team visibility.</li>
          </ul>
        </div>
      </section>

      {/* Waitlist / pricing placeholder */}
      <section
        id="waitlist"
        className="mt-16 border-t border-slate-800/70 pt-10"
      >
        <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
          Early access & pricing
        </h2>
        <p className="mt-3 max-w-xl text-sm text-slate-300">
          Kora will launch with a straightforward pricing model once the core
          features are battle-tested with early users. For now, we&apos;re inviting
          a small group of creators to shape the first release.
        </p>

        <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl text-sm text-slate-300">
            <p>
              Share your email and how you work. If you&apos;re a good fit for the
              early wave, we&apos;ll reach out with details and a way to influence
              the roadmap.
            </p>
          </div>
          <form className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
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
              Join early access
            </button>
          </form>
        </div>

        <p className="mt-3 text-xs text-slate-500">
          We&apos;ll only email when there&apos;s something meaningful—no noise.
        </p>
      </section>

      {/* Simple link back to suite */}
      <section className="mt-12 text-xs text-slate-500">
        <p>
          Looking for audio tooling instead?{" "}
          <Link
            href="/key-shift-pro"
            className="font-semibold text-emerald-300 hover:text-emerald-200"
          >
            Check out Key Shift Pro →
          </Link>
        </p>
      </section>
    </div>
  );
}
