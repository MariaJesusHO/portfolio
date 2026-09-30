import type { Metadata } from "next";
import { getResearch } from "@/lib/research";
import { CaseBody, Section, StatCards, ImagePlaceholder } from "@/components/case-study";
import { ArticleHero, DataTable, Callout, KeyList } from "@/components/article";

const piece = getResearch("reinforcement-learning-state-aliasing")!;

export const metadata: Metadata = {
  title: piece.title,
  description: piece.summary,
};

const sections = [
  { id: "problem", label: "The delivery problem" },
  { id: "mdp", label: "Formalizing the task" },
  { id: "reference", label: "An optimal reference" },
  { id: "plateau", label: "The plateau" },
  { id: "diagnosis", label: "Diagnosing it" },
  { id: "aliasing", label: "State aliasing" },
  { id: "fix", label: "The fix & its cost" },
  { id: "ai", label: "What AI helped with" },
  { id: "learned", label: "What I learned" },
];

export default function Page() {
  return (
    <>
      <ArticleHero
        piece={piece}
        meta={[
          ["Kind", "Reinforcement learning study"],
          ["Methods", "Value iteration · Q-learning"],
          ["Rigor", "10 seeds · control condition"],
        ]}
        links={[
          {
            label: "Read the original PDF",
            href: "/docs/reinforcement-learning-state-aliasing.pdf",
          },
        ]}
      />

      <CaseBody nav={sections}>
        <p className="text-xl leading-relaxed text-[var(--ink)]">
          A delivery agent has to reach a pickup point and then carry the order
          to a drop-off, on a small city grid, at minimum total cost — without
          being told the rules. It learned the task, then stopped improving. The
          interesting part of this project was not building the agent. It was
          working out <em>why the learning curve went flat</em> — and discovering
          that the answer was not a hyperparameter at all.
        </p>

        <StatCards
          items={[
            { value: "≈ 22.85", label: "Return the agent plateaued at (of a 28.21 ceiling)" },
            { value: "5.36", label: "Points below the correct benchmark — not the ~2.5 it first looked like" },
            { value: "8 / 56", label: "Layouts the compact policy solved optimally" },
          ]}
        />

        {/* 1 ─────────────────────────────────────────────────────────────── */}
        <Section id="problem" title="The delivery problem">
          <p className="leading-relaxed text-[var(--muted)]">
            The task is a two-stage pickup-and-delivery problem on an n×n grid. A
            bicycle starts at the centre; one cell is the pickup point{" "}
            <strong>P1</strong>, another the delivery point <strong>D1</strong>,
            and a third is an obstacle. In phase 0 the bike must reach P1;
            reaching it flips the environment to phase 1, where it must reach D1
            and the episode ends.
          </p>
          <p className="leading-relaxed text-[var(--muted)]">
            Two details make it less trivial than it looks. It has two stages —
            the courier cannot go straight to the drop-off. And the obstacle is
            modelled as a <strong>penalty tile, not a wall</strong>: the bike may
            ride over it at a higher cost. That is the difference between
            &ldquo;this street is closed&rdquo; and &ldquo;this street is
            slow&rdquo; — a modelling decision that matters.
          </p>
        </Section>

        {/* 2 ─────────────────────────────────────────────────────────────── */}
        <Section id="mdp" title="Formalizing the task as an MDP">
          <p className="leading-relaxed text-[var(--muted)]">
            To hand the problem to an algorithm, I formalized it as a Markov
            Decision Process. The main configuration is a 3×3 grid — small enough
            that <strong>every value can be checked by hand</strong>, which made
            each program output a testable prediction.
          </p>
          <DataTable
            caption="Table 1 — The delivery task as an MDP."
            head={["Element", "Definition"]}
            rows={[
              ["State", "s = (row, column, phase), phase ∈ {0, 1}. For a 3×3 grid, |S| = 3² × 2 = 18 states."],
              ["Actions", "Four one-cell moves {up, down, left, right}. A move past the boundary keeps the agent in place."],
              ["Transition", "Deterministic: T(s, a, s′) = 1 for the resulting next state."],
              ["Reward", "−1 per step · −5 for entering the obstacle · +10 for reaching P1 (phase 0) · +20 for reaching D1 (phase 1)."],
              ["Terminal", "Reaching D1 in phase 1 ends the episode."],
            ]}
          />
        </Section>

        {/* 3 ─────────────────────────────────────────────────────────────── */}
        <Section id="reference" title="Establishing an optimal reference">
          <p className="leading-relaxed text-[var(--muted)]">
            Before letting the agent learn, I needed to know what a correct
            solution looks like. <strong>Value iteration</strong> has access to
            the transition and reward functions, so it computes the optimal value
            of every state without running a single episode. It converged in nine
            sweeps to an optimal value of <strong>25.01</strong> at the start
            state.
          </p>
          <ImagePlaceholder
            label="Fig. 1 — Optimal policy (arrows) and V* values from value iteration, both phases of the episode"
            ratio="16 / 7"
          />
          <p className="leading-relaxed text-[var(--muted)]">
            That number is derivable by hand. Following the optimal policy —
            down (−1) → left (+10, pickup) → up (−1) → up (−1) → right (−1) →
            right (+20, delivery) — the undiscounted return is 30 − 4 = 26, and
            discounting the later rewards gives 25.0088 ≈ 25.01.
          </p>
          <Callout label="A distinction that mattered later">
            <p>
              25.01 is the optimum for <em>one fixed layout</em> (P1 = (2,0),
              D1 = (0,2)). But the Q-learning runs randomize P1 and D1 every
              episode — so the correct benchmark has to change too. That is
              exactly what tripped up the analysis.
            </p>
          </Callout>
        </Section>

        {/* 4 ─────────────────────────────────────────────────────────────── */}
        <Section id="plateau" title="Q-learning learns the task, then stops">
          <p className="leading-relaxed text-[var(--muted)]">
            Unlike value iteration, Q-learning has no transition model; it learns
            action-values from sampled experience. Trained for 3,000 episodes
            (α = 0.1, γ = 0.99, ε-greedy decaying 1.0 → 0.05), it completed the
            delivery in 100% of the final episodes at an average return of{" "}
            <strong>22.85 ± 0.36</strong>. The learning curve rises sharply
            between episodes 200 and 500, then flattens for the remaining ~2,500.
          </p>
          <p className="leading-relaxed text-[var(--muted)]">
            Because P1 and D1 are randomized, three references must not be mixed
            up: <strong>25.01</strong> (the fixed-layout optimum),{" "}
            <strong>27.64</strong> (mean discounted V* across all 56 valid
            layouts), and <strong>28.21</strong> (mean optimal{" "}
            <em>undiscounted</em> return — the right ceiling, since episode
            returns are accumulated without discounting). Against the correct
            reference, the agent is not 2.5 points short. It is{" "}
            <strong>5.36 points</strong> below the ceiling — and that gap never
            closed.
          </p>
          <Callout>
            <p>
              A flat learning curve does not necessarily mean the agent needs
              more training. Sometimes it means the learning problem itself has
              been defined incorrectly.
            </p>
          </Callout>
        </Section>

        {/* 5 ─────────────────────────────────────────────────────────────── */}
        <Section id="diagnosis" title="Diagnosing it: the control experiment">
          <p className="leading-relaxed text-[var(--muted)]">
            First I suspected undertraining, then — on an AI assistant&rsquo;s
            suggestion — the learning rate. The experiment I built to test α
            became the one that revealed the real issue, because it had a{" "}
            <strong>control condition</strong>: the same setup run with{" "}
            <em>fixed</em> targets vs <em>randomized</em> targets.
          </p>
          <DataTable
            numeric
            caption="Table 2 — Sensitivity to α. Ten seeds per condition; average return over the final 100 episodes."
            head={["α", "Randomized targets", "Fixed targets"]}
            rows={[
              ["0.01", "22.87 ± 0.34", "25.54 ± 0.16"],
              ["0.10", "22.85 ± 0.36", "25.51 ± 0.16"],
              ["0.50", "−3.82 ± 34.36", "25.54 ± 0.17"],
              ["0.90", "−34.75 ± 32.51", "25.57 ± 0.18"],
              ["1.00", "−89.11 ± 16.18", "25.55 ± 0.17"],
            ]}
          />
          <ImagePlaceholder
            label="Fig. 2 — Average return vs α, randomized vs fixed targets (mean ± s.d., 10 seeds)"
            ratio="16 / 8"
          />
          <p className="leading-relaxed text-[var(--muted)]">
            Read alone, the randomized column says &ldquo;large α is bad&rdquo; —
            true but superficial. The control column says something deeper:{" "}
            <strong>once the environment is stationary, α barely matters</strong>{" "}
            across the whole range. If α were the cause of the plateau, it would
            degrade the fixed condition too. It did not. Both conditions share the
            same update, reward, and training loop — the only difference is
            whether the targets move. So the explanation had to lie in what the
            two conditions <em>don&rsquo;t</em> share.
          </p>
          <p className="leading-relaxed text-[var(--muted)]">
            The ten seeds mattered as much as the control. A single run of α = 0.5
            (mean −3.82, s.d. 34.36) could have supported either
            &ldquo;works fine&rdquo; or &ldquo;fails badly.&rdquo; Repetition told
            me how much to trust each number; the control told me where to look.
          </p>
        </Section>

        {/* 6 ─────────────────────────────────────────────────────────────── */}
        <Section id="aliasing" title="The real problem: state aliasing">
          <p className="leading-relaxed text-[var(--muted)]">
            P1 and D1 are resampled every episode, but the agent observes only{" "}
            <code className="rounded bg-[var(--accent-soft)] px-1.5 py-0.5 text-[13px]">
              (row, column, phase)
            </code>
            . The pickup and delivery locations are missing from the state — so
            the agent can wake up in a differently configured city every episode
            without being able to tell anything changed. Genuinely different
            situations are collapsed into the same state:{" "}
            <strong>state aliasing</strong>. It is forced to learn one
            action-value for situations that need different decisions, and settles
            on a compromise policy that is decent on average but optimal nowhere.
          </p>
          <p className="leading-relaxed text-[var(--muted)]">
            Freezing each seed&rsquo;s learned policy and evaluating it greedily
            across all 56 layouts made the limit measurable: the compact policy
            completed every layout but was optimal in only <strong>8 of 56</strong>,
            with an average loss of 4.71 points. Tellingly, the standard deviation
            of that greedy loss was <strong>exactly zero</strong> — all ten seeds
            converged to the same outcome, so the gap is a systematic limit of the
            representation, not an unlucky seed.
          </p>
          <p className="leading-relaxed text-[var(--muted)]">
            The fix is not to tune α again — it is to give the agent the
            information missing from its state: extend it to{" "}
            <code className="rounded bg-[var(--accent-soft)] px-1.5 py-0.5 text-[13px]">
              (row, col, P1row, P1col, D1row, D1col, phase)
            </code>
            , so previously aliased layouts become distinct states.
          </p>
          <DataTable
            numeric
            caption="Table 3 — Effect of the state representation. Ten seeds, randomized targets, 3,000 episodes."
            head={["State representation", "Visited state keys", "Avg. return (final 100)"]}
            rows={[
              ["(row, col, phase)", "18", "22.85 ± 0.36"],
              ["+ P1 and D1 coordinates", "≈ 806", "27.59 ± 0.12"],
              [<em key="c">Ceiling — mean optimal undiscounted return</em>, "—", "28.21"],
            ]}
          />
        </Section>

        {/* 7 ─────────────────────────────────────────────────────────────── */}
        <Section id="fix" title="The fix works — and it has a cost">
          <p className="leading-relaxed text-[var(--muted)]">
            The effect is immediate: return jumps from 22.85 to{" "}
            <strong>27.59</strong>, just 0.62 below the ceiling. Frozen and
            evaluated greedily, the full-state policy reaches 28.10 vs the compact
            policy&rsquo;s stuck 23.50 — almost the entire difference lives in the
            learned policy itself.
          </p>
          <DataTable
            numeric
            caption="Table 4 — Decomposition of the performance gap. Ten seeds; frozen rows evaluated greedily across all 56 layouts."
            head={["", "Compact state", "Full state"]}
            rows={[
              ["Mean optimal return (undiscounted)", "28.21", "28.21"],
              ["Learned policy, frozen (greedy)", "23.50 ± 0.00", "28.10 ± 0.06"],
              ["Return during training (ε = 0.05)", "22.85 ± 0.36", "27.59 ± 0.12"],
              ["Policy loss (state aliasing)", "4.71 ± 0.00", "0.11 ± 0.06"],
            ]}
          />
          <p className="leading-relaxed text-[var(--muted)]">
            But observability is not free. The compact representation has 18
            possible states; adding the coordinates expands it to{" "}
            <strong>1,008</strong> — 56× larger. On a 3×3 grid that is still fine.
            On a 10×10 grid the same scheme needs about{" "}
            <strong>7.6 million Q-values</strong>, and 30,000 transitions would
            touch barely 1.6% of the space. That is the trade-off: adding
            observability fixes aliasing but blows up the tabular state space —
            which is exactly what motivates function approximation and, at scale,
            deep reinforcement learning.
          </p>
        </Section>

        {/* 8 ─────────────────────────────────────────────────────────────── */}
        <Section id="ai" title="What AI helped with — and what it didn't">
          <p className="leading-relaxed text-[var(--muted)]">
            I used an AI assistant during development, mostly to debug Python and
            interrogate outputs that did not make sense — e.g. &ldquo;my Q-table
            is keyed on tuples; in one cell I build a 3-element key and elsewhere a
            7-element one — would the lookup fail silently?&rdquo; It was reliable
            on mechanical questions like that.
          </p>
          <p className="leading-relaxed text-[var(--muted)]">
            It was <em>least</em> reliable on the question that mattered most.
            Asked why the agent plateaued, it suggested lowering the learning rate
            and training longer — plausible, but wrong here. The state-aliasing
            explanation came from a control experiment that had to be{" "}
            <strong>designed, not requested</strong>. The lesson: AI was useful for
            debugging and hypothesis generation, but a plausible explanation was
            not evidence. The experiment had to decide.
          </p>
        </Section>

        {/* 9 ─────────────────────────────────────────────────────────────── */}
        <Section id="learned" title="What I learned">
          <KeyList
            items={[
              {
                term: "Representation beat tuning.",
                detail:
                  "Adding P1 and D1 to the state raised return from 22.85 to 27.59 — and the compact gap survived even after exploration was removed, so the limit was structural, not stochastic.",
              },
              {
                term: "A control condition can change the diagnosis, not just strengthen it.",
                detail:
                  "The fixed-target control turned a tuning question (“is α wrong?”) into a representation question (“what changes between episodes that the agent cannot observe?”).",
              },
              {
                term: "Stochastic results need variability, not isolated runs.",
                detail:
                  "Across ten seeds, γ = 0.95 collapsed on some runs while γ = 0.99 was most stable — a single run could have supported the opposite conclusion.",
              },
              {
                term: "Fixing observability with a lookup table creates a scaling problem.",
                detail:
                  "Removing aliasing expanded the state space 56×; on a 10×10 grid it already needs ~7.6M Q-values — the motivation for function approximation and deep RL.",
              },
            ]}
          />
          <Callout>
            <p className="text-[var(--ink)]">
              The broadest lesson was methodological: whenever a result could not
              be explained, there was still something about the system I had not
              understood.
            </p>
          </Callout>
        </Section>
      </CaseBody>
    </>
  );
}
