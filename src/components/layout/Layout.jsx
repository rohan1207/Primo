import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import { useLenis, scrollToTop, useDesktopMotion } from "../../hooks/useAnimations";
import { QuoteProvider } from "../../context/QuoteContext";

export default function Layout() {
  const location = useLocation();
  const desktopMotion = useDesktopMotion();
  useLenis();

  // Stops the browser restoring a mid-page position on reload or back/forward,
  // which would otherwise land the user in the footer of the new page.
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  return (
    <MotionConfig reducedMotion={desktopMotion ? "never" : "always"}>
      <QuoteProvider>
        <div className="relative min-h-screen bg-mota-cream">
          <ScrollProgress />
          <Navbar />
          <AnimatePresence mode="wait">
            <motion.main
              key={location.pathname}
              initial={desktopMotion ? { opacity: 0 } : false}
              animate={{ opacity: 1 }}
              exit={desktopMotion ? { opacity: 0 } : undefined}
              transition={{ duration: desktopMotion ? 0.4 : 0 }}
            >
              <Outlet />
            </motion.main>
          </AnimatePresence>
          <Footer />
        </div>
      </QuoteProvider>
    </MotionConfig>
  );
}
