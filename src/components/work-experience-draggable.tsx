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

interface WorkExperience {
  company: string;
  role: string;
  dates: string;
  description: string;
  technologies: string[];
  location?: string;
}

interface DraggableWorkCardProps {
  experience: WorkExperience;
  className?: string;
}

export const DraggableWorkCard = ({
  experience,
  className,
}: DraggableWorkCardProps) => {
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

  const velocityX = useVelocity(mouseX);
  const velocityY = useVelocity(mouseY);

  const springConfig = {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  };

  const rotateX = useSpring(
    useTransform(mouseY, [-300, 300], [15, -15]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-300, 300], [-15, 15]),
    springConfig
  );

  const opacity = useSpring(
    useTransform(mouseX, [-300, 0, 300], [0.9, 1, 0.9]),
    springConfig
  );

  const glareOpacity = useSpring(
    useTransform(mouseX, [-300, 0, 300], [0.1, 0, 0.1]),
    springConfig
  );

  useEffect(() => {
    const updateConstraints = () => {
      if (typeof window !== "undefined") {
        setConstraints({
          top: -window.innerHeight / 3,
          left: -window.innerWidth / 3,
          right: window.innerWidth / 3,
          bottom: window.innerHeight / 3,
        });
      }
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
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
          rotateX: 0,
          rotateY: 0,
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
        const bounce = Math.min(0.6, velocityMagnitude / 1000);

        animate(info.point.x, info.point.x + currentVelocityX * 0.2, {
          duration: 0.6,
          ease: [0.2, 0, 0, 1],
          bounce,
          type: "spring",
          stiffness: 50,
          damping: 15,
          mass: 0.8,
        });

        animate(info.point.y, info.point.y + currentVelocityY * 0.2, {
          duration: 0.6,
          ease: [0.2, 0, 0, 1],
          bounce,
          type: "spring",
          stiffness: 50,
          damping: 15,
          mass: 0.8,
        });
      }}
      style={{
        rotateX,
        rotateY,
        opacity,
        willChange: "transform",
      }}
      animate={controls}
      whileHover={{ scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative min-h-[500px] w-96 overflow-hidden rounded-xl bg-black border border-gray-800 p-8 shadow-2xl transform-3d",
        className
      )}
    >
      {/* Company and Role */}
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-white mb-1">
          {experience.company}
        </h3>
        <p className="text-lg text-emerald-300 font-medium">
          {experience.role}
        </p>
      </div>

      {/* Dates and Location */}
      <div className="mb-6">
        <p className="text-sm text-gray-400 mb-1">{experience.dates}</p>
        {experience.location && (
          <p className="text-sm text-gray-400">{experience.location}</p>
        )}
      </div>

      {/* Description */}
      <div className="mb-6">
        <p className="text-gray-300 text-sm leading-relaxed">
          {experience.description}
        </p>
      </div>

      {/* Technologies */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
          Technologies
        </h4>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded border border-gray-700 hover:bg-gray-700 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Glare Effect */}
      <motion.div
        style={{
          opacity: glareOpacity,
        }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent select-none"
      />
    </motion.div>
  );
};

export const DraggableWorkContainer = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("[perspective:2000px]", className)}>{children}</div>
  );
};
