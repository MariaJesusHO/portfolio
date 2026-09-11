import Link from "next/link";
import { LightboxImage } from "./LightboxImage";
import SectionNav, { type NavItem } from "./SectionNav";
import type { CaseStudy } from "@/lib/case-studies";

/* ── "Coming soon" badge ───────────────────────────────────────────────── */

export function SoonBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)] px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-[var(--accent)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
      Coming soon
    </span>
  );
}

/* ── Hero band ─────────────────────────────────────────────────────────── */

export function CaseHero({
  cs,
  meta,
}: {
  cs: CaseStudy;
  /** Ordered label/value pairs for the meta grid (Timeline, Role, Domain…). */
  meta: [string, string][];
}) {
  return (
    <section className="border-b border-[var(--line)] bg-[var(--surface)]">
      <div className="mx-auto max-w-6xl px-6 pt-12 pb-16 sm:pt-16">
        <Link
          href="/case-studies"
          className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
        >
          ← Case studies
        </Link>

        <h1 className="mt-8 max-w-4xl font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          {cs.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[var(--muted)] sm:text-xl">
          {cs.tagline}
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

        {cs.links && cs.links.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {cs.links.map((link) => (
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

        {cs.confidentialityNote && (
          <p className="mt-8 max-w-2xl rounded-lg border border-[var(--line)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--muted)]">
            {cs.confidentialityNote}
          </p>
        )}
      </div>
    </section>
  );
}

/* ── Body layout: sticky nav + article ─────────────────────────────────── */

export function CaseBody({
  nav,
  children,
}: {
  nav: NavItem[];
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-6xl gap-12 px-6 py-16 sm:py-20">
      <SectionNav items={nav} />
      <article className="cs-body min-w-0 max-w-3xl flex-1 space-y-16">
        {children}
      </article>
    </div>
  );
}

/* ── Section wrapper ───────────────────────────────────────────────────── */

export function Section({
  id,
  tag,
  title,
  children,
}: {
  id: string;
  tag?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 space-y-6">
      <div className="space-y-2">
        {tag && (
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--accent)]">
            {tag}
          </p>
        )}
        <h2 className="font-serif text-3xl tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}

/* ── Prose helpers ─────────────────────────────────────────────────────── */

export function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xl leading-relaxed text-[var(--ink)]">{children}</p>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="leading-relaxed text-[var(--muted)]">{children}</p>
  );
}

/* ── Stat cards ────────────────────────────────────────────────────────── */

export function StatCards({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <div className="grid gap-px overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-3">
      {items.map((s) => (
        <div key={s.label} className="bg-[var(--surface)] p-5">
          <p className="font-serif text-2xl text-[var(--title)]">{s.value}</p>
          <p className="mt-2 text-sm leading-snug text-[var(--muted)]">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ── Finding label (colored dot by type) ───────────────────────────────── */

const findingTones: Record<string, { dot: string; label: string }> = {
  research: { dot: "bg-sky-500", label: "User research finding" },
  desk: { dot: "bg-sky-500", label: "Desk research & survey finding" },
  testing: { dot: "bg-amber-500", label: "Usability testing finding" },
  interview: { dot: "bg-amber-500", label: "Interview finding" },
  decision: { dot: "bg-emerald-500", label: "Decision with Product Owner" },
  audit: { dot: "bg-emerald-500", label: "Heuristics audit finding" },
};

export type FindingKind = keyof typeof findingTones;

export function Finding({ kind }: { kind: FindingKind }) {
  const tone = findingTones[kind];
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] px-2.5 py-0.5 text-xs font-medium text-[var(--muted)]">
      <span className={`h-1.5 w-1.5 rounded-full ${tone.dot}`} />
      {tone.label}
    </span>
  );
}

/* ── Insight block (feature / decision / heuristic) ────────────────────── */

export function Insight({
  title,
  findings,
  children,
}: {
  title: string;
  findings?: FindingKind[];
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4 border-t border-[var(--line)] pt-8">
      {findings && findings.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {findings.map((k) => (
            <Finding key={k} kind={k} />
          ))}
        </div>
      )}
      <h3 className="font-serif text-xl tracking-tight text-[var(--title)]">
        {title}
      </h3>
      {children}
    </div>
  );
}

/* ── Persona card ──────────────────────────────────────────────────────── */

export function PersonaCard({
  name,
  quote,
  children,
}: {
  name: string;
  quote: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6">
      <p className="font-serif text-lg text-[var(--title)]">{name}</p>
      <p className="border-l-2 border-[var(--accent)] pl-3 text-sm italic text-[var(--muted)]">
        {quote}
      </p>
      <p className="text-sm leading-relaxed text-[var(--muted)]">{children}</p>
    </div>
  );
}

/* ── Figures ───────────────────────────────────────────────────────────── */

export function FigureRow({ children }: { children: React.ReactNode }) {
  return <div className="flex items-start gap-4">{children}</div>;
}

export function Figure(props: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  containerClassName?: string;
}) {
  return <LightboxImage {...props} />;
}

/**
 * Labeled empty slot for an image that will be supplied later. Renders the
 * intended dimensions so the layout is already correct when the file arrives.
 */
export function ImagePlaceholder({
  label,
  ratio = "16 / 9",
  className = "",
}: {
  label: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div
        style={{ aspectRatio: ratio }}
        className="flex items-center justify-center rounded-xl border border-dashed border-[var(--line)] bg-[var(--bg)] p-6 text-center"
      >
        <span className="max-w-xs text-xs uppercase tracking-wider text-[var(--faint)]">
          ◇ Image placeholder — {label}
        </span>
      </div>
    </figure>
  );
}
