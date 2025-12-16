import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { name: 'Twitter', href: '#', icon: 'X' },
  { name: 'Instagram', href: '#', icon: 'IG' },
  { name: 'LinkedIn', href: '#', icon: 'in' },
  { name: 'GitHub', href: '#', icon: 'GH' },
  { name: 'Discord', href: '#', icon: 'DC' },
];

const footerLinks = [
  {
    title: 'Community',
    links: ['Events', 'Blog', 'Newsletter', 'Podcast'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'Tutorials', 'Workshops', 'Projects'],
  },
  {
    title: 'About',
    links: ['Team', 'Partners', 'Contact', 'Join Us'],
  },
];

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  const shape1Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (shape1Ref.current) {
        gsap.to(shape1Ref.current, {
          y: -60,
          rotation: 10,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      id="contact"
      ref={sectionRef}
      className="relative py-20 px-6 z-40 overflow-hidden"
      style={{ background: 'hsl(248 15% 96%)' }}
    >
      {/* Parallax Shape */}
      <div
        ref={shape1Ref}
        className="parallax-shape w-64 h-64 rounded-full bg-gdg-blue/10 blur-3xl -bottom-20 right-20"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ready to <span className="text-gdg-blue">Join Us</span>?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            Become part of our growing community of developers and tech enthusiasts.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 text-white font-semibold hover:bg-gdg-blue transition-all duration-300 hover:scale-105"
          >
            Get Started Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gdg-blue flex items-center justify-center">
                <span className="text-lg font-bold text-white">G</span>
              </div>
              <span className="font-semibold text-gray-900 text-lg">GDG VIT</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Building the future of technology, one developer at a time.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600 hover:bg-gdg-blue hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-gray-900 mb-4">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gdg-blue transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2024 GDG VIT. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
