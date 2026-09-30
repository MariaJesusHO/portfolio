import type { Metadata } from "next";
import { getResearch } from "@/lib/research";
import { CaseBody, Section, StatCards, ImagePlaceholder } from "@/components/case-study";
import { ArticleHero, DataTable, Callout } from "@/components/article";

const piece = getResearch("oxford-data-science-final")!;

export const metadata: Metadata = {
  title: piece.title,
  description: piece.summary,
};

const sections = [
  { id: "overview", label: "Overview" },
  { id: "visualisation", label: "Part 1 — Visualisation" },
  { id: "classification", label: "Part 2 — Classification" },
  { id: "discussion", label: "Discussion" },
];

export default function Page() {
  return (
    <>
      <ArticleHero
        piece={piece}
        meta={[
          ["Course", "Data Analysis Module"],
          ["Datasets", "Linnerud · Wine"],
          ["Stack", "NumPy · Matplotlib · scikit-learn"],
        ]}
      />

      <CaseBody nav={sections}>
        <p className="text-xl leading-relaxed text-[var(--ink)]">
          The final assignment for the Data Analysis module: two self-contained
          studies. First, an exploratory <em>visualisation</em> of the Linnerud
          exercise/physiology dataset. Second, a <em>classification</em>{" "}
          comparison on the Wine dataset — several algorithms, the effect of
          feature scaling, and honest model selection under a small test set.
          A group project with Dante Hernandez Castellanos and Omar Burgos
          Osorio.
        </p>

        <StatCards
          items={[
            { value: "100%", label: "Test accuracy of the scaled Ridge classifier (Wine)" },
            { value: "98.32%", label: "Best mean 5-fold CV accuracy — Logistic Regression" },
            { value: "0.87", label: "Strongest correlation found: Weight ↔ Waist (Linnerud)" },
          ]}
        />

        {/* 1 ─────────────────────────────────────────────────────────────── */}
        <Section id="overview" title="Overview">
          <p className="leading-relaxed text-[var(--muted)]">
            The two exercises use different datasets and toolchains but share a
            method: let the data structure the conclusions, and be explicit about
            what a small sample can and cannot support. Part 1 uses NumPy and
            Matplotlib on the <strong>Linnerud</strong> dataset (20 observations,
            6 variables). Part 2 uses scikit-learn on the <strong>Wine</strong>{" "}
            dataset (178 samples, 3 cultivars, 13 chemical features).
          </p>
        </Section>

        {/* 2 ─────────────────────────────────────────────────────────────── */}
        <Section id="visualisation" tag="Part 1" title="Visualising the Linnerud dataset">
          <p className="leading-relaxed text-[var(--muted)]">
            The combined array is (20, 6), and the variables sit on very
            different scales — Situps, Jumps and Weight have far larger ranges
            than Chins, Waist and Pulse — which is exactly why scaling matters
            before any magnitude-sensitive comparison. With only 20 observations,
            even the histogram shape is sensitive to bin count: 5 bins aggregate,
            10 bins fragment.
          </p>
          <Callout label="A careful reading, not just a plot">
            <p>
              Situps and Jumps <em>can</em> share an axis (ranges 50–251 and
              25–250), so nothing breaks outright — the problem is the{" "}
              <em>comparison</em>. Their centres and spreads differ (means 145.55
              vs 70.30), so the Jumps box is compressed and relative variability
              is misleading by eye. Standardising to z-scores fixes the
              comparison; the Jumps value of 250 stays an outlier, because scaling
              changes units, not an observation&rsquo;s position within its own
              distribution.
            </p>
          </Callout>
          <ImagePlaceholder
            label="Fig. 1 — Correlation heatmap of all six variables (np.corrcoef)"
            ratio="16 / 9"
          />
          <p className="leading-relaxed text-[var(--muted)]">
            The correlation heatmap agrees with the scatter grid and ranks the
            weak pairings more reliably than the eye can — Situps vs Pulse (0.23)
            and Jumps vs Waist (−0.19) look equally structureless but are not
            equally weak.
          </p>
          <DataTable
            numeric
            caption="Selected correlations across the six variables."
            head={["Variable pair", "Correlation r", "Reading"]}
            rows={[
              ["Weight ↔ Waist", "0.87", "Strongest overall relationship"],
              ["Situps ↔ Waist", "−0.65", "Clearest exercise ↔ physiology trend"],
              ["Situps ↔ Pulse", "0.23", "Weak"],
              ["Jumps ↔ Waist", "−0.19", "Weak"],
              ["Jumps ↔ Pulse", "0.03", "Essentially no linear relationship"],
            ]}
          />
        </Section>

        {/* 3 ─────────────────────────────────────────────────────────────── */}
        <Section id="classification" tag="Part 2" title="Classifying the Wine dataset">
          <p className="leading-relaxed text-[var(--muted)]">
            The dataset was split 142 / 36 with stratification to preserve the
            three-class distribution. A Ridge classifier on the{" "}
            <strong>raw</strong> features already scored 97.22% (35/36). Wrapping
            it in a <code className="rounded bg-[var(--accent-soft)] px-1.5 py-0.5 text-[13px]">StandardScaler</code>{" "}
            pipeline raised that to <strong>100%</strong> — because Ridge&rsquo;s
            regularisation penalises coefficient size, so features on larger
            scales (e.g. proline, in the hundreds) otherwise dominate unfairly.
          </p>
          <DataTable
            numeric
            caption="Table 1 — Mean five-fold cross-validation accuracy of the three classifiers."
            head={["Model", "Mean CV accuracy", "Std. dev (between folds)"]}
            rows={[
              ["Logistic Regression", "98.32%", "0.0137"],
              ["Ridge Classifier", "97.75%", "0.0113"],
              ["K-Nearest Neighbours", "94.94%", "0.0379"],
            ]}
          />
          <p className="leading-relaxed text-[var(--muted)]">
            The two linear models clearly led; KNN was both lower and noticeably
            more variable between folds. <strong>Logistic Regression</strong> was
            selected as the best model on its highest mean CV accuracy.
          </p>
          <Callout label="Not over-reading a single test set">
            <p>
              The scaled Ridge hit 100% on this particular test split while
              Logistic Regression — the higher cross-validated model — scored
              97.22%. That is not a contradiction: with only 36 test samples, one
              observation is worth 2.8 points, so a one-sample difference sits
              inside the noise. The five-fold estimate is the more reliable basis
              for choosing, and the single test figure shouldn&rsquo;t be
              over-interpreted either way.
            </p>
          </Callout>
          <ImagePlaceholder
            label="Fig. 2 — Confusion matrix for the selected Logistic Regression classifier"
            ratio="16 / 9"
          />
          <p className="leading-relaxed text-[var(--muted)]">
            Inspecting the scaled Ridge coefficients, the most influential
            features were <strong>Flavanoids (0.532)</strong>, Proline (0.380)
            and Colour intensity (0.311) — intuitively, chemical properties that
            vary most between cultivars. The only recurring error was a single
            class-1 / class-2 confusion, reasonable given those two cultivars are
            chemically closer to each other than to class 0.
          </p>
        </Section>

        {/* 4 ─────────────────────────────────────────────────────────────── */}
        <Section id="discussion" title="Discussion">
          <p className="leading-relaxed text-[var(--muted)]">
            The Linnerud study is a lesson in restraint: with{" "}
            <strong>N = 20</strong>, any correlation deserves low-to-moderate
            confidence. Small samples are outlier-sensitive (the Jumps value of
            250 alone can swing a coefficient), carry high sampling variability,
            and can manufacture apparent relationships that don&rsquo;t
            generalise. These results are exploratory, not conclusive — ideally
            validated with significance tests, confidence intervals, and a larger
            independent sample.
          </p>
          <p className="leading-relaxed text-[var(--muted)]">
            The Wine study is the counterpoint: with well-separated classes and
            informative features, even simple linear classifiers reach excellent
            accuracy — provided the preprocessing (scaling), evaluation (stratified
            CV), and metrics (accuracy plus confusion matrices) are done properly.
            Taken together, the two exercises are really about the same discipline:
            matching the strength of a claim to the evidence behind it.
          </p>
        </Section>
      </CaseBody>
    </>
  );
}
