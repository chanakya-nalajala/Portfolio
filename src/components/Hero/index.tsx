import React from "react";
import { motion } from "framer-motion";
import type { PersonalInfo } from "../../types";
import "./styles.css";

interface HeroProps {
  data: PersonalInfo;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section className="hero">
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="hero-greeting">
            Hi, I'm
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-name">
            {data.name}
          </motion.h1>

          <motion.h2 variants={itemVariants} className="hero-headline">
            {data.headline}
          </motion.h2>

          <motion.p variants={itemVariants} className="hero-subtitle">
            {data.subtitle}
          </motion.p>

          <motion.p variants={itemVariants} className="hero-summary">
            {data.summary}
          </motion.p>

          <motion.div variants={itemVariants} className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              LinkedIn →
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="scroll-mouse">
          <motion.div
            className="scroll-wheel"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
