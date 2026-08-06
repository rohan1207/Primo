import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useAnimations";
import CtaButton from "../components/ui/CtaButton";
import CTABanner from "../components/ui/CTABanner";
import { uniformCategories } from "../data/content";

const CATEGORY_IMAGES = [
  "/corporate_uniforms.png",
  "/college_uniforms.png",
  "/school_uniform.png",
  "/security_uniform.png",
  "/industrial_uniform.png",
  "/hospital_uniform.png",
  "/hotel_uniform.png",
  "/Autombile_Uniform.png",
];

const PROCESS = [
  {
    title: "Custom Design",
    text: "Logo placement, colour matching, and fabric selection tailored to your brand.",
  },
  {
    title: "Bulk Production",
    text: "800+ garments daily capacity with consistent quality across every order.",
  },
  {
    title: "On-Time Delivery",
    text: "Reliable timelines for schools, corporates, and seasonal rollouts.",
  },
];

const STATS = [
  { value: "25+", label: "Years" },
  { value: "800+", label: "Garments / Day" },
  { value: "8+", label: "Sectors" },
];

export default function Uniforms() {
  useScrollReveal();

  return (
    <>
      {/* Hero, home-page language */}
      <section className="relative overflow-hidden bg-mota-cream pt-[var(--header-height)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(8,109,190,0.1),transparent_50%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(30,58,95,0.04),transparent_45%)]" />

        <div className="container-mota relative grid items-center gap-10 px-5 py-14 sm:gap-12 sm:px-8 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="mota-eyebrow-pill">Uniforms</span>
            <h1 className="mt-5 font-sans text-[clamp(2.25rem,5vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.03em] text-mota-ink">
              Unique &amp; Individualized{" "}
              <span className="text-[#086dbe]">Uniform Solutions</span>
            </h1>
            <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-mota-mist sm:mt-6 sm:text-base">
              From school campuses to corporate headquarters, every uniform tells your
              story. Designed, produced and delivered from Baramati.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8">
              <CtaButton to="/contact" variant="accent">
                Request a Quote
              </CtaButton>
              <CtaButton to="/clients" variant="outline">
                Our Clients
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
                  src="/school_uniform.png"
                  alt="School and institutional uniforms by Mota"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-3 hidden overflow-hidden rounded-2xl border border-white/50 shadow-float sm:block sm:-bottom-5 sm:-left-5 sm:w-[42%]">
              <img
                src="/corporate_uniforms.png"
                alt="Corporate uniforms"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories, DomainSplit-style panels */}
      <section className="section-pad relative overflow-hidden bg-mota-cream !pt-8 sm:!pt-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(8,109,190,0.08),transparent_55%)]" />

        <div className="container-mota relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mota-eyebrow-pill">Categories</span>
            <h2 className="mota-title-section mt-4">
              Uniforms for{" "}
              <span className="text-[#086dbe]">Every Sector</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[0.95rem] leading-relaxed text-mota-mist sm:text-base">
              Precision-tailored programs for education, corporate, healthcare, hospitality
              and industry.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:gap-6">
            {uniformCategories.map((cat, i) => (
              <motion.article
                key={cat.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: (i % 2) * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative min-h-[230px] overflow-hidden rounded-2xl sm:min-h-[360px] sm:rounded-[1.75rem]"
                data-reveal
              >
                <img
                  src={CATEGORY_IMAGES[i % CATEGORY_IMAGES.length]}
                  alt={cat.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.05]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mota-blue via-mota-blue/55 to-mota-blue/10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(8,109,190,0.3),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="absolute left-4 top-4 font-sans text-3xl font-bold leading-none text-white/25 sm:left-6 sm:top-6 sm:text-5xl">
                  0{i + 1}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-7">
                  <h3 className="font-sans text-base font-bold tracking-[-0.02em] text-white sm:text-2xl">
                    {cat.title}
                  </h3>
                  <div className="mt-2.5 h-0.5 w-8 rounded-full bg-[#086dbe] transition-all duration-500 group-hover:w-16 sm:mt-3 sm:w-10" />
                  <p className="mt-3 hidden line-clamp-3 text-sm leading-relaxed text-white/75 sm:block">
                    {cat.description}
                  </p>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 sm:rounded-[1.75rem]" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mota, HomeAbout-inspired */}
      <section className="section-pad relative overflow-hidden bg-mota-cream !pt-4">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(8,109,190,0.07),transparent_50%)]" />

        <div className="container-mota relative">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="mota-eyebrow-pill">Why Mota</span>
              <h2 className="mota-title-section mt-4">
                End-to-End{" "}
                <span className="text-[#086dbe]">Uniform Programs</span>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-md text-[0.95rem] leading-relaxed text-mota-mist lg:justify-self-end lg:pt-12 lg:text-right"
            >
              Design, sampling, production, embroidery, and delivery, all managed in-house
              at our Baramati facility.
            </motion.p>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-[1.55fr_1fr] lg:items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="grid overflow-hidden rounded-[1.75rem] bg-mota-blue sm:rounded-[2rem] lg:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="relative min-h-[200px] p-4 sm:min-h-[240px] sm:p-5 lg:min-h-0 lg:p-6">
                <div className="h-full overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem]">
                  <img
                    src="/industrial_uniform.png"
                    alt="Mota manufacturing quality"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center px-6 pb-7 pt-2 sm:px-8 sm:pb-9 lg:py-8 lg:pl-2 lg:pr-9">
                <h3 className="mota-title-card !text-white">
                  From sketch to shipment, under one roof
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65 sm:mt-4">
                  In-house design, embroidery, washing and finishing, so every order stays
                  consistent and on schedule.
                </p>
                <CtaButton to="/infrastructure" variant="accent" className="mt-6">
                  See Infrastructure
                </CtaButton>
              </div>
            </motion.div>

            <div className="flex flex-col gap-4 sm:gap-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.06 }}
                className="flex flex-1 flex-col justify-center rounded-[1.75rem] bg-white px-6 py-7 shadow-soft sm:rounded-[2rem] sm:px-8"
              >
                <h3 className="mota-title-card">Quality Our Priority</h3>
                <p className="mt-3 text-sm leading-relaxed text-mota-mist">
                  In-line checks, branded fabrics, and trusted delivery for institutions and
                  enterprises across India.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.12 }}
                className="flex flex-1 flex-col justify-center rounded-[1.75rem] bg-[#086dbe] px-5 py-7 sm:rounded-[2rem] sm:px-6"
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
          </div>

          {/* Process steps */}
          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-5">
            {PROCESS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[1.5rem] border border-mota-line bg-white/90 p-6 shadow-soft transition-all duration-300 hover:border-[#086dbe]/25 hover:shadow-float sm:p-7"
                data-reveal
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#086dbe]">
                  0{i + 1}
                </span>
                <h3 className="mota-title-card mt-3">{item.title}</h3>
                <div className="mt-3 h-0.5 w-10 rounded-full bg-[#086dbe]" />
                <p className="mt-4 text-sm leading-relaxed text-mota-mist">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Need uniforms?"
        title={
          <>
            Let&apos;s design your{" "}
            <span className="text-[#086dbe]">next collection</span>
          </>
        }
        description="Share your requirements and we'll craft a program that fits your brand and budget."
        primaryLabel="Get in Touch"
        primaryTo="/contact"
        secondaryLabel="Our Clients"
        secondaryTo="/clients"
      />
    </>
  );
}
