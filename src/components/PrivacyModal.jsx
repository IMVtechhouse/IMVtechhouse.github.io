import React from 'react';
import { X, ShieldCheck, ExternalLink } from 'lucide-react';

export default function PrivacyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl glass-panel-glow border border-slate-700 p-8 shadow-2xl bg-slate-950 text-slate-200">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-4">
          <ShieldCheck className="w-6 h-6 text-cyan-400" />
          <h2 className="font-heading text-2xl font-bold text-white">Privacy Policy</h2>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p className="text-slate-400 font-mono text-xs">
            Effective Date: October 2026 • Published by IMVtechHouse
          </p>

          <p>
            This privacy policy governs your use of software applications published by <strong>IMVtechHouse</strong>, including <em>Daily Planner</em> (<code className="text-cyan-400 font-mono">com.imvtechhouse.dailyplanner</code>), <em>PaisaFlow - Expense Manager</em> (<code className="text-cyan-400 font-mono">com.imvtechhouse.paisaflow</code>), and our developer services.
          </p>

          <h3 className="text-base font-bold text-white pt-2 border-t border-slate-800">1. Data Storage & Privacy-First Architecture</h3>
          <p>
            Your tasks, habits, and financial logs stay on your device. We believe personal organization and budget data belongs strictly to the user. We do not sell, rent, or monetize your personal daily entries.
          </p>

          <h3 className="text-base font-bold text-white pt-2 border-t border-slate-800">2. Advertising & Analytics</h3>
          <p>
            In free ad-supported applications like Daily Planner, we use Google AdMob to deliver advertisements. Google AdMob may collect and process information such as Advertising ID, device model, and performance metrics in accordance with Google's policies.
          </p>

          <h3 className="text-base font-bold text-white pt-2 border-t border-slate-800">3. Advertising Compliance</h3>
          <p>
            We partner with Google AdMob adhering strictly to industry standards to deliver secure, non-intrusive ad experiences and verify authorized advertising channels.
          </p>

          <h3 className="text-base font-bold text-white pt-2 border-t border-slate-800">4. Developer Contact Information</h3>
          <p>
            For support inquiries, feedback, or data requests, contact us at:<br />
            <strong>Studio:</strong> IMVtechHouse<br />
            <strong>Email:</strong> <a href="mailto:imvtechhouse@gmail.com" className="text-cyan-400 underline">imvtechhouse@gmail.com</a>
          </p>

          <div className="pt-4 flex items-center justify-between border-t border-slate-800">
            <a 
              href="/privacy.html" 
              target="_blank" 
              className="text-xs text-cyan-400 hover:underline flex items-center gap-1"
            >
              Open Permanent Policy URL <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors"
            >
              I Understand
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
