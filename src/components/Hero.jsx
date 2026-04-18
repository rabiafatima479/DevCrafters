import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import heroImg from '../assets/images/4.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden bg-white dark:bg-dark-bg">
      
      {/* --- 🎨 BACKGROUND GRAPHICS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Responsive Grid Graphic */}
        <svg 
          className="absolute inset-0 h-full w-full stroke-zinc-200/50 dark:stroke-white/5 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" 
          aria-hidden="true"
        >
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse" x="50%" y="-1">
              <path d="M.5 40V.5H40" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid-pattern)" />
        </svg>

        {/* Background Orbs - Adjusted for responsiveness */}
        <div className="absolute top-1/4 -left-20 w-72 md:w-96 h-72 md:h-96 bg-brand/10 dark:bg-brand/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-72 md:w-96 h-72 md:h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand/10 dark:bg-brand/10 text-brand dark:text-brand text-xs font-bold tracking-widest uppercase mb-6"
          >
            Expert Software Development
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter text-zinc-900 dark:text-text-high leading-[1.1] mb-6">
            We Build Modern <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-brand dark:from-white dark:to-brand">
              Digital Solutions
            </span>
          </h1>
          
          <p className="text-base md:text-xl text-zinc-600 dark:text-text-low mb-10 max-w-xl leading-relaxed">
            High-end engineering meets premium design. We transform ideas into scalable software systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-8 py-4 rounded-lg bg-zinc-900 dark:bg-brand text-white dark:text-white font-semibold flex items-center justify-center gap-2 hover:bg-brand dark:hover:bg-brand transition-all group"
            >
              Hire Us
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="px-8 py-4 rounded-lg border border-zinc-200 dark:border-border-subtle text-zinc-900 dark:text-text-high font-semibold flex items-center justify-center hover:bg-zinc-50 dark:hover:bg-dark-card transition-all"
            >
              View Our Work
            </a>
          </div>
        </motion.div>

        {/* Responsive Image Container: Hidden on mobile, shown on Large screens */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-zinc-500/20 dark:shadow-black">
            <img
              src={heroImg}
              alt="Digital Solution Dashboard"
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand rounded-2xl -z-10 animate-spin-slow opacity-20 md:opacity-100" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-zinc-900 dark:border-white rounded-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}