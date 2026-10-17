import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  onDark = false,
  as: Tag = "h2",
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  onDark?: boolean;
  as?: "h1" | "h2" | "h3";
  children?: ReactNode;
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      {eyebrow ? (
        <p
          className={cn(
            "eyebrow-chip",
            onDark
              ? "bg-white/10 text-brand-light ring-1 ring-white/20"
              : "bg-accent text-primary ring-1 ring-primary/15",
          )}
        >
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-gradient-to-r from-teal to-green"
          />
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={cn(
          "mt-5 text-[1.9rem] leading-[1.15] font-extrabold sm:text-4xl lg:text-[2.6rem]",
          onDark ? "text-primary-foreground" : "text-navy",
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-[1.75] sm:text-[1.075rem]",
            align === "center" && "mx-auto max-w-2xl",
            onDark ? "text-primary-foreground/80" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
      {children}
    </Reveal>
  );
}
