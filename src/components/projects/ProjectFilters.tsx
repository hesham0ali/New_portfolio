"use client";

import { useState } from "react";
import { AnimatedProjectGrid } from "@/components/motion/AnimatedProjectGrid";
import type { ResolvedProjectMetadata } from "@/lib/projects/project-types";

const allCategory = "الكل";

export function ProjectFilters({
  projects,
  categories,
}: {
  projects: ResolvedProjectMetadata[];
  categories: string[];
}) {
  const [selectedCategory, setSelectedCategory] = useState(allCategory);
  const visibleProjects =
    selectedCategory === allCategory
      ? projects
      : projects.filter((project) =>
          project.categories.includes(selectedCategory),
        );

  return (
    <div>
      <div
        aria-label="تصفية المشروعات حسب التصنيف"
        className="-mx-5 mb-8 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0"
      >
        <div className="flex min-w-max gap-2" role="group">
          {[allCategory, ...categories].map((category) => {
            const selected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={selected}
                onClick={() => setSelectedCategory(category)}
                className={`inline-flex min-h-11 items-center rounded-full border px-4 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue ${
                  selected
                    ? "border-blue bg-blue text-white"
                    : "border-navy/15 bg-white text-navy hover:border-blue/40 hover:text-blue"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        عدد المشروعات الظاهرة: {visibleProjects.length}.
      </p>
      <AnimatedProjectGrid projects={visibleProjects} />
    </div>
  );
}
