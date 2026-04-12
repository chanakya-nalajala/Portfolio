import React from "react";
import type { Experience as ExperienceType } from "../../types";
import "./styles.css";

interface ExperienceProps {
  experience: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="experience-list">
          {experience.map((job, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{job.title}</h3>
                  <p className="experience-company">
                    {job.company} · {job.location}
                  </p>
                </div>
                <span className="experience-period">{job.period}</span>
              </div>
              <ul className="experience-highlights">
                {job.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
