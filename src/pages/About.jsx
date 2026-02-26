import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Code2,
  MonitorCheck,
  MapPin,
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen py-20 px-6 max-w-5xl mx-auto">
      {/* Profile & Intro Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row gap-10 items-center md:items-start mb-20 bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800"
      >
        <div className="w-48 h-48 flex-shrink-0 rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 border-4 border-white dark:border-slate-700 shadow-lg">
          {/* REPLACE THIS IMAGE PATH WITH YOUR ACTUAL PROFILE PICTURE */}
          <img
            src={`${import.meta.env.BASE_URL}assets/my-img-1.jpeg`}
            alt="Soumyo Roy"
            onError={(e) => {
              e.target.src =
                "https://api.dicebear.com/7.x/avataaars/svg?seed=Soumyo";
            }}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
            Soumyo Roy
          </h1>
          <h2 className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
            Back-End & Full Stack Developer
          </h2>
          <p className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-6 font-medium">
            <MapPin size={18} /> West Bengal, India
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            I am a passionate software developer specializing in building
            robust, scalable applications. With a strong foundation in Ruby on
            Rails and modern front-end technologies like React, I craft seamless
            digital experiences from the database architecture to the user
            interface.
          </p>
        </div>
      </motion.section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Experience & Education */}
        <div className="space-y-12">
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-blue-500 w-8 h-8" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Experience
              </h2>
            </div>
            <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-4 space-y-8">
              <TimelineItem
                title="Back-end Developer"
                subtitle="Alien Brains"
                date="2021 - Present"
                description="Core focus on server-side logic, database architecture, and API development utilizing Ruby, Rails, Rspec, Jira, Heroku, REST APIs, and PostgreSQL."
              />
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-purple-500 w-8 h-8" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Education
              </h2>
            </div>
            <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-4 space-y-8">
              <TimelineItem
                title="Full Stack Web Development"
                subtitle="Alien Brains Educations"
                date="2020 - 2021"
                description="React Js, Ruby on Rails, PostgreSQL"
              />
              <TimelineItem
                title="B.Sc. Honours in Physics"
                subtitle="University of Kalyani"
                date="2018 - 2020"
                description="Score: 72.62%"
              />
              <TimelineItem
                title="Diploma in Computer Application & Programming"
                subtitle="Jawaharlal Nehru National Youth Center"
                date="2018"
                description="Score: 95%"
              />
              <TimelineItem
                title="Higher Secondary (WBCHSE)"
                subtitle="Krishnanagar Collegiate School"
                date="2017"
                description="Score: 79.4%"
              />
            </div>
          </section>
        </div>

        {/* Right Column: Skills & Knowledge */}
        <div className="space-y-12">
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Code2 className="text-emerald-500 w-8 h-8" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Coding Skills
              </h2>
            </div>
            <div className="space-y-6 bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800">
              <SkillBar name="Rails" percentage={80} color="bg-red-500" />
              <SkillBar name="Ruby" percentage={75} color="bg-red-400" />
              <SkillBar
                name="JavaScript"
                percentage={70}
                color="bg-yellow-400"
              />
              <SkillBar name="React JS" percentage={60} color="bg-blue-400" />
              <SkillBar name="CSS / SCSS" percentage={65} color="bg-pink-500" />
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-8">
              <MonitorCheck className="text-orange-500 w-8 h-8" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Design & Architecture
              </h2>
            </div>
            <div className="space-y-6 bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800">
              <SkillBar
                name="Web Designing"
                percentage={80}
                color="bg-indigo-500"
              />
              <SkillBar
                name="Database Designing"
                percentage={90}
                color="bg-emerald-500"
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Core Knowledge & Tools
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Git",
                "GitHub",
                "GitLab",
                "Docker",
                "Jira",
                "Confluence",
                "Redux",
                "Bootstrap",
                "HTML5",
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-semibold border border-slate-200 dark:border-slate-700"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Currently Exploring & Expanding
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Next Js",
                "React Native",
                "Tailwind CSS",
                "Agentic AI",
                "Linux (CachyOS, Ubuntu, Zorin OS, Mint)",
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-semibold border border-blue-100 dark:border-blue-800/50"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

// Micro-components for the About page
function TimelineItem({ title, subtitle, date, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative pl-8"
    >
      {/* Timeline Dot */}
      <div className="absolute left-[-9px] top-1.5 w-4 h-4 bg-white dark:bg-slate-900 border-4 border-blue-500 rounded-full" />

      <div className="mb-1 text-sm font-bold text-blue-600 dark:text-blue-400">
        {date}
      </div>
      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
        {title}
      </h3>
      <h4 className="text-md font-medium text-slate-600 dark:text-slate-400 mb-2">
        {subtitle}
      </h4>
      {description && (
        <p className="text-sm text-slate-500 dark:text-slate-500 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}

function SkillBar({ name, percentage, color }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
          {name}
        </span>
        <span className="text-sm font-medium text-slate-500">
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-2.5 rounded-full ${color}`}
        />
      </div>
    </div>
  );
}
