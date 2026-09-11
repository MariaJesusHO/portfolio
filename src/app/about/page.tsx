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
  ["Status", "Open to work"],
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
            I am a Senior UX Designer based in Peru, working in UX since 2018, and
            currently finishing a second degree in Systems Engineering (expected
            end of 2027).
          </p>
          <p>
            My work sits at the intersection of human-centered design and software
            architecture: design systems, AI-assisted workflows, and complex
            enterprise products that need to remain understandable and trustworthy
            for the people who use them.
          </p>
          <p>
            I care about making high-stakes tools usable for the people who depend
            on them — and about closing the gap between how a product is designed
            and how it is actually built. That is the reason I moved from
            designing interfaces toward the systems layer where trust and
            usability are decided.
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
