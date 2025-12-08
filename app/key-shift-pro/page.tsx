// app/key-shift-pro/page.tsx
import React from "react";
import Link from "next/link";

export default function KeyShiftProPage() {
  return (
    <main className="min-h-[calc(100vh-6rem)] text-slate-100">
      {/* Hero */}
      <section className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
        {/* Left: copy */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-200/90">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
            Key Shift Pro · by Soniteq
          </div>

          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-[3.2rem]">
            Turn sounds into
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-sky-300 bg-clip-text text-transparent">
              {" "}
              all-key deliverables{" "}
            </span>
            in minutes.
          </h1>

          <p className="mt-4 max-w-xl text-sm text-slate-300 sm:text-base">
            <strong>Key Shift Pro</strong> by{" "}
            <span className="font-semibold">Soniteq</span> is a
            key-aware pitch-shifting engine built for sound designers. Skip the manual bouncing,
            renaming, and file chaos – Key Shift Pro handles the heavy lifting
            so you can stay in the DAW.
          </p>

          {/* Hero bullets */}
          <ul className="mt-5 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-400/10 text-[10px] text-cyan-300">
                ✓
              </span>
              <span>Generate all 12 keys (or white keys only) in one pass.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-400/10 text-[10px] text-cyan-300">
                ✓
              </span>
              <span>Formant-aware, high-quality pitch shifting that keeps impact.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-400/10 text-[10px] text-cyan-300">
                ✓
              </span>
              <span>Auto-structured filenames that match publisher specs.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-400/10 text-[10px] text-cyan-300">
                ✓
              </span>
              <span>Built with real trailer & sound design workflows in mind.</span>
            </li>
          </ul>

          {/* CTA block */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-2 text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-400/40 hover:bg-cyan-300"
            >
              Get early-access pricing
            </a>
            <p className="text-xs text-slate-400 sm:text-[13px]">
              No subscriptions during beta. One licence, lifetime updates for
              v1.x.
            </p>
          </div>
        </div>

        {/* Right: product “card” (kept similar to earlier) */}
        <div className="relative">
          <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[36px] bg-cyan-500/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[26px] border border-slate-700/60 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 shadow-2xl shadow-black/60">
            <div className="border-b border-slate-800/80 bg-slate-900/70 px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 text-xs font-semibold text-slate-950">
                    K
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-semibold tracking-[0.16em] text-slate-200 uppercase">
                      Key Shift Pro Engine
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Batch key-shift session
                    </span>
                  </div>
                </div>
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-[11px] font-medium text-cyan-200">
                  Session ready · 12 keys
                </span>
              </div>
            </div>

            {/* Fake UI (same structure as before) */}
            <div className="space-y-4 px-4 pb-4 pt-3 text-xs">
              {/* File row */}
              <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-col">
                    <span className="text-[11px] uppercase tracking-[0.14em] text-slate-500">
                      Source cue
                    </span>
                    <span className="mt-1 text-[13px] font-medium text-slate-100">
                      SDX_Huge Braam_Main.wav
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Detected key: <span className="text-emerald-300">D♯ minor</span>
                    </span>
                  </div>
                  <button className="rounded-full border border-slate-700/70 px-3 py-1 text-[11px] font-medium text-slate-200 hover:border-cyan-400/70 hover:text-cyan-200">
                    Change file
                  </button>
                </div>
              </div>

              {/* Grid of keys */}
              <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.14em] text-slate-500">
                    Export keys
                  </span>
                  <button className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-medium text-cyan-200 hover:bg-cyan-400/20">
                    White keys only
                  </button>
                </div>
                <div className="mt-2 grid grid-cols-6 gap-1.5 text-[11px]">
                  {["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"].map(
                    (k) => (
                      <button
                        key={k}
                        className={`flex items-center justify-center rounded-full border px-1.5 py-1 ${
                          ["C", "E", "G", "A"].includes(k)
                            ? "border-cyan-400/80 bg-cyan-400/15 text-cyan-200"
                            : "border-slate-700/80 bg-slate-900/80 text-slate-300 hover:border-cyan-400/60 hover:text-cyan-200"
                        }`}
                      >
                        {k}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Filename preset + export */}
              <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-3">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="uppercase tracking-[0.14em]">
                      Filename preset
                    </span>
                    <button className="text-[11px] text-cyan-300 hover:text-cyan-200">
                      Save preset
                    </button>
                  </div>
                  <div className="rounded-xl border border-slate-700/80 bg-slate-950/80 px-3 py-2 text-[11px] text-slate-200">
                    &lt;AlbumCode&gt;_&lt;CueName&gt;_&lt;Key&gt;_SDX
                  </div>
                  <span className="text-[11px] text-slate-500">
                    Example:{" "}
                    <span className="text-slate-200">SPRT_Kickoff_Em_SDX.wav</span>
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/80 px-3 py-2.5">
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-[0.14em] text-slate-500">
                    Ready to export
                  </span>
                  <span className="text-[11px] text-slate-400">
                    4 keys selected · Est. 15 files including mains
                  </span>
                </div>
                <button className="rounded-full bg-cyan-400 px-4 py-1.5 text-[11px] font-semibold text-slate-950 shadow-lg shadow-cyan-400/40 hover:bg-cyan-300">
                  Export all keys
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works, spec, pricing etc. */}
      {/* You can keep or adapt the sections I gave earlier for How it works,
          Specs, Pricing, FAQ – the structure is the same, just under this route. */}

      <section
        id="pricing"
        className="mt-16 border-t border-slate-800/70 pt-10"
      >
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
              Early-access pricing
            </h2>
            <p className="mt-3 max-w-md text-sm text-slate-300">
              During the beta, Key Shift Pro is a **one-time licence**. As the
              feature set grows and Windows support lands, pricing will increase
              for new customers – but early adopters keep beta pricing for v1.x.
            </p>
          </div>
          <div className="rounded-2xl border border-cyan-400/60 bg-slate-950/80 px-6 py-4 text-right shadow-[0_0_40px_rgba(56,189,248,0.35)]">
            <p className="text-[11px] uppercase tracking-[0.18em] text-cyan-300">
              Beta licence
            </p>
            <p className="mt-1 text-3xl font-semibold text-slate-50">
              $<span className="tabular-nums">9</span>
              <span className="text-xs font-normal text-slate-400"> USD</span>
            </p>
            <p className="mt-1 text-[11px] text-slate-400">
              Includes all 1.x updates · 1 seat, personal use for commercial deliverables.
            </p>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-4 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl text-sm text-slate-300">
            <p>
              Want in early? Drop your email and we&apos;ll reserve beta pricing for
              you and send you install instructions as soon as your OS is
              supported.
            </p>
          </div>
          <form className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <input
              type="email"
              required
              placeholder="you@studio.com"
              className="w-full rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400/80 focus:outline-none sm:w-64"
            />
            <button
              type="submit"
              className="rounded-full bg-cyan-400 px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/40 hover:bg-cyan-300"
            >
              Reserve beta pricing
            </button>
          </form>
        </div>
      </section>

      <section className="mt-12 text-xs text-slate-500">
        <p>
          Looking for the AI planner instead?{" "}
          <Link
            href="/kora"
            className="font-semibold text-emerald-300 hover:text-emerald-200"
          >
            Explore Kora →
          </Link>
        </p>
      </section>
    </main>
  );
}
