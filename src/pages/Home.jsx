import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Smartphone,
  Code,
  Terminal,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Soumyo Roy | Back-End Developer & App Creator</title>
        <meta
          name="description"
          content="Official portfolio of Soumyo Roy, a Back-End Developer specializing in Ruby on Rails, Go, React, and Android apps."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl w-full pt-20 pb-16 text-center"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto bg-slate-200 dark:bg-slate-800 rounded-full mb-8 overflow-hidden border-4 border-white dark:border-slate-700 shadow-lg transition-colors duration-300">
            <img
              src={`${import.meta.env.BASE_URL}assets/my-img-2.jpeg`}
              alt="Soumyo Roy"
              className="w-full h-full object-cover"
            />
          </div>

          <motion.h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 transition-colors duration-300">
            Hi, I'm{" "}
            <span className="text-blue-600 dark:text-blue-400">Soumyo Roy</span>
          </motion.h1>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
            Back-End Developer & App Creator. Specializing in scalable
            architecture and crafting high-quality Android apps for Google Play.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16">
            <SocialIcon
              href="https://github.com/soumyo78"
              icon={<Github size={24} />}
            />
            <SocialIcon
              href="mailto:dev.soumyo.roy@gmail.com"
              icon={<Mail size={24} />}
            />
            {/* Add your LinkedIn URL if you have one */}
            <SocialIcon href="#" icon={<Linkedin size={24} />} />
          </div>
        </motion.section>

        {/* Primary Focus Areas */}
        <section className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
          <FocusCard
            icon={
              <Smartphone className="text-blue-500 dark:text-blue-400 w-10 h-10 mb-4" />
            }
            title="Google Play Apps"
            description="Developing feature-rich utility and entertainment applications for Android, like the Bangla Hindu Calendar."
          />
          <FocusCard
            icon={
              <Terminal className="text-emerald-500 dark:text-emerald-400 w-10 h-10 mb-4" />
            }
            title="Backend Architecture"
            description="Building robust, scalable server-side solutions utilizing Ruby on Rails, Go, and modern databases."
          />
          <FocusCard
            icon={
              <Code className="text-purple-500 dark:text-purple-400 w-10 h-10 mb-4" />
            }
            title="Frontend & Cross-Platform"
            description="Creating seamless user interfaces using modern React, React Native, and Flutter."
          />
        </section>
      </div>
    </>
  );
}

// Reusable micro-components for the Home page
function SocialIcon({ icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-slate-50 dark:bg-slate-800 rounded-full shadow-sm dark:shadow-none text-slate-600 dark:text-slate-400 border border-transparent dark:border-slate-700 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md dark:hover:border-slate-600 transition-all duration-300 hover:-translate-y-1"
    >
      {icon}
    </a>
  );
}

function FocusCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl dark:shadow-none dark:hover:shadow-2xl dark:hover:shadow-blue-500/10 border border-slate-100 dark:border-slate-700 transition-all duration-300 overflow-hidden"
    >
      {/* Subtle colorful glow effect for dark mode on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10">
        {icon}
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
