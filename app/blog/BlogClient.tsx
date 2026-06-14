"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Search, Tag, Clock, Newspaper, Layers } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function BlogClient() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${API_URL}/api/blogs`);
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const categories = ["All", ...new Set(blogs.map((blog) => blog.category || "Engineering"))];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = activeTab === "All" || blog.category === activeTab;
    const matchesSearch =
      blog.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#DDF4E7] min-h-screen pt-36 pb-24 overflow-hidden relative text-[#124170]">
      {/* Structural Minimal Blueprint Overlay lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#12417003_1px,transparent_1px),linear-gradient(to_bottom,#12417005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-12">
        
        {/* REFINED HEADER BLOCK */}
        <div className="border-b border-[#124170]/10 pb-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#124170]">
            Engineering Press
          </h1>
          <p className="text-slate-600 text-sm font-light mt-1">
            Technical breakdowns, thermodynamics whitepapers, and air management data from the ALUGRIDX desk.
          </p>
        </div>

        {/* INTEGRATED FILTERS & SEARCH CONTROL CONSOLE */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white/60 backdrop-blur-md p-2 rounded-2xl border border-[#67C090]/20 shadow-[rgba(18,65,112,0.02)_0px_10px_25px_-5px]">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1 px-1">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-[#124170] text-[#DDF4E7] shadow-sm"
                    : "text-slate-600 hover:bg-[#DDF4E7]/60 hover:text-[#124170]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-80">
            <input
              type="text"
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#67C090]/20 rounded-xl pl-11 pr-4 py-3 text-xs font-mono text-[#124170] placeholder-slate-400 focus:outline-none focus:border-[#124170]"
            />
            <Search size={14} className="absolute left-4 top-3.5 text-slate-400" />
          </div>
        </div>

        {/* LOADING NODES STATE */}
        {loading && (
          <div className="text-center py-24 font-mono text-xs uppercase tracking-widest text-[#124170]">
            [ Syncing Article Archives... ]
          </div>
        )}

        {/* BROADCASTED ARTICLES INDEX GRID */}
        {!loading && (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            <AnimatePresence mode="popLayout">
              {filteredBlogs.map((blog) => (
                <motion.article
                  key={blog._id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ 
                    y: -8,
                    shadow: "0px 35px 60px -20px rgba(18, 65, 112, 0.15)"
                  }}
                  transition={{ type: "spring", stiffness: 240, damping: 22 }}
                  className="group bg-white border-2 border-[#124170]/10 rounded-[2rem] rounded-tr-[4.5rem] p-7 flex flex-col justify-between h-[380px] cursor-pointer relative overflow-hidden z-10 transition-all duration-300"
                >
                  {/* Subtle Tech Grid Patch Layer inside Card */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(#12417008_1px,transparent_1px)] bg-[size:10px_10px] rounded-tr-[4.5rem] pointer-events-none" />
                  
                  {/* Kinetic Accent Bottom Border Reveal on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-transparent group-hover:bg-[#67C090] transition-colors duration-300" />
                  
                  <div className="space-y-5 relative z-10">
                    {/* Upper Meta Specifications Tag */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[9px] font-mono font-bold bg-[#DDF4E7] text-[#26667F] uppercase tracking-wider border border-[#67C090]/10 shadow-sm">
                        <Tag size={10} className="text-[#67C090]" />
                        {blog.category || "Engineering"}
                      </span>
                      
                      <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[10px] font-bold uppercase">
                        <Clock size={11} className="text-[#67C090]" />
                        <span>{blog.readTime || "4 Min"}</span>
                      </div>
                    </div>

                    {/* Technical Article Headers */}
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#124170]/20 group-hover:bg-[#67C090] transition-colors" />
                        <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest font-bold block">
                          {new Date(blog.createdAt || Date.now()).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                        </span>
                      </div>
                      
                      <h2 className="text-xl font-black text-[#124170] uppercase tracking-tight leading-[1.2] group-hover:text-[#26667F] transition-colors line-clamp-2">
                        {blog.title}
                      </h2>
                      
                      <p className="text-slate-500 font-light text-xs leading-relaxed line-clamp-3 pt-1">
                        {blog.excerpt || blog.content?.substring(0, 140)}...
                      </p>
                    </div>
                  </div>

                  {/* Operational Footer Layer */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono uppercase tracking-wider font-bold relative z-10">
                    <div className="flex items-center gap-1.5">
                      <Layers size={11} className="text-slate-300" />
                      <span className="text-slate-400 text-[10px] font-light">Node: {blog.author || "AX-DESK"}</span>
                    </div>
                    <Link href={`/blog/${blog.slug || blog._id}`} className="text-[#124170] flex items-center gap-1 group-hover:text-[#67C090] transition-colors relative">
                      <span className="text-[11px] tracking-tight">Examine Sheet</span>
                      <ArrowRight size={12} className="transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* EMPTY REGISTRY LAYER */}
        {!loading && filteredBlogs.length === 0 && (
          <div className="text-center py-24 bg-white rounded-[2.5rem] border-2 border-[#124170]/5 shadow-sm space-y-2">
            <Newspaper className="mx-auto text-slate-300" size={32} />
            <p className="text-xs font-mono uppercase text-slate-400">[ No Correlating Logs Broadcasted ]</p>
          </div>
        )}
      </div>
    </div>
  );
}