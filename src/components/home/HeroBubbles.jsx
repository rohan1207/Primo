import { useEffect, useRef } from "react";

const BUBBLES = [
  { id: "school", label: "School\nUniforms", tone: "navy" },
  { id: "industry", label: "Industry\nUniforms", tone: "blue" },
  { id: "corporate", label: "Corporate\nUniforms", tone: "slate" },
  { id: "gifting", label: "Gifting", tone: "gold" },
];

const TONE_CLASS = {
  navy: "hero-bubble--navy",
  blue: "hero-bubble--blue",
  slate: "hero-bubble--slate",
  gold: "hero-bubble--gold",
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

export default function HeroBubbles() {
  const layerRef = useRef(null);
  const nodesRef = useRef([]);
  const bodiesRef = useRef([]);
  const pointerRef = useRef({ x: 0, y: 0, active: false });
  const sizeRef = useRef({ w: 0, h: 0 });

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return undefined;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frameId = 0;
    let running = true;

    const measure = () => {
      const rect = layer.getBoundingClientRect();
      sizeRef.current = { w: rect.width, h: rect.height };
      const base = Math.min(rect.width, rect.height);
      const radius = clamp(base * 0.09, 48, 78);

      if (!bodiesRef.current.length) {
        const placements = [
          { x: rect.width * 0.16, y: rect.height * 0.28 },
          { x: rect.width * 0.82, y: rect.height * 0.26 },
          { x: rect.width * 0.2, y: rect.height * 0.72 },
          { x: rect.width * 0.78, y: rect.height * 0.7 },
        ];

        bodiesRef.current = BUBBLES.map((bubble, index) => ({
          ...bubble,
          r: radius,
          x: placements[index].x,
          y: placements[index].y,
          vx: (Math.random() * 1.4 + 0.75) * (index % 2 === 0 ? 1 : -1),
          vy: (Math.random() * 1.4 + 0.75) * (index < 2 ? 1 : -1),
        }));
      } else {
        bodiesRef.current.forEach((body) => {
          body.r = radius;
          body.x = clamp(body.x, radius, rect.width - radius);
          body.y = clamp(body.y, radius, rect.height - radius);
        });
      }

      paint();
    };

    const paint = () => {
      bodiesRef.current.forEach((body, index) => {
        const node = nodesRef.current[index];
        if (!node) return;
        const size = body.r * 2;
        node.style.width = `${size}px`;
        node.style.height = `${size}px`;
        node.style.transform = `translate3d(${body.x - body.r}px, ${body.y - body.r}px, 0)`;
      });
    };

    const bounceWalls = (body, w, h) => {
      if (body.x - body.r < 0) {
        body.x = body.r;
        body.vx = Math.abs(body.vx) * 0.95;
      } else if (body.x + body.r > w) {
        body.x = w - body.r;
        body.vx = -Math.abs(body.vx) * 0.95;
      }

      if (body.y - body.r < 0) {
        body.y = body.r;
        body.vy = Math.abs(body.vy) * 0.95;
      } else if (body.y + body.r > h) {
        body.y = h - body.r;
        body.vy = -Math.abs(body.vy) * 0.95;
      }
    };

    const resolveCollisions = (bodies) => {
      for (let i = 0; i < bodies.length; i += 1) {
        for (let j = i + 1; j < bodies.length; j += 1) {
          const a = bodies[i];
          const b = bodies[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.hypot(dx, dy) || 0.0001;
          const minDist = a.r + b.r;

          if (dist < minDist) {
            const nx = dx / dist;
            const ny = dy / dist;
            const overlap = (minDist - dist) * 0.55;

            a.x -= nx * overlap;
            a.y -= ny * overlap;
            b.x += nx * overlap;
            b.y += ny * overlap;

            const dvx = a.vx - b.vx;
            const dvy = a.vy - b.vy;
            const impact = dvx * nx + dvy * ny;

            if (impact > 0) {
              const bounce = 1.15;
              const impulse = impact * bounce;
              a.vx -= impulse * nx;
              a.vy -= impulse * ny;
              b.vx += impulse * nx;
              b.vy += impulse * ny;
            }
          }
        }
      }
    };

    const applyPointerForce = (bodies) => {
      const pointer = pointerRef.current;
      if (!pointer.active) return;

      bodies.forEach((body) => {
        const dx = body.x - pointer.x;
        const dy = body.y - pointer.y;
        const dist = Math.hypot(dx, dy) || 0.0001;
        const influence = body.r + 48;

        if (dist < influence) {
          const force = ((influence - dist) / influence) * 0.45;
          body.vx += (dx / dist) * force;
          body.vy += (dy / dist) * force;
        }
      });
    };

    const step = () => {
      if (!running) return;

      const { w, h } = sizeRef.current;
      const bodies = bodiesRef.current;
      const maxSpeed = reduced ? 0.55 : 2.75;

      bodies.forEach((body, index) => {
        if (!reduced) {
          // Soft wandering so they keep drifting even without collisions
          body.vx += Math.sin(performance.now() * 0.00075 + index * 1.7) * 0.028;
          body.vy += Math.cos(performance.now() * 0.00065 + index * 1.3) * 0.028;
        }

        body.vx *= 0.998;
        body.vy *= 0.998;

        const speed = Math.hypot(body.vx, body.vy);
        if (speed > maxSpeed) {
          body.vx = (body.vx / speed) * maxSpeed;
          body.vy = (body.vy / speed) * maxSpeed;
        } else if (speed < 0.55 && !reduced) {
          body.vx += (Math.random() - 0.5) * 0.16;
          body.vy += (Math.random() - 0.5) * 0.16;
        }

        body.x += body.vx;
        body.y += body.vy;
        bounceWalls(body, w, h);
      });

      applyPointerForce(bodies);
      resolveCollisions(bodies);
      bodies.forEach((body) => bounceWalls(body, w, h));
      paint();

      frameId = requestAnimationFrame(step);
    };

    const onPointerMove = (event) => {
      const rect = layer.getBoundingClientRect();
      const source = event.touches?.[0] ?? event;
      const x = source.clientX - rect.left;
      const y = source.clientY - rect.top;
      const inside = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;
      pointerRef.current.x = x;
      pointerRef.current.y = y;
      pointerRef.current.active = inside;
    };

    const onPointerLeave = () => {
      pointerRef.current.active = false;
    };

    measure();
    frameId = requestAnimationFrame(step);
    window.addEventListener("resize", measure);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: true });
    window.addEventListener("blur", onPointerLeave);

    return () => {
      running = false;
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", measure);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("blur", onPointerLeave);
    };
  }, []);

  return (
    <div ref={layerRef} className="hero-bubbles" aria-hidden="true">
      {BUBBLES.map((bubble, index) => (
        <div
          key={bubble.id}
          ref={(node) => {
            nodesRef.current[index] = node;
          }}
          className={`hero-bubble ${TONE_CLASS[bubble.tone]}`}
        >
          <span className="hero-bubble__label">
            {bubble.label.split("\n").map((line) => (
              <span key={line}>{line}</span>
            ))}
          </span>
        </div>
      ))}
    </div>
  );
}
