import React, { useState } from "react";
import type { ResumeData } from "../../types";
import { Download } from "../Icons";

interface ResumeDownloadProps {
  data: ResumeData;
  className?: string;
  label?: string;
  labelClassName?: string;
  // Rendered before the label, e.g. a row heading in the contact list.
  prefix?: React.ReactNode;
}

type Status = "idle" | "loading" | "error";

const ResumeDownload: React.FC<ResumeDownloadProps> = ({
  data,
  className,
  label = "Download resume",
  labelClassName,
  prefix,
}) => {
  const [status, setStatus] = useState<Status>("idle");

  const handleClick = async () => {
    if (status === "loading") return;
    setStatus("loading");

    try {
      // The PDF renderer is large, so it is only fetched when someone asks for the resume.
      const [{ pdf }, { default: ResumeDocument }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("./ResumeDocument"),
      ]);
      const blob = await pdf(<ResumeDocument data={data} />).toBlob();

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${data.personal.name.replace(/\s+/g, "_")}_Resume.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 10_000);

      setStatus("idle");
    } catch (error) {
      console.error("Failed to generate resume PDF:", error);
      setStatus("error");
    }
  };

  const text =
    status === "loading"
      ? "Preparing PDF…"
      : status === "error"
        ? "Couldn't generate, try again"
        : label;

  return (
    <button
      type="button"
      className={className}
      onClick={handleClick}
      aria-busy={status === "loading"}
      disabled={status === "loading"}
    >
      {prefix}
      <span className={labelClassName}>{text}</span>
      <Download />
    </button>
  );
};

export default ResumeDownload;
