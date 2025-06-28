"use client";

import React, { useEffect, useState } from "react";

interface CursorLightProps {
  size?: number;
  color?: string;
  blur?: number;
  opacity?: number;
}

export const CursorLight: React.FC<CursorLightProps> = ({
  size = 800,
  color = "rgba(79, 209, 197, 0.13)", // Slightly brighter
  blur = 150,
  opacity = 0.85, // Slightly brighter
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Don't render until mounted to prevent hydration issues
  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Main large light effect */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-opacity duration-300 rounded-full`}
        style={{
          left: position.x - size / 2,
          top: position.y - size / 2,
          width: size,
          height: size,
          opacity: isVisible ? opacity : 0,
          background: `radial-gradient(circle, ${color} 0%, rgba(79, 209, 197, 0.07) 60%, transparent 100%)`,
          filter: `blur(${blur}px)`,
        }}
      />

      {/* Secondary medium light for subtle definition */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-opacity duration-300 rounded-full`}
        style={{
          left: position.x - 300,
          top: position.y - 300,
          width: 600,
          height: 600,
          opacity: isVisible ? 0.22 : 0,
          background: `radial-gradient(circle, rgba(79, 209, 197, 0.09) 0%, rgba(79, 209, 197, 0.03) 70%, transparent 100%)`,
          filter: `blur(100px)`,
        }}
      />
    </>
  );
};
