import React from 'react';
import { ExternalLink, Globe, ShieldCheck, CheckCircle2, TrendingUp, Users, Award, Box, ArrowUpRight } from 'lucide-react';

export default function ClientWorkSection() {
  return (
    <section id="client-work" className="py-24 relative overflow-hidden bg-[#07090e] border-t border-slate-900">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
              <Globe className="w-3.5 h-3.5 text-indigo-400" />
              Client Showcase
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              Proven Delivery for <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Global Enterprises</span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              We design and engineer bespoke web platforms and operational portals that power real business volume and international operations.
            </p>
          </div>

          <a 
            href="https://globalwayimpex.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 transition-all text-sm font-semibold self-start md:self-auto"
          >
            <span>Visit Live Platform</span>
            <ArrowUpRight className="w-4 h-4 text-cyan-400" />
          </a>
        </div>

        {/* Featured Case Study: Globalway Impex */}
        <div className="rounded-3xl glass-panel-glow border border-slate-800 p-8 sm:p-10 relative overflow-hidden shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Info */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/15 text-blue-400 border border-blue-500/30">
                  Global Trade & Agro-Commodities
                </span>
                <span className="text-xs font-mono text-slate-400">Production Client</span>
              </div>

              <h3 className="font-heading text-3xl font-extrabold text-white tracking-tight">
                Globalway Impex
              </h3>

              <blockquote className="text-cyan-300/90 text-sm font-medium border-l-2 border-cyan-400 pl-4 italic">
                "Excellence Without Borders — Premium Agro-Commodity Exports Since 2017"
              </blockquote>

              <p className="text-slate-300 text-sm leading-relaxed">
                Engineered a comprehensive, modern international export portal for Globalway Impex. Built to represent fresh & dehydrated agro-commodities to global buyers with high performance, interactive quotation requests, and multi-country B2B lead generation.
              </p>

              {/* Stats Grid from client site */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-slate-800">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-xl font-heading font-extrabold text-white">500k+</div>
                  <div className="text-[11px] text-slate-400 uppercase font-medium mt-0.5">MT Exported</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-xl font-heading font-extrabold text-cyan-400">24+</div>
                  <div className="text-[11px] text-slate-400 uppercase font-medium mt-0.5">Countries</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-xl font-heading font-extrabold text-indigo-400">150+</div>
                  <div className="text-[11px] text-slate-400 uppercase font-medium mt-0.5">B2B Partners</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-xl font-heading font-extrabold text-emerald-400">8+</div>
                  <div className="text-[11px] text-slate-400 uppercase font-medium mt-0.5">Years Active</div>
                </div>
              </div>

              {/* Key Deliverables */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Delivered by IMVtechHouse:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Bespoke Responsive Web Architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Dynamic RFQ / Quote Ingestion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Global CDN & Sub-second Page Speed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>SEO & International Buyer Targeting</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://globalwayimpex.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all"
                >
                  <Globe className="w-4 h-4" />
                  Explore globalwayimpex.com
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>

            </div>

            {/* Right: Screenshot Showcase */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl group">
                
                {/* Browser Top Bar Mockup */}
                <div className="bg-slate-900 border-b border-slate-800 px-4 py-2.5 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex-1 mx-3 px-3 py-1 rounded-md bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400 truncate flex items-center justify-between">
                    <span>https://globalwayimpex.com</span>
                    <span className="text-[10px] text-emerald-400">SSL SECURE</span>
                  </div>
                </div>

                {/* Screenshot */}
                <div className="relative overflow-hidden">
                  <img
                    src="/assets/globalway-impex.png"
                    alt="Globalway Impex Platform screenshot"
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-xs font-semibold text-white bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-700 backdrop-blur-md">
                      Live Production Site &rarr;
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
