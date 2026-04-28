import { motion } from 'framer-motion'; 
import { 
  Code2, Smartphone, Palette, ShoppingBag, 
  Search, Share2, Wrench, Rocket, Video, Paintbrush
} from 'lucide-react';

const services = [
  {
    title: 'Full Stack Web Development',
    description: 'High-performance applications using React, Next.js, and Laravel. We build everything from complex Dashboards to custom API integrations.',
    icon: <Code2 size={28} />,
  },
  {
    title: 'Mobile App Development',
    description: 'Cross-platform Android & iOS applications using React Native. Full lifecycle from prototyping to App Store deployment.',
    icon: <Smartphone size={28} />,
  },
  {
    title: 'Photo & Video Editing',
    description: 'Cinematic video editing and high-end photo retouching. We create engaging Reels and commercial YouTube content.',
    icon: <Video size={28} />,
  },
  {
    title: 'Graphic Design & Branding',
    description: 'Creative visual storytelling, Logo design, and Brand Identity. We ensure your brand looks premium on all platforms.',
    icon: <Paintbrush size={28} />,
  },
  {
    title: 'Social Media Marketing',
    description: 'Grow your footprint with targeted Ads on Facebook, Instagram, and Google. High-impact content designed to convert.',
    icon: <Share2 size={28} />,
  },
  {
    title: 'UI/UX Design',
    description: 'Design-first approach using Figma. Modern, accessible, and user-centric interfaces including wireframing.',
    icon: <Palette size={28} />,
  },
  {
    title: 'E-commerce Solutions',
    description: 'Scale with automated stores. Integration with JazzCash, EasyPaisa, and Stripe for seamless local and global payments.',
    icon: <ShoppingBag size={28} />,
  },
  {
    title: 'SEO Mastery',
    description: 'Technical SEO and on-page optimization to rank on Google Page 1. We focus on speed, keywords, and authority.',
    icon: <Search size={28} />,
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 px-4 md:px-10 bg-white dark:bg-dark-bg overflow-hidden antialiased">
      
      {/* Moving Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" 
             style={{ backgroundImage: 'radial-gradient(#49A9B1 0.8px, transparent 0.8px)', backgroundSize: '24px 24px' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-brand font-black uppercase tracking-[0.4em] text-xs mb-4"
          >
            Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-7xl font-black text-zinc-900 dark:text-text-high tracking-tighter leading-[0.9]"
          >
            Modern Tech <br /> <span className="text-brand">Elite Solutions.</span>
          </motion.h2>
        </div>

        {/* RESPONSIVE GRID: 
            1 Col on Mobile 
            2 Col on Tablet (md)
            2 Col on Desktop (lg) 
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-[1.5px] rounded-[2.5rem] overflow-hidden bg-zinc-100 dark:bg-zinc-800"
            >
              {/* --- ⚡ THE MOVING BORDER EFFECT --- */}
              <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E2E2_0%,#49A9B1_50%,#E2E2E2_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#1e1e1e_0%,#49A9B1_50%,#1e1e1e_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Card Content Area */}
              <div className="relative h-full w-full bg-white dark:bg-dark-card rounded-[2.4rem] p-8 md:p-10 flex flex-col sm:flex-row gap-6 items-start transition-colors duration-300 group-hover:bg-white/90 dark:group-hover:bg-dark-card/90">
                
                {/* Icon with Floating Animation */}
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-all duration-500 shadow-lg"
                >
                  {service.icon}
                </motion.div>

                <div>
                  <h3 className="text-2xl font-black text-zinc-900 dark:text-text-high mb-3 tracking-tight group-hover:text-brand transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                    {service.description}
                  </p>
                  
              
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- ADD THIS CUSTOM CSS TO YOUR GLOBAL CSS OR TAILWIND --- */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </section>
  );
}