import { CalendarCheck, MapPin, Package, Users } from "lucide-react";

import { Reveal } from "./Reveal";
import { StatCounter } from "./StatCounter";
import { cn } from "@/lib/utils";
import { company, stats } from "@/data/company";

const statIcons = {
  Locations: MapPin,
  Customers: Users,
  Products: Package,
} as const;

export function StatsBand({ className }: { className?: string }) {
  return (
    <Reveal
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border bg-card p-4 shadow-lift sm:p-6",
        className,
      )}
    >
      <div aria-hidden="true" className="gradient-line absolute inset-x-0 top-0 h-1" />
      <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
        {stats.map((stat, index) => (
          <StatCounter
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            icon={statIcons[stat.label]}
            toneIndex={index}
          />
        ))}
        <StatCounter
          value={company.establishedYear}
          label="Established"
          icon={CalendarCheck}
          toneIndex={3}
          countUp={false}
        />
      </div>
    </Reveal>
  );
}
