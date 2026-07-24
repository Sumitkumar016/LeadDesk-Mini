import React, { useEffect } from 'react';
import { useLeads } from '../hooks/useLeads';
import LeadTable from '../components/admin/LeadTable';

const AdminLeadsPage = () => {
  const {
    leads,
    isLeadsLoading,
    fetchLeads,
    searchQuery,
    setSearchQuery,
    statusFilter,
    setStatusFilter,
    updateLeadStatus,
  } = useLeads();

  useEffect(() => {
    fetchLeads(searchQuery, statusFilter);
  }, [fetchLeads, searchQuery, statusFilter]);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-extrabold text-white tracking-tight">Leads Directory</h2>
        <p className="text-xs text-slate-400 mt-1">
          Manage, search, and update client inquiry statuses in real-time.
        </p>
      </div>

      <LeadTable
        leads={leads}
        isLoading={isLeadsLoading}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        onStatusUpdate={updateLeadStatus}
        onRefresh={() => fetchLeads(searchQuery, statusFilter)}
      />
    </div>
  );
};

export default AdminLeadsPage;
