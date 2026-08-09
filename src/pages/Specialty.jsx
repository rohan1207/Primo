import { motion } from "framer-motion";
import {
  HiOutlineBeaker,
  HiOutlineCake,
  HiOutlineFire,
  HiOutlinePaperAirplane,
  HiOutlineHeart,
  HiOutlineShieldCheck,
  HiOutlineEye,
  HiOutlineTruck,
  HiOutlineCog,
  HiOutlineSparkles,
  HiOutlineAcademicCap,
  HiOutlineOfficeBuilding,
  HiOutlineCheckCircle,
  HiOutlineClipboardCheck,
  HiOutlineAdjustments,
  HiOutlineHome,
  HiOutlineStar,
} from "react-icons/hi";
import { useScrollReveal } from "../hooks/useAnimations";
import CtaButton from "../components/ui/CtaButton";
import CTABanner from "../components/ui/CTABanner";
import QuoteCta from "../components/ui/QuoteCta";
import { specialtyCategories, pharmaProducts } from "../data/content";

const industryIcons = {
  pharma: HiOutlineBeaker,
  food: HiOutlineCake,
  chemical: HiOutlineFire,
  aviation: HiOutlinePaperAirplane,
  healthcare: HiOutlineHeart,
  security: HiOutlineShieldCheck,
  reflective: HiOutlineEye,
  automobile: HiOutlineTruck,
  manufacturing: HiOutlineCog,
  hospitality: HiOutlineSparkles,
  education: HiOutlineAcademicCap,
  corporate: HiOutlineOfficeBuilding,
  housekeeping: HiOutlineHome,
  sports: HiOutlineStar,
};

const COMPLIANCE = [
  {
    icon: HiOutlineClipboardCheck,
    title: "Compliance Ready",
    text: "Garments engineered to suit cleanroom, lab and high-risk site protocols.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Protective Performance",
    text: "Chemical-resistant and reflective builds with reinforced stitching.",
  },
  {
    icon: HiOutlineAdjustments,
    title: "Built to Your Spec",
    text: "Fabric, fit, closures and branding matched to your safety policy.",
  },
];

export default function Specialty() {
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
            <span className="mota-eyebrow-pill">Specialty Uniforms</span>
            <h1 className="mt-5 font-sans text-[clamp(2.25rem,5vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.03em] text-mota-ink">
              Engineered for{" "}
              <span className="text-[#086dbe]">Demanding Environments</span>
            </h1>
            <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-mota-mist sm:mt-6 sm:text-base">
              Where a uniform has to do more than look good. Protective, hygienic and
              compliant apparel, manufactured in-house at our Baramati facility.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8">
              <CtaButton to="/contact" variant="accent">
                Discuss Your Needs
              </CtaButton>
              <CtaButton to="/infrastructure" variant="outline">
                View Facility
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
                  src="/industrial_uniform.png"
                  alt="Specialty industrial uniforms by Mota"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-3 hidden overflow-hidden rounded-2xl border border-white/50 shadow-float sm:block sm:-bottom-5 sm:-left-5 sm:w-[42%]">
              <img
                src="/security_uniform.png"
                alt="Security and safety uniforms"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries covered */}
      <section className="section-pad relative overflow-hidden bg-mota-cream !pt-8 sm:!pt-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(8,109,190,0.08),transparent_55%)]" />

        <div className="container-mota relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mota-eyebrow-pill">Industries We Equip</span>
            <h2 className="mota-title-section mt-4">
              Every Sector,{" "}
              <span className="text-[#086dbe]">Covered</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[0.95rem] leading-relaxed text-mota-mist sm:text-base">
              Fourteen industries, each with its own safety, hygiene and branding
              requirements, all handled under one roof.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {specialtyCategories.map((cat, i) => {
              const Icon = industryIcons[cat.icon];
              return (
                <motion.article
                  key={cat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: (i % 4) * 0.05, duration: 0.5 }}
                  className="group relative overflow-hidden rounded-[1.25rem] border border-mota-line bg-white/90 p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[#086dbe]/25 hover:shadow-float sm:rounded-[1.5rem] sm:p-6"
                  data-reveal
                >
                  <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[#086dbe]/[0.07] transition-transform duration-500 group-hover:scale-150" />

                  <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[#086dbe]/10 text-[#086dbe] transition-colors duration-300 group-hover:bg-[#086dbe] group-hover:text-white sm:h-11 sm:w-11">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="relative mt-4 font-sans text-base font-bold tracking-[-0.02em] text-mota-ink sm:text-lg">
                    {cat.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-mota-mist">
                    {cat.description}
                  </p>
                  <QuoteCta
                    subject={cat.title}
                    href={cat.href}
                    external={cat.external}
                    variant="link"
                    className="relative mt-3"
                  />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product range */}
      <section className="section-pad relative overflow-hidden bg-mota-cream !pt-4">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(8,109,190,0.07),transparent_50%)]" />

        <div className="container-mota relative">
          <div className="grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="relative min-h-[280px] overflow-hidden rounded-[1.5rem] sm:min-h-[340px] sm:rounded-[1.75rem] lg:min-h-0"
            >
              <img
                src="/hospital_uniform.png"
                alt="Cleanroom and lab apparel manufactured by Mota"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mota-blue/85 via-mota-blue/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70 sm:text-[11px]">
                  Controlled environments
                </p>
                <p className="mt-2 font-sans text-xl font-bold text-white sm:text-2xl">
                  Cleanroom to chemical plant
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="rounded-[1.5rem] bg-white p-6 shadow-soft sm:rounded-[2rem] sm:p-9"
            >
              <span className="mota-eyebrow-pill">Product Range</span>
              <h2 className="mota-title-section mt-4">
                What We{" "}
                <span className="text-[#086dbe]">Manufacture</span>
              </h2>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-mota-mist">
                Specialty garments produced to exacting standards, with fabric and
                finishing chosen for the environment they work in.
              </p>

              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 sm:gap-3">
                {pharmaProducts.map((product) => (
                  <li
                    key={product}
                    className="flex items-center gap-2.5 rounded-xl border border-mota-line bg-mota-cream/60 px-4 py-3 transition-colors duration-300 hover:border-[#086dbe]/30 hover:bg-white"
                  >
                    <HiOutlineCheckCircle className="h-4 w-4 shrink-0 text-[#086dbe]" />
                    <span className="text-sm font-medium text-mota-ink">{product}</span>
                  </li>
                ))}
              </ul>

              <CtaButton to="/contact" variant="accent" className="mt-7">
                Request Specs
              </CtaButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance strip */}
      <section className="section-pad relative overflow-hidden bg-mota-cream !pt-4">
        <div className="container-mota relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[1.75rem] bg-mota-blue px-6 py-10 sm:rounded-[2rem] sm:px-10 sm:py-12"
          >
            <div className="mota-dark-blob -right-20 -top-20 h-64 w-64" />
            <div className="mota-dark-blob -bottom-16 -left-16 h-48 w-48 opacity-60" />

            <div className="relative grid gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-10">
              {COMPLIANCE.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title}>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-sans text-lg font-bold tracking-[-0.02em] text-white">
                      {item.title}
                    </h3>
                    <div className="mt-3 h-0.5 w-10 rounded-full bg-[#086dbe]" />
                    <p className="mt-3 text-sm leading-relaxed text-white/65">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner
        eyebrow="Special requirements?"
        title={
          <>
            We engineer uniforms for{" "}
            <span className="text-[#086dbe]">your industry</span>
          </>
        }
        description="From cleanrooms to construction sites, tell us your environment and we'll deliver the right solution."
        primaryLabel="Discuss Your Needs"
        primaryTo="/contact"
        secondaryLabel="View Infrastructure"
        secondaryTo="/infrastructure"
      />
    </>
  );
}
