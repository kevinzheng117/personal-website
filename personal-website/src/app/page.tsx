"use client";
import React, { useRef, useEffect } from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { WavyBackground } from "@/components/ui/wavy-background";
import { FloatingProfile } from "@/components/floating-profile";
import { annotate } from "rough-notation";

export default function Home() {
  const impactfulRef = useRef<HTMLSpanElement>(null);
  const impactfulRef2 = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (impactfulRef.current) {
      const circleAnnotation = annotate(impactfulRef.current, {
        type: "highlight",
        color: "#6b46c1",
        padding: 4,
      });
      circleAnnotation.show();
    }
  }, []);

  useEffect(() => {
    if (impactfulRef2.current) {
      const circleAnnotation = annotate(impactfulRef2.current, {
        type: "strike-through",
        color: "#6b46c1",
        padding: 4,
      });
      circleAnnotation.show();
    }
  }, []);

  return (
    <div className="bg-black text-white min-h-screen relative">
      <main>
        <FloatingProfile />
        <div className="flex flex-col items-center justify-center min-h-screen gap-6">
          <WavyBackground
            colors={["#4fd1c5", "#81e6d9", "#38bdf8", "#4c51bf", "#a3bffa"]}
          >
            <h1 className="text-4xl font-medium">
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
            <p className="text-lg mt-4 max-w-xl mx-auto">
              Hello, I’m a student at Carnegie Mellon University focused on
              developing{" "}
              <span ref={impactfulRef} className="inline-block">
                impactful software
              </span>{" "}
              that helps people share ideas and express what brings them joy.
              Currently based in{" "}
              <span ref={impactfulRef2} className="inline-block">
                Shanghai, Millburn, Bryn Mawr,
              </span>{" "}
              Pittsburgh, PA.
            </p>
          </WavyBackground>
        </div>
      </main>
    </div>
  );
}
