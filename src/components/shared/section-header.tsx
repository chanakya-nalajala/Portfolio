import { Badge } from "@/components/reui/badge";
import { Reveal } from "@/components/motion/reveal";

interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
  description?: string;
}

export function SectionHeader({
  index,
  label,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <Reveal className="mb-12 flex flex-col items-start gap-4 md:mb-16">
      <Badge variant="outline" radius="full" size="xl" className="gap-2 font-mono font-normal">
        <span className="text-brand">{index}</span>
        <span className="text-muted-foreground">{label}</span>
      </Badge>
      <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base text-pretty text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
