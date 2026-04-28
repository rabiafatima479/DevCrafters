import { motion } from 'motion/react';
import { Target, Layers, Globe, Zap, Lightbulb, TrendingUp, Smartphone } from 'lucide-react';
import aboutImg1 from '../assets/images/2.jpg';
import aboutImg2 from '../assets/images/3.jpg';
import bgImg from '../assets/images/5.jpg'; 
import work1 from '../assets/images/work-1.jpg';
import work2 from '../assets/images/work-2.jpg';

const skills = [
  { name: 'Full-Stack Dev', icon: <Globe size={20} /> },
  { name: 'App Development', icon: <Smartphone size={20} /> },
  { name: 'UI/UX Design', icon: <Layers size={20} /> },
  { name: 'SEO & Marketing', icon: <TrendingUp size={20} /> },
];

const imageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05, transition: { duration: 0.4 } }
};

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-24 px-6 overflow-hidden bg-white dark:bg-dark-bg">
      
      {/* --- 🖼️ BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImg} 
          alt="background" 
          className="w-full h-full object-cover opacity-20 dark:opacity-10 grayscale" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white dark:from-dark-bg dark:via-dark-bg/95 dark:to-dark-bg z-10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* --- LEFT SIDE: IMAGES & STATS (RESTORED & ANIMATED) --- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-2 gap-3 md:gap-4"
          >
            {/* Column 1 */}
            <div className="flex flex-col gap-3 md:gap-4">
              <motion.div variants={imageVariants} whileHover="hover" className="rounded-3xl shadow-xl overflow-hidden">
                <img src={aboutImg1} alt="Studio" className="w-full h-48 md:h-72 object-cover" />
              </motion.div>

              <motion.div variants={imageVariants} whileHover="hover" className="rounded-3xl shadow-xl overflow-hidden">
                <img src={work1} alt="Work 1" className="w-full h-48 md:h-72 object-cover" />
              </motion.div>

              {/* RESTORED: Projects Completed Box */}
              <motion.div 
                variants={imageVariants}
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-brand text-white rounded-3xl shadow-xl transform transition-transform cursor-default text-center flex flex-col justify-center min-h-[140px]"
              >
                <p className="text-4xl md:text-5xl font-black italic">25+</p>
                <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold opacity-80 mt-2">
                  Projects Completed
                </p>
              </motion.div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3 md:gap-4">
              {/* RESTORED: Expert Members Box */}
              <motion.div 
                variants={imageVariants}
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-white/90 dark:bg-dark-card/90 backdrop-blur-md rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl transform transition-transform cursor-default text-center flex flex-col justify-center min-h-[140px]"
              >
                <p className="text-4xl md:text-5xl font-black text-brand italic">07+</p>
                <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-zinc-500 mt-2">
                  Expert Members
                </p>
              </motion.div>

              <motion.div variants={imageVariants} whileHover="hover" className="rounded-3xl shadow-xl overflow-hidden">
                <img src={aboutImg2} alt="Team" className="w-full h-48 md:h-72 object-cover" />
              </motion.div>

              <motion.div variants={imageVariants} whileHover="hover" className="rounded-3xl shadow-xl overflow-hidden">
                <img src={work2} alt="Work 2" className="w-full h-48 md:h-72 object-cover" />
              </motion.div>
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: CONTENT --- */}
          <div className="space-y-8 md:space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-brand font-black uppercase tracking-[0.3em] text-xs mb-4">Our Story</p>
              <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-text-high mb-6 tracking-tight leading-[1.05]">
                Founded by Young Minds, <br /> Built for the <span className="text-brand">Future.</span>
              </h2>
              <p className="text-zinc-600 dark:text-text-low text-lg leading-relaxed font-medium">
                Dev Crafters started with a vision by a group of young, ambitious developers to bridge the gap between complex technology and business growth. We aren't just an agency; we are a collective of digital artisans dedicated to core excellence and precision code.
              </p>
            </motion.div>

            {/* Approach & Mission */}
            <div className="grid sm:grid-cols-2 gap-8">
              <motion.div whileHover={{ y: -5 }} className="group">
                <div className="flex items-center gap-3 text-brand mb-3">
                  <Lightbulb size={28} className="group-hover:animate-pulse" />
                  <h3 className="font-black text-xl text-zinc-900 dark:text-text-high">Our Approach</h3>
                </div>
                <p className="text-sm text-zinc-600 dark:text-text-low font-medium leading-relaxed">
                  We don't just build; we strategize. We use a "Design-First" methodology to ensure every line of code serves a purpose.
                </p>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="group">
                <div className="flex items-center gap-3 text-brand mb-3">
                  <Target size={28} className="group-hover:animate-bounce" />
                  <h3 className="font-black text-xl text-zinc-900 dark:text-text-high">Our Mission</h3>
                </div>
                <p className="text-sm text-zinc-600 dark:text-text-low font-medium leading-relaxed">
                  To empower clients with high-performance digital tools that turn their local ideas into global success stories.
                </p>
              </motion.div>
            </div>

            {/* Impact Box */}
            <motion.div 
              className="p-6 bg-zinc-50 dark:bg-white/5 rounded-2xl border-l-4 border-brand shadow-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <h4 className="font-black text-zinc-900 dark:text-text-high mb-2 flex items-center gap-2">
                <Zap size={18} className="text-brand fill-brand" /> Our Impact
              </h4>
              <p className="text-sm text-zinc-600 dark:text-text-low italic font-medium">
                "In just a short span, we've helped 25+ businesses automate their workflows and increase their digital reach by 200%."
              </p>
            </motion.div>

            {/* Skills */}
            <div>
              <h4 className="text-[10px] font-black text-zinc-400 mb-4 uppercase tracking-[0.2em]">Core Expertise</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="flex items-center gap-2 px-5 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-zinc-200 text-sm font-black shadow-sm"
                  >
                    <span className="text-brand">{skill.icon}</span>
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}