import React from "react";
import type { EngineeringDepth as EngineeringDepthType } from "../../types";
import SectionHeader from "../SectionHeader";
import Reveal from "../Reveal";
import "./styles.css";

interface EngineeringDepthProps {
  engineeringDepth: EngineeringDepthType;
}

const EngineeringDepth: React.FC<EngineeringDepthProps> = ({
  engineeringDepth,
}) => {
  const sections: Array<{ key: keyof EngineeringDepthType; label: string }> = [
    { key: "performance", label: "Performance" },
    { key: "architecture", label: "Architecture & scale" },
    { key: "security", label: "Security & IAM" },
  ];

  return (
    <section className="section engineering-depth" id="engineering">
      <div className="container">
        <SectionHeader
          index="04"
          label="Engineering"
          title="Some things I've built"
          description="The engineering behind the numbers, grouped by the problem it solved."
        />

        {sections.map((section) => (
          <div key={section.key} className="depth-group">
            <Reveal className="depth-group-label">
              <h3 className="depth-group-title">{section.label}</h3>
              <span className="mono-label">
                {String(engineeringDepth[section.key].length).padStart(2, "0")}{" "}
                items
              </span>
            </Reveal>

            <div className="depth-list">
              {engineeringDepth[section.key].map((item) => (
                <Reveal key={item.title} className="depth-item">
                  <div className="depth-item-header">
                    <h4 className="depth-item-title">{item.title}</h4>
                    <span className="depth-impact">{item.impact}</span>
                  </div>
                  <p className="depth-description">{item.description}</p>
                  <p className="depth-tech">{item.tech}</p>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EngineeringDepth;
