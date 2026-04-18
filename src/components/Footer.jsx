import { motion } from 'motion/react';
import { Heart, Linkedin, Facebook, Instagram, Github, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/rabia-fatima-b553b7319/' },
    { name: 'Facebook', icon: <Facebook size={18} />, href: 'https://www.facebook.com/profile.php?id=61583448407839' },
    { name: 'Instagram', icon: <Instagram size={18} />, href: 'https://www.instagram.com/devcraftes.tech/' },
  ];

  return (
    <footer className="relative py-16 px-6 bg-white dark:bg-dark-bg border-t border-zinc-100 dark:border-border-subtle overflow-hidden">
      
      {/* --- 🎨 SUBTLE BG GRAPHICS --- */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-[80px]" />
        <div className="absolute top-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full blur-[60px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.02 }}
              className="text-3xl font-black tracking-tighter text-zinc-900 dark:text-text-high block"
            >
              DEV <span className="text-brand">CRAFTERS</span>
            </motion.a>
            <p className="text-zinc-600 dark:text-text-low max-w-sm leading-relaxed font-medium">
              Leading the digital frontier with innovative solutions and human-centric design. We build the future, one line of code at a time.
            </p>
            
            {/* Social Icons Row */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-zinc-50 dark:bg-dark-card border border-zinc-100 dark:border-border-subtle flex items-center justify-center text-zinc-600 dark:text-text-low hover:bg-brand hover:text-white hover:border-brand transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-black text-zinc-900 dark:text-text-high uppercase tracking-[0.2em] mb-6">Explore</h4>
            <ul className="space-y-4 text-zinc-600 dark:text-text-low text-sm font-bold">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-brand transition-colors flex items-center group">
                    {item}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Help & Connect */}
          <div>
            <h4 className="text-[10px] font-black text-zinc-900 dark:text-text-high uppercase tracking-[0.2em] mb-6">Connect</h4>
            <ul className="space-y-4 text-zinc-600 dark:text-text-low text-sm font-bold">
              <li>
                <a href="mailto:devcrafter.tech@gmail.com" className="hover:text-brand transition-colors">
                  devcrafter.tech@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+923268005089" className="hover:text-brand transition-colors">
                  +92 326 8005089
                </a>
              </li>
              <li>
                <span className="text-zinc-400 font-medium">Available for 2026 Projects</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-100 dark:border-border-subtle flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black text-zinc-500 dark:text-zinc-500 uppercase tracking-widest">
            © {currentYear} Dev Crafters. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[10px] font-black text-zinc-500 dark:text-zinc-500 uppercase tracking-widest">
            Made with <Heart size={14} className="text-brand fill-brand" /> Dev Crafters
          </div>
        </div>
      </div>
    </footer>
  );
}