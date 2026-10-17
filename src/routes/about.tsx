import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Eye, Target, UserRound } from "lucide-react";

import aboutLab from "@/assets/about-lab.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { StatsBand } from "@/components/site/StatsBand";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  collaborationCapabilities,
  collaborationsStatement,
  company,
  coreValueSpecialization,
  coreValueStatement,
  coreValues,
  diversityStatement,
  mission,
  trustQuote,
  vision,
  whatWeDo,
} from "@/data/company";

const title = "About GM Pharma";
const description =
  "GM Pharma is an emerging pharmaceutical and nutraceutical manufacturing company delivering quality-driven contract manufacturing, development and research services.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About GM Pharma"
        description={company.shortDescription}
        crumb="About Us"
      />

      <section className="py-20 sm:py-24">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative">
            <div
              aria-hidden="true"
              className="absolute -top-6 -left-6 hidden size-40 rounded-3xl bg-gradient-to-br from-primary/20 to-teal/25 sm:block"
            />
            <div
              aria-hidden="true"
              className="absolute -right-6 -bottom-6 hidden size-32 rounded-3xl bg-green/20 sm:block"
            />
            <img
              src={aboutLab}
              alt="GM Pharma scientist inspecting a sample in a quality-control laboratory"
              width={1200}
              height={912}
              loading="lazy"
              decoding="async"
              className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-lift"
            />
            <div className="absolute -bottom-5 left-5 rounded-2xl gradient-teal px-5 py-3 text-primary-foreground shadow-glow">
              <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase opacity-85">
                Established
              </p>
              <p className="font-display text-2xl leading-tight font-extrabold">
                {company.establishedYear}
              </p>
            </div>
          </Reveal>
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
            <div className="mt-6 space-y-4 text-base leading-[1.8] text-muted-foreground">
              <p>
                {company.name} is an emerging pharmaceutical and nutraceutical manufacturing company
                founded by{" "}
                <strong className="font-semibold text-navy">{company.founders[0].name}</strong> and
                co-founded by{" "}
                <strong className="font-semibold text-navy">{company.founders[1].name}</strong>, who
                bring extensive experience and expertise in the pharmaceutical formulation domain.
              </p>
              <p>
                {company.name} is focused on the development, manufacturing, and commercialization
                of a diverse portfolio of pharmaceutical products and services. We specialize in the
                manufacturing and development of pharmaceutical products, including Tablets,
                Capsules, Injectables, Eye drops, Ointments, and API intermediates along with
                services in CMO (Contract Manufacturing Organization), CDMO (Contract Development
                and Manufacturing Organization), CRO (Contract Research Organization), API (Active
                Pharmaceutical Ingredients), Animal Health Products, Flavors &amp; Fragrances,
                Vitamins, Fine &amp; Specialty Chemicals.
              </p>
              <p>
                With our headquarters in India, {company.name} strives to be a trusted and reliable
                pharmaceutical manufacturing partner, delivering high-quality, cost-effective, and
                customer-centric solutions while creating long-term value and contributing to the
                growth of the domestic and global pharmaceutical industry.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/rfq">Request a Quote</Link>
              </Button>
              <Button asChild variant="quiet" size="lg">
                <Link to="/quality">Quality &amp; Compliance</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-2">
        <div className="container-page">
          <StatsBand />
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Leadership" title="Founded and led by industry experience" />
          <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
            {company.founders.map((founder, index) => (
              <Reveal
                key={founder.name}
                delay={index * 80}
                className="card-hover flex items-center gap-4 rounded-2xl border border-border bg-card p-6"
              >
                <span className="grid size-14 shrink-0 place-items-center rounded-full gradient-teal text-primary-foreground shadow-glow">
                  <UserRound className="size-6" />
                </span>
                <div>
                  <p className="font-display text-base font-bold text-navy">{founder.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {founder.role}, {company.name}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <Reveal className="gradient-navy rounded-3xl p-8 text-navy-foreground shadow-lift sm:p-10">
            <span className="grid size-12 place-items-center rounded-xl bg-primary-foreground/12 ring-1 ring-primary-foreground/25">
              <Eye className="size-5" />
            </span>
            <h2 className="mt-5 font-display text-xl font-bold">Our Vision</h2>
            <p className="mt-3 text-base leading-[1.8] text-navy-foreground/85">{vision}</p>
          </Reveal>
          <Reveal
            delay={100}
            className="gradient-teal rounded-3xl p-8 text-primary-foreground shadow-lift sm:p-10"
          >
            <span className="grid size-12 place-items-center rounded-xl bg-primary-foreground/15 ring-1 ring-primary-foreground/25">
              <Target className="size-5" />
            </span>
            <h2 className="mt-5 font-display text-xl font-bold">Our Mission</h2>
            <p className="mt-3 text-base leading-[1.8] text-primary-foreground/90">{mission}</p>
          </Reveal>
        </div>
      </section>

      {/* Our Core Value */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Core Value"
            title="The principles behind every batch we make"
          />
          <Reveal delay={60} className="mx-auto mt-8 max-w-3xl space-y-4 text-center">
            <p className="text-base leading-relaxed text-muted-foreground">{coreValueStatement}</p>
            <p className="text-base leading-relaxed text-muted-foreground">
              {coreValueSpecialization}
            </p>
          </Reveal>
          <Reveal
            delay={100}
            className="mx-auto mt-8 max-w-2xl rounded-2xl border border-border bg-surface-mint p-6 text-center"
          >
            <p className="font-display text-base leading-relaxed text-navy italic">
              "{trustQuote}"
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, index) => (
              <Reveal
                key={value.title}
                delay={index * 70}
                className="card-hover rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <CheckCircle2 className="size-6 text-primary" />
                <h3 className="mt-4 font-display text-base font-bold text-navy">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Diversity and Continuous Development */}
      <section className="gradient-wash py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Our Growth" title="Diversity and Continuous Development" />
          <div className="mx-auto mt-8 max-w-3xl space-y-4">
            {diversityStatement.map((paragraph, index) => (
              <Reveal key={index} delay={index * 60}>
                <p className="text-base leading-relaxed text-muted-foreground">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Our Focus" title="What We Do" />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {whatWeDo.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 70}
                className="card-hover relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-0 top-0 h-1",
                    index === 0 ? "bg-primary" : "bg-teal",
                  )}
                />
                <h3 className="font-display text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Partnerships"
            title="Collaborations"
            description={collaborationsStatement}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {collaborationCapabilities.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 70}
                className="card-hover rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <span
                  aria-hidden="true"
                  className="block h-1 w-10 rounded-full bg-gradient-to-r from-primary via-teal to-green"
                />
                <p className="mt-4 font-display text-base font-bold text-navy">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden gradient-navy py-16 text-navy-foreground sm:py-20">
        <div aria-hidden="true" className="pattern-molecule absolute inset-0 opacity-20" />
        <div className="container-page relative flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Let's discuss your manufacturing requirement
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-navy-foreground/80">
              Share your product, dosage form and target market — our team will respond with
              capability and commercial details.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="hero" size="lg">
              <Link to="/rfq">Request a Quote</Link>
            </Button>
            <Button asChild variant="onDark" size="lg">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
