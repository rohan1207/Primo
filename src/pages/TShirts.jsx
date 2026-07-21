import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useAnimations";
import CtaButton from "../components/ui/CtaButton";
import CTABanner from "../components/ui/CTABanner";
import { tshirtTypes, publicGallery } from "../data/content";

const SERVICES = [
  {
    title: "Embroidery",
    text: "In-house computerized embroidery for logos, names and crest work at scale.",
  },
  {
    title: "Screen & Sublimation",
    text: "Full-colour prints and sublimation for events, sports and promotional drops.",
  },
  {
    title: "Bulk Delivery",
    text: "Fast turnaround for corporate kits, campaigns and seasonal teamwear orders.",
  },
];

const TSHIRT_IMAGES = [
  "/college_uniforms.jpg",
  "/corporate_uniforms.webp",
  "/school_uniform.jpg",
  "/hotel_uniform.jpg",
  "/industrial_uniform.jpg",
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
              Corporate branded t-shirts, event wear, and custom print solutions with
              in-house embroidery and sublimation.
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
                <img
                  src="/college_uniforms.jpg"
                  alt="Branded t-shirts and promotional wear by Mota"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-3 hidden overflow-hidden rounded-2xl border border-white/50 shadow-float sm:block sm:-bottom-5 sm:-left-5 sm:w-[42%]">
              <img
                src="/corporate_uniforms.webp"
                alt="Corporate branded apparel"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collections */}
      <section className="section-pad relative overflow-hidden bg-mota-cream !pt-8 sm:!pt-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(8,109,190,0.08),transparent_55%)]" />

        <div className="container-mota relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mota-eyebrow-pill">Collections</span>
            <h2 className="mota-title-section mt-4">
              Print, Embroider,{" "}
              <span className="text-[#086dbe]">Deliver</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[0.95rem] leading-relaxed text-mota-mist sm:text-base">
              Round neck, polo, dry-fit and more — branded for events, corporates and
              promotions.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {tshirtTypes.map((type, i) => (
              <motion.article
                key={type}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: (i % 3) * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group overflow-hidden rounded-2xl border border-mota-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[#086dbe]/25 hover:shadow-float sm:rounded-[1.75rem]"
                data-reveal
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={TSHIRT_IMAGES[i % TSHIRT_IMAGES.length] || publicGallery[i % publicGallery.length]}
                    alt={type}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mota-blue/65 via-mota-blue/15 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-[#086dbe] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white sm:left-4 sm:top-4">
                    Collection
                  </span>
                  <span className="absolute bottom-3 left-3 font-sans text-3xl font-bold leading-none text-white/25 sm:bottom-4 sm:left-4 sm:text-4xl">
                    0{i + 1}
                  </span>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="mota-title-card text-base sm:text-2xl">{type}</h3>
                  <div className="mt-2.5 h-0.5 w-8 rounded-full bg-[#086dbe] transition-all duration-500 group-hover:w-full sm:mt-3 sm:w-10" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
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
              <span className="mota-eyebrow-pill">In-House Capability</span>
              <h2 className="mota-title-section mt-4">
                From blank to{" "}
                <span className="text-[#086dbe]">branded</span>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="max-w-md text-[0.95rem] leading-relaxed text-mota-mist lg:justify-self-end lg:pt-12 lg:text-right"
            >
              Embroidery, printing and finishing under one roof — so your tees ship ready
              for the event or office rollout.
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
                    src="/img1.jpeg"
                    alt="In-house print and embroidery"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center px-6 pb-7 pt-2 sm:px-8 sm:pb-9 lg:py-8 lg:pl-2 lg:pr-9">
                <h3 className="mota-title-card text-white">
                  Custom tees for teams, events and brands
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65 sm:mt-4">
                  Tell us the quantity, artwork and timeline — we handle print, embroidery
                  and packing.
                </p>
                <CtaButton to="/contact" variant="accent" className="mt-6">
                  Start Your Order
                </CtaButton>
              </div>
            </motion.div>

            <div className="flex flex-col gap-4 sm:gap-5">
              {SERVICES.map((item, i) => (
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
        eyebrow="Event coming up?"
        title={
          <>
            Custom tees for your{" "}
            <span className="text-[#086dbe]">team or event</span>
          </>
        }
        description="In-house embroidery, screen printing and sublimation — fast turnaround for bulk orders."
        primaryLabel="Get a Quote"
        primaryTo="/contact"
        secondaryLabel="Our Clients"
        secondaryTo="/clients"
      />
    </>
  );
}
