import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    title: "Discovery & Diagnostics",
    description:
      "Deep audit of current performance, customer journeys, and analytics to uncover opportunity gaps."
  },
  {
    title: "Strategy Blueprint",
    description:
      "Map channel priorities, messaging pillars, and KPIs into a growth architecture that scales with you."
  },
  {
    title: "Launch & Scale",
    description:
      "Execute cross-channel campaigns with creative direction, budget optimization, and live analytics."
  },
  {
    title: "Optimize & Automate",
    description:
      "Implement experimentation loops, automation workflows, and insights dashboards to drive compound growth."
  }
];

export function GrowthProcess() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-[32px] border border-white/5 bg-gradient-to-br from-white/10 via-white/5 to-slate-950 p-10 sm:p-16">
        <SectionHeading
          eyebrow="Process"
          title="How we engineer predictable, profitable growth."
          description="No guesswork. Every engagement follows a proven framework fueled by real-time data, creative precision, and relentless optimization."
        />
        <div className="mt-16 grid gap-10 sm:grid-cols-2">
          {steps.map((step, index) => (
            <div key={step.title} className="flex gap-6">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg font-semibold text-accent">
                {index + 1}
                {index !== steps.length - 1 ? (
                  <span className="absolute left-1/2 top-full hidden h-12 w-px -translate-x-1/2 bg-gradient-to-b from-accent/0 via-accent/50 to-accent/0 sm:block" />
                ) : null}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm text-white/60">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
