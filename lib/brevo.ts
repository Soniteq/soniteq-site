import "server-only";

type BrevoUpsertResult =
  | { ok: true }
  | { ok: false; status?: number; message: string; details?: unknown };

function parseBrevoListIds(envValue: string | undefined): number[] | undefined {
  if (!envValue) return undefined;
  const ids = envValue
    .split(",")
    .map((part) => Number(part.trim()))
    .filter((value) => Number.isFinite(value) && value > 0);
  return ids.length ? ids : undefined;
}

export async function upsertBrevoContact(args: {
  email: string;
  firstName?: string;
  workflow?: string;
  source?: string;
}): Promise<BrevoUpsertResult> {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return { ok: false, message: "BREVO_API_KEY is not configured (set it in your environment)." };
  }

  const listIds =
    parseBrevoListIds(process.env.BREVO_LIST_IDS) ??
    parseBrevoListIds(process.env.BREVO_LIST_ID);

  const email = (args.email || "").trim();
  const firstName = args.firstName?.trim();
  const workflow = args.workflow?.trim();
  const source = (args.source || "kora").trim();

  if (!email) {
    return { ok: false, message: "Email is required." };
  }

  const payload: Record<string, unknown> = {
    email,
    updateEnabled: true,
  };

  if (listIds) payload.listIds = listIds;
  const attributes: Record<string, string> = {
    SOURCE: source,
  };
  if (firstName) attributes.FIRSTNAME = firstName;
  if (workflow) attributes.WORKFLOW = workflow;
  payload.attributes = attributes;

  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (res.ok) return { ok: true };

  let details: unknown = undefined;
  try {
    details = await res.json();
  } catch {
    details = await res.text().catch(() => undefined);
  }

  const detailsText =
    typeof details === "string" ? details : JSON.stringify(details ?? "");

  if (
    res.status === 400 &&
    /contact already exist/i.test(detailsText)
  ) {
    return { ok: true };
  }

  return {
    ok: false,
    status: res.status,
    message: "Brevo request failed.",
    details,
  };
}
