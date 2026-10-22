import React from "react";
import type { PersonalInfo } from "../../types";
import SectionHeader from "../SectionHeader";
import Reveal from "../Reveal";
import { ArrowUpRight } from "../Icons";
import "./styles.css";

interface ContactProps {
  data: PersonalInfo;
}

const Contact: React.FC<ContactProps> = ({ data }) => {
  const links = [
    { label: "Email", value: data.email, href: `mailto:${data.email}` },
    {
      label: "LinkedIn",
      value: data.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""),
      href: data.linkedin,
    },
    {
      label: "GitHub",
      value: data.github.replace(/^https?:\/\//, ""),
      href: data.github,
    },
  ];

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <SectionHeader index="07" label="Contact" title="Let's talk" />

        <div className="contact-grid">
          <Reveal className="contact-intro">
            <p className="contact-text">
              Open to new roles in Java development, platform migrations, or
              anything involving making systems faster and more reliable.
            </p>
            <a href={`mailto:${data.email}`} className="contact-email">
              {data.email}
              <ArrowUpRight size={28} />
            </a>
          </Reveal>

          <Reveal className="contact-links" delay={0.08}>
            <ul>
              {links.map((link) => {
                const isExternal = link.href.startsWith("http");
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="contact-link"
                      {...(isExternal && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                    >
                      <span className="mono-label">{link.label}</span>
                      <span className="contact-link-value">{link.value}</span>
                      <ArrowUpRight />
                    </a>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
