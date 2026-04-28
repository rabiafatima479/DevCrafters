import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, Zap, Crown, Rocket, Globe, Smartphone, Plus, ArrowRight, ShieldCheck } from 'lucide-react';

const WebPackages = [
  {
    name: "Starter",
    level: "Basic",
    price: "$80 – $120",
    pkr: "22k – 35k",
    icon: <Rocket className="text-emerald-600" />,
    color: "emerald",
    features: ["3–5 Pages Website", "Responsive Design", "Basic UI Layout", "Contact Form", "3 Days Delivery"],
    notIncluded: ["SEO Optimization", "Backend / Admin Panel"],
  },
  {
    name: "Business",
    level: "Standard",
    price: "$180 – $300",
    pkr: "50k – 85k",
    icon: <Globe className="text-blue-600" />,
    color: "blue",
    popular: true,
    features: ["5–10 Pages Website", "Modern UI/UX Design", "Basic SEO (Meta/Speed)", "Basic Admin Panel", "Contact + Custom Forms", "5–7 Days Delivery"],
    notIncluded: ["Custom API Development"],
  },
  {
    name: "Pro Web App",
    level: "Premium",
    price: "$400 – $800+",
    pkr: "110k – 220k+",
    icon: <Crown className="text-purple-600" />,
    color: "purple",
    features: ["Custom Figma Design", "Full Backend (Laravel/API)", "Admin Dashboard", "Payment (JazzCash/Stripe)", "Advanced SEO Setup", "10–14 Days Delivery"],
    notIncluded: [],
  }
];

const mobilePackages = [
  {
    name: "Starter App",
    level: "Basic",
    price: "$150 – $300",
    pkr: "42k – 85k",
    icon: <Smartphone className="text-emerald-600" />,
    color: "emerald",
    features: ["3–5 Screens", "Basic UI Design", "Static Content", "Android OR iOS", "5–7 Days Delivery"],
    notIncluded: ["Admin Panel", "API Integration"],
  },
  {
    name: "Business App",
    level: "Standard",
    price: "$400 – $800",
    pkr: "110k – 220k",
    icon: <Zap className="text-blue-600" />,
    color: "blue",
    popular: true,
    features: ["5–10 Screens", "Custom UI Design", "API Integration", "Backend (Laravel/Firebase)", "Login/Signup System", "7–14 Days Delivery"],
    notIncluded: ["Both iOS & Android"],
  },
  {
    name: "Full Solution",
    level: "Premium",
    price: "$900 – $2000+",
    pkr: "250k – 550k+",
    icon: <Crown className="text-purple-600" />,
    color: "purple",
    features: ["Android + iOS (Dual)", "Figma Design First", "Full Backend + Admin", "Push Notifications", "App Store Deployment", "2–4 Weeks Delivery"],
    notIncluded: [],
  }
];

export default function Packages() {
  const [tab, setTab] = useState('web');
  const whatsappNumber = "+923268005089";

  const handlePackageSelect = (pkgName, pkgPrice) => {
    const message = `Hi Dev Crafters! I'm interested in the ${tab.toUpperCase()} ${pkgName} package (${pkgPrice}). Please provide more details.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleComboSelect = () => {
    const message = "Hi! I want to claim the COMBO (Web + Mobile) bundle offer for $1200+.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="packages" className="py-32 px-6 bg-white dark:bg-[#050505] relative overflow-hidden text-zinc-900 dark:text-white">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-6"
          >
            PRICING <span className="text-brand italic">MODELS</span>
          </motion.h2>
          
          <div className="inline-flex p-1 bg-zinc-100 dark:bg-white/5 rounded-2xl border border-zinc-200 dark:border-white/10">
            <button 
              onClick={() => setTab('web')}
              className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${tab === 'web' ? 'bg-zinc-900 dark:bg-brand text-white dark:text-black shadow-lg' : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300'}`}
            >
              Web Development
            </button>
            <button 
              onClick={() => setTab('mobile')}
              className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${tab === 'mobile' ? 'bg-zinc-900 dark:bg-brand text-white dark:text-black shadow-lg' : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300'}`}
            >
              Mobile Apps
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <AnimatePresence mode="wait">
            {(tab === 'web' ? WebPackages : mobilePackages).map((pkg, i) => (
              <motion.div
                key={pkg.level + tab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-8 rounded-[2.5rem] bg-zinc-50 dark:bg-white/[0.03] border-2 transition-all duration-500 hover:shadow-2xl ${pkg.popular ? 'border-brand scale-105 z-10 bg-white dark:bg-white/[0.05]' : 'border-zinc-100 dark:border-white/10'}`}
              >
                {pkg.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-black text-[9px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg">
                    Most Popular
                  </span>
                )}

                <div className="flex justify-between items-start mb-8">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-zinc-200 dark:bg-white/10`}>
                    {pkg.icon}
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{pkg.level}</p>
                    <h3 className="text-2xl font-black uppercase italic">{pkg.name}</h3>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="text-4xl font-black tracking-tight">{pkg.price}</div>
                  <p className="text-sm font-bold text-zinc-500 uppercase tracking-tighter">Approx. {pkg.pkr}</p>
                </div>

                <div className="space-y-4 mb-10 min-h-[250px]">
                  {pkg.features.map(feat => (
                    <div key={feat} className="flex items-center gap-3 text-sm font-medium">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-emerald-600" strokeWidth={4} />
                      </div>
                      <span className="text-zinc-700 dark:text-zinc-300">{feat}</span>
                    </div>
                  ))}
                  {pkg.notIncluded.map(feat => (
                    <div key={feat} className="flex items-center gap-3 text-sm font-medium text-zinc-400">
                      <X size={14} className="shrink-0 opacity-50" strokeWidth={3} />
                      <span className="line-through opacity-50">{feat}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => handlePackageSelect(pkg.name, pkg.price)}
                  className={`w-full py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all active:scale-95 ${pkg.popular ? 'bg-brand text-black shadow-xl shadow-brand/20' : 'bg-zinc-900 dark:bg-white text-white dark:text-black hover:opacity-90'}`}
                >
                  Get Started Now
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- COMBO OFFER & ADD-ONS --- */}
        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="lg:col-span-3 p-10 rounded-[3rem] bg-zinc-900 dark:bg-brand relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
              <ShieldCheck size={180} className="text-white dark:text-black" />
            </div>
            <div className="relative z-10">
              <span className="px-4 py-1.5 rounded-full bg-white/10 dark:bg-black/10 text-white dark:text-black text-[10px] font-black uppercase tracking-widest">High Conversion Offer</span>
              <h3 className="text-4xl md:text-5xl font-black text-white dark:text-black mt-4 mb-4 tracking-tighter leading-none">
                COMBO <br /> <span className="italic opacity-80">WEB + MOBILE</span>
              </h3>
              <p className="text-zinc-300 dark:text-black/70 font-bold max-w-md mb-8">
                “Get your business on both Web & Mobile — complete digital presence in one place.”
              </p>
              <div className="flex items-end gap-4">
                <div className="text-5xl font-black text-white dark:text-black tracking-tight">$1200+</div>
                <button 
                  onClick={handleComboSelect}
                  className="flex items-center gap-2 bg-brand dark:bg-black text-black dark:text-white px-6 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest active:scale-95 transition-transform shadow-xl"
                >
                  Claim Bundle <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-2 p-10 rounded-[3rem] bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/10">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
              <Plus size={16} className="text-brand" /> Add-On Services
            </h4>
            <div className="space-y-4">
              {[
                { n: "Logo Design", p: "$20-$50" },
                { n: "Monthly SEO", p: "$100+" },
                { n: "UI/UX Only", p: "$50-$150" },
                { n: "Extra Fast", p: "+$50" }
              ].map(item => (
                <button 
                  key={item.n}
                  onClick={() => {
                    const msg = `Hi! I'm interested in the Add-on service: ${item.n}.`;
                    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
                  }}
                  className="w-full flex justify-between items-center p-4 rounded-2xl bg-white dark:bg-white/5 border border-zinc-100 dark:border-white/5 hover:border-brand/30 transition-all group active:scale-[0.98]"
                >
                  <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-tighter">{item.n}</span>
                  <span className="text-xs font-black text-brand group-hover:scale-110 transition-transform">{item.p}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}