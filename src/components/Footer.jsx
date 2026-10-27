import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Globe, Code2, Sparkles, ExternalLink, Heart, Layers, ArrowUpRight } from 'lucide-react';


export const Footer = () => {
  const { setIsSDGModalOpen } = useApp();

  return (
    <footer className="w-full bg-[#0b1325] text-slate-400 border-t border-slate-800/80 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand & SDG 9 alignment */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-teal-500 to-orange-500 flex items-center justify-center p-0.5 shadow-lg">
                <div className="w-full h-full bg-[#14213D] rounded-[10px] flex items-center justify-center">
                  <span className="text-white font-extrabold text-base">IH</span>
                </div>
              </div>
              <div>
                <span className="text-white font-black text-xl tracking-tight">
                  Innovate<span className="text-teal-400">Hub</span>
                </span>
                <p className="text-[11px] text-orange-400 font-bold uppercase tracking-wider">
                  SDG 9: Industry, Innovation & Infrastructure
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              InnovateHub connects university researchers, engineers, and entrepreneurs to share prototypes, co-develop clean technologies, and build climate-resilient industrial infrastructure.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <button
                onClick={() => setIsSDGModalOpen(true)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#FD6925]/20 hover:bg-[#FD6925]/30 border border-[#FD6925]/40 text-[#ff8c53] text-xs font-bold transition-all"
              >
                <span>Explore SDG 9 Targets</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Platform Pages
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home Landing Page
                </Link>
              </li>
              <li>
                <Link to="/feed" className="hover:text-white transition-colors">
                  Community Feed & Discussions
                </Link>
              </li>
              <li>
                <Link to="/explore" className="hover:text-white transition-colors">
                  Explore Innovations Showcase
                </Link>
              </li>
              <li>
                <Link to="/messages" className="hover:text-white transition-colors">
                  Collaboration Messenger
                </Link>
              </li>
              <li>
                <Link to="/profile/current" className="hover:text-white transition-colors">
                  Innovator Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* SDG 9 Key Focus Areas */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              SDG 9 Focus Areas
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/explore?category=Sustainable%20Infrastructure" className="hover:text-white transition-colors">
                  Resilient Infrastructure (9.1)
                </Link>
              </li>
              <li>
                <Link to="/explore?category=Green%20Technology" className="hover:text-white transition-colors">
                  Clean Tech Retrofitting (9.4)
                </Link>
              </li>
              <li>
                <Link to="/explore?category=AI%20%26%20Robotics" className="hover:text-white transition-colors">
                  Scientific Research & AI (9.5)
                </Link>
              </li>
              <li>
                <Link to="/explore?category=Clean%20Energy" className="hover:text-white transition-colors">
                  Decentralized Microgrids (9.4)
                </Link>
              </li>
              <li>
                <Link to="/explore?category=Smart%20Cities" className="hover:text-white transition-colors">
                  Smart Transit Systems (9.1)
                </Link>
              </li>
            </ul>
          </div>

          {/* Academic Attribution & Context */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Academic Project
            </h4>
            <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-[11px] space-y-1.5">
              <p className="font-semibold text-white">Design Process and Perspective</p>
              <p className="text-slate-400">
                Created to demonstrate human-centered social interaction patterns advancing UN Sustainable Development Goals.
              </p>
              <p className="text-teal-400 font-mono text-[10px]">
                College Evaluation Ready
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} InnovateHub. Built for UN SDG 9 (Industry, Innovation & Infrastructure).
          </div>
          <div className="flex items-center gap-6">
            <a 
              href="https://sdgs.un.org/goals/goal9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-slate-400 flex items-center gap-1"
            >
              UN SDG Official <ExternalLink className="w-3 h-3" />
            </a>
            <span className="flex items-center gap-1 text-slate-400">
              Made with <Heart className="w-3.5 h-3.5 text-rose-500 inline fill-rose-500" /> for Sustainable Future
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
