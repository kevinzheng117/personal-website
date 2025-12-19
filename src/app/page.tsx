"use client";

import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { WavyBackground } from "@/components/ui/wavy-background";
import { CursorLight } from "@/components/ui/cursor-light";
import { FloatingProfile } from "@/components/floating-profile";
import ProjectCardGroup from "@/components/project-card-group";
import WorkExperienceDraggableGroup from "@/components/work-experience-draggable-group";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-x-hidden py-10">
      <CursorLight />
      <main>
        <FloatingProfile />
        <div className="flex flex-col items-center justify-center min-h-screen gap-6">
          <WavyBackground
            colors={["#4fd1c5", "#81e6d9", "#38bdf8", "#4c51bf", "#a3bffa"]}
            containerClassName="max-h-[80vh]"
          >
            <div className="px-12 md:px-0 text-center md:text-left">
              <h1 className="text-2xl md:text-4xl font-semibold mt-48">
                Kevin Zheng,
                <FlipWords
                  words={[
                    "Software Engineer",
                    "Fullstack Developer",
                    "Researcher",
                    "Student",
                  ]}
                  duration={5000}
                  className={
                    "bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent font-semibold drop-shadow-sm"
                  }
                ></FlipWords>
              </h1>
              <p className="m-28 text-md md:text-lg mt-6 max-w-xl mx-auto">
                Hello, I&apos;m a Computer Science student at Carnegie Mellon
                University interested in building software that connects people
                and sparks joy. Currently based in{" "}
                <span className="text-gray-400 line-through mr-1">
                  Beijing, Shanghai, Millburn, Philadelphia,
                </span>
                Pittsburgh, PA{" "}
                <span className="inline-block">
                  <a
                    href="/Kevin_Zheng_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent font-semibold hover:from-emerald-200 hover:to-cyan-200 transition-all duration-300 drop-shadow-sm inline-flex items-center"
                  >
                    Learn more about my experiences here.
                    <svg
                      className="ml-1 w-4 h-4 transition-transform duration-200 ease-linear group-hover:translate-x-1 group-hover:-translate-y-1"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <defs>
                        <linearGradient
                          id="arrow-gradient"
                          x1="0"
                          y1="16"
                          x2="16"
                          y2="0"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#4fd1c5" />
                          <stop offset="1" stopColor="#38bdf8" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M4 12L12 4M12 4H6M12 4V10"
                        stroke="url(#arrow-gradient)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </span>
              </p>
            </div>
          </WavyBackground>

          {/* Elegant Line with Accent - Reduced spacing */}
          <div className="relative w-full max-w-3xl mx-auto px-6 mb-2 z-10">
            <div className="flex items-center justify-center space-x-6">
              <div className="h-px bg-gradient-to-r from-transparent to-gray-600 flex-1"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="h-px bg-gradient-to-l from-transparent to-gray-600 flex-1"></div>
            </div>
          </div>

          <WorkExperienceDraggableGroup />

          {/* Three Dots Separator - Reduced spacing */}
          <div className="w-full max-w-3xl mx-auto px-6 my-1">
            <div className="flex justify-center space-x-2">
              <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
            </div>
          </div>

          <ProjectCardGroup />
        </div>
      </main>
    </div>
  );
}
