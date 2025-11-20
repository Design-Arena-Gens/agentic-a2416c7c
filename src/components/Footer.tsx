export function Footer() {
  const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kishankumaryadav" },
    { label: "Instagram", href: "https://www.instagram.com/kishan_growth" },
    { label: "YouTube", href: "https://www.youtube.com/@kishanmarketing" }
  ];

  return (
    <footer className="border-t border-white/5 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-heading text-lg font-semibold text-white">
            Kishan Kumar Yadav
          </p>
          <p className="text-sm text-white/50">
            Digital marketing architect for brands ready to scale.
          </p>
        </div>
        <div className="flex gap-4 text-sm text-white/60">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-white/30 hover:text-white"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Kishan Kumar Yadav. All rights reserved.
      </div>
    </footer>
  );
}
