import type { Metadata } from "next";
import KoraSalesPage, { metadata as salesMetadata } from "../kora/sales-page";

export const metadata: Metadata = salesMetadata;

export default function KoraVsAiPage() {
  return <KoraSalesPage />;
}
