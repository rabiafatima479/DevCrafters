import { motion, AnimatePresence } from 'motion/react';
import { X, BrainCircuit, MessageCircle, Bot } from 'lucide-react';
import { useState, useRef, useLayoutEffect } from 'react';

const whatsappNumber = "+923268005089";

const botData = [
  { q: "Web Pricing? ", a: "Starts from $80. We use React, Next.js & Laravel." },
  { q: "App Pricing? 📱", a: "Mobile Apps start from $150 using Flutter/React Native." },
  { q: "Delivery Time? ", a: "Web: 5-7 days. Complex Apps: 2-4 weeks." },
  { q: "SEO & Tech? ", a: "MERN, Next.js, Laravel. Basic SEO included!" },
  { q: "How to start?   ", a: "Click 'Talk to Human' or select a service above." }
];

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'bot', text: 'Hi! How can I help you today?' }]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useLayoutEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleQuestion = (item) => {
    if (isTyping) return;
    setMessages(prev => [...prev, { role: 'user', text: item.q }]);
    setIsTyping(true);

    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: item.a }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[1000] flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-[90vw] sm:w-[360px] h-[520px] bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header - Fixed Colors */}
            <div className="p-5 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-white/5 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <BrainCircuit size={20} className="text-brand animate-pulse" />
                <span className="text-zinc-900 dark:text-zinc-100 font-bold text-sm tracking-tight">DevCrafters AI</span>
              </div>
              <X 
                size={20} 
                className="text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-white cursor-pointer transition-colors" 
                onClick={() => setIsOpen(false)} 
              />
            </div>

            {/* Chat Messages Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth bg-white dark:bg-zinc-950">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[85%] p-3.5 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                    msg.role === 'bot' 
                    ? 'bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200/50 dark:border-white/5' 
                    : 'bg-brand text-zinc-900 font-bold border border-black/5'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-2 ml-1">
                   <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-brand rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-brand rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 bg-brand rounded-full animate-bounce [animation-delay:0.4s]" />
                   </div>
                </div>
              )}
            </div>

            {/* Bottom Actions - Quick Buttons */}
            <div className="p-4 border-t border-zinc-100 dark:border-white/5 bg-zinc-50 dark:bg-zinc-900/50 shrink-0">
              <div className="flex flex-wrap gap-2 mb-4 justify-start">
                {botData.map((item, idx) => (
                  <button 
                    key={idx}
                    onClick={() => handleQuestion(item)}
                    disabled={isTyping}
                    className="text-[11px] px-3 py-2 rounded-xl border border-zinc-300 dark:border-white/10 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-brand hover:text-brand transition-all duration-200 font-semibold active:scale-95"
                  >
                    {item.q}
                  </button>
                ))}
              </div>
              
              {/* Talk to Human Button */}
              <button 
                onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
                className="w-full py-3.5 bg-zinc-900 dark:bg-brand text-white dark:text-zinc-900 rounded-2xl font-black text-[11px] uppercase tracking-[0.15em] flex items-center justify-center gap-3 shadow-lg hover:shadow-brand/20 transition-all active:scale-[0.98]"
              >
                <MessageCircle size={18} /> Talk to Human
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Buttons */}
      <div className="flex flex-col items-end gap-3">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className={`h-14 px-6 rounded-2xl shadow-2xl flex items-center gap-3 transition-all duration-300 ${
            isOpen 
            ? 'bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white' 
            : 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900'
          }`}
        >
          {isOpen ? <X size={20} /> : <BrainCircuit size={22} className="text-brand" />}
          <span className="text-[11px] font-black uppercase tracking-widest hidden xs:block">
            {isOpen ? 'Close' : 'AI Assistant'}
          </span>
        </motion.button>

        {!isOpen && (
          <motion.a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-14 h-14 bg-[#25D366] rounded-2xl flex items-center justify-center text-white shadow-xl hover:shadow-[#25D366]/30 transition-all"
          >
            <MessageCircle size={30} fill="white" />
          </motion.a>
        )}
      </div>
    </div>
  );
}