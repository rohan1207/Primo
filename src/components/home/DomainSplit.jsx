import { motion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineGift,
  HiOutlineExternalLink,
} from "react-icons/hi";
import { domains } from "../../data/content";
import CtaButton from "../ui/CtaButton";
import { useQuote } from "../../context/QuoteContext";

const icons = {
  school: HiOutlineAcademicCap,
  corporate: HiOutlineBriefcase,
  gifting: HiOutlineGift,
};

export default function DomainSplit() {
  const { openQuote } = useQuote();

  return (
    <section className="relative overflow-hidden bg-mota-cream">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(8,109,190,0.07),transparent_55%)]" />

      <div className="container-mota relative z-10 px-5 pb-4 pt-10 sm:px-8 sm:pb-5 sm:pt-12 lg:pt-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="mota-eyebrow-pill mb-4">Two Domains, One Excellence</span>
          <h2 className="mota-title-section mt-4">
            School &amp;{" "}
            <span className="text-[#086dbe]">Corporate</span> Uniforms
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[0.95rem] leading-relaxed text-mota-mist sm:text-base">
            Whether dressing the next generation or your professional workforce, Mota
            delivers tailored excellence across both worlds.
          </p>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-3 px-5 pb-10 sm:grid-cols-2 sm:gap-4 sm:px-8 sm:pb-12 lg:grid-cols-3 lg:gap-5 lg:pb-16">
        {domains.map((domain, i) => {
          const DomainIcon = icons[domain.icon];
          const label = domain.ctaLabel || domain.cta.replace("Explore ", "");

          return (
            <motion.article
              key={domain.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex min-h-[340px] cursor-pointer overflow-hidden rounded-[1.5rem] sm:min-h-[400px] lg:min-h-[440px] lg:rounded-[1.75rem]"
            >
              <img
                src={domain.image}
                alt={domain.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.05]"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-mota-blue via-mota-blue/55 to-mota-blue/10 transition-opacity duration-500 group-hover:from-mota-blue/95" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(8,109,190,0.35),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute left-4 top-4 flex items-center gap-2.5 sm:left-5 sm:top-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-md transition-colors duration-300 group-hover:bg-[#086dbe] sm:h-10 sm:w-10">
                  <DomainIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <span className="font-sans text-3xl font-bold leading-none text-white/25 transition-colors duration-300 group-hover:text-white/40 sm:text-4xl">
                  0{i + 1}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 flex flex-col p-4 sm:p-5 lg:p-6">
                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/70 sm:text-[10px]">
                  {domain.subtitle}
                </p>
                <h3 className="mt-1.5 font-sans text-xl font-bold tracking-[-0.02em] text-white sm:text-2xl">
                  {domain.title}
                </h3>
                <div className="mt-2.5 h-0.5 w-8 rounded-full bg-[#086dbe] transition-all duration-500 group-hover:w-14" />
                <p className="mt-2.5 line-clamp-3 text-[13px] leading-relaxed text-white/75 sm:text-sm">
                  {domain.description}
                </p>

                <CtaButton static variant="white" className="mt-4 sm:mt-5">
                  <span className="inline-flex items-center gap-1.5">
                    {label}
                    {domain.external && <HiOutlineExternalLink className="h-3.5 w-3.5" />}
                  </span>
                </CtaButton>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] ring-1 ring-inset ring-white/10 transition-colors duration-500 group-hover:ring-white/25 lg:rounded-[1.75rem]" />

              {/* Whole card is the click target */}
              {domain.external ? (
                <a
                  href={domain.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${domain.title}, opens in a new tab`}
                  className="absolute inset-0 z-20 rounded-[1.5rem] outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-mota-blue lg:rounded-[1.75rem]"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => openQuote(domain.title)}
                  aria-label={`Get a quote for ${domain.title}`}
                  className="absolute inset-0 z-20 rounded-[1.5rem] outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-mota-blue lg:rounded-[1.75rem]"
                />
              )}
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
