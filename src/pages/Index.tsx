import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import GradientDivider from '@/components/GradientDivider';
import AboutSection from '@/components/AboutSection';
import TimelineSection from '@/components/TimelineSection';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const mainRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoading) return;

    // Initialize smooth scroll effect
    const wrapper = wrapperRef.current;
    const content = mainRef.current;
    
    if (!wrapper || !content) return;

    // Set up GSAP ScrollTrigger for smooth scrolling feel
    ScrollTrigger.defaults({
      toggleActions: 'play none none reverse',
      markers: false,
    });

    // Smooth anchor scrolling with GSAP
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash) {
        const element = document.querySelector(target.hash);
        if (element) {
          e.preventDefault();
          gsap.to(window, {
            duration: 1.2,
            scrollTo: { y: element, offsetY: 0 },
            ease: 'power3.inOut',
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    // Refresh on load
    ScrollTrigger.refresh();

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      ScrollTrigger.killAll();
    };
  }, [isLoading]);

  return (
    <div ref={wrapperRef} className="smooth-wrapper">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <main
        ref={mainRef}
        className={`smooth-content relative bg-background text-foreground overflow-x-hidden ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
      >
        <Navbar />
        <HeroSection />
        <GradientDivider variant="dark-to-white" />
        <AboutSection />
        <GradientDivider variant="white-to-gray" />
        <TimelineSection />
        <GradientDivider variant="gray-to-white" />
        <TeamSection />
        <GradientDivider variant="white-to-gray" />
        <Footer />
      </main>
    </div>
  );
}
