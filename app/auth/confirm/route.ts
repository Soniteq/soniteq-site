import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

function getSafeRedirectTarget(raw: string | null): string {
  const fallback = process.env.NEXT_PUBLIC_SITE_URL || "https://soniteq.ai";
  if (!raw) return fallback;

  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    return fallback;
  }

  if (url.protocol === "kora:") return url.toString();

  const allowlist = (process.env.AUTH_REDIRECT_ALLOWLIST || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const defaultAllowlist = [
    "https://soniteq.ai",
    "https://www.soniteq.ai",
    "http://localhost:3000",
  ];

  const allowedOrigins = new Set([...defaultAllowlist, ...allowlist]);
  return allowedOrigins.has(url.origin) ? url.toString() : fallback;
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const token_hash = url.searchParams.get("token_hash");
  const type = url.searchParams.get("type") || "magiclink";
  const redirect_to = getSafeRedirectTarget(url.searchParams.get("redirect_to"));

  if (!token_hash) {
    return NextResponse.json({ error: "Missing token_hash" }, { status: 400 });
  }

  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    return NextResponse.json({ error: "Supabase env missing" }, { status: 500 });
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  const { data, error } = await supabase.auth.verifyOtp({
    token_hash,
    type: type as any,
  });

  if (error || !data?.session) {
    return NextResponse.json(
      { error: error?.message || "No session returned" },
      { status: 400 },
    );
  }

  const s = data.session;

  const fragment = new URLSearchParams({
    access_token: s.access_token,
    refresh_token: s.refresh_token,
    expires_in: String(s.expires_in ?? 3600),
    expires_at: String(s.expires_at ?? ""),
    token_type: s.token_type ?? "bearer",
    type,
  }).toString();

  return NextResponse.redirect(`${redirect_to}#${fragment}`, { status: 302 });
}

