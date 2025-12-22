export interface Experience {
  role: string;
  company: string;
  location: string;
  dates: string;
  logo: string;
  bullets: string[];
  tech: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    role: "Software Engineering Intern",
    company: "Capital One",
    location: "Dallas, TX",
    dates: "Jun 2025 – Aug 2025",
    logo: "/capital_one.png",
    bullets: [
      "Reduced document review latency from 2 hours to 5 minutes, processing 1.4M uploads annually.",
      "Enhanced Python/Java microservices to automate auto-loan document processing and validation.",
      "Added Kafka-based order validation and missing-document feedback in Spring Boot, dispatching 70K dealer notifications per year and saving 11.5K agent hours annually.",
    ],
    tech: ["Java", "Python", "Spring Boot", "AWS", "Kafka", "Docker", "Splunk"],
  },
  {
    role: "Undergraduate Research Assistant",
    company: "CMU LearnLab",
    location: "Pittsburgh, PA",
    dates: "Sep 2024 – May 2025",
    logo: "/learnlab.jpg",
    bullets: [
      "Created the front-end for GPTutor-Math, an AI-powered tutoring platform serving 500+ students.",
      "Enhanced personalized learning by integrating ChatGPT and collaborating on scalable solutions.",
      "Developed responsive UI components and optimized user experience for educational workflows.",
    ],
    tech: ["React", "Next.js", "Python", "ChatGPT API", "TypeScript"],
  },
  {
    role: "Undergraduate Teaching Assistant",
    company: "CMU School of Computer Science",
    location: "Pittsburgh, PA",
    dates: "Jan 2024 – Dec 2024",
    logo: "/cmu.png",
    bullets: [
      "Mentored students in 15-112 Fundamentals of Programming and Computer Science course.",
      "Led recitations and office hours to help students master Python and core CS concepts.",
      "Graded assignments and provided detailed feedback to support learning.",
    ],
    tech: ["Python", "Computer Science Education", "Student Mentoring"],
  },
  {
    role: "Software Engineering Intern",
    company: "Qifu Technology Inc",
    location: "Shenzhen, China",
    dates: "Jun 2024 – Jul 2024",
    logo: "/qifu.png",
    bullets: [
      "Integrated MongoDB into a data platform, improving accessibility and reducing query complexity.",
      "Developed secure access features and contributed to platform updates using DevOps tools.",
      "Collaborated with cross-functional teams to deliver scalable backend solutions.",
    ],
    tech: ["Java", "Spring Boot", "MongoDB", "Docker", "SQL", "DevOps"],
  },
];
