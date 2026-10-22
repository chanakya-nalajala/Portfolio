import type { ReactNode } from "react";
import { Boxes, Gauge, KeyRound } from "lucide-react";
import { Badge } from "@/components/reui/badge";
import { IconTile } from "@/components/reui/icon-tile";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/motion/reveal";
import type { EngineeringDepth as EngineeringDepthType } from "@/types";

interface EngineeringDepthProps {
  engineeringDepth: EngineeringDepthType;
}

const groups: Array<{
  key: keyof EngineeringDepthType;
  label: string;
  icon: ReactNode;
}> = [
  { key: "performance", label: "Performance", icon: <Gauge /> },
  { key: "architecture", label: "Architecture & scale", icon: <Boxes /> },
  { key: "security", label: "Security & IAM", icon: <KeyRound /> },
];

const EngineeringDepth = ({ engineeringDepth }: EngineeringDepthProps) => {
  return (
    <section id="engineering" className="border-t bg-muted/30 py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index="04"
          label="Engineering"
          title="Some things I've built"
          description="The engineering behind the numbers, grouped by the problem it solved."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {groups.map((group, groupIndex) => {
            const items = engineeringDepth[group.key];
            return (
              <Reveal key={group.key} delay={groupIndex * 0.1}>
                <Card className="h-full gap-0 p-0">
                  <div className="flex items-center gap-3 border-b p-5">
                    <IconTile variant="soft" className="text-brand">
                      {group.icon}
                    </IconTile>
                    <div>
                      <h3 className="font-semibold tracking-tight">{group.label}</h3>
                      <p className="font-mono text-xs text-muted-foreground">
                        {String(items.length).padStart(2, "0")} items
                      </p>
                    </div>
                  </div>
                  <Accordion defaultValue={[items[0]?.title]} className="px-5">
                    {items.map((item) => (
                      <AccordionItem key={item.title} value={item.title}>
                        <AccordionTrigger className="items-start gap-3 py-4 text-left hover:no-underline">
                          <span className="flex flex-col gap-1.5">
                            <span className="font-medium">{item.title}</span>
                            <Badge
                              variant="success-light"
                              radius="full"
                              className="h-auto py-0.5 text-left whitespace-normal"
                            >
                              {item.impact}
                            </Badge>
                          </span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="leading-relaxed text-muted-foreground">
                            {item.description}
                          </p>
                          <p className="mt-3 font-mono text-xs text-muted-foreground/80">
                            {item.tech}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EngineeringDepth;
