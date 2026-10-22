import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterProps {
  name: string;
}

const Footer = ({ name }: FooterProps) => {
  return (
    <footer className="border-t">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-6 sm:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {name}
        </p>
        <Button
          variant="ghost"
          size="sm"
          className="group text-muted-foreground"
          render={<a href="#top" />}
          nativeButton={false}
        >
          Back to top
          <ArrowUp
            data-icon="inline-end"
            className="transition-transform group-hover:-translate-y-0.5"
          />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
