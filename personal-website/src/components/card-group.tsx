import Card from "@/components/card";

export default function CardGroup() {
  return (
    <div className="flex flex-row gap-6">
      <Card
        title={"PathToSWE: Land Your Dream Tech Internship"}
        content={
          "Discover, apply, and track software engineering internships—all in one place."
        }
        image="/pathtoswe.jpg"
        link={"https://pathtoswe.vercel.app/"}
      />
      <Card
        title={"GPTutor-Math: Personal AI Tutoring for CMU Students"}
        content={
          "Get step-by-step homework guidance in math courses, with personalized feedback powered by ChatGPT."
        }
        image="/gptutor.png"
        link={"https://gptutor-math.vercel.app/auth/login"}
      />
      <Card
        title={"Time Locker: A Time-Warp Shooter"}
        content={
          "Built in Python, featuring unique mechanics where time moves only when you do. Packed with custom collision detection and endless randomized challenges!"
        }
        image="/timelocker.jpg"
        link={"https://github.com/kevinzheng117/Time-Locker-112-Edition"}
      />
    </div>
  );
}
