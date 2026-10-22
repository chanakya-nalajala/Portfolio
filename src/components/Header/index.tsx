import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "../ThemeToggle";
import "./styles.css";

interface HeaderProps {
  name: string;
}

const navItems = [
  { label: "Experience", id: "experience" },
  { label: "Expertise", id: "expertise" },
  { label: "Migrations", id: "migrations" },
  { label: "Engineering", id: "engineering" },
  { label: "Projects", id: "projects" },
  { label: "Stack", id: "skills" },
  { label: "Contact", id: "contact" },
];

const getInitials = (name: string): string =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const Header: React.FC<HeaderProps> = ({ name }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight the nav item for the section crossing the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    // "top" (the hero) has no nav item, so reaching it clears the highlight.
    ["top", ...navItems.map((item) => item.id)].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`header ${isScrolled || isMenuOpen ? "scrolled" : ""}`}>
      <div className="header-container">
        <a href="#top" className="header-logo" onClick={closeMenu}>
          <span className="header-monogram" aria-hidden="true">
            {getInitials(name)}
          </span>
          <span className="header-name">{name}</span>
        </a>

        <div className="header-right">
          <nav className="desktop-nav" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${activeId === item.id ? "active" : ""}`}
                aria-current={activeId === item.id ? "true" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
          <button
            type="button"
            className="menu-button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="mobile-nav"
            className="mobile-nav"
            aria-label="Primary"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <div className="mobile-nav-inner">
              {navItems.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="mobile-nav-link"
                  onClick={closeMenu}
                >
                  <span className="mono-label">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
