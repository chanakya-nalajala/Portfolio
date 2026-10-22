import React from "react";
import type { Skills as SkillsType } from "../../types";
import SectionHeader from "../SectionHeader";
import Reveal from "../Reveal";
import "./styles.css";

interface SkillsProps {
  skills: SkillsType;
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const categories: Array<{ name: string; key: keyof SkillsType }> = [
    { name: "Languages", key: "languages" },
    { name: "Backend", key: "backend" },
    { name: "Frontend", key: "frontend" },
    { name: "Patterns", key: "patterns" },
    { name: "Security & IAM", key: "security" },
    { name: "Caching & performance", key: "performance" },
    { name: "Databases", key: "data" },
    { name: "DevOps & tooling", key: "devops" },
    { name: "AI & RAG", key: "ai" },
  ];

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
          {categories.map((category) => (
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
