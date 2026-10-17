import {
  Atom,
  Beaker,
  ClipboardList,
  Factory,
  FlaskConical,
  Globe2,
  Leaf,
  Pill,
  Sparkles,
  TestTubes,
} from "lucide-react";

import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";
import { toneAt } from "@/lib/tones";

const left = [
  { label: "Pharmaceutical Manufacturing", Icon: Factory },
  { label: "Nutraceutical Manufacturing", Icon: Leaf },
  { label: "API", Icon: Atom },
  { label: "CMO", Icon: Beaker },
  { label: "CDMO", Icon: FlaskConical },
];

const right = [
  { label: "CRO", Icon: ClipboardList },
  { label: "Animal Health Products", Icon: Sparkles },
  { label: "Vitamins", Icon: Pill },
  { label: "Flavors & Fragrances", Icon: TestTubes },
  { label: "Fine & Specialty Chemicals", Icon: Globe2 },
];

export function HubSpoke() {
  return (
    <div className="mt-14 grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-10">
      <div className="space-y-3">
        {left.map((item, index) => (
          <Spoke key={item.label} {...item} index={index} side="left" />
        ))}
      </div>

      <Reveal className="relative order-first mx-auto grid size-44 place-items-center sm:size-52 lg:order-none">
        <span
          aria-hidden="true"
          className="animate-pulse-ring absolute inset-0 rounded-full border-2 border-teal/40"
        />
        <span
          aria-hidden="true"
          className="absolute -inset-4 rounded-full border border-dashed border-primary/25"
        />
        <div className="relative grid size-full place-items-center rounded-full gradient-teal text-center shadow-glow ring-8 ring-white">
          <div>
            <p className="font-display text-3xl font-extrabold text-primary-foreground sm:text-4xl">
              GM
            </p>
            <p className="mt-1 text-[0.65rem] font-bold tracking-[0.32em] text-primary-foreground/90">
              PHARMA
            </p>
          </div>
        </div>
      </Reveal>

      <div className="space-y-3">
        {right.map((item, index) => (
          <Spoke key={item.label} {...item} index={index + 1} side="right" />
        ))}
      </div>
    </div>
  );
}

function Spoke({
  label,
  Icon,
  index,
  side,
}: {
  label: string;
  Icon: typeof Factory;
  index: number;
  side: "left" | "right";
}) {
  const tone = toneAt(index);
  return (
    <Reveal delay={index * 60}>
      <div
        className={cn(
          "group flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3.5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift",
          tone.hoverBorder,
          side === "left" && "lg:flex-row-reverse lg:text-right",
        )}
      >
        <span
          className={cn(
            "grid size-10 shrink-0 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110",
            tone.iconSoft,
          )}
        >
          <Icon className="size-5" />
        </span>
        <p className="flex-1 font-display text-[0.95rem] font-bold text-navy">{label}</p>
        <span
          aria-hidden="true"
          className={cn("hidden h-1.5 w-1.5 rounded-full lg:block", tone.bar)}
        />
      </div>
    </Reveal>
  );
}
