export type Experiment = {
  slug: string;
  title: string;
  tagline: string;
  /** Short category shown as an eyebrow, e.g. "Workflow", "Agents", "Automation". */
  kind: string;
  tags: string[];
  links?: { label: string; href: string }[];
  /** In progress / not yet public — shown as "Coming soon". */
  wip?: boolean;
};

export const experiments: Experiment[] = [
  {
    slug: "ai-ux-workflows",
    title: "AI-Assisted UX Workflows",
    tagline:
      "Tools and processes that keep AI-generated UI human-centered: context intake, component governance, and research operations.",
    kind: "Workflow",
    tags: ["AI + design process", "Developer experience", "Research ops"],
    links: [
      {
        label: "UX Engineering Flow",
        href: "https://github.com/MariaJesusHO/ai-ux-engineering",
      },
    ],
  },
  {
    slug: "agents",
    title: "Custom Agents",
    tagline:
      "A growing collection of purpose-built AI agents — for research synthesis, design-system chores, and UX engineering tasks. Collected in one repository.",
    kind: "Agents",
    tags: ["LLM agents", "Prompt design", "Automation"],
    wip: true,
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/MariaJesusHO",
      },
    ],
  },
  {
    slug: "python-automation",
    title: "Python Experiments",
    tagline:
      "Small Python jobs and data experiments — scripts and notebooks that automate repetitive work and explore datasets end to end.",
    kind: "Automation",
    tags: ["Python", "Data", "Scripting"],
    wip: true,
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/MariaJesusHO",
      },
    ],
  },
];
