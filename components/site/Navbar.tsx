"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products/" },
  { name: "Projects", href: "/projects/" },
  { name: "About Us", href: "/about-us/" },
  { name: "Blog", href: "/blog/" },
  { name: "Contact", href: "/contact-us/" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#124170]/85 backdrop-blur-xl border-b border-[#67C090]/20 py-3.5 shadow-[rgba(18,65,112,0.15)_0px_15px_30px_-10px]"
          : "bg-gradient-to-b from-[#124170]/70 via-[#124170]/20 to-transparent border-b border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center z-50 transition-transform hover:scale-102">
          <img 
            src="/images/alugridx-without-bg-1.webp" 
            alt="ALUGRIDX" 
            className="h-10 md:h-12 w-auto object-contain brightness-125"
          />
        </Link>

        {/* Desktop Navigation Link Cluster */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-mono font-bold uppercase tracking-widest text-[#DDF4E7] hover:text-[#67C090] transition-colors duration-300 relative py-1 group"
            >
              <span>{link.name}</span>
              {/* Minimalist Micro-line Indicator below link */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#67C090] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Branded Rounded CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/request-catalogue/"
            className="group bg-[#67C090] hover:bg-[#DDF4E7] text-[#124170] px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-1.5"
          >
            <span>Request Catalogue</span>
            <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Action Toggle */}
        <button
          className="md:hidden text-[#DDF4E7] z-50 p-1 hover:text-[#67C090] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Glassmorphism Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-screen bg-[#124170]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 z-40"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-mono font-bold uppercase tracking-widest text-[#DDF4E7] hover:text-[#67C090] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <Link
              href="/request-catalogue/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 bg-[#67C090] text-[#124170] px-8 py-4 rounded-full text-xs font-mono font-bold uppercase tracking-widest shadow-lg"
            >
              Request Catalogue
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}