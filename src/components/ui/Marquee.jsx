import { motion } from "framer-motion";

export default function Marquee({ items, speed = 30, reverse = false }) {
  const duplicated = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />
      <motion.div
        className="flex w-max gap-8"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {duplicated.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 whitespace-nowrap text-sm font-medium uppercase tracking-[0.2em] text-mota-mist/50"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-mota-blue/40" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
