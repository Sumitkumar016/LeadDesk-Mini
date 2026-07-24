import React, { createContext, useState, useCallback, useContext } from 'react';
import { leadService, dashboardService } from '../services/api';
import { AuthContext } from './AuthContext';
import toast from 'react-hot-toast';

export const LeadContext = createContext();

export const LeadProvider = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  const [leads, setLeads] = useState([]);
  const [stats, setStats] = useState({
    totalLeads: 0,
    newLeads: 0,
    contactedLeads: 0,
    closedLeads: 0,
  });
  
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  
  const [isLeadsLoading, setIsLeadsLoading] = useState(false);
  const [isStatsLoading, setIsStatsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch Dashboard Stats
  const fetchStats = useCallback(async () => {
    if (!isAuthenticated) return;
    setIsStatsLoading(true);
    try {
      const data = await dashboardService.getStats();
      if (data.success) {
        setStats(data.stats);
      }
    } catch (error) {
      console.error('[Fetch Stats Error]', error);
    } finally {
      setIsStatsLoading(false);
    }
  }, [isAuthenticated]);

  // Fetch Leads with active search and filter
  const fetchLeads = useCallback(async (search = searchQuery, status = statusFilter) => {
    if (!isAuthenticated) return;
    setIsLeadsLoading(true);
    try {
      const data = await leadService.getLeads(search, status);
      if (data.success) {
        setLeads(data.leads);
      }
    } catch (error) {
      console.error('[Fetch Leads Error]', error);
      toast.error('Failed to load leads list');
    } finally {
      setIsLeadsLoading(false);
    }
  }, [isAuthenticated, searchQuery, statusFilter]);

  // Synchronize search and filter state changes in real-time across components
  React.useEffect(() => {
    if (!isAuthenticated) return;
    const timer = setTimeout(() => {
      leadService.getLeads(searchQuery, statusFilter)
        .then((data) => {
          if (data.success) {
            setLeads(data.leads);
          }
        })
        .catch((error) => console.error('[Search Sync Error]', error));
    }, 250);
    return () => clearTimeout(timer);
  }, [searchQuery, statusFilter, isAuthenticated]);

  // Submit Lead (Public User Form)
  const submitLead = async (leadData) => {
    setIsSubmitting(true);
    try {
      const data = await leadService.createLead(leadData);
      if (data.success) {
        toast.success(data.message || 'Lead submitted successfully!');
        return { success: true };
      }
    } catch (error) {
      const msg = error.response?.data?.message || 'Failed to submit lead. Please try again.';
      toast.error(msg);
      return { success: false, error: msg };
    } finally {
      setIsSubmitting(false);
    }
  };

  // Update Status & Notes of Lead (Admin)
  const updateLeadStatus = async (leadId, updateData) => {
    try {
      const data = await leadService.updateStatus(leadId, updateData);
      if (data.success && data.lead) {
        toast.success(data.message || 'Lead updated successfully');
        
        // Optimistically update local leads list
        setLeads((prevLeads) =>
          prevLeads.map((lead) =>
            lead._id === leadId ? data.lead : lead
          )
        );

        // Refresh stats counter concurrently
        fetchStats();
        return { success: true, lead: data.lead };
      }
    } catch (error) {
      const msg = error.response?.data?.message || 'Failed to update lead details';
      toast.error(msg);
      return { success: false, error: msg };
    }
  };

  return (
    <LeadContext.Provider
      value={{
        leads,
        stats,
        searchQuery,
        setSearchQuery,
        statusFilter,
        setStatusFilter,
        isLeadsLoading,
        isStatsLoading,
        isSubmitting,
        fetchLeads,
        fetchStats,
        submitLead,
        updateLeadStatus,
      }}
    >
      {children}
    </LeadContext.Provider>
  );
};
