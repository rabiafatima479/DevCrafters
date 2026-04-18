import { motion } from 'motion/react';
import { Code, Palette, Server, LifeBuoy, Terminal, BarChart } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Custom React & Next.js applications built for speed, scalability, and SEO optimization.',
    icon: <Code size={32} />,
    color: 'bg-brand/10 text-brand'
  },
  {
    title: 'UI/UX Design',
    description: 'Bespoke design systems and interface experiences that prioritize user engagement and accessibility.',
    icon: <Palette size={32} />,
    color: 'bg-brand/10 text-brand'
  },
  {
    title: 'API Development',
    description: 'Robust RESTful and GraphQL APIs designed for seamless data integration and performance.',
    icon: <Server size={32} />,
    color: 'bg-brand/10 text-brand'
  },
  {
    title: 'Maintenance & Support',
    description: '24/7 technical monitoring and regular updates to keep your digital products running smoothly.',
    icon: <LifeBuoy size={32} />,
    color: 'bg-brand/10 text-brand'
  },
  {
    title: 'Mobile Solutions',
    description: 'Cross-platform mobile applications using React Native for a consistent feel across all devices.',
    icon: <Terminal size={32} />,
    color: 'bg-brand/10 text-brand'
  },
  {
    title: 'Cloud Analytics',
    description: 'Leveraging cloud-native tools to provide deep insights and data-driven business intelligence.',
    icon: <BarChart size={32} />,
    color: 'bg-brand/10 text-brand'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 px-6 bg-white dark:bg-dark-bg overflow-hidden">
      
      {/* --- 🎨 BACKGROUND GRAPHICS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] [mask-image:linear-gradient(to_bottom,white,transparent)]" 
             style={{ backgroundImage: 'radial-gradient(#49A9B1 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
        
        {/* Decorative Blurred Blurs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand font-black uppercase tracking-[0.2em] text-xs md:text-sm mb-4"
          >
            Our Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 dark:text-text-high tracking-tight leading-tight"
          >
            Solutions for the <br className="hidden sm:block" /> Modern Web
          </motion.h2>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group p-8 rounded-2xl border border-zinc-100 dark:border-border-subtle bg-white/50 dark:bg-dark-card/50 backdrop-blur-sm hover:bg-white dark:hover:bg-dark-card hover:shadow-2xl hover:shadow-brand/10 transition-all duration-300"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-6 bg-brand/10 text-brand group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-black text-zinc-900 dark:text-text-high mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-zinc-600 dark:text-text-low leading-relaxed font-medium">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}