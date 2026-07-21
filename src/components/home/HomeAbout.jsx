import { motion } from "framer-motion";
import { aboutContent } from "../../data/content";
import CtaButton from "../ui/CtaButton";

const HOME_STATS = [
  { value: "25+", label: "Years Experience" },
  { value: "800+", label: "Garments / Day" },
  { value: "40K", label: "Sqft Facility" },
];

export default function HomeAbout() {
  return (
    <section className="section-pad relative overflow-hidden bg-mota-cream">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(8,109,190,0.07),transparent_50%)]" />

      <div className="container-mota relative">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-12 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="mota-eyebrow-pill">About Us</span>
            <h2 className="mota-title-section mt-5">
              Crafting Uniforms With{" "}
              <span className="text-[#086dbe]">Precision, Trust &amp; Scale</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-md text-[0.95rem] leading-relaxed text-mota-mist lg:justify-self-end lg:pt-12 lg:text-right xl:pt-14"
          >
            {aboutContent.intro}
          </motion.p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-[1.55fr_1fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="grid overflow-hidden rounded-[1.75rem] bg-mota-blue sm:rounded-[2rem] lg:grid-cols-[0.95fr_1.05fr]"
          >
            <div className="relative min-h-[220px] p-4 sm:min-h-[260px] sm:p-5 lg:min-h-0 lg:p-6">
              <div className="h-full overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem]">
                <img
                  src="/img1.jpeg"
                  alt="Mota Group manufacturing and team"
                  className="h-full w-full object-cover transition-transform duration-[1.1s] ease-out hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center px-6 pb-7 pt-2 sm:px-8 sm:pb-9 lg:py-8 lg:pl-2 lg:pr-9">
              <h3 className="mota-title-card text-white">
                Passion and Precision Drive Our Manufacturing Journey
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65 sm:mt-4 sm:text-[0.95rem]">
                End-to-end uniforms, design to delivery, with superb quality in the given
                time frame.
              </p>
              <CtaButton to="/about" variant="accent" className="mt-6 sm:mt-7">
                Learn More
              </CtaButton>
            </div>
          </motion.div>

          <div className="flex flex-col gap-4 sm:gap-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-1 flex-col justify-center rounded-[1.75rem] bg-white px-6 py-7 shadow-soft sm:rounded-[2rem] sm:px-8 sm:py-8"
            >
              <h3 className="mota-title-card">Quality Our Priority</h3>
              <p className="mt-3 text-sm leading-relaxed text-mota-mist sm:text-[0.95rem]">
                In-line checks, branded fabrics, and 25+ years of trusted delivery for
                schools, corporates, hospitals and industry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-1 flex-col justify-center rounded-[1.75rem] bg-[#086dbe] px-5 py-7 sm:rounded-[2rem] sm:px-6 sm:py-8"
            >
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {HOME_STATS.map((stat) => (
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
      </div>
    </section>
  );
}
