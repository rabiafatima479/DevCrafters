import { motion } from 'motion/react';
import { Heart, Linkedin, Facebook, Instagram, ArrowUp, ArrowUpRight } from 'lucide-react';
import logo from '../assets/images/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/rabia-fatima-b553b7319/' },
    { name: 'Facebook', icon: <Facebook size={20} />, href: 'https://www.facebook.com/profile.php?id=61583448407839' },
    { name: 'Instagram', icon: <Instagram size={20} />, href: 'https://www.instagram.com/devcraftes.tech/' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-12 md:pt-20 bg-white dark:bg-[#050505] overflow-hidden">
      
      {/* --- 🚀 TOP CTA SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-12 md:pb-20">
        <div className="relative group p-8 md:p-20 rounded-[2rem] md:rounded-[3rem] bg-zinc-900 dark:bg-zinc-900 overflow-hidden shadow-2xl">
          {/* Ambient Glows - Mobile optimized */}
          <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-brand/20 blur-[60px] md:blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start lg:items-center justify-between gap-8 md:gap-10">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[1.1] md:leading-none">
                Have a <span className="text-brand italic">Vision?</span> <br className="hidden sm:block" />
                Let’s build it.
              </h2>
              <p className="text-zinc-400 font-medium max-w-xs md:max-w-sm text-sm md:text-base mx-auto md:mx-0">
                Ready to take your digital presence to the next level? Our team is standing by.
              </p>
            </div>
            
            <motion.a 
              href="mailto:devcrafter.tech@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto px-8 md:px-10 py-5 md:py-6 bg-brand text-white rounded-full font-black uppercase text-[10px] md:text-xs tracking-[0.2em] flex items-center justify-center gap-3 shadow-xl shadow-brand/20 group/btn"
            >
              Start A Project 
              <ArrowUpRight size={18} className="group-hover/btn:rotate-45 transition-transform" />
            </motion.a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-12 md:gap-16 pb-16 md:pb-20">
          
          {/* --- 🏷️ BRAND SECTION --- */}
          <div className="sm:col-span-2 md:col-span-5 space-y-6 md:space-y-8 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <img src={logo} alt="Dev Crafters" className="h-16 md:h-20 w-auto" />
            </div>
            <p className="text-lg md:text-2xl font-medium text-zinc-600 dark:text-zinc-400 leading-snug tracking-tight italic max-w-md mx-auto md:mx-0">
              "We don't just write code; we craft experiences that <span className="text-zinc-900 dark:text-white font-black not-italic underline decoration-brand underline-offset-4">matter</span>."
            </p>
            
            <div className="flex justify-center md:justify-start gap-3 md:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-transparent hover:border-brand/30 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-brand transition-all duration-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* --- 🧭 NAVIGATION --- */}
          <div className="sm:col-span-1 md:col-span-3 space-y-6 md:space-y-8 text-center md:text-left">
            <h4 className="text-[10px] font-black text-brand uppercase tracking-[0.4em]">Navigation</h4>
            <ul className="space-y-3 md:space-y-4">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-zinc-900 dark:text-white text-base md:text-lg font-black uppercase tracking-tighter hover:text-brand transition-colors inline-flex items-center group">
                    {item}
                    <div className="hidden md:block h-[2px] w-0 bg-brand ml-2 group-hover:w-8 transition-all duration-500" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* --- ✉️ CONTACT --- */}
          <div className="sm:col-span-1 md:col-span-4 space-y-6 md:space-y-8 text-center md:text-left">
            <h4 className="text-[10px] font-black text-brand uppercase tracking-[0.4em]">Get In Touch</h4>
            <div className="space-y-6">
              <a href="mailto:devcrafter.tech@gmail.com" className="group flex flex-col">
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">Email Us</span>
                <span className="text-base md:text-xl font-black text-zinc-900 dark:text-white transition-colors group-hover:text-brand truncate px-2 md:px-0">
                  devcrafter.tech@gmail.com
                </span>
              </a>
              
              <a href="tel:+923268005089" className="group flex flex-col">
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">Call Us</span>
                <span className="text-lg md:text-xl font-black text-zinc-900 dark:text-white transition-colors group-hover:text-brand">
                  +92 326 8005089
                </span>
              </a>
            </div>
            
            <button 
              onClick={scrollToTop} 
              className="flex items-center justify-center md:justify-start gap-3 text-zinc-400 hover:text-brand transition-all group mx-auto md:mx-0"
            >
              <div className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:border-brand">
                <ArrowUp size={16} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest">Back to top</span>
            </button>
          </div>
        </div>

        {/* --- 🏆 GIANT WATERMARK --- */}
      {/* --- 🏆 INFINITE MARQUEE WATERMARK --- */}
<div className="relative pt-10 md:pt-20 pb-5 overflow-hidden pointer-events-none select-none border-t border-zinc-100 dark:border-zinc-900/50">
  <div className="flex whitespace-nowrap">
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: "-50%" }}
      transition={{
        duration: 30, // Speed control (jitna zyada, utna slow)
        ease: "linear",
        repeat: Infinity,
      }}
      className="flex flex-nowrap shrink-0 gap-20 items-center"
    >
      {/* Original Text Group */}
      <h1 className="text-[14vw] md:text-[10vw] font-black text-zinc-900/5 dark:text-white/[0.02] uppercase tracking-tighter leading-none flex items-center gap-10">
        DEV CRAFTERS <span className="text-brand/10">•</span> SOLUTIONS <span className="text-brand/10">•</span> 2026
      </h1>
      
      {/* Duplicate Text Group (for seamless loop) */}
      <h1 className="text-[14vw] md:text-[10vw] font-black text-zinc-900/5 dark:text-white/[0.02] uppercase tracking-tighter leading-none flex items-center gap-10">
        DEV CRAFTERS <span className="text-brand/10">•</span> SOLUTIONS <span className="text-brand/10">•</span> 2026
      </h1>
    </motion.div>

    {/* Secondary Motion Div to ensure no gaps at high speeds */}
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: "-50%" }}
      transition={{
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      }}
      className="flex flex-nowrap shrink-0 gap-20 items-center pl-20"
    >
      <h1 className="text-[14vw] md:text-[10vw] font-black text-zinc-900/5 dark:text-white/[0.02] uppercase tracking-tighter leading-none flex items-center gap-10">
        DEV CRAFTERS <span className="text-brand/10">•</span> SOLUTIONS <span className="text-brand/10">•</span> 2026
      </h1>
      <h1 className="text-[14vw] md:text-[10vw] font-black text-zinc-900/5 dark:text-white/[0.02] uppercase tracking-tighter leading-none flex items-center gap-10">
        DEV CRAFTERS <span className="text-brand/10">•</span> SOLUTIONS <span className="text-brand/10">•</span> 2026
      </h1>
    </motion.div>
  </div>
</div>

        {/* --- ⚖️ BOTTOM BAR --- */}
        <div className="py-8 md:py-10 border-t border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-center">
          <p className="text-[9px] md:text-[10px] font-black text-zinc-500 dark:text-zinc-600 uppercase tracking-[0.2em]">
            © {currentYear} Dev Crafters. All rights reserved.
          </p>
          <div className="flex items-center gap-2 md:gap-4 text-[9px] md:text-[10px] font-black text-zinc-500 dark:text-zinc-600 uppercase tracking-[0.2em]">
             Made with <Heart size={12} className="text-brand fill-brand" /> by DC Team
          </div>
        </div>
      </div>
    </footer>
  );
}