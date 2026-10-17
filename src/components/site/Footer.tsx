import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "./Logo";
import { company, services, whatsappLink } from "@/data/company";
import { productCategories } from "@/data/products";

const iconMap = {
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
} as const;

export function Footer() {
  return (
    <footer className="gradient-navy relative overflow-hidden text-navy-foreground">
      <div aria-hidden="true" className="gradient-line absolute inset-x-0 top-0 h-1" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 size-[28rem] rounded-full bg-teal/15 blur-3xl"
      />
      <div className="container-page relative grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.4fr]">
        <div className="lg:col-span-1">
          <div className="inline-flex rounded-2xl bg-white px-4 py-3 shadow-soft">
            <Logo />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-foreground/75">
            {company.shortDescription}
          </p>
          <div className="mt-6 flex items-center gap-3">
            {company.social.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={item.label}
                  className="grid size-10 place-items-center rounded-xl border border-white/20 bg-white/5 text-navy-foreground/85 transition-all hover:-translate-y-0.5 hover:border-brand-light hover:bg-white/10 hover:text-brand-light"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        </div>

        <FooterColumn title="Products">
          {productCategories.map((category) => (
            <Link
              key={category.slug}
              to="/products/$category"
              params={{ category: category.slug }}
              className="block py-1 text-sm text-navy-foreground/75 transition-colors hover:text-brand-light"
            >
              {category.name}
            </Link>
          ))}
        </FooterColumn>

        <FooterColumn title="Information">
          <FooterLink to="/about">About Us</FooterLink>
          <FooterLink to="/products">Products</FooterLink>
          <FooterLink to="/quality">Quality</FooterLink>
          <FooterLink to="/blog">Blog</FooterLink>
          <FooterLink to="/contact">Contact Us</FooterLink>
        </FooterColumn>

        <FooterColumn title="Services">
          {services.map((service) => (
            <Link
              key={service.slug}
              to="/services/$slug"
              params={{ slug: service.slug }}
              className="block py-1 text-sm text-navy-foreground/75 transition-colors hover:text-brand-light"
            >
              {service.name}
            </Link>
          ))}
        </FooterColumn>

        <FooterColumn title="Contact Us">
          <p className="flex gap-3 py-1 text-sm text-navy-foreground/75">
            <MapPin className="mt-0.5 size-4 shrink-0 text-brand-light" />
            <span>{company.offices.office.lines.join(" ")}</span>
          </p>
          <p className="flex gap-3 py-1 text-sm text-navy-foreground/75">
            <MapPin className="mt-0.5 size-4 shrink-0 text-brand-light" />
            <span>Factory: {company.offices.factory.lines.join(" ")}</span>
          </p>
          <p className="flex gap-3 py-1 text-sm text-navy-foreground/75">
            <MapPin className="mt-0.5 size-4 shrink-0 text-brand-light" />
            <span>US: {company.offices.us.lines.join(" ")}</span>
          </p>
          {company.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/[\s-]/g, "")}`}
              className="flex items-center gap-3 py-1 text-sm text-navy-foreground/75 transition-colors hover:text-brand-light"
            >
              <Phone className="size-4 shrink-0 text-brand-light" />
              {phone}
            </a>
          ))}
          <a
            href={`mailto:${company.email}`}
            className="flex items-center gap-3 py-1 text-sm text-navy-foreground/75 transition-colors hover:text-brand-light"
          >
            <Mail className="size-4 shrink-0 text-brand-light" />
            {company.email}
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-green px-4 py-2 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5"
          >
            Chat on WhatsApp
          </a>
        </FooterColumn>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-navy-foreground/65 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="transition-colors hover:text-brand-light">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-brand-light">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="flex items-center gap-2 font-display text-xs font-bold tracking-[0.2em] text-navy-foreground uppercase">
        <span
          aria-hidden="true"
          className="h-0.5 w-5 rounded-full bg-gradient-to-r from-teal to-green"
        />
        {title}
      </p>
      <div className="mt-4 space-y-0.5">{children}</div>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      to={to as any}
      className="block py-1 text-sm text-navy-foreground/75 transition-colors hover:text-brand-light"
    >
      {children}
    </Link>
  );
}
