"use client";

import { motion } from "framer-motion";
import { motionConfig } from "@/lib/motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedSection({
  children,
  delay = 0,
  className = "",
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: motionConfig.duration.pageLoad,
        delay,
        ease: motionConfig.easing.default,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

