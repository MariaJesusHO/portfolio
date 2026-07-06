import type { Metadata } from "next";
import { getCaseStudy } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Facilita Perú",
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-semibold tracking-tight">{children}</h2>
  );
}

function FindingLabel({
  kind,
}: {
  kind: "research" | "testing" | "decision";
}) {
  const styles = {
    research: "bg-slate-800 text-white",
    testing: "bg-orange-700 text-white",
    decision: "bg-green-800 text-white",
  };
  const labels = {
    research: "User research finding",
    testing: "Usability testing finding",
    decision: "Decision with Product Owner",
  };
  return (
    <span
      className={`inline-block rounded px-2 py-0.5 text-xs font-medium ${styles[kind]}`}
    >
      {labels[kind]}
    </span>
  );
}

export default function FacilitaPeruPage() {
  const cs = getCaseStudy("facilita-peru")!;

  return (
    <article className="space-y-12">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">{cs.title}</h1>
        <p className="text-lg text-neutral-600">{cs.tagline}</p>
        <p className="text-sm text-neutral-500">
          {cs.period} · {cs.role}
        </p>
        {cs.links && (
          <div className="flex gap-4 text-sm">
            {cs.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="underline hover:no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        )}
        {cs.confidentialityNote && (
          <p className="rounded-md bg-neutral-50 border border-neutral-200 px-4 py-3 text-sm text-neutral-600">
            {cs.confidentialityNote}
          </p>
        )}
      </header>

      <section className="space-y-3">
        <SectionTitle>The problem</SectionTitle>
        <p className="text-neutral-700 leading-relaxed">
          The COVID-19 pandemic made Peru&apos;s digitalization gap impossible
          to ignore. Smaller public entities allocate their limited IT
          resources to internal day-to-day support, leaving them unable to
          digitize citizen-facing services at all. Medium and large entities
          often had digitized services — but ones that were challenging to
          use, because they had never gone through a user-centered design
          process.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          Suddenly, citizens needed to carry out procedures digitally — request
          certificates, submit claims, check whether they qualified for
          emergency subsidies — and the government either could not meet that
          demand or met it through services that were hard to understand. For
          many citizens during lockdown, an unusable form was not an
          inconvenience; it was the difference between receiving a benefit or
          not.
        </p>
      </section>

      <section className="space-y-3">
        <SectionTitle>The solution</SectionTitle>
        <p className="text-neutral-700 leading-relaxed">
          Facilita Perú is a web platform that lets any public entity digitize
          its most important services <strong>without needing its own IT
          resources</strong> — easy to implement and maintain, developed under
          a complete user-centered design process, and prioritized around the
          needs of the entities with the fewest resources. It is administered
          by the Secretariat of Government and Digital Transformation (SGTD)
          of the Presidency of the Council of Ministers, as part of Peru&apos;s
          single digital platform, Gob.pe.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          The platform gives entities four core capabilities: creation and
          management of simple forms with templates, creation and management of
          complex multi-step services, creation of query pages, and digital
          payments.
        </p>
      </section>

      <section className="space-y-3">
        <SectionTitle>My role</SectionTitle>
        <p className="text-neutral-700 leading-relaxed">
          I designed the platform&apos;s UX/UI together with one design
          partner, from February 2021, working alongside the Product Owner and
          the development team. Every key screen went through user research,
          usability testing, or an explicit product decision — and the case
          study below labels which was which. Features added after my time on
          the project were designed by other designers.
        </p>
      </section>

      <section className="space-y-6">
        <SectionTitle>Key features and the decisions behind them</SectionTitle>

        <div className="space-y-3">
          <h3 className="font-semibold">Form templates</h3>
          <p className="text-sm">
            <FindingLabel kind="research" />
          </p>
          <p className="text-neutral-700 leading-relaxed">
            Research showed that public entities were creating different forms
            for the same service — and those forms often failed to comply with
            regulatory requirements. The solution was a template library for
            the most common procedures, built directly from the regulatory
            requirements, so a small municipality could publish a compliant
            form in minutes.
          </p>
          <p className="text-neutral-700 leading-relaxed">
            An early product proposal suggested entities could also reuse forms
            created by other institutions, as a form of crowdsourcing. We
            discarded it: it would have replicated non-compliant forms across
            the state. Sometimes the design decision is what you choose not to
            build.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">
            Complex services: designing the workflow builder
          </h3>
          <p className="text-sm">
            <FindingLabel kind="testing" />
          </p>
          <p className="text-neutral-700 leading-relaxed">
            Entities with fewer resources managed procedures on physical
            paperwork — slow, inefficient, and a poor citizen experience. We
            designed a tool that digitizes the handling of a procedure from
            start to finish: user roles, tasks, and the connections between
            them.
          </p>
          <p className="text-neutral-700 leading-relaxed">
            The first proposal visualized each procedure as a classic
            flowchart. In usability testing I noticed real procedures were so
            complex, with so many back-and-forths, that the flowcharts became
            tangled and unreadable. The final design uses two columns — one
            for creating roles, one for each role&apos;s tasks — with each
            task&apos;s connections viewable separately. Testing is what
            killed the &quot;obvious&quot; diagram solution.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">Request tray and request detail</h3>
          <p className="text-sm">
            <FindingLabel kind="decision" />
          </p>
          <p className="text-neutral-700 leading-relaxed">
            The request tray and detail pages already existed in other Gob.pe
            services, already user-tested and in production without issues. We
            deliberately reused that validated format instead of redesigning
            it, and focused our effort on targeted improvements: red urgency
            indicators for requests about to expire, and showing which user
            each task in the history came from.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">Query and result pages</h3>
          <p className="text-sm">
            <FindingLabel kind="research" /> <FindingLabel kind="testing" />
          </p>
          <p className="text-neutral-700 leading-relaxed">
            Entities needed to communicate information that is specific to
            each citizen — for example, whether someone is on the beneficiary
            list for a monetary subsidy. We designed a query-page creator: the
            entity uploads a spreadsheet mapping ID numbers to result types
            and writes the content for each result (not found, positive,
            negative); the citizen just enters their ID. In user tests the
            format, supported by helper texts and examples, proved easy to
            understand.
          </p>
          <p className="text-neutral-700 leading-relaxed">
            Research also showed a trust dimension: entities wanted their
            visual identity on the page to generate citizen trust, and
            citizens wanted to keep the result. So entities can upload their
            logo, and citizens can send results to their own email.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">Digital payments</h3>
          <p className="text-sm">
            <FindingLabel kind="testing" /> <FindingLabel kind="decision" />
          </p>
          <p className="text-neutral-700 leading-relaxed">
            Paid procedures needed payment methods citizens actually use —
            bank transfer, PagoEfectivo, digital wallets. The first design
            showed all payment information in a single view; testing showed it
            caused cognitive overload. The final design uses tabs per channel
            (online banking, wallets, agents, agencies), which users could
            navigate and understand without losing context.
          </p>
          <p className="text-neutral-700 leading-relaxed">
            Because Facilita must be self-manageable by each entity, payment
            configuration was designed around a principle of{" "}
            <strong>the least data possible without compromising
            security</strong> — linking an entity&apos;s payment account with
            just a provider code, name, and key.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <SectionTitle>Design system</SectionTitle>
        <p className="text-neutral-700 leading-relaxed">
          The visual language was built for state identity and broad
          accessibility: red for the Peruvian state and flag identity, blue
          for the stability and trust of institutions, and Roboto for
          legibility across devices — particularly the mobile screens most
          citizens use. Illustrated icons carry meaning for users with varied
          digital literacy; they are communication aids, not decoration.
        </p>
      </section>

      <section className="space-y-4">
        <SectionTitle>Outcome</SectionTitle>
        <p className="text-neutral-700 leading-relaxed">
          Facilita Perú grew from a pandemic response into national
          infrastructure, serving entities across all three levels of
          government — national, regional, and local:
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-neutral-200 p-4">
            <p className="text-2xl font-bold">63 → 1,300+</p>
            <p className="text-sm text-neutral-600">
              public entities (Apr 2021 → Dec 2023)
            </p>
          </div>
          <div className="rounded-lg border border-neutral-200 p-4">
            <p className="text-2xl font-bold">312 → 5,030+</p>
            <p className="text-sm text-neutral-600">
              digital services published
            </p>
          </div>
          <div className="rounded-lg border border-neutral-200 p-4">
            <p className="text-2xl font-bold">38,761 → 1,484,000+</p>
            <p className="text-sm text-neutral-600">
              citizen requests submitted
            </p>
          </div>
        </div>
        <p className="text-neutral-700 leading-relaxed">
          The platform is projected to enable at least 50% of municipal
          services and procedures nationwide to be delivered digitally.
        </p>
      </section>

      <section className="space-y-3">
        <SectionTitle>What I learned</SectionTitle>
        <p className="text-neutral-700 leading-relaxed">
          Testing beats intuition, especially on complexity. Twice, the
          &quot;obvious&quot; first design — the classic flowchart for
          workflows, the single view for payment information — failed in
          front of real users, and the redesigns that replaced them were
          shaped directly by what we observed.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          Reuse is a design decision, not a shortcut. Adopting the
          already-validated request tray meant our effort went where it
          mattered; and discarding the crowdsourced-forms idea taught me that
          protecting users sometimes means saying no to a feature.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          Designing for the least-resourced user — in this case, a small
          municipality with no IT staff — produces a system that works better
          for everyone. That principle, more than any single screen, is what I
          carry from this project into my work on complex platforms today.
        </p>
      </section>
    </article>
  );
}
