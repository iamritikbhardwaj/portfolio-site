"use client";

import React, { useState } from "react";
import { ProjectCard, type Project } from "./ProjectCard";

interface ProjectsToggleProps {
  hiddenProjects: Project[];
}

export default function ProjectsToggle({ hiddenProjects }: ProjectsToggleProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {isExpanded &&
        hiddenProjects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}

      <div className="mt-16 flex justify-center">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-8 py-3 bg-elevated border border-border-standard font-mono-btn text-accent-lime hover:bg-border-soft transition-colors duration-200"
        >
          [{isExpanded ? "COLLAPSE_LIST" : "EXPAND_CASE_STUDIES"}]
        </button>
      </div>
    </>
  );
}
