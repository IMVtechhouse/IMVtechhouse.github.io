import React, { useState } from 'react';
import { ShieldCheck, Copy, Check, ExternalLink, Terminal, AlertCircle } from 'lucide-react';

export default function AdMobSection() {
  const [copied, setCopied] = useState(false);
  const snippet = 'google.com, pub-2752141161169735, DIRECT, f08c47fec0942fa0';

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="admob-verification" className="py-20 relative bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl glass-panel-glow border border-emerald-500/30 p-8 sm:p-10 relative overflow-hidden">
          
          {/* Accent glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Google AdMob Verification Hub
                </span>
                <span className="text-xs text-slate-400 font-mono">Status: Ready to Crawl</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                Official <span className="text-emerald-400">app-ads.txt</span> Root Endpoint
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                This website is pre-configured to host and serve the verified IAB <code className="text-emerald-400 font-mono">app-ads.txt</code> record directly at the root domain without requiring a paid domain name.
              </p>

              {/* Code Snippet Box */}
              <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    Served at: /app-ads.txt
                  </span>
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 font-mono cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy Snippet'}</span>
                  </button>
                </div>
                <div className="p-3 rounded-lg bg-black/60 font-mono text-xs text-emerald-400 overflow-x-auto select-all border border-slate-900">
                  {snippet}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="/app-ads.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs tracking-wide shadow-lg shadow-emerald-500/20 inline-flex items-center gap-1.5 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  View Live /app-ads.txt
                </a>
                <span className="text-xs text-slate-400 font-mono">
                  URL: https://imvtechhouse.github.io/app-ads.txt
                </span>
              </div>
            </div>

            {/* Right Column: 3 Quick Verification Steps */}
            <div className="lg:col-span-5 bg-slate-900/80 rounded-2xl p-6 border border-slate-800 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-cyan-400" />
                How to Complete AdMob Verification:
              </h3>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center shrink-0">1</span>
                  <div>
                    <strong className="text-white block">Update Play Console Website:</strong>
                    Go to <em>Grow &rarr; Store presence &rarr; Store settings</em> and set your Website to <code className="text-cyan-300 bg-slate-950 px-1 py-0.5 rounded">https://imvtechhouse.github.io</code>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center shrink-0">2</span>
                  <div>
                    <strong className="text-white block">Automatic Root Routing:</strong>
                    AdMob crawler fetches <code className="text-emerald-300 bg-slate-950 px-1 py-0.5 rounded">/app-ads.txt</code> from this GitHub Pages root.
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center shrink-0">3</span>
                  <div>
                    <strong className="text-white block">AdMob Verification:</strong>
                    Click <strong>Check for updates</strong> in your AdMob dashboard. It will turn green within 24-48 hours!
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
