import { SectionHeading } from "./SectionHeading";

const testimonials = [
  {
    quote:
      "Kishan plugged into our team and transformed marketing from a cost center into a predictable revenue engine within 60 days.",
    name: "Aman Verma",
    title: "Founder, Nova Commerce"
  },
  {
    quote:
      "His strategy and execution are elite. Kishan reshaped our entire pipeline and now sales asks what marketing is launching next.",
    name: "Priya Sharma",
    title: "VP Growth, Zenith SaaS"
  },
  {
    quote:
      "Patient bookings skyrocketed. Kishan built automation, ads, and analytics that made scaling to new locations effortless.",
    name: "Dr. Arjun Mehta",
    title: "Director, Pulse Healthcare"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Testimonials"
        title="Clients stay because the results keep compounding."
      />
      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="flex h-full flex-col rounded-3xl border border-white/5 bg-white/5 p-8"
          >
            <p className="text-lg text-white/80">&ldquo;{testimonial.quote}&rdquo;</p>
            <div className="mt-8">
              <p className="text-base font-semibold text-white">
                {testimonial.name}
              </p>
              <p className="text-sm text-white/50">{testimonial.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
