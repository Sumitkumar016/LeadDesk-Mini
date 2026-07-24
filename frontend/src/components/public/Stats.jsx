import React from 'react';

const Stats = () => {
  const statsList = [
    { value: '500+', label: 'Active Enterprise Clients', subtext: 'Global SaaS companies' },
    { value: '1,200+', label: 'Inbound Leads Generated', subtext: 'Captured seamlessly' },
    { value: '98%', label: 'Client Satisfaction Rate', subtext: 'Based on 400+ reviews' },
    { value: '2.4x', label: 'Faster Lead Qualification', subtext: 'Compared to manual sheets' },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statsList.map((stat, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/60">
              <div className="text-4xl sm:text-5xl font-extrabold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-white mb-1">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
