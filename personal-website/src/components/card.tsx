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
}

export default function Card({ title, content, image, link }: CardProps) {
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
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as={Link}
            href={link}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as={Link}
            href={link}
            target="__blank"
            className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
          >
            Visit
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
