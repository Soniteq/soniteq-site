"use client";

import { useEffect } from "react";

export default function AuthHandoff() {
  useEffect(() => {
    // If Supabase dropped tokens into the URL hash, hand off to the desktop app deep link.
    const hash = window.location.hash || "";
    if (!hash.includes("access_token=")) return;

    const params = new URLSearchParams(window.location.search);
    const rawDeepLink = params.get("deep_link");
    const deepLink =
      rawDeepLink && rawDeepLink.startsWith("kora://")
        ? rawDeepLink
        : "kora://auth-callback";

    window.location.href = `${deepLink}${hash}`;
  }, []);

  return null;
}
