import Card from "@/components/card";

export default function CardGroup() {
  return (
    <div className="flex flex-row gap-10 mx-32 flex-wrap justify-center">
      <Card
        title={"PathToSWE: Land Your Dream Tech Internship"}
        content={
          "Discover, apply, and track software engineering internships—all in one place."
        }
        image="/pathtoswe.jpg"
        link={"https://pathtoswe.vercel.app/"}
        technologies={[
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Next.js",
          "AWS",
          "PostgreSQL",
        ]}
      />
      <Card
        title={"TalkTalk: Learn Languages Through Social Connection"}
        content={
          "Experience language learning like your favorite social media feed—with short videos, built-in quizzes, and voice feedback to help you practice as you scroll."
        }
        image="/talktalk.png"
        link={"https://talktalk-henna.vercel.app/"}
        technologies={[
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Next.js",
          "PostgreSQL",
          "Python",
          "Azure API",
        ]}
      />
      <Card
        title={"GPTutor-Math: Personal AI Tutoring for CMU Students"}
        content={
          "Get step-by-step homework guidance in math courses, with personalized feedback powered by ChatGPT."
        }
        image="/gptutor.png"
        link={"https://gptutor-math.vercel.app/auth/login"}
        technologies={[
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Next.js",
          "ChatGPT API",
        ]}
      />
      <Card
        title={"Time Locker: A Time-Warp Shooter"}
        content={
          "Built in Python, featuring unique mechanics where time moves only when you do. Packed with custom collision detection and endless randomized challenges!"
        }
        image="/timelocker.jpg"
        link={"https://github.com/kevinzheng117/Time-Locker-112-Edition"}
        technologies={["Python"]}
      />
    </div>
  );
}
