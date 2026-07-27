import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ReFood Perú",
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-semibold tracking-tight">{children}</h2>
  );
}

function FindingLabel({
  kind,
}: {
  kind: "research" | "interview" | "audit";
}) {
  const styles = {
    research: "bg-slate-800 text-white",
    interview: "bg-orange-700 text-white",
    audit: "bg-green-800 text-white",
  };
  const labels = {
    research: "Desk research & survey finding",
    interview: "Interview finding",
    audit: "Heuristics audit finding",
  };
  return (
    <span
      className={`inline-block rounded px-2 py-0.5 text-xs font-medium ${styles[kind]}`}
    >
      {labels[kind]}
    </span>
  );
}

export default function ReFoodPage() {
  return (
    <article className="space-y-12">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">ReFood Perú</h1>
        <p className="text-lg text-neutral-600">
          A food-rescue platform connecting Lima&apos;s surplus meals with nearby
          consumers — before they&apos;re thrown away.
        </p>
        <p className="text-sm text-neutral-500">
          2026 · UX Engineer — research, design system, and full-stack prototype
        </p>
        <div className="flex gap-4 text-sm">
          <a
            href="https://github.com/MariaJesusHO/ReFood"
            className="underline hover:no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub repository ↗
          </a>
          <a
            href="https://re-food-brown.vercel.app"
            className="underline hover:no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live demo ↗
          </a>
        </div>
        <p className="rounded-md bg-neutral-50 border border-neutral-200 px-4 py-3 text-sm text-neutral-600">
          Academic prototype developed for the course{" "}
          <em>Diseño y Tecnologías UX</em>, Systems Engineering, Universidad
          Peruana de Ciencias Aplicadas (UPC), 2026-1. No real transactions;
          all backend data is simulated.
        </p>
      </header>

      <section className="space-y-4">
        <SectionTitle>The problem</SectionTitle>
        <p className="text-neutral-700 leading-relaxed">
          Peru faces a paradox at scale. Roughly 12 million tons of food are
          lost or wasted every year — nearly half the national food supply —
          while 51% of Peruvian families live with food insecurity. At the
          individual level, the average Peruvian discards around 67 kg of food
          per year.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-neutral-200 p-4">
            <p className="text-2xl font-bold">12 M tons</p>
            <p className="text-sm text-neutral-600">
              food lost or wasted per year (47.6% of national supply) — PNUD
            </p>
          </div>
          <div className="rounded-lg border border-neutral-200 p-4">
            <p className="text-2xl font-bold">67 kg</p>
            <p className="text-sm text-neutral-600">
              waste per capita per year — MINAM
            </p>
          </div>
          <div className="rounded-lg border border-neutral-200 p-4">
            <p className="text-2xl font-bold">51%</p>
            <p className="text-sm text-neutral-600">
              of Peruvian families with food insecurity
            </p>
          </div>
        </div>
        <p className="text-neutral-700 leading-relaxed">
          The obstacle is not a shortage of surplus. Restaurants, bakeries, and
          cafeterias in Lima know by mid-afternoon what will be left over at
          closing. That knowledge stays in a staff member&apos;s head or on a
          whiteboard — it never becomes a rescue decision. The missing piece was
          a fast, reliable digital channel between the business and the nearby
          consumer willing to buy that meal before it gets thrown out.
        </p>
      </section>

      <section className="space-y-6">
        <SectionTitle>The two-user tension</SectionTitle>
        <p className="text-neutral-700 leading-relaxed">
          ReFood is a two-sided platform, and its core design challenge is not
          a usability problem — it is a perception problem on both sides
          simultaneously.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-neutral-200 p-5 space-y-2">
            <p className="font-semibold">Ana — the consumer</p>
            <p className="text-sm text-neutral-600 italic">
              &ldquo;I want to eat well and spend less, but I also want to feel
              like I&apos;m doing something good for the planet.&rdquo;
            </p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Ana is motivated by both price and environmental impact. But she
              has tried a &ldquo;discount meal&rdquo; before and was
              disappointed — she now needs social proof and brand recognition
              before she will trust reduced-price food again. Her barrier is not
              awareness; it is trust.
            </p>
          </div>
          <div className="rounded-lg border border-neutral-200 p-5 space-y-2">
            <p className="font-semibold">Carlos — the restaurant operator</p>
            <p className="text-sm text-neutral-600 italic">
              &ldquo;I already know what&apos;s going to be left over. I just
              don&apos;t have a fast way to move it.&rdquo;
            </p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Carlos knows the surplus exists and wants to recover raw material
              costs. His barrier is fear: he worries that publishing food at a
              discount will signal poor quality to regular customers and damage
              the branch&apos;s brand. Speed of publication and frame of the
              action both matter.
            </p>
          </div>
        </div>
        <p className="text-neutral-700 leading-relaxed">
          These two tensions point in opposite directions. Ana needs the
          operator&apos;s brand prominently visible to trust the bag. Carlos
          needs the platform to frame the act as &ldquo;rescue&rdquo; — not
          &ldquo;leftovers&rdquo; — so it does not feel like a signal of
          failure. Designing for one without the other breaks the loop.
        </p>
      </section>

      <section className="space-y-4">
        <SectionTitle>Research & process</SectionTitle>
        <p className="text-neutral-700 leading-relaxed">
          The project started with a research phase before any wireframes were
          drawn. Methods used:
        </p>
        <ul className="space-y-2 text-neutral-700 leading-relaxed list-none">
          <li className="flex gap-3">
            <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-neutral-400 translate-y-1.5" />
            <span>
              <strong>Desk research</strong> — benchmarking the Too Good To Go
              model, Peruvian food-waste statistics from PNUD, MINAM, and WFP,
              and competitive analysis of Rappi, PedidosYa, and local apps.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-neutral-400 translate-y-1.5" />
            <span>
              <strong>Survey (n = 87)</strong> — online questionnaire to
              university students and young professionals in Lima Metropolitana,
              covering food habits, payment behavior, and attitudes toward
              surplus food.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-neutral-400 translate-y-1.5" />
            <span>
              <strong>In-depth interviews</strong> — semi-structured sessions
              with cafeteria and restaurant staff at urban formal businesses,
              probing end-of-day surplus workflows and barriers to adoption.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-neutral-400 translate-y-1.5" />
            <span>
              <strong>Affinity mapping & empathy maps</strong> — clustering
              interview insights across themes per persona; empathy maps
              constructed per user from the interview data.
            </span>
          </li>
        </ul>
        <p className="text-neutral-700 leading-relaxed">
          The research produced the two personas and their journey maps, which
          fed directly into the design decisions below. Each key decision in the
          prototype traces back to a specific finding.
        </p>
      </section>

      <section className="space-y-6">
        <SectionTitle>Key design decisions</SectionTitle>

        <div className="space-y-3">
          <h3 className="font-semibold">
            Brand logo and name visible before price
          </h3>
          <p className="text-sm">
            <FindingLabel kind="interview" />
          </p>
          <p className="text-neutral-700 leading-relaxed">
            Interviews revealed that Ana&apos;s biggest hesitation was not the
            price point — it was whether the source was a business she
            recognized and trusted. The explore feed was designed to surface the
            restaurant name and logo as the primary visual anchor on every bag
            card, above the price. Bag content category (bakery, hot meals, etc.)
            is shown to reduce &ldquo;surprise anxiety&rdquo; without removing
            the surprise element that keeps margins viable for operators.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">
            &ldquo;Rescue&rdquo; framing as a platform-wide copy principle
          </h3>
          <p className="text-sm">
            <FindingLabel kind="interview" />
          </p>
          <p className="text-neutral-700 leading-relaxed">
            Carlos&apos;s core fear was that discounting food would read as a
            quality signal. Every touchpoint in the business portal — bag
            creation labels, dashboard metrics, validation confirmations — uses
            the word &ldquo;rescue&rdquo; (rescate) and never
            &ldquo;leftovers&rdquo; (sobras) or &ldquo;unsold stock.&rdquo;
            The dashboard shows &ldquo;bags rescued&rdquo; and
            &ldquo;CO₂ avoided,&rdquo; framing the operator&apos;s action as an
            environmental contribution rather than a clearance sale. This was a
            copy decision enforced across the entire design system, not a
            one-off label choice.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">
            Sub-60s booking flow; bag creation under 2 minutes
          </h3>
          <p className="text-sm">
            <FindingLabel kind="research" /> <FindingLabel kind="interview" />
          </p>
          <p className="text-neutral-700 leading-relaxed">
            Survey data showed Ana&apos;s primary friction with food apps is
            time — she books between classes or shifts. Operator interviews
            showed Carlos publishes surplus from the counter during service, not
            in a quiet back office. Both constraints pointed to the same design
            requirement: the consumer booking flow must complete in under 60
            seconds; bag creation for the operator must take under 2 minutes
            with smart defaults from previous publications. The prototype
            enforces both through a minimal-step booking screen and a
            one-tap-repeat pattern for operators.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">
            Passive impact metrics for the consumer
          </h3>
          <p className="text-sm">
            <FindingLabel kind="research" />
          </p>
          <p className="text-neutral-700 leading-relaxed">
            The survey confirmed that environmental impact is a genuine
            motivator for Ana&apos;s segment — but only if it requires no extra
            effort. Metrics like CO₂ avoided and meals rescued appear
            automatically after each pickup on the order confirmation screen and
            in the profile, without requiring her to navigate to a separate
            &ldquo;impact&rdquo; section. Making the reward passive removes the
            effort cost that would otherwise filter it out of the core journey.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <SectionTitle>Evaluation</SectionTitle>
        <p className="text-neutral-700 leading-relaxed">
          After the prototype was built, I ran a structured evaluation using
          Nielsen&apos;s 10 usability heuristics across both surfaces — the
          consumer PWA and the business portal. Of the 10 heuristics, 3 were
          fully passing before the audit cycle. All 10 were addressed by the
          end of it.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-neutral-200 p-4">
            <p className="text-2xl font-bold">3 / 10</p>
            <p className="text-sm text-neutral-600">heuristics fully passing before audit</p>
          </div>
          <div className="rounded-lg border border-neutral-200 p-4">
            <p className="text-2xl font-bold">10 / 10</p>
            <p className="text-sm text-neutral-600">fully addressed after audit cycle</p>
          </div>
          <div className="rounded-lg border border-neutral-200 p-4">
            <p className="text-2xl font-bold">2 surfaces</p>
            <p className="text-sm text-neutral-600">consumer PWA + business portal evaluated</p>
          </div>
        </div>
        <p className="text-neutral-700 leading-relaxed">
          Three findings from the audit were particularly instructive:
        </p>

        <div className="space-y-3">
          <h3 className="font-semibold">
            Payment failure had no UI (H9 — Error recovery)
          </h3>
          <p className="text-sm">
            <FindingLabel kind="audit" />
          </p>
          <p className="text-neutral-700 leading-relaxed">
            The booking flow only modeled the success path. If payment failed,
            the user saw nothing and had no recovery route — a silent dead end.
            The fix added a distinct failed state showing a plain-language
            explanation with two clear exits: retry with the same payment method,
            or go back and change it. It is easy to design for the happy path;
            the audit forced me to account for what happens when the system
            fails the user.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">
            Order detail was a single scroll of unrelated content (H8 — Minimalist design)
          </h3>
          <p className="text-sm">
            <FindingLabel kind="audit" />
          </p>
          <p className="text-neutral-700 leading-relaxed">
            The order detail screen stacked the QR code, order summary, review
            form, and complaint form in a single long scroll — four contexts
            competing for the same space. The fix restructured it into three
            tabs: Pickup (QR + cancel), Detail (restaurant, bag, total), and
            Review (rating + complaint). A dot badge on the Review tab when a
            rating is pending removes the need to discover it independently.
            Reducing what is visible at once is not simplification for its own
            sake — it is removing the cognitive cost of deciding what to look at.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">
            Complaint submission was irreversible (H3 — User control)
          </h3>
          <p className="text-sm">
            <FindingLabel kind="audit" />
          </p>
          <p className="text-neutral-700 leading-relaxed">
            Tapping &ldquo;Send&rdquo; on a complaint immediately committed the
            action — no confirmation, no undo. The fix introduced an optimistic
            undo pattern: the complaint is held in local state for 5 seconds
            before reaching the store, and a snackbar with an &ldquo;Undo&rdquo;
            option appears during that window. This pattern reappeared in two
            places in the codebase, which made it worth extracting as a reusable
            approach rather than a one-off fix.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <SectionTitle>What I learned</SectionTitle>
        <p className="text-neutral-700 leading-relaxed">
          The most important shift this project produced was realizing that
          behavior-change design and task-completion design require different
          instincts. Most UX work optimizes for efficiency — fewer taps, clearer
          labels, faster flows. ReFood needed that, but the deeper problem was
          not flow efficiency: it was that both users had an emotional barrier
          that no flow optimization could fix. Ana&apos;s distrust of
          &ldquo;reduced price&rdquo; food and Carlos&apos;s fear of brand
          damage were perception problems. The design had to change what the
          action meant to each person, not just how easy it was to complete.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          The heuristics audit taught me something different: a product can pass
          functional review and still strand users in invisible dead ends. The
          payment failure case had no bug — the code worked correctly. The gap
          was a missing model of what happens when the system is right but the
          world does not cooperate. Structured evaluation methods find those gaps
          precisely because they impose a frame that intuition skips over.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          The two-sided nature of the platform also reinforced that the unit of
          design is rarely one person. Every decision about Ana&apos;s experience
          had consequences for Carlos&apos;s willingness to participate, and vice
          versa. That interdependence is what makes platform design genuinely
          harder than single-user product design — and more interesting.
        </p>
      </section>
    </article>
  );
}
