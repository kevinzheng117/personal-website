"use client";

import { PROJECTS } from "@/lib/projects";
import { ProjectItem } from "./project-item";
import { AnimatedSection } from "./ui/animated-section";
import { motionConfig } from "@/lib/motion";

export function ProjectList() {
  return (
    <div className="space-y-8">
      {PROJECTS.map((project, index) => (
        <AnimatedSection
          key={project.title}
          delay={motionConfig.pageLoad.content + index * 0.1}
        >
          <ProjectItem project={project} />
        </AnimatedSection>
      ))}
    </div>
  );
}
