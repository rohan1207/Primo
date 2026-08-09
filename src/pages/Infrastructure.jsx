import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiOutlineCog,
  HiOutlineOfficeBuilding,
  HiOutlineTrendingUp,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import { useScrollReveal } from "../hooks/useAnimations";
import CtaButton from "../components/ui/CtaButton";
import CTABanner from "../components/ui/CTABanner";
import AnimatedCounter from "../components/ui/AnimatedCounter";
import ImageWithFallback from "../components/ui/ImageWithFallback";
import {
  workforce,
  machines,
  productionStages,
  infrastructureDetails,
} from "../data/content";

const STATS = [
  { value: 40000, suffix: "", label: "Sqft Facility" },
  { value: 850, suffix: "", label: "Garments / Day" },
  { value: 88, suffix: "", label: "On the Floor" },
  { value: 90, suffix: "", label: "Machines" },
];

/** Used until dedicated factory photography is added to /public/factory */
const STAGE_FALLBACKS = {
  fabric: "/img1.png",
  cutting: "/industrial_uniform.png",
  stitching: "/corporate_uniforms.png",
  branding: "/college_uniforms.png",
  finishing: "/hotel_uniform.png",
  despatch: "/hospital_uniform.png",
};

const DEPARTMENTS = ["All", "Stitching", "Embroidery and Printing", "Washing and Finishing"];

export default function Infrastructure() {
  useScrollReveal();

  const [activeStage, setActiveStage] = useState(productionStages[0].id);
  const [dept, setDept] = useState("All");

  const stage = productionStages.find((s) => s.id === activeStage);
  const stageIndex = productionStages.findIndex((s) => s.id === activeStage);
  const visibleMachines =
    dept === "All" ? machines : machines.filter((m) => m.dept === dept);
  const headcount = workforce.reduce((sum, w) => sum + w.count, 0);

  const facilitySections = [
    { ...infrastructureDetails.associate, icon: HiOutlineOfficeBuilding },
    { ...infrastructureDetails.output, icon: HiOutlineTrendingUp },
    { ...infrastructureDetails.expansion, icon: HiOutlineCog },
  ];

  return (
    <>
      {/* Hero — split layout so the factory video stays fully visible */}
      <section className="relative overflow-hidden bg-mota-cream pt-[var(--header-height)]">
        <div className="relative lg:grid lg:min-h-[calc(100svh-var(--header-height))] lg:grid-cols-[1fr_1.05fr]">
          {/* Video panel */}
          <div className="relative order-1 aspect-[16/10] w-full sm:aspect-[16/9] lg:order-2 lg:aspect-auto lg:min-h-[calc(100svh-var(--header-height))]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
              aria-label="Mota manufacturing facility in Baramati"
            >
              <source src="/hero.mp4" type="video/mp4" />
            </video>
            {/* Soft edge blend into the content column on desktop */}
            <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-28 bg-gradient-to-r from-mota-cream via-mota-cream/40 to-transparent lg:block" />
            {/* Light bottom fade on mobile so the section transition feels clean */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-mota-cream to-transparent lg:hidden" />
          </div>

          {/* Copy + stats */}
          <div className="relative z-10 order-2 flex flex-col justify-center px-5 py-10 sm:px-8 sm:py-14 lg:order-1 lg:py-16 lg:pl-8 xl:pl-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl"
            >
              <span className="mota-eyebrow-pill">Infrastructure</span>
              <h1 className="mt-5 font-sans text-[clamp(2.25rem,5vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.03em] text-mota-ink">
                Inside our{" "}
                <span className="text-[#086dbe]">Baramati plant</span>
              </h1>
              <p className="mt-5 max-w-lg text-[0.95rem] leading-relaxed text-mota-mist sm:mt-6 sm:text-base">
                40,000 sqft of integrated production. Walk the floor stage by stage, from
                fabric intake to the packed consignment leaving our despatch bay.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-2.5 sm:mt-8 sm:gap-3">
                <CtaButton to="/contact" variant="accent">
                  Schedule a Visit
                </CtaButton>
                <CtaButton to="/about" variant="outline">
                  About Us
                </CtaButton>
              </div>
            </motion.div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-2 xl:grid-cols-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.07, duration: 0.5 }}
                  className="rounded-2xl border border-mota-line bg-white/90 px-4 py-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-[#086dbe]/25 hover:shadow-float sm:px-5 sm:py-6"
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="font-sans text-2xl font-bold tracking-tight text-mota-ink sm:text-3xl"
                  />
                  <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-mota-mist sm:text-xs">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive floor walkthrough */}
      <section className="section-pad relative overflow-hidden bg-mota-cream">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(8,109,190,0.08),transparent_55%)]" />

        <div className="container-mota relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mota-eyebrow-pill">Floor Walkthrough</span>
            <h2 className="mota-title-section mt-4">
              Six stages,{" "}
              <span className="text-[#086dbe]">one roof</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[0.95rem] leading-relaxed text-mota-mist sm:text-base">
              Tap any stage to see what happens there, and what runs it.
            </p>
          </div>

          {/* Stage selector, scrolls horizontally on phones */}
          <div className="mt-8 -mx-5 overflow-x-auto px-5 pb-2 sm:mt-10 sm:mx-0 sm:overflow-visible sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex min-w-max gap-2 sm:min-w-0 sm:flex-wrap sm:justify-center sm:gap-2.5">
              {productionStages.map((s, i) => {
                const active = s.id === activeStage;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActiveStage(s.id)}
                    aria-pressed={active}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300 sm:px-5 ${
                      active
                        ? "border-transparent bg-[#086dbe] text-white shadow-float"
                        : "border-mota-line bg-white/90 text-mota-ink hover:border-[#086dbe]/40 hover:text-[#086dbe]"
                    }`}
                  >
                    <span
                      className={`text-[11px] font-bold ${
                        active ? "text-white/60" : "text-[#086dbe]"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    {s.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Stage detail */}
          <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-mota-line bg-white shadow-soft sm:mt-8 sm:rounded-[2rem]">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[220px] sm:min-h-[320px] lg:min-h-[420px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={stage.id}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <ImageWithFallback
                      src={stage.image}
                      fallback={STAGE_FALLBACKS[stage.id]}
                      alt={stage.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-mota-blue/55 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-mota-blue/20" />
                  </motion.div>
                </AnimatePresence>

                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#086dbe] backdrop-blur-sm sm:left-6 sm:top-6">
                  Stage 0{stageIndex + 1}
                </span>
              </div>

              <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={stage.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <h3 className="mota-title-card text-xl sm:text-2xl">{stage.title}</h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-mota-mist sm:mt-4">
                      {stage.text}
                    </p>

                    <ul className="mt-5 space-y-2.5 sm:mt-7">
                      {stage.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <HiOutlineCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#086dbe]" />
                          <span className="text-sm leading-relaxed text-mota-mist">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>

                {/* Progress rail */}
                <div className="mt-7 flex items-center gap-1.5 sm:mt-9">
                  {productionStages.map((s, i) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setActiveStage(s.id)}
                      aria-label={`Go to ${s.label}`}
                      className={`h-1 flex-1 rounded-full transition-all duration-400 ${
                        i <= stageIndex ? "bg-[#086dbe]" : "bg-mota-line"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Machine inventory, filterable */}
      <section className="section-pad relative overflow-hidden bg-mota-cream !pt-4">
        <div className="container-mota relative">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="mota-eyebrow-pill">Machinery</span>
              <h2 className="mota-title-section mt-4">
                What runs the{" "}
                <span className="text-[#086dbe]">floor</span>
              </h2>
              <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-mota-mist sm:text-base">
                Ninety machine heads across stitching, branding and finishing, filtered by
                department.
              </p>
            </div>
          </div>

          <div className="mt-7 -mx-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:overflow-visible sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex min-w-max gap-2 sm:min-w-0 sm:flex-wrap">
              {DEPARTMENTS.map((d) => {
                const active = d === dept;
                return (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDept(d)}
                    aria-pressed={active}
                    className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition-all duration-300 ${
                      active
                        ? "border-transparent bg-mota-blue text-white"
                        : "border-mota-line bg-white/90 text-mota-mist hover:border-[#086dbe]/40 hover:text-[#086dbe]"
                    }`}
                  >
                    {d}
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div layout className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visibleMachines.map((machine) => (
                <motion.div
                  key={machine.name}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="group flex items-start justify-between gap-3 rounded-2xl border border-mota-line bg-white/90 p-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-[#086dbe]/30 hover:shadow-float sm:p-5"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-semibold leading-snug text-mota-ink">
                      {machine.name}
                    </p>
                    <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-mota-mist/70">
                      {machine.dept}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-lg bg-[#086dbe]/10 px-2.5 py-1 text-sm font-bold text-[#086dbe] transition-colors group-hover:bg-[#086dbe] group-hover:text-white">
                    {machine.count}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Workforce distribution */}
      <section className="section-pad relative overflow-hidden bg-mota-cream !pt-4">
        <div className="container-mota relative">
          <div className="overflow-hidden rounded-[1.75rem] bg-mota-blue sm:rounded-[2rem]">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-10">
                <span className="inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">
                  Workforce
                </span>
                <h2 className="mt-5 font-sans text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white">
                  {headcount} people, one shift
                </h2>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-white/65">
                  Every role on the floor is permanent and in-house, which is how quality
                  stays consistent from the first piece to the last.
                </p>
                <CtaButton to="/contact" variant="white" className="mt-7 w-fit">
                  Talk to Us
                </CtaButton>
              </div>

              <div className="p-6 sm:p-9 lg:py-10 lg:pl-2 lg:pr-10">
                <div className="space-y-4 sm:space-y-5">
                  {workforce.map((item, i) => (
                    <motion.div
                      key={item.role}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06, duration: 0.4 }}
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="text-sm text-white/75 sm:text-[0.95rem]">
                          {item.role}
                        </span>
                        <span className="shrink-0 text-sm font-bold text-white">
                          {item.count}
                        </span>
                      </div>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(item.count / 60) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.15 + i * 0.06,
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-[#086dbe] to-[#5aa6e8]"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capacity, output, expansion */}
      <section className="section-pad relative overflow-hidden bg-mota-cream !pt-4">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(8,109,190,0.07),transparent_50%)]" />
        <div className="container-mota relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mota-eyebrow-pill">Capacity</span>
            <h2 className="mota-title-section mt-4">
              Built to{" "}
              <span className="text-[#086dbe]">grow with you</span>
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-3">
            {facilitySections.map((section, i) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.55 }}
                  className="group rounded-[1.75rem] border border-mota-line bg-white/90 p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[#086dbe]/25 hover:shadow-float sm:p-7"
                  data-reveal
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#086dbe] text-white transition-transform duration-300 group-hover:scale-110">
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
