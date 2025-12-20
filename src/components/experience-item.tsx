"use client";

import { Experience } from "@/lib/experience";
import { TagPill } from "./ui/tag-pill";

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <div className="flex flex-col gap-y-2 mb-8">
      {/* Top row: Company Name and Dates */}
      <div className="flex items-start justify-between gap-x-6">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-1">
            {experience.company}
          </h3>
          {/* Role */}
          <p className="text-sm text-gray-600">{experience.role}</p>
        </div>
        <span className="text-sm text-gray-500 whitespace-nowrap mt-3">
          {experience.dates}
        </span>
      </div>

      {/* Description */}
      <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-gray-600 leading-relaxed max-w-2xl">
        {experience.bullets.map((bullet, index) => (
          <li key={index} className="marker:text-gray-300">
            {bullet}
          </li>
        ))}
      </ul>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2">
        {experience.tech.map((tech) => (
          <TagPill key={tech}>{tech}</TagPill>
        ))}
      </div>
    </div>
  );
}
