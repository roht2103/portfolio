"use client";
import { motion } from "motion/react";
import { IconArrowRight } from "@tabler/icons-react";
import { HoverEffect } from ".//ui/card-hover-effect";
import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProjects = async () => {
    setIsLoading(true);
    const response = await fetch('/api/featured3');
    const data = await response.json();
    setProjects(data.projects);
    setIsLoading(false);
  }

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <section id="projects" className="py-8 lg:py-8 px-4 lg:px-6 min-h-screen flex items-center">
      <div className="max-w-7xl w-full mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col h-full"
        >
          <div className="mb-4">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-2 text-slate-900 dark:text-slate-100">
              Featured Projects
            </h2>
            <p className="text-center text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A collection of projects showcasing my skills in full-stack development,
              machine learning, and cloud deployment
            </p>
          </div>

          {isLoading ? <div className="h-screen text-center">Loading Projects...</div> : <HoverEffect items={projects} className="flex-grow" />}
          <div className="w-full flex justify-end mt-4">
            <a
              href="/projects"
              className="flex items-center justify-center w-fit gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg border-2 border-slate-900 dark:border-slate-100 text-slate-900 dark:text-slate-100 hover:bg-slate-900 hover:text-white dark:hover:bg-slate-100 dark:hover:text-slate-900 transition-all duration-300 group"
            >
              View All Projects
              <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
