import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";
import { SoonBadge } from "@/components/case-study";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--faint)]">
          UX Designer → Systems Engineer
        </p>
        <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Making complex systems{" "}
          <span className="text-[var(--accent)]">understandable</span>,
          trustworthy, and useful for people.
        </h1>
        <div className="mt-8 max-w-2xl space-y-4 text-lg text-[var(--muted)]">
          <p>
            I have spent eight years making technology understandable for people
            as a UX designer. Now I am finishing a systems engineering degree to
            work on the layer where that is decided — how AI-era systems are
            architected, so trustworthiness and usability are built in rather
            than painted on.
          </p>
        </div>
        <div className="mt-14 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[var(--faint)]">
          <span>Selected work</span>
          <span aria-hidden>↓</span>
        </div>
      </section>

      {/* Selected work */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
          {caseStudies.map((cs, i) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="group block bg-[var(--surface)] p-8 transition-colors hover:bg-[var(--accent-soft)]"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-medium tracking-widest text-[var(--faint)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {cs.wip ? (
                  <SoonBadge />
                ) : (
                  <span className="text-sm text-[var(--faint)] opacity-0 transition-opacity group-hover:opacity-100">
                    View →
                  </span>
                )}
              </div>
              <h2 className="mt-4 font-serif text-2xl tracking-tight">
                {cs.title}
              </h2>
              <p className="mt-1 text-sm text-[var(--faint)]">{cs.period}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">
                {cs.tagline}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {cs.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--line)] px-2.5 py-0.5 text-xs text-[var(--muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Closing / contact */}
      <section className="border-t border-[var(--line)] bg-[var(--surface)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-20 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
            Currently open to work at the intersection of design and systems.
          </h2>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link
              href="/about"
              className="rounded-full border border-[var(--line)] px-5 py-2.5 text-[var(--ink)] hover:border-[var(--accent)] transition-colors"
            >
              About me
            </Link>
            <a
              href="mailto:mariajesusho@gmail.com"
              className="rounded-full bg-[var(--accent)] px-5 py-2.5 font-medium text-[var(--on-accent)] transition-opacity hover:opacity-90"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
