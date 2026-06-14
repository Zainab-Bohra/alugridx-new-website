"use client";
import Link from "next/link";
import { Mail, MapPin, ShieldCheck, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    /* py-20 से घटाकर py-10 किया गया है ताकि हाइट कम हो सके */
    <footer className="bg-[#124170] text-[#DDF4E7] py-10 relative z-20">
      {/* Subtle Blueprint Mesh Background Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none z-0" />

      {/* pb-16 को pb-10 करके बॉटम स्पेस भी संतुलित किया गया है */}
      <div className="max-w-7xl mx-auto px-6 pb-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
        
        {/* LEFT COLUMN: Logo & Description Side-by-Side Cluster */}
        <div className="lg:col-span-5 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          
          {/* Logo Frame */}
          <div className="shrink-0">
            <Link href="/" className="inline-block transition-opacity hover:opacity-90">
              <img 
                src="/images/alugridx-without-bg-1.webp" 
                alt="ALUGRIDX" 
                className="h-18 md:h-14 w-auto object-contain brightness-125"
              />
            </Link>
          </div>

          {/* Description Block */}
          <div className="space-y-3 flex-1">
            <p className="text-sm font-light text-white/80 tracking-tight leading-relaxed max-w-sm">
              Engineering the future of indoor climates with <span className="text-[#67C090] font-serif italic font-normal">absolute localized</span> manufacturing supremacy.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#26667F]/40 border border-[#67C090]/20 px-3 py-1.5 rounded-md text-[9px] font-mono font-bold uppercase tracking-wider text-[#67C090]">
              <ShieldCheck size={11} />
              <span>ASHRAE Certified Calibration</span>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Symmetric Double-Column Navigation */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:pl-8">
          
          {/* Sub-Col 1: Directory Links */}
          <div className="space-y-4">
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#67C090] font-black">// Quick Links</p>
            <ul className="space-y-3 text-xs font-semibold">
              {[
                { name: "Explore Components", href: "/products/" },
                { name: "Project Portfolio", href: "/projects/" },
                { name: "Technical Catalogues", href: "/request-catalogue/" },
                { name: "Company Roots", href: "/about-us/" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href} 
                    className="text-[#DDF4E7]/70 hover:text-white transition-colors flex items-center gap-1 group w-fit"
                  >
                    <span>{link.name}</span>
                    <ArrowRight size={10} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#67C090]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sub-Col 2: Desk Contact & Logistics Hub */}
          <div className="space-y-4 text-xs font-light">
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#67C090] font-black">// Engineering Desk</p>
            <div className="space-y-4 text-[#DDF4E7]/70 font-medium">
              <div className="flex gap-3 items-start group cursor-pointer">
                <MapPin size={14} className="text-[#67C090] shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
                <p className="leading-relaxed group-hover:text-white transition-colors">
                  Al Jurf Industrial 3,<br />
                  Ajman, UAE
                </p>
              </div>
              <div className="flex gap-3 items-center group">
                <Mail size={14} className="text-[#67C090] shrink-0 transition-transform group-hover:scale-110" />
                <a href="mailto:sales@alugridx.com" className="hover:text-white transition-colors font-mono">
                  sales@alugridx.com
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* FOOTER BOTTOM: Ultra-Thin Separation Line with Clean Metatags */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-[9px] font-mono text-[#DDF4E7]/30 uppercase tracking-widest gap-4 relative z-10">
        <span>© 2026 ALUGRIDX LLC. All Rights Reserved.</span>
        <div className="flex items-center gap-4">
          <span className="text-[#67C090]/50">[ Industrial Stream ]</span>
          <span>Fulfillment across GCC</span>
        </div>
      </div>
    </footer>
  );
}