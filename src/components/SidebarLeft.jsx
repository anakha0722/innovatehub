import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { 
  User, 
  Layers, 
  Bookmark, 
  Award, 
  PlusCircle, 
  TrendingUp, 
  ArrowUpRight,
  ShieldCheck 
} from 'lucide-react';

export const SidebarLeft = () => {
  const { currentUser, projects, setIsCreatePostModalOpen, setIsCreateProjectModalOpen, setIsSDGModalOpen } = useApp();

  const myProjectsCount = projects.filter((p) => p.creatorId === currentUser.id).length;
  const bookmarkedProjectsCount = projects.filter((p) => p.isBookmarked).length;

  return (
    <aside className="space-y-4">
      {/* Current User Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        {/* Mini cover */}
        <div className="h-16 w-full bg-gradient-to-r from-[#14213D] via-blue-900 to-teal-800 relative">
          <div className="absolute -bottom-5 left-4">
            <Link to={`/profile/${currentUser.id}`}>
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md hover:scale-105 transition-transform"
              />
            </Link>
          </div>
        </div>

        <div className="pt-7 px-4 pb-4 space-y-3">
          <div>
            <Link 
              to={`/profile/${currentUser.id}`}
              className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors flex items-center gap-1"
            >
              <span>{currentUser.name}</span>
              <ShieldCheck className="w-3.5 h-3.5 text-blue-500 fill-blue-50" />
            </Link>
            <p className="text-xs text-slate-500 leading-tight">
              {currentUser.role}
            </p>
          </div>

          <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
            {currentUser.bio}
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-center">
            <div className="p-2 rounded-xl bg-slate-50">
              <span className="block text-xs font-bold text-slate-900">
                {currentUser.followersCount}
              </span>
              <span className="text-[10px] text-slate-500">Followers</span>
            </div>
            <div className="p-2 rounded-xl bg-slate-50">
              <span className="block text-xs font-bold text-[#ea580c]">
                {currentUser.impactScore}
              </span>
              <span className="text-[10px] text-slate-500">SDG Score</span>
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-2 border-t border-slate-100 space-y-1 text-xs font-semibold">
            <Link
              to={`/profile/${currentUser.id}`}
              className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 text-slate-700 transition-colors"
            >
              <span className="flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-teal-600" /> My Innovations
              </span>
              <span className="px-1.5 py-0.5 rounded-full bg-slate-100 text-[10px] text-slate-600">
                {myProjectsCount}
              </span>
            </Link>

            <Link
              to={`/profile/${currentUser.id}`}
              className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 text-slate-700 transition-colors"
            >
              <span className="flex items-center gap-2">
                <Bookmark className="w-3.5 h-3.5 text-blue-600" /> Saved Projects
              </span>
              <span className="px-1.5 py-0.5 rounded-full bg-slate-100 text-[10px] text-slate-600">
                {bookmarkedProjectsCount}
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Launchpad Buttons */}
      <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm space-y-2.5">
        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Innovator Launchpad
        </h4>
        <button
          onClick={() => setIsCreatePostModalOpen(true)}
          className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition-all"
        >
          <PlusCircle className="w-4 h-4" /> Share Post / Finding
        </button>
        <button
          onClick={() => setIsCreateProjectModalOpen(true)}
          className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all"
        >
          <Layers className="w-4 h-4 text-teal-600" /> Showcase New Project
        </button>
      </div>

      {/* SDG 9 Impact Progress Widget */}
      <div className="p-4 bg-gradient-to-br from-slate-900 to-[#14213D] text-white rounded-2xl shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-[#FD6925] flex items-center justify-center text-xs font-black">
              9
            </span>
            <span className="text-xs font-bold">UN SDG 9 Mission</span>
          </div>
          <button
            onClick={() => setIsSDGModalOpen(true)}
            className="text-[10px] text-teal-300 hover:underline flex items-center"
          >
            Details <ArrowUpRight className="w-3 h-3 ml-0.5" />
          </button>
        </div>

        <p className="text-[11px] text-slate-300 leading-relaxed">
          Track real-time engineering milestones advancing Industry, Innovation, and Resilient Infrastructure.
        </p>

        <div className="space-y-1.5 pt-1">
          <div className="flex justify-between text-[11px]">
            <span className="text-slate-300">Target 9.4 Clean Tech</span>
            <span className="text-teal-400 font-bold">78%</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
            <div className="bg-teal-400 h-1.5 rounded-full" style={{ width: '78%' }} />
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between text-[11px]">
            <span className="text-slate-300">Target 9.1 Infrastructure</span>
            <span className="text-blue-400 font-bold">85%</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
            <div className="bg-blue-400 h-1.5 rounded-full" style={{ width: '85%' }} />
          </div>
        </div>
      </div>
    </aside>
  );
};
