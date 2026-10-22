import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Migration } from "../../types";
import SectionHeader from "../SectionHeader";
import "./styles.css";

interface MigrationsProps {
  migrations: Migration[];
}

const Migrations: React.FC<MigrationsProps> = ({ migrations }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const selected = migrations[selectedIndex];

  const contentVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
    },
    exit: {
      opacity: 0,
      y: -8,
      transition: { duration: 0.2 },
    },
  };

  // Arrow keys move between tabs, per the WAI-ARIA tabs pattern.
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const keys = ["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft"];
    if (!keys.includes(e.key)) return;
    e.preventDefault();
    const step = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : -1;
    const next = (selectedIndex + step + migrations.length) % migrations.length;
    setSelectedIndex(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className="section section-alt migrations" id="migrations">
      <div className="container">
        <SectionHeader
          index="03"
          label="Migrations"
          title="Major migrations I've led"
          description="Big version upgrades without breaking production."
        />

        <div className="migrations-layout">
          <div
            className="migrations-tabs"
            role="tablist"
            aria-label="Migrations"
            aria-orientation="vertical"
          >
            {migrations.map((migration, index) => (
              <button
                key={migration.title}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                type="button"
                role="tab"
                id={`migration-tab-${index}`}
                aria-selected={selectedIndex === index}
                aria-controls="migration-panel"
                tabIndex={selectedIndex === index ? 0 : -1}
                className={`migration-tab ${selectedIndex === index ? "active" : ""}`}
                onClick={() => setSelectedIndex(index)}
                onKeyDown={handleKeyDown}
              >
                <span className="migration-tab-index mono-label">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="migration-tab-text">
                  <span className="migration-tab-title">{migration.title}</span>
                  <span className="migration-tab-timeline mono-label">
                    {migration.timeline}
                  </span>
                </span>
              </button>
            ))}
          </div>

          <div
            className="migration-panel"
            role="tabpanel"
            id="migration-panel"
            aria-labelledby={`migration-tab-${selectedIndex}`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="migration-header">
                  <h3 className="migration-title">{selected.title}</h3>
                  <dl className="migration-meta">
                    <div>
                      <dt className="mono-label">Timeline</dt>
                      <dd>{selected.timeline}</dd>
                    </div>
                    <div>
                      <dt className="mono-label">Scope</dt>
                      <dd>{selected.scope}</dd>
                    </div>
                  </dl>
                </div>

                <div className="migration-columns">
                  <div>
                    <h4 className="migration-list-title mono-label">
                      Challenges
                    </h4>
                    <ul className="migration-list">
                      {selected.challenges.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="migration-list-title mono-label">
                      Approach
                    </h4>
                    <ul className="migration-list">
                      {selected.approach.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="migration-impact">
                  <span className="mono-label">Impact</span>
                  <p>{selected.impact}</p>
                </div>

                <div className="tag-list">
                  {selected.technologies.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Migrations;
