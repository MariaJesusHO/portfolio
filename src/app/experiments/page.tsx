import type { Metadata } from "next";
import { experiments } from "@/lib/experiments";
import { SoonBadge } from "@/components/case-study";

export const metadata: Metadata = {
  title: "Tools / Experiments",
  description:
    "AI-assisted UX workflows, custom agents, and Python experiments — smaller tools and side projects.",
};

export default function ExperimentsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--faint)]">
          Tools / Experiments
        </p>
        <h1 className="mt-6 font-serif text-4xl tracking-tight sm:text-5xl">
          Things I build to work better.
        </h1>
        <p className="mt-6 text-lg text-[var(--muted)]">
          AI-assisted UX workflows, custom agents, and Python experiments —
          smaller tools and side projects that live mostly on GitHub.
        </p>
      </header>

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
        {experiments.map((e) => (
          <article key={e.slug} className="flex flex-col bg-[var(--surface)] p-8">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--accent)]">
                {e.kind}
              </span>
              {e.wip && <SoonBadge />}
            </div>
            <h2 className="mt-4 font-serif text-2xl tracking-tight text-[var(--title)]">
              {e.title}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">
              {e.tagline}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {e.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--line)] px-2.5 py-0.5 text-xs text-[var(--muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
            {e.links && e.links.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3 pt-1">
                {e.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--accent)] underline underline-offset-4 hover:no-underline"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
