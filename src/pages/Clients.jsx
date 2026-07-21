import { motion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineBeaker,
  HiOutlineBriefcase,
  HiOutlineTruck,
  HiOutlineCube,
  HiOutlineStar,
} from "react-icons/hi";
import { useScrollReveal } from "../hooks/useAnimations";
import CtaButton from "../components/ui/CtaButton";
import CTABanner from "../components/ui/CTABanner";
import { clientCategories } from "../data/content";

const iconMap = {
  education: HiOutlineAcademicCap,
  pharma: HiOutlineBeaker,
  corporate: HiOutlineBriefcase,
  auto: HiOutlineTruck,
  factory: HiOutlineCube,
  misc: HiOutlineStar,
};

const CLIENT_LOGOS = [
  "/clients/bajaj.png",
  "/clients/bilt.png",
  "/clients/cipla.png",
  "/clients/honda.png",
  "/clients/kalyani_logo.png",
  "/clients/magarpatta_logo.png",
  "/clients/mahindra.png",
  "/clients/mukand.png",
  "/clients/nanded_logo.png",
  "/clients/orbis_logo.png",
  "/clients/png.png",
  "/clients/ub.png",
  "/clients/uni.png",
];

export default function Clients() {
  useScrollReveal();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-mota-cream pt-[var(--header-height)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(8,109,190,0.1),transparent_50%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(30,58,95,0.04),transparent_45%)]" />

        <div className="container-mota relative grid items-center gap-10 px-5 py-14 sm:gap-12 sm:px-8 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="mota-eyebrow-pill">Our Clients</span>
            <h1 className="mt-5 font-sans text-[clamp(2.25rem,5vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.03em] text-mota-ink">
              Trusted by{" "}
              <span className="text-[#086dbe]">Industry Leaders</span>
            </h1>
            <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-mota-mist sm:mt-6 sm:text-base">
              Educational institutions, pharma giants, corporates, automobile &amp;
              manufacturing sectors across India.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8">
              <CtaButton to="/contact" variant="accent">
                Get in Touch
              </CtaButton>
              <CtaButton to="/uniforms" variant="outline">
                View Uniforms
              </CtaButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[1.75rem] shadow-[0_24px_56px_rgba(30,58,95,0.16)] sm:rounded-[2rem]">
              <div className="aspect-[5/4] sm:aspect-[4/3]">
                <img
                  src="/corporate_uniforms.webp"
                  alt="Organisations that partner with Mota"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-3 hidden overflow-hidden rounded-2xl border border-white/50 bg-white p-4 shadow-float sm:block sm:-bottom-5 sm:-left-5 sm:w-[48%]">
              <div className="grid grid-cols-3 gap-2">
                {CLIENT_LOGOS.slice(0, 6).map((logo) => (
                  <div
                    key={logo}
                    className="flex aspect-square items-center justify-center rounded-lg bg-mota-cream p-1.5"
                  >
                    <img src={logo} alt="" className="max-h-full max-w-full object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-pad relative overflow-hidden bg-mota-cream !pt-8 sm:!pt-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(8,109,190,0.08),transparent_55%)]" />

        <div className="container-mota relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mota-eyebrow-pill">Industries We Serve</span>
            <h2 className="mota-title-section mt-4">
              Partners Across{" "}
              <span className="text-[#086dbe]">Every Sector</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[0.95rem] leading-relaxed text-mota-mist sm:text-base">
              From classrooms to cleanrooms — organisations that trust Mota for quality and
              reliability.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-3">
            {clientCategories.map((cat, i) => {
              const Icon = iconMap[cat.icon];
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-[1.5rem] border border-mota-line bg-white/90 p-5 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[#086dbe]/25 hover:shadow-float sm:rounded-[1.75rem] sm:p-9"
                  data-reveal
                >
                  <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#086dbe] text-white sm:mb-5 sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="mota-title-card text-base sm:text-xl">{cat.title}</h3>
                  <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-[#086dbe]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="section-pad relative overflow-hidden bg-mota-cream !pt-4">
        <div className="container-mota relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mota-eyebrow-pill">Client Logos</span>
            <h2 className="mota-title-section mt-4">
              Brands That{" "}
              <span className="text-[#086dbe]">Choose Mota</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[0.95rem] leading-relaxed text-mota-mist sm:text-base">
              A glimpse of organisations we&apos;ve partnered with across sectors.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {CLIENT_LOGOS.map((logo, i) => (
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

      {/* Trust band */}
      <section className="section-pad relative overflow-hidden bg-mota-cream !pt-4">
        <div className="container-mota relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[1.75rem] bg-mota-blue px-6 py-10 text-center sm:rounded-[2rem] sm:px-10 sm:py-14"
          >
            <div className="pointer-events-none absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-[#086dbe]/40" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/5" />
            <div className="relative">
              <span className="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                25+ Years of Trust
              </span>
              <h2 className="mt-5 font-sans text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-[-0.03em] text-white">
                Join organisations that rely on Mota
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/70 sm:text-[0.95rem]">
                Schools, corporates, hospitals, pharma and industrial clients choose us for
                consistent quality and on-time delivery.
              </p>
              <div className="mt-7 flex justify-center">
                <CtaButton to="/contact" variant="white">
                  Partner With Us
                </CtaButton>
              </div>
            </div>
          </motion.div>
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
        description="From schools to corporates — we deliver customised uniforms with superb quality in the given time frame."
        primaryLabel="Get in Touch"
        primaryTo="/contact"
        secondaryLabel="View Uniforms"
        secondaryTo="/uniforms"
      />
    </>
  );
}
