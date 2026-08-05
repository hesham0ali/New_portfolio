"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { ResolvedProjectMetadata } from "@/lib/projects/project-types";
import { motionEase } from "./motion-config";

export function AnimatedProjectGrid({
  projects,
}: {
  projects: ResolvedProjectMetadata[];
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      layout={!reduceMotion}
      className="grid items-stretch gap-6 lg:grid-cols-2"
      transition={{ duration: 0.4, ease: motionEase }}
    >
      <AnimatePresence initial={false} mode="popLayout">
        {projects.length === 0 ? (
          <motion.div
            key="empty-project-state"
            layout={!reduceMotion}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            className="rounded-[1.5rem] border border-dashed border-navy/20 bg-white p-8 text-center text-slate-600 lg:col-span-2"
          >
            No projects match this category.
          </motion.div>
        ) : (
          projects.map((project) => (
            <motion.div
              key={project.slug}
              layout={!reduceMotion}
              initial={
                reduceMotion ? false : { opacity: 0, scale: 0.985, y: 8 }
              }
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={
                reduceMotion
                  ? undefined
                  : { opacity: 0, scale: 0.985, transition: { duration: 0.18 } }
              }
              transition={{ duration: reduceMotion ? 0 : 0.4, ease: motionEase }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))
        )}
      </AnimatePresence>
    </motion.div>
  );
}
