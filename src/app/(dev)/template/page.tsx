import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TemplateLab from "./TemplateLab";

// Dev-only style lab. Kept in the repo for reference but never shipped: it 404s
// in a production build and is excluded from indexing.
export const metadata: Metadata = {
  title: "Template lab (dev)",
  robots: { index: false, follow: false },
};

export default function TemplatePage() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }
  return <TemplateLab />;
}
