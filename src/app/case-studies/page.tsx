import Link from "next/link";
import type { Metadata } from "next";
import { caseStudies } from "@/lib/case-studies";
import { SoonBadge } from "@/components/case-study";

export const metadata: Metadata = {
  title: "Case studies",
};

export default function CaseStudiesIndex() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-serif text-4xl tracking-tight sm:text-5xl">
        Case studies
      </h1>
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
