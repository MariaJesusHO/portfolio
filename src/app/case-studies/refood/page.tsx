import type { Metadata } from "next";
import { getCaseStudy } from "@/lib/case-studies";
import {
  CaseHero,
  CaseBody,
  Section,
  Lead,
  P,
  Insight,
  StatCards,
  PersonaCard,
  ImagePlaceholder,
} from "@/components/case-study";

export const metadata: Metadata = {
  title: "ReFood Perú",
};

const nav = [
  { id: "problem", label: "The problem" },
  { id: "personas", label: "The two-user tension" },
  { id: "research", label: "Research & process" },
  { id: "decisions", label: "Key design decisions" },
  { id: "evaluation", label: "Evaluation" },
  { id: "reflections", label: "What I learned" },
];

export default function ReFoodPage() {
  const cs = getCaseStudy("refood")!;

  const meta: [string, string][] = [
    ["Timeline", "2026"],
    ["Role", "UX Engineer"],
    ["Domain", "Social impact · Two-sided platform"],
  ];

  return (
    <>
      <CaseHero cs={cs} meta={meta} />

      {/* Cover */}
      <div className="mx-auto max-w-6xl px-6 pt-12">
        <ImagePlaceholder
          label="Hero / cover shot — ReFood explore feed and business portal side by side (app mockup)"
          ratio="16 / 8"
        />
      </div>

      <CaseBody nav={nav}>
        <Section id="problem" tag="Context" title="The problem">
          <P>
            Peru faces a paradox at scale. Roughly 12 million tons of food are
            lost or wasted every year — nearly half the national food supply —
            while 51% of Peruvian families live with food insecurity. At the
            individual level, the average Peruvian discards around 67 kg of food
            per year.
          </P>
          <StatCards
            items={[
              {
                value: "12 M tons",
                label:
                  "food lost or wasted per year (47.6% of national supply) — PNUD",
              },
              { value: "67 kg", label: "waste per capita per year — MINAM" },
              {
                value: "51%",
                label: "of Peruvian families with food insecurity",
              },
            ]}
          />
          <P>
            The obstacle is not a shortage of surplus. Restaurants, bakeries, and
            cafeterias in Lima know by mid-afternoon what will be left over at
            closing. That knowledge stays in a staff member&apos;s head or on a
            whiteboard — it never becomes a rescue decision. The missing piece was
            a fast, reliable digital channel between the business and the nearby
            consumer willing to buy that meal before it gets thrown out.
          </P>
        </Section>

        <Section id="personas" tag="Framing" title="The two-user tension">
          <Lead>
            ReFood is a two-sided platform, and its core design challenge is not
            a usability problem — it is a perception problem on both sides
            simultaneously.
          </Lead>
          <div className="grid gap-6 sm:grid-cols-2">
            <PersonaCard
              name="Ana — the consumer"
              quote="“I want to eat well and spend less, but I also want to feel like I’m doing something good for the planet.”"
            >
              Ana is motivated by both price and environmental impact. But she has
              tried a “discount meal” before and was disappointed — she now needs
              social proof and brand recognition before she will trust
              reduced-price food again. Her barrier is not awareness; it is trust.
            </PersonaCard>
            <PersonaCard
              name="Carlos — the restaurant operator"
              quote="“I already know what’s going to be left over. I just don’t have a fast way to move it.”"
            >
              Carlos knows the surplus exists and wants to recover raw material
              costs. His barrier is fear: he worries that publishing food at a
              discount will signal poor quality to regular customers and damage
              the branch&apos;s brand. Speed of publication and frame of the action
              both matter.
            </PersonaCard>
          </div>
          <P>
            These two tensions point in opposite directions. Ana needs the
            operator&apos;s brand prominently visible to trust the bag. Carlos
            needs the platform to frame the act as “rescue” — not “leftovers” — so
            it does not feel like a signal of failure. Designing for one without
            the other breaks the loop.
          </P>
          <ImagePlaceholder label="Journey maps for Ana and Carlos, or the two empathy maps side by side" />
        </Section>

        <Section id="research" tag="Discovery" title="Research & process">
          <P>
            The project started with a research phase before any wireframes were
            drawn. Methods used:
          </P>
          <ul className="space-y-3">
            {[
              [
                "Desk research",
                "benchmarking the Too Good To Go model, Peruvian food-waste statistics from PNUD, MINAM, and WFP, and competitive analysis of Rappi, PedidosYa, and local apps.",
              ],
              [
                "Survey (n = 87)",
                "online questionnaire to university students and young professionals in Lima Metropolitana, covering food habits, payment behavior, and attitudes toward surplus food.",
              ],
              [
                "In-depth interviews",
                "semi-structured sessions with cafeteria and restaurant staff at urban formal businesses, probing end-of-day surplus workflows and barriers to adoption.",
              ],
              [
                "Affinity mapping & empathy maps",
                "clustering interview insights across themes per persona; empathy maps constructed per user from the interview data.",
              ],
            ].map(([term, desc]) => (
              <li key={term} className="flex gap-3 leading-relaxed text-[var(--muted)]">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>
                  <strong>{term}</strong> — {desc}
                </span>
              </li>
            ))}
          </ul>
          <P>
            The research produced the two personas and their journey maps, which
            fed directly into the design decisions below. Each key decision in the
            prototype traces back to a specific finding.
          </P>
          <ImagePlaceholder label="Affinity map / research synthesis board" />
        </Section>

        <Section id="decisions" tag="Design decisions" title="Key design decisions">
          <div className="space-y-10">
            <Insight
              title="Brand logo and name visible before price"
              findings={["interview"]}
            >
              <P>
                Interviews revealed that Ana&apos;s biggest hesitation was not the
                price point — it was whether the source was a business she
                recognized and trusted. The explore feed was designed to surface
                the restaurant name and logo as the primary visual anchor on every
                bag card, above the price. Bag content category (bakery, hot meals,
                etc.) is shown to reduce “surprise anxiety” without removing the
                surprise element that keeps margins viable for operators.
              </P>
              <ImagePlaceholder label="Explore feed — bag card with brand/logo above price (mobile)" />
            </Insight>

            <Insight
              title="“Rescue” framing as a platform-wide copy principle"
              findings={["interview"]}
            >
              <P>
                Carlos&apos;s core fear was that discounting food would read as a
                quality signal. Every touchpoint in the business portal — bag
                creation labels, dashboard metrics, validation confirmations — uses
                the word “rescue” (rescate) and never “leftovers” (sobras) or
                “unsold stock.” The dashboard shows “bags rescued” and “CO₂ avoided,”
                framing the operator&apos;s action as an environmental contribution
                rather than a clearance sale. This was a copy decision enforced
                across the entire design system, not a one-off label choice.
              </P>
              <ImagePlaceholder label="Business portal dashboard — “bags rescued” / “CO₂ avoided” metrics" />
            </Insight>

            <Insight
              title="Sub-60s booking flow; bag creation under 2 minutes"
              findings={["desk", "interview"]}
            >
              <P>
                Survey data showed Ana&apos;s primary friction with food apps is
                time — she books between classes or shifts. Operator interviews
                showed Carlos publishes surplus from the counter during service,
                not in a quiet back office. Both constraints pointed to the same
                design requirement: the consumer booking flow must complete in
                under 60 seconds; bag creation for the operator must take under 2
                minutes with smart defaults from previous publications. The
                prototype enforces both through a minimal-step booking screen and a
                one-tap-repeat pattern for operators.
              </P>
              <ImagePlaceholder label="Booking flow steps (consumer) and quick bag-creation (operator)" />
            </Insight>

            <Insight
              title="Passive impact metrics for the consumer"
              findings={["desk"]}
            >
              <P>
                The survey confirmed that environmental impact is a genuine
                motivator for Ana&apos;s segment — but only if it requires no extra
                effort. Metrics like CO₂ avoided and meals rescued appear
                automatically after each pickup on the order confirmation screen
                and in the profile, without requiring her to navigate to a separate
                “impact” section. Making the reward passive removes the effort cost
                that would otherwise filter it out of the core journey.
              </P>
              <ImagePlaceholder label="Order confirmation with automatic impact metrics" />
            </Insight>
          </div>
        </Section>

        <Section id="evaluation" tag="Validation" title="Evaluation">
          <P>
            After the prototype was built, I ran a structured evaluation using
            Nielsen&apos;s 10 usability heuristics across both surfaces — the
            consumer PWA and the business portal. Of the 10 heuristics, 3 were
            fully passing before the audit cycle. All 10 were addressed by the end
            of it.
          </P>
          <StatCards
            items={[
              { value: "3 / 10", label: "heuristics fully passing before audit" },
              { value: "10 / 10", label: "fully addressed after audit cycle" },
              {
                value: "2 surfaces",
                label: "consumer PWA + business portal evaluated",
              },
            ]}
          />
          <P>Three findings from the audit were particularly instructive:</P>
          <div className="space-y-10">
            <Insight
              title="Payment failure had no UI (H9 — Error recovery)"
              findings={["audit"]}
            >
              <P>
                The booking flow only modeled the success path. If payment failed,
                the user saw nothing and had no recovery route — a silent dead end.
                The fix added a distinct failed state showing a plain-language
                explanation with two clear exits: retry with the same payment
                method, or go back and change it. It is easy to design for the
                happy path; the audit forced me to account for what happens when
                the system fails the user.
              </P>
              <ImagePlaceholder label="Before / after — payment failure state added" />
            </Insight>

            <Insight
              title="Order detail was a single scroll of unrelated content (H8 — Minimalist design)"
              findings={["audit"]}
            >
              <P>
                The order detail screen stacked the QR code, order summary, review
                form, and complaint form in a single long scroll — four contexts
                competing for the same space. The fix restructured it into three
                tabs: Pickup (QR + cancel), Detail (restaurant, bag, total), and
                Review (rating + complaint). A dot badge on the Review tab when a
                rating is pending removes the need to discover it independently.
                Reducing what is visible at once is not simplification for its own
                sake — it is removing the cognitive cost of deciding what to look
                at.
              </P>
              <ImagePlaceholder label="Before / after — order detail restructured into three tabs" />
            </Insight>

            <Insight
              title="Complaint submission was irreversible (H3 — User control)"
              findings={["audit"]}
            >
              <P>
                Tapping “Send” on a complaint immediately committed the action — no
                confirmation, no undo. The fix introduced an optimistic undo
                pattern: the complaint is held in local state for 5 seconds before
                reaching the store, and a snackbar with an “Undo” option appears
                during that window. This pattern reappeared in two places in the
                codebase, which made it worth extracting as a reusable approach
                rather than a one-off fix.
              </P>
              <ImagePlaceholder label="Snackbar with 5-second “Undo” on complaint submission" />
            </Insight>
          </div>
        </Section>

        <Section id="reflections" title="What I learned">
          <P>
            The most important shift this project produced was realizing that
            behavior-change design and task-completion design require different
            instincts. Most UX work optimizes for efficiency — fewer taps, clearer
            labels, faster flows. ReFood needed that, but the deeper problem was
            not flow efficiency: it was that both users had an emotional barrier
            that no flow optimization could fix. Ana&apos;s distrust of “reduced
            price” food and Carlos&apos;s fear of brand damage were perception
            problems. The design had to change what the action meant to each
            person, not just how easy it was to complete.
          </P>
          <P>
            The heuristics audit taught me something different: a product can pass
            functional review and still strand users in invisible dead ends. The
            payment failure case had no bug — the code worked correctly. The gap
            was a missing model of what happens when the system is right but the
            world does not cooperate. Structured evaluation methods find those gaps
            precisely because they impose a frame that intuition skips over.
          </P>
          <P>
            The two-sided nature of the platform also reinforced that the unit of
            design is rarely one person. Every decision about Ana&apos;s experience
            had consequences for Carlos&apos;s willingness to participate, and vice
            versa. That interdependence is what makes platform design genuinely
            harder than single-user product design — and more interesting.
          </P>
        </Section>
      </CaseBody>
    </>
  );
}
