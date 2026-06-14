"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, CheckCircle2, ArrowRight } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Commercial Tower Installation",
    location: "Dubai, UAE",
    category: "Commercial",
    specs: "Supplied Architectural Ceiling Diffusers & Premium Linear Grilles",
    timeline: "Completed 2026",
    img: "/images/projects/commercial-tower-vents.avif"
  },
  {
    id: 2,
    title: "Industrial Facility Installation",
    location: "Ajman, UAE",
    category: "Industrial",
    specs: "Supplied Heavy-Duty Louvers, Volume Control Dampers (VCD), & Non-Return Dampers (NRD)",
    timeline: "Completed 2025",
    img: "/images/projects/industrial-dampers.avif"
  },
  {
    id: 3,
    title: "Luxury Residential Tower",
    location: "Abu Dhabi, UAE",
    category: "Residential",
    specs: "Supplied Premium Ceiling Diffusers & Directional Supply Air Grilles",
    timeline: "Completed 2025",
    img: "/images/projects/residential-diffusers.avif"
  },
  {
    id: 4,
    title: "5-Star Hospitality Project",
    location: "Sharjah, UAE",
    category: "Hospitality",
    specs: "Supplied High-Capacity Architectural Linear Slot Diffusers",
    timeline: "Completed 2025",
    img: "/images/projects/hotel-slot-diffusers.avif"
  },
  {
    id: 5,
    title: "Airport Expansion Project",
    location: "Dubai, UAE",
    category: "Commercial",
    specs: "Supplied High-Velocity Jet Diffusers & Heavy-Duty Weather Louvers",
    timeline: "Completed 2024",
    img: "/images/projects/airport-jet-diffusers.avif"
  },
  {
    id: 6,
    title: "Shopping Mall Installation",
    location: "Ras Al Khaimah, UAE",
    category: "Commercial",
    specs: "Supplied High-Volume Ceiling Diffusers & Exhaust Air Grilles",
    timeline: "Completed 2024",
    img: "/images/projects/mall-ceiling-grilles.avif"
  },
  {
    id: 7,
    title: "Industrial Park Installation",
    location: "Fujairah, UAE",
    category: "Industrial",
    specs: "Supplied Specialized High-Efficiency Sand Trap Louvers & Volume Control Dampers (VCD)",
    timeline: "Completed 2024",
    img: "/images/projects/fujairah-sand-trap.avif"
  }
];

const filters = ["All Grid Nodes", "Commercial", "Industrial", "Residential", "Hospitality"];

export default function ProjectsClient() {
  const [activeFilter, setActiveFilter] = useState("All Grid Nodes");

  const filteredProjects = projectsData.filter((proj) => {
    return activeFilter === "All Grid Nodes" || proj.category === activeFilter;
  });

  return (
    <div className="bg-[#DDF4E7] min-h-screen pt-32 pb-24 overflow-hidden relative text-[#124170]">
      
      {/* Structural Minimal Blueprint Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#12417003_1px,transparent_1px),linear-gradient(to_bottom,#12417005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-10">
        
        {/* REFINED HEADER SECTION */}
        <div className="border-b border-[#124170]/10 pb-6 text-center md:text-left">
          
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#124170]">
            Execution Portfolio
          </h1>
          <p className="text-slate-600 text-sm font-light mt-1">
            Review landmarks across premium commercial nodes, healthcare frameworks, and mega-scale GCC hubs.
          </p>
        </div>

        {/* TOP CATEGORY FILTER BAR */}
        <div className="w-full flex justify-center md:justify-start pb-4">
          <div className="flex flex-wrap gap-2 bg-white/60 backdrop-blur-md p-1.5 rounded-2xl border border-[#67C090]/20 shadow-[rgba(18,65,112,0.02)_0px_10px_25px_-5px]">
            {filters.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap ${
                  activeFilter === category
                    ? "bg-[#124170] text-[#DDF4E7] shadow-md scale-102"
                    : "text-slate-600 hover:bg-[#DDF4E7]/60 hover:text-[#124170]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECTS GRID MATRIX (With 10-Degree Flat Rotation on Hover) */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ 
                  rotate: -5, // FIXED: 3D टिल्ट हटाकर 10 डिग्री रोटेशन सेट कर दिया है
                  scale: 0.98,
boxShadow: "0px 25px 35px -10px rgba(18, 65, 112, 0.12)"                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                key={project.id}
                className="group bg-white border-2 border-[#124170]/10 rounded-[2.5rem] overflow-hidden shadow-[rgba(18,65,112,0.03)_0px_20px_25px_-5px] transition-all duration-300 flex flex-col justify-between relative z-10 origin-center"
              >
                <div>
                  {/* Image Framework Area */}
                  <div className="h-52 w-full overflow-hidden relative bg-[#DDF4E7]/40 border-b border-[#124170]/5 flex items-center justify-center">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if(parent) {
                          parent.innerHTML = `
                            <div class="absolute inset-0 bg-gradient-to-br from-[#26667F] to-[#124170] flex flex-col items-center justify-center p-6 text-center">
                              <span class="text-white font-black text-base uppercase tracking-tight leading-tight">${project.title}</span>
                              <span class="text-[#DDF4E7]/60 font-mono text-[10px] uppercase tracking-wider mt-1.5">${project.category} Framework</span>
                            </div>
                          `;
                        }
                      }}
                    />
                    
                    {/* Floating Tech Category Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-white/90 backdrop-blur-md text-[#124170] border border-[#67C090]/20 font-mono font-bold text-[9px] tracking-widest uppercase px-3 py-1 rounded-md shadow-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Details Fields */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[10px] uppercase tracking-widest">
                      <Building2 size={12} className="text-[#67C090]" />
                      <span>{project.location} • {project.timeline}</span>
                    </div>

                    <h3 className="text-xl font-black text-[#124170] uppercase tracking-tight leading-tight group-hover:text-[#26667F] transition-colors line-clamp-2 min-h-[48px]">
                      {project.title}
                    </h3>
                    
                    {/* Supplied Parameters Specs Box */}
                    <div className="p-4 rounded-2xl bg-[#DDF4E7]/30 border border-[#67C090]/10 flex gap-3 items-start group-hover:bg-[#DDF4E7]/50 transition-colors duration-300">
                      <CheckCircle2 size={15} className="text-[#67C090] shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <p className="text-[10px] font-mono font-bold text-[#26667F] uppercase tracking-wider">Supply Parameters</p>
                        <p className="text-xs text-slate-600 font-light leading-relaxed line-clamp-2">{project.specs}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Footer Item
                <div className="p-6 pt-0">
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-mono uppercase tracking-wider font-bold">
                    <span className="text-slate-400 text-[10px]">Project Data</span>
                    <span className="text-[#124170] flex items-center gap-1 group-hover:text-[#67C090] transition-colors">
                      <span>View details</span>
                      <ArrowRight size={12} />
                    </span>
                  </div>
                </div> */}

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CUSTOM CAPACITY SUBMITTAL BANNER */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-gradient-to-br from-[#26667F] to-[#124170] text-white p-8 rounded-[2.5rem] border border-white/10 shadow-lg relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div className="text-center lg:text-left space-y-1 max-w-xl relative z-10">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#67C090] uppercase block">[ HIGH CAPACITY FACTORY DESK ]</span>
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight">Need Custom Grid Calibrations?</h3>
            <p className="text-[#DDF4E7]/60 text-xs font-light leading-relaxed">
              Our Ajman plant operates automated CNC punch lines to fabricate customized sizes straight from your structural AutoCAD blueprints with tight-tolerance fulfillment metrics.
            </p>
          </div>
          <div className="shrink-0 w-full lg:w-auto relative z-10">
            <a href="/contact-us" className="w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-[#67C090] hover:bg-white text-[#124170] font-mono text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full shadow-md transition-colors text-center">
              <span>Submit RFQ Parameters</span>
              <ArrowRight size={12} />
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}