"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, ArrowUpRight, ShieldCheck, FileText, Sparkles, LayoutGrid } from "lucide-react";

export default function CatalogueClient() {
  const [formData, setFormData] = useState({ email: "", phone: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-[#DDF4E7] min-h-screen pt-36 pb-24 overflow-hidden relative text-[#124170]">
      
      {/* ARCHITECTURAL BACKGROUND GRAPH GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#12417004_1px,transparent_1px),linear-gradient(to_bottom,#12417006_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#67C090]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* STRUCTURAL HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#124170]/10 pb-8 gap-6">
          <div className="space-y-2 max-w-xl text-left">
            <span className="inline-flex items-center gap-2 py-1 px-3 rounded-md bg-[#124170]/5 font-mono text-[9px] font-bold uppercase tracking-widest border border-[#124170]/10">
              <Sparkles size={10} className="text-[#67C090]" />
              Engineering Release v2.6
            </span>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              Technical <span className="font-light italic font-serif text-[#67C090] lowercase tracking-normal">Vault</span>.
            </h1>
          </div>
          
        </div>

        {/* ASYMMETRIC GRID STRUCTURAL LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* 1. HERO MAIN BOOK BLOCK (Stretched to fit height and eliminate empty space) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-[2.5rem] p-10 border-2 border-[#124170]/10 shadow-[rgba(18,65,112,0.02)_0px_20px_40px] relative overflow-hidden group min-h-[500px]">
            <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-[#67C090]/15 to-transparent rounded-bl-full pointer-events-none" />
            
            <div className="space-y-4 relative z-10">
              <span className="text-[9px] font-mono font-bold tracking-widest text-[#26667F] bg-[#DDF4E7] px-2.5 py-1 rounded border border-[#67C090]/10 uppercase">
                Core Submittal
              </span>
              <h3 className="text-4xl font-black uppercase tracking-tight leading-none pt-2">
                ALUGRIDX <br />Master Book
              </h3>
              <p className="text-xs text-slate-500 font-light max-w-xs leading-relaxed">
                Unified architectural reference manual complete with dynamic performance nodes for GCC consultants.
              </p>
            </div>

            {/* EXPANDED 3D FLOATING BOOK SHOWCASE (Fills the upper and bottom whitespace perfectly) */}
            <div className="h-64 flex items-center justify-center mt-6 mb-4 relative z-10">
              {/* Back Pages Shadow Layers */}
              <div className="absolute w-40 h-52 bg-slate-200/60 rounded-2xl transform rotate-12 translate-x-8 border border-slate-300/30 shadow-sm transition-transform duration-500 group-hover:rotate-6" />
              <div className="absolute w-40 h-52 bg-slate-100 rounded-2xl transform -rotate-3 translate-x-4 border border-slate-200 shadow-md transition-transform duration-500 group-hover:rotate-[-1deg]" />
              
              {/* Main Extended 3D Book Cover */}
              <motion.div 
                whileHover={{ y: -10, rotate: -6 }}
                className="absolute w-40 h-52 bg-gradient-to-br from-[#26667F] to-[#124170] rounded-2xl shadow-[0_30px_60px_rgba(18,65,112,0.25)] border border-white/10 flex flex-col justify-between p-5 transition-transform duration-500 ease-out cursor-pointer origin-bottom"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 p-1.5 shadow-inner">
                  <img src="/images/alugridx-without-bg-1.webp" alt="AX" className="w-full h-full object-contain filter brightness-200 grayscale" />
                </div>
                <div className="text-[10px] font-mono font-bold text-white tracking-[3px] uppercase leading-tight">
                  MATRIX <br /><span className="text-[#67C090] text-[8px] tracking-widest font-light">2026 RELEASE</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* 2. BENTO TECH SPECIFICATION MATRIX & FORM BLOCK */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* UPPER BENTO CARD: SYSTEM PARAMETERS */}
            <div className="bg-white/50 backdrop-blur-md rounded-[2.5rem] p-8 border-2 border-[#124170]/5 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#26667F] uppercase tracking-wider">
                <LayoutGrid size={14} className="text-[#67C090]" />
                <span>Structured Architectural Grid Elements</span>
              </div>
              
              <div className="flex flex-wrap gap-2.5 pt-2">
                {[
                  "Ceiling Diffusers (SAD/RAD)", 
                  "Linear Slot Arrays (LSD Matrix)", 
                  "Return Louver Registers", 
                  "Linear Bar Profiles", 
                  "Sand Trap Weather Hoods", 
                  "Volume Control Dampers (VCD)", 
                  "Mechanical NRD Nodes",
                  "AutoCAD DWG Integration Blocks"
                ].map((tag, i) => (
                  <span 
                    key={i} 
                    className="text-[11px] font-medium bg-white border border-[#124170]/10 px-3.5 py-2 rounded-xl shadow-[rgba(18,65,112,0.01)_0px_4px_12px] flex items-center gap-2 hover:border-[#67C090]/50 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#67C090]" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* LOWER INTAKE FORM CONSOLE CARD */}
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div 
                  key="form-console" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.98 }}
                  className="bg-white rounded-[2.5rem] p-8 md:p-10 border-2 border-[#124170]/10 shadow-[rgba(18,65,112,0.03)_0px_30px_60px_-15px] relative flex flex-col justify-between grow"
                >
                  <div className="space-y-1">
                    <h3 className="text-xl font-black uppercase tracking-tight">Data Submittal Request</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                    {/* EMAIL INPUT */}
                    <div className="space-y-1.5 relative">
                      <label className={`text-[9px] font-mono font-bold uppercase tracking-wider block transition-colors ${focusedField === "email" ? "text-[#67C090]" : "text-slate-400"}`}>Corporate Email Link</label>
                      <div className="relative">
                        <input 
                          type="email" required value={formData.email} onFocus={() => setFocusedField("email")} onBlur={() => setFocusedField(null)}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                          className="w-full bg-transparent border-b-2 border-slate-100 pl-8 py-2 text-xs font-mono text-[#124170] focus:outline-none focus:border-[#124170] transition-colors placeholder-slate-300" 
                          placeholder="name@company.com" 
                        />
                        <Mail size={12} className="absolute left-0 top-2.5 text-slate-400" />
                      </div>
                      {focusedField === "email" && <motion.div layoutId="consoleGlow" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#67C090] shadow-[0_2px_8px_#67C090]" />}
                    </div>

                    {/* PHONE INPUT */}
                    <div className="space-y-1.5 relative">
                      <label className={`text-[9px] font-mono font-bold uppercase tracking-wider block transition-colors ${focusedField === "phone" ? "text-[#67C090]" : "text-slate-400"}`}>Telecom Router Link</label>
                      <div className="relative">
                        <input 
                          type="tel" required value={formData.phone} onFocus={() => setFocusedField("phone")} onBlur={() => setFocusedField(null)}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                          className="w-full bg-transparent border-b-2 border-slate-100 pl-8 py-2 text-xs font-mono text-[#124170] focus:outline-none focus:border-[#124170] transition-colors placeholder-slate-300" 
                          placeholder="+971 50 000 0000" 
                        />
                        <Phone size={12} className="absolute left-0 top-2.5 text-slate-400" />
                      </div>
                      {focusedField === "phone" && <motion.div layoutId="consoleGlow" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#67C090] shadow-[0_2px_8px_#67C090]" />}
                    </div>

                    {/* ACTION BUTTON PILL */}
                    <div className="md:col-span-2 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-slate-100 mt-4 gap-4">
                      <p className="text-[10px] text-slate-400 font-light max-w-xs leading-tight">Docs are securely dispatched by the technical department inside a short automated window.</p>
                      <button 
                        type="submit" 
                        className="group bg-[#124170] hover:bg-[#67C090] text-white px-7 py-4 rounded-full text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2 shrink-0 w-full sm:w-auto justify-center"
                      >
                        <span>Dispatch Bundle</span> 
                        <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                /* SUCCESS CONSOLE PLATFORM */
                <motion.div 
                  key="success-console" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
                  className="bg-white border-2 border-[#124170]/10 p-8 rounded-[2.5rem] text-center shadow-[rgba(18,65,112,0.02)_0px_20px_40px] flex flex-col items-center justify-center grow min-h-[300px]"
                >
                  <div className="w-12 h-12 bg-[#DDF4E7] text-[#124170] rounded-full flex items-center justify-center mb-4 border border-[#67C090]/20 shadow-sm">
                    <ShieldCheck size={22} className="text-[#67C090]" />
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-tight">Request Logged Safely</h3>
                  <p className="text-slate-500 font-light text-xs mt-2 max-w-md leading-relaxed">
                    The complete <span className="text-[#26667F] font-bold font-mono">ALUGRIDX 2026 Master Technical Grid</span> is scheduled for transmission to <span className="text-[#124170] font-bold font-mono break-all">{formData.email}</span> within a brief index window.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}