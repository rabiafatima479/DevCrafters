import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import logoImg from '../assets/images/logo.png';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Team', href: '#team' }, 
  { name: 'Packages', href: '#packages' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock fix
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 flex items-center',
      scrolled ? 'h-16 bg-white/90 dark:bg-black/90 backdrop-blur-md' : 'h-20 bg-transparent'
    )}>
      <div className="max-w-[1600px] mx-auto w-full flex justify-between items-center">
        {/* Logo - Always on top */}
        <div className="relative z-[120]">
          <img src={logoImg} alt="Logo" className={scrolled ? "h-10 w-10" : "h-12 w-12"} />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-[10px] font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-400 hover:text-brand">
              {link.name}
            </a>
          ))}
        </div>

        {/* Hamburger - Always on top */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden relative z-[120] p-2 text-zinc-900 dark:text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- MOBILE DRAWER (The Fix) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: "circOut" }}
            // 🚨 CRITICAL: bg-white and dark:bg-[#080808] must be 100% solid
            className="fixed inset-0 w-full h-screen bg-white dark:bg-[#080808] z-[110] flex flex-col shadow-2xl"
          >
            {/* Header space to avoid logo overlap */}
            <div className="h-24 shrink-0 border-b border-zinc-100 dark:border-white/5" />

            {/* Links Section */}
            <div className="flex-1 overflow-y-auto px-10 py-12 flex flex-col space-y-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.2 }}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white active:text-brand"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.a
                href="#contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-brand uppercase tracking-widest pt-6 border-t border-zinc-100 dark:border-white/5"
              >
                Let's Talk —
              </motion.a>
            </div>

            {/* Footer space */}
            <div className="p-10 bg-zinc-50 dark:bg-zinc-900/30">
                <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-bold">© 2026 Dev Crafters</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}