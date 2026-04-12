import React from "react";
import type { EngineeringDepth as EngineeringDepthType } from "../../types";
import "./styles.css";

interface EngineeringDepthProps {
  engineeringDepth: EngineeringDepthType;
}

const EngineeringDepth: React.FC<EngineeringDepthProps> = ({
  engineeringDepth,
}) => {
  const sections: Array<{ key: keyof EngineeringDepthType; label: string }> = [
    { key: "performance", label: "Performance Optimization" },
    { key: "architecture", label: "Architecture & Scale" },
    { key: "security", label: "Security & IAM" },
  ];

  return (
    <section className="section engineering-depth" id="engineering">
      <div className="container">
        <h2 className="section-title">Some Things I've Built</h2>

        {sections.map((section) => (
          <div key={section.key} className="depth-section">
            <h3 className="depth-section-title">{section.label}</h3>
            <div className="depth-list">
              {engineeringDepth[section.key]?.map((item, index) => (
                <div key={index} className="depth-item">
                  <div className="depth-item-header">
                    <h4 className="depth-item-title">{item.title}</h4>
                    <span className="depth-impact">{item.impact}</span>
                  </div>
                  <p className="depth-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EngineeringDepth;
