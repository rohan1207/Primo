import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { navLinks } from "../../data/content";
import LogoMark from "../svg/LogoMark";
import CtaButton from "../ui/CtaButton";
import { useQuote } from "../../context/QuoteContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { openQuote } = useQuote();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // The quote modal applies its own scroll lock after this effect runs, so the
  // drawer closing to reveal the modal does not release it.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 w-full rounded-b-2xl bg-mota-blue transition-all duration-500 sm:rounded-b-3xl ${
          scrolled
            ? "border-b border-white/10 py-4 shadow-float backdrop-blur-xl sm:py-[1.15rem]"
            : "border-b border-white/5 py-5 sm:py-6"
        }`}
      >
        <nav className="container-mota flex w-full items-center justify-between px-5 sm:px-8">
          <Link to="/" className="group flex items-center">
            <motion.div whileHover={{ scale: 1.03 }} className="flex items-center">
              <LogoMark className="h-12 w-auto sm:h-14" />
            </motion.div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="group relative px-3.5 py-2.5">
                <span
                  className={`text-[15px] font-medium tracking-[0.03em] transition-colors duration-300 ${
                    location.pathname === link.path
                      ? "text-white"
                      : "text-white/85 group-hover:text-white"
                  }`}
                >
                  {link.label}
                </span>
                {location.pathname === link.path && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-white"
                  />
                )}
              </Link>
            ))}
          </div>

          <CtaButton
            type="button"
            onClick={() => openQuote()}
            variant="white"
            className="hidden shadow-none hover:shadow-none lg:inline-flex"
          >
            Get a Quote
          </CtaButton>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 lg:hidden"
            aria-label="Open menu"
          >
            <HiOutlineMenuAlt3 className="h-5 w-5" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-mota-ink/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-mota-blue p-6 shadow-2xl"
              data-lenis-prevent
            >
              <div className="mb-8 flex items-center justify-between">
                <Link
                  to="/"
                  className="flex items-center"
                  onClick={() => setMobileOpen(false)}
                >
                  <LogoMark className="h-12 w-auto" />
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white"
                  aria-label="Close menu"
                >
                  <HiX className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-col gap-1 overflow-y-auto">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className={`block rounded-xl px-4 py-3.5 text-[15px] font-medium tracking-[0.02em] transition-colors ${
                        location.pathname === link.path
                          ? "bg-white/15 text-white"
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <CtaButton
                type="button"
                variant="white"
                className="mt-8 shadow-none"
                onClick={() => {
                  setMobileOpen(false);
                  openQuote();
                }}
              >
                Get a Quote
              </CtaButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
