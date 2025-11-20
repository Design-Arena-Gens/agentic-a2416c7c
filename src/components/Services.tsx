"use client";

import { SectionHeading } from "./SectionHeading";
import { motion } from "framer-motion";

const services = [
  {
    title: "Full-Funnel Strategy",
    description:
      "Connect awareness, consideration, and conversion touchpoints with a cohesive roadmap engineered for accelerated growth.",
    highlights: [
      "ICP definition & messaging architecture",
      "Omnichannel marketing roadmaps",
      "KPI modeling & optimization loops"
    ]
  },
  {
    title: "Performance Advertising",
    description:
      "Unlock profitable scaling via data-driven performance on Meta, Google, and LinkedIn with creative rigor built in.",
    highlights: [
      "Creative testing systems & CRO",
      "Budget allocation & ROAS tracking",
      "Analytics, attribution & automation"
    ]
  },
  {
    title: "Organic Growth Engines",
    description:
      "Dominate search and social with SEO & content systems that attract, engage, and nurture high-intent buyers.",
    highlights: [
      "Technical SEO & authority building",
      "Content strategy & distribution",
      "Community & social media programs"
    ]
  },
  {
    title: "Lifecycle Marketing",
    description:
      "Transform lead flow into revenue with automated email, SMS, and retention journeys that keep buyers engaged.",
    highlights: [
      "Lifecycle mapping & segmentation",
      "Email/SMS automation builds",
      "Retention & loyalty initiatives"
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Services"
        title="Every lever you need to dominate digital growth."
        description="From strategic foundations to performance execution, I lead full-stack marketing programs that connect data, creative, and customer experience."
      />
      <div className="mt-16 grid gap-8 sm:grid-cols-2">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 shadow-[0_25px_65px_-40px_rgba(93,75,255,0.6)]"
          >
            <div className="absolute inset-0 translate-y-full bg-gradient-to-br from-primary/50 via-slate-950 to-slate-950 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" />
            <div className="relative flex h-full flex-col">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  {(index + 1).toString().padStart(2, "0")}
                </div>
                <h3 className="font-heading text-2xl font-semibold text-white">
                  {service.title}
                </h3>
              </div>
              <p className="mt-6 text-base text-white/65 group-hover:text-white/80">
                {service.description}
              </p>
              <ul className="mt-8 space-y-3 text-sm text-white/55 group-hover:text-white/70">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
