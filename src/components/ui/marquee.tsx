"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const Marquee = ({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
}: {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
}) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  if (prefersReducedMotion) {
    return (
      <div
        className={cn("flex flex-wrap gap-2 justify-center", className)}
        role="list"
        aria-label="Technology badges"
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        pauseOnHover && "group",
        className
      )}
      role="marquee"
      aria-label="Scrolling technology badges"
    >
      <div
        className={cn(
          "flex gap-2 animate-marquee",
          reverse && "animate-marquee-reverse",
          pauseOnHover && "group-hover:pause"
        )}
        style={{
          width: "max-content",
        }}
      >
        {/* First set of items */}
        <div className="flex gap-2">{children}</div>
        {/* Duplicate set for seamless loop */}
        <div className="flex gap-2">{children}</div>
      </div>
    </div>
  );
};
