export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  period: string;
  role: string;
  tags: string[];
  links?: { label: string; href: string }[];
  confidentialityNote?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "facilita-peru",
    title: "Facilita Perú",
    tagline:
      "A government platform that let Peruvian citizens request official documents digitally during the pandemic.",
    period: "2020–2021",
    role: "UX/UI Designer (with one partner)",
    tags: ["Civic tech", "Service design", "Accessibility"],
    links: [
      { label: "Live platform", href: "https://guias.servicios.gob.pe/facilita" },
    ],
    confidentialityNote:
      "Research artifacts remain with the government entity; findings are summarized from memory and anonymized.",
  },
  {
    slug: "ar-intelligence-platform",
    title: "AR Intelligence Platform",
    tagline:
      "A human-centered accounts-receivable operations platform for B2B perishable-goods trade finance.",
    period: "2025–2026",
    role: "UX Engineer — research, design system, and React implementation",
    tags: ["Fintech", "Design systems", "React/TypeScript"],
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/MariaJesusHO/ar-intelligence-platform",
      },
    ],
    confidentialityNote:
      "Personas and artifacts are synthesized composites; client details altered under confidentiality agreement.",
  },
  {
    slug: "floral-ecommerce",
    title: "Reimagining Floral E-commerce",
    tagline:
      "A concept redesign for an industry whose digital storefronts have barely changed in a decade.",
    period: "2026 — in progress",
    role: "UX Engineer — end-to-end concept, design, and build",
    tags: ["E-commerce", "Domain innovation", "Concept design"],
  },
  {
    slug: "ai-ux-workflows",
    title: "AI-Assisted UX Workflows",
    tagline:
      "Tools and processes that keep AI-generated UI human-centered: context intake, component governance, and research operations.",
    period: "2025–2026",
    role: "Creator — workflow design and implementation",
    tags: ["AI + design process", "Developer experience", "Research ops"],
    links: [
      {
        label: "UX Engineering Flow",
        href: "https://github.com/MariaJesusHO/ai-ux-engineering",
      },
    ],
    confidentialityNote:
      "The research hub is populated with synthetic data; methods and structure mirror real practice.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
