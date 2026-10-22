import { useState } from "react";
import { motion } from "framer-motion";
import { Check, GraduationCap } from "lucide-react";
import { Badge } from "@/components/reui/badge";
import { IconTile } from "@/components/reui/icon-tile";
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/reui/timeline";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/motion/reveal";
import type { Education, Experience as ExperienceType } from "@/types";

interface ExperienceProps {
  experience: ExperienceType[];
  education: Education[];
}

const Experience = ({ experience, education }: ExperienceProps) => {
  // Steps light up as they scroll into view, so the timeline "draws" itself.
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index="01"
          label="Experience"
          title="Where I've worked"
          description="From building features to leading a delivery vertical across 18+ client accounts."
        />

        <div className="grid gap-16 lg:grid-cols-[1fr_20rem]">
          <Timeline value={activeStep} className="ms-2">
            {experience.map((job, index) => {
              const step = index + 1;
              const isCurrent = job.end === "Present";
              return (
                <TimelineItem
                  key={`${job.role}-${job.start}`}
                  step={step}
                  className="pb-12!"
                  render={
                    <motion.div
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      onViewportEnter={() =>
                        setActiveStep((current) => Math.max(current, step))
                      }
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    />
                  }
                >
                    <TimelineHeader>
                      <TimelineSeparator className="transition-colors duration-700 group-has-[+[data-completed]]/timeline-item:bg-brand" />
                      <TimelineDate className="font-mono">
                        {job.start} — {job.end}
                      </TimelineDate>
                      <TimelineTitle className="flex flex-wrap items-center gap-2 text-xl font-semibold tracking-tight">
                        {job.role}
                        {isCurrent && (
                          <Badge variant="success-light" radius="full">
                            Current
                          </Badge>
                        )}
                      </TimelineTitle>
                      <TimelineIndicator className="flex items-center justify-center transition-colors duration-500 group-data-completed/timeline-item:border-brand group-data-completed/timeline-item:bg-brand">
                        <Check className="size-2.5 text-brand-foreground opacity-0 transition-opacity duration-500 group-data-completed/timeline-item:opacity-100" />
                      </TimelineIndicator>
                    </TimelineHeader>
                    <TimelineContent className="mt-1">
                      <p className="text-sm text-foreground/80">
                        {job.company}
                        <span className="text-muted-foreground"> · {job.location}</span>
                      </p>
                      <ul className="mt-4 flex max-w-3xl flex-col gap-2.5">
                        {job.highlights.map((point) => (
                          <li
                            key={point}
                            className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:top-2.5 before:left-0 before:h-px before:w-2 before:bg-brand"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    </TimelineContent>
                </TimelineItem>
              );
            })}
          </Timeline>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h3 className="mb-4 font-mono text-xs tracking-wide text-muted-foreground uppercase">
                Education
              </h3>
              <div className="flex flex-col gap-3">
                {education.map((item) => (
                  <Card key={item.institution} size="sm" className="flex-row items-start gap-3 px-4">
                    <IconTile variant="frame" size="sm">
                      <GraduationCap />
                    </IconTile>
                    <div className="min-w-0">
                      <p className="font-medium">{item.degree}</p>
                      <p className="text-muted-foreground">
                        {item.institution}, {item.location}
                      </p>
                      <p className="mt-1 font-mono text-xs text-muted-foreground">
                        {item.start} — {item.end}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Experience;
