export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  website: string;
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
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  start: string;
  end: string;
}

export interface Skills {
  languages: string[];
  backend: string[];
  frontend: string[];
  patterns: string[];
  security: string[];
  performance: string[];
  data: string[];
  devops: string[];
  ai: string[];
}

export interface ResumeData {
  personal: PersonalInfo;
  highlights: Highlight[];
  experience: Experience[];
  education: Education[];
  expertiseAreas: ExpertiseArea[];
  migrations: Migration[];
  engineeringDepth: EngineeringDepth;
  skills: Skills;
  projects: Project[];
}
