"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck, Lock, User, ArrowRight, Activity } from "lucide-react";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    loading && setError("");
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("adminToken", data.token);
        router.push("/admin/");
      } else {
        setError(data.error || "Wrong Username or Password");
      }
    } catch (err) {
      setError("Server Error: Please try again later");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#DDF4E7] min-h-screen flex items-center justify-center px-6 relative text-[#124170]">
      {/* Blueprint background lines setup */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#12417003_1px,transparent_1px),linear-gradient(to_bottom,#12417005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-md w-full bg-white border-2 border-[#124170]/10 p-8 rounded-[2.5rem] shadow-[rgba(18,65,112,0.05)_0px_25px_50px_-12px] space-y-6 relative z-10">
        
        {/* Title Identity Block */}
        <div className="text-center space-y-3">
          <div className="w-14 h-14 bg-[#DDF4E7] text-[#124170] border border-[#67C090]/30 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
            <ShieldCheck size={26} className="text-[#124170]" />
          </div>
          <div className="space-y-1">
            <span className="text-[9px] font-mono tracking-[0.3em] text-[#67C090] font-bold block uppercase">// Core Console</span>
            <h2 className="text-xl font-black uppercase tracking-tight text-[#124170]">
              ALUGRIDX Authority
            </h2>
          </div>
        </div>

        {error && (
          <div className="bg-rose-50 border border-rose-200 text-rose-600 text-xs font-mono font-bold p-3 rounded-xl text-center uppercase tracking-wide">
            [ System Check: {error} ]
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block">Username Parameter</label>
            <div className="relative">
              <User size={14} className="absolute left-4 top-4 text-slate-400" />
              <input 
                type="text" 
                value={username} 
                onChange={e => setUsername(e.target.value)}
                required 
                className="w-full bg-[#DDF4E7]/20 border border-[#67C090]/10 rounded-xl pl-11 pr-4 py-3.5 text-xs font-mono text-[#124170] placeholder-slate-400 focus:outline-none focus:border-[#124170] transition-colors" 
                placeholder="Secure Node ID" 
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block">Password Validation</label>
            <div className="relative">
              <Lock size={14} className="absolute left-4 top-4 text-slate-400" />
              <input 
                type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)}
                required 
                className="w-full bg-[#DDF4E7]/20 border border-[#67C090]/10 rounded-xl pl-11 pr-4 py-3.5 text-xs font-mono text-[#124170] placeholder-slate-400 focus:outline-none focus:border-[#124170] transition-colors" 
                placeholder="Access Hash key" 
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[#124170] hover:bg-[#67C090] text-white font-mono text-xs font-bold uppercase tracking-widest py-4 rounded-full transition-colors flex items-center justify-center gap-2 shadow-md disabled:opacity-40"
          >
            <span>{loading ? "Verifying Keys..." : "Initialize Dashboard"}</span>
            {!loading && <ArrowRight size={12} />}
          </button>
        </form>
      </div>
    </div>
  );
}