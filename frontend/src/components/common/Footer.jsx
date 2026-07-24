import React from 'react';
import { Zap, Twitter, Linkedin, Github, Mail, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* Brand Column */}
          <div className="space-y-4 md:col-span-1">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center shadow-md shadow-indigo-500/20">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                LeadDesk <span className="gradient-text">Mini</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Empowering modern sales & growth teams with lightning-fast lead capture, real-time qualification, and CRM analytics.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#contact" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Product</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#hero" className="hover:text-indigo-400 transition-colors">Overview</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-indigo-400 transition-colors">Features</a></li>
              <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Lead Form</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#about" className="hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-indigo-400 transition-colors">Testimonials</a></li>
              <li><Link to="/login" className="hover:text-indigo-400 transition-colors">Admin Portal</Link></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter / Contact Info */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">LeadDesk CRM</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Designed for hyper-scaling startups and modern sales organizations. Convert leads into loyal revenue.
            </p>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-indigo-300 font-mono">
              ⚡ Status: All Systems Operational
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
           <p> © 2026 LeadDesk Mini</p>
          <a 
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noopener noreferrer"
            >
              Built for Digital Heroes Training Task</a>
          <p className="flex items-center space-x-1 mt-2 md:mt-0">
            <span>Crafted for high performance</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
