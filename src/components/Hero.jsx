import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Zap, CheckCircle2, MousePointer2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import heroImg from '../assets/images/4.jpg';
// Naya Bot Component Import Karein
import AIChatBot from './AIChatBot'; 

const premiumKeywords = [
  "Modern", "Scalable", "Premium", "Next-Gen",
  "Full-Stack", "AI-Powered", "Ultra-Secure",
];

const Particles = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        animate={{ y: [0, -120, 0], x: [0, 30, 0], opacity: [0, 0.4, 0], scale: [1, 1.5, 1] }}
        transition={{ duration: Math.random() * 8 + 5, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
        className="absolute rounded-full"
        style={{
          width: Math.random() * 4 + 2 + 'px', 
          height: Math.random() * 4 + 2 + 'px',
          left: Math.random() * 100 + '%', 
          top: Math.random() * 100 + '%',
          backgroundColor: i % 2 === 0 ? '#49A9B1' : '#64748b',
          filter: 'blur(1px)'
        }}
      />
    ))}
  </div>
);

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % premiumKeywords.length), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-center bg-white dark:bg-[#050505] pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 overflow-hidden">
      
      {/* --- YAHAN BOT CONNECT HO GAYA HAI --- */}
      <AIChatBot /> 
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles />
        <div className="absolute -top-[20%] -left-[10%] w-[80vw] h-[80vw] md:w-[70vw] md:h-[70vw] bg-brand/5 dark:bg-brand/[0.07] rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[60vw] h-[60vw] md:w-[50vw] md:h-[50vw] bg-blue-500/5 dark:bg-blue-600/[0.05] rounded-full blur-[80px] md:blur-[100px]" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          
          {/* --- CONTENT LEFT --- */}
          <div className="w-full lg:w-[55%] text-center lg:text-left order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/10 mb-8"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
                Trusted by 50+ Global Brands
              </span>
            </motion.div>

            <h1 className="text-[12vw] sm:text-7xl md:text-[85px] lg:text-[100px] font-black leading-[0.85] tracking-tight text-zinc-900 dark:text-white mb-8">
              <div className="h-[1.1em] overflow-hidden mb-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={premiumKeywords[index]}
                    initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="block text-brand italic"
                  >
                    {premiumKeywords[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
              <span className="block opacity-90 text-[10vw] sm:text-7xl md:text-[85px] lg:text-[100px]">DIGITAL AGENT</span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              className="text-zinc-500 dark:text-zinc-400 text-lg md:text-2xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium mb-12"
            >
              Engineering high-end software solutions with <span className="text-zinc-900 dark:text-white font-bold underline decoration-brand/30">unmatched precision</span> and aesthetic excellence.
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="group w-full sm:w-auto px-10 py-5 rounded-2xl bg-zinc-900 dark:bg-brand text-white dark:text-black font-black text-[11px] tracking-[0.2em] flex items-center justify-center gap-4 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                BOOK A CALL <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <a href="#projects" className="group flex items-center gap-3 text-zinc-900 dark:text-white font-black text-[11px] tracking-[0.2em] uppercase">
                <span className="w-12 h-12 rounded-full border border-zinc-200 dark:border-white/10 flex items-center justify-center group-hover:bg-zinc-50 dark:group-hover:bg-white/5 transition-all">
                  <MousePointer2 size={18} className="group-hover:scale-110 transition-transform" />
                </span>
                View Work
              </a>
            </div>
          </div>

          {/* --- VISUAL RIGHT --- */}
          <div className="w-full lg:w-[45%] relative mt-4 md:mt-10 lg:mt-0 order-1 lg:order-2 px-2 md:px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-square sm:aspect-[4/5] lg:aspect-square max-w-[500px] mx-auto lg:max-w-none"
            >
              <div className="absolute inset-0 border-2 border-brand/20 rounded-[2.5rem] md:rounded-[3.5rem] translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 -z-10" />
              
              <div className="w-full h-full rounded-[2.2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={heroImg} 
                  alt="Dev Crafters Agency" 
                  className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[2s]" 
                />
              </div>

              {/* Stats Cards */}
              <motion.div 
                animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-4 -right-2 md:-top-8 md:-right-8 p-3 md:p-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl rounded-2xl md:rounded-[2rem] border border-white/20 shadow-2xl flex items-center gap-2 md:gap-4"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 bg-brand rounded-xl md:rounded-2xl flex items-center justify-center text-white">
                  <Zap size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="text-[8px] md:text-[10px] text-zinc-500 font-black uppercase tracking-tighter">Availability</p>
                  <p className="text-xs md:text-xl font-black text-zinc-900 dark:text-white">Active 24/7</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-2 md:-bottom-8 md:-left-12 p-3 md:p-6 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl md:rounded-[2rem] shadow-2xl flex items-center gap-2 md:gap-4"
              >
                <div className="w-8 h-8 md:w-12 md:h-12 bg-brand/20 dark:bg-zinc-900/10 rounded-lg md:rounded-xl flex items-center justify-center text-brand">
                  <CheckCircle2 size={18} strokeWidth={3} />
                </div>
                <div>
                  <p className="text-sm md:text-2xl font-black tracking-tighter">99%</p>
                  <p className="text-[7px] md:text-[9px] font-black uppercase tracking-widest opacity-60">Satisfaction</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}