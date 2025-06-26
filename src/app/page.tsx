"use client";

import React, { useRef, useEffect } from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { WavyBackground } from "@/components/ui/wavy-background";
import { FloatingProfile } from "@/components/floating-profile";
import { annotate } from "rough-notation";
import CardGroup from "@/components/card-group";
import WorkExperience from "@/components/work-experience";

export default function Home() {
  const impactfulRef = useRef<HTMLSpanElement>(null);
  const impactfulRef2 = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (impactfulRef.current) {
      const highlightAnnotation = annotate(impactfulRef.current, {
        type: "highlight",
        color: "royalblue",
        padding: 4,
      });
      highlightAnnotation.show();
    }

    if (impactfulRef2.current) {
      const strikeThroughAnnotation = annotate(impactfulRef2.current, {
        type: "strike-through",
        color: "royalblue",
        padding: 4,
      });
      strikeThroughAnnotation.show();
    }
  }, []);

  return (
    <div className="bg-black text-white min-h-screen relative overflow-x-hidden py-10">
      <main>
        <FloatingProfile />
        <div className="flex flex-col items-center justify-center min-h-screen gap-6">
          <WavyBackground
            colors={["#4fd1c5", "#81e6d9", "#38bdf8", "#4c51bf", "#a3bffa"]}
            containerClassName="max-h-[80vh]"
          >
            <div className="px-12 md:px-0 text-center md:text-left">
              <h1 className="text-2xl md:text-4xl font-medium mt-48">
                Kevin Zheng,
                <FlipWords
                  words={[
                    "Software Engineer",
                    "Fullstack Developer",
                    "Researcher",
                    "Student",
                  ]}
                  duration={5000}
                  className={"text-cyan-300"}
                ></FlipWords>
              </h1>
              <p className="m-24 text-md md:text-lg mt-6 max-w-xl mx-auto">
                Hello, I’m an Information Systems & Computer Science student at
                Carnegie Mellon University interested in building software that
                connects people and sparks joy. Currently based in{" "}
                <span ref={impactfulRef2} className="inline-block">
                  Shanghai, Millburn, Bryn Mawr,{" "}
                </span>{" "}
                Pittsburgh, PA.{" "}
                <span ref={impactfulRef} className="inline-block">
                  <a
                    href="/Kevin_Zheng_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more about my experiences here.
                  </a>
                </span>
              </p>
            </div>
          </WavyBackground>
          <WorkExperience />
          <CardGroup />
        </div>
      </main>
    </div>
  );
}
