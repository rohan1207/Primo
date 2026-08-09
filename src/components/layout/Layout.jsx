import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import { useLenis, scrollToTop } from "../../hooks/useAnimations";
import { QuoteProvider } from "../../context/QuoteContext";

export default function Layout() {
  const location = useLocation();
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
    <QuoteProvider>
      <div className="relative min-h-screen bg-mota-cream">
        <ScrollProgress />
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </QuoteProvider>
  );
}
