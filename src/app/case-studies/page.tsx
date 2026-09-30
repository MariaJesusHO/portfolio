import Link from "next/link";
import type { Metadata } from "next";
import { caseStudies } from "@/lib/case-studies";
import { SoonBadge } from "@/components/case-study";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected UX engineering case studies — civic tech, fintech, and social-impact products.",
};

export default function CaseStudiesIndex() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--faint)]">
        Work
      </p>
      <h1 className="mt-6 font-serif text-4xl tracking-tight sm:text-5xl">
        Selected case studies
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-[var(--muted)]">
        End-to-end product work — research, design systems, and shipped
        implementation across civic tech, fintech, and social impact.
      </p>
      <ul className="mt-12 divide-y divide-[var(--line)] border-t border-[var(--line)]">
        {caseStudies.map((cs, i) => (
          <li key={cs.slug}>
            <Link
              href={`/case-studies/${cs.slug}`}
              className="group grid gap-2 py-8 transition-colors sm:grid-cols-[auto_1fr] sm:gap-8"
            >
              <span className="text-sm tracking-widest text-[var(--faint)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="font-serif text-2xl tracking-tight text-[var(--title)] group-hover:text-[var(--accent)]">
                    {cs.title}
                  </h2>
                  {cs.wip && <SoonBadge />}
                </div>
                <p className="mt-1 text-sm text-[var(--faint)]">
                  {cs.period} · {cs.role}
                </p>
                <p className="mt-3 text-[var(--muted)]">{cs.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--line)] px-2.5 py-0.5 text-xs text-[var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
