"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export interface CardProps {
  title: string;
  content: string;
  image: string;
  link: string;
  technologies: string[];
}

export default function Card({
  title,
  content,
  image,
  link,
  technologies,
}: CardProps) {
  return (
    <CardContainer className="inter-var w-full" containerClassName="py-0">
      <CardBody
        className="
          relative 
          group/card 
          hover:shadow-2xl 
          hover:shadow-emerald-500/[0.1] 
          bg-black 
          border-white/[0.2] 
          w-[90vw]           /* Fill available width on mobile */
          md:w-[30rem]     /* Wider on larger screens */
          h-auto 
          rounded-xl 
          p-4             /* Smaller padding on mobile */
          sm:p-6          /* Larger padding on bigger screens */
          border
        "
      >
        <CardItem translateZ="50" className="text-xl font-bold text-white">
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-neutral-300"
        >
          {content}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        {/* Technologies Row and Visit Button */}
        <div className="flex justify-between items-end mt-8 gap-4">
          <CardItem
            translateZ="60"
            className="flex-1 transition-all duration-200 ease-linear"
          >
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs bg-black/60 text-gray-200 rounded border border-gray-600 hover:bg-gray-800 transition-all duration-200 ease-linear"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardItem>

          <CardItem
            translateZ="80"
            as={Link}
            href={link}
            target="__blank"
            className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold hover:bg-gray-100 transition-all duration-200 ease-linear transform hover:scale-105 flex-shrink-0 flex items-center gap-1 group"
          >
            Visit
            <span className="text-xs transition-transform duration-200 ease-linear group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
