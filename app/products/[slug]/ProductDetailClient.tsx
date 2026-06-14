"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";

interface Product {
  _id: string;
  slug: string;
  name: string;
  category?: string;
  images?: string[];
  series?: string;
  code?: string;
  isAvailable?: boolean;
}

const productsExtendedData: Record<string, {
  name: string; code: string; category: string; desc: string;
  features: string[]; dimensions: string[]; kFactors: string;
}> = {
  "ceiling-diffusers": {
    name: "Ceiling Diffusers", code: "SAD / RAD Series", category: "Diffusers",
    desc: "Engineered for supreme omnidirectional air induction grids. These systems maintain uniform temperature mix parameters across deep corporate layouts while throwing whisper-quiet acoustics.",
    features: ["Removable core configuration for fast plenum access", "Conforms rigidly to ASHRAE 70 testing protocols", "Pure Extruded Aluminium 6063-T6 structure"],
    dimensions: ["150 x 150 mm", "225 x 225 mm", "300 x 300 mm", "450 x 450 mm"],
    kFactors: "0.014 to 0.082 m/s pressure drag rating"
  },
  "linear-slot-diffusers": {
    name: "Linear Slot Diffusers", code: "LSD-Series", category: "Diffusers",
    desc: "Architectural linear profiles delivering continuous geometric integration in premium plaster ceilings. Ideal for high-capacity supply and extraction workflows.",
    features: ["1 to 8 slot matrix options available", "Fully adjustable black deflection blades for 180° air pattern controls", "Mitred corners seamlessly welded for flawless lines"],
    dimensions: ["Slot Width: 20mm / 25mm", "Custom Lengths up to 3 Meters single piece"],
    kFactors: "Micro-calibrated jet throw limits"
  },
  "volume-control-dampers": {
    name: "Volume Control Dampers", code: "VCD-Series", category: "Dampers",
    desc: "Heavy-duty opposing blade dampers designed for high-precision volumetric control and pressure balancing across main duct nodes.",
    features: ["Aerofoil shaped aluminum blades minimizing system pressure drops", "Interlocking gear networks for automated smooth manual controls", "Neoprene gasket edges preventing leakage matrices"],
    dimensions: ["100 x 100 mm to 1200 x 1200 mm", "Custom multi-section banks for mega plant rooms"],
    kFactors: "Class 1A low-leakage performance matrix verified"
  }
};

export default function ProductDetailClient() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const [activeTab, setActiveTab] = useState("specs");
  const [dbProduct, setDbProduct] = useState<any>(null);

  useEffect(() => {
    const fetchLiveProduct = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${slug}`);
        if (res.ok) {
          const data = await res.json();
          setDbProduct(data);
        }
      } catch (err) {
        console.error("Live fetch error inside client:", err);
      }
    };
    if (slug) fetchLiveProduct();
  }, [slug]);

  if (!slug) {
    return (
      <div className="min-h-screen bg-[#DDF4E7] flex items-center justify-center text-[#124170] font-mono text-xs font-bold tracking-widest uppercase">
        [ Loading Data Vectors... ]
      </div>
    );
  }

  const staticProduct = productsExtendedData[slug] || {
    name: slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    code: "Custom Series", category: "HVAC Component",
    desc: "High-tier architectural aluminum terminal configuration optimized for tight-tolerance performance grids inside GCC corporate developments.",
    features: ["Heavy duty 6063-T6 aluminum alloy foundation", "Anti-corrosion powder coat factory finish", "Custom sizing built straight from site drawings"],
    dimensions: ["Custom Bespoke Sizes engineered on demand"],
    kFactors: "Calibrated on site technical submittals"
  };

  let dynamicImageSrc = `/images/products/${slug}.avif`; 

  if (dbProduct && dbProduct.images && dbProduct.images.length > 0) {
    const firstImg = dbProduct.images[0];
    dynamicImageSrc = firstImg.startsWith("http") 
      ? firstImg 
      : `${process.env.NEXT_PUBLIC_API_URL}${firstImg}`;
  }

  return (
    <div className="bg-[#DDF4E7] min-h-screen pt-32 pb-24  overflow-hidden relative text-[#124170]">
      <div className="absolute inset-0  bg-[linear-gradient(to_right,#12417002_1px,transparent_1px),linear-gradient(to_bottom,#12417002_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* FIXED: ROUNDED CAPSULE BACK BUTTON */}
        <div className="mb-8">
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-wider text-[#124170] bg-[#DDF4E7]/80 bg-white border border-[#67C090] px-5 py-2.5 rounded-full shadow-[rgba(18,65,112,0.03)_0px_10px_20px] transition-all duration-200 transform hover:scale-102 group"
          >
            <ArrowLeft size={13} className="transform group-hover:-translate-x-1 transition-transform text-[#67C090]" />
            <span>[ Return to Catalog Directory ]</span>
          </Link>
        </div>

        {/* FIXED: ADDED MAIN BOUNDARY (border-2 border-[#124170]/10) */}
        <div className="bg-white rounded-[3rem] p-8 lg:p-12 border-2 border-[#124170] shadow-[rgba(18,65,112,0.03)_0px_30px_60px_-15px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* LEFT IMAGE GRAPHIC SIDE */}
            <div className="lg:col-span-5 space-y-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
                className="w-full h-[400px] bg-[#DDF4E7]/20 border border-[#67C090]/10 rounded-[2.5rem] flex items-center justify-center p-8 relative overflow-hidden shadow-inner"
              >
                <img 
                  src={dynamicImageSrc}
                  alt={staticProduct.name}
                  className="max-w-full max-h-full object-contain mix-blend-multiply transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/500x400/f1f5f9/124170?text=${staticProduct.name.replace(/\s+/g, '+')}`;
                  }}
                />
              </motion.div>

              <div className="bg-[#DDF4E7]/40 border border-[#67C090]/10 p-5 rounded-2xl flex gap-3 items-center">
                <ShieldCheck className="text-[#67C090] shrink-0" size={18} />
                <p className="text-xs font-mono font-bold uppercase text-slate-600 leading-relaxed">Factory approved material compliance matrix for GCC ministries.</p>
              </div>
            </div>

            {/* RIGHT WORKSPACE DETAILS SIDE */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#26667F] bg-[#DDF4E7] px-3 py-1 rounded uppercase tracking-widest border border-[#67C090]/20">{dbProduct?.category || staticProduct.category}</span>
                <h1 className="text-3xl md:text-5xl font-black uppercase text-[#124170] mt-3 tracking-tight">{dbProduct?.name || staticProduct.name}</h1>
                <p className="text-[10px] font-mono font-bold text-slate-400 mt-1 uppercase tracking-widest">{dbProduct?.code || staticProduct.code} Configuration Blueprint Node</p>
                
                <p className="text-slate-600 font-light text-sm md:text-base leading-relaxed mt-6">
                  {dbProduct?.shortDescription || staticProduct.desc}
                </p>
              </div>

              {/* ROUNDED GLASS TAB SYSTEM */}
              <div className="flex gap-2 border-b border-slate-100 pt-4">
                <button 
                  onClick={() => setActiveTab("specs")}
                  className={`pb-3 px-3 text-xs font-mono font-bold uppercase tracking-wider transition-all border-b-2 ${activeTab === "specs" ? "border-[#124170] text-[#124170]" : "border-transparent text-slate-400 hover:text-slate-600"}`}
                >
                  Structural Features
                </button>
                <button 
                  onClick={() => setActiveTab("dims")}
                  className={`pb-3 px-3 text-xs font-mono font-bold uppercase tracking-wider transition-all border-b-2 ${activeTab === "dims" ? "border-[#124170] text-[#124170]" : "border-transparent text-slate-400 hover:text-slate-600"}`}
                >
                  Dimension Mappings
                </button>
              </div>

              {/* EXTRACTED LIST VIEW PORTS */}
              <div className="py-4 min-h-[180px]">
                {activeTab === "specs" && (
                  <motion.ul initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="space-y-3.5">
                    {(dbProduct?.keyFeatures || staticProduct.features).map((feat: string, i: number) => (
                      <li key={i} className="flex gap-3 items-start text-xs font-medium text-slate-600 leading-relaxed">
                        <CheckCircle2 size={14} className="text-[#67C090] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </motion.ul>
                )}

                {activeTab === "dims" && (
                  <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      {(dbProduct?.specifications || staticProduct.dimensions.map((d: any) => ({ key: "Size", value: d }))).map((spec: any, i: number) => (
                        <div key={i} className="bg-[#DDF4E7]/30 border border-[#67C090]/10 p-3 rounded-xl text-center text-xs font-mono font-bold text-[#124170]">
                          {spec.key || "Specs"}: {spec.value}
                        </div>
                      ))}
                    </div>
                    <div className="p-4 rounded-xl bg-[#DDF4E7]/40 border border-[#67C090]/20 text-xs font-mono font-bold uppercase text-[#26667F] tracking-wide">
                      Pressure Calibrations: {staticProduct.kFactors}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* PREMIUM INTEGRATED SUBMITTAL BANNER */}
              <div className="bg-gradient-to-br from-[#26667F] to-[#124170] text-white p-6 md:p-8 rounded-[2rem] border border-white/10 shadow-lg relative overflow-hidden">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
                  <div className="space-y-1">
                    <h4 className="text-base font-black uppercase tracking-tight">Request Blueprint for {staticProduct.name}</h4>
                    <p className="text-[#DDF4E7]/60 text-[11px] font-light max-w-sm leading-relaxed">Get rapid pricing scale estimations and architectural AutoCAD sheets directly into your mailbox.</p>
                  </div>
                  <Link href={`/contact-us?product=${slug}`} className="w-full sm:w-auto text-center bg-[#67C090] hover:bg-white text-[#124170] font-mono text-xs font-bold uppercase tracking-widest px-6 py-4 rounded-full transition-colors whitespace-nowrap shrink-0">
                    Request Data Submittal
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}