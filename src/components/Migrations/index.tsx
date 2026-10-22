import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, CalendarDays, CheckCircle2, Route, TrendingUp } from "lucide-react";
import { Badge } from "@/components/reui/badge";
import {
  Frame,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame";
import { IconTile } from "@/components/reui/icon-tile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal, staggerContainer, staggerItem } from "@/components/motion/reveal";
import type { Migration } from "@/types";

interface MigrationsProps {
  migrations: Migration[];
}

const ListPanel = ({
  title,
  icon,
  items,
}: {
  title: string;
  icon: ReactNode;
  items: string[];
}) => (
  <motion.div variants={staggerItem} className="flex">
    <FramePanel>
      <div className="mb-3 flex items-center gap-2 font-mono text-xs tracking-wide text-muted-foreground uppercase">
        {icon}
        {title}
      </div>
      <ul className="flex flex-col gap-2.5">
        {items.map((entry) => (
          <li key={entry} className="flex gap-2.5 text-sm leading-relaxed">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" />
            <span className="text-muted-foreground">{entry}</span>
          </li>
        ))}
      </ul>
    </FramePanel>
  </motion.div>
);

const Migrations = ({ migrations }: MigrationsProps) => {
  return (
    <section id="migrations" className="py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index="03"
          label="Migrations"
          title="Major migrations I've led"
          description="Big version upgrades without breaking production."
        />

        <Reveal>
          <Tabs defaultValue={0} className="gap-6">
            <div className="-mx-4 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0">
              <TabsList className="h-auto! w-max gap-1 rounded-xl p-1">
                {migrations.map((migration, index) => (
                  <TabsTrigger
                    key={migration.title}
                    value={index}
                    className="h-auto rounded-lg px-3 py-2 text-left"
                  >
                    <span className="flex flex-col items-start gap-0.5">
                      <span className="font-medium">{migration.title}</span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {migration.timeline}
                      </span>
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {migrations.map((migration, index) => (
              <TabsContent key={migration.title} value={index}>
                <Frame spacing="lg">
                  <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3">
                    <FrameTitle className="text-base">{migration.title}</FrameTitle>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" radius="full" size="lg" className="gap-1.5">
                        <CalendarDays />
                        {migration.timeline}
                      </Badge>
                      <Badge variant="outline" radius="full" size="lg">
                        {migration.scope}
                      </Badge>
                    </div>
                  </FrameHeader>

                  <motion.div
                    className="grid gap-1 md:grid-cols-2"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    <ListPanel
                      title="Challenges"
                      icon={<AlertTriangle className="size-3.5" />}
                      items={migration.challenges}
                    />
                    <ListPanel
                      title="Approach"
                      icon={<Route className="size-3.5" />}
                      items={migration.approach}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                  >
                    <FramePanel className="flex flex-col gap-4 sm:flex-row sm:items-center">
                      <IconTile variant="soft" className="text-success">
                        <TrendingUp />
                      </IconTile>
                      <div className="flex-1">
                        <p className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                          Impact
                        </p>
                        <p className="font-medium">{migration.impact}</p>
                      </div>
                    </FramePanel>
                  </motion.div>

                  <div className="flex flex-wrap gap-1.5 px-1 pt-2">
                    {migration.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" size="lg" className="font-mono font-normal">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Frame>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
};

export default Migrations;
