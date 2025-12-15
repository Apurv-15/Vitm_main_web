import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '500+', label: 'Members', color: 'gdg-blue' },
  { value: '50+', label: 'Events', color: 'gdg-red' },
  { value: '20+', label: 'Workshops', color: 'gdg-yellow' },
  { value: '10+', label: 'Hackathons', color: 'gdg-green' },
];

const features = [
  {
    icon: '🚀',
    title: 'Learn & Grow',
    description: 'Hands-on workshops and technical sessions on Google technologies like Android, Flutter, Firebase, and Cloud.',
  },
  {
    icon: '🤝',
    title: 'Network',
    description: 'Connect with fellow developers, industry experts, and Google Developer Experts.',
  },
  {
    icon: '💡',
    title: 'Build',
    description: 'Work on real-world projects, participate in hackathons, and build your portfolio.',
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
          },
        }
      );

      // Stats animation
      gsap.fromTo(
        statsRef.current?.children || [],
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
          },
        }
      );

      // Features animation
      gsap.fromTo(
        featuresRef.current?.children || [],
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-glow-radial opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full glass-nav text-xs text-muted-foreground uppercase tracking-widest mb-6">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Empowering Developers
            <br />
            <span className="gdg-gradient-text">at VIT</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We are a student community backed by Google Developers, focused on learning, teaching, and building with cutting-edge technologies.
          </p>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 text-center group cursor-default"
            >
              <div className={`text-3xl sm:text-4xl md:text-5xl font-bold text-${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div ref={featuresRef} className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              whileHover={{ y: -8 }}
              className="glass-card p-8 group cursor-default"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
