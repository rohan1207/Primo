import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useAnimations";
import CtaButton from "../components/ui/CtaButton";
import CTABanner from "../components/ui/CTABanner";
import { accessories } from "../data/content";

const BENEFITS = [
  {
    title: "Brand-Matched",
    text: "Colours, logos and finishes aligned to your uniform program and identity guidelines.",
  },
  {
    title: "Bulk Ready",
    text: "Accessories sourced and packed to ship alongside your garment orders on schedule.",
  },
  {
    title: "Premium Quality",
    text: "High-grade trims, badges and finishing pieces built for daily wear durability.",
  },
];

export default function AccessoriesPage() {
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
            <span className="mota-eyebrow-pill">Accessories</span>
            <h1 className="mt-5 font-sans text-[clamp(2.25rem,5vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.03em] text-mota-ink">
              Premium Trims &amp;{" "}
              <span className="text-[#086dbe]">Finishing Touches</span>
            </h1>
            <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-mota-mist sm:mt-6 sm:text-base">
              High quality trims and accessories that complete every uniform with branded
              excellence, badges, belts, ties and more.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8">
              <CtaButton to="/contact" variant="accent">
                Enquire Now
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
                  src="/corporate_uniforms.png"
                  alt="Uniform accessories and finishing by Mota"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-3 hidden overflow-hidden rounded-2xl border border-white/50 shadow-float sm:block sm:-bottom-5 sm:-left-5 sm:w-[42%]">
              <img
                src="/img1.jpeg"
                alt="Premium trims and detailing"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Accessories grid */}
      <section className="section-pad relative overflow-hidden bg-mota-cream !pt-8 sm:!pt-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(8,109,190,0.08),transparent_55%)]" />

        <div className="container-mota relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mota-eyebrow-pill">Complete the Look</span>
            <h2 className="mota-title-section mt-4">
              Every Detail{" "}
              <span className="text-[#086dbe]">Matters</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[0.95rem] leading-relaxed text-mota-mist sm:text-base">
              From badges to belts, premium accessories that elevate your uniform program.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {accessories.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-[1.5rem] border border-mota-line bg-white/90 p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[#086dbe]/25 hover:shadow-float sm:p-6"
                data-reveal
              >
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#086dbe]/8 transition-transform duration-500 group-hover:scale-150" />
                <span className="relative text-[11px] font-semibold uppercase tracking-[0.16em] text-[#086dbe]">
                  0{i + 1}
                </span>
                <p className="relative mt-3 font-sans text-base font-bold tracking-[-0.02em] text-mota-ink sm:text-lg">
                  {item}
                </p>
                <div className="relative mt-3 h-0.5 w-8 rounded-full bg-[#086dbe] transition-all duration-500 group-hover:w-14" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why accessories */}
      <section className="section-pad relative overflow-hidden bg-mota-cream !pt-4">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(8,109,190,0.07),transparent_50%)]" />

        <div className="container-mota relative">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="mota-eyebrow-pill">Why Accessories</span>
              <h2 className="mota-title-section mt-4">
                The details that{" "}
                <span className="text-[#086dbe]">finish the brand</span>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="max-w-md text-[0.95rem] leading-relaxed text-mota-mist lg:justify-self-end lg:pt-12 lg:text-right"
            >
              Pair garments with matching trims so every wearer looks consistent, from ID
              badges to embroidered patches.
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
                    src="/college_uniforms.png"
                    alt="Branded uniform finishing"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center px-6 pb-7 pt-2 sm:px-8 sm:pb-9 lg:py-8 lg:pl-2 lg:pr-9">
                <h3 className="mota-title-card !text-white">
                  One program, garments and accessories together
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65 sm:mt-4">
                  We coordinate trims with your uniform order so branding, colour and
                  delivery stay aligned.
                </p>
                <CtaButton to="/contact" variant="accent" className="mt-6">
                  Get a Quote
                </CtaButton>
              </div>
            </motion.div>

            <div className="flex flex-col gap-4 sm:gap-5">
              {BENEFITS.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="flex flex-1 flex-col justify-center rounded-[1.5rem] bg-white px-6 py-5 shadow-soft sm:px-7 sm:py-6"
                >
                  <h3 className="font-sans text-lg font-bold tracking-[-0.02em] text-mota-ink">
                    {item.title}
                  </h3>
                  <div className="mt-2 h-0.5 w-8 rounded-full bg-[#086dbe]" />
                  <p className="mt-3 text-sm leading-relaxed text-mota-mist">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Finishing touches"
        title={
          <>
            Accessories that{" "}
            <span className="text-[#086dbe]">complete your brand</span>
          </>
        }
        description="Badges, ties, belts, socks and more, sourced and customised to match your uniform program."
        primaryLabel="Enquire Now"
        primaryTo="/contact"
        secondaryLabel="View Uniforms"
        secondaryTo="/uniforms"
      />
    </>
  );
}
