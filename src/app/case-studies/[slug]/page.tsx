import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { CaseHero, CaseBody, Section, SoonBadge } from "@/components/case-study";

// Case studies with a dedicated page under case-studies/<slug>/ are
// excluded here; this dynamic route only renders the placeholder template.
const dedicatedPages = ["facilita-peru", "refood"];

export function generateStaticParams() {
  return caseStudies
    .filter((cs) => !dedicatedPages.includes(cs.slug))
    .map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const cs = getCaseStudy((await params).slug);
  return { title: cs?.title ?? "Case study" };
}

const sections = [
  {
    id: "problem",
    heading: "The problem",
    placeholder:
      "What was broken or missing, for whom, and why it mattered. Ground it in the human consequence, not the feature request.",
  },
  {
    id: "role",
    heading: "My role",
    placeholder:
      "What I owned, who I worked with, and where my responsibility ended. Be precise about collaboration.",
  },
  {
    id: "research",
    heading: "Research & process",
    placeholder:
      "Methods used, sample sizes, and the key findings (abstracted). How the findings changed the design.",
  },
  {
    id: "solution",
    heading: "The solution",
    placeholder:
      "What shipped or was built, with reconstructed artifacts and screenshots labeled as such where originals are confidential.",
  },
  {
    id: "outcome",
    heading: "Outcome",
    placeholder:
      "Directional results and qualitative impact. What changed for the users.",
  },
  {
    id: "learned",
    heading: "What I learned",
    placeholder:
      "Honest reflection: what worked, what I would do differently, and how this project changed how I work.",
  },
];

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const cs = getCaseStudy((await params).slug);
  if (!cs) notFound();

  const meta: [string, string][] = [
    ["Timeline", cs.period],
    ["Role", cs.role],
  ];

  return (
    <>
      <CaseHero cs={cs} meta={meta} />
      <CaseBody nav={sections.map((s) => ({ id: s.id, label: s.heading }))}>
        <div className="space-y-4 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6">
          <SoonBadge />
          <p className="text-lg text-[var(--ink)]">
            This case study is being written. Here&apos;s what it will cover — check
            back soon.
          </p>
          {cs.links && cs.links.length > 0 && (
            <p className="text-sm text-[var(--muted)]">
              In the meantime, the work is available on{" "}
              {cs.links.map((link, i) => (
                <span key={link.href}>
                  {i > 0 && ", "}
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent)] underline hover:no-underline"
                  >
                    {link.label}
                  </a>
                </span>
              ))}
              .
            </p>
          )}
        </div>

        {sections.map((section) => (
          <Section key={section.id} id={section.id} title={section.heading}>
            <p className="italic text-[var(--faint)]">{section.placeholder}</p>
          </Section>
        ))}
      </CaseBody>
    </>
  );
}
