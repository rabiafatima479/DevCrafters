import { motion } from 'motion/react';
import { Target, Eye, Cpu, Layers, Globe, Zap } from 'lucide-react';
import aboutImg1 from '../assets/images/2.jpg';
import aboutImg2 from '../assets/images/3.jpg';
import bgImg from '../assets/images/5.jpg'; 

const skills = [
  { name: 'Frontend Dev', icon: <Globe size={20} /> },
  { name: 'Backend Dev', icon: <Cpu size={20} /> },
  { name: 'UI/UX Design', icon: <Layers size={20} /> },
  { name: 'API Services', icon: <Zap size={20} /> },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      
      {/* --- 🖼️ BACKGROUND LAYER (Wazeh Image) --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImg} 
          alt="background" 
          className="w-full h-full object-cover opacity-60 dark:opacity-30 brightness-110" // Opacity barha di taaki image dikhe
        />
        {/* White contrast ko manage karne ke liye light gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-white/80 dark:from-dark-bg/90 dark:via-dark-bg/60 dark:to-dark-bg/90 z-10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Images & Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 pt-12">
              <img
                src={aboutImg1}
                alt="Workspace"
                className="rounded-2xl shadow-xl w-full border border-zinc-200"
                referrerPolicy="no-referrer"
              />
              <div className="p-6 bg-white/90 dark:bg-dark-card/90 backdrop-blur-md rounded-2xl border border-zinc-200 dark:border-border-subtle shadow-lg">
                <p className="text-3xl font-bold text-brand">50+</p>
                <p className="text-sm text-zinc-600 dark:text-text-low">Projects Delivered</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-6 bg-white/90 dark:bg-dark-card/90 backdrop-blur-md rounded-2xl border border-zinc-200 dark:border-border-subtle shadow-lg">
                <p className="text-3xl font-bold text-brand">10+</p>
                <p className="text-sm text-zinc-600 dark:text-text-low">Experts Onboard</p>
              </div>
              <img
                src={aboutImg2}
                alt="Developer"
                className="rounded-2xl shadow-xl w-full border border-zinc-200"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-brand font-bold uppercase tracking-widest text-sm mb-4">About Dev Crafters</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-text-high mb-8 tracking-tight">
              Crafting Digital Excellence
            </h2>
            <p className="text-zinc-700 dark:text-text-low mb-8 leading-relaxed text-lg font-medium">
              Dev Crafters is a boutique agency focused on precision code and elite user experiences. Our mission is to accelerate digital growth through innovative technology.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-brand">
                  <Target size={24} />
                  <h3 className="font-bold text-zinc-900 dark:text-text-high">Our Mission</h3>
                </div>
                <p className="text-sm text-zinc-700 dark:text-text-low font-medium">
                  Deliver high-performance software solutions that empower businesses to thrive.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-brand">
                  <Eye size={24} />
                  <h3 className="font-bold text-zinc-900 dark:text-text-high">Our Vision</h3>
                </div>
                <p className="text-sm text-zinc-700 dark:text-text-low font-medium">
                  To be the global leader in innovative digital craftsmanship and user-centric design.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-zinc-200 dark:border-border-subtle">
              <h4 className="text-sm font-bold text-zinc-900 dark:text-text-high mb-6 uppercase tracking-widest">Our Expertise</h4>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm border border-zinc-200 dark:border-border-subtle rounded-lg text-zinc-900 dark:text-text-low text-sm font-bold shadow-sm"
                  >
                    {skill.icon}
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}