import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  Eye,
  Globe2,
  Handshake,
  Mail,
  Phone,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UserRound,
  Users,
} from "lucide-react";

import heroImage from "@/assets/hero-facility.jpg";
import aboutImage from "@/assets/about-lab.jpg";
import qualityImage from "@/assets/quality-cleanroom.jpg";
import { HubSpoke } from "@/components/site/HubSpoke";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { StatsBand } from "@/components/site/StatsBand";
import { Button } from "@/components/ui/button";
import { resolveIcon } from "@/lib/icons";
import { toneAt } from "@/lib/tones";
import { cn } from "@/lib/utils";
import {
  company,
  coreValues,
  countries,
  qualityStandards,
  services,
  vision,
  mission,
  whyChooseUs,
} from "@/data/company";
import { blogPosts } from "@/data/blog";
import { productCategories } from "@/data/products";

const title = "GM Pharma — Pharmaceutical & Nutraceutical Manufacturing";
const description =
  "Premium contract manufacturing for pharmaceutical and nutraceutical brands. CMO, CDMO, CRO services. WHO-GMP and PIC/S compliant.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const exportMarkets = countries.filter((country) => country !== "Other");
const marqueeMarkets = [...exportMarkets, ...exportMarkets];

const [founder, coFounder] = company.founders;

const qualityIcons = [ShieldCheck, BadgeCheck, Globe2, CheckCircle2];
// NOTE: "ISO 9001:2015" is carried over from the previous site build but is not listed in
// src/data/company.ts qualityStandards — GM Pharma must confirm it before launch.
const certBadges = [
  { icon: ShieldCheck, title: "WHO-GMP", subtitle: "Approved facilities" },
  { icon: BadgeCheck, title: "PIC/S", subtitle: "Compliant standards" },
  { icon: ClipboardCheck, title: "ISO 9001:2015", subtitle: "Certified systems" },
  { icon: Award, title: "Quality Excellence", subtitle: "Our commitment" },
];
const valueIcons = [ShieldCheck, Target, Users, RefreshCw, Handshake];

function Index() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy relative overflow-hidden">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-20 sm:hidden"
        />
        <div aria-hidden="true" className="pattern-molecule absolute inset-0 opacity-30" />
        <div
          aria-hidden="true"
          className="absolute -top-40 -left-32 size-[32rem] rounded-full bg-primary/35 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -right-24 bottom-0 size-[28rem] rounded-full bg-teal/25 blur-3xl"
        />

        <div className="container-page relative pt-16 pb-28 sm:pt-20 sm:pb-32 lg:pt-24 lg:pb-40">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <Reveal className="eyebrow-chip bg-white/10 text-brand-light ring-1 ring-white/20 backdrop-blur-sm">
                <Sparkles className="size-3.5" />
                {company.positioning}
              </Reveal>

              <Reveal delay={60}>
                <h1 className="mt-6 text-[2.35rem] leading-[1.08] font-extrabold text-navy-foreground sm:text-5xl lg:text-[3.6rem]">
                  Empowering a <span className="text-gradient-teal">healthier world</span> without
                  boundaries
                </h1>
              </Reveal>

              <Reveal delay={120}>
                <p className="mt-6 max-w-xl text-base leading-[1.75] text-navy-foreground/80 sm:text-lg">
                  {company.name} delivers reliable pharmaceutical and nutraceutical manufacturing
                  solutions backed by quality, innovation, regulatory excellence, and global
                  partnerships.
                </p>
              </Reveal>

              <Reveal delay={180} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild variant="bright" size="lg">
                  <Link to="/products">
                    Explore Our Products
                    <ArrowRight className="ml-1 size-4" />
                  </Link>
                </Button>
                <Button asChild variant="onDark" size="lg">
                  <Link to="/rfq">Request a Quote</Link>
                </Button>
              </Reveal>

              <Reveal
                delay={240}
                className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/15 pt-6"
              >
                {["WHO-GMP Approved", "PIC/S Compliant", "CMO · CDMO · CRO"].map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-2 text-xs font-semibold tracking-wide text-navy-foreground/80 uppercase"
                  >
                    <CheckCircle2 className="size-4 text-green" />
                    {item}
                  </span>
                ))}
              </Reveal>
            </div>

            <Reveal delay={150} className="relative isolate hidden sm:block">
              <div
                aria-hidden="true"
                className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/40 to-teal/30 blur-2xl"
              />
              <div className="overflow-hidden rounded-3xl ring-1 ring-white/20 shadow-lift">
                <img
                  src={heroImage}
                  alt="Tablet production line in a GMP pharmaceutical manufacturing facility"
                  width={1920}
                  height={1088}
                  fetchPriority="high"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-lift">
                <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <BadgeCheck className="size-5" />
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-navy">PIC/S</p>
                  <p className="text-xs text-muted-foreground">Compliant standards</p>
                </div>
              </div>
              <div className="animate-float absolute -top-5 -right-3 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-lift">
                <span className="grid size-10 place-items-center rounded-xl bg-green/15 text-green-deep">
                  <ShieldCheck className="size-5" />
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-navy">WHO-GMP</p>
                  <p className="text-xs text-muted-foreground">Approved facilities</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        <div aria-hidden="true" className="gradient-line absolute inset-x-0 bottom-0 h-1" />
      </section>

      {/* Stats Section */}
      <section className="relative z-10 -mt-16 sm:-mt-20">
        <div className="container-page">
          <StatsBand />
        </div>
      </section>

      {/* Our Capabilities Hub */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div aria-hidden="true" className="bg-grid-light absolute inset-0 opacity-60" />
        <div className="container-page relative">
          <SectionHeading
            eyebrow="Our Capabilities"
            title={
              <>
                What We <span className="text-gradient-brand">Manufacture</span>
              </>
            }
            description="A single manufacturing partner across pharmaceutical and nutraceutical dosage forms, development and research services."
          />
          <HubSpoke />
        </div>
      </section>

      {/* Export markets marquee */}
      <section className="gradient-wash overflow-hidden py-16 sm:py-20">
        <Reveal className="container-page mb-8 text-center">
          <p className="eyebrow-chip bg-white text-teal-deep ring-1 ring-teal/25">
            <Globe2 className="size-3.5" />
            Serving Global Markets
          </p>
          <p className="mt-4 font-display text-2xl font-extrabold text-navy sm:text-3xl">
            Trusted across <span className="text-gradient-brand">{exportMarkets.length}+</span>{" "}
            countries
          </p>
        </Reveal>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent sm:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface-mint to-transparent sm:w-32" />
          <div className="marquee-track gap-3">
            {marqueeMarkets.map((country, index) => (
              <span
                key={`${country}-${index}`}
                aria-hidden={index >= exportMarkets.length ? true : undefined}
                className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-navy shadow-soft"
              >
                <span
                  aria-hidden="true"
                  className={cn("size-2 rounded-full", toneAt(index % exportMarkets.length).bar)}
                />
                {country}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 sm:py-24">
        <div className="container-page grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title={
                <>
                  About <span className="text-gradient-brand">GM Pharma</span>
                </>
              }
            />
            <Reveal delay={80}>
              <p className="mt-6 text-base leading-[1.8] text-muted-foreground sm:text-[1.075rem]">
                {company.name} is an emerging pharmaceutical and nutraceutical manufacturing company
                founded by <strong className="font-semibold text-navy">{founder.name}</strong> and
                co-founded by <strong className="font-semibold text-navy">{coFounder.name}</strong>.
                With extensive experience and expertise in pharmaceutical formulation and
                manufacturing, the company focuses on delivering quality-driven solutions to support
                healthcare businesses and their evolving needs.
              </p>
            </Reveal>

            <Reveal delay={140} className="mt-7 grid gap-3 sm:grid-cols-2">
              {company.founders.map((person, index) => (
                <div
                  key={person.name}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3"
                >
                  <span
                    className={cn(
                      "grid size-10 shrink-0 place-items-center rounded-full",
                      toneAt(index).iconSolid,
                    )}
                  >
                    <UserRound className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-sm font-bold text-navy">{person.name}</p>
                    <p className="text-xs font-medium text-muted-foreground">{person.role}</p>
                  </div>
                </div>
              ))}
            </Reveal>

            <Reveal delay={200} className="mt-7 flex flex-wrap gap-2">
              {["Tablets", "Capsules", "Injectables", "Eye Drops", "Ointments", "API"].map(
                (item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-sm font-medium text-navy"
                  >
                    <CheckCircle2 className="size-3.5 shrink-0 text-teal-deep" />
                    {item}
                  </span>
                ),
              )}
            </Reveal>

            <Reveal delay={260}>
              <Button asChild variant="hero" size="lg" className="mt-9">
                <Link to="/about">
                  Discover Our Story
                  <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
            </Reveal>
          </div>

          <Reveal delay={100} className="relative order-first lg:order-none">
            <div
              aria-hidden="true"
              className="absolute -top-6 -right-6 hidden size-40 rounded-3xl bg-gradient-to-br from-teal/30 to-green/20 sm:block"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -left-6 hidden size-32 rounded-3xl bg-primary/15 sm:block"
            />
            <div className="relative overflow-hidden rounded-3xl shadow-lift">
              <img
                src={aboutImage}
                alt="GM Pharma scientist inspecting a sample in a quality-control laboratory"
                width={1200}
                height={912}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent p-5 sm:p-6">
                <p className="font-display text-sm font-bold text-white sm:text-base">
                  Pharmaceutical formulation expertise
                </p>
                <p className="text-xs text-white/80 sm:text-sm">
                  Development and manufacturing under one partnership
                </p>
              </div>
            </div>
            <div className="absolute -top-5 -left-4 rounded-2xl gradient-teal px-5 py-4 text-primary-foreground shadow-glow sm:-left-6">
              <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase opacity-85">
                Established
              </p>
              <p className="font-display text-2xl leading-tight font-extrabold">
                {company.establishedYear}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="What We Offer"
            title={
              <>
                Our Products &amp; <span className="text-gradient-brand">Our Services</span>
              </>
            }
            description="From formulation and development through to commercial supply, we deliver end-to-end pharmaceutical and nutraceutical products and services."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = resolveIcon(service.icon);
              const tone = toneAt(index);
              return (
                <Reveal key={service.slug} delay={(index % 3) * 60} asChild>
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className={cn(
                      "card-hover group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft",
                      tone.hoverBorder,
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100",
                        tone.bar,
                      )}
                    />
                    <div className="flex items-start justify-between">
                      <span
                        className={cn(
                          "grid size-14 place-items-center rounded-2xl shadow-soft transition-transform duration-300 group-hover:scale-105",
                          tone.iconSolid,
                        )}
                      >
                        <Icon className="size-6" />
                      </span>
                      <ArrowUpRight className="size-5 text-muted-foreground/50 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-bold text-navy">
                      {service.name}
                    </h3>
                    <p
                      className={cn(
                        "mt-1 text-xs font-semibold tracking-wide uppercase",
                        tone.text,
                      )}
                    >
                      {service.full}
                    </p>
                    <p className="mt-4 flex-1 text-sm leading-[1.7] text-muted-foreground">
                      {service.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Learn more
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-20 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow-chip bg-white text-teal-deep ring-1 ring-teal/25">
                Our Products
              </p>
              <h3 className="mt-4 font-display text-2xl font-extrabold text-navy sm:text-3xl">
                Product categories
              </h3>
            </div>
            <Button asChild variant="quiet">
              <Link to="/products">
                View all products
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((category, index) => {
              const tone = toneAt(index);
              return (
                <Reveal key={category.slug} delay={index * 60} asChild>
                  <Link
                    to="/products/$category"
                    params={{ category: category.slug }}
                    className="card-hover group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={category.image}
                        alt={category.imageAlt}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                      <span
                        className={cn(
                          "absolute bottom-3 left-3 rounded-full px-3 py-1 text-xs font-bold text-white shadow-soft",
                          tone.pill,
                        )}
                      >
                        {category.name}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h4 className="font-display text-lg font-bold text-navy">{category.name}</h4>
                      <p className={cn("mt-1 text-xs font-semibold", tone.text)}>
                        {category.short}
                      </p>
                      <p className="mt-3 flex-1 text-sm leading-[1.7] text-muted-foreground">
                        {category.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                        Explore
                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative overflow-hidden bg-surface-mint py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="absolute -top-32 right-0 size-96 rounded-full bg-teal/15 blur-3xl"
        />
        <div className="container-page relative">
          <SectionHeading
            eyebrow="Why Choose Us"
            title={
              <>
                Why Choose <span className="text-gradient-brand">GM Pharma</span>
              </>
            }
            description="We deliver quality-driven manufacturing with scientific rigor and uncompromising standards."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {whyChooseUs.map((item, index) => {
              const Icon = resolveIcon(item.icon);
              const tone = toneAt(index);
              return (
                <Reveal
                  key={item.number}
                  delay={index * 70}
                  className="card-hover relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-soft"
                >
                  <span
                    aria-hidden="true"
                    className={cn("absolute inset-y-0 left-0 w-1", tone.bar)}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute top-4 right-6 font-display text-7xl font-extrabold text-navy/[0.06]"
                  >
                    {item.number}
                  </span>
                  <span
                    className={cn(
                      "relative grid size-14 place-items-center rounded-2xl shadow-soft",
                      tone.iconSolid,
                    )}
                  >
                    <Icon className="size-6" />
                  </span>
                  <h3 className="relative mt-6 font-display text-xl font-bold text-navy">
                    {item.title}
                  </h3>
                  <p className="relative mt-3 text-[0.95rem] leading-[1.75] text-muted-foreground">
                    {item.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="gradient-navy relative overflow-hidden py-20 text-navy-foreground sm:py-24">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-10 mix-blend-luminosity"
        />
        <div aria-hidden="true" className="bg-grid-navy absolute inset-0" />
        <div className="container-page relative">
          <SectionHeading onDark eyebrow="Our Purpose" title="Vision & Mission" />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal className="rounded-3xl border border-white/15 bg-white/[0.06] p-8 backdrop-blur-sm transition-colors hover:bg-white/[0.09] sm:p-10">
              <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-primary to-sky text-white shadow-glow">
                <Eye className="size-6" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold">Our Vision</h3>
              <p className="mt-4 text-base leading-[1.8] text-navy-foreground/85">{vision}</p>
            </Reveal>
            <Reveal
              delay={100}
              className="rounded-3xl border border-white/15 bg-white/[0.06] p-8 backdrop-blur-sm transition-colors hover:bg-white/[0.09] sm:p-10"
            >
              <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-teal-deep to-green text-white shadow-glow">
                <Target className="size-6" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold">Our Mission</h3>
              <p className="mt-4 text-base leading-[1.8] text-navy-foreground/85">{mission}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quality & Compliance */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div aria-hidden="true" className="bg-grid-light absolute inset-0 opacity-70" />
        <div className="container-page relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Quality & Compliance"
                title={
                  <>
                    International Standards &amp;{" "}
                    <span className="text-gradient-brand">Certifications</span>
                  </>
                }
              />
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {qualityStandards.map((standard, index) => {
                  const Icon = qualityIcons[index] ?? ShieldCheck;
                  const tone = toneAt(index);
                  return (
                    <Reveal
                      key={standard.title}
                      delay={index * 60}
                      className="card-hover rounded-2xl border border-border bg-card p-5 shadow-soft"
                    >
                      <span
                        className={cn("grid size-11 place-items-center rounded-xl", tone.iconSoft)}
                      >
                        <Icon className="size-5" />
                      </span>
                      <h3 className="mt-4 font-display text-base font-bold text-navy">
                        {standard.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-[1.65] text-muted-foreground">
                        {standard.description}
                      </p>
                    </Reveal>
                  );
                })}
              </div>
            </div>
            <Reveal delay={120} className="relative">
              <div className="overflow-hidden rounded-3xl shadow-lift">
                <img
                  src={qualityImage}
                  alt="Controlled cleanroom environment used for pharmaceutical manufacturing"
                  width={1400}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover sm:aspect-[4/3] lg:aspect-[4/5]"
                />
              </div>
              <div className="absolute inset-x-4 -bottom-6 rounded-2xl border border-border bg-card/95 p-4 shadow-lift backdrop-blur sm:inset-x-8">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-green/15 text-green-deep">
                    <BadgeCheck className="size-5" />
                  </span>
                  <p className="text-sm leading-snug font-semibold text-navy">
                    Committed to international standards of quality, safety &amp; regulatory
                    compliance
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal
            delay={150}
            className="mt-20 grid gap-4 rounded-3xl gradient-teal p-6 text-primary-foreground shadow-lift sm:grid-cols-2 sm:p-8 lg:grid-cols-4"
          >
            {certBadges.map((badge) => (
              <div
                key={badge.title}
                className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-white text-primary shadow-soft">
                  <badge.icon className="size-6" />
                </span>
                <div>
                  <p className="font-display font-bold">{badge.title}</p>
                  <p className="text-xs text-primary-foreground/80">{badge.subtitle}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="gradient-wash py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Values"
            title={
              <>
                Integrity, Quality &amp; <span className="text-gradient-brand">Innovation</span>
              </>
            }
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {coreValues.map((value, index) => {
              const Icon = valueIcons[index] ?? TrendingUp;
              const tone = toneAt(index);
              return (
                <Reveal
                  key={value.title}
                  delay={index * 60}
                  className={cn(
                    "card-hover group rounded-2xl border border-border bg-card p-6 text-center shadow-soft sm:text-left lg:text-center",
                    index === coreValues.length - 1 && "sm:col-span-2 lg:col-span-1",
                  )}
                >
                  <span
                    className={cn(
                      "mx-auto grid size-12 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-110 sm:mx-0 lg:mx-auto",
                      tone.iconSoft,
                    )}
                  >
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-display text-base font-bold text-navy">{value.title}</h3>
                  <p className="mt-2 text-sm leading-[1.65] text-muted-foreground">
                    {value.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Latest Insights"
            title={
              <>
                Knowledge from the <span className="text-gradient-brand">Pharma Industry</span>
              </>
            }
            description="Stay updated with pharmaceutical manufacturing trends, regulatory insights and industry best practices."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post, index) => {
              const tone = toneAt(index);
              return (
                <Reveal key={post.slug} delay={index * 60} asChild>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="card-hover group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
                  >
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      <img
                        src={post.image}
                        alt={post.imageAlt}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                      />
                      <span
                        className={cn(
                          "absolute top-4 left-4 rounded-full px-3 py-1 text-[0.7rem] font-bold tracking-wide text-white uppercase shadow-soft",
                          tone.pill,
                        )}
                      >
                        {post.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-xs font-medium text-muted-foreground">
                        {post.readingTime}
                      </p>
                      <h3 className="mt-2 line-clamp-2 font-display text-lg leading-snug font-bold text-navy transition-colors group-hover:text-primary">
                        {post.title}
                      </h3>
                      <p className="mt-3 line-clamp-2 flex-1 text-sm leading-[1.7] text-muted-foreground">
                        {post.excerpt}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                        Read article
                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={150} className="mt-12 flex justify-center">
            <Button asChild variant="quiet" size="lg">
              <Link to="/blog">
                View All Articles
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 sm:pb-24">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl gradient-teal px-6 py-12 text-primary-foreground shadow-lift sm:px-12 sm:py-16">
            <div aria-hidden="true" className="pattern-molecule absolute inset-0 opacity-25" />
            <div
              aria-hidden="true"
              className="absolute -right-20 -bottom-20 size-80 rounded-full bg-green/30 blur-3xl"
            />
            <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
              <Reveal>
                <h2 className="text-3xl leading-tight font-extrabold sm:text-4xl">
                  Ready to Get Started?
                </h2>
                <p className="mt-4 max-w-xl text-base leading-[1.75] text-primary-foreground/90 sm:text-lg">
                  Share your requirements and let's build the right solution together.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white font-semibold text-navy shadow-soft hover:-translate-y-0.5 hover:bg-white/95"
                  >
                    <Link to="/rfq">Request a Quote</Link>
                  </Button>
                  <Button asChild variant="onDark" size="lg">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </Reveal>
              <Reveal delay={100} className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={`tel:${company.phones[0].replace(/\s/g, "")}`}
                  className="flex flex-1 items-center gap-4 rounded-2xl border border-white/25 bg-white/10 px-5 py-4 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/20"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white text-primary">
                    <Phone className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-primary-foreground/80 uppercase">
                      Call us
                    </p>
                    <p className="font-semibold">{company.phones[0]}</p>
                  </div>
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="flex flex-1 items-center gap-4 rounded-2xl border border-white/25 bg-white/10 px-5 py-4 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/20"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white text-teal-deep">
                    <Mail className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold tracking-wide text-primary-foreground/80 uppercase">
                      Email us
                    </p>
                    <p className="truncate font-semibold">{company.email}</p>
                  </div>
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
