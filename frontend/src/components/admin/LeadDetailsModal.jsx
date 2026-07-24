import React, { useState, useEffect } from 'react';
import {
  X,
  User,
  Mail,
  DollarSign,
  Calendar,
  FileText,
  Loader2,
  Save,
  Tag,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';
import { formatCurrency, formatDate } from '../../utils/formatters';
import toast from 'react-hot-toast';

const LeadDetailsModal = ({ isOpen, lead, onClose, onSave }) => {
  const [status, setStatus] = useState('New');
  const [isSaving, setIsSaving] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  // Synchronize status state when lead changes or modal opens
  useEffect(() => {
    if (lead) {
      setStatus(lead.status || 'New');
    }
  }, [lead]);

  // Handle Close on Escape Key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen && !isSaving) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isSaving, onClose]);

  if (!isOpen || !lead) return null;

  const handleCopyText = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    toast.success(`Copied ${fieldName} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    const result = await onSave(lead._id, { status });
    setIsSaving(false);
    if (result?.success) {
      onClose();
    }
  };

  const statusOptions = [
    {
      id: 'New',
      label: 'New Lead',
      description: 'Awaiting initial contact',
      icon: Clock,
      activeStyle: 'bg-amber-500/15 border-amber-500/50 text-amber-300 shadow-lg shadow-amber-500/10 ring-2 ring-amber-500/30',
      badgeDot: 'bg-amber-400',
    },
    {
      id: 'Contacted',
      label: 'Contacted',
      description: 'Communication in progress',
      icon: CheckCircle2,
      activeStyle: 'bg-indigo-500/15 border-indigo-500/50 text-indigo-300 shadow-lg shadow-indigo-500/10 ring-2 ring-indigo-500/30',
      badgeDot: 'bg-indigo-400',
    },
    {
      id: 'Closed',
      label: 'Closed Deal',
      description: 'Conversion finalized',
      icon: ShieldCheck,
      activeStyle: 'bg-emerald-500/15 border-emerald-500/50 text-emerald-300 shadow-lg shadow-emerald-500/10 ring-2 ring-emerald-500/30',
      badgeDot: 'bg-emerald-400',
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in"
      onClick={(e) => {
        // Close on clicking backdrop outside modal content
        if (e.target === e.currentTarget && !isSaving) {
          onClose();
        }
      }}
    >
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-800/90 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[85vh]">
        
        {/* Modal Header */}
        <div className="px-6 py-5 bg-slate-950/90 border-b border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center space-x-3.5 min-w-0">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 border border-indigo-400/30 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/20 shrink-0">
              {lead.name.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg font-extrabold text-white tracking-tight truncate">
                {lead.name}
              </h3>
              <p className="text-xs text-slate-400 font-mono flex items-center space-x-1.5 mt-0.5 truncate">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 animate-pulse"></span>
                <span>Lead ID: {lead._id}</span>
              </p>
            </div>
          </div>
          
          <button
            type="button"
            onClick={onClose}
            disabled={isSaving}
            className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800/60 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all disabled:opacity-50 shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-7 space-y-6 overflow-y-auto flex-1">
          
          {/* Top Info Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            
            {/* Email Card */}
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200 space-y-2 group shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>Email Address</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopyText(lead.email, 'Email')}
                  className="text-slate-500 hover:text-indigo-400 transition-colors p-1"
                  title="Copy email"
                >
                  {copiedField === 'Email' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              <p className="text-sm font-semibold text-white truncate" title={lead.email}>
                <a
                  href={`mailto:${lead.email}`}
                  className="hover:text-indigo-400 underline transition-colors flex items-center justify-between"
                >
                  <span className="truncate">{lead.email}</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-indigo-400 shrink-0 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </p>
            </div>

            {/* Budget Card */}
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-emerald-500/40 hover:-translate-y-0.5 transition-all duration-200 space-y-2 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Project Budget</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  USD
                </span>
              </div>
              <p className="text-base font-extrabold text-emerald-400">
                {formatCurrency(lead.budget)}
              </p>
            </div>

            {/* Date Card */}
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-purple-500/40 hover:-translate-y-0.5 transition-all duration-200 space-y-2 shadow-sm">
              <div className="flex items-center space-x-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Submission Date</span>
              </div>
              <p className="text-xs font-semibold text-slate-200 truncate">
                {formatDate(lead.createdAt)}
              </p>
            </div>

          </div>

          {/* Inquiry Message Section */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
                <FileText className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Inquiry Message</span>
              </div>
              <button
                type="button"
                onClick={() => handleCopyText(lead.message, 'Message')}
                className="text-xs text-slate-400 hover:text-indigo-400 flex items-center space-x-1 transition-colors px-2 py-1 rounded-lg hover:bg-slate-800/60"
              >
                {copiedField === 'Message' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Message</span>
                  </>
                )}
              </button>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-slate-800/90 text-sm text-slate-300 leading-relaxed whitespace-pre-wrap max-h-44 overflow-y-auto shadow-inner relative group">
              {lead.message}
            </div>
          </div>

          <div className="border-t border-slate-800/80 pt-2"></div>

          {/* Interactive Status Selector */}
          <form onSubmit={handleSave} id="lead-edit-form" className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
                <Tag className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Update Lead Status</span>
              </label>
              <span className="text-xs text-slate-400">Click a status pill to select</span>
            </div>

            {/* Status Option Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {statusOptions.map((opt) => {
                const Icon = opt.icon;
                const isSelected = status === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    disabled={isSaving}
                    onClick={() => setStatus(opt.id)}
                    className={`p-3.5 rounded-2xl border text-left flex items-start space-x-3 transition-all duration-200 ${
                      isSelected
                        ? opt.activeStyle
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:bg-slate-800/60 hover:text-slate-200 hover:border-slate-700'
                    } disabled:opacity-50`}
                  >
                    <div
                      className={`p-2 rounded-xl border shrink-0 ${
                        isSelected
                          ? 'bg-slate-900/80 border-transparent text-white'
                          : 'bg-slate-900 border-slate-800 text-slate-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">{opt.label}</span>
                        {isSelected && (
                          <span className={`w-2 h-2 rounded-full ${opt.badgeDot} animate-ping`}></span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5 truncate">{opt.description}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </form>

        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 bg-slate-950/90 border-t border-slate-800/80 flex flex-col-reverse sm:flex-row items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            disabled={isSaving}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700/90 text-slate-300 hover:text-white font-semibold text-sm border border-slate-700/80 focus:outline-none focus:ring-2 focus:ring-slate-700 transition-all disabled:opacity-50"
          >
            Close
          </button>

          <button
            type="submit"
            form="lead-edit-form"
            disabled={isSaving}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl gradient-bg hover:opacity-95 active:scale-[0.99] text-white font-semibold text-sm shadow-md shadow-indigo-600/30 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSaving ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Saving Changes...</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save Status Changes</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};

export default LeadDetailsModal;
