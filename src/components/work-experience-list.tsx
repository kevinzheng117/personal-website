"use client";

import { EXPERIENCE } from "@/lib/experience";
import { ExperienceItem } from "./experience-item";
import { AnimatedSection } from "./ui/animated-section";
import { motionConfig } from "@/lib/motion";

export function WorkExperienceList() {
  return (
    <div>
      {EXPERIENCE.map((exp, index) => (
        <AnimatedSection
          key={`${exp.company}-${exp.role}`}
          delay={motionConfig.pageLoad.content + index * 0.1}
        >
          <ExperienceItem experience={exp} />
        </AnimatedSection>
      ))}
    </div>
  );
}
