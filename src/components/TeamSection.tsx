import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: 'Arjun Sharma',
    role: 'Lead Organizer',
    color: 'bg-gdg-blue',
    textColor: 'text-gdg-blue',
    initial: 'AS',
  },
  {
    name: 'Priya Patel',
    role: 'Tech Lead',
    color: 'bg-gdg-red',
    textColor: 'text-gdg-red',
    initial: 'PP',
  },
  {
    name: 'Rahul Kumar',
    role: 'Design Lead',
    color: 'bg-gdg-yellow',
    textColor: 'text-gdg-yellow',
    initial: 'RK',
  },
  {
    name: 'Sneha Gupta',
    role: 'Community Manager',
    color: 'bg-gdg-green',
    textColor: 'text-gdg-green',
    initial: 'SG',
  },
  {
    name: 'Vikram Singh',
    role: 'Android Lead',
    color: 'bg-gdg-blue',
    textColor: 'text-gdg-blue',
    initial: 'VS',
  },
  {
    name: 'Ananya Reddy',
    role: 'Web Lead',
    color: 'bg-gdg-red',
    textColor: 'text-gdg-red',
    initial: 'AR',
  },
  {
    name: 'Karthik Menon',
    role: 'Cloud Lead',
    color: 'bg-gdg-yellow',
    textColor: 'text-gdg-yellow',
    initial: 'KM',
  },
  {
    name: 'Divya Nair',
    role: 'ML Lead',
    color: 'bg-gdg-green',
    textColor: 'text-gdg-green',
    initial: 'DN',
  },
];

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const shape1Ref = useRef<HTMLDivElement>(null);
  const shape2Ref = useRef<HTMLDivElement>(null);
  const shape3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
          },
        }
      );

      gsap.fromTo(
        cardsRef.current?.children || [],
        { opacity: 0, y: 80, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
          },
        }
      );

      // Parallax shapes
      const shapes = [
        { ref: shape1Ref.current, y: -120, rotation: 25, scrub: 1 },
        { ref: shape2Ref.current, y: -80, rotation: -20, scrub: 1.5 },
        { ref: shape3Ref.current, y: -60, rotation: 15, scrub: 2 },
      ];

      shapes.forEach((shape) => {
        if (shape.ref) {
          gsap.to(shape.ref, {
            y: shape.y,
            rotation: shape.rotation,
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
    <section
      id="team"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden z-30 bg-white"
    >
      {/* Parallax Shapes */}
      <div
        ref={shape1Ref}
        className="parallax-shape w-56 h-56 rounded-full bg-gdg-green/10 blur-3xl top-20 -right-10"
      />
      <div
        ref={shape2Ref}
        className="parallax-shape w-40 h-40 rounded-full bg-gdg-red/10 blur-2xl top-1/2 -left-10"
      />
      <div
        ref={shape3Ref}
        className="parallax-shape w-32 h-32 rounded-full bg-gdg-blue/10 blur-xl bottom-40 right-1/4"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-xs text-gray-600 uppercase tracking-widest mb-6">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Meet the <span className="text-gdg-blue">Leaders</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            The passionate individuals driving the GDG VIT community forward.
          </p>
        </div>

        {/* Team Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              whileHover={{ y: -8, scale: 1.02 }}
              className="team-card text-center group"
            >
              {/* Avatar */}
              <div
                className={`w-20 h-20 mx-auto mb-4 rounded-2xl ${member.color}/20 border border-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <span className={`text-2xl font-bold ${member.textColor}`}>
                  {member.initial}
                </span>
              </div>

              {/* Info */}
              <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-gdg-blue transition-colors">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500">{member.role}</p>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gdg-blue hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gdg-blue hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
