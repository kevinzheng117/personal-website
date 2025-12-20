"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface HoverPreviewProps {
  image: string;
  children: React.ReactNode;
  className?: string;
}

export function HoverPreview({
  image,
  children,
  className = "",
}: HoverPreviewProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Preload image
  useEffect(() => {
    const img = new window.Image();
    img.src = image;
    img.onload = () => setImageLoaded(true);
  }, [image]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsVisible(true);
    updatePosition(e);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isVisible) {
      updatePosition(e);
    }
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const updatePosition = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Try to get actual rendered dimensions from the preview element
    let actualWidth: number;
    let previewHeight: number;

    if (previewRef.current) {
      const rect = previewRef.current.getBoundingClientRect();
      actualWidth = rect.width;
      previewHeight = rect.height;
    } else {
      // Fallback to calculated dimensions if preview not yet rendered
      const baseWidth = 420; // w-[420px]
      const baseHeight = 260; // h-[260px]
      actualWidth = Math.min(baseWidth, viewportWidth * 0.9);
      // Calculate height to maintain aspect-[420/260] ratio
      previewHeight = actualWidth * (baseHeight / baseWidth);
    }

    // Default: position to the right and slightly below the cursor
    let x = e.clientX + 20;
    let y = e.clientY + 20;

    // Check if we need to flip horizontally
    if (x + actualWidth > viewportWidth - 20) {
      x = e.clientX - actualWidth - 20;
    }

    // Check if we need to flip vertically
    if (y + previewHeight > viewportHeight - 20) {
      y = e.clientY - previewHeight - 20;
    }

    // Ensure preview stays within viewport
    x = Math.max(20, Math.min(x, viewportWidth - actualWidth - 20));
    y = Math.max(20, Math.min(y, viewportHeight - previewHeight - 20));

    setPosition({ x, y });
  };

  return (
    <div
      ref={containerRef}
      className={`relative inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <AnimatePresence>
        {isVisible && imageLoaded && (
          <motion.div
            ref={previewRef}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="fixed z-50 pointer-events-none"
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
            }}
          >
            <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden w-[420px] max-w-[90vw]">
              <div className="w-full aspect-[420/260] relative">
                <Image
                  src={image}
                  alt="Preview"
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 90vw) 90vw, 420px"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
