"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Activity } from "lucide-react";

const infoCards = [
  { icon: Phone, title: "Direct Line", value: "+971 58 552 1251", sub: "Available for urgent WhatsApp queries" },
  { icon: Mail, title: "Enterprise Email", value: "info@alugridx.com", sub: "Technical submittals & RFQs" },
  { icon: MapPin, title: "Manufacturing Plant", value: "Warehouse 16, Al Jurf 3", sub: "Behind China Mall, Ajman, UAE" },
  { icon: Clock, title: "Plant Operations", value: "Sat – Thu: 8:00 AM – 6:00 PM", sub: "Friday: Closed" },
];

export default function ContactClient() {
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", company: "", msg: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-[#DDF4E7] min-h-screen pt-32 pb-24 overflow-hidden relative text-[#124170]">
      
      {/* BACKGROUND ENGINEERING GRID DESIGN */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#12417003_1px,transparent_1px),linear-gradient(to_bottom,#12417005_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-10">
        
        {/* REFINED HEADER SECTION */}
        <div className="border-b border-[#124170]/10 pb-6 text-center md:text-left">
          <motion.span 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/70 backdrop-blur-md text-[#26667F] font-mono text-[10px] font-bold uppercase tracking-[0.25em] border border-[#67C090]/20 shadow-sm mb-4"
          >
            <Activity size={12} className="animate-pulse text-[#67C090]" />
            Global Network Channels
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#124170] leading-tight"
          >
            Request Quotation Matrix
          </motion.h1>
          <p className="text-slate-600 text-sm font-light mt-1">
            Connect directly with our Ajman factory desk for instant dimensional parameters and rapid estimations.
          </p>
        </div>

        {/* MAIN SPLIT GRID CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT SIDE: HQ INFO CARDS & LIVE MAP */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    whileHover={{ y: -6, shadow: "0px 20px 30px -10px rgba(18, 65, 112, 0.08)" }}
                    key={i}
                    className="bg-white border-2 border-[#124170]/10 p-5 rounded-3xl relative overflow-hidden transition-all duration-300 group hover:border-[#67C090]/40"
                  >
                    <div className="w-9 h-9 bg-[#DDF4E7] text-[#124170] rounded-xl flex items-center justify-center mb-4 transition-colors group-hover:bg-[#124170] group-hover:text-white">
                      <Icon size={16} />
                    </div>
                    <h4 className="text-xs font-mono font-bold uppercase text-[#26667F] tracking-wider">{card.title}</h4>
                    <p className="text-sm font-black text-[#124170] mt-1.5 break-words uppercase tracking-tight">{card.value}</p>
                    <p className="text-[11px] text-slate-500 font-light mt-1 leading-snug">{card.sub}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* LIVE INTERACTIVE GOOGLE MAP WITH BOUNDARY FRAME */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full h-72 bg-white rounded-[2.5rem] border-2 border-[#124170]/10 overflow-hidden relative shadow-[rgba(18,65,112,0.02)_0px_20px_25px_-5px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.161311651613!2d55.532490278468586!3d25.4328699642771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f9703e678ac1%3A0xe5b0511d109a6034!2sAlugridx%20Air%20Conditioning%20Industry%20LLC!5e0!3m2!1sen!2sus!4v1780752331705!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
              ></iframe>
            </motion.div>
          </div>

          {/* RIGHT SIDE: PREMIUM SOLID BOX CONTACT FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 md:p-10 border-2 border-[#124170]/10 shadow-[rgba(18,65,112,0.03)_0px_30px_60px_-15px] relative"
          >
            <div className="mb-8 space-y-1">
              <h3 className="text-xl font-black uppercase tracking-tight text-[#124170]">Technical Submittals Request</h3>
              <p className="text-slate-500 text-xs font-light">Fill the architectural parameter nodes below. Estimation desks respond inside a 2-hour window.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Full Name *</label>
                  <input 
                    type="text" required value={formState.name} onChange={(e)=>setFormState({...formState, name: e.target.value})}
                    className="w-full bg-[#DDF4E7]/20 border border-[#67C090]/10 rounded-xl px-4 py-3 text-xs font-mono text-[#124170] placeholder-slate-400 focus:outline-none focus:border-[#124170]" 
                    placeholder="e.g. John Doe"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Corporate Email *</label>
                  <input 
                    type="email" required value={formState.email} onChange={(e)=>setFormState({...formState, email: e.target.value})}
                    className="w-full bg-[#DDF4E7]/20 border border-[#67C090]/10 rounded-xl px-4 py-3 text-xs font-mono text-[#124170] placeholder-slate-400 focus:outline-none focus:border-[#124170]" 
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Phone Link *</label>
                  <input 
                    type="tel" required value={formState.phone} onChange={(e)=>setFormState({...formState, phone: e.target.value})}
                    className="w-full bg-[#DDF4E7]/20 border border-[#67C090]/10 rounded-xl px-4 py-3 text-xs font-mono text-[#124170] placeholder-slate-400 focus:outline-none focus:border-[#124170]" 
                    placeholder="+971 50 000 0000"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Company Identity</label>
                  <input 
                    type="text" value={formState.company} onChange={(e)=>setFormState({...formState, company: e.target.value})}
                    className="w-full bg-[#DDF4E7]/20 border border-[#67C090]/10 rounded-xl px-4 py-3 text-xs font-mono text-[#124170] placeholder-slate-400 focus:outline-none focus:border-[#124170]" 
                    placeholder="e.g. Arabtec Construction"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Project Scope / RFQ Requirements *</label>
                <textarea 
                  rows={4} required value={formState.msg} onChange={(e)=>setFormState({...formState, msg: e.target.value})}
                  className="w-full bg-[#DDF4E7]/20 border border-[#67C090]/10 rounded-xl px-4 py-3 text-xs text-slate-600 focus:outline-none focus:border-[#124170] resize-none" 
                  placeholder="Describe your required grille, diffuser, or volume damper sizes and specific count matrices..."
                />
              </div>

              {/* ACTION ACTUATOR BUTTON */}
              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full bg-[#124170] hover:bg-[#67C090] text-white font-mono text-xs font-bold uppercase tracking-widest py-4 rounded-full transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <span>Dispatch Request Submittal</span>
                <Send size={13} />
              </motion.button>

              {/* SUCCESS POPUP TRANSMISSION OVERLAY */}
              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center gap-3 text-emerald-700 text-xs font-mono font-bold uppercase tracking-wide"
                >
                  <CheckCircle size={16} className="text-emerald-600 shrink-0" />
                  <span>[ Core Update: Transmission Successful. Submittal parameters locked. ]</span>
                </motion.div>
              )}

            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}