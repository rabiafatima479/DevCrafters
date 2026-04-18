import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

// --- 🖼️ IMAGE IMPORTS ---
import thumbDride from '../assets/images/thumbfordride.png';
import thumbHeaven from '../assets/images/thumbforheaveresort.png';
import thumbSoccer from '../assets/images/thumbforsoccer.png';
import thumbHome from '../assets/images/thumbforhomestyler.png';
import thumbGift from '../assets/images/thumbforgiftshop.png';
import thumbBlog from '../assets/images/thumbforblog.png';
import thumbRabia from '../assets/images/thumbrabia.png'; // New Thumbnail Added

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
    image: thumbRabia, // Integrated your new thumbnail
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
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 bg-zinc-50 dark:bg-dark-bg/50 overflow-hidden">
      
      {/* --- 🎨 GRAPHIC BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50 dark:opacity-20">
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#49A9B1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand font-black uppercase tracking-[0.3em] text-xs mb-4"
            >
              Our Portfolio
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-text-high tracking-tight"
            >
              Recent Work
            </motion.h2>
          </div>
          
          <motion.a 
            href="https://github.com/" // Change this to your real GitHub profile
            target="_blank"
            whileHover={{ scale: 1.05, x: 10 }}
            className="group flex items-center gap-2 text-brand font-black text-xs tracking-[0.2em] uppercase transition-all"
          >
            <span>View All Projects</span>
            <span className="text-lg group-hover:translate-x-2 transition-transform">→</span>
          </motion.a>
        </div>

        {/* --- 📱 RESPONSIVE GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              {/* Thumbnail Container */}
              <div className="relative overflow-hidden rounded-[2rem] mb-8 bg-zinc-200 dark:bg-dark-card border border-zinc-200 dark:border-border-subtle shadow-2xl transition-all duration-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[280px] sm:h-[350px] md:h-[450px] object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay with glass effect */}
                <div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center gap-6">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-4 bg-brand text-white rounded-full hover:scale-110 transition-transform shadow-2xl"
                  >
                    <ExternalLink size={24} />
                  </a>
                  <a 
                    href={project.repo} 
                    className="p-4 bg-white text-zinc-900 rounded-full hover:scale-110 transition-transform shadow-2xl"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>
              
              {/* Content Details */}
              <div className="px-2">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-brand/10 dark:bg-brand/20 text-brand rounded-md text-[10px] font-black uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black text-zinc-900 dark:text-text-high mb-3 tracking-tighter group-hover:text-brand transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-zinc-600 dark:text-text-low leading-relaxed mb-6 font-medium text-sm md:text-base max-w-lg">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}