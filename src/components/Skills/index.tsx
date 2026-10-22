import { motion } from "framer-motion";
import { Badge } from "@/components/reui/badge";
import { Frame, FramePanel } from "@/components/reui/frame";
import { SectionHeader } from "@/components/shared/section-header";
import { Marquee } from "@/components/motion/marquee";
import { Reveal, staggerContainer, staggerItem } from "@/components/motion/reveal";
import { skillCategories } from "@/data/skillCategories";
import type { Skills as SkillsType } from "@/types";

interface SkillsProps {
  skills: SkillsType;
}

const SkillPill = ({ label }: { label: string }) => (
  <span className="rounded-full border bg-background px-4 py-2 font-mono text-sm whitespace-nowrap text-muted-foreground shadow-xs">
    {label}
  </span>
);

const Skills = ({ skills }: SkillsProps) => {
  const allSkills = Array.from(new Set(Object.values(skills).flat()));
  const half = Math.ceil(allSkills.length / 2);

  return (
    <section id="skills" className="border-t bg-muted/30 py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index="06"
          label="Stack"
          title="Tech stack"
          description="Tools I use regularly and actually know how to use."
        />
      </div>

      <Reveal className="mb-12 flex flex-col gap-3">
        <Marquee duration={55}>
          {allSkills.slice(0, half).map((skill) => (
            <SkillPill key={skill} label={skill} />
          ))}
        </Marquee>
        <Marquee duration={55} reverse>
          {allSkills.slice(half).map((skill) => (
            <SkillPill key={skill} label={skill} />
          ))}
        </Marquee>
      </Reveal>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal>
          <Frame>
            <motion.div
              className="flex flex-col gap-1"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {skillCategories.map((category) => (
                <motion.div key={category.key} variants={staggerItem} className="flex">
                  <FramePanel className="grid gap-3 sm:grid-cols-[13rem_1fr] sm:items-center">
                    <h3 className="text-sm font-medium">{category.name}</h3>
                    <ul className="flex flex-wrap gap-1.5">
                      {skills[category.key].map((skill) => (
                        <li key={skill}>
                          <Badge variant="outline" size="lg" className="font-mono font-normal">
                            {skill}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </FramePanel>
                </motion.div>
              ))}
            </motion.div>
          </Frame>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
