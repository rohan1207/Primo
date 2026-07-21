import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({ children, className = "", onClick, href, type = "button" }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.2;
    setPosition({ x, y });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const style = { transform: `translate(${position.x}px, ${position.y}px)` };
  const shared = {
    ref,
    onMouseMove: handleMouse,
    onMouseLeave: reset,
    style,
    whileTap: { scale: 0.96 },
    className,
  };

  if (href) {
    return (
      <motion.a href={href} {...shared}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} {...shared}>
      {children}
    </motion.button>
  );
}
