import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const STORY_DESKTOP = [
  {
    id: "beginning",
    title: "The Beginning",
    year: "25+ Yrs",
    text: "With over 25 years in the field, Mota became the preferred vendor for customised uniforms across schools, colleges, hospitals, pharma, aviation, security, hospitality and corporates.",
    // Plane journey starts near top of path
    containerClass:
      "absolute right-[5%] top-[4%] z-20 flex w-[min(21rem,26%)] flex-col items-end gap-3",
    noteClass: "rotate-6 text-right font-display text-2xl font-semibold text-mota-blue lg:text-3xl",
  },
  {
    id: "facility",
    title: "Baramati Plant",
    year: "Facility",
    text: "A self-contained state-of-art manufacturing facility in Baramati with capacity for 800+ garments per day, Brother & Juki machines, and strict in-line quality checks.",
    containerClass:
      "absolute left-[5%] top-[22%] z-20 flex w-[min(21rem,26%)] flex-col items-start gap-3",
    noteClass: "-rotate-6 text-left font-display text-2xl font-semibold text-mota-blue lg:text-3xl",
  },
  {
    id: "fabrics",
    title: "Fabric Partners",
    year: "Premium",
    text: "Authorised distributors and stockists of Raymond, Mafatlal, Valji's, Siyaram's, Gwalior Mills and more, quality cloth behind every stitch.",
    containerClass:
      "absolute right-[5%] top-[42%] z-20 flex w-[min(21rem,26%)] flex-col items-end gap-3",
    noteClass: "rotate-3 text-right font-display text-2xl font-semibold text-mota-blue lg:text-3xl",
  },
  {
    id: "growth",
    title: "Every Sector",
    year: "Growth",
    text: "From classrooms to cleanrooms, boardrooms to factory floors, one integrated team handles design, production, embroidery and delivery.",
    containerClass:
      "absolute left-[6%] top-[60%] z-20 flex w-[min(21rem,26%)] flex-col items-start gap-3",
    noteClass: "-rotate-3 text-left font-display text-2xl font-semibold text-mota-blue lg:text-3xl",
  },
  {
    id: "today",
    title: "Today",
    year: "Now",
    text: "Our fabric partnerships and manufacturing setup put us in an excellent position to deliver every uniform type, superb quality, on time.",
    // Keep on opposite side from Growth so bottom cards don't overlap
    containerClass:
      "absolute right-[5%] top-[78%] z-20 flex w-[min(21rem,26%)] flex-col items-end gap-3",
    noteClass: "rotate-2 text-right font-display text-2xl font-semibold text-mota-blue lg:text-3xl",
  },
];

const STORY_MOBILE = STORY_DESKTOP.map(({ title, year, text }) => ({
  title,
  year,
  text,
}));

function MilestoneCard({ year, text, className = "" }) {
  return (
    <article
      className={`relative flex flex-col overflow-hidden rounded-2xl border border-mota-line bg-white shadow-float ${className}`}
    >
      <div className="flex items-center justify-center border-b border-mota-line bg-mota-blue px-4 py-3">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white sm:text-sm">
          {year}
        </span>
      </div>
      <div className="flex flex-1 items-center px-4 py-4 sm:px-5 sm:py-5">
        <p className="text-sm leading-relaxed text-mota-mist sm:text-[0.95rem]">{text}</p>
      </div>
    </article>
  );
}

/** Soft pointer inertia without GSAP Club InertiaPlugin */
function bindSoftInertia(elements, strength = 0.35) {
  const cleanups = [];

  elements.forEach((el) => {
    if (!el) return;
    let lastX = 0;
    let lastY = 0;
    let velX = 0;
    let velY = 0;

    const onMove = (e) => {
      velX = e.clientX - lastX;
      velY = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
    };

    const onEnter = (e) => {
      velX = 0;
      velY = 0;
      lastX = e.clientX;
      lastY = e.clientY;
    };

    const onLeave = () => {
      gsap.to(el, {
        x: `+=${velX * strength}`,
        y: `+=${velY * strength}`,
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
        onComplete: () => {
          gsap.to(el, {
            x: 0,
            y: 0,
            duration: 0.7,
            ease: "elastic.out(1, 0.55)",
            overwrite: "auto",
          });
        },
      });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    cleanups.push(() => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    });
  });

  return () => cleanups.forEach((fn) => fn());
}

function TravelerMark({ className = "", mobile = false }) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      <img
        src="/airplane.png"
        alt=""
        draggable={false}
        className={`h-auto object-contain drop-shadow-lg ${
          mobile
            ? "w-[52vw] max-w-[15rem] min-w-[9rem] -rotate-90"
            : "w-[32vw] max-w-[24rem] min-w-[13rem]"
        }`}
      />
    </div>
  );
}

export default function OurStory() {
  const desktopRef = useRef(null);
  const travelerRef = useRef(null);
  const pathRef = useRef(null);
  const cardRefs = useRef([]);
  const labelRefs = useRef([]);
  const mobileRef = useRef(null);
  const mobilePathRef = useRef(null);
  const mobileTravelerRefs = useRef([]);
  const mobileCardRefs = useRef([]);

  useLayoutEffect(() => {
    const inertiaCleanups = [];
    const ctx = gsap.context(() => {
      if (desktopRef.current && travelerRef.current && pathRef.current) {
        gsap.set(travelerRef.current, { xPercent: -50, yPercent: -50 });
        gsap.to(travelerRef.current, {
          motionPath: {
            path: pathRef.current,
            align: pathRef.current,
            alignOrigin: [0.5, 0.5],
            autoRotate: true,
          },
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: desktopRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        const thresholds = [0.06, 0.24, 0.44, 0.62, 0.8];
        const revealed = Array(cardRefs.current.length).fill(false);

        cardRefs.current.forEach((card) => {
          if (card) gsap.set(card, { opacity: 0, scale: 0.85, y: 24 });
        });

        ScrollTrigger.create({
          trigger: desktopRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress;
            thresholds.forEach((threshold, index) => {
              const card = cardRefs.current[index];
              if (!card) return;

              if (progress >= threshold && !revealed[index]) {
                gsap.fromTo(
                  card,
                  { opacity: 0, scale: 0.85, y: 24, rotate: -6 },
                  {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    rotate: 0,
                    duration: 0.5,
                    ease: "back.out(1.7)",
                    overwrite: "auto",
                  }
                );
                revealed[index] = true;
              } else if (progress < threshold && revealed[index]) {
                gsap.to(card, {
                  opacity: 0,
                  scale: 0.85,
                  y: 24,
                  duration: 0.28,
                  ease: "power2.in",
                  overwrite: "auto",
                });
                revealed[index] = false;
              }
            });
          },
        });

        inertiaCleanups.push(bindSoftInertia(cardRefs.current.filter(Boolean), 0.28));
        inertiaCleanups.push(bindSoftInertia(labelRefs.current.filter(Boolean), 0.2));
      }

      if (mobileRef.current && mobilePathRef.current) {
        const travelers = mobileTravelerRefs.current.filter(Boolean);
        if (travelers.length) {
          const segmentDuration = 1;
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: mobileRef.current,
              start: "top center",
              end: "bottom center",
              scrub: 1,
            },
          });

          travelers.forEach((node, index) => {
            gsap.set(node, { xPercent: -50, yPercent: -50, opacity: 0 });
            const start = index * segmentDuration;
            const fade = segmentDuration * 0.2;

            tl.fromTo(
              node,
              {
                motionPath: {
                  path: mobilePathRef.current,
                  align: mobilePathRef.current,
                  alignOrigin: [0.5, 0.5],
                  start: index / travelers.length,
                  end: index / travelers.length,
                },
              },
              {
                motionPath: {
                  path: mobilePathRef.current,
                  align: mobilePathRef.current,
                  alignOrigin: [0.5, 0.5],
                  start: index / travelers.length,
                  end: (index + 1) / travelers.length,
                },
                duration: segmentDuration,
                ease: "none",
              },
              start
            );

            tl.fromTo(
              node,
              { opacity: 0 },
              { opacity: 1, duration: fade, ease: "power1.inOut" },
              start
            );
            tl.to(
              node,
              { opacity: 0, duration: fade, ease: "power1.inOut" },
              start + segmentDuration - fade
            );
          });
        }

        mobileCardRefs.current.forEach((card) => {
          if (!card) return;
          gsap.set(card, { opacity: 0, scale: 0.88, y: 40 });
          ScrollTrigger.create({
            trigger: card,
            start: "top 78%",
            once: true,
            onEnter: () => {
              gsap.to(card, {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.5,
                ease: "back.out(1.6)",
                overwrite: "auto",
              });
            },
          });
        });
      }

      ScrollTrigger.refresh();
    });

    return () => {
      inertiaCleanups.forEach((cleanup) => cleanup());
      ctx.revert();
    };
  }, []);

  return (
    <>
      {/* Desktop scroll story */}
      <section
        id="our-story-desktop"
        ref={desktopRef}
        className="relative hidden overflow-hidden bg-mota-cream lg:block"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(8,109,190,0.1),transparent_50%)]" />

        <div className="relative mx-auto min-h-[280vh] w-full max-w-[1600px]">
          <div className="sticky top-[var(--header-height)] z-10 px-8 pb-6 pt-10 xl:px-12">
            <p className="mota-eyebrow mb-3">Our Story</p>
            <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-mota-blue xl:text-5xl">
              How Mota Uniforms Became a Trusted Name
            </h2>
            <p className="mota-body mt-4 max-w-xl text-base">
              Scroll through our journey, from decades of craftsmanship to a full-scale
              Baramati facility serving every uniform need.
            </p>
          </div>

          <div className="relative h-[220vh] w-full">
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 1200 1600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="none"
            >
              <path
                ref={pathRef}
                d="M200 60 C 480 140, 960 100, 1000 300 C 1060 560, 160 460, 180 720 C 210 980, 1020 860, 980 1120 C 940 1360, 260 1280, 300 1540"
                stroke="#1e3a5f"
                strokeOpacity="0.28"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="14 16"
              />
            </svg>

            <div
              ref={travelerRef}
              className="absolute left-0 top-0 z-[5]"
              style={{ willChange: "transform" }}
            >
              <TravelerMark />
            </div>

            {STORY_DESKTOP.map((milestone, index) => (
              <div
                key={milestone.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={milestone.containerClass}
                style={{ willChange: "transform" }}
              >
                <p
                  ref={(el) => {
                    labelRefs.current[index] = el;
                  }}
                  className={milestone.noteClass}
                >
                  {milestone.title}
                </p>
                <MilestoneCard year={milestone.year} text={milestone.text} className="w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile vertical story */}
      <section
        id="our-story-mobile"
        ref={mobileRef}
        className="relative overflow-hidden bg-mota-cream px-5 py-16 sm:px-8 lg:hidden"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(8,109,190,0.08),transparent_55%)]" />

        <div className="relative z-10 mx-auto max-w-lg text-center">
          <p className="mota-eyebrow mb-3">Our Story</p>
          <h2 className="font-display text-3xl font-semibold leading-tight text-mota-blue sm:text-4xl">
            How Mota Uniforms Began
          </h2>
          <p className="mota-body mx-auto mt-4 max-w-md">
            From decades of trust to a full-scale manufacturing plant, scroll through our story.
          </p>
        </div>

        <div className="relative z-10 mx-auto mt-14 flex max-w-md flex-col items-center gap-16 pb-8">
          <div className="pointer-events-none absolute inset-y-0 left-1/2 z-0 w-px -translate-x-1/2">
            <svg
              width="4"
              height="100%"
              viewBox="0 0 4 1000"
              className="h-full w-full"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                ref={mobilePathRef}
                d="M2 0 L2 1000"
                stroke="#1e3a5f"
                strokeOpacity="0.35"
                strokeWidth="3"
                strokeDasharray="8 12"
              />
            </svg>
          </div>

          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={`traveler-${index}`}
              ref={(el) => {
                mobileTravelerRefs.current[index] = el;
              }}
              className="absolute left-0 top-0 z-[2]"
              style={{ willChange: "transform" }}
            >
              <TravelerMark mobile />
            </div>
          ))}

          {STORY_MOBILE.map((milestone, index) => (
            <div
              key={milestone.title}
              ref={(el) => {
                mobileCardRefs.current[index] = el;
              }}
              className="relative z-10 flex w-full flex-col items-center gap-3"
              style={{ willChange: "transform" }}
            >
              <p className="text-center font-display text-2xl font-semibold text-mota-blue sm:text-3xl">
                {milestone.title}
              </p>
              <MilestoneCard
                year={milestone.year}
                text={milestone.text}
                className="w-full max-w-sm"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
