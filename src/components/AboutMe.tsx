"use client";
import { motion } from "motion/react";
import { IconCode, IconBrain, IconRocket, IconSparkles } from "@tabler/icons-react";

export default function AboutMe() {
  const highlights = [
    {
      icon: <IconCode className="w-6 h-6" />,
      title: "Full Stack Developer",
      description: "MERN Stack, Next.js, TypeScript"
    },
    {
      icon: <IconBrain className="w-6 h-6" />,
      title: "AI/ML Enthusiast",
      description: "Machine Learning, Data Analysis"
    },
    {
      icon: <IconRocket className="w-6 h-6" />,
      title: "IoT & Industry 4.0",
      description: "Building smart solutions"
    },
    {
      icon: <IconSparkles className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Real-world impact projects"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text">
            About Me
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Building the future, one line of code at a time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-20 blur-xl"></div>
              
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                👋 Hey there! I'm{" "}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  Rohit Thorat
                </span>{" "}
                — a passionate Computer Science Engineering student at{" "}
                <span className="font-semibold text-slate-900 dark:text-slate-100">
                  MIT Academy of Engineering, Pune
                </span>
                .
              </p>

              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                I began my journey with a Diploma in Computer Technology from K K Wagh Polytechnic, 
                where I discovered my love for building solutions that merge{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  creativity with code
                </span>
                .
              </p>

              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                I specialize in developing modern web applications using the{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">MERN stack</span>, 
                and I'm also fascinated by{" "}
                <span className="font-semibold text-green-600 dark:text-green-400">IoT</span> {" "}
                innovations. My projects often focus on solving meaningful real-world problems.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border border-blue-200 dark:border-blue-800"
            >
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                💡 Outside of coding, I enjoy learning new technologies, exploring automation, 
                and collaborating with developer communities to bring fresh ideas to life.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              What I Do 🚀
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
