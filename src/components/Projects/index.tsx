import React from "react";
import type { Project } from "../../types";
import SectionHeader from "../SectionHeader";
import Reveal from "../Reveal";
import "./styles.css";

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="section section-alt projects" id="projects">
      <div className="container">
        <SectionHeader
          index="05"
          label="Projects"
          title="Selected projects"
          description="Stuff I've worked on that's actually running in production."
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal
              key={project.name}
              className="project-card"
              delay={(index % 2) * 0.08}
            >
              <span className="project-index mono-label">
                Project {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>

              <dl className="project-details">
                <div className="project-detail">
                  <dt className="mono-label">Problem</dt>
                  <dd>{project.problem}</dd>
                </div>
                <div className="project-detail">
                  <dt className="mono-label">Solution</dt>
                  <dd>{project.solution}</dd>
                </div>
                <div className="project-detail">
                  <dt className="mono-label">Impact</dt>
                  <dd>{project.outcome}</dd>
                </div>
              </dl>

              <div className="tag-list">
                {project.tech.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
