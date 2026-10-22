import React from "react";
import type { Skills as SkillsType } from "../../types";
import SectionHeader from "../SectionHeader";
import Reveal from "../Reveal";
import { skillCategories } from "../../data/skillCategories";
import "./styles.css";

interface SkillsProps {
  skills: SkillsType;
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <SectionHeader
          index="06"
          label="Stack"
          title="Tech stack"
          description="Tools I use regularly and actually know how to use."
        />

        <div className="skills-table">
          {skillCategories.map((category) => (
            <Reveal key={category.key} className="skill-row">
              <h3 className="skill-category-name">{category.name}</h3>
              <ul className="tag-list">
                {skills[category.key].map((skill) => (
                  <li key={skill} className="tag">
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
