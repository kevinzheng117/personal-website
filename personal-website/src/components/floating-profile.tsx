"use client";

import * as React from "react";
import {
  IconBrandGithubFilled as Github,
  IconMailFilled as Email,
  IconBrandLinkedinFilled as Linkedin,
} from "@tabler/icons-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function FloatingProfile() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const profileRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (profileRef.current) {
      observer.observe(profileRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={profileRef} className="h-0" />
      <div className="md:fixed absolute inset-x-0 top-0 z-50">
        <div className="mx-auto w-full">
          <div className="relative flex items-center justify-between p-4">
            <div
              className={`transition-all duration-500 ease-in-out ${
                isScrolled ? "translate-x-0" : "translate-x-[calc(50vw-120px)]"
              }`}
            >
              <Avatar className="h-12 w-12 border-2 border-primary">
                <AvatarImage src="/kevin_photo.jpg" alt="Profile" />
                <AvatarFallback>Kevin Avatar</AvatarFallback>
              </Avatar>
            </div>
            <div
              className={`flex items-center gap-2 transition-all duration-500 ease-in-out ${
                isScrolled ? "translate-x-0" : "-translate-x-[calc(50vw-120px)]"
              }`}
            >
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full"
              >
                <a
                  href="https://github.com/kevinzheng117"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full"
              >
                <a
                  href="mailto:zhenghaoyang141@gmail.com"
                  rel="noopener noreferrer"
                >
                  <Email className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full"
              >
                <a
                  href="https://www.linkedin.com/in/kevin-zheng-h7/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
