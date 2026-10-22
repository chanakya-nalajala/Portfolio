import React from "react";
import type { Highlight } from "../../types";
import Reveal from "../Reveal";
import "./styles.css";

interface HighlightsProps {
  highlights: Highlight[];
}

const Highlights: React.FC<HighlightsProps> = ({ highlights }) => {
  return (
    <section className="highlights" aria-label="Highlights">
      <div className="container">
        <dl className="highlights-grid">
          {highlights.map((item, index) => (
            <Reveal key={item.label} className="highlight" delay={index * 0.08}>
              <dt className="highlight-label mono-label">{item.label}</dt>
              <dd className="highlight-number">{item.number}</dd>
              <dd className="highlight-subtext">{item.subtext}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Highlights;
