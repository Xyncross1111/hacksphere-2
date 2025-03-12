import { useEffect, useRef } from "react";

interface DevfolioButtonProps {
  hackathonSlug: string;
  buttonTheme?: "light" | "dark";
  className?: string;
}

export const DevfolioButton = ({
  hackathonSlug,
  buttonTheme = "light",
  className = "",
}: DevfolioButtonProps) => {
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
}, []);

  return (
    <div className={`apply-button-container ${className}`} ref={buttonRef}>
      <div
        className="apply-button"
        data-hackathon-slug={hackathonSlug}
        data-button-theme={buttonTheme}
        style={{ height: "44px", width: "312px" }}
      ></div>
    </div>
  );
};
