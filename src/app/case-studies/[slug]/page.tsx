import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

// Case studies with a dedicated page under case-studies/<slug>/ are
// excluded here; this dynamic route only renders the placeholder template.
const dedicatedPages = ["facilita-peru"];

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
    heading: "The problem",
    placeholder:
      "What was broken or missing, for whom, and why it mattered. Ground it in the human consequence, not the feature request.",
  },
  {
    heading: "My role",
    placeholder:
      "What I owned, who I worked with, and where my responsibility ended. Be precise about collaboration.",
  },
  {
    heading: "Research & process",
    placeholder:
      "Methods used, sample sizes, and the key findings (abstracted). How the findings changed the design.",
  },
  {
    heading: "The solution",
    placeholder:
      "What shipped or was built, with reconstructed artifacts and screenshots labeled as such where originals are confidential.",
  },
  {
    heading: "Outcome",
    placeholder:
      "Directional results and qualitative impact. What changed for the users.",
  },
  {
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

  return (
    <article className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">{cs.title}</h1>
        <p className="text-lg text-neutral-600">{cs.tagline}</p>
        <p className="text-sm text-neutral-500">
          {cs.period} · {cs.role}
        </p>
        {cs.links && (
          <div className="flex gap-4 text-sm">
            {cs.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="underline hover:no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        )}
        {cs.confidentialityNote && (
          <p className="rounded-md bg-neutral-50 border border-neutral-200 px-4 py-3 text-sm text-neutral-600">
            {cs.confidentialityNote}
          </p>
        )}
      </header>

      {sections.map((section) => (
        <section key={section.heading} className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">
            {section.heading}
          </h2>
          <p className="text-neutral-400 italic">{section.placeholder}</p>
        </section>
      ))}
    </article>
  );
}
