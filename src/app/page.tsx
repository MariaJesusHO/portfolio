import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-widest text-neutral-500">
          UX Designer → Systems Engineer
        </p>
        <h1 className="text-4xl font-bold tracking-tight">
          Making complex systems understandable, trustworthy, and useful for
          people.
        </h1>
        <p className="text-lg text-neutral-600 max-w-2xl">
          I have spent eight years making technology understandable for people
          as a UX designer. Now I am finishing a systems engineering degree to
          work on the layer where that is decided — how AI-era systems are
          architected, so that trustworthiness and usability are built in
          rather than painted on.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold tracking-tight">Case studies</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="group rounded-lg border border-neutral-200 p-5 hover:border-neutral-400 transition-colors"
            >
              <h3 className="font-semibold group-hover:underline">
                {cs.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">{cs.tagline}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {cs.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
