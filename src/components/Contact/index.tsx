import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/reui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GitHubIcon, LinkedInIcon } from "@/components/shared/brand-icons";
import { Reveal } from "@/components/motion/reveal";
import ResumeDownload from "@/components/ResumeDownload";
import type { ResumeData } from "@/types";

interface ContactProps {
  resume: ResumeData;
}

const Contact = ({ resume }: ContactProps) => {
  const { personal } = resume;
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      toast.success("Email copied", { description: personal.email });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy", { description: personal.email });
    }
  };

  const links = [
    { label: "LinkedIn", href: personal.linkedin, icon: <LinkedInIcon /> },
    { label: "GitHub", href: personal.github, icon: <GitHubIcon /> },
  ];

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal>
          <Card className="relative isolate overflow-hidden px-6 py-14 text-center sm:px-12 md:py-20">
            {/* Slowly breathing brand glow behind the card content */}
            <motion.div
              aria-hidden="true"
              className="absolute top-0 left-1/2 -z-10 h-64 w-[36rem] rounded-full bg-brand/20 blur-3xl"
              initial={{ x: "-50%", y: "-60%" }}
              animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.05, 0.9] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <div aria-hidden="true" className="bg-dot-grid absolute inset-0 -z-10 opacity-60" />

            <Badge
              variant="outline"
              radius="full"
              size="xl"
              className="mx-auto gap-2 bg-background/60 font-mono font-normal backdrop-blur"
            >
              <span className="text-brand">07</span>
              <span className="text-muted-foreground">Contact</span>
            </Badge>
            <h2 className="mx-auto mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
              Let's talk
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-pretty text-muted-foreground sm:text-lg">
              Open to new roles in Java development, platform migrations, or
              anything involving making systems faster and more reliable.
            </p>

            <div className="mx-auto mt-8 flex w-full max-w-md items-center gap-1 rounded-xl border bg-background/80 p-1.5 shadow-xs backdrop-blur">
              <Mail className="ml-2 size-4 shrink-0 text-muted-foreground" />
              <a
                href={`mailto:${personal.email}`}
                className="min-w-0 flex-1 truncate px-2 text-left font-medium hover:text-brand"
              >
                {personal.email}
              </a>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={copyEmail}
                      aria-label="Copy email address"
                    />
                  }
                >
                  {copied ? <Check className="text-success" /> : <Copy />}
                </TooltipTrigger>
                <TooltipContent>{copied ? "Copied" : "Copy email"}</TooltipContent>
              </Tooltip>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <Button
                size="lg"
                className="h-11 px-5"
                render={<a href={`mailto:${personal.email}`} />}
                nativeButton={false}
              >
                <Mail data-icon="inline-start" />
                Send email
              </Button>
              <ResumeDownload data={resume} variant="outline" size="lg" className="h-11 px-5" />
              {links.map((link) => (
                <Button
                  key={link.label}
                  variant="outline"
                  size="lg"
                  className="group h-11 px-5"
                  render={<a href={link.href} target="_blank" rel="noopener noreferrer" />}
                  nativeButton={false}
                >
                  {link.icon}
                  {link.label}
                  <ArrowUpRight
                    data-icon="inline-end"
                    className="text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Button>
              ))}
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
