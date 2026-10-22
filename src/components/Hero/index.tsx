import React from "react";
import { motion } from "framer-motion";
import type { PersonalInfo, ResumeData } from "../../types";
import { ArrowRight } from "../Icons";
import ResumeDownload from "../ResumeDownload";
import "./styles.css";

interface HeroProps {
  data: PersonalInfo;
  resume: ResumeData;
}

const Hero: React.FC<HeroProps> = ({ data, resume }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  // "Hyderabad, Telangana, India" -> "Hyderabad, India"
  const locationParts = data.location.split(",").map((part) => part.trim());
  const shortLocation = `${locationParts[0]}, ${locationParts[locationParts.length - 1]}`;

  return (
    <section className="hero" id="top">
      <motion.div
        className="container hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="hero-meta mono-label">
          <span className="hero-status">
            <span className="status-dot" aria-hidden="true" />
            Open to new roles
          </span>
          <span>{shortLocation}</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="hero-name">
          {data.name}
        </motion.h1>

        <div className="hero-grid">
          <motion.div variants={itemVariants} className="hero-intro">
            <p className="hero-title mono-label">{data.title}</p>
            <p className="hero-headline">{data.headline}</p>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-body">
            <p className="hero-subtitle">{data.subtitle}</p>
            <p className="hero-summary">{data.summary}</p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">
                Get in touch
                <ArrowRight />
              </a>
              <ResumeDownload
                data={resume}
                className="btn btn-ghost btn-download"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
