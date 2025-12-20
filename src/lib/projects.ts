export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
  previewImage?: string;
  enablePreview?: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: "PathToSWE: Land Your Dream Tech Internship",
    description:
      "Discover, apply, and track software engineering internships—all in one place.",
    image: "/pathtoswe.png",
    link: "https://pathtoswe.vercel.app/",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "AWS",
      "PostgreSQL",
    ],
    previewImage: "/pathtoswe.png",
    enablePreview: true,
  },
  {
    title: "TalkTalk: Learn Languages Through Social Connection",
    description:
      "Experience language learning like your favorite social media feed—with short videos, built-in quizzes, and voice feedback to help you practice as you scroll.",
    image: "/talktalk.png",
    link: "https://talktalk-henna.vercel.app/",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "PostgreSQL",
      "Python",
      "Azure API",
    ],
    previewImage: "/talktalk.png",
    enablePreview: true,
  },
  {
    title: "GPTutor-Math: Personal AI Tutoring for CMU Students",
    description:
      "Get step-by-step homework guidance in math courses, with personalized feedback powered by ChatGPT.",
    image: "/gptutor.png",
    link: "https://gptutor-math.vercel.app/auth/login",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "ChatGPT API",
    ],
    previewImage: "/gptutor.png",
    enablePreview: true,
  },
  {
    title: "Time Locker: A Time-Warp Shooter",
    description:
      "Built in Python, featuring unique mechanics where time moves only when you do. Packed with custom collision detection and endless randomized challenges!",
    image: "/timelocker.jpg",
    link: "https://github.com/kevinzheng117/Time-Locker-112-Edition",
    technologies: ["Python"],
    enablePreview: false,
  },
];
