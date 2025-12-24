"use client";
import { motion } from "motion/react";
import { IconArrowLeft, IconBook } from "@tabler/icons-react";
import Link from "next/link";
import { HoverEffect } from "../../components/ui/card-hover-effect";

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
      link: "https://medium.com/@rohitthorat680/getting-started-with-react-js-a-beginners-guide-c39ac1d02fe4",
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
      link: "https://medium.com/@rohitthorat680/the-rise-of-5g-technology-transforming-connectivity-and-beyond-9ac4b5d435c7",
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
      link: "https://rohit-what-is-git.netlify.app",
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
      link: "https://medium.com/@rohitthorat680/icons-with-font-awesome-31cf9782553c",
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
      link: "https://medium.com/@rohitthorat680/what-is-css-5c0ca94d3e08",
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
      link: "https://medium.com/@rohitthorat680/what-actually-html-is-9f7b100cd271",
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
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <IconBook className="w-6 h-6" />
              Featured Posts
            </h2>
            <HoverEffect items={featuredBlogs} className="grid-cols-1 lg:grid-cols-2" />
          </motion.section>
        )}

        {/* All Blog Posts */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            All Posts
          </h2>
          <HoverEffect items={regularBlogs} />
        </motion.section>
      </div>
    </div>
  );
}
