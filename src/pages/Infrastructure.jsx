import { motion } from "framer-motion";
import {
  HiOutlineCog,
  HiOutlineOfficeBuilding,
  HiOutlineTrendingUp,
  HiOutlineUsers,
} from "react-icons/hi";
import { useScrollReveal } from "../hooks/useAnimations";
import CtaButton from "../components/ui/CtaButton";
import CTABanner from "../components/ui/CTABanner";
import { workforce, machines, infrastructureDetails } from "../data/content";

const STATS = [
  { value: "40K", label: "Sqft Facility" },
  { value: "800+", label: "Garments / Day" },
  { value: "90+", label: "Skilled Team" },
];

export default function Infrastructure() {
  useScrollReveal();

  const facilitySections = [
    { ...infrastructureDetails.associate, icon: HiOutlineOfficeBuilding },
    { ...infrastructureDetails.output, icon: HiOutlineTrendingUp },
    { ...infrastructureDetails.expansion, icon: HiOutlineCog },
  ];

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
            <span className="mota-eyebrow-pill">Infrastructure</span>
            <h1 className="mt-5 font-sans text-[clamp(2.25rem,5vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.03em] text-mota-ink">
              State-of-Art{" "}
              <span className="text-[#086dbe]">Manufacturing</span>
            </h1>
            <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-mota-mist sm:mt-6 sm:text-base">
              40,000 sqft facility in Baramati with 800+ daily garment capacity and
              world-class Brother &amp; Juki machinery.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8">
              <CtaButton to="/contact" variant="accent">
                Schedule a Visit
              </CtaButton>
              <CtaButton to="/about" variant="outline">
                About Us
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
                  src="/img1.jpeg"
                  alt="Mota manufacturing facility in Baramati"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-3 hidden overflow-hidden rounded-2xl border border-white/50 shadow-float sm:block sm:-bottom-5 sm:-left-5 sm:w-[42%]">
              <img
                src="/industrial_uniform.jpg"
                alt="Production quality at Mota"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats + Facility overview */}
      <section className="section-pad relative overflow-hidden bg-mota-cream !pt-8 sm:!pt-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(8,109,190,0.08),transparent_55%)]" />

        <div className="container-mota relative">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="mota-eyebrow-pill">Our Facility</span>
              <h2 className="mota-title-section mt-4">
                Capacity built for{" "}
                <span className="text-[#086dbe]">scale</span>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="max-w-md text-[0.95rem] leading-relaxed text-mota-mist lg:justify-self-end lg:pt-12 lg:text-right"
            >
              Self-contained production in Baramati, cutting, stitching, embroidery,
              washing and finishing under one roof.
            </motion.p>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-[1.55fr_1fr] lg:items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="grid overflow-hidden rounded-[1.75rem] bg-mota-blue sm:rounded-[2rem] lg:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="relative min-h-[200px] p-4 sm:min-h-[240px] sm:p-5 lg:min-h-0 lg:p-6">
                <div className="h-full overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem]">
                  <img
                    src="/hospital_uniform.png"
                    alt="Integrated garment production"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center px-6 pb-7 pt-2 sm:px-8 sm:pb-9 lg:py-8 lg:pl-2 lg:pr-9">
                <h3 className="mota-title-card text-white">
                  From fabric to finished garment in Baramati
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65 sm:mt-4">
                  Strict in-line quality checks keep every consignment consistent,
                  whether school kits or industrial bulk.
                </p>
                <CtaButton to="/contact" variant="accent" className="mt-6">
                  Talk to Us
                </CtaButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="flex flex-col justify-center rounded-[1.75rem] bg-[#086dbe] px-5 py-8 sm:rounded-[2rem] sm:px-6 sm:py-10"
            >
              <div className="grid grid-cols-3 gap-2">
                {STATS.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-sans text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1.5 text-[9px] font-medium uppercase leading-tight tracking-[0.08em] text-white/75 sm:text-[10px]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Facility detail cards */}
          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-5">
            {facilitySections.map((section, i) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.55 }}
                  className="rounded-[1.75rem] border border-mota-line bg-white/90 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[#086dbe]/25 hover:shadow-float sm:p-7"
                  data-reveal
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#086dbe] text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mota-title-card text-lg sm:text-xl">{section.title}</h3>
                  <div className="mt-3 h-0.5 w-10 rounded-full bg-[#086dbe]" />
                  <ul className="mt-4 space-y-2.5">
                    {section.items.map((item) => (
                      <li key={item} className="text-sm leading-relaxed text-mota-mist">
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workforce */}
      <section className="section-pad relative overflow-hidden bg-mota-cream !pt-4">
        <div className="container-mota relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mota-eyebrow-pill">Workforce</span>
            <h2 className="mota-title-section mt-4">
              Production Capacity &amp;{" "}
              <span className="text-[#086dbe]">Team</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[0.95rem] leading-relaxed text-mota-mist sm:text-base">
              A skilled team of 90+ professionals ensuring quality at every stage.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2">
            {workforce.map((item, i) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.45 }}
                className="flex items-center justify-between gap-4 rounded-2xl border border-mota-line bg-white/90 px-5 py-4 shadow-soft transition-colors hover:border-[#086dbe]/30"
                data-reveal
              >
                <div className="flex items-center gap-3">
                  <HiOutlineUsers className="h-5 w-5 shrink-0 text-[#086dbe]" />
                  <span className="text-sm text-mota-mist">{item.role}</span>
                </div>
                <span className="shrink-0 text-sm font-semibold text-mota-blue">
                  {item.count}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Machinery */}
      <section className="section-pad relative overflow-hidden bg-mota-cream !pt-4">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(8,109,190,0.07),transparent_50%)]" />
        <div className="container-mota relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mota-eyebrow-pill">Machinery</span>
            <h2 className="mota-title-section mt-4">
              World-Class{" "}
              <span className="text-[#086dbe]">Equipment</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[0.95rem] leading-relaxed text-mota-mist sm:text-base">
              Cutting, stitching, embroidery and finishing, all under one roof.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2">
            {machines.map((machine, i) => (
              <motion.div
                key={machine}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.025, duration: 0.45 }}
                className="flex items-start gap-4 rounded-2xl border border-mota-line bg-white/90 p-5 shadow-soft transition-colors hover:border-[#086dbe]/30"
                data-reveal
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#086dbe] text-[10px] font-bold text-white">
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed text-mota-mist">{machine}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="See it for yourself"
        title={
          <>
            Visit our Baramati{" "}
            <span className="text-[#086dbe]">manufacturing facility</span>
          </>
        }
        description="40,000 sqft of integrated production, from fabric to finished garment."
        primaryLabel="Schedule a Visit"
        primaryTo="/contact"
        secondaryLabel="About Us"
        secondaryTo="/about"
      />
    </>
  );
}
