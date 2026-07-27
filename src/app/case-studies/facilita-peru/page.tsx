import type { Metadata } from "next";
import { getCaseStudy } from "@/lib/case-studies";
import { LightboxImage } from "@/components/LightboxImage";

export const metadata: Metadata = {
  title: "Facilita Perú",
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-semibold tracking-tight">{children}</h2>;
}

function Label({ kind }: { kind: "research" | "testing" | "decision" }) {
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
    <span className={`inline-block rounded px-2 py-0.5 text-xs font-medium ${styles[kind]}`}>
      {labels[kind]}
    </span>
  );
}

function FeatureHeading({
  title,
  kinds,
}: {
  title: string;
  kinds: Array<"research" | "testing" | "decision">;
}) {
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-1.5">
        {kinds.map((k) => <Label key={k} kind={k} />)}
      </div>
      <h3 className="font-semibold text-[15px]">{title}</h3>
    </div>
  );
}

export default function FacilitaPeruPage() {
  const cs = getCaseStudy("facilita-peru")!;

  return (
    <article className="space-y-14">

      {/* ── Header ─────────────────────────────────────────────── */}
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">{cs.title}</h1>
        <p className="text-lg text-neutral-600">{cs.tagline}</p>
        <p className="text-sm text-neutral-500">
          {cs.period} · {cs.role}
        </p>
        {cs.links && (
          <div className="flex gap-4 text-sm">
            {cs.links.map((link) => (
              <a key={link.href} href={link.href} className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">
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

      {/* ── Cover image ─────────────────────────────────────────── */}
      <LightboxImage
        src="/images/facilita/stats-desktop.png"
        alt="Facilita Perú statistics dashboard — overview of entities, forms, and requests across the platform"
        width={662}
        height={1400}
        caption="Facilita Perú admin dashboard — platform-wide statistics across all entities"
        containerClassName="h-72 sm:h-96"
      />

      {/* ── Context ─────────────────────────────────────────────── */}
      <section className="space-y-8">
        <div className="space-y-3">
          <SectionTitle>The problem</SectionTitle>
          <p className="text-neutral-700 leading-relaxed">
            The COVID-19 pandemic exposed Peru&apos;s digitalization gap.
            Smaller public entities had no spare IT capacity to build
            citizen-facing services; larger ones had deployed digital forms
            that had never been through user-centered design. When lockdown
            hit, citizens couldn&apos;t fall back on in-person procedures.
            An unusable form wasn&apos;t an inconvenience — it was the
            difference between receiving an emergency subsidy or not.
          </p>
        </div>

        <div className="space-y-3">
          <SectionTitle>The solution</SectionTitle>
          <p className="text-neutral-700 leading-relaxed">
            Facilita Perú is a web platform that lets any public entity
            digitize its services <strong>without needing its own IT
            resources</strong>. Administered by Peru&apos;s Secretariat of
            Government and Digital Transformation (SGTD) as part of the
            national platform Gob.pe, it gives entities four core
            capabilities: form templates, complex multi-step service
            management, citizen query pages, and digital payments.
          </p>
        </div>

        <div className="space-y-3">
          <SectionTitle>My role</SectionTitle>
          <p className="text-neutral-700 leading-relaxed">
            I designed the platform&apos;s UX/UI alongside{" "}
            <strong>Sergio Mitsunaga</strong>, a UX researcher and designer
            who led the research process. I focused on the design system,
            sat in user interviews as notetaker — getting first-hand access
            to what entities and citizens struggled with — then translated
            those insights into interface designs and managed the handoff to
            the development team. We worked from February 2021 with the
            Product Owner and engineering. Every key screen went through
            user research, usability testing, or an explicit product
            decision; the case study below labels which was which.
          </p>
        </div>
      </section>

      {/* ── Key features ────────────────────────────────────────── */}
      <section className="space-y-12">
        <SectionTitle>Key features and the decisions behind them</SectionTitle>

        {/* 1 · Form templates */}
        <div className="space-y-4">
          <FeatureHeading title="Form templates" kinds={["research"]} />
          <p className="text-neutral-700 leading-relaxed">
            Research showed that public entities were creating different
            forms for the same service — and those forms often failed to
            comply with regulatory requirements. The solution was a template
            library for the most common procedures, built directly from
            regulatory requirements, so a small municipality could publish a
            compliant form in minutes.
          </p>
          <p className="text-neutral-700 leading-relaxed">
            An early proposal suggested letting entities reuse forms from
            other institutions. We discarded it: it would have replicated
            non-compliant forms across the state. Sometimes the design
            decision is what you choose not to build.
          </p>
          <LightboxImage
            src="/images/facilita/forms-desktop.png"
            alt="Form template editor — step 2, editing the form fields and pages"
            width={291}
            height={1400}
            caption="Form template editor — entities configure fields, sections, and compliance settings"
            containerClassName="h-80"
          />
        </div>

        {/* 2 · Workflow builder */}
        <div className="space-y-4">
          <FeatureHeading title="Complex services: the workflow builder" kinds={["testing"]} />
          <p className="text-neutral-700 leading-relaxed">
            Entities with fewer resources managed procedures on physical
            paperwork. We designed a tool that digitizes the full lifecycle
            of a procedure: user roles, tasks, and the connections between
            them.
          </p>
          <p className="text-neutral-700 leading-relaxed">
            The first proposal showed each procedure as a flowchart. In
            usability testing I found that real procedures were so complex —
            with so many back-and-forths — that the flowcharts became
            tangled and unreadable. The final design uses two columns, one
            per role, with task connections viewable separately. Testing
            killed the &quot;obvious&quot; diagram solution.
          </p>
          <div className="flex gap-4 items-start">
            <LightboxImage
              src="/images/facilita/workflow-desktop.png"
              alt="Workflow builder — step 3, defining user types, tasks and task connections"
              width={659}
              height={1400}
              caption="Workflow builder — two-column layout: one column per role, tasks listed below each"
              containerClassName="flex-1 h-80"
            />
            <LightboxImage
              src="/images/facilita/workflow-mobile.png"
              alt="Workflow builder — mobile view"
              width={254}
              height={1400}
              caption="Mobile"
              containerClassName="w-36 h-80"
            />
          </div>
        </div>

        {/* 3 · Request tray */}
        <div className="space-y-4">
          <FeatureHeading title="Request tray and request detail" kinds={["decision"]} />
          <p className="text-neutral-700 leading-relaxed">
            The request tray and detail pages already existed in other
            Gob.pe services, user-tested and in production without issues.
            We deliberately reused that validated format and focused our
            effort on targeted improvements: red urgency indicators for
            requests about to expire, and attributing each task in the
            history to the specific user who performed it.
          </p>
          <div className="flex gap-4 items-start">
            <LightboxImage
              src="/images/facilita/tray-desktop.png"
              alt="Entity request tray — list of incoming citizen requests with status tags and urgency indicators"
              width={1056}
              height={1400}
              caption="Entity side — request tray with urgency tags and deadline indicators"
              containerClassName="flex-1 h-64"
            />
            <LightboxImage
              src="/images/facilita/tray-mobile.png"
              alt="Entity request tray — mobile view"
              width={190}
              height={1400}
              caption="Mobile"
              containerClassName="w-36 h-64"
            />
          </div>
        </div>

        {/* 4 · Query pages */}
        <div className="space-y-4">
          <FeatureHeading title="Query and result pages" kinds={["research", "testing"]} />
          <p className="text-neutral-700 leading-relaxed">
            Entities needed to communicate citizen-specific information —
            whether someone qualifies for a subsidy, for example. We
            designed a query-page creator: the entity uploads a spreadsheet
            mapping ID numbers to result types and writes content for each
            outcome (not found, positive, negative); the citizen enters
            their ID. In user tests the format, with helper texts and
            examples, proved easy to understand.
          </p>
          <p className="text-neutral-700 leading-relaxed">
            Research also revealed a trust dimension: entities wanted their
            visual identity on the page, and citizens wanted to keep the
            result. So entities can upload their logo, and citizens can send
            results to their own email.
          </p>
        </div>

        {/* 5 · Digital payments */}
        <div className="space-y-4">
          <FeatureHeading title="Digital payments" kinds={["testing", "decision"]} />
          <p className="text-neutral-700 leading-relaxed">
            Paid procedures needed payment methods citizens actually use —
            bank transfer, PagoEfectivo, digital wallets. The first design
            showed all options in a single view; testing showed it caused
            cognitive overload. The final design uses tabs per channel
            (online banking, wallets, agents, agencies) so users can focus
            on the one they need.
          </p>
          <p className="text-neutral-700 leading-relaxed">
            Because each entity manages its own Facilita account, payment
            configuration was designed around a principle of{" "}
            <strong>the least data possible without compromising
            security</strong> — linking an entity&apos;s payment account
            with just a provider code, name, and key.
          </p>
          <div className="flex gap-4 items-start">
            <LightboxImage
              src="/images/facilita/payments-mobile.png"
              alt="Citizen payment step — selecting a payment method: bank transfer, PagoEfectivo, or Págalo.pe"
              width={257}
              height={1400}
              caption="Citizen side — payment method selection (step 3 of 3 in the citizen submission flow)"
              containerClassName="w-52 h-96"
            />
            <LightboxImage
              src="/images/facilita/tray-detail-desktop.png"
              alt="Citizen request detail — tracking status timeline, task history, and payment step embedded in the detail view"
              width={770}
              height={1400}
              caption="Citizen tracking view — status timeline, task history, and integrated payment step"
              containerClassName="flex-1 h-96"
            />
          </div>
          <LightboxImage
            src="/images/facilita/tray-detail-mobile.png"
            alt="Citizen request detail — mobile view with status tracking and payment"
            width={150}
            height={1400}
            caption="Citizen tracking and payment — mobile"
            containerClassName="w-40 h-72"
          />
        </div>
      </section>

      {/* ── Design system ───────────────────────────────────────── */}
      <section className="space-y-3">
        <SectionTitle>Design system</SectionTitle>
        <p className="text-neutral-700 leading-relaxed">
          The visual language was built for state identity and broad
          accessibility: Peruvian red and institutional blue, Roboto for
          legibility across devices, and illustrated icons that carry
          meaning for users with varied digital literacy — communication
          aids, not decoration.
        </p>
      </section>

      {/* ── Outcome ─────────────────────────────────────────────── */}
      <section className="space-y-6">
        <SectionTitle>Outcome</SectionTitle>
        <p className="text-neutral-700 leading-relaxed">
          Facilita Perú grew from a pandemic response into national
          infrastructure, serving all three levels of government — national,
          regional, and local:
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-neutral-200 p-4">
            <p className="text-2xl font-bold">63 → 1,300+</p>
            <p className="text-sm text-neutral-600">public entities (Apr 2021 → Dec 2023)</p>
          </div>
          <div className="rounded-lg border border-neutral-200 p-4">
            <p className="text-2xl font-bold">312 → 5,030+</p>
            <p className="text-sm text-neutral-600">digital services published</p>
          </div>
          <div className="rounded-lg border border-neutral-200 p-4">
            <p className="text-2xl font-bold">38,761 → 1,484,000+</p>
            <p className="text-sm text-neutral-600">citizen requests submitted</p>
          </div>
        </div>
        <LightboxImage
          src="/images/facilita/stats-desktop.png"
          alt="Facilita Perú statistics dashboard showing entities, forms, quick queries, and procedure management counts"
          width={662}
          height={1400}
          caption="Platform statistics — aggregated across all entities, exportable by the national government"
          containerClassName="h-80"
        />
        <p className="text-neutral-700 leading-relaxed">
          The platform is projected to enable at least 50% of municipal
          services and procedures nationwide to be delivered digitally.
        </p>
      </section>

      {/* ── What I learned ──────────────────────────────────────── */}
      <section className="space-y-3">
        <SectionTitle>What I learned</SectionTitle>
        <p className="text-neutral-700 leading-relaxed">
          Testing beats intuition, especially on complexity. Twice, the
          &quot;obvious&quot; first design — the classic flowchart for
          workflows, the single view for payment channels — failed in front
          of real users. The redesigns that replaced them were shaped
          directly by what we observed. And the opposite is also true:
          reuse is a design decision, not a shortcut. Adopting the
          already-validated request tray freed effort for what mattered;
          discarding the crowdsourced-forms idea taught me that protecting
          users sometimes means saying no to a feature.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          Designing for the least-resourced user — a small municipality
          with no IT staff — produces a system that works better for
          everyone. That principle is what I carry from this project into
          my work on complex platforms today.
        </p>
      </section>

    </article>
  );
}
