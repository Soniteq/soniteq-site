import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Export Flow – Soniteq",
  description:
    "Export Flow combines metadata intelligence, filename logic, and batch export automation into one calm, reliable workflow for audio delivery.",
};

export default function ExportFlowPage() {
  return (
    <div>
      <section className="mt-12 grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-slate-900/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-200/90">
            Soniteq · Export Flow
          </div>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
            A professional delivery system for audio creators
          </h1>

          <p className="mt-4 max-w-xl text-sm text-slate-300 sm:text-base">
            Export Flow combines metadata intelligence, filename logic, and batch export automation into one calm,
            reliable workflow — so you can deliver faster without mistakes.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-2 text-sm font-semibold text-slate-950 shadow-xl shadow-emerald-400/40 hover:bg-emerald-300"
            >
              See pricing
            </a>
            <Link
              href="/kora#pricing"
              className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/60 px-6 py-2 text-sm font-semibold text-slate-100 hover:border-emerald-400/70 hover:text-emerald-200"
            >
              Included with Kora Creator &amp; Pro
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-6 text-sm text-slate-200">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            Creator-first AI policy
          </p>
          <p className="mt-2 text-sm text-slate-300">
            We do not use your data to train generative music models or any competing systems. Your work stays yours.
            Export Flow is built to help creators compete and grow in the age of AI — not replace them.
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Your data is used only to power your planning experience. If/when cloud features are enabled, we&apos;ll keep
            this same promise.
          </p>
        </div>
      </section>

      <section className="mt-16 border-t border-slate-800/70 pt-10">
        <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
          Why Export Flow exists
        </h2>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 text-sm text-slate-200">
          <li>• Batch exports without broken metadata</li>
          <li>• Consistent filenames across clients, libraries, and publishers</li>
          <li>• Zero guesswork about versions, keys, or delivery formats</li>
          <li>• One-click export recipes instead of repetitive setup</li>
        </ul>
      </section>

      <section className="mt-16 border-t border-slate-800/70 pt-10">
        <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
          Export Flow vs typical tools
        </h2>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-800/80 text-[11px] uppercase tracking-[0.16em] text-slate-500">
                <th className="py-3 pr-4">Feature</th>
                <th className="py-3 pr-4">Export Flow</th>
                <th className="py-3">Typical tools</th>
              </tr>
            </thead>
            <tbody className="text-slate-200">
              {[
                ["Metadata templates", "✓", "Rare / limited"],
                ["Filename rule engine", "✓", "Basic tokens"],
                ["Export recipes", "✓", "✕"],
                ["Validation before export", "✓", "✕"],
                ["Project awareness", "✓ (via Kora)", "✕"],
                ["Creator-first AI policy", "✓", "Unclear"],
              ].map(([feature, ours, typical]) => (
                <tr key={feature} className="border-b border-slate-900/70">
                  <td className="py-3 pr-4">{feature}</td>
                  <td className="py-3 pr-4">{ours}</td>
                  <td className="py-3">{typical}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="pricing" className="mt-16 border-t border-slate-800/70 pt-10">
        <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
          Pricing
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5">
            <p className="text-sm font-medium text-slate-100">$19 / month</p>
            <p className="mt-1 text-xs text-slate-400">Export Flow standalone</p>
          </div>

          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5">
            <p className="text-sm font-medium text-slate-100">Included</p>
            <p className="mt-1 text-xs text-slate-400">Kora Creator</p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-slate-950/80 p-5">
            <p className="text-sm font-medium text-emerald-300">Included (Pro)</p>
            <p className="mt-1 text-xs text-slate-400">Kora Pro</p>
          </div>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Want access via Kora? Compare plans on{" "}
          <Link href="/kora#pricing" className="font-semibold text-emerald-300 hover:text-emerald-200">
            Kora pricing
          </Link>
          .
        </p>
      </section>

      <section className="mt-16 border-t border-slate-800/70 pt-10 text-sm text-slate-300">
        <p>
          Export Flow is part of the Soniteq creator ecosystem. Your work is never used to train generative music or
          competing AI systems. Ever.
        </p>
      </section>
    </div>
  );
}

