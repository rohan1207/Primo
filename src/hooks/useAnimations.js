import { useEffect, useState } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;

/** Desktop-only motion. Scroll reveals / smooth scroll feel glitchy on phones. */
const DESKTOP_MOTION_MQ = "(min-width: 768px)";

export function prefersDesktopMotion() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  return window.matchMedia(DESKTOP_MOTION_MQ).matches;
}

/**
 * True only on desktop when the user has not asked to reduce motion.
 * Use to gate parallax and scroll-linked transforms.
 */
export function useDesktopMotion() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia(DESKTOP_MOTION_MQ);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => setEnabled(desktop.matches && !reduced.matches);
    update();

    desktop.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      desktop.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  return enabled;
}

/**
 * Jumps to the top of the document. Lenis tracks its own scroll position, so
 * a bare window.scrollTo leaves it stale and it scrolls back on the next input.
 */
export function scrollToTop() {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate: true, force: true });
  }
  window.scrollTo(0, 0);
}

export function useLenis() {
  useEffect(() => {
    // Lenis + touch scrolling is a common source of mobile jank / reveal glitches.
    if (!prefersDesktopMotion()) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });
    lenisInstance = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    let frame = 0;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
}

export function useScrollReveal(selector = "[data-reveal]") {
  useEffect(() => {
    if (!prefersDesktopMotion()) return;

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [selector]);
}
