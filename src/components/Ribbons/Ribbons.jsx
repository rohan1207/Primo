import { useEffect, useRef } from "react";
import "./Ribbons.css";

function hexToRgba(hex, alpha) {
  const value = hex.replace("#", "");
  const number = Number.parseInt(
    value.length === 3
      ? value
          .split("")
          .map((character) => character + character)
          .join("")
      : value,
    16
  );

  return `rgba(${(number >> 16) & 255}, ${(number >> 8) & 255}, ${number & 255}, ${alpha})`;
}

export default function Ribbons({
  colors = ["#086dbe"],
  baseSpring = 0.03,
  baseFriction = 0.9,
  baseThickness = 30,
  offsetFactor = 0.05,
  maxAge = 500,
  pointCount = 50,
  speedMultiplier = 0.6,
  enableFade = false,
  enableShaderEffect = false,
  effectAmplitude = 2,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas?.parentElement;
    if (!canvas || !container) return undefined;

    const context = canvas.getContext("2d");
    const pointer = { x: 0, y: 0, active: false };
    let width = 0;
    let height = 0;
    let frameId = 0;
    let lastTime = performance.now();

    const lines = colors.map((color, lineIndex) => ({
      color,
      velocity: { x: 0, y: 0 },
      points: Array.from({ length: pointCount }, () => ({ x: 0, y: 0 })),
      offset: (lineIndex - (colors.length - 1) / 2) * offsetFactor,
    }));

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const bounds = container.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      pointer.x = width / 2;
      pointer.y = height / 2;
      lines.forEach((line) => {
        line.points.forEach((point) => {
          point.x = pointer.x;
          point.y = pointer.y;
        });
      });
    };

    const updatePointer = (event) => {
      const bounds = container.getBoundingClientRect();
      const source = event.touches?.[0] ?? event;
      pointer.x = source.clientX - bounds.left;
      pointer.y = source.clientY - bounds.top;
      pointer.active = true;
    };

    const drawSmoothLine = (points) => {
      context.beginPath();
      context.moveTo(points[0].x, points[0].y);

      for (let index = 1; index < points.length - 1; index += 1) {
        const current = points[index];
        const next = points[index + 1];
        context.quadraticCurveTo(
          current.x,
          current.y,
          (current.x + next.x) / 2,
          (current.y + next.y) / 2
        );
      }

      const last = points[points.length - 1];
      context.lineTo(last.x, last.y);
    };

    const animate = (now) => {
      const delta = Math.min(32, now - lastTime);
      lastTime = now;
      context.clearRect(0, 0, width, height);

      // Keep a soft autonomous drift so the hero remains alive before interaction.
      const driftX = width * 0.5 + Math.sin(now * 0.00045) * width * 0.28;
      const driftY = height * 0.48 + Math.cos(now * 0.00062) * height * 0.2;
      const targetX = pointer.active ? pointer.x : driftX;
      const targetY = pointer.active ? pointer.y : driftY;

      lines.forEach((line, lineIndex) => {
        const head = line.points[0];
        const offsetPixels = line.offset * Math.min(width, height);
        const targetOffsetY = targetY + offsetPixels;

        line.velocity.x += (targetX - head.x) * baseSpring;
        line.velocity.y += (targetOffsetY - head.y) * baseSpring;
        line.velocity.x *= baseFriction;
        line.velocity.y *= baseFriction;
        head.x += line.velocity.x * speedMultiplier;
        head.y += line.velocity.y * speedMultiplier;

        const segmentDelay = Math.max(1, maxAge / Math.max(1, pointCount - 1));
        const follow = Math.min(0.92, (delta * speedMultiplier) / segmentDelay);
        for (let index = 1; index < line.points.length; index += 1) {
          const point = line.points[index];
          const previous = line.points[index - 1];
          point.x += (previous.x - point.x) * follow;
          point.y += (previous.y - point.y) * follow;

          if (enableShaderEffect) {
            point.y +=
              Math.sin(now * 0.003 + index * 0.35 + lineIndex) *
              effectAmplitude *
              0.05;
          }
        }

        drawSmoothLine(line.points);
        const gradient = context.createLinearGradient(
          line.points[0].x,
          line.points[0].y,
          line.points[line.points.length - 1].x,
          line.points[line.points.length - 1].y
        );
        gradient.addColorStop(0, hexToRgba(line.color, 0.86));
        gradient.addColorStop(1, hexToRgba(line.color, enableFade ? 0 : 0.52));

        context.strokeStyle = gradient;
        context.lineWidth = baseThickness;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.shadowColor = hexToRgba(line.color, 0.22);
        context.shadowBlur = baseThickness * 0.55;
        context.stroke();
        context.shadowBlur = 0;
      });

      frameId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", updatePointer, { passive: true });
    window.addEventListener("touchmove", updatePointer, { passive: true });
    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("touchmove", updatePointer);
    };
  }, [
    colors,
    baseSpring,
    baseFriction,
    baseThickness,
    offsetFactor,
    maxAge,
    pointCount,
    speedMultiplier,
    enableFade,
    enableShaderEffect,
    effectAmplitude,
  ]);

  return <canvas ref={canvasRef} className="ribbons-canvas" aria-hidden="true" />;
}
