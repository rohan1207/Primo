import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import CtaButton from "../ui/CtaButton";

const SOCIALS = [
  { icon: FaFacebookF, label: "Facebook", href: "#" },
  { icon: FaTwitter, label: "Twitter", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
];

const TICKER_ITEMS = [
  "School Uniforms",
  "Corporate Wear",
  "Hospital Apparel",
  "Nurse Uniforms",
  "Laboratory Coats",
  "Industrial Workwear",
  "Security Uniforms",
  "Hotel & Housekeeping",
  "Sports Wear",
  "Embroidery & Print",
  "Bulk Manufacturing",
  "Custom Branding",
];

const HERO_IMAGES = [
  { src: "/corporate_uniforms.png", alt: "Corporate uniforms by Mota Group" },
  { src: "/school_uniform.png", alt: "School uniforms by Mota Group" },
  { src: "/hospital_uniform.png", alt: "Hospital uniforms by Mota Group" },
  { src: "/industrial_uniform.png", alt: "Industrial uniforms by Mota Group" },
  { src: "/college_uniforms.png", alt: "College uniforms by Mota Group" },
  { src: "/hotel_uniform.png", alt: "Hospitality uniforms by Mota Group" },
];

const SLIDE_MS = 2500;

function Asterisk({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`mx-5 h-4 w-4 shrink-0 text-[#086dbe] sm:mx-8 sm:h-[1.15rem] sm:w-[1.15rem] ${className}`}
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2.5l1.2 7.3 6.8-3.1-3.1 6.8 7.3 1.2-7.3 1.2 3.1 6.8-6.8-3.1L12 21.5l-1.2-7.3-6.8 3.1 3.1-6.8L0 9.3l7.3-1.2L4.2 1.3l6.8 3.1L12 2.5z" />
    </svg>
  );
}

function SocialLinks({ vertical = false }) {
  return (
    <div className={vertical ? "flex flex-col items-center gap-5" : "flex items-center gap-2"}>
      {SOCIALS.map(({ icon: Icon, label, href }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className={
            vertical
              ? "text-white/75 transition-colors duration-300 hover:text-white"
              : "flex h-9 w-9 items-center justify-center rounded-full border border-mota-line text-mota-blue transition-colors hover:border-mota-blue hover:bg-mota-blue hover:text-white"
          }
        >
          <Icon className="h-3.5 w-3.5" />
        </a>
      ))}
    </div>
  );
}

function HeroSlideshow({ index, className = "" }) {
  const current = HERO_IMAGES[index];

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      <AnimatePresence mode="sync" initial={false}>
        <motion.img
          key={current.src}
          src={current.src}
          alt={current.alt}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.01 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover outline-none ring-0"
          draggable={false}
        />
      </AnimatePresence>
    </div>
  );
}

export default function NewHero() {
  const ref = useRef(null);
  const [index, setIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "4%"]);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    HERO_IMAGES.forEach(({ src }) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const ticker = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-mota-cream"
    >
      {/* Right navy rail */}
      <aside className="absolute bottom-[3.25rem] right-0 top-0 z-[15] hidden w-[4.5rem] flex-col items-center justify-center gap-5 bg-mota-blue xl:w-[5.25rem] lg:flex">
        <span
          className="select-none text-[11px] font-semibold uppercase tracking-[0.32em] text-white"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Follow
        </span>
        <span className="h-12 w-px bg-white/30" aria-hidden />
        <SocialLinks vertical />
      </aside>

      <div className="relative z-10 flex min-h-0 flex-1 flex-col lg:flex-row">
        {/* Copy */}
        <motion.div
          style={{ y: contentY }}
          className="relative z-20 flex w-full flex-col justify-center px-5 pb-6 pt-[calc(var(--header-height)+1.5rem)] sm:px-8 sm:pb-8 lg:w-[58%] lg:max-w-2xl lg:pb-10 lg:pl-10 lg:pr-8 xl:w-[55%] xl:pl-14 xl:pr-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-[clamp(2.25rem,5.2vw,3.9rem)] font-bold leading-[1.08] tracking-[-0.03em] text-mota-ink"
          >
            Premium{" "}
            <span className="text-[#086dbe]">Uniforms</span>
            <br />
            for Growing Organisations
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-mota-mist sm:mt-5 sm:text-base"
          >
            End-to-end manufacturing from Baramati, design, embroidery, production and
            delivery for schools, corporates, hospitals and industry across India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 sm:mt-8"
          >
            <CtaButton to="/contact" variant="accent">
              Get a Quote
            </CtaButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-8 flex items-center gap-4 lg:hidden"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-mota-mist">
              Follow
            </span>
            <span className="h-px max-w-[3rem] flex-1 bg-mota-line" />
            <SocialLinks />
          </motion.div>
        </motion.div>

        {/* Mobile slideshow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-5 mb-6 aspect-[5/4] overflow-hidden rounded-[1.5rem] sm:mx-8 sm:mb-8 lg:hidden"
        >
          <HeroSlideshow index={index} />
        </motion.div>

        {/* Desktop slideshow, narrower, flush to navy rail */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.12 }}
          className="absolute bottom-0 right-[4.5rem] top-[var(--header-height)] z-10 hidden w-[50vw] overflow-hidden rounded-l-[2rem] outline-none ring-0 xl:right-[5.25rem] lg:block"
        >
          <HeroSlideshow index={index} />
        </motion.div>
      </div>

      {/* Bottom ticker */}
      <div className="relative z-20 mt-auto shrink-0 overflow-hidden bg-mota-blue py-4 sm:py-[1.15rem]">
        <div className="flex w-max animate-[newhero-marquee_34s_linear_infinite] items-center will-change-transform">
          {ticker.map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center">
              <span className="whitespace-nowrap text-sm font-medium tracking-wide text-white sm:text-[0.95rem]">
                {item}
              </span>
              <Asterisk />
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes newhero-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
