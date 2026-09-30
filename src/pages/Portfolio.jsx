// src/pages/Portfolio.jsx
import React, { useCallback, useRef, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import Card from "../components/ui/Card";
import ProjectModal from "../components/ui/ProjectModal";
import { portfolioData } from "../data/projects";
import { blurUp, spring } from "../lib/motion";
import { canonical } from "../lib/site";

export default function Portfolio() {
  const categories = Object.keys(portfolioData);
  // ?tab=react (etc.) opens that category directly, e.g. from the About page
  const [searchParams, setSearchParams] = useSearchParams();
  const requested = searchParams.get("tab");
  const [activeTab, setActiveTabState] = useState(
    categories.includes(requested) ? requested : "featured",
  );
  const [selected, setSelected] = useState(null);

  const setActiveTab = (cat) => {
    setActiveTabState(cat);
    setSearchParams(cat === "featured" ? {} : { tab: cat }, { replace: true });
  };
  const tabRefs = useRef({});

  const closeModal = useCallback(() => setSelected(null), [setSelected]);

  // Roving focus for the tablist: arrows / Home / End move and select
  const onTabKeyDown = (e, index) => {
    const last = categories.length - 1;
    const next =
      e.key === "ArrowRight" ? (index === last ? 0 : index + 1)
      : e.key === "ArrowLeft" ? (index === 0 ? last : index - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    setActiveTab(categories[next]);
    tabRefs.current[categories[next]]?.focus();
  };

  return (
    <>
      <Helmet>
        <title>My Web & App Portfolio | Soumyo Roy</title>
        <meta
          name="description"
          content="Explore my collection of full-stack platforms, interactive React applications, and mobile clients."
        />
        <link rel="canonical" href={canonical("/portfolio")} />
      </Helmet>

      {/* Full-width wrapper so the drifting blobs are not cut off by the content column */}
      <div className="relative overflow-hidden">
        {/* Colorful Background Blobs (slowly drifting) */}
        <div aria-hidden="true" className="pointer-events-none absolute left-[-10%] top-[-10%] h-[500px] w-[500px] animate-aurora-1 rounded-full bg-purple-400/20 blur-3xl dark:bg-purple-900/20" />
        <div aria-hidden="true" className="pointer-events-none absolute bottom-[20%] right-[-10%] h-[400px] w-[400px] animate-aurora-2 rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-900/20" />

      <div className="relative mx-auto min-h-screen max-w-6xl px-4 pb-24 pt-28 sm:px-6 sm:pt-32">

        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="relative z-10 mb-12 text-center"
        >
          <motion.h1 variants={blurUp()} className="mb-6 text-title font-extrabold">
            <span className="text-gradient">My Web & App Portfolio</span>
          </motion.h1>
          <motion.p variants={blurUp()} className="mx-auto max-w-2xl text-lg text-muted">
            Explore my collection of full-stack platforms, interactive React
            applications, and mobile clients.
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Project categories"
          className="relative z-10 mx-auto mb-12 flex w-fit max-w-full flex-wrap justify-center gap-1 rounded-3xl border border-line bg-surface p-1.5 backdrop-blur-md sm:rounded-full"
        >
          {categories.map((cat, i) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                ref={(el) => (tabRefs.current[cat] = el)}
                role="tab"
                id={`tab-${i}`}
                aria-selected={isActive}
                aria-controls="portfolio-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveTab(cat)}
                onKeyDown={(e) => onTabKeyDown(e, i)}
                className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-300 sm:px-6 ${
                  isActive ? "text-white" : "text-muted hover:text-fg"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="portfolio-tab-pill"
                    transition={spring.snappy}
                    className="absolute inset-0 rounded-full bg-blue-600 shadow-md shadow-blue-500/30"
                  />
                )}
                <span className="relative">
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid of Cards */}
        <LayoutGroup>
          <motion.div
            layout
            id="portfolio-panel"
            role="tabpanel"
            aria-labelledby={`tab-${categories.indexOf(activeTab)}`}
            className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {portfolioData[activeTab].map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Card data={project} onOpen={() => setSelected(project)} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <AnimatePresence>
            {selected && (
              <ProjectModal key={selected.id} project={selected} onClose={closeModal} />
            )}
          </AnimatePresence>
        </LayoutGroup>
      </div>
      </div>
    </>
  );
}
