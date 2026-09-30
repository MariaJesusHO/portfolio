export type ResearchPiece = {
  slug: string;
  title: string;
  summary: string;
  date: string; // ISO date, e.g. "2026-03-01"
  kind: "Research article" | "Academic investigation" | "Essay";
  readingTime?: string;
  tags: string[];
  authors?: string[];
  institution?: string;
  /** External link (PDF, repo) shown as a secondary action on the card. */
  href?: string;
};

// Ordered newest-first. Each internal piece has a page under /research/<slug>.
export const research: ResearchPiece[] = [
  {
    slug: "reinforcement-learning-state-aliasing",
    title: "When Reinforcement Learning Stops Improving",
    summary:
      "Diagnosing state aliasing in a simple Q-learning delivery agent — why a learning curve plateaued at a return of ≈23, and how a control experiment (not another hyperparameter sweep) found the real cause.",
    date: "2026-08-01",
    kind: "Research article",
    readingTime: "12 min read",
    tags: ["Reinforcement learning", "Q-learning", "MDPs", "Experiment design"],
  },
  {
    slug: "oxford-data-science-final",
    title: "Data Analysis: Visualisation & Classification",
    summary:
      "A two-part applied data-science study: exploratory visualisation of the Linnerud dataset, and a classification comparison (Ridge, Logistic Regression, KNN) on the Wine dataset — with feature scaling and cross-validation.",
    date: "2025-06-01",
    kind: "Academic investigation",
    readingTime: "9 min read",
    institution: "University of Oxford",
    authors: [
      "Dante Hernandez Castellanos",
      "Maria-Jesus Huaccha",
      "Omar Burgos Osorio",
    ],
    tags: ["Data visualisation", "Classification", "scikit-learn", "Python"],
  },
];

export function getResearch(slug: string): ResearchPiece | undefined {
  return research.find((r) => r.slug === slug);
}
