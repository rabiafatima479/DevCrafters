import { motion } from 'motion/react';
import { Quote, Star, Sparkles } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at InnovateX',
    content: 'Dev Crafters transformed our vision into a stunning digital reality. Their attention to detail and technical prowess is unmatched.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    name: 'Michael Chen',
    role: 'Product Lead at Vanguard',
    content: 'Working with this team was a game-changer. They built a scalable solution that our customers absolutely love.',
    avatar: 'https://i.pravatar.cc/150?u=michael'
  },
  {
    name: 'Emma Williams',
    role: 'Founder of GreenShop',
    content: 'The UI/UX design provided by Dev Crafters significantly increased our conversion rate. Highly professional team!',
    avatar: 'https://i.pravatar.cc/150?u=emma'
  },
  {
    name: 'David Miller',
    role: 'CTO at TechFlow',
    content: 'Unbelievable speed and clean code. They are now our go-to partners for every major release.',
    avatar: 'https://i.pravatar.cc/150?u=david'
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-32 px-6 bg-white dark:bg-[#050505] overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/5 border border-brand/10 mb-6"
            >
              <Sparkles size={14} className="text-brand" />
              <span className="text-brand font-black uppercase tracking-[0.3em] text-[10px]">Success Stories</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-white tracking-tighter leading-[0.9]"
            >
              TRUSTED BY THE <br /> <span className="text-brand italic">NEW GENERATION</span>
            </motion.h2>
          </div>

          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-zinc-500 dark:text-zinc-400 font-medium max-w-xs text-right hidden md:block"
          >
            We've helped 50+ startups scale their digital presence to millions of users.
          </motion.p>
        </div>

        {/* --- EXPERT GRID LAYOUT --- */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative break-inside-avoid p-8 rounded-[2.5rem] bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/10 backdrop-blur-sm group transition-all duration-500"
            >
              {/* Quote Icon Decoration */}
              <div className="absolute top-6 right-8 text-zinc-200 dark:text-white/5 transition-colors group-hover:text-brand/20">
                <Quote size={40} fill="currentColor" />
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-brand text-brand" />
                ))}
              </div>

              <p className="text-xl md:text-2xl font-bold text-zinc-800 dark:text-zinc-200 leading-snug mb-8 tracking-tight">
                "{testimonial.content}"
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-zinc-200 dark:border-white/5">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-brand rounded-full border-2 border-white dark:border-[#050505]" />
                  </div>
                  <div>
                    <h4 className="font-black text-sm uppercase tracking-wider text-zinc-900 dark:text-white leading-none mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Custom Expert Level Stat Card inside Testimonials */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="break-inside-avoid p-8 rounded-[2.5rem] bg-brand flex flex-col justify-center items-center text-center text-white"
          >
            <h3 className="text-5xl font-black mb-2">99%</h3>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">
              Customer Satisfaction Rate
            </p>
            <div className="mt-6 px-6 py-3 bg-black/20 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
              Join the elite
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}