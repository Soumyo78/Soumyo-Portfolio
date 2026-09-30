import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Card from "../components/ui/Card";
import { playStoreApps } from "../data/projects";
import { blurUp, ease } from "../lib/motion";
import { canonical } from "../lib/site";

export default function Apps() {
  return (
    <>
      <Helmet>
        <title>Google Play Showcase | Soumyo Roy</title>
        <meta
          name="description"
          content="A collection of my published Android applications, focusing on clean UI, smooth performance, and practical utility."
        />
        <link rel="canonical" href={canonical("/apps")} />
      </Helmet>

      <div className="mx-auto min-h-screen max-w-6xl px-4 pb-24 pt-28 sm:px-6 sm:pt-32">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mb-12 text-center md:text-left"
        >
          <motion.h1 variants={blurUp()} className="mb-4 text-title font-extrabold">
            <span className="text-gradient">Google Play Showcase</span>
          </motion.h1>
          <motion.p variants={blurUp()} className="max-w-2xl text-lg text-muted">
            A collection of my published Android applications, focusing on clean
            UI, smooth performance, and practical utility.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {playStoreApps.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.8, ease: ease.outExpo }}
            >
              <Card data={app} variant="phone" />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
