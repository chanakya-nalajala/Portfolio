import React from "react";
import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Experience from "./components/Experience";
import Expertise from "./components/Expertise";
import Migrations from "./components/Migrations";
import EngineeringDepth from "./components/EngineeringDepth";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { resumeData } from "./data/resume";
import "./App.css";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <div className="app">
          <Header name={resumeData.personal.name} />
          <main>
            <Hero data={resumeData.personal} />
            <Highlights highlights={resumeData.highlights} />
            <Experience
              experience={resumeData.experience}
              education={resumeData.education}
            />
            <Expertise expertiseAreas={resumeData.expertiseAreas} />
            <Migrations migrations={resumeData.migrations} />
            <EngineeringDepth engineeringDepth={resumeData.engineeringDepth} />
            <Projects projects={resumeData.projects} />
            <Skills skills={resumeData.skills} />
            <Contact data={resumeData.personal} />
          </main>
          <Footer name={resumeData.personal.name} />
        </div>
      </MotionConfig>
    </ThemeProvider>
  );
};

export default App;
