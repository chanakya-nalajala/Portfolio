import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Mail, MapPin } from "lucide-react";
import { Badge } from "@/components/reui/badge";
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame";
import { IconTile } from "@/components/reui/icon-tile";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GitHubIcon, LinkedInIcon } from "@/components/shared/brand-icons";
import ResumeDownload from "@/components/ResumeDownload";
import type { ResumeData } from "@/types";

interface HeroProps {
  resume: ResumeData;
}

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease },
  },
};

const Hero = ({ resume }: HeroProps) => {
  const { personal } = resume;
  const current = resume.experience[0];

  // "Hyderabad, Telangana, India" -> "Hyderabad, India"
  const locationParts = personal.location.split(",").map((part) => part.trim());
  const shortLocation = `${locationParts[0]}, ${locationParts[locationParts.length - 1]}`;

  const socials = [
    { label: "Email", href: `mailto:${personal.email}`, icon: <Mail /> },
    { label: "LinkedIn", href: personal.linkedin, icon: <LinkedInIcon /> },
    { label: "GitHub", href: personal.github, icon: <GitHubIcon /> },
  ];

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 md:pb-28"
    >
      {/* Background: dotted grid plus a slowly drifting brand glow */}
      <div aria-hidden="true" className="bg-dot-grid absolute inset-0 -z-10" />
      <motion.div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 -z-10 size-[42rem] rounded-full bg-brand/20 blur-3xl dark:bg-brand/15"
        animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7], x: ["-50%", "-44%", "-50%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.35fr_1fr]">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div variants={item}>
            <Badge
              variant="outline"
              radius="full"
              size="xl"
              className="gap-2 bg-background/60 font-normal backdrop-blur"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping-slow rounded-full bg-success opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-success" />
              </span>
              Open to new roles
            </Badge>
          </motion.div>

          <h1 className="mt-6 text-5xl font-semibold tracking-tighter text-balance sm:text-6xl md:text-7xl">
            {personal.name.split(" ").map((word) => (
              <motion.span
                key={word}
                variants={item}
                className="mr-[0.25em] inline-block last:mr-0"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            variants={item}
            className="mt-4 font-mono text-sm tracking-wide text-brand uppercase"
          >
            {personal.title}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-xl text-pretty text-muted-foreground sm:text-2xl"
          >
            {personal.headline}.{" "}
            <span className="text-foreground">{personal.subtitle}.</span>
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Button
              size="lg"
              className="group h-11 px-5"
              render={<a href="#contact" />}
              nativeButton={false}
            >
              Get in touch
              <ArrowRight
                data-icon="inline-end"
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Button>
            <ResumeDownload
              data={resume}
              variant="outline"
              size="lg"
              className="h-11 px-5"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32, filter: "blur(8px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease, delay: 0.45 }}
        >
          <Frame className="shadow-xl shadow-black/5 dark:shadow-black/40">
            <FrameHeader>
              <FrameTitle>Currently</FrameTitle>
              <FrameDescription>What I'm working on right now</FrameDescription>
            </FrameHeader>
            <FramePanel className="flex items-start gap-3">
              <IconTile variant="soft" className="text-brand">
                <Briefcase />
              </IconTile>
              <div className="min-w-0">
                <p className="font-medium">{current.role}</p>
                <p className="text-sm text-muted-foreground">
                  {current.company}
                </p>
                <Badge variant="success-light" className="mt-2">
                  Since {current.start}
                </Badge>
              </div>
            </FramePanel>
            <FramePanel className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <IconTile variant="soft" className="text-brand">
                  <MapPin />
                </IconTile>
                <div>
                  <p className="text-sm text-muted-foreground">Based in</p>
                  <p className="font-medium">{shortLocation}</p>
                </div>
              </div>
              <div className="flex gap-1">
                {socials.map((social) => (
                  <Tooltip key={social.label}>
                    <TooltipTrigger
                      render={
                        <Button
                          variant="outline"
                          size="icon"
                          render={
                            <a
                              href={social.href}
                              target={social.href.startsWith("http") ? "_blank" : undefined}
                              rel="noopener noreferrer"
                              aria-label={social.label}
                            />
                          }
                          nativeButton={false}
                        />
                      }
                    >
                      {social.icon}
                    </TooltipTrigger>
                    <TooltipContent>{social.label}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </FramePanel>
          </Frame>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
