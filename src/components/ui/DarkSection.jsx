import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function DarkSection({
  children,
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) {
  return (
    <section className={`section-pad relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-mota-blue" />
      <div className="mota-dark-blob absolute -right-32 top-0 h-96 w-96 opacity-40" />
      <div className="mota-dark-blob absolute -bottom-24 -left-24 h-72 w-72 opacity-30" />
      <div className="mota-grain opacity-[0.04]" />

      <div className="container-mota relative">
        {(eyebrow || title) && (
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            align={align}
            light
          />
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={eyebrow || title ? "mt-12 sm:mt-14" : ""}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
