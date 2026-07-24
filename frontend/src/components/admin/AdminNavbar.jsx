import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { ShieldCheck, ExternalLink, User, Menu, X, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminNavbar = ({ onToggleSidebar, isSidebarOpen }) => {
  const { user } = useAuth();

  return (
    <header className="h-16 bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30">
      
      {/* Left: Mobile Hamburger + Logo + Welcome Title */}
      <div className="flex items-center space-x-3">
        {/* Hamburger Menu Toggle (Visible below lg: 1024px) */}
        <button
          onClick={onToggleSidebar}
          className="lg:hidden p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700 focus:outline-none transition-colors"
          aria-label="Toggle Navigation Drawer"
        >
          {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Mobile Brand Badge */}
        <div className="flex lg:hidden items-center space-x-2">
          <div className="w-7 h-7 rounded-lg gradient-bg flex items-center justify-center">
            <Zap className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-bold text-white text-sm">LeadDesk</span>
        </div>

        {/* Desktop Welcome Title */}
        <div className="hidden sm:flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-indigo-950 border border-indigo-500/30 text-indigo-400 flex items-center justify-center">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-bold text-white leading-tight">Welcome, Admin</h1>
            <p className="text-xs text-slate-400 font-mono">{user?.email || 'admin@leaddesk.com'}</p>
          </div>
        </div>
      </div>

      {/* Right: Action Links */}
      <div className="flex items-center space-x-3 sm:space-x-4">
        <Link
          to="/"
          target="_blank"
          className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 hover:text-white border border-slate-700 transition-colors"
        >
          <span>View Public Site</span>
          <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
        </Link>

        <div className="flex items-center space-x-2 pl-3 sm:pl-4 border-l border-slate-800">
          <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
            <User className="w-4 h-4" />
          </div>
          <span className="text-xs font-medium text-slate-300 hidden md:inline">Admin User</span>
        </div>
      </div>

    </header>
  );
};

export default AdminNavbar;
