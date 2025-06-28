"use client";
import { cn } from "@/lib/utils";
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  useVelocity,
  useAnimationControls,
} from "motion/react";

export const DraggableCardBody = ({
  className,
  children,
  initialRotateX = 0,
  initialRotateY = 0,
  initialRotateZ = 0,
}: {
  className?: string;
  children?: React.ReactNode;
  initialRotateX?: number;
  initialRotateY?: number;
  initialRotateZ?: number;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [constraints, setConstraints] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  // physics biatch
  const velocityX = useVelocity(mouseX);
  const velocityY = useVelocity(mouseY);

  const springConfig = {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  };

  const rotateX = useSpring(
    useTransform(mouseY, [-300, 300], [25, -25]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-300, 300], [-25, 25]),
    springConfig
  );

  // Calculate distance from center
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const distance = useTransform([x, y], ([latestX, latestY]) => {
    // TypeScript fix: ensure numbers
    const dx = typeof latestX === "number" ? latestX : 0;
    const dy = typeof latestY === "number" ? latestY : 0;
    return Math.sqrt(dx * dx + dy * dy);
  });

  // Clamp opacity: fully visible within 200px, fade out to 0 at 600px
  const opacity = useTransform(distance, [0, 200, 600], [1, 1, 0]);

  const glareOpacity = useSpring(
    useTransform(mouseX, [-300, 0, 300], [0.2, 0, 0.2]),
    springConfig
  );

  useEffect(() => {
    // Update constraints when component mounts or window resizes
    const updateConstraints = () => {
      if (typeof window !== "undefined" && cardRef.current) {
        const cardRect = cardRef.current.getBoundingClientRect();
        const cardWidth = cardRect.width;
        const cardHeight = cardRect.height;
        const diagonal = Math.sqrt(
          cardWidth * cardWidth + cardHeight * cardHeight
        );
        const minSide = Math.min(cardWidth, cardHeight);
        const scaleY = 0.05; // less vertical padding for more height
        const scaleX = 0.1; // keep horizontal padding as before
        const paddingY = (diagonal - minSide) * scaleY;
        const paddingX = (diagonal - minSide) * scaleX;

        setConstraints({
          top: -(window.innerHeight / 2 - cardHeight / 2 - paddingY),
          left: -(window.innerWidth / 2 - cardWidth / 2 - paddingX),
          right: window.innerWidth / 2 - cardWidth / 2 - paddingX,
          bottom: window.innerHeight / 2 - cardHeight / 2 - paddingY,
        });
      }
    };

    updateConstraints();

    // Add resize listener
    window.addEventListener("resize", updateConstraints);

    // Clean up
    return () => {
      window.removeEventListener("resize", updateConstraints);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } =
      cardRef.current?.getBoundingClientRect() ?? {
        width: 0,
        height: 0,
        left: 0,
        top: 0,
      };
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    mouseX.set(deltaX);
    mouseY.set(deltaY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <>
      <motion.div
        ref={cardRef}
        drag
        dragConstraints={constraints}
        onDragStart={() => {
          document.body.style.cursor = "grabbing";
        }}
        onDragEnd={(event, info) => {
          document.body.style.cursor = "default";

          controls.start({
            rotateX: initialRotateX,
            rotateY: initialRotateY,
            rotateZ: initialRotateZ,
            transition: {
              type: "spring",
              ...springConfig,
            },
          });
          const currentVelocityX = velocityX.get();
          const currentVelocityY = velocityY.get();

          const velocityMagnitude = Math.sqrt(
            currentVelocityX * currentVelocityX +
              currentVelocityY * currentVelocityY
          );
          const bounce = Math.min(0.8, velocityMagnitude / 1000);

          animate(info.point.x, info.point.x + currentVelocityX * 0.3, {
            duration: 0.8,
            ease: [0.2, 0, 0, 1],
            bounce,
            type: "spring",
            stiffness: 50,
            damping: 15,
            mass: 0.8,
          });

          animate(info.point.y, info.point.y + currentVelocityY * 0.3, {
            duration: 0.8,
            ease: [0.2, 0, 0, 1],
            bounce,
            type: "spring",
            stiffness: 50,
            damping: 15,
            mass: 0.8,
          });
        }}
        style={{
          x,
          y,
          opacity,
          rotateX: useTransform(rotateX, (value) => value + initialRotateX),
          rotateY: useTransform(rotateY, (value) => value + initialRotateY),
          rotateZ: initialRotateZ,
          willChange: "transform",
        }}
        animate={controls}
        whileHover={{ scale: 1.02 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "relative min-h-72 w-[28rem] overflow-hidden rounded-md bg-neutral-100 p-6 shadow-2xl transform-3d dark:bg-neutral-900 z-10",
          className
        )}
      >
        {children}
        <motion.div
          style={{
            opacity: glareOpacity,
          }}
          className="pointer-events-none absolute inset-0 bg-white select-none"
        />
      </motion.div>
    </>
  );
};

export const DraggableCardContainer = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("[perspective:3000px] relative", className)}>
      {/* Drop zone indicator (glow) - only render once behind all cards */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 flex items-center justify-center">
        <div className="absolute w-full h-full rounded-full bg-cyan-300/20 blur-2xl border-2 border-cyan-400/30" />
        <span className="relative z-10 text-gray-300 text-base font-medium text-center tracking-wide drop-shadow-md select-none px-4">
          More coming soon...
        </span>
      </div>
      {children}
    </div>
  );
};
