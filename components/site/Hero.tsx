"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#124170]">
      
      {/* BACKGROUND VIDEO WITH LIGHTENED MINT/TEAL OVERLAY */}
      <motion.div 
        className="absolute inset-0 h-full w-full overflow-hidden"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-55 mix-blend-overlay" 
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Lightened Ocean Teal Mask to Make Video Highly Visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#124170]/10 via-[#26667F]/30 to-[#124170]/90" />
      </motion.div>

      {/* REFINED CLEAN & CENTERED LAYOUT */}
      <div className="relative z-10 flex h-full max-w-5xl mx-auto items-center justify-center px-6 pt-12">
        
        <div className="flex flex-col items-center text-center max-w-3xl">
          {/* Subtle Dynamic Tag */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="bg-[#124170]/60 backdrop-blur-md text-[#DDF4E7] border border-[#67C090]/40 font-mono text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-1.5 rounded-full shadow-sm">
              Standard: ASHRAE Certified Matrix
            </span>
          </motion.div>

          {/* Main Architectural Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl xl:text-7xl font-black text-[#DDF4E7] tracking-tight uppercase leading-[1.05] drop-shadow-md"
          >
            Air Architecture <br />
            <span className="text-[#67C090] font-light italic font-serif lowercase">defined by</span> Precision.
          </motion.h1>

          {/* Minimal Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-sm sm:text-base text-[#DDF4E7]/90 font-light max-w-xl leading-relaxed tracking-wide drop-shadow-sm"
          >
            Premium grade extruded aluminium profiles engineered in the UAE for high-tier commercial, industrial, and infrastructure frameworks across the GCC.
          </motion.p>

          {/* ROUNDED CTA BUTTONS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto"
          >
            {/* Explore Products Button */}
            <Link 
              href="/products" 
              className="group bg-[#67C090] hover:bg-[#DDF4E7] text-[#124170] px-8 py-4 text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 rounded-full w-full sm:w-auto shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <span>Explore Products</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
            
            {/* Request Catalogue Button */}
            <Link 
              href="/request-catalogue" 
              className="text-[#DDF4E7] hover:text-[#124170] hover:bg-[#DDF4E7] border border-[#DDF4E7]/40 hover:border-transparent px-8 py-4 text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 rounded-full w-full sm:w-auto text-center backdrop-blur-md shadow-sm"
            >
              Request Catalogue
            </Link>
          </motion.div>
        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex items-center gap-3 text-[#DDF4E7]/40 text-xs font-mono tracking-widest">
        <span>ARCHITECTURAL STREAM</span>
        <ArrowDown size={14} className="animate-pulse text-[#67C090]" />
      </div>
    </div>
  );
}