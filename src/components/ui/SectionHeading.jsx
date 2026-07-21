import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "left",
  pill = true,
}) {
  const alignClass =
    align === "center" ? "mx-auto text-center" : align === "right" ? "ml-auto text-right" : "";

  return (
    <div className={`max-w-2xl ${alignClass}`} data-reveal>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className={
            light
              ? "mota-eyebrow-light mb-4"
              : pill
                ? "mota-eyebrow-pill mb-4"
                : "mota-eyebrow mb-4"
          }
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className={`mota-title-section ${light ? "text-white" : ""}`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.14, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`mt-4 text-[0.95rem] leading-relaxed sm:mt-5 sm:text-base ${
            light ? "text-white/70" : "text-mota-mist"
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
