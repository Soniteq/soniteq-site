"use client";

import { useEffect } from "react";

export default function AuthHandoff() {
  useEffect(() => {
    // If Supabase dropped tokens into the URL hash, hand off to the desktop app deep link.
    const hash = window.location.hash || "";
    if (!hash.includes("access_token=")) return;

    // Optional: only do this on desktop
    const ua = navigator.userAgent.toLowerCase();
    const isDesktop =
      (ua.includes("mac") || ua.includes("win") || ua.includes("linux")) &&
      !(
        ua.includes("android") ||
        ua.includes("iphone") ||
        ua.includes("ipad") ||
        ua.includes("ipod") ||
        ua.includes("mobile")
      );

    if (isDesktop) {
      window.location.href = `kora://auth-callback${hash}`;
    }
  }, []);

  return null;
}
