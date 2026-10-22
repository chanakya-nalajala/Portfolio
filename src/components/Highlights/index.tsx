import { motion } from "framer-motion";
import { Frame, FramePanel } from "@/components/reui/frame";
import { AnimatedNumber } from "@/components/motion/animated-number";
import { Reveal, staggerContainer, staggerItem } from "@/components/motion/reveal";
import type { Highlight } from "@/types";

interface HighlightsProps {
  summary: string;
  highlights: Highlight[];
}

const Highlights = ({ summary, highlights }: HighlightsProps) => {
  return (
    <section aria-label="Highlights" className="pb-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal>
          <Frame spacing="lg">
            <FramePanel>
              <p className="max-w-4xl text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">
                {summary}
              </p>
            </FramePanel>
            <motion.dl
              className="grid grid-cols-2 gap-1 lg:grid-cols-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              {highlights.map((item) => (
                <motion.div key={item.label} variants={staggerItem} className="flex">
                  <FramePanel className="flex flex-col gap-1">
                    <dt className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                      {item.label}
                    </dt>
                    <dd className="text-4xl font-semibold tracking-tighter tabular-nums md:text-5xl">
                      <AnimatedNumber value={item.number} />
                    </dd>
                    <dd className="text-sm text-muted-foreground">{item.subtext}</dd>
                  </FramePanel>
                </motion.div>
              ))}
            </motion.dl>
          </Frame>
        </Reveal>
      </div>
    </section>
  );
};

export default Highlights;
