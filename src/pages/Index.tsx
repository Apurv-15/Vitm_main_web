import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import GradientDivider from '@/components/GradientDivider';
import AboutSection from '@/components/AboutSection';
import TimelineSection from '@/components/TimelineSection';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Smooth scroll behavior
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash) {
        const element = document.querySelector(target.hash);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <main className={`relative bg-background text-foreground overflow-x-hidden ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <Navbar />
        <HeroSection />
        <GradientDivider />
        <AboutSection />
        <TimelineSection />
        <TeamSection />
        <Footer />
      </main>
    </>
  );
}
