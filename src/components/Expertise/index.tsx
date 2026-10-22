import type { MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Gauge,
  Layers,
  Network,
  RefreshCw,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/reui/badge";
import { IconTile } from "@/components/reui/icon-tile";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import { staggerContainer, staggerItem } from "@/components/motion/reveal";
import type { ExpertiseArea } from "@/types";

interface ExpertiseProps {
  expertiseAreas: ExpertiseArea[];
}

// Icons are chosen by keyword so the data file stays free of presentation details.
const iconRules: Array<[RegExp, ReactNode]> = [
  [/microservice|spring/i, <Server key="server" />],
  [/full-stack/i, <Layers key="layers" />],
  [/modernization|migration/i, <RefreshCw key="refresh" />],
  [/performance/i, <Gauge key="gauge" />],
  [/security|tenancy/i, <ShieldCheck key="shield" />],
  [/event/i, <Network key="network" />],
];

const iconFor = (title: string): ReactNode =>
  iconRules.find(([pattern]) => pattern.test(title))?.[1] ?? <Sparkles />;

// Tracks the cursor so a soft brand-colored glow follows it across the card.
const handleSpotlight = (event: MouseEvent<HTMLDivElement>) => {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
};

const Expertise = ({ expertiseAreas }: ExpertiseProps) => {
  return (
    <section id="expertise" className="border-t bg-muted/30 py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index="02"
          label="Expertise"
          title="What I'm good at"
          description="Things I've done enough times to know the gotchas."
        />

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {expertiseAreas.map((area) => (
            <motion.div
              key={area.title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="h-full"
            >
              <Card
                onMouseMove={handleSpotlight}
                className="group relative h-full gap-4 p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/30"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(320px circle at var(--spot-x, 50%) var(--spot-y, 50%), color-mix(in oklch, var(--brand) 14%, transparent), transparent 70%)",
                  }}
                />
                <div className="relative flex items-center justify-between">
                  <IconTile variant="soft" size="lg" className="text-brand">
                    {iconFor(area.title)}
                  </IconTile>
                  <Badge
                    variant={area.level === "Expert" ? "primary-light" : "outline"}
                    radius="full"
                  >
                    {area.level}
                  </Badge>
                </div>
                <div className="relative flex flex-col gap-2">
                  <h3 className="text-lg font-semibold tracking-tight">{area.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {area.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
