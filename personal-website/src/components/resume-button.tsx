"use client";

import * as React from "react";
import { FileText, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GradientResumeButton() {
  return (
    <div className="relative group">
      {/* Gradient border container */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4fd1c5] via-[#38bdf8] to-[#4c51bf] rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      <a
        href="Kevin_Zheng_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="relative block"
      >
        <Button className="relative flex items-center gap-2 px-6 py-8 rounded-lg bg-background border-0 w-full before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#4fd1c5]/20 before:via-[#38bdf8]/20 before:to-[#4c51bf]/20 before:opacity-0 before:transition-opacity before:duration-500 group-hover:before:opacity-100">
          <FileText className="h-5 w-5 transition-transform duration-300 ease-out group-hover:scale-110" />
          <span className="text-lg font-semibold">View Resume</span>
          <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Button>
      </a>
    </div>
  );
}
