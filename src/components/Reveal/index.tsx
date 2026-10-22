import React from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
}

// Fades and lifts its children into place the first time they scroll into view.
const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  delay = 0,
  as = "div",
}) => {
  const Component = as === "li" ? motion.li : motion.div;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay }}
    >
      {children}
    </Component>
  );
};

export default Reveal;
