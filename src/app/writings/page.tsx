import type { Metadata } from "next";
import Link from "next/link";
import { writings } from "@/lib/writings";

export const metadata: Metadata = {
  title: "Writings",
  description:
    "Notes and essays on UX, systems engineering, and designing for AI-era products.",
};

export default function WritingsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--faint)]">
          Writings
        </p>
        <h1 className="mt-6 font-serif text-4xl tracking-tight sm:text-5xl">
          Notes on design, systems, and the AI-era in between.
        </h1>
        <p className="mt-6 text-lg text-[var(--muted)]">
          Essays and working notes on UX research, design systems, and
          architecting products people can actually trust.
        </p>
      </header>

      {writings.length === 0 ? (
        <div className="mt-14 rounded-xl border border-dashed border-[var(--line)] bg-[var(--surface)] p-10 text-center">
          <p className="font-serif text-2xl text-[var(--title)]">
            First pieces are in the works.
          </p>
          <p className="mx-auto mt-3 max-w-md text-[var(--muted)]">
            I&apos;m writing up lessons from recent projects. Check back soon — or
            reach out if a topic here is useful to you.
          </p>
          <a
            href="mailto:mariajesusho@gmail.com"
            className="mt-6 inline-block rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-[var(--on-accent)] transition-opacity hover:opacity-90"
          >
            Get in touch
          </a>
        </div>
      ) : (
        <ul className="mt-14 divide-y divide-[var(--line)] border-t border-[var(--line)]">
          {writings.map((w) => {
            const inner = (
              <>
                <p className="text-sm text-[var(--faint)]">
                  {new Date(w.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  {w.readingTime ? ` · ${w.readingTime}` : ""}
                </p>
                <h2 className="mt-2 font-serif text-2xl tracking-tight text-[var(--title)] group-hover:text-[var(--accent)]">
                  {w.title}
                </h2>
                <p className="mt-3 text-[var(--muted)]">{w.summary}</p>
                {w.tags && w.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {w.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--line)] px-2.5 py-0.5 text-xs text-[var(--muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </>
            );
            return (
              <li key={w.slug}>
                {w.href ? (
                  <a
                    href={w.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block py-8"
                  >
                    {inner}
                  </a>
                ) : (
                  <Link href={`/writings/${w.slug}`} className="group block py-8">
                    {inner}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
