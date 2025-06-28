"use client";

import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { WavyBackground } from "@/components/ui/wavy-background";
import { CursorLight } from "@/components/ui/cursor-light";
import { FloatingProfile } from "@/components/floating-profile";
import CardGroup from "@/components/card-group";
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
              <p className="m-24 text-md md:text-lg mt-6 max-w-xl mx-auto">
                Hello, I&apos;m an Information Systems & Computer Science
                student at Carnegie Mellon University interested in building
                software that connects people and sparks joy. Currently based in{" "}
                <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent font-semibold drop-shadow-sm">
                  Beijing, Shanghai, Millburn, Philadelphia,
                </span>{" "}
                Pittsburgh.{" "}
                <span className="inline-block">
                  <a
                    href="/Kevin_Zheng_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent font-semibold hover:from-emerald-200 hover:to-cyan-200 transition-all duration-300 drop-shadow-sm"
                  >
                    Learn more about my experiences here.
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

          <CardGroup />
        </div>
      </main>
    </div>
  );
}
