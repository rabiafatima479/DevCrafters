import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

// --- 🖼️ IMAGE IMPORTS ---
import thumbDride from '../assets/images/thumbfordride.png';
import thumbHeaven from '../assets/images/thumbforheaveresort.png';
import thumbSoccer from '../assets/images/thumbforsoccer.png';
import thumbHome from '../assets/images/thumbforhomestyler.png';
import thumbGift from '../assets/images/thumbforgiftshop.png';
import thumbBlog from '../assets/images/thumbforblog.png';
import thumbRabia from '../assets/images/thumbrabia.png'; 
import thumbforfitness from '../assets/images/thumbforfitness.png';

const projects = [
  {
    title: 'Dride Saudi Arabia',
    description: 'A smart ride-hailing platform for Saudi Arabia, offering fast, safe, and reliable transportation with live tracking.',
    image: thumbDride,
    tags: ['React', 'KSA 2026', 'Mobility'],
    link: 'https://dride.sa/',
    repo: '#'
  },
  {
    title: 'Personal Portfolio',
    description: 'A sleek, modern developer portfolio showcasing projects with high-performance animations and dark mode support.',
    image: thumbRabia,
    tags: ['Next.js', 'Framer Motion', 'Vercel'],
    link: 'https://my-portfolio-nu-brown-5vvicwwewm.vercel.app/',
    repo: '#'
  },
  {
    title: 'The Heaven Resort',
    description: 'A premium luxury resort booking platform with an elegant UI and seamless reservation flow.',
    image: thumbHeaven,
    tags: ['Next.js', 'Luxury UI', 'Booking'],
    link: 'https://thehotelresort.netlify.app/',
    repo: '#'
  },
  {
    title: 'Soccer Verse',
    description: 'Digital hub for football enthusiasts featuring live stats, matches, and community engagement.',
    image: thumbSoccer,
    tags: ['React', 'Sports API', 'Community'],
    link: 'https://thesoccerverse.netlify.app/',
    repo: '#'
  },
  {
    title: 'Home Styler',
    description: 'An interior design showcase platform helping users visualize modern living spaces with precision.',
    image: thumbHome,
    tags: ['Architecture', 'Tailwind', 'Design'],
    link: 'https://thehomestyler.netlify.app/',
    repo: '#'
  },
  {
    title: 'Gift Shop Online',
    description: 'E-commerce platform for curated gifts with Firebase integration and secure digital checkout.',
    image: thumbGift,
    tags: ['Firebase', 'E-commerce', 'Online Shop'],
    link: 'https://gift-shop-online.web.app/',
    repo: '#'
  },
  {
    title: 'Blog',
    description: 'A high-performance blogging platform with optimized SEO, clean typography, and fast loading.',
    image: thumbBlog,
    tags: ['Next.js', 'Vercel', 'SEO'],
    link: 'https://blog-ashy-tau-32.vercel.app/',
    repo: '#'
  },
  {
    title: 'Fitness Website',
    description: 'A high-performance fitness application with optimized SEO, clean typography, and fast loading.',
    image: thumbforfitness,
    tags: ['Next.js', 'Vercel', 'SEO'],
    link: 'https://ammara-developer.github.io/Gym-Website/',
    repo: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 bg-white dark:bg-[#080808] overflow-hidden">
      
      {/* --- 🧊 AMBIENT BACKGROUND ELEMENTS --- */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* --- 🏷️ ELITE HEADER --- */}
        <div className="flex flex-col mb-24 space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-12 bg-brand" />
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-brand font-bold uppercase tracking-[0.4em] text-[10px]"
            >
              Excellence in Motion
            </motion.p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase leading-[0.8]"
            >
              SELECTED <br />
              <span className="text-transparent stroke-text dark:stroke-white transition-all duration-500 hover:text-brand hover:stroke-brand italic">WORKS</span>
            </motion.h2>

            <motion.a 
              href="https://github.com/" 
              target="_blank"
              className="group relative px-8 py-4 bg-zinc-900 dark:bg-zinc-800 text-white rounded-full overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 bg-brand translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <div className="relative flex items-center gap-3 text-[10px] font-black uppercase tracking-widest">
                Explore Archive <ArrowUpRight size={14} />
              </div>
            </motion.a>
          </div>
        </div>

        {/* --- ⚡ THE PROJECT MASONRY --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index % 2 * 0.2 }}
              className={cn(
                "relative group",
                index % 2 !== 0 ? "md:mt-32" : "" // Offset effect for high-end look
              )}
            >
              {/* Media Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-zinc-100 dark:bg-zinc-900 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] group-hover:shadow-brand/20 transition-all duration-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-[1.5s] group-hover:scale-110 group-hover:rotate-1"
                />
                
                {/* Floating Glass Controls */}
                <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                  <a href={project.link} target="_blank" className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-brand hover:border-brand transition-all">
                    <ExternalLink size={18} />
                  </a>
                  <a href={project.repo} className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-zinc-900 transition-all">
                    <Github size={18} />
                  </a>
                </div>

                {/* Index Number */}
                <div className="absolute bottom-10 left-10 text-white/10 text-9xl font-black italic pointer-events-none">
                  0{index + 1}
                </div>
              </div>
              
              {/* Info Section */}
              <div className="mt-10 space-y-4 px-4">
                <div className="flex items-center gap-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[9px] font-black uppercase tracking-[0.2em] text-brand border-b border-brand/30 pb-1">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-4xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter">
                  {project.title}
                </h3>
                
                <p className="text-zinc-500 dark:text-zinc-400 font-medium text-lg leading-relaxed max-w-md">
                  {project.description}
                </p>

                <motion.a 
                  href={project.link}
                  className="inline-flex items-center gap-2 text-zinc-900 dark:text-white text-xs font-black uppercase tracking-widest group/link"
                >
                  Project Details 
                  <div className="w-8 h-[1px] bg-brand group-hover/link:w-12 transition-all" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS for Outlined Text (Stroke Effect) */}
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px #d4d4d8;
          color: transparent;
        }
        .dark .stroke-text {
          -webkit-text-stroke: 1px #3f3f46;
        }
      `}</style>
    </section>
  );
}

// Utility to handle conditional classes if not already present in your project
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}