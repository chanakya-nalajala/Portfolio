import React from "react";
import { ArrowUp } from "../Icons";
import "./styles.css";

interface FooterProps {
  name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-text">
          © {new Date().getFullYear()} {name}
        </p>
        <a href="#top" className="footer-top mono-label">
          Back to top
          <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
