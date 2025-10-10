"use client";

import { Experience } from "@/content/experience";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import { motion } from "framer-motion";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-black/40 border border-white/[0.08] rounded-3xl p-6 hover:border-white/[0.15] hover:bg-black/60 transition-all duration-700 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#4fd1c5]/20 backdrop-blur-xl"
      tabIndex={0}
      role="article"
      aria-labelledby={`experience-${index}-title`}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4fd1c5]/10 via-[#38bdf8]/5 to-[#4c51bf]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4fd1c5]/20 via-transparent to-[#38bdf8]/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl" />

      <div className="relative z-10">
        {/* Header with Logo and Company Info */}
        <div className="flex items-start gap-4 mb-5">
          <div className="w-16 h-16 bg-white/[0.08] backdrop-blur-sm rounded-2xl flex items-center justify-center p-3 group-hover:bg-white/[0.15] group-hover:scale-110 transition-all duration-500 border border-white/[0.08] flex-shrink-0">
            <Image
              src={experience.logo}
              alt={`${experience.company} logo`}
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3
              id={`experience-${index}-title`}
              className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-[#4fd1c5] group-hover:via-[#38bdf8] group-hover:to-[#4c51bf] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 tracking-tight"
            >
              {experience.company}
            </h3>
            <p className="text-neutral-300 text-base font-medium mb-2 leading-relaxed group-hover:text-white transition-colors duration-500">
              {experience.role}
            </p>
            <div className="flex items-center gap-2 text-neutral-500 text-xs font-medium tracking-wide uppercase group-hover:text-neutral-400 transition-colors duration-500">
              <span>{experience.location}</span>
              <span>•</span>
              <span>{experience.dates}</span>
            </div>
          </div>
        </div>

        {/* Bullet Points */}
        <div className="mb-5">
          <ul className="space-y-3">
            {experience.bullets.map((bullet, bulletIndex) => (
              <motion.li
                key={bulletIndex}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: bulletIndex * 0.1 }}
                className="flex items-start gap-2 text-sm text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors duration-500"
              >
                <span className="w-1.5 h-1.5 bg-[#4fd1c5] rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                <span>{bullet}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Marquee */}
        <div className="mt-auto">
          <div className="mb-3">
            <h4 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">
              Technologies
            </h4>
          </div>
          <div className="relative overflow-hidden rounded-xl bg-black/40 border border-white/[0.08] p-3 group-hover:border-white/[0.15] group-hover:bg-black/60 transition-all duration-500">
            <Marquee className="py-1" pauseOnHover={true}>
              {experience.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1.5 text-xs bg-white/[0.08] text-white/80 rounded-lg border border-white/[0.08] hover:bg-white/[0.15] hover:text-white transition-all duration-300 ease-out whitespace-nowrap mx-1 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </Marquee>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-[#4fd1c5]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
    </motion.div>
  );
};
