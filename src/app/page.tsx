"use client";

import { Hero } from "@/components/hero";
import { Tabs } from "@/components/tabs";
import { WorkExperienceList } from "@/components/work-experience-list";
import { ProjectList } from "@/components/project-list";
import { AnimatedSection } from "@/components/ui/animated-section";
import { motionConfig } from "@/lib/motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <main className="antialiased mx-auto max-w-2xl my-2 p-4 lg:p-0">
        <div className="flex flex-col gap-y-6 my-6 relative">
          <Hero />

          <AnimatedSection delay={motionConfig.pageLoad.tabs}>
            <Tabs
              tabs={[
                { id: "work", label: "Work Experience" },
                { id: "projects", label: "Projects" },
              ]}
              defaultTab="work"
            >
              <WorkExperienceList />
              <ProjectList />
            </Tabs>
          </AnimatedSection>
        </div>
      </main>
    </div>
  );
}
