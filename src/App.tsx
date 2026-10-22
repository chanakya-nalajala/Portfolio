import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "@/context/ThemeContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Experience from "@/components/Experience";
import Expertise from "@/components/Expertise";
import Migrations from "@/components/Migrations";
import EngineeringDepth from "@/components/EngineeringDepth";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { resumeData } from "@/data/resume";

const App = () => {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <TooltipProvider>
          <ScrollProgress />
          <Header resume={resumeData} />
          <main>
            <Hero resume={resumeData} />
            <Highlights
              summary={resumeData.personal.summary}
              highlights={resumeData.highlights}
            />
            <Experience
              experience={resumeData.experience}
              education={resumeData.education}
            />
            <Expertise expertiseAreas={resumeData.expertiseAreas} />
            <Migrations migrations={resumeData.migrations} />
            <EngineeringDepth engineeringDepth={resumeData.engineeringDepth} />
            <Projects projects={resumeData.projects} />
            <Skills skills={resumeData.skills} />
            <Contact resume={resumeData} />
          </main>
          <Footer name={resumeData.personal.name} />
          <Toaster position="bottom-right" richColors closeButton />
        </TooltipProvider>
      </MotionConfig>
    </ThemeProvider>
  );
};

export default App;
