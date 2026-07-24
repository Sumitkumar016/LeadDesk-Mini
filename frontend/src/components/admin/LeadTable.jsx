import React, { useState } from 'react';
import StatusBadge from './StatusBadge';
import { TableSkeleton } from '../common/SkeletonLoader';
import EmptyState from '../common/EmptyState';
import LeadDetailsModal from './LeadDetailsModal';
import { formatCurrency, formatDate } from '../../utils/formatters';
import { Search, Filter, RefreshCw, Eye } from 'lucide-react';

const LeadTable = ({
  leads = [],
  isLoading = false,
  searchQuery = '',
  onSearchChange,
  statusFilter = 'All',
  onStatusFilterChange,
  onStatusUpdate,
  onRefresh,
}) => {
  const [selectedLead, setSelectedLead] = useState(null);

  return (
    <div className="space-y-6">
      
      {/* Control Bar: Search & Status Filter */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
        
        {/* Search Bar */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by Name, Email, Message, or Status..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
          />
        </div>

        {/* Status Dropdown Filter */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 bg-slate-950/80 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-400">
            <Filter className="w-3.5 h-3.5 text-indigo-400" />
            <span className="font-semibold text-slate-300">Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => onStatusFilterChange(e.target.value)}
              className="bg-transparent text-white font-medium text-xs focus:outline-none cursor-pointer"
            >
              <option value="All" className="bg-slate-900 text-white">All Statuses</option>
              <option value="New" className="bg-slate-900 text-white">New Only</option>
              <option value="Contacted" className="bg-slate-900 text-white">Contacted Only</option>
              <option value="Closed" className="bg-slate-900 text-white">Closed Only</option>
            </select>
          </div>

          <button
            onClick={onRefresh}
            title="Refresh Leads Table"
            className="p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl border border-slate-700 transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
        </div>

      </div>

      {/* Table Section */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
        {isLoading ? (
          <div className="p-6">
            <TableSkeleton rows={6} />
          </div>
        ) : leads.length === 0 ? (
          <EmptyState
            title="No leads found"
            description="Try clearing your search query or changing your status filter."
            actionText="Reset Filters"
            onAction={() => {
              onSearchChange('');
              onStatusFilterChange('All');
            }}
          />
        ) : (
          <div className="overflow-x-auto max-h-[650px] relative">
            <table className="w-full text-left text-sm text-slate-300 border-collapse">
              <thead className="bg-slate-950 sticky top-0 z-10 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800 backdrop-blur-md">
                <tr>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Budget</th>
                  <th className="px-6 py-4">Message snippet</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Created Date</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {leads.map((lead) => (
                  <tr
                    key={lead._id}
                    className="hover:bg-slate-800/40 transition-colors group"
                  >
                    {/* Name */}
                    <td className="px-6 py-4 font-semibold text-white">
                      {lead.name}
                    </td>

                    {/* Email */}
                    <td className="px-6 py-4 font-mono text-xs text-slate-300">
                      <a href={`mailto:${lead.email}`} className="hover:text-indigo-400 underline">
                        {lead.email}
                      </a>
                    </td>

                    {/* Budget */}
                    <td className="px-6 py-4 font-semibold text-emerald-400">
                      {formatCurrency(lead.budget)}
                    </td>

                    {/* Message Snippet */}
                    <td className="px-6 py-4 max-w-[180px] sm:max-w-xs truncate text-slate-400 text-xs" title={lead.message}>
                      {lead.message}
                    </td>

                    {/* Status Badge */}
                    <td className="px-6 py-4">
                      <StatusBadge status={lead.status} />
                    </td>

                    {/* Created Date */}
                    <td className="px-6 py-4 text-xs text-slate-400 whitespace-nowrap">
                      {formatDate(lead.createdAt)}
                    </td>

                    {/* Actions: View Details Button & Status Dropdown */}
                    <td className="px-6 py-4 text-right whitespace-nowrap">
                      <div className="flex flex-wrap items-center justify-end gap-2">
                        <button
                          onClick={() => setSelectedLead(lead)}
                          className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-indigo-950/80 hover:bg-indigo-900 border border-indigo-500/30 text-xs font-semibold text-indigo-300 hover:text-white transition-all shadow-sm"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View</span>
                        </button>

                        <select
                          value={lead.status}
                          onChange={(e) => onStatusUpdate(lead._id, e.target.value)}
                          className="bg-slate-950 border border-slate-700 text-slate-200 text-xs font-semibold rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-indigo-500 cursor-pointer hover:border-slate-600 transition-colors"
                        >
                          <option value="New">Mark New</option>
                          <option value="Contacted">Mark Contacted</option>
                          <option value="Closed">Mark Closed</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Reusable Lead Details Modal */}
      <LeadDetailsModal
        isOpen={!!selectedLead}
        lead={selectedLead}
        onClose={() => setSelectedLead(null)}
        onSave={async (id, updateData) => {
          const result = await onStatusUpdate(id, updateData);
          if (result?.success && result.lead) {
            setSelectedLead(result.lead);
          }
          return result;
        }}
      />

    </div>
  );
};

export default LeadTable;

