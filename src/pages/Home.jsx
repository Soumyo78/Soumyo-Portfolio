// src/pages/Home.jsx
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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full pt-20 pb-16 text-center"
      >
        <div className="w-32 h-32 mx-auto bg-slate-200 rounded-full mb-8 overflow-hidden border-4 border-white shadow-lg">
          {/* Replace this src with your actual professional photo from your assets */}
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Soumyo"
            alt="Soumyo Roy"
            className="w-full h-full object-cover"
          />
        </div>

        <motion.h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
          Hi, I'm <span className="text-blue-600">Soumyo Roy</span>
        </motion.h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
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
          icon={<Smartphone className="text-blue-500 w-10 h-10 mb-4" />}
          title="Google Play Apps"
          description="Developing feature-rich utility and entertainment applications for Android, like the Bangla Hindu Calendar."
        />
        <FocusCard
          icon={<Terminal className="text-emerald-500 w-10 h-10 mb-4" />}
          title="Backend Architecture"
          description="Building robust, scalable server-side solutions utilizing Ruby on Rails, Go, and modern databases."
        />
        <FocusCard
          icon={<Code className="text-purple-500 w-10 h-10 mb-4" />}
          title="Frontend & Cross-Platform"
          description="Creating seamless user interfaces using modern React, React Native, and Flutter."
        />
      </section>
    </div>
  );
}

// Reusable micro-components for the Home page
function SocialIcon({ icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-white rounded-full shadow-sm text-slate-600 hover:text-blue-600 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
    >
      {icon}
    </a>
  );
}

function FocusCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300"
    >
      {icon}
      <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}
