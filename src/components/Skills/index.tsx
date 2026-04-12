import React from "react";
import { motion } from "framer-motion";
import type { Skills as SkillsType } from "../../types";
import "./styles.css";

interface SkillsProps {
  skills: SkillsType;
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const categories: Array<{ name: string; key: keyof SkillsType }> = [
    { name: "Backend & Spring Ecosystem", key: "backend" },
    { name: "Frontend Technologies", key: "frontend" },
    { name: "Security & IAM", key: "security" },
    { name: "Database & Optimization", key: "data" },
    { name: "Caching & Performance", key: "performance" },
    { name: "AI & RAG", key: "ai" },
    { name: "DevOps & Tools", key: "devops" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-description">
            Tools I use regularly and actually know how to use
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.key}
              variants={itemVariants}
              className="skill-category"
            >
              <h3 className="skill-category-name">{category.name}</h3>
              <div className="skill-tags">
                {skills[category.key]?.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
