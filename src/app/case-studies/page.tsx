import Link from "next/link";
import type { Metadata } from "next";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case studies",
};

export default function CaseStudiesIndex() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">Case studies</h1>
      <ul className="space-y-6">
        {caseStudies.map((cs) => (
          <li key={cs.slug} className="border-b border-neutral-200 pb-6">
            <Link
              href={`/case-studies/${cs.slug}`}
              className="text-xl font-semibold hover:underline"
            >
              {cs.title}
            </Link>
            <p className="mt-1 text-sm text-neutral-500">
              {cs.period} · {cs.role}
            </p>
            <p className="mt-2 text-neutral-600">{cs.tagline}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
