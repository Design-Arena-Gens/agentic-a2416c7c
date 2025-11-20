"use client";

import { AccentButton } from "./AccentButton";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute -left-20 top-10 h-[520px] w-[520px] rounded-full bg-glow opacity-40 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute inset-0 bg-grid" />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-24 sm:py-32 lg:flex-row lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
            Growth Architect
          </span>
          <h1 className="mt-6 font-heading text-5xl font-semibold leading-tight text-white sm:text-6xl">
            Digital marketing that turns clicks into loyal customers.
          </h1>
          <p className="mt-6 text-lg text-white/70">
            I&apos;m Kishan Kumar Yadav, your partner in full-funnel digital
            marketing. I connect high-intent audiences with irresistible
            messaging, so you can scale smarter, faster.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <AccentButton href="#contact">Schedule Strategy Call</AccentButton>
            <AccentButton href="#services" variant="ghost">
              Explore Services
            </AccentButton>
          </div>
          <div className="mt-12 grid gap-6 text-left text-sm text-white/60 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-semibold text-white">300%+</p>
              <p>Average lift in qualified leads for growth-focused brands.</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-white">45%</p>
              <p>Reduction in customer acquisition costs within 90 days.</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-white">12+</p>
              <p>Industries transformed with data-driven digital strategies.</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative">
            <div className="absolute -left-12 -top-12 h-28 w-28 rounded-3xl border border-white/10 bg-white/5 blur-lg" />
            <div className="absolute -right-12 -bottom-12 h-36 w-36 rounded-3xl border border-white/10 bg-white/5 blur-lg" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-1">
              <div className="relative h-96 w-80 overflow-hidden rounded-[28px] bg-gradient-to-br from-primary/40 via-slate-950 to-slate-950 p-8">
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/20 to-transparent" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="text-sm text-white/70">
                    <p className="text-xs uppercase tracking-[0.45em] text-white/40">
                      Dashboard Insight
                    </p>
                    <p className="mt-4 text-3xl font-semibold text-white">
                      Campaign Performance
                    </p>
                    <p className="mt-2">
                      Weekly snapshot of the growth programs I run for clients.
                    </p>
                  </div>
                  <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between text-sm text-white/75">
                      <span>SEO Visibility</span>
                      <span className="text-accent">+124%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-white/75">
                      <span>ROAS Paid Ads</span>
                      <span className="text-accent">5.3x</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-white/75">
                      <span>Lead Quality Score</span>
                      <span className="text-accent">+38%</span>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.45em] text-white/40">
                      Lead Flow
                    </p>
                    <p className="mt-2 text-3xl font-semibold text-accent">+312%</p>
                    <p className="mt-1 text-sm text-white/60">
                      Quarter-over-quarter inbound growth for DTC brands.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -left-16 bottom-8 hidden flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 lg:flex">
                <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                  Trusted By
                </span>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-white/10" />
                  <p className="font-medium text-white">
                    Emerging DTC & SaaS leaders worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
