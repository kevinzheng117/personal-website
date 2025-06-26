import React from "react";
import Image from "next/image";

const WorkExperience = () => {
  const experiences = [
    {
      company: "Capital One",
      logo: "/capital_one.png",
      title: "Software Engineering Intern",
      period: "Summer 2025",
    },
    {
      company: "LearnLab",
      logo: "/learnlab.jpg",
      title: "Frontend Developer Research Intern",
      period: "Fall 2024 - Spring 2025",
    },
    {
      company: "Qifu Technology Inc.",
      logo: "/qifu.png",
      title: "Software Engineering Intern",
      period: "Summer 2024",
    },
  ];
  return (
    <div className="w-full bg-black/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 pb-12">
        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-neutral-900/50 border border-neutral-800/50 rounded-2xl p-8 hover:border-neutral-700/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 backdrop-blur-sm"
            >
              {" "}
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4fd1c5]/5 via-[#38bdf8]/5 to-[#4c51bf]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 text-center">
                {/* Company Logo */}{" "}
                <div className="mb-8 flex justify-center">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center p-4 group-hover:bg-white/20 transition-all duration-300 border border-white/10">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain"
                      width={80}
                      height={80}
                    />
                  </div>
                </div>{" "}
                {/* Company Name */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-[#4fd1c5] group-hover:via-[#38bdf8] group-hover:to-[#4c51bf] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 tracking-tight">
                  {exp.company}
                </h3>
                {/* Job Title */}
                <p className="text-neutral-300 text-lg font-medium mb-3 leading-relaxed">
                  {exp.title}
                </p>
                {/* Period */}
                <p className="text-neutral-500 text-sm font-medium tracking-wide uppercase">
                  {exp.period}
                </p>{" "}
                {/* Bottom accent line */}
                <div className="mt-6 h-px bg-gradient-to-r from-transparent via-[#4fd1c5]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
