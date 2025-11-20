import { AccentButton } from "./AccentButton";

export function ContactCTA() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-6 pb-24"
    >
      <div className="relative overflow-hidden rounded-[36px] border border-white/5 bg-gradient-to-br from-primary/60 via-primary/40 to-accent/50 p-10 sm:p-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(13,18,32,0.4),transparent)]" />
        <div className="relative">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
            Let&apos;s Build It
          </span>
          <h3 className="mt-4 font-heading text-3xl font-semibold text-white sm:text-4xl">
            Ready to create your next wave of digital growth?
          </h3>
          <p className="mt-4 max-w-2xl text-base text-white/80">
            Book a direct strategy session with me, Kishan Kumar Yadav. We&apos;ll
            audit your current marketing, pinpoint near-term wins, and map the
            roadmap to consistent revenue breakthroughs.
          </p>
          <div className="mt-8 flex flex-col gap-3 text-sm text-white/80 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-lg font-semibold text-white">
                1
              </span>
              <p>Share your goals and current marketing landscape.</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-lg font-semibold text-white">
                2
              </span>
              <p>Receive a tailored action plan in under 7 days.</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-lg font-semibold text-white">
                3
              </span>
              <p>Launch execution with direct access to me.</p>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <AccentButton href="mailto:hello@kishanyadav.digital">
              hello@kishanyadav.digital
            </AccentButton>
            <p className="text-sm text-white/80">
              Prefer WhatsApp? DM me directly at <span className="font-semibold">( +91 98765 43210 )</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
