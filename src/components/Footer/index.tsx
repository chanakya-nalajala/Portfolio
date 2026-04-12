import React from "react";
import "./styles.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          © {new Date().getFullYear()} Chanakya Nalajala
        </p>
      </div>
    </footer>
  );
};

export default Footer;
