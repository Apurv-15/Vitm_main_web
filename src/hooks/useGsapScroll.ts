import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

// Register plugins
gsap.registerPlugin(ScrollTrigger);

export function useGsapSmoothScroll() {
  useEffect(() => {
    // Create smooth scrolling effect using native CSS and GSAP
    // Note: ScrollSmoother requires GSAP Club membership, so we use native approach
    
    // Set up smooth scrolling with CSS
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);
}

export function useRevealAnimation(
  ref: React.RefObject<HTMLElement>,
  options?: {
    y?: number;
    duration?: number;
    delay?: number;
    start?: string;
  }
) {
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { 
          opacity: 0, 
          y: options?.y ?? 100,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: options?.duration ?? 1.2,
          delay: options?.delay ?? 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: options?.start ?? 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [ref, options]);
}

export function useStaggerReveal(
  containerRef: React.RefObject<HTMLElement>,
  childSelector: string,
  options?: {
    y?: number;
    duration?: number;
    stagger?: number;
    start?: string;
  }
) {
  useEffect(() => {
    if (!containerRef.current) return;

    const children = containerRef.current.querySelectorAll(childSelector);
    if (children.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        children,
        { 
          opacity: 0, 
          y: options?.y ?? 80,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: options?.duration ?? 0.8,
          stagger: options?.stagger ?? 0.15,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: options?.start ?? 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, childSelector, options]);
}

export function useParallaxScroll(
  ref: React.RefObject<HTMLElement>,
  options?: {
    y?: number;
    speed?: number;
  }
) {
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        y: options?.y ?? -100,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: options?.speed ?? 1,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [ref, options]);
}
