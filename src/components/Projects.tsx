"use client";
import { motion } from "motion/react";
import { IconArrowRight } from "@tabler/icons-react";
import { HoverEffect } from "./ui/card-hover-effect";

export default function Projects() {
  const projects = [
    {
      title: "Positive and Scheduled Chat Experience System",
      date: "2024",
      description: "Chat app with sentiment analysis for real-time feedback on message tone.",
      highlights: [
        "Real-time sentiment analysis for message tone feedback",
        "Scheduled messaging with planned delivery",
        "Enhanced user experience and communication"
      ],
      technologies: ["React.js", "JavaScript", "Sentiment Analysis", "WebSocket"],
      sourceCode: "https://github.com/roht2103/chat-app",
      link: "https://zennchat.vercel.app/",
      featured: true
    },
    {
      title: "YouTube Companion Dashboard",
      date: "2024",
      description: "YouTube management platform with video editing, comment moderation, and OAuth authentication",
      highlights: [
        "YouTube Data API v3 integration",
        "Clerk authentication and activity tracking",
        "Video editing and comment moderation features"
      ],
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "YouTube API", "Clerk"],
      sourceCode: "https://github.com/roht2103/YouTube-Companion-Dashboard",
      link: "https://youtube-consol.vercel.app/",
      featured: true
    },
    {
      title: "Carbon Footprint Estimator",
      date: "2024",
      description: "Full-stack Carbon Footprint Estimator with ML for real-time emission predictions",
      highlights: [
        "Machine Learning for real-time predictions",
        "Clerk auth, Drizzle ORM, and PostgreSQL",
        "Deployed with Docker on Vercel and Render"
      ],
      technologies: ["Next.js", "Flask", "Machine Learning", "Docker", "PostgreSQL"],
      sourceCode: "https://github.com/roht2103/carbon-footprint-estimator",
      link: "https://carbonfootprintestimator.vercel.app/",
      featured: true
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
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in full-stack development, 
            machine learning, and cloud deployment
          </p>

          <HoverEffect items={projects} />
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-0"
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
