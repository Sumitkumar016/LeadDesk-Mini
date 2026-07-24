import React from 'react';
import { Target, BarChart3, Users, Cpu } from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      icon: Target,
      title: 'Inbound Lead Capture',
      description:
        'Seamlessly record prospect inquiries from your high-converting landing pages with zero data loss or latency.',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: BarChart3,
      title: 'Sales Pipeline Analytics',
      description:
        'Real-time metrics on total leads, conversion stages, and closed accounts to maximize revenue predictability.',
      color: 'from-indigo-500 to-purple-600',
    },
    {
      icon: Users,
      title: 'Lead Qualification & Status',
      description:
        'Categorize every incoming opportunity into New, Contacted, or Closed statuses with single-click admin controls.',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: Cpu,
      title: 'Smart CRM Workflows',
      description:
        'Centralize client inquiries, budget allocations, and communication history in an intuitive cloud platform.',
      color: 'from-pink-500 to-rose-600',
    },
  ];

  return (
    <section id="services" className="py-20 relative bg-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3">Our Core Capabilities</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Designed for Modern Sales Teams & SaaS Agencies
          </p>
          <p className="mt-4 text-slate-400 text-base">
            Everything you need to capture, organize, and convert inbound leads effortlessly.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 flex flex-col justify-between relative group hover:border-indigo-500/40"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-6 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center text-xs font-semibold text-indigo-400 group-hover:text-indigo-300">
                  <span>Explore Feature</span>
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
