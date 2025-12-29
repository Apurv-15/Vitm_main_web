import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GradientDividerProps {
  variant?: 'white-to-dark' | 'dark-to-white' | 'white-to-gray' | 'gray-to-white';
}

export default function GradientDivider({ variant = 'white-to-dark' }: GradientDividerProps) {
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

  const gradients = {
    'white-to-dark': 'linear-gradient(180deg, #ffffff 0%, #f0f4f8 20%, #e2e8f0 40%, #1e293b 70%, #0f172a 100%)',
    'dark-to-white': 'linear-gradient(180deg, #0f172a 0%, #1e293b 30%, #e2e8f0 60%, #f0f4f8 80%, #ffffff 100%)',
    'white-to-gray': 'linear-gradient(180deg, #ffffff 0%, #f8fafc 30%, #f1f5f9 60%, #e2e8f0 100%)',
    'gray-to-white': 'linear-gradient(180deg, #e2e8f0 0%, #f1f5f9 40%, #f8fafc 70%, #ffffff 100%)',
  };

  return (
    <div
      ref={sectionRef}
      className="relative h-[40vh] overflow-hidden"
      style={{
        background: gradients[variant],
      }}
    >
      {/* Parallax floating shapes - Enhanced Bloom */}
      <div
        ref={shape1Ref}
        className="absolute w-64 h-64 rounded-full opacity-30 blur-3xl top-1/4 left-1/4 mix-blend-screen"
        style={{ background: 'radial-gradient(circle, #4285F4 0%, transparent 70%)' }}
      />
      <div
        ref={shape2Ref}
        className="absolute w-80 h-80 rounded-full opacity-25 blur-3xl top-1/3 right-1/4 mix-blend-screen"
        style={{ background: 'radial-gradient(circle, #EA4335 0%, transparent 70%)' }}
      />
      <div
        ref={shape3Ref}
        className="absolute w-56 h-56 rounded-full opacity-30 blur-3xl bottom-1/4 left-1/2 mix-blend-screen"
        style={{ background: 'radial-gradient(circle, #34A853 0%, transparent 70%)' }}
      />

      {/* Floating dots */}
      <div className="absolute top-1/3 left-1/3 w-2 h-2 rounded-full bg-gdg-blue/50" />
      <div className="absolute top-1/2 right-1/3 w-3 h-3 rounded-full bg-gdg-yellow/40" />
      <div className="absolute bottom-1/3 left-1/2 w-2 h-2 rounded-full bg-gdg-green/50" />
    </div>
  );
}
