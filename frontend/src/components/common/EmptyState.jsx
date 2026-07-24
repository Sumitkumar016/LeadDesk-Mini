import React from 'react';
import { Inbox } from 'lucide-react';

const EmptyState = ({
  title = 'No leads found',
  description = 'No matching lead inquiries were found for your query.',
  actionText,
  onAction,
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center bg-slate-900/40 border border-dashed border-slate-800 rounded-2xl">
      <div className="w-16 h-16 rounded-2xl bg-indigo-950/50 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/10">
        <Inbox className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
      <p className="text-sm text-slate-400 max-w-sm mb-6">{description}</p>
      {actionText && onAction && (
        <button
          onClick={onAction}
          className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-indigo-400 hover:text-indigo-300 font-medium text-sm border border-slate-700 transition-colors"
        >
          {actionText}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
