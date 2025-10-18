import React from "react";
import Image from "next/image";
import { IconBrandGithub, IconBrandLinkedin,IconBrandTwitter, IconMail, IconMapPin } from "@tabler/icons-react";

export default function Profile() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Profile Info */}
        <div className="flex flex-col items-center lg:items-start space-y-6">
          {/* Profile Image */}
          <div className="relative w-48 h-48 rounded-full overflow-hidden ring-4 ring-slate-300 dark:ring-slate-700 shadow-2xl">
            <Image
              src="/rohit.jpg"
              alt="Profile Picture"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Name and Title */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold mb-2">Rohit Thorat</h1>
            <p className="text-xl mb-4">Aspiring Software Engineer  |  Full Stack Developer  |  AIML</p>
            <p className="max-w-md leading-relaxed">
              “Hi, I’m Rohit — a B.Tech Computer Science student passionate about building modern web apps, scalable systems and solving complex problems
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center lg:justify-start justify-center gap-3">
              <IconMail className="w-5 h-5" />
              <span>rohitthorat680@gmail.com</span>
            </div>
            <div className="flex items-center lg:justify-start justify-center gap-3">
              <IconMapPin className="w-5 h-5" />
              <span>Pune, India</span>
            </div>
            <div className="flex items-center lg:justify-start justify-center gap-3">
                <a href="https://github.com/roht2103">
                    <IconBrandGithub className="w-5 h-5 cursor-pointer" />
                </a>
                <a href="https://linkedin.com/in/rohit-thorat-502566246">
                    <IconBrandLinkedin className="w-5 h-5 cursor-pointer" />
                </a>
                <a href="https://x.com/RohitTh53744122">
                    <IconBrandTwitter className="w-5 h-5 cursor-pointer" />
                </a>
            </div>
          </div>
        </div>

        {/* Right Column - Skills & Experience */}
        <div className="space-y-12">
          {/* Core Skills Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6 border-b border-slate-300 dark:border-slate-700 pb-2">
              Core Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Languages */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="dark:text-slate-400 text-slate-700 text-sm">⚡ Languages</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-slate-200 dark:bg-slate-900 font-medium rounded-4xl text-xs border border-slate-900">
                  Python
                </span>
                <span className="px-4 py-2 bg-slate-200 dark:bg-slate-900 font-medium rounded-4xl text-xs border border-slate-900">
                  Java
                </span>
                <span className="px-4 py-2 bg-slate-200 dark:bg-slate-900 font-medium rounded-4xl text-xs border border-slate-900">
                  C
                </span>
                <span className="px-4 py-2 bg-slate-200 dark:bg-slate-900 font-medium rounded-4xl text-xs border border-slate-900">
                  C++
                </span>
                <span className="px-4 py-2 bg-slate-200 dark:bg-slate-900 font-medium rounded-4xl text-xs border border-slate-900">
                  JavaScript
                </span>
                <span className="px-4 py-2 bg-slate-200 dark:bg-slate-900 font-medium rounded-4xl text-xs border border-slate-900">
                  PHP
                </span>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="dark:text-slate-400 text-slate-700 text-sm">🔧 Technologies</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-slate-200 dark:bg-slate-900 font-medium rounded-4xl text-xs border border-slate-900">
                  MERN Stack
                </span>
                <span className="px-4 py-2 bg-slate-200 dark:bg-slate-900 font-medium rounded-4xl text-xs border border-slate-900">
                  Machine Learning
                </span>
              </div>
            </div>

            {/* Frontend */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="dark:text-slate-400 text-slate-700 text-sm">🎨 Frontend</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-slate-200 dark:bg-slate-900 font-medium rounded-4xl text-xs border border-slate-900">
                  React.js
                </span>
                <span className="px-4 py-2 bg-slate-200 dark:bg-slate-900 font-medium rounded-4xl text-xs border border-slate-900">
                  Next.js
                </span>
                <span className="px-4 py-2 bg-slate-200 dark:bg-slate-900 font-medium rounded-4xl text-xs border border-slate-900">
                  Tailwind CSS
                </span>
                <span className="px-4 py-2 bg-slate-200 dark:bg-slate-900 font-medium rounded-4xl text-xs border border-slate-900">
                  Bootstrap
                </span>
              </div>
            </div>

            {/* Deployment */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="dark:text-slate-400 text-slate-700 text-sm">� Deployment</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-slate-200 dark:bg-slate-900 font-medium rounded-4xl text-xs border border-slate-900">
                  Vercel
                </span>
                <span className="px-4 py-2 bg-slate-200 dark:bg-slate-900 font-medium rounded-4xl text-xs border border-slate-900">
                  Netlify
                </span>
                <span className="px-4 py-2 bg-slate-200 dark:bg-slate-900 font-medium rounded-4xl text-xs border border-slate-900">
                  Render
                </span>
              </div>
            </div>

            {/* Clouds & Databases */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="dark:text-slate-400 text-slate-700 text-sm">💾 Clouds & Databases</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-slate-200 dark:bg-slate-900 font-medium rounded-4xl text-xs border border-slate-900">
                  PostgreSQL
                </span>
                <span className="px-4 py-2 bg-slate-200 dark:bg-slate-900 font-medium rounded-4xl text-xs border border-slate-900">
                  MySQL
                </span>
                <span className="px-4 py-2 bg-slate-200 dark:bg-slate-900 font-medium rounded-4xl text-xs border border-slate-900">
                  Firebase
                </span>
                <span className="px-4 py-2 bg-slate-200 dark:bg-slate-900 font-medium rounded-4xl text-xs border border-slate-900">
                  MongoDB
                </span>
              </div>
            </div>

            {/* Developer Tools */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="dark:text-slate-400 text-slate-700 text-sm">🛠️ Developer Tools</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-slate-200 dark:bg-slate-900 font-medium rounded-4xl text-xs border border-slate-900">
                  VS Code
                </span>
                <span className="px-4 py-2 bg-slate-200 dark:bg-slate-900 font-medium rounded-4xl text-xs border border-slate-900">
                  Postman
                </span>
                <span className="px-4 py-2 bg-slate-200 dark:bg-slate-900 font-medium rounded-4xl text-xs border border-slate-900">
                  Android Studio
                </span>
                <span className="px-4 py-2 bg-slate-200 dark:bg-slate-900 font-medium rounded-4xl text-xs border border-slate-900">
                  GitHub
                </span>
                <span className="px-4 py-2 bg-slate-200 dark:bg-slate-900 font-medium rounded-4xl text-xs border border-slate-900">
                  Docker
                </span>
              </div>
            </div>
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6 border-b border-slate-300 dark:border-slate-700 pb-2">
              Experience
            </h2>

            <div className="space-y-8">
              {/* Experience Item 1 */}
              <div className="relative pl-8 border-l-2 border-slate-300 dark:border-slate-700">
                <div className="absolute left-0 top-6 w-4 h-4 bg-slate-400 dark:bg-slate-400 rounded-full -translate-x-[9px]"></div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">Full Stack Developer</h3>
                    <p className="text-slate-600 italic dark:text-slate-400 text-sm">Intern at EventDoor</p>
                  </div>
                  <span className="text-slate-600 dark:text-slate-400 text-sm whitespace-nowrap">
                    2025 - Present
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  Worked as a Full Stack Developer at EventDoor, developing dashboards in their platform. Gained proficiency in Next.js, Node.js, PostgreSQL (Neon + Drizzle ORM)
                </p>
              </div>

              {/* Experience Item 2 */}
              <div className="relative pl-8 border-l-2 border-slate-300 dark:border-slate-700">
                <div className="absolute left-0 top-6 w-4 h-4 bg-slate-400 dark:bg-slate-400 rounded-full -translate-x-[9px]"></div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">Web Developer</h3>
                    <p className="text-slate-600 italic dark:text-slate-400 text-sm">Intern at Golden Dreams Software Solutions</p>
                  </div>
                  <span className="text-slate-600 dark:text-slate-400 text-sm whitespace-nowrap">
                    2023
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  Successfully completed an internship at Golden Dream Software Solutions. Gained proficiency in HTML, CSS, JavaScript, and jQuery through hands-on training.
                </p>
              </div>

              {/* Experience Item 3 */}
              {/* <div className="relative pl-8 border-l-2 border-slate-700">
                <div className="absolute left-0 top-6 w-4 h-4 bg-slate-400 rounded-full -translate-x-[9px]"></div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">Full Stack Developer</h3>
                    <p className="text-slate-400 text-sm">StartUp Inc</p>
                  </div>
                  <span className="text-slate-400 text-sm whitespace-nowrap">
                    2015 - 2017
                  </span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Built scalable web applications using React and Node.js
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
