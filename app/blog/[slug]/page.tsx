import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Tag, User } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await fetch(`${API_URL}/api/blogs/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    notFound();
  }

  const blog = await res.json();

  return (
    <div className="bg-[#DDF4E7] min-h-screen pt-36 pb-24 overflow-hidden relative text-[#124170]">
      {/* Blueprint structural background framework overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#12417002_1px,transparent_1px),linear-gradient(to_bottom,#12417002_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* PREMIUM CAPSULE RETIREMENT ACTUATOR (BACK BUTTON) */}
        <div className="mb-8 flex justify-start">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-wider text-[#124170] bg-white/70 hover:bg-white border border-[#67C090]/30 px-5 py-2.5 rounded-full shadow-sm transition-all group"
          >
            <ArrowLeft size={13} className="transform group-hover:-translate-x-1 transition-transform text-[#67C090]" />
            <span>[ Return to Engineering Logs ]</span>
          </Link>
        </div>

        {/* COMPREHENSIVE TEXT SHEET LAYOUT WITH ROBUST BOUNDARY */}
        <article className="bg-white rounded-[3rem] border-2 border-[#124170]/10 shadow-[rgba(18,65,112,0.03)_0px_30px_60px_-15px] overflow-hidden">
          
          {/* HEADER PARAMETERS METADATA ROW */}
          <div className="p-8 md:p-12 bg-slate-50/50 border-b border-slate-100 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-mono font-bold bg-[#DDF4E7] text-[#26667F] rounded uppercase border border-[#67C090]/10">
                <Tag size={10} /> {blog.category || "HVAC Tech"}
              </span>
              <span className="text-slate-300 font-light">•</span>
              <div className="flex items-center gap-1 text-slate-500 font-mono text-[11px]">
                <Clock size={12} className="text-[#67C090]" />
                <span>{blog.readTime || "5 min read"}</span>
              </div>
              <span className="text-slate-300 font-light">•</span>
              <div className="flex items-center gap-1 text-slate-500 font-mono text-[11px]">
                <User size={12} className="text-[#67C090]" />
                <span>By {blog.author || "ALUGRIDX"}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-black uppercase text-[#124170] tracking-tight leading-[1.08]">
              {blog.title}
            </h1>
          </div>

          {/* MAIN INTELLECTUAL CONTENT WORKSPACE */}
          <div className="p-8 md:p-14 text-slate-600 font-light text-sm md:text-base leading-relaxed whitespace-pre-line tracking-wide selection:bg-[#124170] selection:text-white">
            {blog.content}
          </div>

        </article>

      </div>
    </div>
  );
}