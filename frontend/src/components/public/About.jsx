import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const highlights = [
    'Clean full-stack MERN Architecture',
    'Robust express-validator API payload protection',
    'Real-time status filtering & search query engine',
    'Optimized lightweight responsive UI layout',
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/40 border-y border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Description Column */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 text-indigo-400 text-xs font-semibold uppercase tracking-wider border border-slate-700">
              About LeadDesk Mini
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Streamlining Lead Capture & Sales Qualification
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              LeadDesk Mini was architected to bridge the gap between high-converting marketing landing pages and responsive internal CRM management. By stripping away bloated enterprise complexity, we provide a lean, high-speed solution designed specifically for growing organizations.
            </p>

            <ul className="space-y-3 pt-2">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-sm text-slate-300">
                  <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Visual Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur-2xl opacity-20 -z-10"></div>
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-xs font-mono text-slate-400">leaddesk-mini.internal/v1</span>
              </div>

              <div className="space-y-4 font-mono text-xs text-slate-300">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80">
                  <span className="text-emerald-400">POST</span> /api/leads <span className="text-slate-500">201 Created</span>
                  <p className="text-slate-400 mt-1">Status: "New" → Dispatched to Admin Queue</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80">
                  <span className="text-indigo-400">PATCH</span> /api/leads/66f8a/status <span className="text-slate-500">200 OK</span>
                  <p className="text-slate-400 mt-1">Status updated: "Contacted" → Admin Notification Sent</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
