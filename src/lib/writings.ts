export type Writing = {
  slug: string;
  title: string;
  summary: string;
  date: string; // ISO date, e.g. "2026-03-01"
  readingTime?: string;
  href?: string; // external link (Medium, etc.); internal route added later
  tags?: string[];
};

// Add entries here as they're published. Empty renders a "coming soon" state.
export const writings: Writing[] = [];
