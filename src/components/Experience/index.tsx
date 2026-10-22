import React from "react";
import type { Education, Experience as ExperienceType } from "../../types";
import SectionHeader from "../SectionHeader";
import Reveal from "../Reveal";
import "./styles.css";

interface ExperienceProps {
  experience: ExperienceType[];
  education: Education[];
}

const Experience: React.FC<ExperienceProps> = ({ experience, education }) => {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <SectionHeader
          index="01"
          label="Experience"
          title="Where I've worked"
          description="From building features to leading a delivery vertical across 18+ client accounts."
        />

        <ol className="roles">
          {experience.map((job) => (
            <Reveal as="li" key={`${job.role}-${job.start}`} className="role">
              <div className="role-aside">
                <p className="mono-label">
                  {job.start} — {job.end}
                </p>
                {job.end === "Present" && (
                  <span className="role-current mono-label">Current</span>
                )}
              </div>
              <div>
                <h3 className="role-title">{job.role}</h3>
                <p className="role-company">
                  {job.company}
                  <span className="role-location"> · {job.location}</span>
                </p>
                <ul className="role-highlights">
                  {job.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>

        <div className="education">
          <h3 className="education-heading mono-label">Education</h3>
          <ul>
            {education.map((item) => (
              <Reveal as="li" key={item.institution} className="education-item">
                <p className="mono-label">
                  {item.start} — {item.end}
                </p>
                <div>
                  <p className="education-degree">{item.degree}</p>
                  <p className="education-institution">
                    {item.institution}, {item.location}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
