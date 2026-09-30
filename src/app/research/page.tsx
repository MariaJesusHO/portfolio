import type { Metadata } from "next";
import Link from "next/link";
import { research } from "@/lib/research";

export const metadata: Metadata = {
  title: "Research & Writing",
  description:
    "Research articles and applied studies on reinforcement learning, data science, UX, and designing for AI-era products.",
};

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--faint)]">
          Research &amp; Writing
        </p>
        <h1 className="mt-6 font-serif text-4xl tracking-tight sm:text-5xl">
          Working through hard problems, in writing.
        </h1>
        <p className="mt-6 text-lg text-[var(--muted)]">
          Research articles and applied studies — from reinforcement learning
          and data science to UX and the systems side of AI-era products.
        </p>
      </header>

      <ul className="mt-14 divide-y divide-[var(--line)] border-t border-[var(--line)]">
        {research.map((r) => (
          <li key={r.slug}>
            <Link href={`/research/${r.slug}`} className="group block py-8">
              <p className="text-sm text-[var(--faint)]">
                {r.kind}
                {r.institution ? ` · ${r.institution}` : ""}
                {r.readingTime ? ` · ${r.readingTime}` : ""}
              </p>
              <h2 className="mt-2 font-serif text-2xl tracking-tight text-[var(--title)] group-hover:text-[var(--accent)]">
                {r.title}
              </h2>
              <p className="mt-3 text-[var(--muted)]">{r.summary}</p>
              {r.authors && r.authors.length > 1 && (
                <p className="mt-3 text-sm text-[var(--faint)]">
                  With {r.authors.filter((a) => a !== "Maria-Jesus Huaccha").join(", ")}
                </p>
              )}
              <div className="mt-4 flex flex-wrap gap-2">
                {r.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[var(--line)] px-2.5 py-0.5 text-xs text-[var(--muted)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
