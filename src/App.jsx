import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import SmoothScroll from "./components/layout/SmoothScroll";
import Background from "./components/effects/Background";
import CursorSpotlight from "./components/effects/CursorSpotlight";
import ScrollProgress from "./components/effects/ScrollProgress";
import Preloader from "./components/effects/Preloader";
import { page } from "./lib/motion";
import { scrollToTop } from "./lib/scroll";
import Home from "./pages/Home";
import Apps from "./pages/Apps";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";

function App() {
  const location = useLocation();

  return (
    // reducedMotion="user": framer-motion drops transform/layout animations
    // (keeping simple fades) when the OS asks for reduced motion.
    <MotionConfig reducedMotion="user">
      <SmoothScroll />
      <Preloader />
      <Background />
      <CursorSpotlight />
      <ScrollProgress />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-surface-strong focus:px-4 focus:py-2 focus:text-sm focus:text-fg"
      >
        Skip to content
      </a>

      <div className="relative isolate flex min-h-screen flex-col font-sans text-fg">
        <Navbar />
        <main id="main" className="flex-grow">
          {/* Page transition: the old page exits, the window jumps to the top,
              then the new page enters. */}
          <AnimatePresence mode="wait" onExitComplete={scrollToTop}>
            <motion.div
              key={location.pathname}
              variants={page}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/apps" element={<Apps />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </MotionConfig>
  );
}

export default App;
