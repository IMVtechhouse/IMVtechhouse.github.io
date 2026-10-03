import React from 'react';
import { ExternalLink, Check, Sparkles, Smartphone, ShieldCheck, Clock, Award, Star, Download, TrendingUp } from 'lucide-react';

export default function AppsSection({ onOpenContact }) {
  return (
    <section id="apps" className="py-24 relative overflow-hidden bg-slate-950/40 border-t border-slate-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
            Our Mobile Ecosystem
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
            Built for Real Impact on <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Google Play</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Crafted with clean Android architecture, seamless animations, and privacy-first local databases.
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* APP 1: Daily Planner */}
          <div id="daily-planner" className="rounded-3xl glass-panel-glow p-8 border border-cyan-500/25 relative flex flex-col justify-between group hover:border-cyan-400/50 transition-all shadow-xl">
            
            {/* Top Status */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Live on Google Play
                </span>
                <span className="text-xs font-mono text-slate-400">
                  com.imvtechhouse.dailyplanner
                </span>
              </div>

              {/* Title & Icon */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-700 via-indigo-600 to-cyan-500 p-0.5 shadow-lg shadow-indigo-500/20 shrink-0 flex items-center justify-center">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                    <span className="text-2xl font-bold bg-gradient-to-br from-cyan-400 to-indigo-400 bg-clip-text text-transparent">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    Daily Planner
                  </h3>
                  <p className="text-sm text-slate-300 mt-1">
                    Smart Task Prioritization, Habit Forming & Productivity Analytics
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Designed to eliminate cognitive overload. Daily Planner gives users an intuitive task matrix, automatic habit streaks, category filtering, and weekly completion trends to help users conquer their daily goals.
              </p>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  'Smart Habit & Streak Tracker',
                  'Visual Completion Graphs',
                  'Dark & Light Dynamic Themes',
                  'Offline-First Local Storage',
                  'Priority & Category Filtering',
                  'Google AdMob Integrated'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* App Screenshot Preview Card */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/80 mb-6 group/img">
                <img 
                  src="/assets/daily-planner.png" 
                  alt="Daily Planner App on Google Play" 
                  className="w-full h-56 object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                  <span className="font-medium">Play Store Listing Preview</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900/90 text-cyan-400 font-mono">Verified AdMob</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
              <a
                href="https://play.google.com/store/apps/details?id=com.imvtechhouse.dailyplanner"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all"
              >
                <Download className="w-4 h-4" />
                Get on Google Play
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="/app-ads.txt"
                target="_blank"
                className="py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-mono border border-slate-700 transition-colors"
                title="View app-ads.txt verification"
              >
                app-ads.txt
              </a>
            </div>

          </div>

          {/* APP 2: PaisaFlow - Expense Manager */}
          <div id="paisaflow" className="rounded-3xl glass-panel-glow p-8 border border-indigo-500/25 relative flex flex-col justify-between group hover:border-indigo-400/50 transition-all shadow-xl">
            
            {/* Top Status */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  <Clock className="w-3 h-3 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
                  Closed Testing Phase (11/14 Days)
                </span>
                <span className="text-xs font-mono text-slate-400">
                  com.imvtechhouse.paisaflow
                </span>
              </div>

              {/* Title & Icon */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-cyan-500 p-0.5 shadow-lg shadow-teal-500/20 shrink-0 flex items-center justify-center">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                    <span className="text-2xl font-bold bg-gradient-to-br from-emerald-400 to-teal-300 bg-clip-text text-transparent">₹</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    PaisaFlow - Expense Manager
                  </h3>
                  <p className="text-sm text-slate-300 mt-1">
                    Smart Financial Tracking, Budget Analytics & Cash Flow Management
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                A modern expense and personal finance manager built to give users absolute clarity over cash inflows and outflows. Currently in Google Play Closed Testing with 12 active continuous testers, preparing for public production release.
              </p>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  '1-Tap Quick Expense Logging',
                  'Category Breakdown & Charts',
                  'Monthly Budget Target Alerts',
                  '100% Private Offline Database',
                  'Multi-Currency & Reports Export',
                  'Google Play Production Ready'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* App Screenshot Preview Card */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/80 mb-6 group/img">
                <img 
                  src="/assets/paisaflow.png" 
                  alt="PaisaFlow on Google Play Console" 
                  className="w-full h-56 object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                  <span className="font-medium">12 Testers Opted In • 11/14 Days Complete</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[11px]">Production Soon</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
              <button
                onClick={onOpenContact}
                className="flex-1 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                Join Beta or Request Access
              </button>
              <div className="py-2.5 px-3 rounded-xl bg-slate-900/80 text-slate-400 text-xs text-center border border-slate-800 font-mono">
                Stage: Closed Test
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
