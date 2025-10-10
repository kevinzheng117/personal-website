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
      "Built Python/Java microservices to automate auto-loan document processing and validation.",
      "Reduced manual reviews; added real-time notifications using AWS + Kafka.",
      "Integrated Spring Boot services with observability and fault-tolerant retries.",
    ],
    tech: [
      "Java",
      "Python",
      "Spring Boot",
      "AWS",
      "Kafka",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    role: "Undergraduate Research Assistant",
    company: "LearnLab at Carnegie Mellon University",
    location: "Pittsburgh, PA",
    dates: "Sep 2024 – May 2025",
    logo: "/learnlab.jpg",
    bullets: [
      "Created the front-end for GPTutor-Math, an AI-powered tutoring platform serving 500+ students.",
      "Enhanced personalized learning by integrating ChatGPT and collaborating on scalable AI solutions.",
      "Developed responsive UI components and optimized user experience for educational workflows.",
    ],
    tech: ["React", "Next.js", "Python", "ChatGPT API", "TypeScript"],
  },
  {
    role: "Undergraduate Teaching Assistant",
    company: "Carnegie Mellon University",
    location: "Pittsburgh, PA",
    dates: "Jan 2024 – Dec 2024",
    logo: "/cmu.png",
    bullets: [
      "Led recitations and office hours to help students master Python and core CS concepts.",
      "Graded assignments and provided detailed feedback to support learning.",
      "Mentored students in 15-112 Fundamentals of Programming and Computer Science course.",
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
      "Integrated MongoDB into a big data platform, improving data accessibility and reducing query complexity.",
      "Developed secure access features and contributed to platform updates using modern DevOps tools.",
      "Collaborated with cross-functional teams to deliver scalable backend solutions.",
    ],
    tech: ["Java", "Spring Boot", "MongoDB", "Docker", "SQL", "DevOps"],
  },
];
