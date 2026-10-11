import React from 'react';
import { ExternalLink, Check, Smartphone, Clock, Download, TrendingUp, Calendar, CheckSquare, DollarSign, ArrowUpRight, ArrowDownLeft, Shield } from 'lucide-react';

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
            Engineered with modern Android architecture, intuitive interfaces, and offline-first database resilience.
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* APP 1: Daily Planner */}
          <div id="daily-planner" className="rounded-3xl glass-panel-glow p-8 border border-cyan-500/25 relative flex flex-col justify-between group hover:border-cyan-400/50 transition-all shadow-xl">
            
            <div>
              {/* Top Status */}
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
                  'Lightweight & Battery Efficient'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Custom Designed Mobile In-App UI Preview (No Console Screenshot) */}
              <div className="rounded-2xl border border-slate-800 bg-[#0b101b] p-5 mb-6 space-y-3.5 shadow-inner">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-semibold text-slate-200">Today's Schedule</span>
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    🔥 14-Day Streak
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/60">
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">✓</div>
                      <span className="text-xs text-slate-300 line-through">Review Morning Strategy & Standup</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">09:00 AM</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/60">
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">✓</div>
                      <span className="text-xs text-slate-300 line-through">ERP System Client Deployment</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">11:30 AM</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-cyan-950/20 border border-cyan-500/30">
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-md border border-cyan-400/60 flex items-center justify-center text-xs"></div>
                      <span className="text-xs text-cyan-200 font-medium">Daily Planner 2.0 Release Prep</span>
                    </div>
                    <span className="text-[10px] text-cyan-400 font-mono">03:00 PM</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="pt-2">
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                    <span>Task Completion</span>
                    <span className="text-cyan-400 font-mono font-semibold">85% Complete</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="w-[85%] h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full" />
                  </div>
                </div>
              </div>

            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
              <a
                href="https://play.google.com/store/apps/details?id=com.imvtechhouse.dailyplanner"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Download on Google Play
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* APP 2: PaisaFlow - Expense Manager */}
          <div id="paisaflow" className="rounded-3xl glass-panel-glow p-8 border border-indigo-500/25 relative flex flex-col justify-between group hover:border-indigo-400/50 transition-all shadow-xl">
            
            <div>
              {/* Top Status */}
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Live on Google Play
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
                A modern, privacy-first personal finance and expense manager built for real-world cashflow clarity. Features zero-permission offline UPI auto-detection, group bill splitting with zero debt residuals, multi-period budgets, and bank-grade statement exports.
              </p>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  'Offline UPI Auto-Detection (0 SMS)',
                  'Trip & Roommate Group Splitting',
                  'Cash, UPI & Credit Card Accounts',
                  'Daily, Weekly & Monthly Budgets',
                  'Day-to-Day Financial Analytics',
                  '100% Offline with Biometric Lock'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Custom Designed Mobile In-App UI Preview (No Console Screenshot) */}
              <div className="rounded-2xl border border-slate-800 bg-[#0b101b] p-5 mb-6 space-y-3.5 shadow-inner">
                {/* Balance Card */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-teal-950/30 border border-emerald-500/30 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Total Net Balance</span>
                    <div className="text-2xl font-heading font-extrabold text-white mt-0.5">₹48,250.00</div>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      <ArrowUpRight className="w-3 h-3" /> +14.2%
                    </span>
                    <div className="text-[10px] text-slate-400 mt-1">October Cycle</div>
                  </div>
                </div>

                {/* Flow Pills */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-emerald-400">
                      <ArrowDownLeft className="w-3.5 h-3.5" />
                      <span>Inflow</span>
                    </div>
                    <span className="font-mono font-semibold text-slate-200">₹75,000</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-rose-400">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                      <span>Outflow</span>
                    </div>
                    <span className="font-mono font-semibold text-slate-200">₹26,750</span>
                  </div>
                </div>

                {/* Category Bar */}
                <div className="pt-1">
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                    <span>Top Expense: Operations & Dining</span>
                    <span className="text-slate-300 font-mono">35%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden flex">
                    <div className="w-[35%] h-full bg-emerald-400" />
                    <div className="w-[25%] h-full bg-cyan-400" />
                    <div className="w-[20%] h-full bg-indigo-400" />
                    <div className="w-[20%] h-full bg-slate-600" />
                  </div>
                </div>
              </div>

            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
              <a
                href="https://play.google.com/store/apps/details?id=com.imvtechhouse.paisaflow"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Download on Google Play
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
