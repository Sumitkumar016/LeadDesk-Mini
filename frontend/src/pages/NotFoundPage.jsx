import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-6">
        <div className="text-8xl font-black text-transparent bg-clip-text gradient-bg">
          404
        </div>
        <h1 className="text-2xl font-bold text-white">Page Not Found</h1>
        <p className="text-sm text-slate-400">
          The requested page URL does not exist or has been relocated.
        </p>
        <div className="pt-4 flex justify-center space-x-4">
          <Link
            to="/"
            className="px-5 py-2.5 rounded-xl gradient-bg text-white font-semibold text-xs flex items-center space-x-2 shadow-lg shadow-indigo-600/30 hover:opacity-90"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
