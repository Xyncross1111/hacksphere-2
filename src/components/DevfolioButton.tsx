"use client";

import { useEffect, useRef, useState } from "react";

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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  // Only render the button on the client side to avoid hydration mismatch
  if (!isMounted) {
    return <div className={`apply-button-container ${className}`} ref={buttonRef}></div>;
  }

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