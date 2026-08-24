import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HiOutlineCog,
  HiOutlineShieldCheck,
  HiOutlineColorSwatch,
  HiOutlineUsers,
} from "react-icons/hi";
import { useScrollReveal } from "../hooks/useAnimations";
import CtaButton from "../components/ui/CtaButton";
import EnquiryForm from "../components/ui/EnquiryForm";
import LogoMark from "../components/svg/LogoMark";
import { aboutContent, fabricBrands } from "../data/content";

/** Soft rounded frame, consistent with home page cards */
const imageFrame = "overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem]";

const FEATURE_CARDS = [
  {
    icon: HiOutlineCog,
    title: "Automated Machinery",
    stat: "800+ / Day",
    text: "High-end Brother and Juki sewing lines built for bulk output.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Quality Consistency",
    stat: "100% Inspected",
    text: "Checkpoints in-line and post production on every consignment.",
  },
  {
    icon: HiOutlineColorSwatch,
    title: "Premium Fabrics",
    stat: "8+ Mills",
    text: "Authorised stockist of Raymond, Mafatlal, Siyaram's, S.Kumar's and more.",
  },
  {
    icon: HiOutlineUsers,
    title: "Skilled Workforce",
    stat: "90+ Specialists",
    text: "Dedicated team handling design through bulk delivery.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Consistent quality and on-time delivery across seasonal school orders, exactly what we needed.",
    label: "Education Sector",
  },
  {
    quote:
      "End-to-end service from design to embroidery made our corporate rollout seamless.",
    label: "Corporate Client",
  },
  {
    quote:
      "Reliable bulk capacity and finishing standards for our industrial workwear program.",
    label: "Manufacturing Partner",
  },
  {
    quote:
      "Their in-house facility means every batch is consistent, no surprises, just clean, well-finished uniforms.",
    label: "Hospital Administration",
  },
  {
    quote:
      "Premium fabrics and precise branding made our staff uniforms look genuinely professional.",
    label: "Hospitality Group",
  },
  {
    quote:
      "From sampling to final delivery, the team kept us updated and hit every timeline.",
    label: "Pharma Company",
  },
  {
    quote:
      "Great trims, accurate logo placement, and dependable service order after order.",
    label: "Automobile Sector",
  },
  {
    quote:
      "25 years of experience really shows, quality, communication and pricing were all spot on.",
    label: "Corporate Partner",
  },
];

const CLIENT_AVATARS = [
  "/clients/bajaj.png",
  "/clients/tata_motors.png",
  "/clients/cipla.png",
  "/clients/tvs.png",
];

function TestimonialCard({ item }) {
  return (
    <blockquote className="flex w-[280px] shrink-0 flex-col rounded-[1.5rem] bg-white p-6 shadow-soft sm:w-[360px] sm:p-7">
      <p className="flex-1 text-sm leading-relaxed text-mota-mist sm:text-[0.95rem]">
        &ldquo;{item.quote}&rdquo;
      </p>
      <footer className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#086dbe]">
        {item.label}
      </footer>
    </blockquote>
  );
}

export default function About() {
  useScrollReveal();
  const [paused, setPaused] = useState(false);
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-mota-cream pt-[var(--header-height)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(8,109,190,0.09),transparent_50%)]" />

        <div className="container-mota relative grid items-center gap-10 px-5 pb-14 pt-12 sm:gap-12 sm:px-8 sm:pb-16 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pb-20 lg:pt-16">
          {/* Left, copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[12px] font-medium text-mota-mist"
            >
              <Link to="/" className="transition-colors hover:text-[#086dbe]">
                Home
              </Link>
              <span className="mx-2 text-mota-mist/50">/</span>
              <span className="text-mota-ink">About</span>
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-xl font-sans text-[clamp(2.2rem,4.8vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-mota-ink"
            >
              Crafting Uniforms,{" "}
              <span className="text-[#086dbe]">Shaping Identity</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.65 }}
              className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-mota-mist sm:mt-6 sm:text-base"
            >
              {aboutContent.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 }}
              className="mt-7 sm:mt-8"
            >
              <CtaButton href="https://theuniformlab.in/" external variant="accent">
                Our Uniforms
              </CtaButton>
            </motion.div>
          </div>

          {/* Right, horizontal image stack */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-end justify-center gap-2.5 sm:gap-3.5 lg:justify-end"
          >
            <div className={`hidden w-[26%] sm:block ${imageFrame}`}>
              <img
                src="/college_uniforms.png"
                alt="College uniforms"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>

            <div className={`relative w-[52%] sm:w-[40%] ${imageFrame}`}>
              <img
                src="/school_uniform.png"
                alt="Mota uniforms craftsmanship"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>

            <div className={`w-[42%] sm:w-[26%] ${imageFrame}`}>
              <img
                src="/corporate_uniforms.png"
                alt="Corporate uniforms"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Built on Experience ── */}
      <section className="section-pad relative overflow-hidden bg-mota-cream !pt-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,109,190,0.06),transparent_55%)]" />

        <div className="container-mota relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mota-eyebrow-pill">About Our Company</span>
            <h2 className="mota-title-section mt-4">
              Built on Experience.{" "}
              <span className="text-[#086dbe]">Driven by Quality.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[0.95rem] leading-relaxed text-mota-mist sm:text-base">
              {aboutContent.experience}
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-[1.05fr_1fr]">
            {/* Large feature card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-center rounded-[1.75rem] bg-white p-7 shadow-soft sm:rounded-[2rem] sm:p-9"
            >
              <LogoMark onLightBg className="h-12 w-auto sm:h-14" />

              <p className="mt-6 font-sans text-5xl font-bold tracking-tight text-mota-ink sm:mt-7 sm:text-6xl">
                40<span className="text-[#086dbe]">+</span>
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-mota-mist">
                Years of manufacturing trust
              </p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-mota-mist">
                Preferred vendor for schools, hospitals, pharma, aviation, security,
                hospitality and corporates across India.
              </p>

              <div className="mt-6 h-px w-full bg-mota-line sm:mt-7" />

              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3 sm:mt-6">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {CLIENT_AVATARS.map((src) => (
                      <span
                        key={src}
                        className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-mota-cream"
                      >
                        <img src={src} alt="" className="h-6 w-6 object-contain" />
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/clients"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#086dbe] text-lg font-semibold text-white transition-colors hover:bg-mota-blue"
                    aria-label="View all clients"
                  >
                    +
                  </Link>
                </div>
                <p className="text-sm font-medium text-mota-mist">
                  Trusted by leading brands
                </p>
              </div>
            </motion.div>

            {/* 2x2 feature grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              {FEATURE_CARDS.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.55 }}
                    className="rounded-[1.25rem] bg-white p-4 shadow-soft sm:rounded-[1.5rem] sm:p-6"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#086dbe]/10 text-[#086dbe]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-sans text-base font-bold tracking-[-0.02em] text-mota-ink">
                      {card.title}
                    </h3>
                    <p className="mt-1 font-sans text-xl font-bold text-[#086dbe]">
                      {card.stat}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-mota-mist">{card.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <CtaButton to="/infrastructure" variant="outline">
              Learn More
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Fabric partners strip */}
      <section className="border-y border-mota-line bg-white py-10 sm:py-14">
        <div className="container-mota">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mota-eyebrow-pill">Trusted Materials</span>
            <h2 className="mota-title-section mt-4">
              Authorised{" "}
              <span className="text-[#086dbe]">Fabric Partners</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[0.95rem] leading-relaxed text-mota-mist sm:text-base">
              We source from India&rsquo;s most reputed mills to guarantee durable,
              premium fabric on every uniform we produce.
            </p>
          </div>

          <div className="mx-auto mt-9 flex max-w-4xl flex-wrap justify-center gap-3 sm:mt-11 sm:gap-4">
            {fabricBrands.map((brand, i) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="group flex w-[calc(50%-0.375rem)] items-center justify-center rounded-2xl border border-mota-line bg-mota-cream/60 px-5 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#086dbe]/35 hover:bg-white hover:shadow-soft sm:w-[calc(33.333%-0.75rem)] lg:w-[calc(20%-0.8rem)]"
              >
                <span className="font-sans text-base font-bold tracking-tight text-mota-ink/70 transition-colors duration-300 group-hover:text-[#086dbe] sm:text-lg">
                  {brand}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="section-pad relative overflow-hidden bg-mota-cream">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(8,109,190,0.07),transparent_50%)]" />

        <div className="container-mota relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mota-eyebrow-pill">Contact With Us</span>
            <h2 className="mota-title-section mt-4">
              Start Your Uniform{" "}
              <span className="text-[#086dbe]">Program With Us</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[0.95rem] leading-relaxed text-mota-mist sm:text-base">
              Share your requirements, our Pune and Baramati teams will get back with a
              tailored plan.
            </p>
          </div>

          <div className="mt-10 grid items-stretch gap-6 sm:mt-12 lg:grid-cols-2 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className={`relative min-h-[300px] sm:min-h-[360px] lg:min-h-0 ${imageFrame}`}
            >
              <img
                src="/img1.png"
                alt="Mota manufacturing facility"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <EnquiryForm
                source="about"
                showMessage
                className="!rounded-[1.75rem] shadow-float sm:!rounded-[2rem]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section-pad relative overflow-hidden bg-mota-cream !pt-4">
        <div className="container-mota relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mota-eyebrow-pill">Testimonials</span>
            <h2 className="mota-title-section mt-4">
              What Our{" "}
              <span className="text-[#086dbe]">Clients Value</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[0.95rem] leading-relaxed text-mota-mist sm:text-base">
              Organisations choose Mota for consistency, capacity, and complete uniform
              programs under one roof.
            </p>
          </div>
        </div>

        {/* Continuous marquee, pause on hover / click */}
        <div
          className="group relative mt-10 overflow-hidden sm:mt-12"
          onClick={() => setPaused((p) => !p)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setPaused((p) => !p);
            }
          }}
          aria-label="Testimonials, click to pause or resume"
        >
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-mota-cream to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-mota-cream to-transparent sm:w-24" />

          <div
            className="flex w-max gap-4 py-2 will-change-transform animate-[about-testimonials_44s_linear_infinite] group-hover:[animation-play-state:paused] sm:gap-5"
            style={{ animationPlayState: paused ? "paused" : undefined }}
          >
            {marqueeItems.map((item, i) => (
              <TestimonialCard key={`${item.label}-${i}`} item={item} />
            ))}
          </div>
        </div>

        <div className="container-mota">
          <div className="mt-10 flex justify-center">
            <CtaButton to="/clients" variant="accent">
              View All Clients
            </CtaButton>
          </div>
        </div>

        <style>{`
          @keyframes about-testimonials {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </section>
    </>
  );
}
