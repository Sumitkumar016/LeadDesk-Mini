import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, TrendingUp, Users, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-purple-600/15 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tech Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-8 shadow-lg shadow-indigo-500/10 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Next-Gen CRM & Sales Automation</span>
        </div>

        {/* Strong Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6">
          Capture High-Intent Leads & <span className="gradient-text">Close Deals 3x Faster</span>
        </h1>

        {/* Short Description */}
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          LeadDesk Mini gives modern sales teams a centralized dashboard to track inbound lead inquiries, qualify prospects instantly, and streamline pipeline management.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl gradient-bg text-white font-semibold text-base shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2"
          >
            <span>Get Started Free</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700 font-semibold text-base transition-all hover:text-white flex items-center justify-center"
          >
            Contact Sales Team
          </a>
        </div>

        {/* Key Highlights Pill */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-6 border-t border-slate-800/60 text-slate-400 text-sm">
          <div className="flex items-center justify-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Instant Lead Routing</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <TrendingUp className="w-4 h-4 text-indigo-400" />
            <span>Real-time Status Tracking</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-purple-400" />
            <span>JWT Secured Admin Dashboard</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
