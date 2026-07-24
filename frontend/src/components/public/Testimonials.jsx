import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonialsList = [
    {
      quote:
        'LeadDesk Mini completely transformed how our sales team manages incoming inbound leads. The instant status toggles keep everyone aligned.',
      author: 'Sarah Jenkins',
      title: 'VP of Sales, CloudScale Tech',
      rating: 5,
    },
    {
      quote:
        'Clean, fast, and remarkably intuitive. The lead capture form connects smoothly with our backend without any extra configuration.',
      author: 'Marcus Vance',
      title: 'Founder, Apex Marketing Agency',
      rating: 5,
    },
    {
      quote:
        'The admin dashboard search and status filters make organizing thousands of prospect inquiries effortless. Highly recommended!',
      author: 'Elena Rostova',
      title: 'Head of Growth, DevSync Labs',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3">Customer Proof</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Loved by Growth Leaders & Sales Directors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsList.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-2xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex space-x-1 text-amber-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <h4 className="text-sm font-bold text-white">{item.author}</h4>
                <p className="text-xs text-slate-400">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
