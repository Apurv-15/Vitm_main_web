import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Timeline } from "@/components/ui/timeline";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    title: "2024",
    content: (
      <div>
        <p className="mb-6 text-sm md:text-base font-normal text-slate-300">
          A groundbreaking year for GDG VIT with record-breaking events and community growth.
        </p>
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-slate-200 mb-2">
            <span className="w-2 h-2 rounded-full bg-gdg-blue" />
            DevFest 2024 - 500+ attendees
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-200 mb-2">
            <span className="w-2 h-2 rounded-full bg-gdg-red" />
            Android Study Jam - 200+ developers
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-200 mb-2">
            <span className="w-2 h-2 rounded-full bg-gdg-yellow" />
            Cloud Study Jam - 150+ participants
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-200">
            <span className="w-2 h-2 rounded-full bg-gdg-green" />
            Flutter Forward - 180+ attendees
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-24 md:h-44 lg:h-56 rounded-xl bg-gradient-to-br from-gdg-blue/20 to-gdg-blue/5 border border-gdg-blue/20 flex items-center justify-center">
            <span className="text-3xl">🎉</span>
          </div>
          <div className="h-24 md:h-44 lg:h-56 rounded-xl bg-gradient-to-br from-gdg-red/20 to-gdg-red/5 border border-gdg-red/20 flex items-center justify-center">
            <span className="text-3xl">🚀</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <p className="mb-6 text-sm md:text-base font-normal text-slate-300">
          Expanded our reach with hybrid events and international speaker sessions.
        </p>
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-slate-200 mb-2">
            <span className="w-2 h-2 rounded-full bg-gdg-green" />
            Google I/O Extended - Virtual & In-person
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-200 mb-2">
            <span className="w-2 h-2 rounded-full bg-gdg-yellow" />
            Compose Camp - 300+ participants
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-200">
            <span className="w-2 h-2 rounded-full bg-gdg-blue" />
            Web Development Bootcamp - 6 weeks
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-24 md:h-44 lg:h-56 rounded-xl bg-gradient-to-br from-gdg-yellow/20 to-gdg-yellow/5 border border-gdg-yellow/20 flex items-center justify-center">
            <span className="text-3xl">💻</span>
          </div>
          <div className="h-24 md:h-44 lg:h-56 rounded-xl bg-gradient-to-br from-gdg-green/20 to-gdg-green/5 border border-gdg-green/20 flex items-center justify-center">
            <span className="text-3xl">🌐</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <p className="mb-6 text-sm md:text-base font-normal text-slate-300">
          Restarted in-person events post-pandemic with renewed energy and enthusiasm.
        </p>
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-slate-200 mb-2">
            <span className="w-2 h-2 rounded-full bg-gdg-red" />
            DevFest 2022 - First in-person event
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-200 mb-2">
            <span className="w-2 h-2 rounded-full bg-gdg-blue" />
            ML Study Jam - AI/ML workshops
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-200">
            <span className="w-2 h-2 rounded-full bg-gdg-green" />
            Hackathon 2022 - 50+ projects
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-24 md:h-44 lg:h-56 rounded-xl bg-gradient-to-br from-gdg-red/20 to-gdg-red/5 border border-gdg-red/20 flex items-center justify-center">
            <span className="text-3xl">🎓</span>
          </div>
          <div className="h-24 md:h-44 lg:h-56 rounded-xl bg-gradient-to-br from-gdg-blue/20 to-gdg-blue/5 border border-gdg-blue/20 flex items-center justify-center">
            <span className="text-3xl">🤖</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const shape1Ref = useRef<HTMLDivElement>(null);
  const shape2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced parallax shapes with scale
      if (shape1Ref.current) {
        gsap.to(shape1Ref.current, {
          y: -200,
          rotation: 30,
          scale: 1.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
      }
      if (shape2Ref.current) {
        gsap.to(shape2Ref.current, {
          y: -120,
          rotation: -20,
          scale: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="relative w-full overflow-clip z-20 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a]"
    >
      {/* Parallax Shapes */}
      <div
        ref={shape1Ref}
        className="parallax-shape w-72 h-72 rounded-full bg-gdg-yellow/10 blur-3xl -top-10 right-10"
      />
      <div
        ref={shape2Ref}
        className="parallax-shape w-40 h-40 rounded-full bg-gdg-blue/10 blur-2xl bottom-40 -left-10"
      />

      <div className="relative z-10">
        <Timeline data={timelineData} />
      </div>
    </section>
  );
}
