import { AccentButton } from "./AccentButton";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Testimonials", href: "#testimonials" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent font-heading text-lg font-bold text-slate-950">
            KK
          </div>
          <div className="leading-tight">
            <span className="font-heading text-lg font-semibold text-white">
              Kishan Kumar Yadav
            </span>
            <p className="text-xs uppercase tracking-[0.25em] text-white/50">
              Digital Marketing
            </p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-white/65 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <AccentButton href="#contact">Book A Strategy Call</AccentButton>
      </div>
    </header>
  );
}
