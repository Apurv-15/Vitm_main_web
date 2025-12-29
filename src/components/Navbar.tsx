import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'Team', href: '#team' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-6 left-1/2 z-50 px-4"
    >
      <nav className={`glass-nav px-4 py-3 transition-all duration-500 ${isScrolled ? 'py-2' : 'py-3'}`}>
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gdg-gradient flex items-center justify-center">
              <span className="text-sm font-bold text-foreground">G</span>
            </div>
            <span className="font-semibold text-foreground hidden sm:block text-sm">GDG VIT</span>
          </a>

          {/* Center Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-300 px-4 py-2 rounded-full"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Join Us
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-2"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all py-3 px-4 rounded-xl"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-2 px-4 py-3 rounded-full bg-foreground text-background text-sm font-medium text-center"
                >
                  Join Us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
