"use client";

import { useEffect, useState } from "react";

const DEFAULT_KORA_DEEP_LINK = "kora://auth-callback";

type HandoffStatus = "checking" | "ready" | "missing";

export default function SuccessHandoff() {
  const [status, setStatus] = useState<HandoffStatus>("checking");
  const [deepLink, setDeepLink] = useState<string>("");
  const [deepLinkBase, setDeepLinkBase] = useState<string>(
    DEFAULT_KORA_DEEP_LINK,
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const rawDeepLink = params.get("deep_link");
    const safeDeepLink =
      rawDeepLink && rawDeepLink.startsWith("kora://")
        ? rawDeepLink
        : DEFAULT_KORA_DEEP_LINK;
    setDeepLinkBase(safeDeepLink);

    const hash = window.location.hash || "";
    if (hash.includes("access_token=")) {
      setDeepLink(`${safeDeepLink}${hash}`);
      setStatus("ready");
      return;
    }

    setStatus("missing");
  }, []);

  if (status === "checking") {
    return (
      <p className="mt-6 text-sm text-slate-400">
        Confirming your login token...
      </p>
    );
  }

  if (status === "missing") {
    return (
      <div className="mt-6 rounded-2xl border border-amber-400/25 bg-amber-400/10 p-4 text-sm text-amber-100">
        <p className="font-semibold">No login token found.</p>
        <p className="mt-2 text-amber-100/80">
          Please open the magic link from your email to finish signing in.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="/kora"
            className="inline-flex items-center justify-center rounded-2xl border border-amber-200/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100"
          >
            Back to Kora
          </a>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-2xl border border-amber-200/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100/80"
          >
            Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4">
      <p className="text-sm text-slate-300">
        If Kora did not open, use the button below to launch it with your login
        token.
      </p>
      <a
        href={deepLink}
        className="inline-flex items-center justify-center rounded-2xl bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-300"
      >
        Open Kora
      </a>
      <p className="text-xs text-slate-500">
        Deep link:{" "}
        <span className="font-mono text-slate-400">{deepLinkBase}</span>
      </p>
    </div>
  );
}
