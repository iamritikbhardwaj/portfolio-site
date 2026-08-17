import React from "react";

type Project = {
  id: string;
  title: string;
  problem: string;
  solution: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  visual: React.ReactNode;
};

export type { Project };

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col md:flex-row gap-8 border border-border-soft bg-surface p-8">
      <div className="w-full md:w-1/2 flex flex-col">
        <span className="font-mono-label text-text-muted mb-4">
          {project.id}
        </span>
        <h3 className="font-h1 text-text-primary text-[24px] mb-6 leading-tight">
          {project.title}
        </h3>

        <div className="space-y-4 mb-8 text-[14px]">
          <div>
            <span className="font-mono-label text-text-disabled block mb-1">
              PROBLEM:
            </span>
            <p className="font-body-md text-text-secondary">
              {project.problem}
            </p>
          </div>
          <div>
            <span className="font-mono-label text-text-disabled block mb-1">
              SOLUTION:
            </span>
            <p className="font-body-md text-text-secondary">
              {project.solution}
            </p>
          </div>
          <div>
            <span className="font-mono-label text-text-disabled block mb-1">
              OUTCOME:
            </span>
            <p className="font-body-md text-text-primary">
              {project.outcome}
            </p>
          </div>
        </div>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, tidx) => (
              <span
                key={tidx}
                className="px-2 py-1 bg-elevated border border-border-standard font-mono-label text-text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-8 border-t border-border-soft pt-4">
            {project.metrics.map((metric, midx) => (
              <div key={midx}>
                <span className="font-mono-label text-text-disabled block">
                  {metric.label}
                </span>
                <span className="font-mono-btn text-accent-lime">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center">
        {project.visual}
      </div>
    </div>
  );
}
