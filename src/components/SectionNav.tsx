"use client";

import { useEffect, useState } from "react";

export type NavItem = { id: string; label: string };

/**
 * Sticky in-page table of contents for long case studies. Highlights the
 * section currently in view via IntersectionObserver. Hidden on small screens.
 */
export default function SectionNav({ items }: { items: NavItem[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <aside className="hidden w-44 shrink-0 lg:block">
      <nav className="sticky top-24 space-y-2.5 text-sm">
        {items.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={
              active === id
                ? "block font-medium text-[var(--accent)]"
                : "block text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
            }
          >
            {label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
