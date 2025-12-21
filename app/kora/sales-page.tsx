
import type { ReactNode } from "react";

export const metadata = {
  title: "Kora — The Creative Operating System for serious music creators", 
  description:
    "Kora is a creator-first operating system built for music creators—artists, producers, songwriters, composers, and sound designers—to turn creative work into real career momentum.",
};

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      style={{ flex: "0 0 auto" }}
    >
      <path
        d="M16.5 6.25L8.375 14.375L3.5 9.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      style={{ flex: "0 0 auto" }}
    >
      <path
        d="M10 2.25l1.25 4.25L15.5 8 11.25 9.25 10 13.5 8.75 9.25 4.5 8l4.25-1.5L10 2.25z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M16 11.25l.7 2.35L19 14.3l-2.3.7L16 17.35l-.7-2.35L13 14.3l2.3-.7L16 11.25z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      style={{ flex: "0 0 auto" }}
    >
      <path
        d="M4.5 10h9.75"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M11.25 5.5L15.75 10l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 12px",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.12)",
        background:
          "radial-gradient(circle at top left, rgba(74,242,197,0.18), rgba(10,12,22,0.95))",
        color: "rgba(255,255,255,0.92)",
        fontSize: 12,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
      }}
    >
      <SparkIcon />
      {children}
    </span>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "6px 12px",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.10)",
        background: "rgba(255,255,255,0.04)",
        color: "rgba(255,255,255,0.88)",
        fontSize: 13,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}

export default function KoraSalesPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(1100px 600px at 20% 10%, rgba(74,242,197,0.20), transparent 55%), radial-gradient(900px 500px at 70% 5%, rgba(99,169,255,0.16), transparent 55%), radial-gradient(900px 500px at 50% 90%, rgba(251,191,36,0.12), transparent 55%), #070812",
        color: "#F4F5FB",
      }}
    >
      {/* Top bar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          backdropFilter: "blur(14px)",
          background: "rgba(7,8,18,0.65)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "14px 18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              aria-hidden="true"
              style={{
                width: 28,
                height: 28,
                borderRadius: 10,
                background: "linear-gradient(135deg, #4af2c5, #63a9ff)",
                boxShadow: "0 0 22px rgba(74,242,197,0.35)",
              }}
            />
            <div style={{ lineHeight: 1.1 }}>
              <div style={{ fontWeight: 700, letterSpacing: "0.02em" }}>
                Kora
              </div>
              <div style={{ fontSize: 12, opacity: 0.72 }}>
                by Soniteq
              </div>
            </div>
          </div>

          <nav style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <a
              href="#what"
              style={{
                color: "rgba(255,255,255,0.78)",
                textDecoration: "none",
                fontSize: 13,
              }}
            >
              What it is
            </a>
            <a
              href="#for"
              style={{
                color: "rgba(255,255,255,0.78)",
                textDecoration: "none",
                fontSize: 13,
              }}
            >
              Who it’s for
            </a>
            <a
              href="#changes"
              style={{
                color: "rgba(255,255,255,0.78)",
                textDecoration: "none",
                fontSize: 13,
              }}
            >
              What it changes
            </a>
            <a
              href="#signup"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 14px",
                borderRadius: 999,
                background: "#4af2c5",
                color: "#05060b",
                fontWeight: 700,
                fontSize: 13,
                textDecoration: "none",
                boxShadow: "0 12px 30px rgba(0,0,0,0.45)",
              }}
            >
              Join launch list <ArrowIcon />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "70px 18px 36px",
        }}
      >
        <Badge>The Creative Operating System for the AI Era</Badge>

        <h1
          style={{
            margin: "18px 0 10px",
            fontSize: 52,
            lineHeight: 1.04,
            letterSpacing: "-0.02em",
          }}
        >
         Creators don’t need AI to make music for them.
          <br />
          They need more direction.
        </h1>

        <p
          style={{
            margin: "0 0 22px",
            maxWidth: 760,
            fontSize: 18,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.82)",
          }}
        >
          Music has never been easier to create. AI can generate songs in
          seconds. Loops are endless. Templates are everywhere.
          <br />
          <br />
          And yet more creators than ever feel overwhelmed, disconnected,
          behind—unsure what actually matters.
          <br />
          <br />
          <strong style={{ color: "rgba(255,255,255,0.94)" }}>
            Creation isn’t the hard part anymore. Careers are.
          </strong>
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a
            href="#signup"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 16px",
              borderRadius: 999,
              background: "#4af2c5",
              color: "#05060b",
              fontWeight: 800,
              textDecoration: "none",
              boxShadow: "0 14px 34px rgba(0,0,0,0.55)",
            }}
          >
            Join the launch list <ArrowIcon />
          </a>
          <a
            href="#what"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 16px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.03)",
              color: "rgba(255,255,255,0.90)",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            What is Kora?
          </a>
        </div>

        <div
          style={{
            marginTop: 26,
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            opacity: 0.95,
          }}
        >
          <Pill>Albums</Pill>
          <Pill>Projects</Pill>
          <Pill>Contacts</Pill>
          <Pill>Follow-ups</Pill>
          <Pill>Delivery</Pill>
          <Pill>Deep Work</Pill>
          <Pill>Flow Engine (AI)</Pill>
        </div>
      </section>

      {/* What it is */}
      <section
        id="what"
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "28px 18px 18px",
        }}
      >
        <div
          style={{
            borderRadius: 18,
            border: "1px solid rgba(255,255,255,0.10)",
            background:
              "linear-gradient(135deg, rgba(13,18,40,0.92), rgba(8,10,19,0.96))",
            boxShadow: "0 18px 60px rgba(0,0,0,0.45)",
            padding: 22,
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.3fr) minmax(0, 1fr)",
            gap: 18,
          }}
        >
          <div>
            <h2 style={{ margin: 0, fontSize: 26 }}>
              Kora is a Creative Operating System.
            </h2>
            <p
              style={{
                margin: "10px 0 0",
                fontSize: 15,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.82)",
              }}
            >
              Not a chatbot. Not a DAW. Not another generic productivity app.
              <br />
              <br />
              Kora is the system that sits around your creative work—human-made,
              AI-made, or anything in between—and turns it into{" "}
              <strong style={{ color: "rgba(255,255,255,0.95)" }}>
                forward motion
              </strong>
              .
            </p>
          </div>

          <div
            style={{
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.08)",
              background:
                "radial-gradient(circle at top left, rgba(74,242,197,0.12), rgba(8,10,19,0.96))",
              padding: 16,
            }}
          >
            <div
              style={{
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                opacity: 0.75,
                marginBottom: 8,
              }}
            >
              Kora helps you decide:
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                color: "rgba(255,255,255,0.88)",
                fontSize: 14,
              }}
            >
              {[
                "What’s worth finishing",
                "What deserves your energy",
                "Who to follow up with (and when)",
                "What should ship now",
                "What can wait",
                "What actually moves your career forward",
              ].map((t) => (
                <li
                  key={t}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                  }}
                >
                  <span style={{ color: "#4af2c5", marginTop: 2 }}>
                    <CheckIcon />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section
        id="for"
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "28px 18px 18px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
            gap: 16,
          }}
        >
          {/* For */}
          <div
            style={{
              borderRadius: 18,
              border: "1px solid rgba(255,255,255,0.10)",
              background: "rgba(17,19,32,0.86)",
              padding: 20,
              boxShadow: "0 18px 60px rgba(0,0,0,0.35)",
            }}
          >
            <h2 style={{ margin: 0, fontSize: 22 }}>
              Built for creators who take their work seriously.
            </h2>
            <p
              style={{
                margin: "10px 0 14px",
                color: "rgba(255,255,255,0.80)",
                lineHeight: 1.7,
                fontSize: 14,
              }}
            >
              Kora is for musicians, artists, producers, beatmakers,
              songwriters, composers, sound designers, and production music
              creators—anyone building real momentum in a real creative career.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                marginBottom: 12,
              }}
            >
              {[
                "Musicians",
                "Artists",
                "Producers",
                "Songwriters",
                "Composers",
                "Sound Designers",
                "Production Music Creators",
                "Hybrid AI Creators",
              ].map((x) => (
                <Pill key={x}>{x}</Pill>
              ))}
            </div>

            <div
              style={{
                marginTop: 12,
                borderTop: "1px solid rgba(255,255,255,0.06)",
                paddingTop: 12,
                color: "rgba(255,255,255,0.80)",
                fontSize: 14,
                lineHeight: 1.7,
              }}
            >
              Whether your music is <strong>fully human</strong>,{" "}
              <strong>fully AI</strong>, or <strong>hybrid</strong>—if it needs
              to be managed, delivered, tracked, remembered, followed up, and
              grown into something meaningful…
              <br />
              <br />
              <strong style={{ color: "rgba(255,255,255,0.95)" }}>
                Kora is for you.
              </strong>
            </div>
          </div>

          {/* Not for */}
          <div
            style={{
              borderRadius: 18,
              border: "1px solid rgba(255,255,255,0.10)",
              background:
                "linear-gradient(135deg, rgba(18,14,26,0.92), rgba(8,10,19,0.96))",
              padding: 20,
              boxShadow: "0 18px 60px rgba(0,0,0,0.35)",
            }}
          >
            <h2 style={{ margin: 0, fontSize: 22 }}>
              Kora is not for everyone.
            </h2>
            <p
              style={{
                margin: "10px 0 14px",
                color: "rgba(255,255,255,0.78)",
                lineHeight: 1.7,
                fontSize: 14,
              }}
            >
              This is a feature, not a bug. Kora doesn’t optimize for volume. It
              optimizes for progress.
            </p>

            <ul
              style={{
                margin: 0,
                paddingLeft: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                color: "rgba(255,255,255,0.86)",
                fontSize: 14,
                lineHeight: 1.6,
              }}
            >
              {[
                {
                  title: "People looking for instant results",
                  desc: "If you want “upload → viral → rich,” Kora will feel slow. Careers are built, not rolled dice.",
                },
                {
                  title: "One-off creators",
                  desc: "If you make a track occasionally with no intention to ship, follow up, or build relationships, Kora will feel unnecessary.",
                },
                {
                  title: "Pure AI button-pushers",
                  desc: "If your workflow is “generate → export → forget,” and you don’t care who uses it or why, Kora won’t be your vibe.",
                },
                {
                  title: "People who avoid structure",
                  desc: "If planning, deadlines, and follow-ups feel oppressive, Kora will challenge you—gently—but it will challenge you.",
                },
                {
                  title: "Hobbyists who don’t want growth",
                  desc: "Kora is calm, but it’s serious. It assumes your work matters—and you want momentum.",
                },
              ].map((row) => (
                <li
                  key={row.title}
                  style={{
                    borderRadius: 14,
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.03)",
                    padding: "12px 12px",
                  }}
                >
                  <div style={{ fontWeight: 750, marginBottom: 4 }}>
                    ❌ {row.title}
                  </div>
                  <div style={{ opacity: 0.9 }}>{row.desc}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What it changes */}
      <section
        id="changes"
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "28px 18px 18px",
        }}
      >
        <div
          style={{
            borderRadius: 18,
            border: "1px solid rgba(255,255,255,0.10)",
            background:
              "radial-gradient(circle at top left, rgba(56,189,248,0.10), rgba(8,10,19,0.96))",
            padding: 22,
            boxShadow: "0 18px 60px rgba(0,0,0,0.38)",
          }}
        >
          <h2 style={{ margin: 0, fontSize: 24 }}>
            AI doesn’t replace creators. It raises the bar.
          </h2>
          <p
            style={{
              margin: "10px 0 0",
              maxWidth: 900,
              color: "rgba(255,255,255,0.80)",
              lineHeight: 1.75,
              fontSize: 15,
            }}
          >
            In a world of infinite output, taste matters more. Judgment matters
            more. Relationships matter more. Reliability matters more.
            <br />
            <br />
            Kora doesn’t help you make more noise. It helps you build a system
            that turns your work into outcomes.
          </p>

          <div
            style={{
              marginTop: 16,
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 12,
            }}
          >
            {[
              {
                title: "Clarity",
                desc: "Know what matters today—without the overwhelm.",
              },
              {
                title: "Momentum",
                desc: "Close loops, ship work, and keep your pipeline moving.",
              },
              {
                title: "Relationships",
                desc: "Track follow-ups, notes, and context—so trust compounds over time.",
              },
              {
                title: "Delivery",
                desc: "Organize projects, albums, versions, and exports like a pro.",
              },
              {
                title: "Deep Work",
                desc: "Protect focus with calm structure—without killing creativity.",
              },
              {
                title: "Flow Engine (AI)",
                desc: "A creator-first intelligence layer that helps you prioritize, not replace you.",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  borderRadius: 16,
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(17,19,32,0.70)",
                  padding: 14,
                }}
              >
                <div
                  style={{
                    fontWeight: 800,
                    marginBottom: 6,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span style={{ color: "#4af2c5" }}>
                    <CheckIcon />
                  </span>
                  {card.title}
                </div>
                <div style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.6 }}>
                  {card.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup */}
      <section
        id="signup"
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "30px 18px 80px",
        }}
      >
        <div
          style={{
            borderRadius: 20,
            border: "1px solid rgba(74,242,197,0.22)",
            background:
              "linear-gradient(135deg, rgba(74,242,197,0.16), rgba(8,10,19,0.96))",
            padding: 22,
            boxShadow: "0 22px 70px rgba(0,0,0,0.55)",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
            gap: 14,
            alignItems: "center",
          }}
        >
          <div>
            <h2 style={{ margin: 0, fontSize: 26 }}>
              Join the Kora launch list
            </h2>
            <p
              style={{
                margin: "10px 0 0",
                color: "rgba(255,255,255,0.82)",
                lineHeight: 1.7,
                fontSize: 14,
                maxWidth: 720,
              }}
            >
              Get early access, launch pricing, and the first look at Kora’s
              Flow Engine. Calm tools. Serious intent. Real momentum.
            </p>
          </div>

          {/* IMPORTANT:
             Replace this form action with your real signup endpoint (Brevo, Stripe, ConvertKit, etc.).
             If you already have a sitewide form component, swap this for it. */}
         <form
  id="sib-form"
  method="POST"
  action="https://1c09956e.sibforms.com/serve/MUIFAPyQkV2l2J4a4lQWRjScIliJHlLLvHEu0cARTViJMU9_fOYdIxWLhALg14t9kKUEzehNU0q-oHsNxKa7LGiJqYfo3eQ6xNcnjTb3XvBGVYue3HYOl78LKSOP9bI12P1OwXhX4k-Jsdhz2pI5u6Af-MovFBACh5xl5kzgiOilyDOyZu1-ADIY7ZZ9TUgZZ2esEECAr4r5S62duw=="
  data-type="subscription"
  style={{
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    justifyContent: "flex-end",
  }}
>
  {/* Brevo anti-bot + locale */}
  <input
    type="text"
    name="email_address_check"
    value=""
    tabIndex={-1}
    autoComplete="off"
    aria-hidden="true"
    style={{ position: "absolute", left: -9999, opacity: 0 }}
    readOnly
  />
  <input type="hidden" name="locale" value="en" />

  <label style={{ width: "100%" }}>
    <span
      style={{
        display: "block",
        fontSize: 11,
        opacity: 0.78,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        marginBottom: 6,
      }}
    >
      First name (optional)
    </span>
    <input
      name="FIRSTNAME"
      type="text"
      maxLength={200}
      placeholder="Chris"
      autoComplete="given-name"
      style={{
        width: "100%",
        padding: "12px 14px",
        borderRadius: 12,
        border: "1px solid rgba(255,255,255,0.14)",
        background: "rgba(8,10,19,0.85)",
        color: "#fff",
        fontSize: 14,
        outline: "none",
      }}
    />
  </label>

  <label style={{ width: "100%" }}>
    <span
      style={{
        display: "block",
        fontSize: 11,
        opacity: 0.78,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        marginBottom: 6,
      }}
    >
      Email address
    </span>
    <input
      name="EMAIL"
      type="email"
      required
      placeholder="you@domain.com"
      autoComplete="email"
      style={{
        width: "100%",
        padding: "12px 14px",
        borderRadius: 12,
        border: "1px solid rgba(255,255,255,0.14)",
        background: "rgba(8,10,19,0.85)",
        color: "#fff",
        fontSize: 14,
        outline: "none",
      }}
    />
  </label>

  {/* SMS (Brevo form currently requires it) */}
  <div style={{ width: "100%", display: "flex", gap: 10, flexWrap: "wrap" }}>
    <label style={{ flex: "0 0 140px", minWidth: 140 }}>
      <span
        style={{
          display: "block",
          fontSize: 11,
          opacity: 0.78,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: 6,
        }}
      >
        Country
      </span>
      <select
        name="SMS__COUNTRY_CODE"
        required
        defaultValue="+1"
        style={{
          width: "100%",
          padding: "12px 14px",
          borderRadius: 12,
          border: "1px solid rgba(255,255,255,0.14)",
          background: "rgba(8,10,19,0.85)",
          color: "#fff",
          fontSize: 14,
          outline: "none",
          appearance: "none",
        }}
      >
        <option value="+1">+1 (US/CA)</option>
        <option value="+44">+44 (UK)</option>
        <option value="+61">+61 (AU)</option>
        <option value="+49">+49 (DE)</option>
        <option value="+33">+33 (FR)</option>
        <option value="+34">+34 (ES)</option>
        <option value="+39">+39 (IT)</option>
        <option value="+31">+31 (NL)</option>
        <option value="+46">+46 (SE)</option>
        <option value="+47">+47 (NO)</option>
      </select>
    </label>

    <label style={{ flex: "1 1 260px", minWidth: 220 }}>
      <span
        style={{
          display: "block",
          fontSize: 11,
          opacity: 0.78,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: 6,
        }}
      >
        Phone number
      </span>
      <input
        name="SMS"
        type="tel"
        required
        placeholder="e.g. 2125550123"
        autoComplete="tel"
        inputMode="tel"
        style={{
          width: "100%",
          padding: "12px 14px",
          borderRadius: 12,
          border: "1px solid rgba(255,255,255,0.14)",
          background: "rgba(8,10,19,0.85)",
          color: "#fff",
          fontSize: 14,
          outline: "none",
        }}
      />
      <div
        style={{
          marginTop: 6,
          fontSize: 12,
          opacity: 0.72,
          textAlign: "left",
        }}
      >
        Include digits only (no spaces/dashes). Brevo validates length (6–19 digits).
      </div>
    </label>
  </div>

  <button
    type="submit"
    style={{
      width: "100%",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      padding: "12px 16px",
      borderRadius: 12,
      border: "none",
      background: "#4af2c5",
      color: "#05060b",
      fontWeight: 900,
      cursor: "pointer",
      boxShadow: "0 14px 36px rgba(0,0,0,0.55)",
    }}
  >
    Get early access <ArrowIcon />
  </button>

  <div
    style={{
      width: "100%",
      textAlign: "right",
      fontSize: 12,
      opacity: 0.72,
    }}
  >
    No spam. Creator-first forever.
  </div>
</form>
        </div>

        <footer
          style={{
            marginTop: 22,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
            color: "rgba(255,255,255,0.56)",
            fontSize: 12,
            paddingBottom: 10,
          }}
        >
          <div>© {new Date().getFullYear()} Soniteq. All rights reserved.</div>
          <div style={{ opacity: 0.85 }}>
            Kora — Create however you want. Build something real.
          </div>
        </footer>
      </section>
    </main>
  );
}