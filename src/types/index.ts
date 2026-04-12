export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
  headline: string;
}

export interface Highlight {
  number: string;
  label: string;
  subtext: string;
}

export interface ExpertiseArea {
  title: string;
  icon: string;
  description: string;
  level: string;
}

export interface Migration {
  title: string;
  timeline: string;
  scope: string;
  challenges: string[];
  approach: string[];
  impact: string;
  technologies: string[];
}

export interface EngineeringItem {
  title: string;
  description: string;
  impact: string;
  tech: string;
}

export interface EngineeringDepth {
  performance: EngineeringItem[];
  architecture: EngineeringItem[];
  security: EngineeringItem[];
}

export interface Project {
  name: string;
  description: string;
  problem: string;
  solution: string;
  outcome: string;
  tech: string[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Skills {
  backend: string[];
  frontend: string[];
  security: string[];
  data: string[];
  performance: string[];
  ai: string[];
  devops: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface ResumeData {
  personal: PersonalInfo;
  highlights: Highlight[];
  expertiseAreas: ExpertiseArea[];
  migrations: Migration[];
  engineeringDepth: EngineeringDepth;
  skills: Skills;
  projects: Project[];
  experience: Experience[];
  education: Education[];
}
