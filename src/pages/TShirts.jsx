import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useAnimations";
import CtaButton from "../components/ui/CtaButton";
import CTABanner from "../components/ui/CTABanner";
import ImageWithFallback from "../components/ui/ImageWithFallback";
import QuoteCta from "../components/ui/QuoteCta";
import { tshirtTypes, tshirtReasons, tshirtCatalogues, printMethods } from "../data/content";

function CatalogueCard({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: (index % 4) * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-mota-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[#086dbe]/25 hover:shadow-float sm:rounded-[1.5rem]"
      data-reveal
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-mota-cream sm:aspect-[3/4]">
        <ImageWithFallback
          src={item.cover}
          fallback="/tshirts/elegance.webp"
          alt={`${item.name} catalogue`}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mota-blue/50 via-transparent to-transparent" />
        <span className="absolute left-2.5 top-2.5 rounded-full bg-white/95 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-mota-blue shadow-soft sm:left-3.5 sm:top-3.5 sm:px-2.5 sm:py-1 sm:text-[10px]">
          {item.type}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <p className="hidden min-h-[1.1rem] text-[10px] font-semibold uppercase tracking-[0.12em] text-[#086dbe] sm:block sm:text-[11px]">
          {item.subtitle}
        </p>
        <h3 className="mt-0.5 font-sans text-[0.95rem] font-bold leading-snug tracking-[-0.02em] text-mota-ink sm:mt-1 sm:text-lg">
          {item.name}
        </h3>

        <div className="mt-auto pt-2.5 sm:pt-3.5">
          <CtaButton
            href={encodeURI(item.file)}
            download={item.downloadName}
            variant="accent"
          >
            <span className="sm:hidden">Save</span>
            <span className="hidden sm:inline">Download</span>
          </CtaButton>
        </div>
      </div>
    </motion.article>
  );
}

function ColorSwatches({ colors, compact = false }) {
  return (
    <div className={`flex flex-wrap items-center ${compact ? "gap-1" : "gap-1.5 sm:gap-2"}`}>
      {colors.map((color) => (
        <span
          key={color.name}
          title={color.name}
          aria-label={color.name}
          className={`relative shrink-0 rounded-full border border-black/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)] ${
            compact ? "h-3 w-3" : "h-3.5 w-3.5 sm:h-5 sm:w-5"
          }`}
          style={{ backgroundColor: color.hex }}
        />
      ))}
    </div>
  );
}

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
            <span className="mota-eyebrow-pill">T-Shirts &amp; Casual Wear</span>
            <h1 className="mt-5 font-sans text-[clamp(2.25rem,5vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.03em] text-mota-ink">
              Style That Speaks.{" "}
              <span className="text-[#086dbe]">Quality That Lasts.</span>
            </h1>
            <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-mota-mist sm:mt-6 sm:text-base">
              Six signature styles across polos, tees, hoodies and fleece. Pick a cut,
              choose from the colour chart, and we brand it in-house at Baramati.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-2.5 sm:mt-8 sm:gap-3">
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
                  src="/tshirts/hero.webp"
                  fallback="/tshirts/elegance.webp"
                  alt="Branded t-shirts and casual wear by Mota"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-3 hidden w-[44%] overflow-hidden rounded-2xl border border-white/50 shadow-float sm:block sm:-bottom-5 sm:-left-5">
              <ImageWithFallback
                src="/tshirts/hero-inset.webp"
                fallback="/tshirts/comfort.webp"
                alt="Team in branded polo shirts"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Catalogues */}
      <section className="section-pad relative overflow-hidden bg-mota-cream !pt-8 sm:!pt-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(8,109,190,0.08),transparent_55%)]" />

        <div className="container-mota relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mota-eyebrow-pill">Catalogues</span>
            <h2 className="mota-title-section mt-4">
              Browse &amp;{" "}
              <span className="text-[#086dbe]">Download</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[0.95rem] leading-relaxed text-mota-mist sm:text-base">
              Full brand catalogues with styles, colours and specs. Save a copy and share it
              with your team before you place an order.
            </p>
          </div>

          <div className="mt-10 sm:mt-12">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:hidden">
              {tshirtCatalogues.map((item, i) => (
                <CatalogueCard key={item.file} item={item} index={i} />
              ))}
            </div>

            <div className="hidden space-y-5 lg:block">
              {Array.from(
                { length: Math.ceil(tshirtCatalogues.length / 4) },
                (_, row) => tshirtCatalogues.slice(row * 4, row * 4 + 4)
              ).map((row, rowIndex) => {
                const cols = row.length;
                const width =
                  cols === 4 ? "w-full" : cols === 3 ? "w-3/4" : cols === 2 ? "w-1/2" : "w-1/4";

                return (
                  <div
                    key={row.map((item) => item.file).join("-")}
                    className={`mx-auto grid gap-5 ${width} ${
                      cols === 4
                        ? "grid-cols-4"
                        : cols === 3
                          ? "grid-cols-3"
                          : cols === 2
                            ? "grid-cols-2"
                            : "grid-cols-1"
                    }`}
                  >
                    {row.map((item, i) => (
                      <CatalogueCard
                        key={item.file}
                        item={item}
                        index={rowIndex * 4 + i}
                      />
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Collection */}
      <section className="section-pad relative overflow-hidden bg-mota-cream !pt-8 sm:!pt-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(8,109,190,0.08),transparent_55%)]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='56' height='50' viewBox='0 0 56 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M28 0l14 8v16L28 32 14 24V8zM0 24l14 8v16L0 56l-14-8V32zM56 24l14 8v16L56 56 42 48V32z' fill='%231e3a5f' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="container-mota relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mota-eyebrow-pill">The Collection</span>
            <h2 className="mota-title-section mt-4">
              Six Styles,{" "}
              <span className="text-[#086dbe]">Full Colour Charts</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[0.95rem] leading-relaxed text-mota-mist sm:text-base">
              Each style ships with its own colour range. Tap a swatch name on hover, or
              ask us to match a pantone for bulk orders.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-3 lg:gap-5">
            {tshirtTypes.map((item, i) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: (i % 3) * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-mota-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[#086dbe]/25 hover:shadow-float sm:rounded-[1.5rem]"
                data-reveal
              >
                {/* Shorter image so a full card fits in one viewport */}
                <div className="relative aspect-[1/1] overflow-hidden bg-mota-cream sm:aspect-[4/3] lg:aspect-[5/4]">
                  <ImageWithFallback
                    src={item.image}
                    fallback={item.fallback}
                    alt={`${item.name}, ${item.subtitle}`}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mota-blue/40 via-transparent to-transparent" />
                  <span className="absolute left-2.5 top-2.5 rounded-full bg-white/95 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-mota-blue shadow-soft sm:left-3.5 sm:top-3.5 sm:px-2.5 sm:py-1 sm:text-[10px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Fixed content structure keeps title / colours / CTA on the same baseline across cards */}
                <div className="flex flex-1 flex-col p-3 sm:p-4 lg:p-5">
                  <p className="hidden min-h-[1.1rem] text-[10px] font-semibold uppercase tracking-[0.12em] text-[#086dbe] sm:line-clamp-1 sm:block sm:text-[11px]">
                    {item.subtitle}
                  </p>
                  <h3 className="mt-0.5 font-sans text-[0.95rem] font-bold uppercase leading-snug tracking-[-0.02em] text-mota-ink sm:mt-1 sm:text-xl lg:text-[1.35rem]">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 hidden min-h-[2.6rem] text-sm leading-relaxed text-mota-mist sm:line-clamp-2 sm:block">
                    {item.description}
                  </p>

                  <div className="mt-auto border-t border-mota-line pt-2.5 sm:pt-3.5">
                    <p className="mb-1.5 hidden text-[10px] font-semibold uppercase tracking-[0.14em] text-mota-mist sm:block">
                      Available colours
                    </p>
                    <div className="min-h-[1.1rem] sm:min-h-[1.35rem]">
                      <ColorSwatches colors={item.colors} />
                    </div>
                    <p className="mt-1.5 hidden text-[11px] leading-snug text-mota-mist/80 sm:line-clamp-1 sm:block">
                      {item.colors.map((c) => c.name).join(" · ")}
                    </p>
                  </div>

                  <div className="pt-2.5 sm:pt-3.5">
                    <QuoteCta subject={`T-Shirts, ${item.name}`} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="section-pad relative overflow-hidden bg-mota-cream !pt-4">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(8,109,190,0.07),transparent_50%)]" />

        <div className="container-mota relative">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="mota-eyebrow-pill">Why Mota Tees</span>
              <h2 className="mota-title-section mt-4">
                Built on trust,{" "}
                <span className="text-[#086dbe]">crafted for you</span>
              </h2>
              <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-mota-mist sm:text-base">
                Stylish, comfortable apparel for every occasion, contemporary cuts in
                premium fabrics, finished under one roof at our Baramati plant.
              </p>
              <CtaButton to="/contact" variant="accent" className="mt-6">
                Request Samples
              </CtaButton>
            </motion.div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {tshirtReasons.map((reason, i) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.05, duration: 0.45 }}
                  className={`rounded-2xl border border-mota-line bg-white/90 p-4 shadow-soft sm:p-5 ${
                    i === tshirtReasons.length - 1 && tshirtReasons.length % 2 === 1
                      ? "sm:col-span-2"
                      : ""
                  }`}
                  data-reveal
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#086dbe]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-sans text-base font-bold tracking-[-0.02em] text-mota-ink sm:text-lg">
                    {reason.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-mota-mist">{reason.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Printing & branding */}
      <section className="section-pad relative overflow-hidden bg-mota-cream !pt-4">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(8,109,190,0.07),transparent_50%)]" />

        <div className="container-mota relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mota-eyebrow-pill">Branding Options</span>
            <h2 className="mota-title-section mt-4">
              From Blank to{" "}
              <span className="text-[#086dbe]">Branded</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[0.95rem] leading-relaxed text-mota-mist sm:text-base">
              Embroidery, screen print, sublimation and more, all run in-house so artwork
              and timelines stay under our control.
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
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-mota-line bg-white/90 p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[#086dbe]/25 hover:shadow-float sm:rounded-[1.5rem] sm:p-6"
                data-reveal
              >
                <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[#086dbe]/[0.07] transition-transform duration-500 group-hover:scale-150" />
                <span className="relative text-[11px] font-semibold uppercase tracking-[0.16em] text-[#086dbe]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="relative mt-3 font-sans text-base font-bold tracking-[-0.02em] text-mota-ink sm:text-lg">
                  {method.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-mota-mist">
                  {method.text}
                </p>
                <div className="relative mt-auto pt-3">
                  <QuoteCta subject={`Branding, ${method.title}`} variant="link" />
                </div>
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
