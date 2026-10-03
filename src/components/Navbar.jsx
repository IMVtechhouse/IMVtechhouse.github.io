import React, { useState } from 'react';
import { Menu, X, Smartphone, Globe, ShieldCheck, Mail, ExternalLink, Code2 } from 'lucide-react';

export default function Navbar({ onOpenContact, onOpenPrivacy }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#07090e]/80 border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl bg-slate-900 border border-cyan-500/30 flex items-center justify-center overflow-hidden shadow-lg shadow-cyan-500/10 group-hover:border-cyan-400 transition-colors">
              <img 
                src="/assets/imv-logo.png" 
                alt="IMVtechHouse Logo" 
                className="w-full h-full object-contain p-1"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <span className="hidden font-bold text-cyan-400 text-lg">IMV</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                IMV<span className="text-cyan-400 font-light">techHouse</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase text-slate-400 font-medium">
                Software & Apps Studio
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#apps" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <Smartphone className="w-4 h-4 text-cyan-400" />
              Apps
            </a>
            <a href="#client-work" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-indigo-400" />
              Client Work
            </a>
            <a href="#services" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-teal-400" />
              Services & ERP
            </a>
            <a href="/app-ads.txt" target="_blank" rel="noreferrer" className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              app-ads.txt
            </a>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenPrivacy}
              className="text-xs text-slate-400 hover:text-slate-200 transition-colors underline underline-offset-4"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07090e]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <a 
            href="#apps" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Mobile Apps
          </a>
          <a 
            href="#client-work" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Client Work (Globalway Impex)
          </a>
          <a 
            href="#services" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Services & ERP
          </a>
          <a 
            href="/app-ads.txt" 
            target="_blank" 
            rel="noreferrer"
            className="block px-3 py-2 rounded-lg text-sm font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
          >
            ✓ app-ads.txt (Live File)
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="w-full py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-center"
            >
              Contact Developer
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenPrivacy(); }}
              className="w-full py-2 text-xs text-slate-400 text-center"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
