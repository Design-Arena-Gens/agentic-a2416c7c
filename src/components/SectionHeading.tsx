type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center"
}: SectionHeadingProps) {
  return (
    <div
      className={`mx-auto max-w-2xl ${align === "center" ? "text-center" : "text-left"}`}
    >
      <span className="text-sm font-semibold uppercase tracking-[0.4em] text-accent">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-heading text-4xl font-semibold text-white sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg text-white/60">{description}</p>
      ) : null}
    </div>
  );
}
