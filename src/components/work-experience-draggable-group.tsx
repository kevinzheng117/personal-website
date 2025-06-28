import React from "react";
import Image from "next/image";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

// Helper to generate a random integer between min and max (inclusive)
function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Helper to extract end date from a date string like "Jan 2024 - Dec.2024"
function getEndDate(dateStr: string): Date {
  // Try to match the last year in the string
  const match = dateStr.match(/(\w+)?\.?\s*(\d{4})$/);
  if (match) {
    // If a month is present, use it; otherwise, default to December
    const monthStr = match[1] ? match[1].replace(/\./g, "") : "Dec";
    const year = parseInt(match[2], 10);
    const month = isNaN(Date.parse(monthStr + " 1, 2000"))
      ? 11
      : new Date(Date.parse(monthStr + " 1, 2000")).getMonth();
    return new Date(year, month, 1);
  }
  // Fallback: just use the year
  const yearMatch = dateStr.match(/(\d{4})/g);
  if (yearMatch) {
    return new Date(parseInt(yearMatch[yearMatch.length - 1], 10), 11, 1);
  }
  return new Date(0);
}

export default function WorkExperienceDraggableGroup() {
  let workExperiences = [
    {
      title: "Software Engineering Intern",
      image: "/capital_one.png",
      role: "Capital One",
      location: "Dallas, TX",
      dates: "Jun. 2025 – Aug. 2025",
      description: `Built Python and Java microservices to automate document processing and validation for auto-loan funding, reducing manual reviews. Developed real-time notification systems and integrated AWS and Kafka for scalable, reliable operations.`,
      technologies: [
        "Java",
        "Python",
        "Spring Boot",
        "AWS",
        "Docker",
        "Kubernetes",
      ],
    },
    {
      title: "Undergraduate Research Assistant",
      image: "/learnlab.jpg",
      role: "LearnLab at Carnegie Mellon University",
      location: "Pittsburgh, PA",
      dates: "Sep. 2024 – May. 2025",
      description: `Created the front-end for GPTutor-Math, an AI-powered tutoring platform serving 500+ students. Enhanced personalized learning by integrating ChatGPT and collaborating on scalable AI solutions.`,
      technologies: ["React", "Next.js", "Python", "ChatGPT API"],
    },
    {
      title: "Undergraduate Teaching Assistant",
      image: "/cmu.png",
      role: "Carnegie Mellon University | 15-112 Fundamentals of Programming and Computer Science",
      location: "Pittsburgh, PA",
      dates: "Jan. 2024 – Dec. 2024",
      description: `Led recitations and office hours to help students master Python and core CS concepts. Graded assignments and provided detailed feedback to support learning.`,
      technologies: ["Python"],
    },
    {
      title: "Software Engineering Intern",
      image: "/qifu.png",
      role: "Qifu Technology Inc",
      location: "Shenzhen, China",
      dates: "Jun. 2024 – Jul. 2024",
      description: `Integrated MongoDB into a big data platform, improving data accessibility and reducing query complexity. Developed secure access features and contributed to platform updates using modern DevOps tools.`,
      technologies: ["Java", "Spring Boot", "Docker", "SQL"],
    },
  ];

  // Sort by end date (most recent first)
  workExperiences = workExperiences.sort(
    (a, b) => getEndDate(b.dates).getTime() - getEndDate(a.dates).getTime()
  );

  // Reverse so the most recent is rendered last (on top)
  const renderExperiences = [...workExperiences].reverse();

  // Generate even more scattered stack positions for each card
  const stackStyles = renderExperiences.map(() => {
    const top = randomInt(-40, 120); // px, much more scattered
    const left = randomInt(0, 70); // percent, much more scattered
    const rotate = randomInt(-10, 10); // degrees, more subtle
    return {
      className: `absolute top-[${top}px] left-[${left}%]`,
      initialRotateZ: rotate,
    };
  });

  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      {renderExperiences.map((item, index) => (
        <DraggableCardBody
          key={index}
          className={`bg-black border border-gray-800 ${stackStyles[index].className}`}
          initialRotateZ={stackStyles[index].initialRotateZ}
        >
          <div className="flex items-start gap-4 p-6">
            <Image
              src={item.image}
              alt={item.title}
              width={64}
              height={64}
              className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
            />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-1">
                {item.title}
              </h3>
              <p className="text-emerald-300 font-medium mb-1">{item.role}</p>
              <p className="text-sm text-gray-400 mb-1">{item.location}</p>
              <p className="text-sm text-gray-400 mb-3">{item.dates}</p>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
