import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Building2, FolderGit2, MessagesSquare, Workflow } from "lucide-react";
import { Badge } from "@/components/reui/badge";
import { IconTile } from "@/components/reui/icon-tile";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import { staggerContainer, staggerItem } from "@/components/motion/reveal";
import type { Project } from "@/types";

interface ProjectsProps {
  projects: Project[];
}

const iconRules: Array<[RegExp, ReactNode]> = [
  [/tenant|onboarding/i, <Building2 key="building" />],
  [/chat|document/i, <MessagesSquare key="chat" />],
  [/workflow/i, <Workflow key="workflow" />],
];

// Match on the project name first; fall back to the description.
const iconFor = (project: Project): ReactNode =>
  (iconRules.find(([pattern]) => pattern.test(project.name)) ??
    iconRules.find(([pattern]) => pattern.test(project.description)))?.[1] ?? (
    <FolderGit2 />
  );

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index="05"
          label="Projects"
          title="Selected projects"
          description="Stuff I've worked on that's actually running in production."
        />

        <motion.div
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group relative h-full"
            >
              {/* Shimmering brand line that sweeps across the top edge on hover */}
              <div
                aria-hidden="true"
                className="absolute inset-x-6 top-0 z-10 h-px animate-shimmer bg-[linear-gradient(90deg,transparent,var(--brand),transparent)] bg-[length:200%_100%] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <Card className="h-full transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-black/5 dark:group-hover:shadow-black/30">
                <CardHeader className="gap-4">
                  <div className="flex items-center justify-between">
                    <IconTile variant="frame" size="lg">
                      {iconFor(project)}
                    </IconTile>
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-semibold tracking-tight">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <dl className="flex flex-col divide-y rounded-lg border">
                    {[
                      ["Problem", project.problem],
                      ["Solution", project.solution],
                      ["Impact", project.outcome],
                    ].map(([label, text]) => (
                      <div key={label} className="flex flex-col gap-1 p-3">
                        <dt className="font-mono text-[0.7rem] tracking-wide text-brand uppercase">
                          {label}
                        </dt>
                        <dd className="leading-relaxed text-muted-foreground">{text}</dd>
                      </div>
                    ))}
                  </dl>
                </CardContent>
                <CardFooter className="flex-wrap gap-1.5 border-t bg-muted/40 py-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="font-mono font-normal">
                      {tech}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
