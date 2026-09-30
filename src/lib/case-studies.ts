export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  period: string;
  role: string;
  tags: string[];
  links?: { label: string; href: string }[];
  confidentialityNote?: string;
  /** Case study written up but not yet published — shown as "Coming soon". */
  wip?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "facilita-peru",
    title: "Facilita Perú",
    tagline:
      "A government platform that let Peruvian citizens request official documents digitally during the pandemic.",
    period: "2021–2023",
    role: "UX/UI Designer (with one partner)",
    tags: ["Civic tech", "Service design", "GovTech"],
    links: [
      { label: "Live platform", href: "https://guias.servicios.gob.pe/facilita" },
      {
        label: "UI case study (Webflow)",
        href: "https://maria-jesus-design.webflow.io/facilita",
      },
    ],
    confidentialityNote:
      "Original research artifacts remain with the government entity. Findings below are summarized and anonymized; platform metrics are public program data.",
  },
  {
    slug: "ar-intelligence-platform",
    title: "AR Intelligence Platform",
    tagline:
      "A human-centered accounts-receivable operations platform for B2B perishable-goods trade finance.",
    period: "2025–2026",
    role: "UX Engineer — research, design system, and React implementation",
    tags: ["Fintech", "Design systems", "React/TypeScript"],
    wip: true,
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
    slug: "refood",
    title: "ReFood Perú",
    tagline:
      "A food-rescue platform connecting Lima's surplus meals with nearby consumers — before they're thrown away.",
    period: "2026",
    role: "UX Engineer — research, design system, and full-stack prototype",
    tags: ["Social impact", "Behavior-change design", "Service design"],
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/MariaJesusHO/ReFood",
      },
      {
        label: "Live demo",
        href: "https://re-food-brown.vercel.app",
      },
    ],
    confidentialityNote:
      "Academic prototype developed for the course Diseño y Tecnologías UX, Systems Engineering, Universidad Peruana de Ciencias Aplicadas (UPC), 2026-1. No real transactions; all backend data is simulated.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
