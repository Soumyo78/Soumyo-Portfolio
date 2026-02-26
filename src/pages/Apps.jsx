import React from "react";
import { motion } from "framer-motion";
import Card from "../components/ui/Card";
import { playStoreApps } from "../data/projects";

export default function Apps() {
  return (
    <div className="min-h-screen py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center md:text-left"
      >
        <h1 className="text-4xl font-extrabold text-slate-400 mb-4">
          Google Play Showcase
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          A collection of my published Android applications, focusing on clean
          UI, smooth performance, and practical utility.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {playStoreApps.map((app, index) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card data={app} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
