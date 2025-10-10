"use client";

import { EXPERIENCE } from "@/content/experience";
import { ExperienceCard } from "@/components/experience-card";

export const ExperienceSection = () => {
  return (
    <div className="w-full bg-black/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-12 md:px-20 lg:px-32 pb-12">
        {/* Screen reader only heading for accessibility */}
        <h2 className="sr-only">Work Experience</h2>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EXPERIENCE.map((experience, index) => (
            <ExperienceCard
              key={`${experience.company}-${experience.role}`}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
