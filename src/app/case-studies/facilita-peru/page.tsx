import type { Metadata } from "next";
import { getCaseStudy } from "@/lib/case-studies";
import {
  CaseHero,
  CaseBody,
  Section,
  P,
  Insight,
  StatCards,
  Figure,
  FigureRow,
} from "@/components/case-study";

export const metadata: Metadata = {
  title: "Facilita Perú",
};

const nav = [
  { id: "problem", label: "The problem" },
  { id: "solution", label: "The solution" },
  { id: "role", label: "My role" },
  { id: "features", label: "Key features" },
  { id: "design-system", label: "Design system" },
  { id: "outcome", label: "Outcome" },
  { id: "reflections", label: "Reflections" },
];

export default function FacilitaPeruPage() {
  const cs = getCaseStudy("facilita-peru")!;

  const meta: [string, string][] = [
    ["Timeline", cs.period],
    ["Role", "UX/UI Designer"],
    ["Domain", "Civic tech · GovTech"],
  ];

  return (
    <>
      <CaseHero cs={cs} meta={meta} />

      {/* Cover */}
      <div className="mx-auto max-w-6xl px-6 pt-12">
        <Figure
          src="/images/facilita/stats-desktop.png"
          alt="Facilita Perú statistics dashboard — overview of entities, forms, and requests across the platform"
          width={662}
          height={1400}
          caption="Facilita Perú admin dashboard — platform-wide statistics across all entities"
          containerClassName="h-72 sm:h-96"
        />
      </div>

      <CaseBody nav={nav}>
        <Section id="problem" tag="Context" title="The problem">
          <P>
            The COVID-19 pandemic exposed Peru&apos;s digitalization gap. Smaller
            public entities had no spare IT capacity to build citizen-facing
            services; larger ones had deployed digital forms that had never been
            through user-centered design. When lockdown hit, citizens
            couldn&apos;t fall back on in-person procedures. An unusable form
            wasn&apos;t an inconvenience — it was the difference between
            receiving an emergency subsidy or not.
          </P>
        </Section>

        <Section id="solution" title="The solution">
          <P>
            Facilita Perú is a web platform that lets any public entity digitize
            its services <strong>without needing its own IT resources</strong>.
            Administered by Peru&apos;s Secretariat of Government and Digital
            Transformation (SGTD) as part of the national platform Gob.pe, it
            gives entities four core capabilities: form templates, complex
            multi-step service management, citizen query pages, and digital
            payments.
          </P>
        </Section>

        <Section id="role" title="My role">
          <P>
            I designed the platform&apos;s UX/UI alongside{" "}
            <strong>Sergio Mitsunaga</strong>, a UX researcher and designer who
            led the research process. I focused on the design system, sat in user
            interviews as notetaker — getting first-hand access to what entities
            and citizens struggled with — then translated those insights into
            interface designs and managed the handoff to the development team. We
            worked from February 2021 with the Product Owner and engineering.
            Every key screen went through user research, usability testing, or an
            explicit product decision; the case study below labels which was
            which.
          </P>
        </Section>

        <Section
          id="features"
          tag="Design decisions"
          title="Key features and the decisions behind them"
        >
          <div className="space-y-10">
            {/* 1 · Form templates */}
            <Insight title="Form templates" findings={["research"]}>
              <P>
                Research showed that public entities were creating different forms
                for the same service — and those forms often failed to comply with
                regulatory requirements. The solution was a template library for
                the most common procedures, built directly from regulatory
                requirements, so a small municipality could publish a compliant
                form in minutes.
              </P>
              <P>
                An early proposal suggested letting entities reuse forms from other
                institutions. We discarded it: it would have replicated
                non-compliant forms across the state. Sometimes the design decision
                is what you choose not to build.
              </P>
              <Figure
                src="/images/facilita/forms-desktop.png"
                alt="Form template editor — step 2, editing the form fields and pages"
                width={291}
                height={1400}
                caption="Form template editor — entities configure fields, sections, and compliance settings"
                containerClassName="h-80"
              />
            </Insight>

            {/* 2 · Workflow builder */}
            <Insight
              title="Complex services: the workflow builder"
              findings={["testing"]}
            >
              <P>
                Entities with fewer resources managed procedures on physical
                paperwork. We designed a tool that digitizes the full lifecycle of
                a procedure: user roles, tasks, and the connections between them.
              </P>
              <P>
                The first proposal showed each procedure as a flowchart. In
                usability testing I found that real procedures were so complex —
                with so many back-and-forths — that the flowcharts became tangled
                and unreadable. The final design uses two columns, one per role,
                with task connections viewable separately. Testing killed the
                &quot;obvious&quot; diagram solution.
              </P>
              <FigureRow>
                <Figure
                  src="/images/facilita/workflow-desktop.png"
                  alt="Workflow builder — step 3, defining user types, tasks and task connections"
                  width={659}
                  height={1400}
                  caption="Workflow builder — two-column layout: one column per role, tasks listed below each"
                  containerClassName="flex-1 h-80"
                />
                <Figure
                  src="/images/facilita/workflow-mobile.png"
                  alt="Workflow builder — mobile view"
                  width={254}
                  height={1400}
                  caption="Mobile"
                  containerClassName="w-36 h-80"
                />
              </FigureRow>
            </Insight>

            {/* 3 · Request tray */}
            <Insight
              title="Request tray and request detail"
              findings={["decision"]}
            >
              <P>
                The request tray and detail pages already existed in other Gob.pe
                services, user-tested and in production without issues. We
                deliberately reused that validated format and focused our effort on
                targeted improvements: red urgency indicators for requests about to
                expire, and attributing each task in the history to the specific
                user who performed it.
              </P>
              <FigureRow>
                <Figure
                  src="/images/facilita/tray-desktop.png"
                  alt="Entity request tray — list of incoming citizen requests with status tags and urgency indicators"
                  width={1056}
                  height={1400}
                  caption="Entity side — request tray with urgency tags and deadline indicators"
                  containerClassName="flex-1 h-64"
                />
                <Figure
                  src="/images/facilita/tray-mobile.png"
                  alt="Entity request tray — mobile view"
                  width={190}
                  height={1400}
                  caption="Mobile"
                  containerClassName="w-36 h-64"
                />
              </FigureRow>
            </Insight>

            {/* 4 · Query pages */}
            <Insight
              title="Query and result pages"
              findings={["research", "testing"]}
            >
              <P>
                Entities needed to communicate citizen-specific information —
                whether someone qualifies for a subsidy, for example. We designed a
                query-page creator: the entity uploads a spreadsheet mapping ID
                numbers to result types and writes content for each outcome (not
                found, positive, negative); the citizen enters their ID. In user
                tests the format, with helper texts and examples, proved easy to
                understand.
              </P>
              <P>
                Research also revealed a trust dimension: entities wanted their
                visual identity on the page, and citizens wanted to keep the
                result. So entities can upload their logo, and citizens can send
                results to their own email.
              </P>
            </Insight>

            {/* 5 · Digital payments */}
            <Insight title="Digital payments" findings={["testing", "decision"]}>
              <P>
                Paid procedures needed payment methods citizens actually use — bank
                transfer, PagoEfectivo, digital wallets. The first design showed all
                options in a single view; testing showed it caused cognitive
                overload. The final design uses tabs per channel (online banking,
                wallets, agents, agencies) so users can focus on the one they need.
              </P>
              <P>
                Because each entity manages its own Facilita account, payment
                configuration was designed around a principle of{" "}
                <strong>
                  the least data possible without compromising security
                </strong>{" "}
                — linking an entity&apos;s payment account with just a provider
                code, name, and key.
              </P>
              <FigureRow>
                <Figure
                  src="/images/facilita/payments-mobile.png"
                  alt="Citizen payment step — selecting a payment method: bank transfer, PagoEfectivo, or Págalo.pe"
                  width={257}
                  height={1400}
                  caption="Citizen side — payment method selection (step 3 of 3 in the citizen submission flow)"
                  containerClassName="w-52 h-96"
                />
                <Figure
                  src="/images/facilita/tray-detail-desktop.png"
                  alt="Citizen request detail — tracking status timeline, task history, and payment step embedded in the detail view"
                  width={770}
                  height={1400}
                  caption="Citizen tracking view — status timeline, task history, and integrated payment step"
                  containerClassName="flex-1 h-96"
                />
              </FigureRow>
              <Figure
                src="/images/facilita/tray-detail-mobile.png"
                alt="Citizen request detail — mobile view with status tracking and payment"
                width={150}
                height={1400}
                caption="Citizen tracking and payment — mobile"
                containerClassName="w-40 h-72"
              />
            </Insight>
          </div>
        </Section>

        <Section id="design-system" title="Design system">
          <P>
            The visual language was built for state identity and broad
            accessibility: Peruvian red and institutional blue, Roboto for
            legibility across devices, and illustrated icons that carry meaning
            for users with varied digital literacy — communication aids, not
            decoration.
          </P>
        </Section>

        <Section id="outcome" title="Outcome">
          <P>
            Facilita Perú grew from a pandemic response into national
            infrastructure, serving all three levels of government — national,
            regional, and local:
          </P>
          <StatCards
            items={[
              {
                value: "63 → 1,300+",
                label: "public entities (Apr 2021 → Dec 2023)",
              },
              { value: "312 → 5,030+", label: "digital services published" },
              {
                value: "38,761 → 1,484,000+",
                label: "citizen requests submitted",
              },
            ]}
          />
          <Figure
            src="/images/facilita/stats-desktop.png"
            alt="Facilita Perú statistics dashboard showing entities, forms, quick queries, and procedure management counts"
            width={662}
            height={1400}
            caption="Platform statistics — aggregated across all entities, exportable by the national government"
            containerClassName="h-80"
          />
          <P>
            The platform is projected to enable at least 50% of municipal
            services and procedures nationwide to be delivered digitally.
          </P>
        </Section>

        <Section id="reflections" title="What I learned">
          <P>
            Testing beats intuition, especially on complexity. Twice, the
            &quot;obvious&quot; first design — the classic flowchart for
            workflows, the single view for payment channels — failed in front of
            real users. The redesigns that replaced them were shaped directly by
            what we observed. And the opposite is also true: reuse is a design
            decision, not a shortcut. Adopting the already-validated request tray
            freed effort for what mattered; discarding the crowdsourced-forms idea
            taught me that protecting users sometimes means saying no to a
            feature.
          </P>
          <P>
            Designing for the least-resourced user — a small municipality with no
            IT staff — produces a system that works better for everyone. That
            principle is what I carry from this project into my work on complex
            platforms today.
          </P>
        </Section>
      </CaseBody>
    </>
  );
}
