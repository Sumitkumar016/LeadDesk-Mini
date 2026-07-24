import React from 'react';

export const TableSkeleton = ({ rows = 5 }) => {
  return (
    <div className="w-full animate-pulse space-y-4">
      {Array.from({ length: rows }).map((_, idx) => (
        <div
          key={idx}
          className="h-14 bg-slate-800/60 border border-slate-700/40 rounded-xl flex items-center justify-between px-6"
        >
          <div className="w-1/4 h-4 bg-slate-700/60 rounded"></div>
          <div className="w-1/5 h-4 bg-slate-700/60 rounded"></div>
          <div className="w-1/6 h-4 bg-slate-700/60 rounded"></div>
          <div className="w-1/6 h-6 bg-slate-700/60 rounded-full"></div>
          <div className="w-1/12 h-4 bg-slate-700/60 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export const CardSkeleton = ({ count = 4 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-pulse">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/40 space-y-3"
        >
          <div className="flex justify-between items-center">
            <div className="w-20 h-3 bg-slate-700/60 rounded"></div>
            <div className="w-8 h-8 rounded-lg bg-slate-700/60"></div>
          </div>
          <div className="w-16 h-8 bg-slate-700/70 rounded-md"></div>
          <div className="w-32 h-3 bg-slate-700/40 rounded"></div>
        </div>
      ))}
    </div>
  );
};
