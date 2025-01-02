import { FlipWords } from "@/components/ui/flip-words";
import { WavyBackground } from "@/components/ui/wavy-background";
import { FloatingProfile } from "@/components/floating-profile";

export default function Home() {
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
          </WavyBackground>
        </div>
      </main>
    </div>
  );
}
