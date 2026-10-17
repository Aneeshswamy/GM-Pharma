/**
 * Coordinated accent tones used to distinguish card categories
 * (services, capabilities, values ...). Class strings are written out in full
 * so Tailwind can detect them at build time.
 */
export interface Tone {
  /** Soft tinted icon tile */
  iconSoft: string;
  /** Solid gradient icon tile */
  iconSolid: string;
  /** Accent text color (AA on white) */
  text: string;
  /** Top bar / indicator (decorative, no text) */
  bar: string;
  /** Solid badge background that carries white text (AA contrast) */
  pill: string;
  /** Hover border */
  hoverBorder: string;
}

export const tones: Tone[] = [
  {
    iconSoft: "bg-primary/10 text-primary",
    iconSolid: "bg-gradient-to-br from-primary to-sky text-white",
    text: "text-primary",
    bar: "bg-primary",
    pill: "bg-primary",
    hoverBorder: "hover:border-primary/40",
  },
  {
    iconSoft: "bg-teal/12 text-teal-deep",
    iconSolid: "bg-gradient-to-br from-teal-deep to-teal text-white",
    text: "text-teal-deep",
    bar: "bg-teal",
    pill: "bg-teal-deep",
    hoverBorder: "hover:border-teal/50",
  },
  {
    iconSoft: "bg-green/12 text-green-deep",
    iconSolid: "bg-gradient-to-br from-green-deep to-green text-white",
    text: "text-green-deep",
    bar: "bg-green",
    pill: "bg-green-deep",
    hoverBorder: "hover:border-green/50",
  },
  {
    iconSoft: "bg-sky/12 text-primary-deep",
    iconSolid: "bg-gradient-to-br from-primary-deep to-teal text-white",
    text: "text-primary-deep",
    bar: "bg-sky",
    pill: "bg-primary-deep",
    hoverBorder: "hover:border-sky/50",
  },
];

export function toneAt(index: number): Tone {
  return tones[index % tones.length] ?? tones[0]!;
}
