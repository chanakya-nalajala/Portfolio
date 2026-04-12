import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Migration } from "../../types";
import "./styles.css";

interface MigrationsProps {
  migrations: Migration[];
}

const Migrations: React.FC<MigrationsProps> = ({ migrations }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const selected = migrations[selectedIndex];

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="section migrations" id="migrations">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Platform Modernization Experience</h2>
          <p className="section-description">
            Led critical large-scale migrations with zero downtime and
            significant performance improvements
          </p>
        </motion.div>

        <div className="migrations-tabs">
          {migrations.map((migration, index) => (
            <button
              key={index}
              className={`migration-tab ${selectedIndex === index ? "active" : ""}`}
              onClick={() => setSelectedIndex(index)}
            >
              <span className="migration-tab-title">{migration.title}</span>
              <span className="migration-tab-timeline">
                {migration.timeline}
              </span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndex}
            className="migration-content"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="migration-meta">
              <div className="migration-meta-item">
                <span className="meta-label">Timeline</span>
                <span className="meta-value">{selected.timeline}</span>
              </div>
              <div className="migration-meta-item">
                <span className="meta-label">Scope</span>
                <span className="meta-value">{selected.scope}</span>
              </div>
            </div>

            <div className="migration-section">
              <h3 className="migration-section-title">Challenges</h3>
              <ul className="migration-list">
                {selected.challenges.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="migration-section">
              <h3 className="migration-section-title">Approach</h3>
              <ul className="migration-list">
                {selected.approach.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="migration-impact">
              <div className="impact-label">Impact</div>
              <div className="impact-text">{selected.impact}</div>
            </div>

            <div className="migration-tech">
              {selected.technologies.map((tech, i) => (
                <span key={i} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Migrations;
