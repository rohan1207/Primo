import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./GridMotion.css";

const GridMotion = ({ items = [], gradientColor = "#086dbe" }) => {
  const gridRef = useRef(null);
  const rowRefs = useRef([]);
  const mouseXRef = useRef(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const scrollOffsetRef = useRef(0);

  const totalItems = 28;
  const defaultItems = Array.from({ length: totalItems }, (_, index) => `Item ${index + 1}`);
  const combinedItems = items.length > 0 ? items.slice(0, totalItems) : defaultItems;

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);

    const handleMouseMove = (e) => {
      mouseXRef.current = e.clientX;
    };

    const handleScroll = () => {
      const el = gridRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight || 1;
      // -1 when section is below, 0 centered, +1 when above
      const progress = 1 - (rect.top + rect.height / 2) / (viewH / 2 + rect.height / 2);
      scrollOffsetRef.current = Math.max(-1, Math.min(1, progress));
    };

    const updateMotion = () => {
      const maxMoveAmount = 320;
      const baseDuration = 0.75;
      const inertiaFactors = [0.55, 0.4, 0.28, 0.18];

      const mouseMove =
        (mouseXRef.current / window.innerWidth) * maxMoveAmount - maxMoveAmount / 2;
      // Same left/right parallax driven by scroll up/down
      const scrollMove = scrollOffsetRef.current * maxMoveAmount * 0.85;

      rowRefs.current.forEach((row, index) => {
        if (!row) return;
        const direction = index % 2 === 0 ? 1 : -1;
        const moveAmount = (mouseMove + scrollMove) * direction;

        gsap.to(row, {
          x: moveAmount,
          duration: baseDuration + inertiaFactors[index % inertiaFactors.length],
          ease: "power3.out",
          overwrite: "auto",
        });
      });
    };

    handleScroll();
    const removeAnimationLoop = gsap.ticker.add(updateMotion);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      removeAnimationLoop();
    };
  }, []);

  return (
    <div className="noscroll loading" ref={gridRef}>
      <section
        className="intro"
        style={{
          background: `radial-gradient(circle at 50% 35%, ${gradientColor}22 0%, rgba(250, 248, 245, 0.95) 42%, #faf8f5 100%)`,
        }}
      >
        <div className="gridMotion-container">
          {[...Array(4)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="row"
              ref={(el) => {
                rowRefs.current[rowIndex] = el;
              }}
            >
              {[...Array(7)].map((_, itemIndex) => {
                const content = combinedItems[rowIndex * 7 + itemIndex];
                const isImage =
                  typeof content === "string" &&
                  (content.startsWith("http") || content.startsWith("/") || content.startsWith("data:"));

                return (
                  <div key={itemIndex} className="row__item">
                    <div className="row__item-inner">
                      {isImage ? (
                        <div
                          className="row__item-img"
                          style={{ backgroundImage: `url(${content})` }}
                        />
                      ) : (
                        <div className="row__item-content">{content}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="fullview" />
      </section>
    </div>
  );
};

export default GridMotion;
