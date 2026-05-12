import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
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
      <div className="app">
        <Header name={resumeData.personal.name} />

        <Hero data={resumeData.personal} />
        <Highlights highlights={resumeData.highlights} />
        <Expertise expertiseAreas={resumeData.expertiseAreas} />
        <Migrations migrations={resumeData.migrations} />
        <EngineeringDepth engineeringDepth={resumeData.engineeringDepth} />
        <Projects projects={resumeData.projects} />
        <Skills skills={resumeData.skills} />
        <Contact data={resumeData.personal} />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
