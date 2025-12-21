import type { Metadata } from "next";
import SuccessHandoff from "./success-handoff";

export const metadata: Metadata = {
  title: "Kora login success - Soniteq",
  description: "Your login was confirmed. Kora should open automatically.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SuccessPage() {
  return (
    <section className="mx-auto mt-12 max-w-3xl">
      <div className="rounded-3xl border border-emerald-400/20 bg-slate-950/70 p-8 shadow-2xl shadow-emerald-500/10">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-200">
            <span className="text-xs font-semibold uppercase tracking-[0.18em]">
              OK
            </span>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-slate-900/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-200/90">
              Kora login
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
              Success
            </h1>
            <p className="mt-2 text-sm text-slate-300 sm:text-base">
              Your login was confirmed. Kora should open automatically.
            </p>
          </div>
        </div>

        <SuccessHandoff />
      </div>
    </section>
  );
}
