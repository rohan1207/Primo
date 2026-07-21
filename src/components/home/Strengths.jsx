import { motion } from "framer-motion";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { strengths, stats, publicGallery } from "../../data/content";
import SectionHeading from "../ui/SectionHeading";
import AnimatedCounter from "../ui/AnimatedCounter";

const STAT_IMAGES = [
  publicGallery[0],
  publicGallery[4],
  publicGallery[8],
  publicGallery[3],
];

export default function Strengths() {
  return (
    <section className="section-pad relative overflow-hidden bg-mota-cream">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(8,109,190,0.1),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(30,58,95,0.06),transparent_50%)]" />

      <div className="container-mota relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div>
            <SectionHeading
              eyebrow="Our Strengths"
              title={
                <>
                  Built for Scale,{" "}
                  <span className="text-[#086dbe]">Crafted for Quality</span>
                </>
              }
              description="From design to delivery, every step happens under one roof at our Baramati facility."
            />

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {strengths.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-3 rounded-2xl border border-mota-line bg-white/80 p-4 shadow-soft backdrop-blur-sm transition-all duration-300 hover:border-[#086dbe]/30 hover:bg-white"
                  data-reveal
                >
                  <HiOutlineCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#086dbe]" />
                  <span className="text-sm leading-snug text-mota-mist">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-square sm:rounded-3xl"
                data-reveal
              >
                <img
                  src={STAT_IMAGES[i % STAT_IMAGES.length]}
                  alt={stat.label}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1c2e]/95 via-[#152a47]/70 to-[#152a47]/35" />
                <div className="absolute inset-0 bg-mota-blue/25" />

                <div className="relative z-10 flex h-full flex-col justify-end p-4 sm:p-6">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
                  />
                  <span className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/85 sm:mt-2 sm:text-xs">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
