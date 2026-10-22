import type { Skills } from "../types";

// Display order and labels for skill groups, shared by the Skills section and the PDF resume.
export const skillCategories: Array<{ name: string; key: keyof Skills }> = [
  { name: "Languages", key: "languages" },
  { name: "Backend", key: "backend" },
  { name: "Frontend", key: "frontend" },
  { name: "Patterns", key: "patterns" },
  { name: "Security & IAM", key: "security" },
  { name: "Caching & performance", key: "performance" },
  { name: "Databases", key: "data" },
  { name: "DevOps & tooling", key: "devops" },
  { name: "AI & RAG", key: "ai" },
];
