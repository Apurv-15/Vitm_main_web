import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GradientDivider() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shape1Ref = useRef<HTMLDivElement>(null);
  const shape2Ref = useRef<HTMLDivElement>(null);
  const shape3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const shapes = [
        { ref: shape1Ref.current, y: -80, x: 30, scrub: 1 },
        { ref: shape2Ref.current, y: -120, x: -20, scrub: 1.5 },
        { ref: shape3Ref.current, y: -60, x: 40, scrub: 2 },
      ];

      shapes.forEach((shape) => {
        if (shape.ref) {
          gsap.to(shape.ref, {
            y: shape.y,
            x: shape.x,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: shape.scrub,
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative h-[40vh] overflow-hidden z-5"
      style={{
        background: 'linear-gradient(180deg, #0a0f1a 0%, #0f1a2e 30%, #1a2744 50%, #0f1a2e 70%, #ffffff 100%)',
      }}
    >
      {/* Parallax floating shapes */}
      <div
        ref={shape1Ref}
        className="absolute w-32 h-32 rounded-full opacity-30 blur-xl top-1/4 left-1/4"
        style={{ background: 'radial-gradient(circle, #4285F4 0%, transparent 70%)' }}
      />
      <div
        ref={shape2Ref}
        className="absolute w-48 h-48 rounded-full opacity-20 blur-2xl top-1/3 right-1/4"
        style={{ background: 'radial-gradient(circle, #EA4335 0%, transparent 70%)' }}
      />
      <div
        ref={shape3Ref}
        className="absolute w-24 h-24 rounded-full opacity-25 blur-xl bottom-1/4 left-1/2"
        style={{ background: 'radial-gradient(circle, #34A853 0%, transparent 70%)' }}
      />

      {/* Wave SVG at bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
