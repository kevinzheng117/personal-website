"use client";

import { Project } from "@/lib/projects";
import { TagPill } from "./ui/tag-pill";
import { HoverPreview } from "./ui/hover-preview";
import Link from "next/link";

interface ProjectItemProps {
  project: Project;
}

export function ProjectItem({ project }: ProjectItemProps) {
  const shouldPreview =
    project.enablePreview !== false && !!project.previewImage;

  const titleLink = (
    <Link
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-fit text-base font-medium text-gray-900 border-b border-gray-200 hover:border-gray-500 transition-all duration-300 ease-in-out"
    >
      {project.title}
    </Link>
  );

  return (
    <div className="flex flex-col gap-y-2 group relative">
      {/* Project Title */}
      {shouldPreview ? (
        <HoverPreview image={project.previewImage!}>
          {titleLink}
        </HoverPreview>
      ) : (
        titleLink
      )}

      {/* Description */}
      <p className="text-sm text-gray-600">{project.description}</p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <TagPill key={tech}>{tech}</TagPill>
        ))}
      </div>
    </div>
  );
}

