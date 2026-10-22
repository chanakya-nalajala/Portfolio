import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  duration?: number;
}

// Infinitely scrolling row. Content is rendered twice so the loop is seamless;
// the copy is hidden from assistive tech. Pauses on hover.
export function Marquee({
  children,
  className,
  reverse = false,
  duration = 40,
}: MarqueeProps) {
  const style = {
    "--marquee-duration": `${duration}s`,
    "--marquee-gap": "0.75rem",
  } as CSSProperties;

  return (
    <div
      className={cn(
        "group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]",
        className,
      )}
      style={style}
    >
      {[0, 1].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1 || undefined}
          className={cn(
            "flex shrink-0 animate-marquee items-center gap-(--marquee-gap) pr-(--marquee-gap) group-hover:[animation-play-state:paused]",
            reverse && "[animation-direction:reverse]",
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
