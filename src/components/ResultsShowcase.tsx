import { SectionHeading } from "./SectionHeading";

const results = [
  {
    company: "Nova Commerce",
    industry: "DTC Retail",
    metric: "4.6x ROAS",
    summary:
      "Scaled Meta & Google spend by 215% while improving return-on-ad-spend with high-converting creative sprints.",
    stats: ["+312% revenue", "40% CAC decrease", "Top 1% CTR"]
  },
  {
    company: "Zenith SaaS",
    industry: "B2B Software",
    metric: "280% SQL Growth",
    summary:
      "Built an SEO-driven inbound engine with targeted LinkedIn ABM resulting in record quarters for pipeline velocity.",
    stats: ["+185% traffic", "62% SQL win-rate", "8-touch nurture"]
  },
  {
    company: "Pulse Healthcare",
    industry: "Healthcare",
    metric: "3.2x Patient Bookings",
    summary:
      "Deployed localized search & performance campaigns with HIPAA-compliant lead flow automation for clinics network.",
    stats: ["+118% search leads", "24/7 routing", "2.4x retention"]
  }
];

export function ResultsShowcase() {
  return (
    <section id="results" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Results"
        title="Proof that high-intent execution changes everything."
        description="Client wins powered by agile experimentation, relentless optimization, and an obsession with measurable impact."
      />
      <div className="mt-16 space-y-10">
        {results.map((result) => (
          <div
            key={result.company}
            className="rounded-[28px] border border-white/5 bg-gradient-to-br from-white/10 via-white/5 to-slate-950 p-8 md:p-12"
          >
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-white/40">
                  {result.industry}
                </p>
                <h3 className="mt-3 font-heading text-3xl font-semibold text-white">
                  {result.company}
                </h3>
                <p className="mt-4 max-w-2xl text-base text-white/65">
                  {result.summary}
                </p>
              </div>
              <div className="flex flex-col items-end gap-4">
                <span className="rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-accent">
                  {result.metric}
                </span>
                <div className="flex flex-wrap justify-end gap-3 text-xs font-medium text-white/60">
                  {result.stats.map((stat) => (
                    <span
                      key={stat}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
