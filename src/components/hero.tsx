"use client";

import Image from "next/image";
import { AnimatedSection } from "./ui/animated-section";
import { HoverPreview } from "./ui/hover-preview";
import { motionConfig } from "@/lib/motion";
import { LINKS } from "@/lib/links";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="flex my-6 flex-col gap-4 items-start relative p-4 lg:p-0">
      {/* Avatar */}
      <AnimatedSection delay={motionConfig.pageLoad.avatar}>
        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-100">
            <Image
              src="/kevin_photo.jpg"
              alt="Kevin Zheng"
              fill
              className="object-cover"
              priority
            />
        </div>
      </AnimatedSection>

      {/* Headline */}
      <AnimatedSection delay={motionConfig.pageLoad.headline}>
        <h1 className="text-xl font-medium tracking-tight text-gray-900">
          Hello, I&apos;m Kevin Zheng
        </h1>
      </AnimatedSection>

      {/* Bio Lines */}
      <AnimatedSection delay={motionConfig.pageLoad.bio}>
        <div className="flex flex-col gap-y-4 max-w-2xl text-gray-600 leading-relaxed">
          <p className="text-lg">
            Third-year Computer Science student at Carnegie Mellon University
            with an Information Systems minor, building software that connects
            people.
          </p>
        </div>
      </AnimatedSection>

      {/* Links Row */}
      <AnimatedSection delay={motionConfig.pageLoad.links}>
        <div className="flex flex-wrap items-center gap-x-3 w-fit">
          {LINKS.map((link, index) => {
            const isExternal = link.href.startsWith("http");
            return (
            <motion.a
              key={link.label}
              href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: motionConfig.duration.normal,
                  delay:
                    motionConfig.pageLoad.links +
                    index * motionConfig.stagger.normal,
                ease: motionConfig.easing.default,
              }}
                className="text-xs md:text-sm border-b border-gray-200 font-medium hover:border-gray-500 transition-all duration-300 ease-in-out"
            >
              {link.previewImage ? (
                <HoverPreview image={link.previewImage}>
                  {link.label}
                </HoverPreview>
              ) : (
                link.label
              )}
            </motion.a>
            );
          })}
        </div>
      </AnimatedSection>
    </div>
  );
}
