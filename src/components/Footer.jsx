import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import Logo from './Logo';

export default function Footer({ onOpenContact, onOpenPrivacy }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Logo />
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Engineering high-impact Android applications, bespoke web platforms, and automated enterprise ERP solutions with 3+ years of production experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Products & Apps
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#daily-planner" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <span className="text-cyan-400">•</span> Daily Planner (Google Play)
                </a>
              </li>
              <li>
                <a href="#paisaflow" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-400">•</span> PaisaFlow - Expense Manager
                </a>
              </li>
              <li>
                <a href="#client-work" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <span className="text-indigo-400">•</span> Globalway Impex Platform
                </a>
              </li>
              <li>
                <a href="https://play.google.com/store/apps/details?id=com.imvtechhouse.dailyplanner" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  Google Play Store Developer Page
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance & Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Compliance & Contact
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="/privacy.html" target="_blank" className="hover:text-cyan-400 transition-colors">
                  Privacy Policy (Official Play Store URL)
                </a>
              </li>
              <li>
                <a href="mailto:imvtechhouse@gmail.com" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  imvtechhouse@gmail.com
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenContact}
                  className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-white transition-colors cursor-pointer"
                >
                  Start a Project Inquiry
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} IMVtechHouse. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={onOpenPrivacy} className="hover:text-slate-300 transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
