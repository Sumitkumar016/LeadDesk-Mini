import React from 'react';
import { Zap, ShieldCheck, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Setup',
      description:
        'Zero complex onboarding. Start receiving validated lead submissions directly into your admin CRM in under 2 minutes.',
    },
    {
      icon: ShieldCheck,
      title: 'Bank-Grade Security',
      description:
        'Protected by JWT token authentication and bcrypt password encryption. Only authorized admin users gain access.',
    },
    {
      icon: Clock,
      title: 'Zero Latency Sync',
      description:
        'Real-time status updates sync instantly with your MongoDB database so your sales team never misses a follow-up.',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3">Why LeadDesk Mini</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built for Speed, Reliability, & Conversion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all hover:shadow-xl hover:shadow-indigo-500/5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-500 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
