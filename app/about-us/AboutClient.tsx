"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Shield, Target, Compass, Award, Building2, Zap, ArrowRight, Activity, Cpu, Sliders } from "lucide-react";

const fadeUpInteractive: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const valuePillars = [
  { icon: Shield, title: "Zero Defect Metric", subtitle: "Rigid Protocol", desc: "Every air distribution grille and louvre undergoes micro-tolerance inspections, completely mitigating site installation pressure drag errors." },
  { icon: Zap, title: "Autonomous Sourcing", subtitle: "UAE Ecosystem", desc: "By operating directly inside Ajman, we bypass long global supply chains, slashing standard GCC procurement windows by up to 40%." },
  { icon: Building2, title: "Architectural Symmetry", subtitle: "Bespoke Design", desc: "Our terminal networks are engineered not just as mechanical hardware, but as fluid, invisible integrations into premium spatial design." },
];

export default function AboutClient() {
  return (
    <div className="bg-[#DDF4E7] min-h-screen text-[#124170] selection:bg-[#26667F] selection:text-white overflow-hidden relative">
      
      {/* Structural Minimal Blueprint Overlay Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#12417003_1px,transparent_1px),linear-gradient(to_bottom,#12417005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      {/* 1. NEW: ULTRA-PREMIUM ASYMMETRIC HERO HEADER */}
      <section className="pt-48 pb-20 px-6 max-w-7xl mx-auto relative z-10 border-b border-[#124170]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COMMAND: Heavy Typography & Core Title */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/70 backdrop-blur-md text-[#26667F] font-mono text-[10px] font-bold uppercase tracking-[0.25em] border border-[#67C090]/20 shadow-sm"
            >
              <Activity size={12} className="animate-pulse text-[#67C090]" />
              Evolving Air Architecture Since 1986
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tight uppercase leading-[0.92] text-[#124170]"
            >
              Engineering <br />
              Without <br />
              <span className="text-[#67C090] font-light italic font-serif lowercase tracking-normal">compromise</span>.
            </motion.h1>
          </div>

          {/* RIGHT COMMAND: Floating Tech Spec Box & Descriptive Layer */}
          <div className="lg:col-span-5 space-y-6 lg:pt-14">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-slate-600 text-sm md:text-base font-light leading-relaxed tracking-wide border-l-2 border-[#67C090] pl-5"
            >
              ALUGRIDX manufactures high-precision thermodynamic terminal systems, balancing absolute geometric aesthetics with micro-calibrated airflow velocity grids for premier regional infrastructures.
            </motion.p>

            {/* Micro Calibration Data Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-5 border border-[#67C090]/20 shadow-[0_20px_40px_rgba(18,65,112,0.02)] grid grid-cols-2 gap-4 text-xs font-mono font-bold"
            >
              <div className="space-y-1">
                <span className="text-[#124170]  text-lg flex items-center gap-1.5">
                  <Cpu size={15} className="text-[#67C090]" /> Premium Products
                </span>
              </div>
              <div className="space-y-1 border-l border-slate-100 pl-4">
                <span className="text-[#124170] flex text-lg items-center gap-1.5">
                  <Sliders size={15} className="text-[#67C090]" /> Reliable Service
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 2. THE CHRONICLE OF POWER (With 10-Degree Rotating Image Framework) */}
      <section className="py-28 max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Narrative Text */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpInteractive}
            className="lg:col-span-6 space-y-6 text-left"
          >
            
            <h2 className="text-3xl md:text-5xl font-black text-[#124170] uppercase tracking-tight leading-none">
              Four Decades of Deep Domain Authority
            </h2>
            <p className="text-slate-600 font-light text-sm md:text-base leading-relaxed">
              Our narrative took root in <b>1986</b> under the institutional mantle of <b>Hashim Darwish Commission LLC</b>. For 40 years, this powerhouse governed core building supplies and technical MEP distributions across the GCC footprint.
            </p>
            <p className="text-slate-600 font-light text-sm md:text-base leading-relaxed">
              In <b>2025</b>, this immense industrial lineage evolved into an independent manufacturing ecosystem: <b>ALUGRIDX Air Conditioning Industry LLC</b>. Moving away from pure trade into automated mechanics allows us to construct high-spec grids with ultimate speed parameters.
            </p>
          </motion.div>

          {/* Right Column: 10-Degree Rotating Frame on Hover */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ rotate: -10, scale: 0.98 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 180, damping: 22 }}
              className="relative h-[440px] w-full max-w-md bg-white border-2 border-[#124170]/10 rounded-[3rem] p-4 shadow-[rgba(18,65,112,0.03)_0px_25px_50px_-12px] group"
            >
              <div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-[#124170]">
                <img 
                  src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop" 
                  alt="Modern GCC Glass Infrastructure" 
                  className="w-full h-full object-cover opacity-90 transition-transform duration-1000 ease-out group-hover:scale-103"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/800x1000/124170/ffffff?text=ALUGRIDX+Infrastructure";
                  }}
                />
              </div>

              {/* Floating Glassmorphic 40 Yrs Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white border-2 border-[#124170]/10 p-5 rounded-2xl shadow-xl max-w-[210px]">
                <Award className="text-[#67C090] mb-1.5" size={24} />
                <h3 className="text-3xl font-black tracking-tight text-[#124170]">40 Yrs</h3>
                <p className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest mt-0.5">Trust Registry</p>
                <p className="text-[11px] text-slate-500 font-light mt-1.5 leading-snug">
                  From structural supplies in 1986 to aerospace alloy frameworks in 2026.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 3. CORE MANIFESTO: MISSION & VISION */}
      <section className="py-24 bg-white relative z-10 rounded-t-[3rem] border-t border-[#67C090]/20 shadow-inner">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="bg-[#DDF4E7]/30 border-2 border-[#124170]/5 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden transition-all duration-300 hover:border-[#67C090]/40 group">
            <div className="w-12 h-12 bg-[#124170] text-[#67C090] rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#67C090] group-hover:text-white transition-colors duration-300">
              <Target size={20} />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-[#124170] mb-3">Strategic Mission</h3>
            <p className="text-slate-600 font-light text-sm md:text-base leading-relaxed">
              To blueprint, test, and dispatch superior aerodynamic terminal grids that amplify environmental performance metrics while preserving structural airflow safety parameters across complex GCC developments.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-[#DDF4E7]/30 border-2 border-[#124170]/5 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden transition-all duration-300 hover:border-[#67C090]/40 group">
            <div className="w-12 h-12 bg-[#124170] text-[#67C090] rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#67C090] group-hover:text-white transition-colors duration-300">
              <Compass size={20} />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-[#124170] mb-3">Future Vision</h3>
            <p className="text-slate-600 font-light text-sm md:text-base leading-relaxed">
              To consolidate the Middle Eastern HVAC ecosystem by establishing ALUGRIDX as the absolute premium manufacturing standard, continuously redefining criteria for material longevity and client execution.
            </p>
          </div>

        </div>
      </section>

      {/* 4. THE PILLARS OF PERFORMANCE */}
      <section className="py-28 max-w-7xl mx-auto px-6 relative z-10">
        <div className="border-b border-[#124170]/10 pb-6 mb-16 text-center md:text-left">
         
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#124170]">
            The Sovereignty Pillars
          </h2>
        </div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {valuePillars.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div 
                variants={fadeUpInteractive}
                key={i} 
                className="bg-white border-2 border-[#124170]/10 rounded-3xl p-6 md:p-8 hover:bg-[#DDF4E7]/30 hover:border-[#67C090]/40 transition-all duration-300 flex flex-col justify-between min-h-[260px]"
              >
                <div>
                  <div className="w-10 h-10 bg-[#DDF4E7] text-[#124170] rounded-lg flex items-center justify-center mb-6">
                    <Icon size={18} />
                  </div>
                  <h4 className="text-lg font-black uppercase tracking-tight text-[#124170]">{item.title}</h4>
                  <p className="text-[9px] font-mono font-bold text-[#67C090] uppercase tracking-widest mt-0.5">{item.subtitle}</p>
                  <p className="text-slate-500 font-light text-xs md:text-sm mt-4 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* 5. BRANDED CTA CONVERSION NODE */}
      <section className="px-6 max-w-7xl mx-auto mb-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-gradient-to-br from-[#26667F] to-[#124170] text-white rounded-[2.5rem] p-8 md:p-16 border border-white/10 shadow-xl relative overflow-hidden text-center"
        >
          <h3 className="text-2xl md:text-5xl font-black uppercase tracking-tight leading-none max-w-3xl mx-auto relative z-10">
            Deploy High-Fidelity Grids For Your Project Framework
          </h3>
          <p className="text-[#DDF4E7]/60 max-w-xl mx-auto mt-4 text-xs md:text-sm font-light relative z-10 leading-relaxed">
            Connect directly with our engineering department in Ajman for instant dimensional parameters, AutoCAD submittal sheets, and rapid manufacturing schedules.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4 relative z-10">
            <Link href="/products" className="bg-[#67C090] hover:bg-[#DDF4E7] text-[#124170] font-mono text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full shadow-md transition-all duration-300">
              Explore Core Components
            </Link>
            <Link href="/contact-us" className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-md text-white font-mono text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white/10 transition-colors">
              <span>Request Factory Submittal</span> <ArrowRight size={12} />
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}