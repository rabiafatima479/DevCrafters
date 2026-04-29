import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Linkedin, Globe, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

import Amara from '../assets/images/amara.jpeg';
import Bisma from '../assets/images/bisma.jpeg';
import Ismail from '../assets/images/ismail.jpeg';
import Muzammil from '../assets/images/muzammil.jpeg';
import Rabia from '../assets/images/rabia.jpg';
import Tahir from '../assets/images/tahir.jpeg';

const TeamMembersData = [
  { id: 1, name: "Rabia Fatima", role: "CEO & Founder", linkedin: "https://www.linkedin.com/in/rabia-fatima-b553b7319/", portfolio: "https://my-portfolio-nu-brown-5vvicwwewm.vercel.app/", image: Rabia, quote: "Crafting digital empires from lines of code." },
  { id: 2, name: "Bisma Ali", role: "MERN Stack Developer", linkedin: "https://www.linkedin.com/in/bisma-ali-b522142a2/", portfolio: "#", image: Bisma, quote: "Turning complex logic into seamless interfaces." },
  { id: 3, name: "Ammara Saleem", role: "Frontend Developer", linkedin: "https://www.linkedin.com/in/ammara-saleem-422825370/", portfolio: "#", image: Amara, quote: "Pixel-perfect precision in every dynamic view." },
  { id: 4, name: "Syed Muzammil Sherazi", role: "Full Stack Developer", linkedin: "https://www.linkedin.com/in/muzammil-sherazi-1b9a0131b/", portfolio: "https://muzammilsherazi-portfolio.netlify.app/", image: Muzammil, quote: "Bridging the gap between robust backends and elite frontends." },
  { id: 5, name: "M Tahir Javed", role: "Digital Marketer", linkedin: "https://www.linkedin.com/in/tahir-javed-0ab7b3360/", portfolio: "#", image: Tahir, quote: "Amplifying brand presence across the digital noise." },
  { id: 6, name: "M Ismail Muneer", role: "Visual Editor", linkedin: "https://www.linkedin.com/in/ismail-sheikh-9926a72b6/", portfolio: "#", image: Ismail, quote: "Defining the visual aesthetic of modern brands." }
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(TeamMembersData[0]);

  return (
    <section id="team" className="relative min-h-screen py-10 md:py-20 px-4 md:px-10 bg-white dark:bg-[#020202] overflow-hidden">
      
      {/* 🔮 Background Watermark - Hidden on small screens for performance */}
      <div className="absolute inset-0 z-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none flex items-center justify-center overflow-hidden">
        <h1 className="text-[80vw] lg:text-[50vw] font-black text-zinc-900 dark:text-white uppercase tracking-tighter">Crafters</h1>
      </div>

      <div className="max-w-[1700px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        
        {/* --- 📜 LEFT: THE LIST --- */}
        <div className="order-2 lg:order-1 lg:col-span-5 space-y-8 lg:space-y-16 pt-5 lg:pt-10">
          <div className="space-y-3 px-2">
            <motion.span 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              className="text-brand font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] block"
            >
              The Core Rebels
            </motion.span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase leading-none">
              TEAM <span className="italic text-brand">DC</span>
            </h2>
          </div>

          <nav className="space-y-1">
            {TeamMembersData.map((member) => (
              <motion.button
                key={member.id}
                // Combined hover and click for mobile compatibility
                onMouseEnter={() => setSelectedMember(member)}
                onClick={() => setSelectedMember(member)}
                className={cn(
                  "flex items-center justify-between w-full p-4 md:p-6 rounded-2xl transition-all duration-300 text-left group",
                  selectedMember.id === member.id 
                    ? "bg-zinc-100 dark:bg-zinc-900 shadow-inner" 
                    : "hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
                )}
              >
                <div className="flex items-center gap-4 md:gap-5">
                  <span className={cn(
                    "text-lg md:text-xl font-black italic transition-colors",
                    selectedMember.id === member.id ? "text-brand" : "text-zinc-300 dark:text-zinc-700 group-hover:text-zinc-400"
                  )}>
                    0{member.id}
                  </span>
                  <div>
                    <h3 className="text-lg md:text-2xl font-black text-zinc-900 dark:text-white uppercase tracking-tight leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-widest mt-1">
                      {member.role}
                    </p>
                  </div>
                </div>
                <ArrowRight className={cn(
                  "w-5 h-5 transition-all duration-300",
                  selectedMember.id === member.id 
                    ? "translate-x-0 opacity-100 text-brand" 
                    : "-translate-x-5 opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 group-hover:text-zinc-400"
                )} />
              </motion.button>
            ))}
          </nav>
        </div>

        {/* --- 🖼️ RIGHT: THE SHOWCASE --- */}
        <div className="order-1 lg:order-2 lg:col-span-7 lg:sticky lg:top-10 h-[50vh] md:h-[60vh] lg:h-[90vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden group relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMember.id}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <img 
                src={selectedMember.image} 
                alt={selectedMember.name} 
                className="w-full h-full object-cover grayscale md:group-hover:grayscale-0 transition-all duration-1000 scale-100 md:group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
            </motion.div>
          </AnimatePresence>

          {/* Details Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 z-20 space-y-4 md:space-y-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={selectedMember.id + '_quote'}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="text-white text-lg md:text-2xl lg:text-3xl font-medium leading-tight italic max-w-xl tracking-tight"
              >
                “{selectedMember.quote}”
              </motion.p>
            </AnimatePresence>

            {/* Premium Buttons - Optimized for touch */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a 
                href={selectedMember.linkedin} target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-3.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] md:text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
              
              {selectedMember.portfolio !== "#" && (
                <a 
                  href={selectedMember.portfolio} target="_blank" rel="noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-3.5 bg-brand rounded-full text-white text-[10px] md:text-xs font-black uppercase tracking-widest hover:bg-white hover:text-brand transition-all shadow-lg"
                >
                  <Globe size={14} />
                  Portfolio
                </a>
              )}
            </div>
          </div>

          {/* Floating Logo - Hidden on extra small mobile */}
          <div className="absolute top-6 right-6 hidden xs:flex items-center gap-2 mix-blend-difference">
            <span className="text-[8px] font-black text-white/50 uppercase tracking-[0.3em]">Dev Crafters</span>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/40 text-[10px] font-black">
              DC
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}



// import { motion, AnimatePresence } from 'motion/react';
// import { useState } from 'react';
// import { Linkedin, Globe, ArrowRight } from 'lucide-react';
// import { cn } from '../lib/utils';

// // Keep your image imports exactly as they are
// import Amara from '../assets/images/amara.jpeg';
// import Bisma from '../assets/images/bisma.jpeg';
// import Ismail from '../assets/images/ismail.jpeg';
// import Muzammil from '../assets/images/muzammil.jpeg';
// import Rabia from '../assets/images/rabia.jpg';
// import Tahir from '../assets/images/tahir.jpeg';

// const TeamMembersData = [
//   { id: 1, name: "Rabia Fatima", role: "CEO & Founder", linkedin: "https://www.linkedin.com/in/rabia-fatima-b553b7319/", portfolio: "https://my-portfolio-nu-brown-5vvicwwewm.vercel.app/", image: Rabia, quote: "Crafting digital empires from lines of code." },
//   { id: 2, name: "Bisma Ali", role: "MERN Stack Developer", linkedin: "https://www.linkedin.com/in/bisma-ali-b522142a2/", portfolio: "#", image: Bisma, quote: "Turning complex logic into seamless interfaces." },
//   { id: 3, name: "Ammara Saleem", role: "Frontend Developer", linkedin: "https://www.linkedin.com/in/ammara-saleem-422825370/", portfolio: "#", image: Amara, quote: "Pixel-perfect precision in every dynamic view." },
//   { id: 4, name: "Syed Muzammil Sherazi", role: "Full Stack Developer", linkedin: "https://www.linkedin.com/in/muzammil-sherazi-1b9a0131b/", portfolio: "https://muzammilsherazi-portfolio.netlify.app/", image: Muzammil, quote: "Bridging the gap between robust backends and elite frontends." },
//   { id: 5, name: "M Tahir Javed", role: "Digital Marketer", linkedin: "https://www.linkedin.com/in/tahir-javed-0ab7b3360/", portfolio: "#", image: Tahir, quote: "Amplifying brand presence across the digital noise." },
//   { id: 6, name: "M Ismail Muneer", role: "Visual Editor", linkedin: "https://www.linkedin.com/in/ismail-sheikh-9926a72b6/", portfolio: "#", image: Ismail, quote: "Defining the visual aesthetic of modern brands." }
// ];

// export default function Team() {
//   // Rabia is selected by default
//   const [selectedMember, setSelectedMember] = useState(TeamMembersData[0]);

//   return (
//     <section id="team" className="relative min-h-screen py-20 px-4 md:px-10 bg-white dark:bg-[#020202] overflow-hidden">
      
//       {/* 🔮 Background Geometric Watermark (Subtle) */}
//       <div className="absolute inset-0 z-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none flex items-center justify-center">
//         <h1 className="text-[50vw] font-black text-zinc-900 dark:text-white uppercase tracking-tighter">Crafters</h1>
//       </div>

//       <div className="max-w-[1700px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
//         {/* --- 📜 LEFT: THE LIST (The Interface) --- */}
//         <div className="lg:col-span-5 space-y-16 pt-10">
//           <div className="space-y-3">
//             <motion.span 
//               initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
//               className="text-brand font-bold uppercase tracking-[0.5em] text-[11px] block"
//             >
//               The Core Rebels
//             </motion.span>
//             <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase leading-none">
//               TEAM <span className="italic text-brand">DC</span>
//             </h2>
//           </div>

//           <nav className="space-y-1">
//             {TeamMembersData.map((member) => (
//               <motion.button
//                 key={member.id}
//                 onMouseEnter={() => setSelectedMember(member)}
//                 className={cn(
//                   "flex items-center justify-between w-full p-6 rounded-2xl transition-all duration-300 text-left group",
//                   selectedMember.id === member.id 
//                     ? "bg-zinc-100 dark:bg-zinc-900 shadow-inner" 
//                     : "hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
//                 )}
//               >
//                 <div className="flex items-center gap-5">
//                   <span className={cn(
//                     "text-xl font-black italic transition-colors",
//                     selectedMember.id === member.id ? "text-brand" : "text-zinc-300 dark:text-zinc-700 group-hover:text-zinc-400"
//                   )}>
//                     0{member.id}
//                   </span>
//                   <div>
//                     <h3 className="text-xl md:text-2xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">
//                       {member.name}
//                     </h3>
//                     <p className="text-xs font-bold text-zinc-500 dark:text-zinc-500 uppercase tracking-widest mt-1">
//                       {member.role}
//                     </p>
//                   </div>
//                 </div>
//                 <ArrowRight className={cn(
//                   "transition-transform",
//                   selectedMember.id === member.id ? "translate-x-0 opacity-100 text-brand" : "-translate-x-5 opacity-0 group-hover:opacity-100 group-hover:translate-x- group-hover:text-zinc-400"
//                 )} />
//               </motion.button>
//             ))}
//           </nav>
//         </div>

//         {/* --- 🖼️ RIGHT: THE SHOWCASE ( The Art) --- */}
//         <div className="lg:col-span-7 lg:sticky lg:top-10 h-[80vh] md:h-screen lg:h-[90vh] rounded-[3rem] overflow-hidden group">
          
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={selectedMember.id}
//               initial={{ opacity: 0, scale: 1.1 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 1.05 }}
//               transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
//               className="absolute inset-0 w-full h-full"
//             >
//               <img 
//                 src={selectedMember.image} 
//                 alt={selectedMember.name} 
//                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
//               />
//               {/* Complex Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10 opacity-70" />
//               <div className="absolute inset-0 bg-brand/5 mix-blend-color" />
//             </motion.div>
//           </AnimatePresence>

//           {/* Floating Details Overlay */}
//           <div className="absolute bottom-0 left-0 right-0 p-10 md:p-16 z-20 space-y-6">
//             <AnimatePresence mode="wait">
//               <motion.p
//                 key={selectedMember.id + '_quote'}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-white text-2xl md:text-3xl font-medium leading-snug italic max-w-xl tracking-tight"
//               >
//                 “{selectedMember.quote}”
//               </motion.p>
//             </AnimatePresence>

//             {/* Premium Buttons */}
//             <div className="flex flex-wrap gap-4 pt-4">
//               <a 
//                 href={selectedMember.linkedin} target="_blank"
//                 className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all group"
//               >
//                 <Linkedin size={16} />
//                 Connect on LinkedIn
//                 <ArrowRight size={16} className="-translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
//               </a>
              
//               {selectedMember.portfolio !== "#" && (
//                 <a 
//                   href={selectedMember.portfolio} target="_blank"
//                   className="flex items-center gap-3 px-8 py-4 bg-brand rounded-full text-white text-xs font-black uppercase tracking-widest hover:bg-white hover:text-brand transition-all shadow-lg shadow-brand/20 group"
//                 >
//                   <Globe size={16} />
//                   View Portfolio
//                   <ArrowRight size={16} className="-translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
//                 </a>
//               )}
//             </div>
//           </div>

//           {/* Floating "DC" Watermark */}
//           <div className="absolute top-10 right-10 flex items-center gap-2 mix-blend-difference">
//             <span className="text-[10px] font-black text-white/50 uppercase tracking-[0.5em]">Dev Crafters</span>
//             <div className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center text-white/30 text-xs font-black">
//               DC
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }