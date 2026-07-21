import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function PageHero({ eyebrow, title, subtitle, children, image }) {
  return (
    <section className="relative overflow-hidden bg-mota-cream pt-[var(--header-height)]">
      <div className="pointer-events-none absolute inset-0">
        {image && (
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover opacity-35"
            style={{ filter: "saturate(0.55) brightness(1.08)" }}
            aria-hidden="true"
          />
        )}
        <div className="absolute inset-0 bg-mota-cream/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-mota-cream/90 via-mota-cream/55 to-mota-cream" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(250,248,245,0.88)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(8,109,190,0.1),transparent_50%)]" />
      </div>

      <div className="container-mota relative">
        <div
          className={`section-pad !pb-12 sm:!pb-16 ${
            image ? "grid items-center gap-10 lg:grid-cols-2 lg:gap-16" : ""
          }`}
        >
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mota-eyebrow mb-5 sm:mb-6"
            >
              {eyebrow}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-[clamp(2.4rem,7vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.02em] text-mota-blue"
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mota-body mt-5 max-w-xl text-base sm:mt-6 sm:text-lg"
              >
                {subtitle}
              </motion.p>
            )}
            {children}
          </div>

          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25 }}
              className="relative overflow-hidden rounded-[1.75rem] border border-mota-line shadow-float"
            >
              <img
                src={image}
                alt=""
                className="aspect-[4/3] w-full object-cover sm:aspect-[5/4]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mota-blue/45 via-transparent to-transparent" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

export function ProductCard({
  title,
  description,
  index = 0,
  gradient,
  image,
  to = "/uniforms",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      data-reveal
    >
      <Link to={to} className="group block">
        <div className="card-hover relative overflow-hidden rounded-3xl border border-mota-line bg-white shadow-soft">
          <div
            className={`relative aspect-[4/5] overflow-hidden ${
              image ? "" : `bg-gradient-to-br ${gradient}`
            }`}
          >
            {image ? (
              <img
                src={image}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-t from-mota-blue/55 via-mota-blue/10 to-transparent" />
            <span className="absolute left-4 top-4 hidden rounded-full bg-mota-blue px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white sm:inline-block">
              0{index + 1}
            </span>
          </div>
          <div className="p-4 sm:p-6">
            <h3 className="mota-title-card text-lg transition-colors group-hover:text-[#086dbe] sm:text-2xl">{title}</h3>
            <p className="mota-body mt-1.5 line-clamp-2 hidden text-sm sm:mt-2 sm:block">{description}</p>
            <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#086dbe] opacity-100 transition-all duration-300 sm:mt-4 sm:opacity-0 sm:group-hover:opacity-100">
              Explore <HiOutlineArrowRight />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function BentoCard({
  title,
  description,
  index = 0,
  icon: Icon,
  large = false,
  dark = false,
  image,
}) {
  if (image) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.06 }}
        data-reveal
        className={`group overflow-hidden rounded-[1.75rem] border border-mota-line bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-mota-blue/20 hover:shadow-float ${
          large ? "sm:col-span-2" : ""
        }`}
      >
        <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[5/3]">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mota-blue/65 via-mota-blue/15 to-transparent" />
          <span className="absolute bottom-4 left-4 font-sans text-5xl font-bold leading-none text-white/30">
            0{index + 1}
          </span>
        </div>
        <div className="p-5 sm:p-7">
          <h3 className="mota-title-card">{title}</h3>
          <div className="mt-3 h-0.5 w-10 rounded-full bg-[#086dbe] transition-all duration-500 group-hover:w-16" />
          <p className="mota-body mt-4 text-sm leading-relaxed">{description}</p>
        </div>
      </motion.article>
    );
  }

  const cardClass = dark ? "mota-premium-card-dark" : "mota-premium-card";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      data-reveal
      className={`group ${cardClass} ${large ? "sm:col-span-2" : ""}`}
    >
      <div
        className={`absolute left-0 top-8 h-12 w-1 rounded-r-full ${
          dark ? "bg-white/40" : "bg-mota-blue"
        }`}
      />
      <div className="flex items-start justify-between gap-4">
        {Icon ? (
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 ${
              dark ? "bg-white/10 text-white" : "bg-mota-blue text-white"
            }`}
          >
            <Icon className="h-6 w-6" />
          </div>
        ) : (
          <span
            className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${
              dark ? "text-white/50" : "text-mota-blue"
            }`}
          >
            0{index + 1}
          </span>
        )}
      </div>
      <h3
        className={`mt-5 font-display text-xl font-semibold sm:text-2xl ${
          dark ? "text-white" : "text-mota-ink"
        }`}
      >
        {title}
      </h3>
      <p className={`mt-3 text-sm leading-relaxed ${dark ? "text-white/70" : "mota-body"}`}>
        {description}
      </p>
    </motion.div>
  );
}
