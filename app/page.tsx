"use client";
import { useState } from "react";
import { motion, Variants, animate } from "framer-motion";
import Link from "next/link";
import { ArrowRight, HardHat, Zap, Layers, Activity, Plus, ChevronRight } from "lucide-react";
import Hero from "@/components/site/Hero";
import SlidingMarquee from "@/components/site/SlidingMarquee";

const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  return (
    <motion.span
      onViewportEnter={() => {
        const controls = animate(0, value, {
          duration: 1.5,
          ease: "easeOut",
          onUpdate: (latest) => setCount(Math.floor(latest)),
        });
        return () => controls.stop();
      }}
    >
      {count}
    </motion.span>
  );
}

const categories = [
  { name: "Ceiling Diffusers", code: "SAD / RAD Series", desc: "Engineered for optimal omnidirectional air distribution with whisper-quiet acoustics." },
  { name: "Linear Slot Diffusers", code: "SLSD / RLSD Series", desc: "Architectural linear profiles delivering high-capacity fluid airflow design." },
  { name: "Supply Air Grilles", code: "SAG Series", desc: "Precision double-deflection blades optimized for mechanical directional throw control." },
  { name: "Return Air Grilles", code: "RAG Series", desc: "High-free-area grilles built for high volume exhaust with zero pressure drag." },
  { name: "Linear Bar Grilles", code: "SLBR Series", desc: "Heavy-duty extruded aluminum profiles ideal for premium floor and sidewall integrations." },
  { name: "Louvers", code: "Exhaust & Sand Trap", desc: "High-efficiency weather protection keeping intake systems free of desert sand and rain." },
  { name: "Volume Control Dampers", code: "VCD Series", desc: "Aerofoil opposing blades crafted for microscopic air volume and pressure balance." },
  { name: "Non Return Dampers", code: "NRD Series", desc: "Pressure-operated backdraft shutters engineered for automated single-direction flow." },
];

const features = [
  { title: "6063-T6 Extrusions", desc: "Premium grade alloy foundations crafted for high structural rigidity and corrosion prevention.", icon: Layers },
  { title: "Flow Calibrations", desc: "Components micro-machined to ensure total conformance with global ASHRAE airflow rules.", icon: Activity },
  { title: "GCC Logistics Node", desc: "Direct manufacturing dispatch loops providing bulk distribution across regional fields.", icon: Zap },
  { title: "Engineering Desk", desc: "Dedicated specialists executing blueprint checks from early stages down to site testing.", icon: HardHat },
];

const applications = [
  { title: "Commercial Architecture", count: "120+" },
  { title: "Residential Towers", count: "85+" },
  { title: "Hospitality Frameworks", count: "40+" },
  { title: "Sterile Clinical Environments", count: "65+" },
  { title: "Industrial Complexes", count: "50+" },
  { title: "Infrastructure Hubs", count: "30+" },
  { title: "Aviation Terminals", count: "15+" },
  { title: "High-Traffic Retail", count: "70+" },
];

export default function Home() {
  return (
    <div className="bg-[#DDF4E7] min-h-screen text-[#124170] selection:bg-[#26667F] selection:text-white overflow-hidden relative">
      
      {/* Structural Minimal Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#12417005_1px,transparent_1px),linear-gradient(to_bottom,#12417005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      {/* Hero Component */}
      <Hero />

      {/* --- SECTION 2: HARDWARE INDEX (MASSIVE IMAGE + BOTTOM ANCHORED TEXT) --- */}
      <section className="py-36 px-6 max-w-7xl mx-auto relative z-10">
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={sectionReveal}
          className="border-b border-[#124170]/10 pb-12 mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#124170]">Hardware Index</h2>
          </div>
          
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="w-full h-[480px] [perspective:1200px] group cursor-pointer"
            >
              {/* THE 3D CARD CONTAINER */}
              <div 
                className="w-full h-full rounded-[40px] bg-gradient-to-br from-[#26667F] to-[#124170] relative transition-all duration-700 ease-in-out [transform-style:preserve-3d] shadow-[0_25px_25px_-5px_rgba(18,65,112,0.2)] group-hover:[transform:rotate3d(1,-1,0,22deg)] group-hover:shadow-[30px_50px_25px_-40px_rgba(18,65,112,0.3),0_25px_30px_0_rgba(18,65,112,0.15)]"
              >
                
                {/* FLOATING 3D CIRCLE LAYERS */}
                <div className="absolute left-0 top-0 [transform-style:preserve-3d] z-30">
                  <span className="absolute block aspect-square rounded-full top-[12px] left-[12px] bg-white/5 shadow-[10px_10px_20px_0_rgba(0,0,0,0.02)] w-[260px] [transform:translate3d(0,0,25px)] transition-all duration-600 ease-in-out" />
                  <span className="absolute block aspect-square rounded-full top-[14px] left-[14px] bg-white/10 shadow-[10px_10px_20px_0_rgba(0,0,0,0.02)] w-[220px] [transform:translate3d(0,0,45px)] transition-all duration-600 ease-in-out delay-75 group-hover:[transform:translate3d(0,0,65px)]" />
                  <span className="absolute block aspect-square rounded-full top-[16px] left-[16px] bg-white/15 shadow-[10px_10px_20px_0_rgba(0,0,0,0.02)] w-[190px] [transform:translate3d(0,0,65px)] transition-all duration-600 ease-in-out delay-150 group-hover:[transform:translate3d(0,0,85px)]" />
                  <span className="absolute block aspect-square rounded-full top-[20px] left-[20px] bg-white/20 shadow-[10px_10px_20px_0_rgba(0,0,0,0.02)] w-[170px] [transform:translate3d(0,0,85px)] transition-all duration-600 ease-in-out delay-225 group-hover:[transform:translate3d(0,0,105px)]" />
                  
                  {/* ULTRA MASSIVE IMAGE FRAME */}
                  <span className="absolute aspect-square rounded-full top-[24px] left-[24px] bg-[#DDF4E7] shadow-[10px_10px_25px_0_rgba(18,65,112,0.3)] w-[160px] [transform:translate3d(0,0,105px)] transition-all duration-600 ease-in-out delay-300 group-hover:[transform:translate3d(0,0,140px)] grid place-content-center p-4 overflow-hidden border border-white/30">
                    <img
                      src={`/images/products/${cat.name.toLowerCase().replace(/\s+/g, "-")}.avif`}
                      alt={cat.name}
                      className="max-h-full max-w-full object-contain mix-blend-multiply scale-110"
                    />
                  </span>
                </div>

                {/* GLASSMORPHISM LAYER */}
                <div 
                  className="absolute inset-[10px] rounded-[45px] rounded-tl-[100%] bg-gradient-to-b from-white/20 to-white/5 [transform:translate3d(0,0,30px)] border-r border-b border-white/10 transition-all duration-600 ease-in-out [transform-style:preserve-3d]" 
                />

                {/* TEXT CONTENT LAYER */}
                <div className="pt-[245px] px-6 pb-5 [transform:translate3d(0,0,31px)] relative z-10 flex flex-col justify-end h-full">
                  <div className="mb-4">
                    <span className="block text-[#DDF4E7] font-black text-base tracking-tight uppercase leading-tight font-sans drop-shadow-sm">
                      {cat.name}
                    </span>
                    <span className="block text-[9px] font-mono tracking-widest text-white/40 uppercase font-bold mt-0.5">
                      {cat.code}
                    </span>
                    <p className="block text-[11px] text-[#DDF4E7]/70 leading-relaxed font-light mt-1.5">
                      {cat.desc}
                    </p>
                  </div>

                  {/* BOTTOM ACTION BAR */}
                  <div className="flex items-center justify-between [transform-style:preserve-3d] pt-3 border-t border-white/5">
                    
                    {/* Micro Spec Nodes */}
                    <div className="flex gap-1.5 [transform-style:preserve-3d]">
                      {[1, 2, 3].map((dot) => (
                        <div 
                          key={dot}
                          className="w-5 h-5 rounded-full bg-white/90 border border-[#26667F]/20 grid place-content-center text-[8px] font-mono font-bold text-[#124170] shadow-sm transition-all duration-500 hover:bg-[#124170] hover:text-white"
                          style={{
                            transform: "translate3d(0,0,0px)",
                            transitionDelay: `${dot * 0.12}s`,
                          }}
                        />
                      ))}
                    </div>

                    {/* Explore Link */}
                    <Link 
                      href={`/products/?category=${cat.name.replace(/\s+/g, "-").toLowerCase()}`}
                      className="flex items-center gap-0.5 text-[#DDF4E7] hover:text-white text-[11px] font-mono font-bold transition-transform duration-300 hover:[transform:translate3d(0,0,12px)] group/btn"
                    >
                      <span>Explore</span>
                      <ChevronRight size={12} className="transition-transform group-hover/btn:translate-x-0.5" />
                    </Link>

                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 3: SYSTEM RIGIDITY & ACCURACY --- */}
      <section className="py-36 bg-[#124170] text-[#DDF4E7] relative z-10 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
            <div className="lg:col-span-8">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white">
                Rigidity & Dynamic Accuracy
              </h2>
            </div>
            <div className="lg:col-span-4 border-l border-[#26667F] pl-6">
              <p className="text-sm text-[#DDF4E7]/60 font-light leading-relaxed">
                Every frame leaving our workspace line undergoes calibrated pressure testing to survive structural fluctuations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.02, borderColor: "#67C090", boxShadow: "0 10px 30px rgba(18,65,112,0.3)" }}
                  viewport={{ once: true }}
                  className="bg-[#26667F]/30 border-2 border-transparent p-10 flex gap-6 items-start transition-all duration-300 relative rounded-xl"
                >
                  <div className="bg-[#124170] text-[#67C090] p-3 rounded-lg">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight mb-2 text-white">{feat.title}</h3>
                    <p className="text-sm text-[#DDF4E7]/70 font-light leading-relaxed">{feat.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-28 grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 border-t border-[#DDF4E7]/10">
            {[
              { value: <><Counter value={44} />+</>, label: "System Profiles" },
              { value: <><Counter value={40} />+</>, label: "Years Operations Network" },
              { value: "UAE", label: "Production Plants" },
              { value: "GCC", label: "Enterprise Dispatch Hubs" },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-4xl md:text-5xl font-mono font-black text-white">{stat.value}</p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-[#67C090] mt-1 font-bold">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- SECTION 4: HISTORICAL TIMELINE (PREMIUM CARD DESIGN WITH NEW HEADING) --- */}
      <section className="py-36 max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#124170] leading-none">Corporate Roots</h2>
          </div>

          {/* Premium Cards Grid with Borders & Interactive Shading */}
          <div className="lg:col-span-8 space-y-6">
            {[
              { year: "1986", title: "Strategic Foundation & GCC Network Setup", desc: "Inaugurated structural-scale architectural products supply loops across key GCC commercial zones, establishing an unshakeable ecosystem of trust and supply precision." },
              { year: "2025", title: "Technological Evolution & Automation Launch", desc: "Transitioned workflow execution into automated precision machinery lines, establishing tight thermodynamic parameters and zero-vibration air terminal setups." }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white/40 backdrop-blur-sm border-2 border-white/40 hover:border-[#67C090]/50 p-8 rounded-[2rem] shadow-[rgba(18,65,112,0.04)_0px_20px_30px_0px] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
                  {/* Years with interactive glow */}
                  <span className="text-5xl font-mono font-black text-[#26667F]/30 group-hover:text-[#67C090] transition-colors duration-300 select-none">
                    {item.year}
                  </span>
                  <div className="space-y-2">
                    <h4 className="text-xl font-extrabold text-[#124170] group-hover:text-[#26667F] transition-colors leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-600 font-light leading-relaxed max-w-xl">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- SECTION 5: STRUCTURAL INTEGRATION NODES --- */}
      <section className="py-36 bg-white relative z-10 rounded-t-[3rem] border-t border-[#67C090]/20">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#124170]">Integration Nodes</h2>
          </div>

          <div className="space-y-4">
            {applications.map((app, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ x: 15, backgroundColor: "#124170", color: "#DDF4E7" }}
                className="bg-[#DDF4E7]/20 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#124170]/10 transition-colors duration-300 cursor-pointer rounded-lg"
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-xs text-[#26667F]">0{i + 1} //</span>
                  <h4 className="font-bold text-xl tracking-tight uppercase">{app.title}</h4>
                </div>
                <div className="flex items-center gap-4 mt-4 sm:mt-0">
                  <span className="font-mono text-xs opacity-60">Verified Deployments</span>
                  <div className="w-12 h-[1px] bg-[#67C090]" />
                  <span className="font-mono text-sm font-bold text-[#26667F]">{app.count} Units</span>
                  <Plus size={14} className="opacity-40" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 6: BRANDED CTA BANNER --- */}
      <section className="py-32 text-center px-6 relative z-10 bg-[#124170] text-[#DDF4E7]">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            Request Core Data Overlays
          </h2>
          <p className="text-[#DDF4E7]/60 font-light text-sm max-w-xl mx-auto leading-relaxed">
            Gain immediate access to building engineering blueprints, k-factors, noise ceilings, and fully compatible detail block packages.
          </p>

          <div className="pt-6 flex flex-wrap justify-center gap-4">
            <Link 
              href="/request-catalogue" 
              className="bg-[#67C090] hover:bg-[#DDF4E7] text-[#124170] font-mono text-xs font-bold uppercase tracking-widest px-8 py-5 transition-all duration-300"
            >
              Extract Core Catalogue
            </Link>
            <Link 
              href="/contact-us" 
              className="bg-transparent border border-[#DDF4E7]/20 text-white hover:text-[#67C090] hover:border-[#67C090] font-mono text-xs font-bold uppercase tracking-widest px-8 py-5 transition-all"
            >
              Connect with Desk
            </Link>
          </div>
        </div>
      </section>
      <SlidingMarquee />

    </div>
  );
}