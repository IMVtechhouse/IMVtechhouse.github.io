import React from 'react';
import { ArrowRight, Sparkles, Smartphone, ShieldCheck, CheckCircle2, ChevronDown, Layers, Terminal } from 'lucide-react';
import ThreeCanvas from './ThreeCanvas';

export default function Hero({ onOpenContact }) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* 3D Interactive Three.js Background */}
      <ThreeCanvas />

      {/* Radial Gradient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center md:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline and Badges */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Pill Badges */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-sm shadow-cyan-500/20 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
                3+ Years Industry Experience
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Google Play Verified Developer
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Architecting <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">Digital Excellence</span> in Apps, Web & ERP.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              At <strong className="text-white font-semibold">IMVtechHouse</strong>, we build high-performance Android mobile apps, bespoke modern web platforms, and robust enterprise ERP systems tailored for growth, reliability, and scale.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
              <a
                href="#apps"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all flex items-center gap-2"
              >
                <Smartphone className="w-4 h-4" />
                Explore Our Apps
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#client-work"
                className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 hover:border-slate-500 backdrop-blur-md transition-all flex items-center gap-2"
              >
                <Layers className="w-4 h-4 text-indigo-400" />
                View Client Work
              </a>
            </div>

            {/* Live Metrics Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 max-w-lg border-t border-slate-800/80">
              <div>
                <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white">3+</div>
                <div className="text-xs text-slate-400 font-medium">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-heading font-extrabold text-cyan-400">2</div>
                <div className="text-xs text-slate-400 font-medium">Play Store Apps</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-heading font-extrabold text-emerald-400">100%</div>
                <div className="text-xs text-slate-400 font-medium">On-Time Delivery</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive 3D Card / App Status HUD */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-2xl glass-panel-glow p-6 space-y-5 border border-cyan-500/20 backdrop-blur-xl relative group">
              
              {/* Corner tech accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-tr-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-mono font-medium text-slate-300">SYSTEM STATUS: ACTIVE</span>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-400 border border-slate-700">
                  v2.4 Production
                </span>
              </div>

              {/* App 1 Preview Card */}
              <a 
                href="#daily-planner" 
                className="block p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-800/60 transition-all group/item"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center font-bold text-white shadow-md">
                    ✓
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-white group-hover/item:text-cyan-400 transition-colors">
                        Daily Planner
                      </h4>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        Live on Play Store
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 truncate mt-0.5">Tasks, Habit Tracking & Productivity Stats</p>
                  </div>
                </div>
              </a>

              {/* App 2 Preview Card */}
              <a 
                href="#paisaflow" 
                className="block p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 hover:bg-slate-800/60 transition-all group/item"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-emerald-600 flex items-center justify-center font-bold text-white shadow-md">
                    ₹
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-white group-hover/item:text-cyan-400 transition-colors">
                        PaisaFlow - Expense Manager
                      </h4>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        Closed Testing
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 truncate mt-0.5">11/14 Days Tested • Production Ready Soon</p>
                  </div>
                </div>
              </a>

              {/* Client Spotlight Card */}
              <a 
                href="#client-work" 
                className="block p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 hover:bg-slate-800/60 transition-all group/item"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center font-bold text-white shadow-md">
                    🌐
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-white group-hover/item:text-cyan-400 transition-colors">
                        Globalway Impex
                      </h4>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        Client Platform
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 truncate mt-0.5">500k+ MT Exported • globalwayimpex.com</p>
                  </div>
                </div>
              </a>

              {/* app-ads.txt snippet info */}
              <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs text-emerald-300 font-mono font-medium">app-ads.txt root verified</span>
                </div>
                <a 
                  href="/app-ads.txt" 
                  target="_blank" 
                  className="text-[11px] text-cyan-400 hover:underline font-mono"
                >
                  view file &rarr;
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Down indicator */}
      <a 
        href="#apps" 
        className="absolute bottom-4 left-1/2 -translate-x-1/2 p-2 rounded-full text-slate-500 hover:text-cyan-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
}
