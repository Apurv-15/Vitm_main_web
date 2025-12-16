import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '500+', label: 'Members', color: 'bg-gdg-blue' },
  { value: '50+', label: 'Events', color: 'bg-gdg-red' },
  { value: '20+', label: 'Workshops', color: 'bg-gdg-yellow' },
  { value: '10+', label: 'Hackathons', color: 'bg-gdg-green' },
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
  const shape1Ref = useRef<HTMLDivElement>(null);
  const shape2Ref = useRef<HTMLDivElement>(null);
  const shape3Ref = useRef<HTMLDivElement>(null);

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

      // Parallax shapes
      const shapes = [shape1Ref.current, shape2Ref.current, shape3Ref.current];
      shapes.forEach((shape, i) => {
        if (shape) {
          gsap.to(shape, {
            y: (i + 1) * -100,
            rotation: (i + 1) * 15,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1 + i * 0.5,
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden z-10 bg-white"
    >
      {/* Parallax Shapes */}
      <div
        ref={shape1Ref}
        className="parallax-shape w-64 h-64 rounded-full bg-gdg-blue/10 blur-3xl -top-20 -left-20"
      />
      <div
        ref={shape2Ref}
        className="parallax-shape w-48 h-48 rounded-full bg-gdg-red/10 blur-2xl top-1/3 -right-10"
      />
      <div
        ref={shape3Ref}
        className="parallax-shape w-32 h-32 rounded-full bg-gdg-green/10 blur-xl bottom-20 left-1/4"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-xs text-gray-600 uppercase tracking-widest mb-6">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Empowering Developers
            <br />
            <span className="text-gdg-blue">at VIT</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We are a student community backed by Google Developers, focused on learning, teaching, and building with cutting-edge technologies.
          </p>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="card-light p-6 text-center group cursor-default"
            >
              <div className={`w-3 h-3 rounded-full ${stat.color} mx-auto mb-3`} />
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div ref={featuresRef} className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              whileHover={{ y: -8 }}
              className="card-light p-8 group cursor-default"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gdg-blue transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
