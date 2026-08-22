import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useAnimations";
import CtaButton from "../components/ui/CtaButton";
import CTABanner from "../components/ui/CTABanner";
import { clientLogos } from "../data/content";

export default function Clients() {
  useScrollReveal();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-mota-cream pt-[var(--header-height)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(8,109,190,0.1),transparent_55%)]" />

        <div className="container-mota relative px-5 py-14 text-center sm:px-8 sm:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-2xl"
          >
            <span className="mota-eyebrow-pill">Our Clients</span>
            <h1 className="mt-5 font-sans text-[clamp(2.25rem,5vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.03em] text-mota-ink">
              Trusted by{" "}
              <span className="text-[#086dbe]">Industry Leaders</span>
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-[0.95rem] leading-relaxed text-mota-mist sm:mt-6 sm:text-base">
              Organisations across India that rely on Mota for their uniform programs.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5 sm:mt-8 sm:gap-3">
              <CtaButton to="/contact" variant="accent">
                Get in Touch
              </CtaButton>
              <CtaButton to="/uniforms" variant="outline">
                View Uniforms
              </CtaButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logos */}
      <section className="section-pad relative overflow-hidden bg-mota-cream !pt-2 sm:!pt-4">
        <div className="container-mota relative">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {clientLogos.map((logo, i) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.45 }}
                className="flex aspect-[5/3] items-center justify-center rounded-2xl border border-mota-line bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[#086dbe]/25 hover:shadow-float"
                data-reveal
              >
                <img
                  src={logo}
                  alt={`Client ${i + 1}`}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Ready to partner?"
        title={
          <>
            Let&apos;s build your{" "}
            <span className="text-[#086dbe]">uniform program</span>
          </>
        }
        description="From schools to corporates, we deliver customised uniforms with superb quality in the given time frame."
        primaryLabel="Get in Touch"
        primaryTo="/contact"
        secondaryLabel="View Uniforms"
        secondaryTo="/uniforms"
      />
    </>
  );
}
