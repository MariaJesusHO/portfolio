import Link from "next/link";
import type { ResearchPiece } from "@/lib/research";

/* ── Hero band for a research / writing piece ──────────────────────────────
   Mirrors CaseHero (case-study.tsx) but keyed to a ResearchPiece and links
   back to the Research & Writing index. */

export function ArticleHero({
  piece,
  meta,
  links,
}: {
  piece: ResearchPiece;
  /** Ordered label/value pairs for the meta grid. */
  meta: [string, string][];
  /** Optional external actions (original PDF, repo…). */
  links?: { label: string; href: string }[];
}) {
  return (
    <section className="border-b border-[var(--line)] bg-[var(--surface)]">
      <div className="mx-auto max-w-6xl px-6 pt-12 pb-16 sm:pt-16">
        <Link
          href="/research"
          className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
        >
          ← Research &amp; Writing
        </Link>

        <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--accent)]">
          {piece.kind}
          {piece.institution ? ` · ${piece.institution}` : ""}
        </p>
        <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          {piece.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[var(--muted)] sm:text-xl">
          {piece.summary}
        </p>

        <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-6 border-t border-[var(--line)] pt-8 sm:grid-cols-3">
          {meta.map(([k, v]) => (
            <div key={k}>
              <dt className="text-xs uppercase tracking-[0.2em] text-[var(--faint)]">
                {k}
              </dt>
              <dd className="mt-2 text-[15px] text-[var(--ink)]">{v}</dd>
            </div>
          ))}
        </dl>

        {links && links.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[var(--line)] px-4 py-1.5 text-sm text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ── Data table ────────────────────────────────────────────────────────────
   Renders a captioned, themed table. Cells accept strings or nodes. */

export function DataTable({
  head,
  rows,
  caption,
  /** Right-align every column except the first (typical for numeric tables). */
  numeric = false,
}: {
  head: React.ReactNode[];
  rows: React.ReactNode[][];
  caption?: string;
  numeric?: boolean;
}) {
  const cellAlign = (i: number) =>
    numeric && i > 0 ? "text-right tabular-nums" : "text-left";
  return (
    <figure className="space-y-3">
      <div className="overflow-x-auto rounded-xl border border-[var(--line)]">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[var(--accent-soft)]">
              {head.map((h, i) => (
                <th
                  key={i}
                  className={`px-4 py-3 font-medium text-[var(--title)] ${cellAlign(
                    i
                  )}`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, r) => (
              <tr
                key={r}
                className="border-t border-[var(--line)] align-top"
              >
                {row.map((cell, c) => (
                  <td
                    key={c}
                    className={`px-4 py-3 ${
                      c === 0
                        ? "font-medium text-[var(--ink)]"
                        : "text-[var(--muted)]"
                    } ${cellAlign(c)}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && (
        <figcaption className="text-sm text-[var(--faint)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* ── Callout / aside note ──────────────────────────────────────────────────*/

export function Callout({
  label,
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <aside className="rounded-xl border-l-2 border-[var(--accent)] bg-[var(--surface)] px-5 py-4">
      {label && (
        <p className="mb-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--accent)]">
          {label}
        </p>
      )}
      <div className="space-y-3 text-[var(--muted)] leading-relaxed">
        {children}
      </div>
    </aside>
  );
}

/* ── Simple bulleted takeaways list ────────────────────────────────────────*/

export function KeyList({
  items,
}: {
  items: { term: string; detail: React.ReactNode }[];
}) {
  return (
    <ul className="space-y-5">
      {items.map((it) => (
        <li key={it.term} className="border-t border-[var(--line)] pt-5">
          <p className="font-serif text-lg tracking-tight text-[var(--title)]">
            {it.term}
          </p>
          <p className="mt-2 leading-relaxed text-[var(--muted)]">
            {it.detail}
          </p>
        </li>
      ))}
    </ul>
  );
}
