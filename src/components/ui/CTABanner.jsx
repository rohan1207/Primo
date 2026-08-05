import { motion } from "framer-motion";
import CtaButton from "./CtaButton";

export default function CTABanner({
  eyebrow = "Ready to partner?",
  title = "Let's build your uniform program together",
  description = "From schools to corporates, we deliver customised uniforms with superb quality in the given time frame.",
  primaryLabel = "Get in Touch",
  primaryTo = "/contact",
  secondaryLabel = "See Our Clients",
  secondaryTo = "/clients",
  variant = "light",
}) {
  const isLight = variant === "light";
  const isExternal = primaryTo.startsWith("tel:") || primaryTo.startsWith("mailto:");

  return (
    <section
      className={`section-pad !pt-0 !pb-14 sm:!pb-20 ${isLight ? "bg-mota-cream" : ""}`}
    >
      <div className="container-mota">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className={`relative overflow-hidden rounded-[1.75rem] px-6 py-12 sm:rounded-[2rem] sm:px-10 sm:py-16 lg:px-14 ${
            isLight
              ? "border border-mota-line bg-white/85 shadow-float backdrop-blur-sm"
              : "mota-dark-panel"
          }`}
          data-reveal
        >
          {isLight ? (
            <>
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#086dbe]/10" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-mota-blue/5" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(8,109,190,0.08),transparent_55%)]" />
            </>
          ) : (
            <>
              <div className="mota-dark-blob -right-20 -top-20 h-64 w-64" />
              <div className="mota-dark-blob -bottom-16 -left-16 h-48 w-48 opacity-60" />
            </>
          )}

          <div className="relative max-w-2xl">
            <p className={isLight ? "mota-eyebrow-pill" : "mota-eyebrow-light"}>{eyebrow}</p>
            <h2
              className={`mt-5 font-sans text-[clamp(1.85rem,4vw,2.85rem)] font-bold leading-[1.12] tracking-[-0.03em] ${
                isLight ? "text-mota-ink" : "text-white"
              }`}
            >
              {title}
            </h2>
            <p
              className={`mt-4 text-[0.95rem] leading-relaxed sm:text-base ${
                isLight ? "text-mota-mist" : "text-white/70"
              }`}
            >
              {description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              {isExternal ? (
                <CtaButton href={primaryTo} variant={isLight ? "accent" : "white"}>
                  {primaryLabel}
                </CtaButton>
              ) : (
                <CtaButton to={primaryTo} variant={isLight ? "accent" : "white"}>
                  {primaryLabel}
                </CtaButton>
              )}
              {secondaryLabel && (
                <CtaButton
                  to={secondaryTo}
                  variant={isLight ? "outline" : "white"}
                  className={!isLight ? "border border-white/25 bg-transparent text-white hover:bg-white hover:text-mota-blue" : ""}
                >
                  {secondaryLabel}
                </CtaButton>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
