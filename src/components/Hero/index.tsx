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
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
