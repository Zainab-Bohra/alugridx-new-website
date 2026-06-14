"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Trash2, Edit3, FileText, Package, RefreshCw, LogOut, Layers, Layers2 } from "lucide-react";

const API_BASE = `${process.env.NEXT_PUBLIC_API_URL}/api`;

export default function AdminDashboard() {
  const router = useRouter();
  const [, setAuthorized] = useState(false);
  const [activeTab, setActiveTab] = useState<"products" | "blogs">("products");
  
  const [products, setProducts] = useState<any[]>([]);
  const [blogs, setBlogs] = useState<any[]>([]);
  
  const [pForm, setPForm] = useState({ id: "", name: "", series: "", category: "", shortDescription: "", image: "", isAvailable: true });
  const [bForm, setBForm] = useState({
    title: "",
    category: "",
    excerpt: "",
    content: "",
    author: "ALUGRIDX",
    readTime: "5 min read",
  });
  const [uploading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
    } else {
      setAuthorized(true);
      fetchProducts();
      fetchBlogs();
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    router.push("/admin/login");
  };

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${API_BASE}/products`);
      if (res.ok) setProducts(await res.json());
    } catch (err) { console.error(err); }
  };

  const fetchBlogs = async () => {
    try {
      const res = await fetch(`${API_BASE}/blogs`);
      if (res.ok) setBlogs(await res.json());
    } catch (err) { console.error(err); }
  };

  const handleProductSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isEdit = !!pForm.id;
    const url = isEdit ? `${API_BASE}/products/${pForm.id}` : `${API_BASE}/products`;
    const method = isEdit ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pForm),
      });
      
      const data = await res.json();

      if (res.ok) {
        alert(isEdit ? "Product Updated Successfully!" : "New Product Added Successfully!");
        setPForm({ id: "", name: "", series: "", category: "", shortDescription: "", image: "", isAvailable: true });
        fetchProducts();
      } else {
        alert("Server Error: " + (data.error || "Failed to save product"));
      }
    } catch (err) { 
      alert("Network Error: Cannot connect to server"); 
    }
  };

  const toggleAvailability = async (id: string, currentStatus: boolean) => {
    try {
      const res = await fetch(`${API_BASE}/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isAvailable: !currentStatus }),
      });
      if (res.ok) fetchProducts();
    } catch (err) { console.error(err); }
  };

  const deleteProduct = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    try {
      const res = await fetch(`${API_BASE}/products/${id}`, { method: "DELETE" });
      if (res.ok) fetchProducts();
    } catch (err) { console.error(err); }
  };

  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE}/blogs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bForm),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Blog Post Published!");
        setBForm({ title: "", category: "", excerpt: "", content: "", author: "ALUGRIDX", readTime: "5 min read" });
        fetchBlogs();
      } else {
        alert(data.message || "Failed to publish blog");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  const deleteBlog = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    try {
      const res = await fetch(`${API_BASE}/blogs/${id}`, { method: "DELETE" });
      if (res.ok) fetchBlogs();
    } catch (err) {
      console.error(err);
      alert("Server Error");
    }
  };

  return (
    <div className="bg-[#DDF4E7] min-h-screen pt-32 pb-24 px-4 md:px-8 text-[#124170]">
      {/* Background blueprint net mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#12417003_1px,transparent_1px),linear-gradient(to_bottom,#12417005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        
        {/* TOP COMPONENT CONTROL HEAD */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 bg-white p-6 rounded-[2.5rem] border-2 border-[#124170]/10 shadow-[rgba(18,65,112,0.03)_0px_20px_25px_-5px]">
          <div>
            <h1 className="text-2xl font-black uppercase tracking-tight">ALUGRIDX Management Unit</h1>
            <p className="text-slate-500 text-xs font-light mt-0.5">Deploy or alter production matrix parameters for grilles, loops, and system logs.</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <div className="flex bg-[#DDF4E7]/40 p-1.5 rounded-xl border border-[#67C090]/20 w-full sm:w-auto">
              <button 
                onClick={() => setActiveTab("products")} 
                className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all flex-1 sm:flex-none ${activeTab === "products" ? "bg-[#124170] text-white shadow" : "text-slate-600 hover:text-[#124170]"}`}
              >
                <Package size={13} /> <span>Products</span>
              </button>
              <button 
                onClick={() => setActiveTab("blogs")} 
                className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all flex-1 sm:flex-none ${activeTab === "blogs" ? "bg-[#124170] text-white shadow" : "text-slate-600 hover:text-[#124170]"}`}
              >
                <FileText size={13} /> <span>Blogs</span>
              </button>
            </div>
            <button 
              onClick={handleLogout} 
              className="flex items-center justify-center gap-2 border-2 border-rose-200/60 bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white px-5 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-colors w-full sm:w-auto ml-auto"
            >
              <LogOut size={13} /> <span>Disconnect</span>
            </button>
          </div>
        </div>

        {/* 📦 TAB 1: PRODUCTS MANAGER WORKSPACE */}
        {activeTab === "products" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Form Frame */}
            <form onSubmit={handleProductSubmit} className="lg:col-span-5 bg-white border-2 border-[#124170]/10 p-6 rounded-[2rem] shadow-sm space-y-4">
              <h3 className="text-xs font-mono font-bold text-[#26667F] uppercase tracking-wider border-b border-slate-100 pb-3 flex items-center gap-2">
                <Layers size={14} /> <span>{pForm.id ? "Alter Specifications Node" : "Register Product Entry"}</span>
              </h3>
              
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Product Name</label>
                <input type="text" value={pForm.name} onChange={e => setPForm({...pForm, name: e.target.value})} required className="w-full bg-[#DDF4E7]/20 border border-[#67C090]/10 rounded-xl px-4 py-2.5 text-xs font-mono text-[#124170] placeholder-slate-400 focus:outline-none focus:border-[#124170]" placeholder="e.g., Double Deflection Register" />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Product System Code</label>
                <input type="text" value={pForm.series} onChange={e => setPForm({...pForm, series: e.target.value})} className="w-full bg-[#DDF4E7]/20 border border-[#67C090]/10 rounded-xl px-4 py-2.5 text-xs font-mono text-[#124170] placeholder-slate-400 focus:outline-none focus:border-[#124170]" placeholder="e.g., SAD-Series / NRD-02" />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Product Classification Matrix</label>
                <input type="text" value={pForm.category} onChange={e => setPForm({...pForm, category: e.target.value})} required className="w-full bg-[#DDF4E7]/20 border border-[#67C090]/10 rounded-xl px-4 py-2.5 text-xs font-mono text-[#124170] placeholder-slate-400 focus:outline-none focus:border-[#124170]" placeholder="e.g., Grilles-Registers / Louvers" />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Framework Description Sheet</label>
                <textarea value={pForm.shortDescription} onChange={e => setPForm({...pForm, shortDescription: e.target.value})} required rows={4} className="w-full bg-[#DDF4E7]/20 border border-[#67C090]/10 rounded-xl px-4 py-2.5 text-xs text-slate-600 focus:outline-none focus:border-[#124170]" placeholder="Input engineered tolerances and flow metrics..."></textarea>
              </div>
              
              <button type="submit" className="w-full bg-[#124170] hover:bg-[#67C090] text-white font-mono text-xs font-bold uppercase tracking-widest py-3.5 rounded-full transition-colors">
                {uploading ? "Parsing Matrix..." : pForm.id ? "Commit Data Parameters" : "Publish to Core Architecture"}
              </button>
              {pForm.id && (
                <button type="button" onClick={() => setPForm({ id: "", name: "", series: "", category: "", shortDescription: "", image: "", isAvailable: true })} className="w-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-mono text-xs font-bold uppercase py-2.5 rounded-full">
                  Abort Adjustments
                </button>
              )}
            </form>

            {/* List Rendition Matrix */}
            <div className="lg:col-span-7 bg-white border-2 border-[#124170]/10 rounded-[2rem] shadow-sm overflow-hidden">
              <div className="p-4 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
                <button onClick={fetchProducts} className="text-slate-400 hover:text-[#124170] transition-colors"><RefreshCw size={13} /></button>
              </div>
              <div className="divide-y divide-slate-100 max-h-[550px] overflow-y-auto">
                {products.length === 0 ? (
                  <p className="p-8 text-center text-xs font-mono uppercase text-slate-400">[ Zero Registered Components ]</p>
                ) : (
                  products.map((prod) => (
                    <div key={prod._id} className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-[#DDF4E7]/10 transition-colors">
                      <div className="flex gap-3.5 items-center">
                        <div className="w-12 h-12 bg-[#DDF4E7]/30 rounded-xl border border-[#67C090]/20 flex items-center justify-center p-1 overflow-hidden shrink-0">
                          <img src={prod.image || prod.images?.[0]} alt="" className="max-w-full max-h-full object-contain mix-blend-multiply" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#124170] text-sm uppercase tracking-tight">{prod.name}</h4>
                          <p className="text-[10px] font-mono text-slate-400 uppercase font-bold">{prod.series || "Custom"} Matrix • <span className="text-[#67C090]">{prod.category}</span></p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                        <button 
                          onClick={() => toggleAvailability(prod._id, prod.isAvailable)} 
                          className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase border transition-colors ${prod.isAvailable ? "bg-[#DDF4E7] border-[#67C090]/30 text-[#124170]" : "bg-rose-50 border-rose-200 text-rose-600"}`}
                        >
                          {prod.isAvailable ? "Active" : "Locked"}
                        </button>
                        <button onClick={() => setPForm({ id: prod._id, name: prod.name, series: prod.series || "", category: prod.category, shortDescription: prod.shortDescription || prod.desc || "", image: prod.image || "", isAvailable: prod.isAvailable })} className="text-slate-400 hover:text-[#124170] p-2 border border-slate-100 rounded-lg bg-slate-50 transition-colors"><Edit3 size={13} /></button>
                        <button onClick={() => deleteProduct(prod._id)} className="text-slate-400 hover:text-rose-600 p-2 border border-slate-100 rounded-lg bg-slate-50 transition-colors"><Trash2 size={13} /></button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* 📝 TAB 2: BLOG REPOSITORY COMMAND */}
        {activeTab === "blogs" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <form onSubmit={handleBlogSubmit} className="lg:col-span-5 bg-white border-2 border-[#124170]/10 p-6 rounded-[2rem] shadow-sm space-y-4">
              <h3 className="text-xs font-mono font-bold text-[#26667F] uppercase tracking-wider border-b border-slate-100 pb-3 flex items-center gap-2">
                <Layers2 size={14} /> <span>Compile Press Entry</span>
              </h3>
              
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Blog Dispatch Title</label>
                <input type="text" value={bForm.title} onChange={e => setBForm({...bForm, title: e.target.value})} required className="w-full bg-[#DDF4E7]/20 border border-[#67C090]/10 rounded-xl px-4 py-2.5 text-xs font-mono text-[#124170] placeholder-slate-400 focus:outline-none focus:border-[#124170]" placeholder="e.g., Thermal Efficiency Scaling" />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Classification Group</label>
                <input type="text" value={bForm.category} onChange={e => setBForm({...bForm, category: e.target.value})} className="w-full bg-[#DDF4E7]/20 border border-[#67C090]/10 rounded-xl px-4 py-2.5 text-xs font-mono text-[#124170]" placeholder="HVAC Engineering" />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Estimated Read Metrics</label>
                <input type="text" value={bForm.readTime} onChange={e => setBForm({...bForm, readTime: e.target.value})} className="w-full bg-[#DDF4E7]/20 border border-[#67C090]/10 rounded-xl px-4 py-2.5 text-xs font-mono text-[#124170]" placeholder="4 min read" />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Abstract Excerpt</label>
                <textarea rows={2} value={bForm.excerpt} onChange={e => setBForm({...bForm, excerpt: e.target.value})} className="w-full bg-[#DDF4E7]/20 border border-[#67C090]/10 rounded-xl px-4 py-2.5 text-xs text-slate-600 focus:outline-none focus:border-[#124170]" placeholder="Short conceptual summary node..." />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Author Identity</label>
                <input type="text" value={bForm.author} onChange={e => setBForm({...bForm, author: e.target.value})} className="w-full bg-[#DDF4E7]/20 border border-[#67C090]/10 rounded-xl px-4 py-2.5 text-xs font-mono text-[#124170]" placeholder="ALUGRIDX Desk" />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Core Body Content</label>
                <textarea value={bForm.content} onChange={e => setBForm({...bForm, content: e.target.value})} required rows={6} className="w-full bg-[#DDF4E7]/20 border border-[#67C090]/10 rounded-xl px-4 py-2.5 text-xs text-slate-600 focus:outline-none focus:border-[#124170]" placeholder="Write complete structural article text block..."></textarea>
              </div>

              <button type="submit" className="w-full bg-[#124170] hover:bg-[#67C090] text-white font-mono text-xs font-bold uppercase tracking-widest py-3.5 rounded-full transition-colors">
                Publish Document Matrix
              </button>
            </form>

            {/* Blog List Rendition */}
            <div className="lg:col-span-7 bg-white border-2 border-[#124170]/10 rounded-[2rem] shadow-sm overflow-hidden">
              <div className="p-4 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
                <button onClick={fetchBlogs} className="text-slate-400 hover:text-[#124170] transition-colors"><RefreshCw size={13} /></button>
              </div>
              <div className="divide-y divide-slate-100 max-h-[500px] overflow-y-auto">
                {blogs.length === 0 ? (
                  <p className="p-8 text-center text-xs font-mono uppercase text-slate-400">[ Zero Documents Broadcasted ]</p>
                ) : (
                  blogs.map((blog) => (
                    <div key={blog._id} className="p-4 flex justify-between items-center gap-4 hover:bg-[#DDF4E7]/10 transition-colors">
                      <div className="max-w-[80%] space-y-0.5">
                        <h4 className="font-bold text-[#124170] text-sm uppercase tracking-tight truncate">{blog.title}</h4>
                        <p className="text-[10px] font-mono font-bold text-slate-400 uppercase">By {blog.author || "Admin"} • {new Date(blog.createdAt).toLocaleDateString()}</p>
                      </div>
                      <button onClick={() => deleteBlog(blog._id)} className="text-slate-400 hover:text-rose-600 p-2 border border-slate-100 rounded-lg bg-slate-50 transition-colors"><Trash2 size={13} /></button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}