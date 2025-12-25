"use client";
import { motion } from "motion/react";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import { HoverEffect } from "../../components/ui/card-hover-effect";
import { useEffect, useState } from "react";

export default function Projects() {
  const [allProjects, setAllProjects] = useState<any[]>([]);
  const [featuredProjects, setFeaturedProjects] = useState<any[]>([]);
  const [funProjects, setFunProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllProjects = async () => {
    setIsLoading(true);
    const response = await fetch('/api/projects');
    const data = await response.json();
    setAllProjects(data.projects);
    const featured = data.projects.filter((project: { featured: string; }) => project.featured === 'true');
    const fun = data.projects.filter((project: { featured: string; }) => project.featured !== 'true');
    setFeaturedProjects(featured);
    setFunProjects(fun);
    setIsLoading(false);
  }

  useEffect(() => {
    getAllProjects();
  }, []);

  return isLoading ? <div className="h-screen w-screen flex items-center justify-center text-slate-600 dark:text-slate-400">
    Loading projects...
  </div> : <div className="min-h-screen py-20 lg:px-6 px-4">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors mb-8"
        >
          <IconArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-1">
          All Projects
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          A comprehensive collection of my work, from full-stack applications to fun mini-projects
        </p>
        {featuredProjects.length > 0 && <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="mt-8 text-2xl font-bold text-slate-900 dark:text-slate-100">
            Featured Projects
          </h2>
          <HoverEffect items={featuredProjects} />
        </motion.div>}

        {funProjects.length > 0 && <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-16">
            Fun & Experimental Projects
          </h2>
          <HoverEffect items={funProjects} />
        </motion.div>}
      </motion.div>

      {allProjects.length === 0 && <div>
        No Projects</div>}

    </div>
  </div>
}
