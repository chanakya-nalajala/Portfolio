import React from "react";
import { motion } from "framer-motion";
import type { PersonalInfo } from "../../types";
import "./styles.css";

interface ContactProps {
  data: PersonalInfo;
}

const Contact: React.FC<ContactProps> = ({ data }) => {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <h2 className="contact-title">Let's Talk</h2>
          <p className="contact-text">
            Open to new roles in Java development, platform migrations, or
            anything involving making systems faster and more reliable.
          </p>
          <div className="contact-actions">
            <a
              href={`mailto:${data.email}`}
              className="btn btn-primary btn-large"
            >
              Send Email
            </a>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-large"
            >
              LinkedIn Profile
            </a>
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-large"
            >
              GitHub Profile
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
