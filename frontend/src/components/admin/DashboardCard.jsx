import React from 'react';
import { Users, Clock, CheckCircle2, XCircle } from 'lucide-react';

const DashboardCard = ({ title, count, type = 'total', subtext }) => {
  const getCardStyle = () => {
    switch (type) {
      case 'new':
        return {
          icon: Clock,
          iconBg: 'bg-amber-950/60 border-amber-500/30 text-amber-400',
          badgeBg: 'bg-amber-500/10 text-amber-300',
        };
      case 'contacted':
        return {
          icon: CheckCircle2,
          iconBg: 'bg-indigo-950/60 border-indigo-500/30 text-indigo-400',
          badgeBg: 'bg-indigo-500/10 text-indigo-300',
        };
      case 'closed':
        return {
          icon: XCircle,
          iconBg: 'bg-emerald-950/60 border-emerald-500/30 text-emerald-400',
          badgeBg: 'bg-emerald-500/10 text-emerald-300',
        };
      default:
        return {
          icon: Users,
          iconBg: 'bg-purple-950/60 border-purple-500/30 text-purple-400',
          badgeBg: 'bg-purple-500/10 text-purple-300',
        };
    }
  };

  const config = getCardStyle();
  const Icon = config.icon;

  return (
    <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl shadow-black/20 hover:border-slate-700 transition-all">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{title}</span>
        <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${config.iconBg}`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>

      <div className="flex items-baseline justify-between">
        <span className="text-3xl font-extrabold text-white tracking-tight">{count}</span>
        <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${config.badgeBg}`}>
          {subtext}
        </span>
      </div>
    </div>
  );
};

export default DashboardCard;
