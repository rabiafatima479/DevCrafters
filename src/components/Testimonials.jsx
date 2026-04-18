import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at InnovateX',
    content: 'Dev Crafters transformed our vision into a stunning digital reality. Their attention to detail and technical prowess is unmatched in the industry.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    name: 'Michael Chen',
    role: 'Product Lead at Vanguard',
    content: 'Working with this team was a game-changer. They didn’t just build an app; they built a scalable solution that our customers love.',
    avatar: 'https://i.pravatar.cc/150?u=michael'
  },
  {
    name: 'Emma Williams',
    role: 'Founder of GreenShop',
    content: 'The UI/UX design provided by Dev Crafters significantly increased our conversion rate. Highly professional and creative team!',
    avatar: 'https://i.pravatar.cc/150?u=emma'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-dark-bg overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand font-bold uppercase tracking-widest text-sm mb-4"
          >
            Testimonial
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-text-high tracking-tight"
          >
            What Experts Say
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-10 rounded-3xl bg-zinc-50 dark:bg-dark-card border border-zinc-100 dark:border-border-subtle"
            >
              <div className="absolute top-8 right-8 text-brand/20">
                <Quote size={60} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand text-brand" />
                ))}
              </div>

              <p className="text-zinc-700 dark:text-text-low mb-8 italic text-lg leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full ring-2 ring-brand/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-text-high leading-none mb-1">{testimonial.name}</h4>
                  <p className="text-xs text-zinc-500 dark:text-text-low font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
