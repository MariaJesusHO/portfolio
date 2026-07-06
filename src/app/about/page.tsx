import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className="space-y-8 max-w-2xl">
      <h1 className="text-3xl font-bold tracking-tight">About</h1>
      <div className="space-y-4 text-neutral-700 leading-relaxed">
        <p>
          I am a Senior UX Designer based in Peru, working in UX since 2018,
          and currently finishing a second degree in Systems Engineering
          (expected end of 2027).
        </p>
        <p>
          My work sits at the intersection of human-centered design and
          software architecture: design systems, AI-assisted workflows, and
          complex enterprise products that need to remain understandable and
          trustworthy for the people who use them.
        </p>
        <p className="text-neutral-400 italic">
          [Placeholder — extend with background, tools, values, and what you
          are looking for in a master&apos;s program.]
        </p>
      </div>
      <div className="flex gap-4 text-sm">
        <a
          href="https://github.com/MariaJesusHO"
          className="underline hover:no-underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
      </div>
    </div>
  );
}
