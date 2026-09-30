import type { Metadata } from "next";
import { ImagePlaceholder } from "@/components/case-study";

export const metadata: Metadata = {
  title: "About",
};

const focusAreas: [string, string][] = [
  ["Design systems", "Component libraries and tokens that keep products coherent as they scale."],
  ["AI-assisted UX workflows", "Processes that keep AI-generated UI human-centered and governed."],
  ["UX research & ops", "Interviews, testing, and synthesis that turn ambiguity into decisions."],
  ["Design-to-code", "Carrying design intent into accessible React / TypeScript implementation."],
];

const glance: [string, string][] = [
  ["Based in", "Peru"],
  ["In UX since", "2018"],
  ["Studying", "Systems Engineering (expected 2027)"],
  ["Open to", "Collaborations & good conversations"],
];

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--faint)]">
        About
      </p>
      <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl">
        Designer by training, systems engineer by choice.
      </h1>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        {/* Main column */}
        <div className="space-y-6 text-[var(--muted)] leading-relaxed">
          <p>
            I&apos;m a Senior UX Designer based in Peru, currently finishing a
            second degree in Systems Engineering. Over time, I became
            increasingly curious about what happens behind the interface — how
            systems are built, how technical decisions shape the experience, and
            what changes when AI becomes part of the product. Today my work spans
            research, product design, prototyping, and implementation. I like
            moving from ambiguity to something concrete, then testing whether it
            actually works.
          </p>
          <p>
            I&apos;m especially interested in HCI, human-centered AI, and the
            relationship between people and increasingly complex technology. I
            like understanding how things work — not just using the method,
            framework, or formula, but getting to the point where the “why” makes
            sense. I&apos;m still a designer at heart, but increasingly drawn to
            the systems underneath the experience.
          </p>

          {/* Focus areas */}
          <div className="pt-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--faint)]">
              What I focus on
            </p>
            <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
              {focusAreas.map(([title, desc]) => (
                <div key={title} className="bg-[var(--surface)] p-5">
                  <h2 className="font-serif text-lg tracking-tight text-[var(--title)]">
                    {title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Outside work */}
          <div className="pt-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--faint)]">
              Outside work
            </p>
            <p className="mt-6">
              I run, play tennis, and take far too many photos — and I usually
              have at least one completely unnecessary research rabbit hole open.
              I love travelling slowly, getting to know different cultures, and
              rarely pass up a museum.
            </p>
          </div>

          {/* Connect */}
          <div className="flex flex-wrap gap-3 pt-4">
            <a
              href="https://www.linkedin.com/in/maria-jesus-ho/?locale=en-US"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--line)] px-5 py-2.5 text-sm text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/MariaJesusHO"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--line)] px-5 py-2.5 text-sm text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              GitHub ↗
            </a>
            <a
              href="mailto:mariajesusho@gmail.com"
              className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-[var(--on-accent)] transition-opacity hover:opacity-90"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Aside: portrait + facts */}
        <aside className="space-y-6">
          <ImagePlaceholder label="Portrait / photo of Maria-Jesus" ratio="4 / 5" />
          <dl className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6">
            {glance.map(([k, v], i) => (
              <div
                key={k}
                className={
                  i > 0 ? "mt-4 border-t border-[var(--line)] pt-4" : ""
                }
              >
                <dt className="text-xs uppercase tracking-[0.2em] text-[var(--faint)]">
                  {k}
                </dt>
                <dd className="mt-1.5 text-[15px] text-[var(--ink)]">{v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </div>
  );
}
