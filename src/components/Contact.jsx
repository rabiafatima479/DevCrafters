import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// Image import (ensure the path is correct in your project)
import bgImage from "../assets/images/1.jpg";

export default function Contact() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS Integration
    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY'
    emailjs
      .sendForm(
        "service_duqtuwr",
        "template_63cyfro",
        formRef.current,
        "5Ts8AgeWY8p_H1hY4",
      )
      .then(
        () => {
          setStatus("success");
          setIsSubmitting(false);
          formRef.current.reset();
          setTimeout(() => setStatus(""), 5000);
        },
        (error) => {
          console.log(error.text);
          setStatus("error");
          setIsSubmitting(false);
        },
      );
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 overflow-hidden min-h-screen flex items-center"
    >
      {/* --- 🖼️ BACKGROUND GRAPHICS & IMAGE --- */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* --- LEFT SIDE: INFO --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <p className="text-brand font-black uppercase tracking-[0.3em] text-xs mb-4">
              Contact Us
            </p>
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">
              Ready to start your <br />
              <span className="text-brand">Next Project?</span>
            </h2>

            <div className="space-y-8">
              {[
                {
                  icon: <Mail size={24} />,
                  label: "Email",
                  value: "devcrafter.tech@gmail.com",
                  href: "mailto:devcrafter.tech@gmail.com",
                },
                {
                  icon: <Phone size={24} />,
                  label: "Phone",
                  value: "+92 326 8005089",
                  href: "tel:+923268005089",
                },
                {
                  icon: <MapPin size={24} />,
                  label: "Office",
                  value: "Karachi, Pakistan",
                  href: "#",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex gap-5 items-center group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-brand border border-white/10 group-hover:bg-brand group-hover:text-white transition-all duration-300 shadow-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                      {item.label}
                    </h4>
                    <p className="text-lg font-black tracking-tight">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="mt-12 flex gap-4">
              {[
                {
                  icon: <Linkedin size={20} />,
                  href: "https://www.linkedin.com/in/rabia-fatima-b553b7319/",
                },
                {
                  icon: <Facebook size={20} />,
                  href: "https://www.facebook.com/profile.php?id=61583448407839",
                },
                {
                  icon: <Instagram size={20} />,
                  href: "https://www.instagram.com/devcraftes.tech/",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-brand transition-all shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: GLASSMORPHISM FORM --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Ambient light effect behind form */}
            <div className="absolute -inset-4 bg-brand/20 rounded-[3rem] blur-3xl opacity-30 pointer-events-none" />

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">
                    Full Name
                  </label>
                  <input
                    name="user_name"
                    required
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all placeholder:text-zinc-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">
                    Email Address
                  </label>
                  <input
                    name="user_email"
                    required
                    type="email"
                    placeholder="email@example.com"
                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all placeholder:text-zinc-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Tell us about your project idea..."
                  className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all resize-none placeholder:text-zinc-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 rounded-2xl bg-brand text-white font-black text-sm uppercase tracking-[0.2em] shadow-lg shadow-brand/20 hover:shadow-brand/40 transition-all flex items-center justify-center gap-3 group disabled:opacity-50"
              >
                {isSubmitting
                  ? "Sending..."
                  : status === "success"
                    ? "Message Sent!"
                    : "Send Message"}
                {!isSubmitting && status !== "success" && (
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                )}
              </button>

              {status === "error" && (
                <p className="text-red-400 text-xs text-center font-bold">
                  Kuch galat hua. Please try again!
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
