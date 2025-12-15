import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import ColorBends from './ColorBends';

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8 }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 1 },
          '-=0.4'
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          buttonsRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.4'
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ColorBends Background */}
      <div className="absolute inset-0 z-0">
        <ColorBends
          colors={["#4285F4", "#EA4335", "#FBBC05", "#34A853"]}
          rotation={30}
          speed={0.15}
          scale={1.3}
          frequency={1.2}
          warpStrength={1.1}
          mouseInfluence={0.6}
          parallax={0.4}
          noise={0.05}
          transparent={false}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/30 z-[1]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-nav mb-8 opacity-0"
        >
          <span className="w-2 h-2 rounded-full bg-gdg-green animate-pulse" />
          <span className="text-sm text-muted-foreground">Welcome to GDG VIT</span>
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight tracking-tight mb-6 opacity-0"
        >
          Build. Learn.
          <br />
          <span className="gdg-gradient-text">Grow Together.</span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0"
        >
          Google Developer Groups on Campus VIT is a community of developers passionate about building, learning, and growing together with Google technologies.
        </p>

        {/* Buttons */}
        <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0">
          <a
            href="#about"
            className="px-8 py-4 rounded-full bg-foreground text-background font-semibold text-sm sm:text-base hover:opacity-90 transition-all duration-300 hover:scale-105"
          >
            Get Started
          </a>
          <a
            href="#timeline"
            className="px-8 py-4 rounded-full glass-nav text-foreground font-medium text-sm sm:text-base hover:bg-white/10 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 rounded-full bg-muted-foreground" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
