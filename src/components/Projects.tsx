"use client";
import { motion } from "motion/react";
import { IconBrandGithub, IconExternalLink, IconArrowRight } from "@tabler/icons-react";

export default function Projects() {
  const projects = [
    {
      title: "YouTube Companion Dashboard",
      description: "Developed YouTube management platform using Next.js, TypeScript, PostgreSQL with video editing, comment moderation, and OAuth authentication",
      highlights: [
        "Built full-stack dashboard with YouTube Data API v3 integration",
        "Clerk authentication and activity tracking system",
        "Video editing and comment moderation features"
      ],
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "YouTube API", "Clerk Auth"],
      sourceCode: "https://github.com/roht2103/YouTube-Companion-Dashboard",
      liveDemo: "https://youtube-consol.vercel.app/"
    },
    {
      title: "Carbon Footprint Estimator",
      description: "Built a full-stack Carbon Footprint Estimator using Next.js, Flask, and ML for real-time emission predictions",
      highlights: [
        "Integrated Clerk auth, Drizzle ORM, and PostgreSQL",
        "Machine Learning for real-time predictions",
        "Deployed with Docker on Vercel and Render"
      ],
      technologies: ["Next.js", "Flask", "Machine Learning", "Docker", "PostgreSQL"],
      sourceCode: "https://github.com/roht2103/carbon-footprint-estimator",
      liveDemo: "https://carbonfootprintestimator.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 lg:px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in full-stack development, 
            machine learning, and cloud deployment
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Project Number */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-sm font-bold text-slate-600 dark:text-slate-400">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3 pr-12">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600 mt-1.5 flex-shrink-0"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors duration-200"
                  >
                    <IconBrandGithub className="w-4 h-4" />
                    Source Code
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200"
                  >
                    <IconExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold rounded-lg border-2 border-slate-900 dark:border-slate-100 text-slate-900 dark:text-slate-100 hover:bg-slate-900 hover:text-white dark:hover:bg-slate-100 dark:hover:text-slate-900 transition-all duration-300 group"
          >
            View All Projects
            <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
