"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, FileText, Send, CheckCircle, Clock, Tag, Heading, Key, ArrowUpRight, Monitor, LayoutGrid, Terminal } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function BlogAdmin() {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    category: "",
    excerpt: "",
    content: "",
    readTime: "5 min read",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const submitBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/api/blogs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setForm({ title: "", slug: "", category: "", excerpt: "", content: "", readTime: "5 min read" });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (err) {
      console.error("Transmission crash:", err);
    }
  };

  return (
    <div className="bg-[#DDF4E7] min-h-screen pt-36 pb-24 relative overflow-hidden text-[#124170]">
      {/* Engineering Mesh Background Scheme */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#12417003_1px,transparent_1px),linear-gradient(to_bottom,#12417005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-12">
        
        {/* STRUCTURAL DASHBOARD CONTROL HEAD */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#124170]/10 pb-6 gap-4">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded bg-[#124170]/5 font-mono text-[9px] font-bold uppercase tracking-widest border border-[#124170]/10">
              <Terminal size={10} className="text-[#67C090]" />
              Core Node Operational Panel
            </span>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#124170]">
              Publishing Matrix
            </h1>
          </div>
          <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider max-w-xs md:text-right leading-relaxed">
            // Injecting architectural specifications and thermodynamics documentation.
          </p>
        </div>

        {/* HIGH-END ASYMMETRIC COMMAND CONSOLE GRIDS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COMMAND NODE: ADVANCED BENTO CARD FORMS (Takes 7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            <form onSubmit={submitBlog} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* COMPONENT 1: MASTER TITLE CONSOLE CARD (Full Width across form) */}
              <div className="md:col-span-2 bg-white border-2 border-[#124170]/10 p-6 rounded-[2rem] shadow-[rgba(18,65,112,0.01)_0px_10px_20px] relative transition-all duration-300 hover:border-[#67C090]/30 group">
                <label className={`text-[9px] font-mono font-bold uppercase tracking-wider block transition-colors ${focusedField === "title" ? "text-[#67C090]" : "text-slate-400"}`}>Document Header / Title Input *</label>
                <div className="relative mt-2">
                  <input 
                    type="text" required value={form.title} onFocus={() => setFocusedField("title")} onBlur={() => setFocusedField(null)}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-slate-100 pl-8 py-2 text-sm font-mono text-[#124170] focus:outline-none focus:border-[#124170] transition-colors font-bold uppercase placeholder-slate-300" 
                    placeholder="e.g., CONTINUOUS VELOCITY SLOTS ARRAY SPECIFICATIONS"
                  />
                  <Heading size={13} className="absolute left-0 top-2 text-slate-400" />
                </div>
                {focusedField === "title" && <motion.div layoutId="formGlow" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#67C090] shadow-[0_2px_10px_#67C090]" />}
              </div>

              {/* COMPONENT 2: ROUTER HASH HATCH CARD */}
              <div className="bg-white border-2 border-[#124170]/10 p-6 rounded-[2rem] shadow-sm relative transition-all duration-300 hover:border-[#67C090]/30">
                <label className={`text-[9px] font-mono font-bold uppercase tracking-wider block transition-colors ${focusedField === "slug" ? "text-[#67C090]" : "text-slate-400"}`}>URL Slug Reference Hash *</label>
                <div className="relative mt-2">
                  <input 
                    type="text" required value={form.slug} onFocus={() => setFocusedField("slug")} onBlur={() => setFocusedField(null)}
                    onChange={(e) => setForm({ ...form, slug: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-slate-100 pl-8 py-2 text-xs font-mono text-[#124170] focus:outline-none focus:border-[#124170] transition-colors placeholder-slate-300" 
                    placeholder="slot-diffuser-velocity-matrix"
                  />
                  <Key size={13} className="absolute left-0 top-2.5 text-slate-400" />
                </div>
                {focusedField === "slug" && <motion.div layoutId="formGlow" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#67C090] shadow-[0_2px_10px_#67C090]" />}
              </div>

              {/* COMPONENT 3: ARCHITECTURAL CATEGORY GROUP CARD */}
              <div className="bg-white border-2 border-[#124170]/10 p-6 rounded-[2rem] shadow-sm relative transition-all duration-300 hover:border-[#67C090]/30">
                <label className={`text-[9px] font-mono font-bold uppercase tracking-wider block transition-colors ${focusedField === "category" ? "text-[#67C090]" : "text-slate-400"}`}>Classification Core Group *</label>
                <div className="relative mt-2">
                  <input 
                    type="text" required value={form.category} onFocus={() => setFocusedField("category")} onBlur={() => setFocusedField(null)}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-slate-100 pl-8 py-2 text-xs font-mono text-[#124170] focus:outline-none focus:border-[#124170] transition-colors placeholder-slate-300" 
                    placeholder="HVAC Manufacturing"
                  />
                  <Tag size={13} className="absolute left-0 top-2.5 text-slate-400" />
                </div>
                {focusedField === "category" && <motion.div layoutId="formGlow" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#67C090] shadow-[0_2px_10px_#67C090]" />}
              </div>

              {/* COMPONENT 4: READ TIMING CARD (Full Width across form) */}
              <div className="md:col-span-2 bg-white border-2 border-[#124170]/10 p-6 rounded-[2rem] shadow-sm relative transition-all duration-300 hover:border-[#67C090]/30">
                <label className={`text-[9px] font-mono font-bold uppercase tracking-wider block transition-colors ${focusedField === "readTime" ? "text-[#67C090]" : "text-slate-400"}`}>Calculated Reading Matrix Time</label>
                <div className="relative mt-2">
                  <input 
                    type="text" value={form.readTime} onFocus={() => setFocusedField("readTime")} onBlur={() => setFocusedField(null)}
                    onChange={(e) => setForm({ ...form, readTime: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-slate-100 pl-8 py-2 text-xs font-mono text-[#124170] focus:outline-none focus:border-[#124170] transition-colors" 
                    placeholder="5 min read"
                  />
                  <Clock size={13} className="absolute left-0 top-2.5 text-slate-400" />
                </div>
                {focusedField === "readTime" && <motion.div layoutId="formGlow" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#67C090] shadow-[0_2px_10px_#67C090]" />}
              </div>

              {/* COMPONENT 5: ABSTRACT ABSTRACT CONSOLE PANEL */}
              <div className="md:col-span-2 bg-white border-2 border-[#124170]/10 p-6 rounded-[2rem] shadow-sm space-y-2">
                <label className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400 block">Abstract Summary Excerpt Node *</label>
                <textarea 
                  rows={2} required value={form.excerpt}
                  onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                  className="w-full bg-[#DDF4E7]/20 border border-[#124170]/10 rounded-2xl p-3 text-xs text-slate-600 focus:outline-none focus:border-[#124170] resize-none leading-relaxed" 
                  placeholder="Provide a condensed conceptual node breakdown for search arrays..."
                />
              </div>

              {/* COMPONENT 6: COMPREHENSIVE TEXT ENGINE PANEL */}
              <div className="md:col-span-2 bg-white border-2 border-[#124170]/10 p-6 rounded-[2rem] shadow-sm space-y-2">
                <label className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400 block">Core Body Specifications Data Block *</label>
                <textarea 
                  rows={12} required value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  className="w-full bg-[#DDF4E7]/20 border border-[#124170]/10 rounded-2xl p-4 text-xs font-mono text-slate-700 focus:outline-none focus:border-[#124170] resize-none leading-relaxed" 
                  placeholder="Paste comprehensive engineering documentation blocks and specifications matrices here..."
                />
              </div>

              {/* FORM SYSTEM EMISSION SWITCHES */}
              <div className="md:col-span-2 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-200/60 mt-2">
                <p className="text-[10px] text-slate-400 font-light max-w-xs leading-normal">Deploying parameters will instantly synchronize this log across global cdn distribution nodes.</p>
                <button 
                  type="submit"
                  className="group bg-[#124170] hover:bg-[#67C090] text-white px-8 py-4 rounded-full text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 shadow-md w-full sm:w-auto justify-center"
                >
                  <span>Deploy Data Node</span>
                  <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>

              {isSubmitted && (
                <div className="md:col-span-2 bg-white border-2 border-[#67C090] rounded-2xl p-4 flex items-center gap-3 text-[#124170] text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
                  <CheckCircle size={15} className="text-[#67C090] shrink-0" />
                  <span>[ Operational Secure Alert: Document Injected Safely into Main Grid Pipeline ]</span>
                </div>
              )}

            </form>
          </div>

          {/* RIGHT COMMAND NODE: STICKY ASYMMETRIC LIVE ARTWORK LAYOUT (Takes 5 Columns) */}
          <div className="lg:col-span-5 sticky top-32 space-y-4">
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-[#26667F] uppercase tracking-widest px-1">
              <Monitor size={14} className="text-[#67C090]" />
              <span>Real-Time Production Output</span>
            </div>

            {/* Simulated Live Architectural Premium Blog Card Component */}
            <div className="bg-white border-2 border-[#124170]/10 rounded-[2rem] rounded-tr-[4.5rem] p-7 flex flex-col justify-between h-[380px] relative overflow-hidden shadow-[rgba(18,65,112,0.02)_0px_25px_50px_-12px]">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(#12417008_1px,transparent_1px)] bg-[size:10px_10px] rounded-tr-[4.5rem] pointer-events-none" />
              
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[9px] font-mono font-bold bg-[#DDF4E7] text-[#26667F] uppercase tracking-wider border border-[#67C090]/10">
                    <Tag size={10} className="text-[#67C090]" />
                    {form.category || "Classification Category"}
                  </span>
                  <div className="flex items-center gap-1 text-slate-400 font-mono text-[10px] font-bold uppercase">
                    <Clock size={11} className="text-[#67C090]" />
                    <span>{form.readTime || "5 Min"}</span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest font-bold block">
                    {new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                  </span>
                  <h2 className="text-xl font-black text-[#124170] uppercase tracking-tight leading-[1.2] line-clamp-2">
                    {form.title || "AWAITING CORE ENTRY PARAMETERS..."}
                  </h2>
                  <p className="text-slate-500 font-light text-xs leading-relaxed line-clamp-3 pt-1">
                    {form.excerpt || "The abstract structural documentation markdown excerpt node will instantly mount inside this visual workspace layout as data fields are altered..."}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono uppercase tracking-wider font-bold text-slate-400">
                <span>Node: AX-DESK</span>
                <span className="text-[#124170] flex items-center gap-1">
                  <span>Examine</span>
                  <ArrowUpRight size={12} />
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}