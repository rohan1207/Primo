import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useAnimations";
import CtaButton from "../components/ui/CtaButton";
import CTABanner from "../components/ui/CTABanner";
import ImageWithFallback from "../components/ui/ImageWithFallback";
import { tshirtTypes, printMethods } from "../data/content";

/** Used until the dedicated /tshirts photography is added to /public */
const FALLBACKS = [
  "/college_uniforms.png",
  "/corporate_uniforms.png",
  "/school_uniform.png",
  "/hotel_uniform.png",
  "/industrial_uniform.png",
  "/img1.jpeg",
];

export default function TShirts() {
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
            <span className="mota-eyebrow-pill">T-Shirts</span>
            <h1 className="mt-5 font-sans text-[clamp(2.25rem,5vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.03em] text-mota-ink">
              Branded Tees &amp;{" "}
              <span className="text-[#086dbe]">Promotional Wear</span>
            </h1>
            <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-mota-mist sm:mt-6 sm:text-base">
              Twelve styles, every fabric weight, and in-house printing and embroidery.
              Choose a cut, pick your artwork, and we handle the rest.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8">
              <CtaButton to="/contact" variant="accent">
                Get a Quote
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
                <ImageWithFallback
                  src="/tshirts/hero.jpg"
                  fallback="/college_uniforms.png"
                  alt="Branded t-shirts and promotional wear by Mota"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-3 hidden overflow-hidden rounded-2xl border border-white/50 shadow-float sm:block sm:-bottom-5 sm:-left-5 sm:w-[42%]">
              <ImageWithFallback
                src="/tshirts/hero-inset.jpg"
                fallback="/corporate_uniforms.png"
                alt="Corporate branded apparel"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full range */}
      <section className="section-pad relative overflow-hidden bg-mota-cream !pt-8 sm:!pt-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(8,109,190,0.08),transparent_55%)]" />

        <div className="container-mota relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mota-eyebrow-pill">The Full Range</span>
            <h2 className="mota-title-section mt-4">
              Every Style,{" "}
              <span className="text-[#086dbe]">Spec&apos;d Out</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[0.95rem] leading-relaxed text-mota-mist sm:text-base">
              Fabric, weight and best use for each cut, so you can pick the right tee
              before you enquire.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {tshirtTypes.map((type, i) => (
              <motion.article
                key={type.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: (i % 3) * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-mota-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[#086dbe]/25 hover:shadow-float sm:rounded-[1.75rem]"
                data-reveal
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={type.image}
                    fallback={FALLBACKS[i % FALLBACKS.length]}
                    alt={type.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mota-blue/70 via-mota-blue/10 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-[#086dbe] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white sm:left-4 sm:top-4">
                    {type.gsm}
                  </span>
                  <h3 className="absolute inset-x-0 bottom-0 p-3 font-sans text-base font-bold tracking-[-0.02em] text-white sm:p-4 sm:text-xl">
                    {type.title}
                  </h3>
                </div>

                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#086dbe]">
                    {type.fabric}
                  </p>
                  <p className="mt-2 hidden text-sm leading-relaxed text-mota-mist sm:block">
                    {type.description}
                  </p>
                  <p className="mt-auto pt-3 text-xs leading-snug text-mota-mist/80 sm:pt-4 sm:text-sm">
                    <span className="font-semibold text-mota-ink">Best for: </span>
                    {type.bestFor}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Printing & branding */}
      <section className="section-pad relative overflow-hidden bg-mota-cream !pt-4">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(8,109,190,0.07),transparent_50%)]" />

        <div className="container-mota relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mota-eyebrow-pill">Branding Options</span>
            <h2 className="mota-title-section mt-4">
              From Blank to{" "}
              <span className="text-[#086dbe]">Branded</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[0.95rem] leading-relaxed text-mota-mist sm:text-base">
              Six decoration methods run in-house, so artwork, quality and timelines stay
              under our control.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-5">
            {printMethods.map((method, i) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.06, duration: 0.5 }}
                className="group relative overflow-hidden rounded-[1.25rem] border border-mota-line bg-white/90 p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[#086dbe]/25 hover:shadow-float sm:rounded-[1.5rem] sm:p-6"
                data-reveal
              >
                <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[#086dbe]/[0.07] transition-transform duration-500 group-hover:scale-150" />
                <span className="relative text-[11px] font-semibold uppercase tracking-[0.16em] text-[#086dbe]">
                  0{i + 1}
                </span>
                <h3 className="relative mt-3 font-sans text-base font-bold tracking-[-0.02em] text-mota-ink sm:text-lg">
                  {method.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-mota-mist">
                  {method.text}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <CtaButton to="/contact" variant="accent">
              Start Your Order
            </CtaButton>
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Event coming up?"
        title={
          <>
            Custom tees for your{" "}
            <span className="text-[#086dbe]">team or event</span>
          </>
        }
        description="In-house embroidery, screen printing and sublimation, fast turnaround for bulk orders."
        primaryLabel="Get a Quote"
        primaryTo="/contact"
        secondaryLabel="Our Clients"
        secondaryTo="/clients"
      />
    </>
  );
}
