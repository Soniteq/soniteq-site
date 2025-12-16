// app/kora/page.tsx
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { upsertBrevoContact } from "@/lib/brevo";

export const dynamic = "force-dynamic";

const featureMatrix: {
  label: string;
  note?: string;
  local: boolean | string;
  creator: boolean | string;
  pro: boolean | string;
}[] = [
  { label: "Offline-first (local-only)", note: "Runs without cloud sync.", local: true, creator: true, pro: true },
  { label: "Projects + albums + briefs", local: true, creator: true, pro: true },
  { label: "Timeline + due dates + follow-ups", local: true, creator: true, pro: true },
  { label: "Local coach (rules-based)", note: "No external AI calls.", local: true, creator: true, pro: true },
  { label: "Basic integrations", note: "Connect your workflow with essential apps.", local: true, creator: true, pro: true },
  { label: "Tools page modules", note: "Tools expand over time.", local: "Basic", creator: true, pro: true },
  { label: "Key Shift Pro with Render", note: "Fast key changes + render/export flow.", local: false, creator: true, pro: true },
  { label: "Cross-device continuity", note: "Sync your projects across devices.", local: false, creator: true, pro: true },
  {
    label: "Advanced AI planning",
    note: "Smarter daily prioritization and richer summaries.",
    local: false,
    creator: true,
    pro: true,
  },
  { label: "iPhone app link", local: false, creator: true, pro: true },
  { label: "iPhone widgets", local: false, creator: true, pro: true },
  { label: "Extended AI access", note: "Higher daily usage for power workflows.", local: false, creator: false, pro: true },
  { label: "Cloud storage", note: "Backed-up storage for your synced data.", local: false, creator: false, pro: true },
  { label: "Advanced integrations", note: "Deeper automation and higher-leverage connections.", local: false, creator: false, pro: true },
  {
    label: "Cross-device project export linking",
    note: "Keep most recent exports linked across devices.",
    local: false,
    creator: false,
    pro: true,
  },
  {
    label: "Team collaboration",
    note: "Studio / Teams / Institutional (coming soon).",
    local: false,
    creator: false,
    pro: false,
  },
];

const competitorMatrix: {
  category: string;
  competitors: string;
  whatTheyDoWell: string;
  whereTheyFallShort: string;
  howKoraWins: string;
}[] = [
  {
    category: "Docs & knowledge bases",
    competitors: "Notion, Evernote, Whiteboard apps",
    whatTheyDoWell: "Flexible notes, databases, templates, second-brain capture.",
    whereTheyFallShort:
      "Not anchored to deliverables: deadlines, follow-ups, and creator-specific objects become DIY workarounds.",
    howKoraWins:
      "Notes attach to real creative objects (albums, projects, contacts) so planning stays operational, not theoretical.",
  },
  {
    category: "Project management",
    competitors: "Trello, ClickUp, Monday, Basecamp",
    whatTheyDoWell: "Boards, assignments, automations, team workflows.",
    whereTheyFallShort:
      "Built for generic work. Creative pipelines (albums, cues, briefs, exports) require heavy customization.",
    howKoraWins:
      "Creator-native structure: album + track planning, briefs, due dates, and delivery-minded states without enterprise noise.",
  },
  {
    category: "Tasks, habits & focus timers",
    competitors: "Todoist, TickTick, Blitzit, Pomodoro apps",
    whatTheyDoWell: "Fast capture, checklists, recurring tasks, timers, habit tracking.",
    whereTheyFallShort:
      "Great for personal productivity, but they don’t understand creative inventory or relationship urgency.",
    howKoraWins:
      "Your Top 3 is chosen from real creative context: deadlines, priorities, follow-ups, and workload reality.",
  },
  {
    category: "AI scheduling & assistants",
    competitors: "Motion, Fyxer.ai, general AI tools",
    whatTheyDoWell: "Auto-scheduling, summaries, email drafting, admin assistance.",
    whereTheyFallShort:
      "They don’t know your albums, briefs, deliverables, or what ‘done’ means in a production workflow.",
    howKoraWins:
      "AI is grounded in your creative objects and creator-first policy — built to help you ship, not replace you.",
  },
  {
    category: "CRM systems",
    competitors: "HubSpot",
    whatTheyDoWell: "Pipelines, reporting, sales automation.",
    whereTheyFallShort:
      "Optimized for sales teams — not publisher/library relationships, pitches, and creative follow-up cadence.",
    howKoraWins:
      "Relationship tracking for creators: follow-ups, context, and the music you’re pitching in one place.",
  },
  {
    category: "Audio delivery utilities",
    competitors: "Rebounce, Bounce Butler, AudioFile Calc",
    whatTheyDoWell: "Export helpers, review links, batch workflows.",
    whereTheyFallShort:
      "They solve one slice (exports or review), but they don’t manage the full creator pipeline end-to-end.",
    howKoraWins:
      "Export Flow + Key Shift Pro integrate delivery into your planning system: naming, metadata, recipes, and validation.",
  },
];

const manifestoPoints: { title: string; body: string }[] = [
  {
    title: "Creator-first by design",
    body: "Language, defaults, and workflows are built around albums, briefs, deliverables, and relationship follow-ups.",
  },
  {
    title: "Local-first foundation",
    body: "Kora Local runs offline and stays private by default. You control your data and your workflow.",
  },
  {
    title: "Relationships stay warm",
    body: "Follow-ups are tracked with context so publisher, library, and client touchpoints don’t slip through the cracks.",
  },
  {
    title: "Built to help you compete",
    body: "We do not use your data to train generative music models or competing systems — Kora exists to help creators grow, not replace them.",
  },
];

const dashboardModules: { title: string; body: string }[] = [
  { title: "Top 3 Today", body: "AI-picked priorities from deadlines, urgency, and workload." },
  { title: "Albums in Motion", body: "Briefs, track targets, progress bars, and delivery status." },
  { title: "Follow-ups Due", body: "Never miss a publisher/library touchpoint again." },
  { title: "Projects", body: "DAW links, milestones, and real-world timelines." },
  { title: "Whiteboard Notes", body: "Notes that attach to albums, projects, contacts, or tasks." },
  { title: "Calendar", body: "Daily / weekly / monthly views built for creative seasons." },
  { title: "Focus Timer", body: "Pomodoro + deep work blocks tied to real work." },
  { title: "Delivery Tools", body: "Folder watching, naming systems, metadata, and exports." },
];

const creatorWorkflows: {
  title: string;
  subtitle: string;
  bullets: string[];
}[] = [
  {
    title: "Production Music & Sync Composers",
    subtitle: "Multi-album output, briefs, deadlines, and follow-ups—without the chaos.",
    bullets: [
      "Multi-album timelines + progress bars",
      "Publisher/library follow-ups with context",
      "Delivery workflows: exports, naming, metadata",
    ],
  },
  {
    title: "Artists & EDM Producers",
    subtitle: "More finished songs. Less burnout. Clear momentum every day.",
    bullets: [
      "Project clarity + calendar blocks",
      "Mood-based language that keeps you grounded",
      "Audio timeline notes for feedback + revisions",
    ],
  },
  {
    title: "Producers, Beatmakers & Writers",
    subtitle: "Turn sessions into shipped work with fast organization and repeatable delivery.",
    bullets: [
      "Link any DAW session",
      "Whiteboard templates for hooks, drops, and briefs",
      "Export folder monitoring + quick deliverables",
    ],
  },
  {
    title: "Media / Film / Game Composers",
    subtitle: "Keep revisions, versions, and deadlines visible across multiple clients.",
    bullets: [
      "Client/project context at a glance",
      "Audio player + timestamp notes",
      "Clean handoffs with delivery-grade exports",
    ],
  },
];

const aiCapabilities: {
  title: string;
  body: string;
  bullets: string[];
}[] = [
  {
    title: "AI Flow Coach (Chatbot)",
    body: "A mood-based assistant that helps you pick the next right work—without kitchen-sink responses.Urgency is balanced against deep work, context, and your creative rhythm.",
    bullets: [
      "Explains why something is urgent",
      "Balances deep work vs admin",
      "Keeps momentum without burnout",
      "Focuses on shipping over busywork",
      "Powered by your creative profile",
      "Adjusts tone based on your mood",
      "Chat-GPT-5-mini powered on Creator and Pro plans",
    ],
  },
  {
    title: "Smart summaries",
    body: "Instant context on albums, projects, and relationships so you don’t re-read everything.",
    bullets: [
      "Album + project status summaries",
      "Follow-up context before you send",
      "Morning brief + nightly recap (optional)",
    ],
  },
  {
    title: "Creator-first policy",
    body: "AI that supports your career—without training on your work or building competing systems.",
    bullets: [
      "No training generative music models",
      "Scoped, assistive AI",
      "Your work stays yours—always",
    ],
  },
];

async function joinWaitlist(formData: FormData) {
  "use server";

  const email = String(formData.get("email") || "").trim();
  const name = String(formData.get("name") || "").trim().slice(0, 120);
  const workflow = String(formData.get("workflow") || "").trim().slice(0, 4000);
  const source = String(formData.get("source") || "kora-page")
    .trim()
    .slice(0, 120);

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isValidEmail) {
    redirect(`/kora?error=${encodeURIComponent("Please enter a valid email.")}#waitlist`);
  }

  const brevoResult = await upsertBrevoContact({
    email,
    firstName: name || undefined,
    workflow,
    source,
  });
  if (!brevoResult.ok) {
    console.error("[Kora Waitlist] Brevo error", {
      email,
      source,
      at: new Date().toISOString(),
      brevoResult,
    });

    const messageForUser =
      process.env.NODE_ENV !== "production"
        ? `Brevo error: ${brevoResult.message}${brevoResult.status ? ` (status ${brevoResult.status})` : ""}`
        : "Waitlist is temporarily unavailable. Please try again in a moment.";
    redirect(
      `/kora?error=${encodeURIComponent(messageForUser)}#waitlist`,
    );
  }

  redirect(`/kora?submitted=1#waitlist`);
}

type SearchParams = Record<string, string | string[] | undefined>;

export default async function KoraPage({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>;
}) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const submittedParam = resolvedSearchParams?.submitted;
  const submitted =
    submittedParam === "1" || (Array.isArray(submittedParam) && submittedParam[0] === "1");
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
      {/* Hero */}
      <section className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-slate-900/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-200/90">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,242,197,0.9)]" />
            Kora · by Soniteq
          </div>

          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-[3.2rem]">
            The operating system for serious music creators.
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-sky-300 bg-clip-text text-transparent">
              {" "}
              A calm, workhorse dashboard
            </span>
            {" "}
            that helps you ship.
          </h1>

          <p className="mt-4 max-w-xl text-sm text-slate-300 sm:text-base">
            Kora replaces scattered notes, task apps, spreadsheets, and messy folders with one creator-native system.
            Plan albums and projects, track deliverables, and stay on top of follow-ups — with AI that works with you
            (not against you).
          </p>
          <p className="mt-3 max-w-xl text-xs text-slate-500 sm:text-sm">
            Not your computer operating system — your daily system for albums, relationships, and delivery.
          </p>

          <div className="mt-5 rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Creator-first AI policy
            </p>
            <p className="mt-2 text-sm text-slate-300">
              We do <span className="font-semibold text-slate-100">not</span> use your data to train generative music
              models or any competing systems. Your work stays yours. Kora is built to help creators{" "}
              <span className="font-semibold text-slate-100">compete and grow in the age of AI</span> — not replace
              them.
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Your data is used only to power your planning experience. If/when cloud features are enabled, we&apos;ll
              keep this same promise.
            </p>
          </div>

          <ul className="mt-5 space-y-2 text-sm text-slate-200">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-6 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
              <span>
                A complete view of multi-album, multi-project timelines — so you always know what’s due, what’s next,
                and what’s slipping.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-6 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
              <span>
                Built-in workflows: briefs, progress bars, DAW linking, exports, notes, follow-ups, and focus sessions —
                designed for professional delivery.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-6 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
              <span>
                Creator-first AI policy: we do <span className="font-semibold text-slate-100">not</span> train generative
                music models on your data. Kora helps you compete and grow — not replace you.
              </span>
            </li>
          </ul>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-2 text-sm font-semibold text-slate-950 shadow-xl shadow-emerald-400/40 hover:bg-emerald-300"
            >
              See pricing + request early access
            </a>
            <p className="text-xs text-slate-400 sm:text-[13px]">
              Mac-first at launch · iPhone app + widgets coming soon · unsubscribe anytime.
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
      {/* Visual: dashboard modules */}
      <section id="modules" className="mt-16 border-t border-slate-800/70 pt-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
              Your dashboard, your workflow
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300">
              Kora is modular by design. Turn on the tools you need, hide the fluff, and keep the whole creator pipeline
              visible—from albums and deadlines to follow-ups, exports, and focus blocks.
            </p>
          </div>
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center rounded-full border border-emerald-400/30 bg-slate-900/60 px-4 py-2 text-xs font-semibold text-emerald-200/90 hover:border-emerald-400/60"
          >
            Request early access →
          </a>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
          <div className="rounded-[26px] border border-slate-800/80 bg-slate-950/70 p-4">
            <div className="overflow-hidden rounded-[18px] border border-slate-800/80 bg-slate-950">
              <Image
                src="/kora/placeholder-dashboard.png"
                alt="Kora dashboard modules"
                width={1400}
                height={900}
                className="h-auto w-full"
                priority={false}
              />
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Placeholder image: <span className="font-semibold text-slate-400">/public/kora/placeholder-dashboard.png</span>
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {dashboardModules.map((m) => (
              <div key={m.title} className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">{m.title}</p>
                <p className="mt-2 text-sm text-slate-300">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

         {/* Replaces strip */}
      <section className="mt-16 border-t border-slate-800/70 pt-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Replaces</h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300">
              Stop duct-taping a multi-app stack. Kora consolidates it all into one creator-native system. Kora adds
              more power to your workflow while reducing app fatigue, context switching, and scattered data. 
            </p>
          </div>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full border border-emerald-400/30 bg-slate-900/60 px-4 py-2 text-xs font-semibold text-emerald-200/90 hover:border-emerald-400/60"
          >
            Compare plans →
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-slate-800/80 bg-slate-950/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            Replaces:
          </span>

          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-950/60 px-3 py-1 text-xs text-slate-200">
            <span className="text-base">🗒️</span>
            Notes
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-950/60 px-3 py-1 text-xs text-slate-200">
            <span className="text-base">✅</span>
            Tasks
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-950/60 px-3 py-1 text-xs text-slate-200">
            <span className="text-base">🗓️</span>
            Calendar
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-950/60 px-3 py-1 text-xs text-slate-200">
            <span className="text-base">🤝</span>
            CRM
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-950/60 px-3 py-1 text-xs text-slate-200">
            <span className="text-base">⏱️</span>
            Timer
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-950/60 px-3 py-1 text-xs text-slate-200">
            <span className="text-base">📊</span>
            Spreadsheets
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-950/60 px-3 py-1 text-xs text-slate-200">
            <span className="text-base">📊</span>
            Project Planner
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-950/60 px-3 py-1 text-xs text-slate-200">
            <span className="text-base">🎛️</span>
            Metadata Editor
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-950/60 px-3 py-1 text-xs text-slate-200">
            <span className="text-base">🔁</span>
            Audio Conversion Apps
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-950/60 px-3 py-1 text-xs text-slate-200">
            <span className="text-base">🧾</span>
            File Renaming
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-950/60 px-3 py-1 text-xs text-slate-200">
            <span className="text-base">🧮</span>
            Audio Calculator Tools
          </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-950/60 px-3 py-1 text-xs text-slate-200">
            <span className="text-base"></span>
            And Adds More To Your Stack
          </div>
        </div>

        <p className="mt-3 text-xs text-slate-500">
          You can still keep your favorite tools — Kora simply makes them optional.
        </p>
      </section>

      {/* How it works */}
      {/* Visual: how Kora thinks about your week */}
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

      {/* Manifesto */}
      {/* AI that works with you */}
      <section id="ai" className="mt-16 border-t border-slate-800/70 pt-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">AI that works with you</h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300">
              Kora uses AI to reduce decision fatigue—not to replace your creativity. It helps you prioritize, summarize,
              and follow through with mood-based, context-aware guidance. Your profile, your mood, and your workload shape how
              it speaks. Let AI handle the busywork, so you can focus on the music. Fuel your creativity, not fight to find it.
            </p>
          </div>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full border border-emerald-400/30 bg-slate-900/60 px-4 py-2 text-xs font-semibold text-emerald-200/90 hover:border-emerald-400/60"
          >
            See plans →
          </a>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:items-start">
          <div className="rounded-[26px] border border-slate-800/80 bg-slate-950/70 p-4">
            <div className="overflow-hidden rounded-[18px] border border-slate-800/80 bg-slate-950">
              <Image
                src="/kora/placeholder-ai-coach.png"
                alt="Kora AI Coach Dock"
                width={1400}
                height={900}
                className="h-auto w-full"
              />
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Placeholder image: <span className="font-semibold text-slate-400">/public/kora/placeholder-ai-coach.png</span>
            </p>
          </div>

          <div className="grid gap-3">
            {aiCapabilities.map((cap) => (
              <div key={cap.title} className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">{cap.title}</p>
                <p className="mt-2 text-sm text-slate-300">{cap.body}</p>
                <ul className="mt-3 space-y-1.5 text-[13px] text-slate-200">
                  {cap.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200/90">Privacy + control</p>
              <p className="mt-2 text-sm text-slate-200">
                Kora can run local-first, and when cloud features are enabled, your data is still never used to train
                generative or competing systems. You get the upside of AI without the downside.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="manifesto"
        className="mt-16 grid gap-10 border-t border-slate-800/70 pt-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)]"
      >
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
            Why Kora exists
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Kora exists because creators deserve a system that respects the reality of making music for a living.
            Missed follow-ups, messy project files, and burnout from constant uncertainty are solvable — with the right
            operating system.
          </p>

          <div className="mt-5 rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              The promise
            </p>
            <p className="mt-2 text-sm text-slate-300">
              Kora is built to help creators <span className="font-semibold text-slate-100">compete and grow</span> in the age of AI —
              not replace them. Your work stays yours.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {manifestoPoints.map((p) => (
            <div key={p.title} className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">{p.title}</p>
              <p className="mt-2 text-sm text-slate-300">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Competitor comparison */}
      <section
        id="comparison"
        className="mt-16 border-t border-slate-800/70 pt-10"
      >
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
              Competitive comparison
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300">
              Kora isn’t trying to be a generic productivity app. It’s a creator operating system — built around albums,
              deliverables, and relationships.
            </p>
          </div>
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center rounded-full border border-emerald-400/30 bg-slate-900/60 px-4 py-2 text-xs font-semibold text-emerald-200/90 hover:border-emerald-400/60"
          >
            Get early access →
          </a>
        </div>

        {/* Quick highlights */}
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Built for creators</p>
            <p className="mt-2 text-sm text-slate-300">
              Albums, briefs, deliverables, and follow-ups are first-class — not templates you have to reinvent.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Calm prioritization</p>
            <p className="mt-2 text-sm text-slate-300">
              Your Top 3 is picked from real context: deadlines, relationship urgency, and workload reality. Mood based language keeps you grounded.
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-200/90">Delivery compounds</p>
            <p className="mt-2 text-sm text-slate-200">
              Export Flow + Key Shift Pro turn naming, metadata, and exports into a repeatable system.
            </p>
          </div>
        </div>

        <details className="group mt-6 rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5">
          <summary className="cursor-pointer list-none select-none">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Where Kora wins
                </p>
                <p className="mt-1 text-sm text-slate-200">
                  A fair, creator-focused view of alternatives.
                </p>
              </div>
              <span className="rounded-full border border-emerald-400/30 bg-slate-900/60 px-3 py-1 text-[11px] font-medium text-emerald-200/90">
                <span className="group-open:hidden">See full comparison →</span>
                <span className="hidden group-open:inline">Hide comparison</span>
              </span>
            </div>
          </summary>

          <div className="mt-5 grid gap-4">
            {competitorMatrix.map((row) => (
              <div key={row.category} className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5">
                <div className="flex flex-col gap-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {row.category}
                  </p>
                  <p className="text-sm text-slate-200">
                    <span className="text-slate-500">Examples:</span> {row.competitors}
                  </p>
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">They do well</p>
                    <p className="mt-2 text-sm text-slate-300">{row.whatTheyDoWell}</p>
                  </div>
                  <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">They fall short</p>
                    <p className="mt-2 text-sm text-slate-300">{row.whereTheyFallShort}</p>
                  </div>
                  <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-200/90">Kora wins by</p>
                    <p className="mt-2 text-sm text-slate-200">{row.howKoraWins}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-slate-500">
            We respect great tools — Kora’s goal is to be the first one that truly fits the creator pipeline end-to-end.
          </p>
        </details>
      </section>

      {/* Before / After */}
      {/* Audio timeline notes */}
      <section id="audio" className="mt-16 border-t border-slate-800/70 pt-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Audio in context</h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300">
              Kora includes a music player module with SoundCloud-style timeline notes. Listen, leave timestamped feedback,
              and keep revision notes attached to the project or album—so nothing disappears into chat threads.
            </p>
          </div>
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center rounded-full border border-emerald-400/30 bg-slate-900/60 px-4 py-2 text-xs font-semibold text-emerald-200/90 hover:border-emerald-400/60"
          >
            Get early access →
          </a>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
          <div className="rounded-[26px] border border-slate-800/80 bg-slate-950/70 p-4">
            <div className="overflow-hidden rounded-[18px] border border-slate-800/80 bg-slate-950">
              <Image
                src="/kora/placeholder-audio-player.png"
                alt="Kora audio player with timeline notes"
                width={1400}
                height={900}
                className="h-auto w-full"
              />
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Placeholder image: <span className="font-semibold text-slate-400">/public/kora/placeholder-audio-player.png</span>
            </p>
          </div>

          <div className="grid gap-3">
            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Timeline notes</p>
              <p className="mt-2 text-sm text-slate-300">
                Add notes at exact timestamps for mix tweaks, arrangement ideas, or client feedback.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Revision clarity</p>
              <p className="mt-2 text-sm text-slate-300">
                Keep notes attached to the work so revisions don’t get lost and versions stay clean.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200/90">Better handoffs</p>
              <p className="mt-2 text-sm text-slate-200">
                Timestamp notes + delivery tools = cleaner exports, faster approvals, and fewer back-and-forth messages.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="before-after" className="mt-16 border-t border-slate-800/70 pt-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Before Kora / After Kora</h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300">
              The difference isn’t more features — it’s one system that replaces a multi-app setup and keeps the whole
              creator pipeline visible.
            </p>
          </div>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full border border-emerald-400/30 bg-slate-900/60 px-4 py-2 text-xs font-semibold text-emerald-200/90 hover:border-emerald-400/60"
          >
            See plans →
          </a>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Before</p>
            <p className="mt-1 text-sm font-medium text-slate-100">Scattered, stressful, and easy to drop the ball</p>
            <ul className="mt-4 space-y-2 text-[13px] text-slate-200">
              <li>• Follow-ups buried in email threads, notes, and memory.</li>
              <li>• Project files and exports spread across drives and folders with unrecognizable names or unorganized copies.</li>
              <li>• Albums tracked in spreadsheets or half-finished dashboards.</li>
              <li>• Too many apps that don’t talk to each other.</li>
              <li>• Creative burnout from never knowing what matters most today.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200/90">After</p>
            <p className="mt-1 text-sm font-medium text-slate-100">Calm clarity — one creator-native system</p>
            <ul className="mt-4 space-y-2 text-[13px] text-slate-200">
              <li>• Follow-ups tracked with context: who, when, and what you pitched.</li>
              <li>• Albums + projects + briefs + progress bars in one place.</li>
              <li>• Notes that link directly to albums, projects, contacts, and tasks.</li>
              <li>• DAW linking, exports, and delivery workflows built-in.</li>
              <li>• A realistic Top 3 Today — picked from deadlines, urgency, and workload.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section
        id="for-who"
        className="mt-16 border-t border-slate-800/70 pt-10"
      >
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Built for how you work</h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300">
              Kora is the complete creative operating system for composers, producers, artists, and teams who need a
              streamlined view of multiple albums and projects—without missed follow-ups or burnout.
            </p>
          </div>
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center rounded-full border border-emerald-400/30 bg-slate-900/60 px-4 py-2 text-xs font-semibold text-emerald-200/90 hover:border-emerald-400/60"
          >
            Join early access →
          </a>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {creatorWorkflows.map((w) => (
            <div key={w.title} className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{w.title}</p>
              <p className="mt-1 text-sm font-medium text-slate-100">{w.subtitle}</p>
              <ul className="mt-4 space-y-2 text-[13px] text-slate-200">
                {w.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 md:items-start">
          <div className="rounded-[26px] border border-slate-800/80 bg-slate-950/70 p-4">
            <div className="overflow-hidden rounded-[18px] border border-slate-800/80 bg-slate-950">
              <Image
                src="/kora/placeholder-calendar.png"
                alt="Kora calendar"
                width={1400}
                height={900}
                className="h-auto w-full"
              />
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Placeholder image: <span className="font-semibold text-slate-400">/public/kora/placeholder-calendar.png</span>
            </p>
          </div>

          <div className="rounded-[26px] border border-slate-800/80 bg-slate-950/70 p-4">
            <div className="overflow-hidden rounded-[18px] border border-slate-800/80 bg-slate-950">
              <Image
                src="/kora/placeholder-whiteboard.png"
                alt="Kora whiteboard notes"
                width={1400}
                height={900}
                className="h-auto w-full"
              />
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Placeholder image: <span className="font-semibold text-slate-400">/public/kora/placeholder-whiteboard.png</span>
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Link any DAW</p>
              <p className="mt-2 text-sm text-slate-300">
                Ableton, Logic, FL Studio, Pro Tools, Reaper—Kora links sessions so you can jump into the work instantly.
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Delivery monitoring</p>
              <p className="mt-2 text-sm text-slate-300">
                Export folder monitoring, file naming systems, metadata editing, and converter tools—built for real delivery.
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Optional Gmail context</p>
              <p className="mt-2 text-sm text-slate-300">
                Pull context into follow-ups and drafts without living in your inbox. Read-only integration (optional).
              </p>
            </div>
          </div>
        </div>
      </section>

     
      {/* Pricing + Early access */}
      <section id="pricing" className="mt-16 border-t border-slate-800/70 pt-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
              Pricing that respects the work
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300">
              Most creators pay for a stack: notes + tasks + calendar + CRM + timers + spreadsheets — then still miss
              follow-ups and lose time to chaos. Kora replaces the stack with one system built for albums, relationships,
              and delivery.
            </p>
          </div>
          <div className="text-xs text-slate-500">
            Think of Kora as tool consolidation: fewer subscriptions, fewer handoffs, fewer missed opportunities — and a
            clearer plan every day.
          </div>
        </div>

	        <div className="mt-6 grid gap-4 md:grid-cols-3">
	          {/* Kora Local */}
	          <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5">
	            <div className="flex items-start justify-between gap-4">
	              <div>
	                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Kora Local</p>
	                <p className="mt-1 text-lg font-semibold text-slate-100">$9 / month</p>
	                <p className="mt-1 text-sm text-slate-300">
	                  Replace your basic stack with a private, offline-first creator system.
	                </p>
	              </div>
	              <span className="rounded-full bg-slate-800/60 px-3 py-1 text-[11px] font-medium text-slate-200">
	                Local only
	              </span>
            </div>

            <ul className="mt-4 space-y-2 text-[13px] text-slate-200">
              <li>• Projects, albums, track planning, and briefs</li>
              <li>• Timeline + due dates + follow-ups</li>
              <li>• Local coach (rules-based) + Focus Timer</li>
              <li>• No cloud, no mobile, no advanced AI</li>
            </ul>
          </div>

          {/* Creator (Most popular) */}
          <div className="relative overflow-hidden rounded-2xl border border-emerald-400/40 bg-gradient-to-b from-emerald-500/10 via-slate-950/80 to-slate-950/80 p-5 shadow-xl shadow-emerald-500/10">
            <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[36px] bg-emerald-500/10 blur-3xl" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200/90">Creator</p>
                <p className="mt-1 text-lg font-semibold text-slate-100">$25 / month</p>
                <p className="mt-1 text-sm text-slate-300">The full workhorse: smarter planning, stronger momentum, and creator-native workflows.</p>
              </div>
              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
                Most popular
              </span>
            </div>

            <ul className="mt-4 space-y-2 text-[13px] text-slate-200">
              <li>• Everything in Kora Local</li>
              <li>• Advanced AI planning + smarter Top 3 Today</li>
              <li>• iPhone app link + iPhone widgets</li>
              <li>• Tools page modules (grows over time)</li>
            </ul>
          </div>

          {/* Pro */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Pro</p>
                <p className="mt-1 text-lg font-semibold text-slate-100">$50 / month</p>
                <p className="mt-1 text-sm text-slate-300">For high-volume output: more AI, continuity, and delivery-grade automation.</p>
              </div>
              <span className="rounded-full bg-sky-400/10 px-3 py-1 text-[11px] font-medium text-sky-200">
                Power users
              </span>
            </div>

	            <ul className="mt-4 space-y-2 text-[13px] text-slate-200">
	              <li>• Everything in Creator</li>
	              <li>• Extended AI access (heavier daily usage)</li>
	              <li>• Cloud storage + cross-device continuity</li>
	              <li>• Keep most recent exports linked to projects across devices</li>
	            </ul>
	          </div>
	        </div>
	
	        <p className="mt-4 text-xs text-slate-500">
	          You can stay on Kora Local forever — upgrades are optional.
	        </p>

	        {/* Feature comparison (toggle) */}
	        <details className="group mt-6 rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5">
	          <summary className="cursor-pointer list-none select-none">
	            <div className="flex items-start justify-between gap-6">
	              <div>
	                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
	                  Master feature comparison
	                </p>
	                <p className="mt-1 text-sm text-slate-200">
	                  Compare Kora Local, Creator, and Pro at a glance.
	                </p>
	              </div>
	              <span className="rounded-full border border-emerald-400/30 bg-slate-900/60 px-3 py-1 text-[11px] font-medium text-emerald-200/90">
	                <span className="group-open:hidden">Click to expand</span>
	                <span className="hidden group-open:inline">Click to collapse</span>
	              </span>
	            </div>
	          </summary>

	          <div className="mt-5 overflow-x-auto">
	            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
	              <thead>
	                <tr className="border-b border-slate-800/80 text-[11px] uppercase tracking-[0.16em] text-slate-500">
	                  <th className="py-3 pr-4">Feature</th>
	                  <th className="py-3 pr-4">Kora Local</th>
	                  <th className="py-3 pr-4">Creator</th>
	                  <th className="py-3">Pro</th>
	                </tr>
	              </thead>
	              <tbody>
	                {featureMatrix.map((row) => (
	                  <tr key={row.label} className="border-b border-slate-900/70">
	                    <td className="py-3 pr-4">
	                      <div className="text-slate-200">{row.label}</div>
	                      {row.note ? <div className="mt-1 text-xs text-slate-500">{row.note}</div> : null}
	                    </td>

	                    <td className="py-3 pr-4">
	                      <span
	                        className={
	                          row.local
	                            ? "inline-flex items-center rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-200"
	                            : "inline-flex items-center rounded-full bg-slate-800/50 px-2.5 py-1 text-[11px] font-medium text-slate-400"
	                        }
	                      >
	                        {row.local === true ? "✓ Included" : typeof row.local === "string" ? row.local : "—"}
	                      </span>
	                    </td>

	                    <td className="py-3 pr-4">
	                      <span
	                        className={
	                          row.creator
	                            ? "inline-flex items-center rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-200"
	                            : "inline-flex items-center rounded-full bg-slate-800/50 px-2.5 py-1 text-[11px] font-medium text-slate-400"
	                        }
	                      >
	                        {row.creator === true ? "✓ Included" : typeof row.creator === "string" ? row.creator : "—"}
	                      </span>
	                    </td>

	                    <td className="py-3">
	                      <span
	                        className={
	                          row.pro
	                            ? "inline-flex items-center rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-200"
	                            : "inline-flex items-center rounded-full bg-slate-800/50 px-2.5 py-1 text-[11px] font-medium text-slate-400"
	                        }
	                      >
	                        {row.pro === true ? "✓ Included" : typeof row.pro === "string" ? row.pro : "—"}
	                      </span>
	                    </td>
	                  </tr>
	                ))}
	              </tbody>
	            </table>
	          </div>

	          <p className="mt-4 text-xs text-slate-500">
	            This checklist will evolve as features ship. We&apos;ll keep it honest and creator-first.
	          </p>
	        </details>

	        {/* Coming soon */}
	        <div className="mt-4 rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5">
	          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Coming soon</p>
              <p className="mt-1 text-sm text-slate-200">
                Studio (multi-user floating logins), Teams (dedicated team spaces), Institutional (campus licensing), and
                Student EDU pricing.
              </p>
            </div>
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-full border border-emerald-400/30 bg-slate-900/60 px-4 py-2 text-xs font-semibold text-emerald-200/90 hover:border-emerald-400/60"
            >
              Join early access →
            </a>
          </div>
        </div>

        {/* Early access form */}
        <div id="waitlist" className="mt-10 grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Early access</h3>
            <p className="mt-3 max-w-xl text-sm text-slate-300">
              Tell us a bit about your workflow and we&apos;ll reach out when we open the next wave.
            </p>

            <div className="mt-4 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5">
              <ul className="space-y-2 text-[13px] text-slate-200">
                <li>• Early users influence features, language, and defaults.</li>
                <li>• Expect focused updates — no spam, no noise.</li>
                <li>• You&apos;ll be first in line for launch specials.</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5">
            {/* status banner */}
            <div className="mb-3">
              {submitted ? (
                <div
                  role="status"
                  className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100"
                >
                  You&apos;re on the early access list. Watch for an email when we open the next wave.
                </div>
              ) : null}
              {safeErrorMessage ? (
                <div
                  role="alert"
                  className="rounded-2xl border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-100"
                >
                  {safeErrorMessage}
                </div>
              ) : null}
              {!submitted && !safeErrorMessage ? (
                <p className="text-xs text-slate-500">
                  Submit to join the list. We&apos;ll only email about early access and launch updates.
                </p>
              ) : null}
            </div>

            <form action={joinWaitlist} className="flex flex-col gap-3">
              <input type="hidden" name="source" value="kora-pricing" />

              <div className="grid gap-3 sm:grid-cols-2">
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
              </div>

              <textarea
                name="workflow"
                rows={4}
                placeholder="Quick context: what do you make, how many projects are active, and where do you feel stuck right now?"
                className="w-full rounded-2xl border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400/80 focus:outline-none"
              />

              <button
                type="submit"
                className="rounded-full bg-emerald-400 px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-400/40 hover:bg-emerald-300"
              >
                Request early access
              </button>

	              <p className="text-xs text-slate-500">
	                We do not use your data to train generative music models or any competing systems. Your work stays yours.
	                Kora is built to help creators compete and grow in the age of AI — not replace them.
	              </p>
	              <p className="text-xs text-slate-500">
	                Your data is used only to power your planning experience, even if cloud features are added later. Unsubscribe
	                anytime.
	              </p>

              {/* Lightweight feedback based on query params (works without client JS) */}
              <div className="mt-1 text-xs">
                {/*
                  Note: This reads on the server. Next.js will re-render on redirect.
                  We keep it tiny and resilient.
                */}
              </div>
            </form>
          </div>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Prefer DM? Reach out via your usual channel and we&apos;ll get you in the early wave.
        </p>
      </section>
      {/* FAQ */}
      <section className="mt-16 border-t border-slate-800/70 pt-10">
        <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">FAQ</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5">
            <p className="text-sm font-medium text-slate-100">Is there a free plan?</p>
            <p className="mt-2 text-sm text-slate-300">
              Not at launch. Kora is built to be meaningfully valuable from day one — especially the offline Kora Local plan.
              Expect time-limited trials and launch specials instead of a permanently free tier.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5">
            <p className="text-sm font-medium text-slate-100">What makes Kora different from generic task apps?</p>
            <p className="mt-2 text-sm text-slate-300">
              Kora understands creative reality: albums, briefs, deliverables, follow-ups, and deep work. It doesn&apos;t just
              store tasks — it helps you pick the right work when your attention is limited.
            </p>
          </div>

	          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5">
	            <p className="text-sm font-medium text-slate-100">Can I stay local-only?</p>
	            <p className="mt-2 text-sm text-slate-300">
	              Yes. Kora Local is intentionally offline-first. Creator and Pro add AI + mobile + cloud features for creators
	              who want cross-device continuity.
	            </p>
	          </div>

          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5">
            <p className="text-sm font-medium text-slate-100">When will Teams / Studio / Institutional be available?</p>
            <p className="mt-2 text-sm text-slate-300">
              After the solo workflow is battle-tested. Early access users help shape what multi-user collaboration should
              feel like for studios and music programs.
            </p>
          </div>
        </div>
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
