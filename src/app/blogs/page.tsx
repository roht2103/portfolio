"use client";
import { motion } from "motion/react";
import { IconArrowLeft, IconBook } from "@tabler/icons-react";
import Link from "next/link";
import { HoverEffect } from "../../components/ui/card-hover-effect";
import { useEffect, useState } from "react";

export default function Blogs() {
  const [allBlogs, setAllBlogs] = useState<any[]>([]);
  const [featuredBlogs, setFeaturedBlogs] = useState<any[]>([]);
  const [regularBlogs, setRegularBlogs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllBlogs = async () => {
    setIsLoading(true);
    const response = await fetch('/api/blogs');
    const data = await response.json();
    setAllBlogs(data.blogs);
    const featured = data.blogs.filter((blog: { featured: string; }) => blog.featured === 'true');
    const regular = data.blogs.filter((blog: { featured: string; }) => blog.featured !== 'true');
    setFeaturedBlogs(featured);
    setRegularBlogs(regular);
    setIsLoading(false);
  }

  useEffect(() => {
    getAllBlogs();
  }, []);

  return isLoading ? (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center text-slate-600 dark:text-slate-400">
        Loading blogs...
      </div>
    </div>
  ) : (
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
            All Blogs
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Articles and insights on web development, technology, and more
          </p>
        </motion.div>

        {allBlogs.length === 0 && (
          <div>
            No Blogs
          </div>
        )}

        {featuredBlogs.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Featured Blogs
            </h2>
            <HoverEffect items={featuredBlogs} />
          </motion.div>
        )}

        {regularBlogs.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-16">
              More Blogs
            </h2>
            <HoverEffect items={regularBlogs} />
          </motion.div>
        )}
      </div>
    </div>
  );
}
