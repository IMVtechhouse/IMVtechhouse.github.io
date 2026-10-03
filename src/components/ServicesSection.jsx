import React from 'react';
import { Smartphone, Globe, Database, ShieldCheck, Cpu, Code2, Server, Workflow, CheckCircle, ArrowRight } from 'lucide-react';

export default function ServicesSection({ onOpenContact }) {
  const services = [
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      badge: '3+ Years Production',
      badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
      description: 'End-to-end Android & cross-platform mobile application development from initial wireframing to Google Play Store production release and monetization.',
      capabilities: [
        'Android Studio & Flutter Cross-Platform',
        'Clean MVVM & Clean Architecture',
        'Room Database & Offline-First Sync',
        'Google Play Closed/Open Testing & Launch',
        'Google AdMob & app-ads.txt Monetization',
        'Push Notifications & Background Services'
      ],
      color: 'from-cyan-500/20 to-blue-500/5'
    },
    {
      icon: Globe,
      title: 'Custom Modern Web Platforms',
      badge: 'High Performance & 3D',
      badgeColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
      description: 'Bespoke web applications and brand portals built with modern frameworks, Three.js 3D animations, sub-second page loads, and responsive UX across all screen sizes.',
      capabilities: [
        'React, Vite, Next.js Ecosystems',
        'Interactive Three.js & Canvas Visuals',
        'Core Web Vitals & Sub-Second Latency',
        'Secure RESTful & GraphQL Endpoints',
        'Internationalization & Multi-Currency',
        'Cloudflare / Vercel / GitHub Pages Hosting'
      ],
      color: 'from-indigo-500/20 to-purple-500/5'
    },
    {
      icon: Database,
      title: 'Enterprise ERP & Business Suites',
      badge: 'Tailored Automation',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      description: 'Scalable Enterprise Resource Planning (ERP) systems built around your specific business processes, inventory tracking, financial flows, and employee access levels.',
      capabilities: [
        'Inventory & Supply Chain Tracking',
        'Role-Based Access Control (RBAC)',
        'Financial Ledger & Automated Invoicing',
        'Real-time Operational Dashboards',
        'Data Export, PDF & Excel Reports',
        'Scalable Relational & NoSQL Databases'
      ],
      color: 'from-emerald-500/20 to-teal-500/5'
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-950/70 border-t border-slate-900">
      
      {/* Decorative background grid */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            Core Engineering Competencies
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
            Comprehensive Solutions with <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">3+ Years of Experience</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            From consumer mobile apps serving thousands to mission-critical ERP backbones powering business operations.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="rounded-3xl glass-panel p-8 flex flex-col justify-between border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-1 duration-300 relative group overflow-hidden"
              >
                {/* Glow accent */}
                <div className={`absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl ${service.color} rounded-full blur-3xl pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity`} />

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors shadow-lg">
                      <Icon className="w-7 h-7 text-cyan-400" />
                    </div>
                    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${service.badgeColor}`}>
                      {service.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mt-2.5">
                      {service.description}
                    </p>
                  </div>

                  {/* Capabilities List */}
                  <div className="space-y-2.5 pt-2 border-t border-slate-800/80">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      Core Stack & Capabilities:
                    </span>
                    {service.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 relative z-10">
                  <button
                    onClick={onOpenContact}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>Discuss Project</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Badges Banner */}
        <div className="mt-16 p-6 rounded-2xl glass-panel border border-slate-800/80 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
          <span className="text-slate-200 font-bold uppercase tracking-wider font-sans">Engineering Technologies:</span>
          <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-cyan-300">Android SDK</span>
          <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-cyan-300">Flutter & Dart</span>
          <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-sky-300">React & Vite</span>
          <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-indigo-300">Three.js 3D</span>
          <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-purple-300">Tailwind CSS</span>
          <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-emerald-300">Node & REST APIs</span>
          <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-amber-300">PostgreSQL / SQLite</span>
          <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400">Google AdMob</span>
        </div>

      </div>
    </section>
  );
}
