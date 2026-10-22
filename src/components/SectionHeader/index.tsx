import React from "react";
import Reveal from "../Reveal";
import "./styles.css";

interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
  description?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  index,
  label,
  title,
  description,
}) => (
  <Reveal className="section-header">
    <div className="section-eyebrow mono-label">
      <span className="section-index">{index}</span>
      <span>{label}</span>
    </div>
    <div className="section-heading">
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  </Reveal>
);

export default SectionHeader;
