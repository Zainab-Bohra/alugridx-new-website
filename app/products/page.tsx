"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { Package, ArrowRight } from "lucide-react";

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

function ProductsContent() {
  const [products, setProducts] = useState<Product[]>([]); 
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get("category");

  const categoriesList = [
    { name: "All Products", slug: null },
    { name: "Filters", slug: "filters" },
    { name: "Louvers", slug: "louvers" },
    { name: "Dampers", slug: "dampers" },
    { name: "Grilles & Registers", slug: "grilles-registers" },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
        if (res.ok) {
          const data = await res.json();
          setProducts(data);
        }
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleCategoryChange = (slug: string | null) => {   
    if (slug) {
      router.push(`/products?category=${slug}`);
    } else {
      router.push("/products");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#DDF4E7] flex items-center justify-center text-[#124170] font-mono text-xs font-bold uppercase tracking-widest">
        [ Initializing Component Directory... ]
      </div>
    );
  }

  const filteredProducts = products.filter((prod) => {
    if (prod.isAvailable === false) return false;
    if (!categoryParam) return true;

    const productCategorySlug = prod.category
      ?.toLowerCase()
      ?.trim()
      ?.replace(/[^a-z0-9]+/g, "-")
      ?.replace(/(^-|-$)+/g, "");

    return productCategorySlug === categoryParam || productCategorySlug?.includes(categoryParam);
  });

  return (
    <div className="bg-[#DDF4E7] min-h-screen pt-32 pb-20 px-4 md:px-8 text-[#124170]">
      {/* Blueprint grid layout background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#12417003_1px,transparent_1px),linear-gradient(to_bottom,#12417005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">

        {/* REFINED HEADER */}
        <div className="border-b border-[#124170]/10 pb-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#124170]">
            System Components
          </h1>
          <p className="text-slate-600 text-sm font-light mt-1">
            High-quality architectural grilles and diffusers calibrated strictly for high-tier GCC infrastructures.
          </p>
        </div>

        {/* NEW: PREMIUM TOP CATEGORY BAR (Horizontal & Centered) */}
        <div className="w-full flex justify-center pb-4">
          <div className="flex flex-wrap gap-2.5 bg-white/60 backdrop-blur-md p-2 rounded-2xl border border-[#67C090]/20 shadow-[rgba(18,65,112,0.03)_0px_10px_25px_-5px] justify-center">
            {categoriesList.map((cat, index) => {
              const isActive = (!categoryParam && cat.slug === null) || categoryParam === cat.slug;
              return (
                <button
                  key={index}
                  onClick={() => handleCategoryChange(cat.slug)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "bg-[#124170] text-[#DDF4E7] shadow-md scale-102"
                      : "text-slate-600 hover:bg-[#DDF4E7]/60 hover:text-[#124170]"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* FULL WIDTH PRODUCTS GRID (lg:col-span-12 equivalent) */}
        <div className="w-full">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-3xl border border-[#67C090]/20 shadow-sm space-y-3">
              <Package className="mx-auto text-slate-400" size={36} />
              <p className="text-sm font-mono uppercase text-slate-500">[ Zero Profile Nodes Registered ]</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-8 pt-4">
              {filteredProducts.map((prod) => {
                const imageSrc = prod.images && prod.images.length > 0
                  ? prod.images[0].startsWith("http") ? prod.images[0] : `${process.env.NEXT_PUBLIC_API_URL}${prod.images[0]}`
                  : "https://placehold.co/400x300/f8f9fa/adb5bd?text=ALUGRIDX";

                return (
                  <div
                    key={prod._id}
                    onClick={() => router.push(`/products/${prod.slug || prod._id}`)}
                    className="group relative w-full h-[400px] bg-white rounded-2xl p-5 flex flex-col justify-between cursor-pointer shadow-[0_20px_25px_-5px_rgba(18,65,112,0.05)]"
                  >
                    
                    {/* BACKGROUND SHAPE: Rotates exactly -10deg on hover */}
                    <div className="absolute inset-0 -left-1 m-auto w-[calc(100%+8px)] h-[calc(100%+8px)] rounded-2xl bg-gradient-to-br from-[#67C090] to-[#124170] -z-10 pointer-events-none transform transition-transform duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:rotate-[-10deg] " />
                    
                    {/* BLURRY GLOW SHADOW */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#67C090] to-[#26667F] -z-20 pointer-events-none transform scale-[0.95] blur-[20px] transition-all duration-500 group-hover:blur-[32px]" />

                    {/* Product Image Frame */}
                    <div className="h-44 bg-[#DDF4E7]/30 rounded-xl p-4 flex items-center justify-center overflow-hidden border border-[#67C090]/10 relative z-20">
                      <img
                        src={imageSrc}
                        alt={prod.name}
                        className="max-h-36 object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = "https://placehold.co/400x300/f8f9fa/adb5bd?text=ALUGRIDX";
                        }}
                      />
                    </div>

                    {/* Content Section & Bottom Anchoring */}
                    <div className="space-y-2 pt-2 relative z-20">
                      <span className="text-[9px] font-mono font-bold uppercase text-[#124170] bg-[#DDF4E7] px-2 py-0.5 rounded">
                        {prod.code || "Series"} Node
                      </span>
                      <h3 className="font-black text-[#124170] text-lg uppercase tracking-tight leading-tight group-hover:text-[#26667F] transition-colors line-clamp-2 pt-1">
                        {prod.name}
                      </h3>
                    </div>

                    {/* Bottom Footer Item */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100 relative z-20 text-xs font-mono uppercase tracking-wider font-bold">
                      <span className="text-slate-400 text-[10px]">Technical Spec</span>
                      <span className="text-[#26667F] flex items-center gap-1 group-hover:text-[#67C090] transition-colors">
                        <span>View</span>
                        <ArrowRight size={12} />
                      </span>
                    </div>

                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#DDF4E7] flex items-center justify-center text-[#124170] font-mono text-xs uppercase tracking-widest">[ Fetching Core Repositories... ]</div>}>
      <ProductsContent />
    </Suspense>
  );
}