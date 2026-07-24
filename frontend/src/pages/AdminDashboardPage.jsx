import React, { useEffect } from 'react';
import { useLeads } from '../hooks/useLeads';
import DashboardCard from '../components/admin/DashboardCard';
import LeadTable from '../components/admin/LeadTable';
import { CardSkeleton } from '../components/common/SkeletonLoader';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, RefreshCw } from 'lucide-react';

const AdminDashboardPage = () => {
  const {
    stats,
    leads,
    isStatsLoading,
    isLeadsLoading,
    fetchStats,
    fetchLeads,
    searchQuery,
    setSearchQuery,
    statusFilter,
    setStatusFilter,
    updateLeadStatus,
  } = useLeads();

  useEffect(() => {
    fetchStats();
    fetchLeads(searchQuery, statusFilter);
  }, [fetchStats, fetchLeads, searchQuery, statusFilter]);

  return (
    <div className="space-y-8">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-white tracking-tight">Executive Dashboard</h2>
          <p className="text-xs text-slate-400 mt-1">
            Real-time analytics and inbound lead pipeline performance.
          </p>
        </div>

        <button
          onClick={() => {
            fetchStats();
            fetchLeads(searchQuery, statusFilter);
          }}
          className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white flex items-center space-x-2 transition-all"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isStatsLoading ? 'animate-spin' : ''}`} />
          <span>Refresh Data</span>
        </button>
      </div>

      {/* Statistics Cards Grid */}
      {isStatsLoading ? (
        <CardSkeleton count={4} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard
            title="Total Leads"
            count={stats.totalLeads}
            type="total"
            subtext="All Inquiries"
          />
          <DashboardCard
            title="New Leads"
            count={stats.newLeads}
            type="new"
            subtext="Action Needed"
          />
          <DashboardCard
            title="Contacted"
            count={stats.contactedLeads}
            type="contacted"
            subtext="In Progress"
          />
          <DashboardCard
            title="Closed Deals"
            count={stats.closedLeads}
            type="closed"
            subtext="Converted"
          />
        </div>
      )}

      {/* Main Leads Table */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white tracking-tight flex items-center space-x-2">
            <Zap className="w-5 h-5 text-indigo-400" />
            <span>Recent Lead Inquiries</span>
          </h3>
          <Link
            to="/admin/leads"
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center space-x-1"
          >
            <span>View Full Directory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
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

    </div>
  );
};

export default AdminDashboardPage;
