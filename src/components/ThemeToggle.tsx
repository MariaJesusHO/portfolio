"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

/**
 * Toggles the site-wide palette by setting data-theme on <html>, persisted to
 * localStorage. The initial value is applied pre-paint by the inline script in
 * layout.tsx, so this only syncs React state and handles clicks.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const current = (document.documentElement.dataset.theme as Theme) || "light";
    setTheme(current);
  }, []);

  function toggle() {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="rounded-full border border-[var(--line)] px-3 py-1.5 text-xs font-medium text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--ink)] transition-colors"
    >
      {theme === "light" ? "◐ Dark" : "◑ Light"}
    </button>
  );
}
