import React from "react";
import type { ExpertiseArea } from "../../types";
import SectionHeader from "../SectionHeader";
import Reveal from "../Reveal";
import "./styles.css";

interface ExpertiseProps {
  expertiseAreas: ExpertiseArea[];
}

const Expertise: React.FC<ExpertiseProps> = ({ expertiseAreas }) => {
  return (
    <section className="section expertise" id="expertise">
      <div className="container">
        <SectionHeader
          index="02"
          label="Expertise"
          title="What I'm good at"
          description="Things I've done enough times to know the gotchas."
        />

        <div className="expertise-grid">
          {expertiseAreas.map((area, index) => (
            <Reveal
              key={area.title}
              className="expertise-item"
              delay={(index % 3) * 0.08}
            >
              <div className="expertise-meta mono-label">
                <span className="expertise-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{area.level}</span>
              </div>
              <h3 className="expertise-title">{area.title}</h3>
              <p className="expertise-description">{area.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
