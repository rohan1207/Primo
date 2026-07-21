import { motion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
} from "react-icons/hi";
import { domains } from "../../data/content";
import CtaButton from "../ui/CtaButton";

const icons = {
  school: HiOutlineAcademicCap,
  corporate: HiOutlineBriefcase,
};

export default function DomainSplit() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-mota-cream">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(8,109,190,0.07),transparent_55%)]" />

      <div className="container-mota relative z-10 shrink-0 px-5 pb-4 pt-10 sm:px-8 sm:pb-5 sm:pt-12 lg:pt-14">
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

      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 gap-4 px-5 pb-8 sm:gap-5 sm:px-8 sm:pb-10 lg:grid-cols-2 lg:gap-6 lg:pb-12">
        {domains.map((domain, i) => {
          const DomainIcon = icons[domain.icon];

          return (
            <motion.article
              key={domain.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex min-h-[420px] overflow-hidden rounded-[1.75rem] sm:min-h-[480px] lg:h-full lg:min-h-0"
            >
              <img
                src={domain.image}
                alt={domain.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.05]"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-mota-blue via-mota-blue/55 to-mota-blue/10 transition-opacity duration-500 group-hover:from-mota-blue/95" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(8,109,190,0.35),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute left-5 top-5 flex items-center gap-3 sm:left-6 sm:top-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-md transition-colors duration-300 group-hover:bg-[#086dbe] sm:h-12 sm:w-12">
                  <DomainIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <span className="font-sans text-4xl font-bold leading-none text-white/25 transition-colors duration-300 group-hover:text-white/40 sm:text-5xl">
                  0{i + 1}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 flex flex-col p-5 sm:p-7 lg:p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70 sm:text-[11px]">
                  {domain.subtitle}
                </p>
                <h3 className="mt-2 font-sans text-2xl font-bold tracking-[-0.02em] text-white sm:text-3xl lg:text-[2.05rem]">
                  {domain.title}
                </h3>
                <div className="mt-3 h-0.5 w-10 rounded-full bg-[#086dbe] transition-all duration-500 group-hover:w-16" />
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/75 sm:text-[0.95rem]">
                  {domain.description}
                </p>

                <CtaButton to="/uniforms" variant="white" className="mt-5 sm:mt-6">
                  {domain.cta.replace("Explore ", "")}
                </CtaButton>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/10" />
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
