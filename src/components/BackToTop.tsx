"use client";

import { useEffect, useState } from "react";

/**
 * Floating button that appears after scrolling past the first viewport and
 * smooth-scrolls back to the top. Site-wide, useful on long case studies and
 * the writings archive.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] shadow-md transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span aria-hidden className="text-lg leading-none">
        ↑
      </span>
    </button>
  );
}
