import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Scrollspy } from "@/components/reui/scrollspy";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import ResumeDownload from "@/components/ResumeDownload";
import { cn } from "@/lib/utils";
import type { ResumeData } from "@/types";

interface HeaderProps {
  resume: ResumeData;
}

const navItems = [
  { label: "Experience", id: "experience" },
  { label: "Expertise", id: "expertise" },
  { label: "Migrations", id: "migrations" },
  { label: "Engineering", id: "engineering" },
  { label: "Projects", id: "projects" },
  { label: "Stack", id: "skills" },
  { label: "Contact", id: "contact" },
];

// Distance from the top of the viewport at which a section counts as "current".
const SCROLL_OFFSET = 96;

const getInitials = (name: string): string =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const Header = ({ resume }: HeaderProps) => {
  const { name } = resume.personal;
  const documentRef = useRef<Document>(document);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scrollspy reports the nearest section; ignore it while the hero is still on screen.
  const handleSpyUpdate = (id: string) => {
    const section = document.getElementById(id);
    const reached =
      section && section.getBoundingClientRect().top <= SCROLL_OFFSET + 1;
    setActiveId(reached ? id : null);
  };

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={cn(
          "mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-3 rounded-2xl border px-3 transition-all duration-300",
          isScrolled
            ? "border-border bg-background/75 shadow-lg shadow-black/5 backdrop-blur-xl dark:shadow-black/30"
            : "border-transparent bg-transparent",
        )}
      >
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-foreground font-mono text-xs font-semibold text-background transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
            {getInitials(name)}
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:inline">
            {name}
          </span>
        </a>

        <Scrollspy
          targetRef={documentRef}
          offset={SCROLL_OFFSET}
          history={false}
          onUpdate={handleSpyUpdate}
          className="hidden items-center gap-0.5 lg:flex"
        >
          <nav aria-label="Primary" className="flex items-center gap-0.5">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                data-scrollspy-anchor={item.id}
                aria-current={activeId === item.id ? "true" : undefined}
                className={cn(
                  "relative rounded-lg px-3 py-1.5 text-sm transition-colors",
                  activeId === item.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {activeId === item.id && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 -z-10 rounded-lg bg-muted"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                {item.label}
              </a>
            ))}
          </nav>
        </Scrollspy>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <ResumeDownload
            data={resume}
            label="Resume"
            size="sm"
            className="hidden sm:inline-flex"
          />
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  aria-label="Open menu"
                />
              }
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>Navigate</SheetTitle>
              </SheetHeader>
              <nav aria-label="Primary" className="flex flex-col px-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.3 }}
                    className="border-b last:border-b-0"
                  >
                    <SheetClose
                      render={
                        <a
                          href={`#${item.id}`}
                          className="flex items-baseline gap-3 py-3 text-lg font-medium tracking-tight"
                        />
                      }
                    >
                      <span className="font-mono text-xs text-brand">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item.label}
                    </SheetClose>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto p-4">
                <ResumeDownload data={resume} className="w-full" size="lg" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
