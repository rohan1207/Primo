import { useRef, useEffect, useState } from "react";
import { createNoise2D } from "simplex-noise";

const FOLD_COUNT = 5;
const WIND_ANGLE = -0.08;

/**
 * Smooth silk-like curves: long wavelength S-waves + soft secondary ripple.
 * Amplitude scales with viewport so folds stay proportional on mobile/desktop.
 */
function buildCurve(width, height, time, phase, noise, spread) {
  const amp = Math.min(height * 0.14, width * 0.09);
  // Fast left→right travel
  const travel = time * 1.15;
  const span = width * 1.65;
  const startX = -width * 0.32;
  // Dense sampling → smoother bezier path
  const steps = Math.max(48, Math.ceil(span / 5));
  const band = height / FOLD_COUNT;
  const baseY = spread * height + band * 0.15;
  const points = [];

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = startX + t * span;

    // Long, clean primary wave (proper silk drape)
    const primary = Math.sin(x * 0.00155 - travel + phase) * amp;
    // Soft secondary undulation (same direction, slower)
    const secondary = Math.sin(x * 0.0028 - travel * 0.55 + phase * 0.7) * (amp * 0.22);
    // Very gentle tertiary for organic feel
    const tertiary = Math.sin(x * 0.0045 + travel * 0.25 + phase) * (amp * 0.08);
    // Low-frequency noise only, no jagged edges
    const organic = noise(x * 0.0012 + phase, time * 0.08 + phase * 0.3) * (amp * 0.1);

    points.push({ x, y: baseY + primary + secondary + tertiary + organic });
  }

  return points;
}

/** Catmull-Rom → cubic Bezier for continuous, proper curves (no kinks). */
function traceCurve(ctx, points, offsetY = 0) {
  if (points.length < 2) return;

  const yOf = (p) => p.y + offsetY;
  ctx.moveTo(points[0].x, yOf(points[0]));

  if (points.length === 2) {
    ctx.lineTo(points[1].x, yOf(points[1]));
    return;
  }

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[Math.max(0, i - 1)];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[Math.min(points.length - 1, i + 2)];

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = yOf(p1) + (yOf(p2) - yOf(p0)) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = yOf(p2) - (yOf(p3) - yOf(p1)) / 6;

    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, yOf(p2));
  }
}

function reverseTraceCurve(ctx, points) {
  if (points.length < 2) return;

  const last = points[points.length - 1];
  ctx.lineTo(last.x, last.y);

  for (let i = points.length - 1; i > 0; i--) {
    const p0 = points[Math.min(points.length - 1, i + 1)];
    const p1 = points[i];
    const p2 = points[i - 1];
    const p3 = points[Math.max(0, i - 2)];

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, p2.y);
  }
}

function drawSilkDrape(ctx, width, height, time, noise) {
  ctx.clearRect(0, 0, width, height);

  const base = ctx.createLinearGradient(0, 0, width, height);
  base.addColorStop(0, "#f8f6f1");
  base.addColorStop(0.5, "#f0f2f6");
  base.addColorStop(1, "#ebe7df");
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  ctx.translate(width * 0.5, height * 0.5);
  ctx.rotate(WIND_ANGLE);
  ctx.translate(-width * 0.5, -height * 0.5);

  // Shared phase spacing so folds feel like one continuous fabric
  const curves = [];
  for (let i = 0; i <= FOLD_COUNT; i++) {
    curves.push(buildCurve(width, height, time, i * 0.95, noise, i / FOLD_COUNT));
  }

  for (let f = 0; f < FOLD_COUNT; f++) {
    const top = curves[f];
    const bottom = curves[f + 1];
    const lit = f % 2 === 0;

    ctx.beginPath();
    traceCurve(ctx, top);
    reverseTraceCurve(ctx, bottom);
    ctx.closePath();

    const midIdx = Math.floor(top.length / 2);
    const midY = (top[midIdx].y + bottom[midIdx].y) / 2;
    const foldH = Math.abs(bottom[midIdx].y - top[midIdx].y) || 80;
    const grad = ctx.createLinearGradient(0, midY - foldH * 0.6, 0, midY + foldH * 0.6);

    if (lit) {
      grad.addColorStop(0, "rgba(255, 253, 248, 0.94)");
      grad.addColorStop(0.4, "rgba(240, 244, 250, 0.78)");
      grad.addColorStop(1, "rgba(195, 212, 235, 0.58)");
    } else {
      grad.addColorStop(0, "rgba(225, 232, 242, 0.72)");
      grad.addColorStop(0.5, "rgba(160, 182, 215, 0.68)");
      grad.addColorStop(1, "rgba(115, 145, 185, 0.52)");
    }

    ctx.fillStyle = grad;
    ctx.fill();

    // Soft valley shadow, follows the smooth curve
    ctx.beginPath();
    traceCurve(ctx, bottom);
    ctx.strokeStyle = lit ? "rgba(80, 110, 155, 0.16)" : "rgba(55, 85, 135, 0.22)";
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.filter = "blur(3px)";
    ctx.stroke();
    ctx.filter = "none";

    if (lit) {
      ctx.beginPath();
      traceCurve(ctx, top, -1.5);
      const shine = ctx.createLinearGradient(0, midY - 40, width, midY);
      shine.addColorStop(0, "rgba(255,255,255,0)");
      shine.addColorStop(0.35, "rgba(255,255,255,0.4)");
      shine.addColorStop(0.65, "rgba(255,255,255,0.14)");
      shine.addColorStop(1, "rgba(255,255,255,0)");
      ctx.strokeStyle = shine;
      ctx.lineWidth = 2.5;
      ctx.globalAlpha = 0.55;
      ctx.stroke();
      ctx.globalAlpha = 1;
    }
  }

  ctx.restore();

  ctx.globalAlpha = 0.015;
  ctx.strokeStyle = "#1e3a5f";
  for (let y = 0; y < height; y += 7) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  const vignette = ctx.createRadialGradient(
    width * 0.5,
    height * 0.45,
    width * 0.15,
    width * 0.5,
    height * 0.45,
    width * 0.75
  );
  vignette.addColorStop(0, "rgba(248, 246, 241, 0)");
  vignette.addColorStop(1, "rgba(248, 246, 241, 0.2)");
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, width, height);

  const light = ctx.createRadialGradient(
    width * 0.5,
    height * 0.2,
    0,
    width * 0.5,
    height * 0.2,
    width * 0.65
  );
  light.addColorStop(0, "rgba(255, 255, 255, 0.2)");
  light.addColorStop(1, "rgba(255, 255, 255, 0)");
  ctx.fillStyle = light;
  ctx.fillRect(0, 0, width, height);
}

function StaticFabricFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#f4f1eb]">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(108deg, #f7f4ef 0%, #e8ecf4 45%, #ebe6dc 100%)",
        }}
      />
    </div>
  );
}

export default function FabricBackground() {
  const canvasRef = useRef(null);
  const frameRef = useRef(0);
  const timeRef = useRef(0);
  const noiseRef = useRef(createNoise2D());
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(!motionQuery.matches);
    update();
    motionQuery.addEventListener("change", update);
    return () => motionQuery.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let running = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      if (!running) return;
      // Fast continuous flutter
      timeRef.current += 0.038;
      const rect = canvas.parentElement.getBoundingClientRect();
      drawSilkDrape(ctx, rect.width, rect.height, timeRef.current, noiseRef.current);
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      running = false;
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [enabled]);

  if (!enabled) return <StaticFabricFallback />;

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ filter: "blur(0.35px)" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-mota-cream/20" />
    </div>
  );
}
