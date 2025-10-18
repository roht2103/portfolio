"use client";
import { motion } from "motion/react";
import { IconBrandGithub, IconExternalLink, IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

export default function Projects() {
  const featuredProjects = [
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
      liveDemo: "https://zennchat.vercel.app/",
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
      liveDemo: "https://youtube-consol.vercel.app/",
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
      liveDemo: "https://carbonfootprintestimator.vercel.app/",
      featured: true
    }
  ];

  const funProjects = [
    {
      title: "Is Your Birthday Lucky",
      date: "July 2023",
      description: "A fun app to check if your birthday is lucky. Share with friends!",
      technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
      sourceCode: "https://github.com/roht2103/birthday-lucky",
      liveDemo: "https://is-birthday-luckyy.netlify.app"
    },
    {
      title: "Is Your Birthday Palindrome",
      date: "July 2023",
      description: "Check if your birthday is a palindrome date. Fun tool to share with friends!",
      technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
      sourceCode: "https://github.com/roht2103/bithday-palindrome",
      liveDemo: "https://is-birthday-palindromm.netlify.app"
    },
    {
      title: "Cash Register Manager",
      date: "July 2023",
      description: "Calculate the exact change to return to customers. Useful for retail and cash handling.",
      technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
      sourceCode: "https://github.com/roht2103/cash-register-manager",
      liveDemo: "https://cash-register-managerrr.netlify.app"
    },
    {
      title: "Fun with Triangles",
      date: "July 2023",
      description: "Solve triangle quizzes and calculate area using different formulas and hypotenuse.",
      technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
      sourceCode: "https://github.com/roht2103/fun-with-triangles",
      liveDemo: "https://fun-trianglss.netlify.app"
    },
    {
      title: "Emoji Interpreter",
      date: "July 2023",
      description: "Input an emoji and get its meaning. Built with React for a smooth experience.",
      technologies: ["React", "CSS", "JavaScript", "CodeSandbox"],
      sourceCode: "https://github.com/roht2103/emoji-interpreter",
      liveDemo: "https://lj4hs8.csb.app/"
    },
    {
      title: "Stock Purchase Calculator",
      date: "July 2023",
      description: "Calculate profit and loss on stock purchases. Useful for investors and traders.",
      technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
      sourceCode: "https://github.com/roht2103/stock-purchase-calculator",
      liveDemo: "https://stocks-profit-calculator.netlify.app"
    },
    {
      title: "Good Books",
      date: "July 2023",
      description: "Get book recommendations based on categories. Share your favorite reads!",
      technologies: ["React", "CSS", "JavaScript", "CodeSandbox"],
      sourceCode: "https://github.com/roht2103/good-books-suggestion",
      liveDemo: "https://6rm86d.csb.app/"
    },
    {
      title: "Banana Talk",
      date: "July 2023",
      description: "Translate English to Minion language. Fun way to communicate like minions!",
      technologies: ["HTML", "CSS", "JavaScript", "API", "Netlify"],
      sourceCode: "https://github.com/roht2103/banana-talk",
      liveDemo: "https://rohit-talk-banana.netlify.app"
    },
    {
      title: "Yoda Talk",
      date: "July 2023",
      description: "Translate English to Yodish language. Speak like Yoda, you will!",
      technologies: ["HTML", "CSS", "JavaScript", "API", "Netlify"],
      sourceCode: "https://github.com/roht2103/Yoda-speak-translator",
      liveDemo: "https://rohit-yoda-talk.netlify.app"
    },
    {
      title: "How Well Do You Know Me",
      date: "July 2023",
      description: "A CLI quiz app to test how well your friends know you. Built with Node.js.",
      technologies: ["Node.js", "JavaScript", "Replit"],
      sourceCode: "https://replit.com/@RohitThorat2/Doyouknowme#index.js",
      liveDemo: "https://replit.com/@RohitThorat2/quiz?outputonly=1&lite=true"
    }
  ];

  return (
    <div className="min-h-screen py-20 lg:px-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors mb-8"
          >
            <IconArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            All Projects
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A comprehensive collection of my work, from full-stack applications to fun mini-projects
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                    Featured
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 pr-20">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-500 mb-4">{project.date}</p>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600 mt-1.5 flex-shrink-0"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

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
        </motion.section>

        {/* Fun Projects */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8">
            Fun & Experimental Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {funProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                className="group"
              >
                <div className="h-full p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mb-3">{project.date}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-xs rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors duration-200"
                    >
                      <IconBrandGithub className="w-3.5 h-3.5" />
                      Code
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200"
                    >
                      <IconExternalLink className="w-3.5 h-3.5" />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
