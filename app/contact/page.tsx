import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Contact – Soniteq",
  description: "Contact Soniteq support, and submit bug reports or feature requests.",
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function contactSupport(formData: FormData) {
  "use server";

  const name = String(formData.get("name") || "").trim().slice(0, 120);
  const fromEmail = String(formData.get("email") || "").trim().slice(0, 254);
  const subject = String(formData.get("subject") || "").trim().slice(0, 180);
  const message = String(formData.get("message") || "").trim().slice(0, 8000);

  if (!isValidEmail(fromEmail)) {
    redirect(`/contact?error=${encodeURIComponent("Please enter a valid email.")}`);
  }
  if (!message) {
    redirect(`/contact?error=${encodeURIComponent("Please enter a message.")}`);
  }

  const fullSubject = subject ? subject : "Support request";
  const bodyLines = [
    message,
    "",
    "---",
    `From: ${name || "(no name)"} <${fromEmail}>`,
    "Sent via soniteq.ai contact form",
  ];

  const mailto = `mailto:support@soniteq.ai?subject=${encodeURIComponent(
    `[Soniteq] ${fullSubject}`,
  )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

  redirect(mailto);
}

type SearchParams = Record<string, string | string[] | undefined>;

export default async function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>;
}) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const errorParam = resolvedSearchParams?.error;
  const errorMessage =
    typeof errorParam === "string"
      ? errorParam
      : Array.isArray(errorParam)
        ? errorParam[0]
        : undefined;
  const safeErrorMessage = errorMessage ? errorMessage.slice(0, 240) : undefined;

  return (
    <div>
      <section className="mt-12 grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-slate-900/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-200/90">
            Soniteq · Contact
          </div>

          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
            Support, bug reports, and feature requests
          </h1>

          <p className="mt-4 max-w-xl text-sm text-slate-300 sm:text-base">
            We build creator-first tools that remove friction from real music workflows. If something breaks or you have
            an idea, we want to hear it.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Bug Report / Feature Request
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Use our quick form for bugs, UX issues, and feature ideas.
              </p>
              <a
                href="https://forms.gle/YY1UySFvhRijBopWA"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center text-sm font-semibold text-emerald-300 hover:text-emerald-200"
              >
                Open the Google Form →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Why we exist</p>
              <p className="mt-2 text-sm text-slate-300">
                We build tools that help music creators compete and grow in the age of AI — not replace them. Your work
                stays yours: we do not use your data to train generative music models or competing systems.
              </p>
              <p className="mt-3 text-xs text-slate-500">
                Learn more on{" "}
                <Link href="/kora" className="font-semibold text-emerald-300 hover:text-emerald-200">
                  Kora
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            Email support
          </p>
          <p className="mt-2 text-sm text-slate-300">
            This form opens your email client to send a message to{" "}
            <a href="mailto:support@soniteq.ai" className="font-semibold text-emerald-300 hover:text-emerald-200">
              support@soniteq.ai
            </a>
            .
          </p>

          {safeErrorMessage ? (
            <div
              role="alert"
              className="mt-4 rounded-2xl border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-100"
            >
              {safeErrorMessage}
            </div>
          ) : null}

          <form action={contactSupport} className="mt-4 flex flex-col gap-3">
            <input
              name="name"
              type="text"
              placeholder="Name (optional)"
              className="w-full rounded-2xl border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400/80 focus:outline-none"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="you@studio.com"
              className="w-full rounded-2xl border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400/80 focus:outline-none"
            />
            <input
              name="subject"
              type="text"
              placeholder="Subject (optional)"
              className="w-full rounded-2xl border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400/80 focus:outline-none"
            />
            <textarea
              name="message"
              required
              rows={6}
              placeholder="How can we help?"
              className="w-full rounded-2xl border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400/80 focus:outline-none"
            />

            <button
              type="submit"
              className="rounded-full bg-emerald-400 px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-400/40 hover:bg-emerald-300"
            >
              Contact support
            </button>

            <p className="text-xs text-slate-500">
              If your email client doesn&apos;t open, email us directly at{" "}
              <a href="mailto:support@soniteq.ai" className="font-semibold text-emerald-300 hover:text-emerald-200">
                support@soniteq.ai
              </a>
              .
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
