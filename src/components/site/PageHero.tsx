import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  description,
  crumb,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  crumb?: string;
}) {
  return (
    <section className="gradient-navy relative overflow-hidden">
      <div aria-hidden="true" className="pattern-molecule absolute inset-0 opacity-40" />
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 size-96 rounded-full bg-teal/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 left-1/3 size-96 rounded-full bg-primary/30 blur-3xl"
      />
      <div className="container-page relative py-16 sm:py-20 lg:py-24">
        <p className="eyebrow-chip bg-white/10 text-brand-light ring-1 ring-white/20">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-green" />
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-3xl text-3xl leading-[1.12] font-extrabold text-navy-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-[1.75] text-navy-foreground/80 sm:text-[1.05rem]">
            {description}
          </p>
        ) : null}
        <nav
          aria-label="Breadcrumb"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs text-navy-foreground/75 ring-1 ring-white/10"
        >
          <Link to="/" className="transition-colors hover:text-brand-light">
            Home
          </Link>
          <ChevronRight className="size-3.5" />
          <span className="font-semibold text-navy-foreground">{crumb ?? title}</span>
        </nav>
      </div>
      <div aria-hidden="true" className="gradient-line absolute inset-x-0 bottom-0 h-1" />
    </section>
  );
}
