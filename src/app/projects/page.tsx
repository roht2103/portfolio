"use client";
import { motion } from "motion/react";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import { HoverEffect } from "../../components/ui/card-hover-effect";

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

  const funProjects = [
    {
      title: "Is Your Birthday Lucky",
      date: "July 2023",
      description: "A fun app to check if your birthday is lucky. Share with friends!",
      technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
      sourceCode: "https://github.com/roht2103/birthday-lucky",
      link: "https://is-birthday-luckyy.netlify.app"
    },
    {
      title: "Is Your Birthday Palindrome",
      date: "July 2023",
      description: "Check if your birthday is a palindrome date. Fun tool to share with friends!",
      technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
      sourceCode: "https://github.com/roht2103/bithday-palindrome",
      link: "https://is-birthday-palindromm.netlify.app"
    },
    {
      title: "Cash Register Manager",
      date: "July 2023",
      description: "Calculate the exact change to return to customers. Useful for retail and cash handling.",
      technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
      sourceCode: "https://github.com/roht2103/cash-register-manager",
      link: "https://cash-register-managerrr.netlify.app"
    },
    {
      title: "Fun with Triangles",
      date: "July 2023",
      description: "Solve triangle quizzes and calculate area using different formulas and hypotenuse.",
      technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
      sourceCode: "https://github.com/roht2103/fun-with-triangles",
      link: "https://fun-trianglss.netlify.app"
    },
    {
      title: "Emoji Interpreter",
      date: "July 2023",
      description: "Input an emoji and get its meaning. Built with React for a smooth experience.",
      technologies: ["React", "CSS", "JavaScript", "CodeSandbox"],
      sourceCode: "https://github.com/roht2103/emoji-interpreter",
      link: "https://lj4hs8.csb.app/"
    },
    {
      title: "Stock Purchase Calculator",
      date: "July 2023",
      description: "Calculate profit and loss on stock purchases. Useful for investors and traders.",
      technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
      sourceCode: "https://github.com/roht2103/stock-purchase-calculator",
      link: "https://stocks-profit-calculator.netlify.app"
    },
    {
      title: "Good Books",
      date: "July 2023",
      description: "Get book recommendations based on categories. Share your favorite reads!",
      technologies: ["React", "CSS", "JavaScript", "CodeSandbox"],
      sourceCode: "https://github.com/roht2103/good-books-suggestion",
      link: "https://6rm86d.csb.app/"
    },
    {
      title: "Banana Talk",
      date: "July 2023",
      description: "Translate English to Minion language. Fun way to communicate like minions!",
      technologies: ["HTML", "CSS", "JavaScript", "API", "Netlify"],
      sourceCode: "https://github.com/roht2103/banana-talk",
      link: "https://rohit-talk-banana.netlify.app"
    },
    {
      title: "Yoda Talk",
      date: "July 2023",
      description: "Translate English to Yodish language. Speak like Yoda, you will!",
      technologies: ["HTML", "CSS", "JavaScript", "API", "Netlify"],
      sourceCode: "https://github.com/roht2103/Yoda-speak-translator",
      link: "https://rohit-yoda-talk.netlify.app"
    },
    {
      title: "How Well Do You Know Me",
      date: "July 2023",
      description: "A CLI quiz app to test how well your friends know you. Built with Node.js.",
      technologies: ["Node.js", "JavaScript", "Replit"],
      sourceCode: "https://replit.com/@RohitThorat2/Doyouknowme#index.js",
      link: "https://replit.com/@RohitThorat2/quiz?outputonly=1&lite=true"
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

      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          Featured Projects
        </h2>
        <HoverEffect items={featuredProjects} />

        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-16">
          Fun & Experimental Projects
        </h2>
        <HoverEffect items={funProjects} />
      </motion.div>
      </div>
    </div>
  );
}
