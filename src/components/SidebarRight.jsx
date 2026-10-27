import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { 
  TrendingUp, 
  Users, 
  Sparkles, 
  UserPlus, 
  UserCheck, 
  Flame, 
  Calendar, 
  ArrowRight,
  ExternalLink 
} from 'lucide-react';

export const SidebarRight = () => {
  const { users, currentUser, toggleFollowUser } = useApp();
  const navigate = useNavigate();

  const suggestedUsers = users.filter((u) => u.id !== currentUser.id);

  const trendingTopics = [
    { tag: '#SmartCities', count: '1,420 posts', target: '9.1' },
    { tag: '#GreenTech', count: '980 posts', target: '9.4' },
    { tag: '#AI', count: '2,150 posts', target: '9.5' },
    { tag: '#ResilientInfrastructure', count: '740 posts', target: '9.1' },
    { tag: '#SustainableMaterials', count: '630 posts', target: '9.2' },
    { tag: '#Innovation', count: '3,890 posts', target: '9.5' }
  ];

  return (
    <aside className="space-y-4">
      {/* Trending SDG 9 Hashtags */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
            Trending Topics
          </h4>
          <span className="text-[10px] text-slate-400 font-semibold">SDG 9 Topics</span>
        </div>

        <div className="space-y-2.5">
          {trendingTopics.map((topic) => (
            <div
              key={topic.tag}
              onClick={() => navigate(`/explore?q=${encodeURIComponent(topic.tag.replace('#', ''))}`)}
              className="flex items-center justify-between group cursor-pointer hover:bg-slate-50 p-1.5 -mx-1.5 rounded-xl transition-colors"
            >
              <div>
                <span className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                  {topic.tag}
                </span>
                <p className="text-[10px] text-slate-400">{topic.count}</p>
              </div>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-orange-50 text-[#ea580c] border border-orange-200">
                SDG {topic.target}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Suggested Innovators */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
            <Users className="w-4 h-4 text-blue-600" />
            Innovators to Follow
          </h4>
        </div>

        <div className="space-y-3">
          {suggestedUsers.slice(0, 3).map((user) => (
            <div key={user.id} className="flex items-center justify-between gap-2">
              <Link 
                to={`/profile/${user.id}`}
                className="flex items-center gap-2.5 min-w-0 group"
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-9 h-9 rounded-full object-cover border border-slate-200 shrink-0 group-hover:ring-2 group-hover:ring-blue-500 transition-all"
                />
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-900 group-hover:text-blue-600 truncate transition-colors">
                    {user.name}
                  </p>
                  <p className="text-[10px] text-slate-400 truncate">
                    {user.role}
                  </p>
                </div>
              </Link>

              <button
                onClick={() => toggleFollowUser(user.id)}
                className={`shrink-0 p-1.5 rounded-lg text-xs font-semibold transition-all ${
                  user.isFollowing
                    ? 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    : 'bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white border border-blue-200'
                }`}
                title={user.isFollowing ? 'Following' : 'Follow user'}
              >
                {user.isFollowing ? (
                  <UserCheck className="w-3.5 h-3.5" />
                ) : (
                  <UserPlus className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          ))}
        </div>

        <Link
          to="/explore"
          className="block text-center pt-2 text-[11px] font-semibold text-blue-600 hover:text-blue-700"
        >
          View all creators in directory →
        </Link>
      </div>

      {/* Innovation Challenge Card */}
      <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-900 via-[#14213D] to-slate-900 text-white shadow-sm space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-400 text-slate-900">
            Open Challenge
          </span>
          <span className="text-[10px] text-slate-300 font-mono">Closing in 14d</span>
        </div>

        <h5 className="text-xs font-bold text-white leading-snug">
          Global Clean Industry Hackathon 2025
        </h5>
        
        <p className="text-[11px] text-slate-300 leading-relaxed">
          Submit low-carbon industrial prototypes. $50,000 grant pool for winning university & lab teams.
        </p>

        <button
          onClick={() => navigate('/explore')}
          className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-900 text-xs font-bold transition-colors"
        >
          <span>Explore Submissions</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
