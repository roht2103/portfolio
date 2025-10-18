"use client";
import { motion } from "motion/react";
import { IconArrowLeft, IconExternalLink, IconCalendar, IconBook } from "@tabler/icons-react";
import Link from "next/link";

export default function Blogs() {
  const blogs = [
    {
      title: "Getting Started with React.js: A Beginner's Guide",
      date: "2023",
      description: "A comprehensive guide for beginners diving into React.js development",
      highlights: [
        "What is React?",
        "Setting Up Your Development Environment",
        "Understanding React Components",
        "Creating Your First Component"
      ],
      category: "Web Development",
      url: "https://medium.com/@rohitthorat680/getting-started-with-react-js-a-beginners-guide-c39ac1d02fe4",
      featured: true
    },
    {
      title: "The Rise of 5G Technology: Transforming Connectivity and Beyond",
      date: "2023",
      description: "Exploring how 5G is revolutionizing connectivity and its impact across industries",
      highlights: [
        "Understanding 5G Technology",
        "Key Features of 5G",
        "The Impact on Industries",
        "Challenges and Considerations"
      ],
      category: "Technology",
      url: "https://medium.com/@rohitthorat680/the-rise-of-5g-technology-transforming-connectivity-and-beyond-9ac4b5d435c7",
      featured: true
    },
    {
      title: "What is Git?",
      date: "2023",
      description: "Understanding Git as a distributed version control system for source code management",
      highlights: [
        "Tracking changes in source code",
        "Distributed version control tool",
        "Enabling multiple developers collaboration",
        "Supporting non-linear development"
      ],
      category: "Development Tools",
      url: "https://rohit-what-is-git.netlify.app",
      featured: false
    },
    {
      title: "Icons with Font Awesome",
      date: "2023",
      description: "Revolutionizing web design with iconic fonts and extensive icon library",
      highlights: [
        "Font Awesome: Revolutionizing Web Design",
        "Extensive Icon Library",
        "How to set up",
        "Easy Integration"
      ],
      category: "Web Design",
      url: "https://medium.com/@rohitthorat680/icons-with-font-awesome-31cf9782553c",
      featured: false
    },
    {
      title: "What is CSS?",
      date: "2023",
      description: "Understanding Cascading Style Sheets and how they control web page presentation",
      highlights: [
        "CSS stands for Cascading Style Sheets",
        "Describing HTML element display",
        "Controlling layout of multiple pages",
        "External stylesheet storage"
      ],
      category: "Web Development",
      url: "https://medium.com/@rohitthorat680/what-is-css-5c0ca94d3e08",
      featured: false
    },
    {
      title: "What Actually HTML is?",
      date: "2023",
      description: "A fundamental guide to understanding HTML as the backbone of web development",
      highlights: [
        "Standard markup language for web pages",
        "HTML stands for Hyper Text Markup Language",
        "Describing web page structure",
        "HTML elements and browser display"
      ],
      category: "Web Development",
      url: "https://medium.com/@rohitthorat680/what-actually-html-is-9f7b100cd271",
      featured: false
    }
  ];

  const featuredBlogs = blogs.filter(blog => blog.featured);
  const regularBlogs = blogs.filter(blog => !blog.featured);

  return (
    <div className="min-h-screen py-20 px-6">
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
            Blog Posts
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Thoughts on web development, technology, and everything in between
          </p>
        </motion.div>

        {/* Featured Blogs */}
        {featuredBlogs.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8 flex items-center gap-2">
              <IconBook className="w-6 h-6" />
              Featured Posts
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredBlogs.map((blog, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group"
                >
                  <div className="h-full p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                        {blog.category}
                      </span>
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300">
                        Featured
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {blog.title}
                    </h3>

                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500 mb-4">
                      <IconCalendar className="w-4 h-4" />
                      <span>{blog.date}</span>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                      {blog.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {blog.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={blog.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 transition-all duration-200 group"
                    >
                      Read Full Article
                      <IconExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>
        )}

        {/* All Blog Posts */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8">
            All Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularBlogs.map((blog, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                className="group"
              >
                <div className="h-full p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {blog.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500 mb-3">
                    <IconCalendar className="w-3.5 h-3.5" />
                    <span>{blog.date}</span>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed line-clamp-2">
                    {blog.description}
                  </p>

                  <ul className="space-y-1.5 mb-4">
                    {blog.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <span className="w-1 h-1 rounded-full bg-slate-400 mt-1.5 flex-shrink-0"></span>
                        <span className="line-clamp-1">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                  >
                    Read More
                    <IconExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
