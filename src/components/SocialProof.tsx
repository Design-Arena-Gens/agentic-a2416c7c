const brands = [
  "Lumina Labs",
  "Nova Commerce",
  "Skyline Travels",
  "GrowthGrid",
  "Pulse Healthcare",
  "Zenith SaaS"
];

export function SocialProof() {
  return (
    <section className="border-y border-white/5 bg-white/5">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.5em] text-white/40">
          Trusted by ambitious teams accelerating growth
        </p>
        <div className="mt-8 grid grid-cols-2 gap-6 text-center text-base font-medium uppercase text-white/60 sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <div
              key={brand}
              className="rounded-xl border border-white/5 bg-slate-950/60 px-4 py-3"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
