import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
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

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 flex items-center',
        scrolled 
          ? 'h-20 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-2xl border-b border-zinc-200 dark:border-white/10' 
          : 'h-[100px] md:h-[120px] bg-transparent'
      )}
    >
      <div className="max-w-[1600px] mx-auto w-full grid grid-cols-2 lg:grid-cols-3 items-center">
        
        {/* --- 1. LOGO --- */}
        <div className="flex justify-start">
          <a href="#" className="block transition-transform duration-300 hover:scale-105">
            <img 
              src={logoImg} 
              alt="Dev Crafters Logo" 
              className={cn(
                "object-contain transition-all duration-500",
                scrolled ? "h-10 w-10 md:h-12 md:w-12" : "h-16 w-16 md:h-20 md:w-20"
              )}
            />
          </a>
        </div>

        {/* --- 2. LINKS --- */}
        <div className="hidden lg:flex justify-center items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400 hover:text-brand transition-all font-sans group"
            >
              {link.name}
              <span className="absolute bottom-1 left-4 right-4 h-[1.5px] bg-brand origin-right scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left" />
            </a>
          ))}
        </div>

        {/* --- 3. ACTIONS (Hire Us CTA) --- */}
        <div className="flex justify-end items-center gap-4">
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-brand text-white dark:text-black rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-brand/10 transition-all hover:shadow-brand/20"
          >
            Hire Us
            <ArrowUpRight size={14} />
          </motion.a>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden p-2 text-zinc-900 dark:text-white transition-transform active:scale-90"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* --- MOBILE DRAWER --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 bg-white dark:bg-[#080808] z-[60] flex flex-col"
          >
            <div className="flex justify-between items-center p-8 md:p-12 border-b border-zinc-100 dark:border-white/5">
              <img src={logoImg} className="h-12 w-12" alt="logo" />
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-3 bg-zinc-100 dark:bg-white/5 rounded-full dark:text-white"
              >
                <X size={28} />
              </button>
            </div>

            <div className="flex flex-col justify-center flex-grow px-10 space-y-4">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white hover:text-brand transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              
              {/* Mobile CTA */}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-block pt-8 text-2xl font-black text-brand uppercase tracking-widest underline decoration-4 underline-offset-8"
              >
                Let's Talk —
              </motion.a>
            </div>

            <div className="p-10 border-t border-zinc-100 dark:border-white/5">
                <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-bold">© 2026 Dev Crafters</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}