import { useState, type ComponentProps } from "react";
import { Download, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import type { ResumeData } from "@/types";

interface ResumeDownloadProps
  extends Omit<ComponentProps<typeof Button>, "onClick" | "children"> {
  data: ResumeData;
  label?: string;
}

const ResumeDownload = ({
  data,
  label = "Download resume",
  ...buttonProps
}: ResumeDownloadProps) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (loading) return;
    setLoading(true);

    try {
      // The PDF renderer is large, so it is only fetched when someone asks for the resume.
      const [{ pdf }, { default: ResumeDocument }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("./ResumeDocument"),
      ]);
      const blob = await pdf(<ResumeDocument data={data} />).toBlob();

      const fileName = `${data.personal.name.replace(/\s+/g, "_")}_Resume.pdf`;
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 10_000);

      toast.success("Resume downloaded", { description: fileName });
    } catch (error) {
      console.error("Failed to generate resume PDF:", error);
      toast.error("Couldn't generate the resume", {
        description: "Please try again in a moment.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      {...buttonProps}
      onClick={handleClick}
      disabled={loading}
      aria-busy={loading}
    >
      {loading ? (
        <Loader2 className="animate-spin" data-icon="inline-start" />
      ) : (
        <Download data-icon="inline-start" />
      )}
      {loading ? "Preparing PDF…" : label}
    </Button>
  );
};

export default ResumeDownload;
