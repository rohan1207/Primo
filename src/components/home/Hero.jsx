import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { HiOutlineArrowRight, HiOutlineChevronDown } from "react-icons/hi";
import Ribbons from "../Ribbons/Ribbons";
import HeroBubbles from "./HeroBubbles";

const RIBBON_COLORS = ["#086dbe"];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-line", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.3,
      });
      gsap.from(".hero-cta", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.9,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-mota-cream">
      {/* Atmospheric hero image */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <img
          src="/img1.jpeg"
          alt=""
          className="hero-bg-image absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
        {/* Soft cream wash — keeps contrast close to before */}
        <div className="absolute inset-0 bg-mota-cream/78" />
        <div className="absolute inset-0 bg-gradient-to-b from-mota-cream/90 via-mota-cream/55 to-mota-cream/85" />
        {/* Center readability halo for title + CTAs */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(250,248,245,0.92)_0%,rgba(250,248,245,0.55)_42%,rgba(250,248,245,0.25)_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(61,110,168,0.08),transparent_58%)]" />
      </motion.div>

      <motion.div style={{ y, opacity }} className="ribbons-container absolute inset-0 z-[1]">
        <Ribbons
          colors={RIBBON_COLORS}
          baseSpring={0.03}
          baseFriction={0.9}
          baseThickness={30}
          offsetFactor={0.05}
          maxAge={500}
          pointCount={50}
          speedMultiplier={0.6}
          enableFade={false}
          enableShaderEffect={false}
          effectAmplitude={2}
        />
      </motion.div>

      <div className="mota-grain pointer-events-none absolute inset-0 z-[2] opacity-25" />

      <div className="absolute inset-0 z-[5]">
        <HeroBubbles />
      </div>

      <div className="container-mota relative z-20 flex min-h-[100svh] flex-col items-center justify-center px-5 pb-20 pt-[calc(var(--header-height)+2rem)] text-center sm:px-8">
        <div className="mx-auto w-full max-w-5xl">
          <p className="hero-line mota-eyebrow mb-6 sm:mb-8">
            Mota Group — Est. 25+ Years
          </p>

          <h1 className="hero-line hero-solid-title font-display font-semibold leading-[0.88] tracking-[-0.03em]">
            Mota Group
          </h1>

          <p className="hero-line mota-body mx-auto mt-8 max-w-xl text-base sm:text-lg">
            One stop uniform solutions for schools, corporates, hospitals & industries.
            Crafted with precision in Baramati, delivered across India.
          </p>

          <div className="hero-cta mt-10 flex flex-wrap items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.96 }}>
              <Link to="/uniforms" className="btn-primary">
                Explore Uniforms
                <HiOutlineArrowRight />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.96 }}>
              <Link to="/contact" className="btn-outline">
                Get a Quote
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-mota-mist/60"
          >
            <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
            <HiOutlineChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
