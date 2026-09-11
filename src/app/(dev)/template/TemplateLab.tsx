"use client";

import { useState } from "react";

type Theme = "light" | "dark";

/**
 * Visual template / style lab (dev-only — see ./page.tsx guard).
 * Self-contained editorial system kept for reference at /template. Uses .bleed
 * to escape the global max-w-4xl <main> wrapper and manage its own layout.
 */
export default function TemplateLab() {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <div
      data-theme={theme}
      className="bleed bg-[var(--bg)] text-[var(--ink)] transition-colors"
    >
      {/* Floating theme toggle */}
      <div className="fixed right-5 top-5 z-50">
        <button
          onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
          className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-xs font-medium tracking-wide text-[var(--ink)] shadow-sm hover:border-[var(--accent)] transition-colors"
        >
          {theme === "light" ? "◐ Dark mode" : "◑ Light mode"}
        </button>
      </div>

      <Hero />
      <SelectedWork />
      <CaseStudyHero />
      <NumberedColumns />
      <CardGrid />
      <Comparison />
      <SidebarLayout />

      <footer className="mx-auto max-w-6xl px-6 py-16 text-sm text-[var(--faint)]">
        Template lab — toggle the theme, tell me what to adjust, then I roll
        these patterns into your real pages.
      </footer>
    </div>
  );
}

/* — shared bits — */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--faint)]">
      {children}
    </p>
  );
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--accent)]">
      {children}
    </p>
  );
}

/* — 1. Hero (light-editorial style) — */

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-28 pb-24">
      <h1 className="font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
        Hi — I&apos;m{" "}
        <span className="text-[var(--accent)]">Maria-Jesus</span>, a UX designer
        becoming a systems engineer.
      </h1>
      <div className="mt-8 max-w-2xl space-y-1 text-lg text-[var(--muted)] sm:text-xl">
        <p>
          Eight years making technology understandable for people as a UX
          designer.
        </p>
        <p>
          Now working on the layer where trust and usability are decided — how
          AI-era systems are architected.
        </p>
      </div>
      <div className="mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[var(--faint)]">
        <span>Selected work</span>
        <span aria-hidden>↓</span>
      </div>
    </section>
  );
}

/* — 2. Selected work grid — */

const work = [
  {
    n: "01",
    title: "Facilita Perú",
    tagline:
      "A government platform that let citizens request official documents digitally during the pandemic.",
    tags: ["Civic tech", "Service design", "GovTech"],
  },
  {
    n: "02",
    title: "AR Intelligence Platform",
    tagline:
      "A human-centered accounts-receivable operations platform for B2B perishable-goods trade finance.",
    tags: ["Fintech", "Design systems", "React/TS"],
  },
  {
    n: "03",
    title: "ReFood Perú",
    tagline:
      "A food-rescue platform connecting Lima's surplus meals with nearby consumers before they're thrown away.",
    tags: ["Social impact", "Behavior-change", "Service design"],
  },
  {
    n: "04",
    title: "AI-Assisted UX Workflows",
    tagline:
      "Tools that keep AI-generated UI human-centered: context intake, component governance, research ops.",
    tags: ["AI + process", "DevEx", "Research ops"],
  },
];

function SelectedWork() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <div className="grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
        {work.map((p) => (
          <a
            key={p.n}
            href="#"
            className="group block bg-[var(--surface)] p-8 transition-colors hover:bg-[var(--accent-soft)]"
          >
            <div className="flex items-baseline justify-between">
              <span className="text-xs font-medium tracking-widest text-[var(--faint)]">
                {p.n}
              </span>
              <span className="text-sm text-[var(--faint)] opacity-0 transition-opacity group-hover:opacity-100">
                View →
              </span>
            </div>
            <h3 className="mt-4 font-serif text-2xl tracking-tight">
              {p.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">
              {p.tagline}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[var(--line)] px-2.5 py-0.5 text-xs text-[var(--muted)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* — 3. Case-study hero (full-bleed band) — */

function CaseStudyHero() {
  return (
    <section className="mt-16 border-y border-[var(--line)] bg-[var(--surface)]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionTag>Case study</SectionTag>
        <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          Making a government service feel human during a national emergency.
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-[var(--muted)]">
          Facilita Perú — how two designers helped citizens request official
          documents without leaving home.
        </p>
        <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-6 border-t border-[var(--line)] pt-8 sm:grid-cols-3">
          {[
            ["Timeline", "2021 – 2023"],
            ["Role", "UX/UI Designer"],
            ["Domain", "Civic tech · GovTech"],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="text-xs uppercase tracking-[0.2em] text-[var(--faint)]">
                {k}
              </dt>
              <dd className="mt-2 text-[15px]">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* — 4. Numbered columns (StayPass 01/02/03) — */

const steps = [
  {
    n: "01",
    title: "Research",
    body: "Interviews, service safaris, and analytics turn a vague brief into a sharp, shared problem.",
  },
  {
    n: "02",
    title: "Design",
    body: "Flows, a component system, and prototypes make the solution concrete enough to test.",
  },
  {
    n: "03",
    title: "Build",
    body: "React and TypeScript carry the design intent all the way into a working, accessible product.",
  },
];

function NumberedColumns() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Label>How I work</Label>
      <div className="mt-12 grid gap-12 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n}>
            <span className="text-sm tracking-widest text-[var(--faint)]">
              {s.n}
            </span>
            <h3 className="mt-6 font-serif text-3xl tracking-tight">
              {s.title}
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--muted)]">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* — 5. Card grid with image slots (Swervo research) — */

const trends = [
  ["Discover", "Primary and secondary research to frame a valuable opportunity."],
  ["Define", "Concept maps and models that anchor the team in one problem space."],
  ["Prototype", "Experience prototypes that make ideas testable with real users."],
  ["Deliver", "A documented product-service proposal with clear value to the client."],
];

function CardGrid() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--surface)]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="max-w-2xl font-serif text-3xl tracking-tight sm:text-4xl">
          Understanding the landscape
        </h2>
        <p className="mt-4 max-w-2xl text-[var(--muted)]">
          Four themes shaped how the project was framed and where the real
          opportunity lived.
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trends.map(([title, body]) => (
            <div key={title}>
              <div className="aspect-[4/3] rounded-lg border border-[var(--line)] bg-[var(--bg)]" />
              <h4 className="mt-4 font-medium">{title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* — 6. A/B comparison (StayPass before/after) — */

function Comparison() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionTag>Design decision</SectionTag>
      <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl">
        From a generic form to a guided request.
      </h2>
      <div className="mt-16 grid gap-12 md:grid-cols-2">
        {[
          {
            side: "A",
            kicker: "Before",
            title: "One long, intimidating form",
            body: "Citizens faced every field at once, with no sense of progress or what to prepare. Drop-off was high.",
          },
          {
            side: "B",
            kicker: "After",
            title: "A step-by-step guided flow",
            body: "The request is broken into small, explained steps that show progress and only ask for what's needed next.",
          },
        ].map((c) => (
          <div key={c.side}>
            <div className="flex items-center gap-3">
              <span className="text-xs tracking-widest text-[var(--faint)]">
                {c.side}
              </span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--accent)]">
                {c.kicker}
              </span>
            </div>
            <h3 className="mt-4 font-serif text-2xl tracking-tight">
              {c.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">
              {c.body}
            </p>
            <div className="mt-6 aspect-[4/3] rounded-xl border border-[var(--line)] bg-[var(--surface)]" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* — 7. Sidebar-nav content layout (Swervo) — */

const nav = [
  "Overview",
  "Project scope",
  "Research",
  "Reframing",
  "Prototyping",
  "Final proposal",
  "Reflections",
];

function SidebarLayout() {
  return (
    <section className="border-t border-[var(--line)]">
      <div className="mx-auto flex max-w-6xl gap-12 px-6 py-24">
        <aside className="hidden w-40 shrink-0 lg:block">
          <nav className="sticky top-24 space-y-3 text-sm">
            {nav.map((item, i) => (
              <a
                key={item}
                href="#"
                className={
                  i === 1
                    ? "block font-medium text-[var(--accent)]"
                    : "block text-[var(--muted)] hover:text-[var(--ink)]"
                }
              >
                {item}
              </a>
            ))}
          </nav>
        </aside>
        <div className="max-w-2xl">
          <SectionTag>Project scope</SectionTag>
          <p className="mt-6 text-xl leading-relaxed">
            To define a valuable opportunity at an impactful scale, we began by
            expanding the problem space with primary and secondary research to
            set our target and mission.
          </p>
          <p className="mt-6 leading-relaxed text-[var(--muted)]">
            The blue-sky nature of the project was overwhelming at first. To
            establish coherence from ambiguity, I created a concept map to
            methodically break down the prompt. This{" "}
            <mark className="bg-[var(--accent-soft)] text-[var(--ink)]">
              anchored the team and the client in a shared understanding
            </mark>{" "}
            and established a culture of creating clarity with visual models.
          </p>
          <figure className="mt-10">
            <div className="aspect-[16/9] rounded-xl border border-[var(--line)] bg-[var(--surface)]" />
            <figcaption className="mt-3 text-sm text-[var(--faint)]">
              Double-diamond model of the project timeline
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
