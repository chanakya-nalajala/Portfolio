import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

interface AnimatedNumberProps {
  // Display value such as "6+", "35%" or "18+"; the leading number counts up.
  value: string;
  className?: string;
  duration?: number;
}

export function AnimatedNumber({
  value,
  className,
  duration = 1.6,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();

  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);

  useEffect(() => {
    const node = ref.current;
    if (!node || !match || !inView) return;
    const [, prefix, number, suffix] = match;
    const target = parseFloat(number);
    if (reduceMotion) {
      node.textContent = value;
      return;
    }
    const controls = animate(0, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        node.textContent = `${prefix}${Math.round(latest)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, value, duration, reduceMotion]);

  // Render the final value up front so it is correct without JS and for screen readers.
  return (
    <span ref={ref} className={className} aria-label={value}>
      {match && !reduceMotion ? `${match[1]}0${match[3]}` : value}
    </span>
  );
}
