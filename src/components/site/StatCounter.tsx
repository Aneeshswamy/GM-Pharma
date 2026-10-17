import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";

import { useInView } from "./Reveal";
import { cn } from "@/lib/utils";
import { toneAt } from "@/lib/tones";

/**
 * Animated statistic. The number is rendered exactly once: the server (and
 * no-JS / text-only readers) get the final value, and the client counts up
 * from zero the first time the card scrolls into view.
 */
export function StatCounter({
  value,
  suffix = "",
  label,
  icon: Icon,
  toneIndex = 0,
  countUp = true,
}: {
  value: number;
  suffix?: string;
  label: string;
  icon?: LucideIcon;
  toneIndex?: number;
  countUp?: boolean;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });
  const [display, setDisplay] = useState(value);
  const [armed, setArmed] = useState(false);
  const tone = toneAt(toneIndex);

  useEffect(() => {
    if (!countUp) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setArmed(true);
    setDisplay(0);
  }, [countUp]);

  useEffect(() => {
    if (!armed || !inView) return;
    const duration = 1500;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [armed, inView, value]);

  return (
    <div ref={ref} className="flex items-center gap-4 px-2 py-3 sm:px-4">
      {Icon ? (
        <span
          className={cn(
            "grid size-12 shrink-0 place-items-center rounded-2xl shadow-soft sm:size-14",
            tone.iconSolid,
          )}
        >
          <Icon className="size-6" />
        </span>
      ) : null}
      <div className="min-w-0">
        <p className="font-display text-3xl leading-none font-extrabold text-navy tabular-nums sm:text-4xl">
          {display}
          {suffix}
        </p>
        <p className="mt-1.5 text-sm font-semibold tracking-wide text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}
