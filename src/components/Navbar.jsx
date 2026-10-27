import React, { useState } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { 
  Home, 
  Rss, 
  Compass, 
  MessageSquare, 
  User, 
  PlusCircle, 
  Layers, 
  Menu, 
  X, 
  Search,
  Sparkles,
  Info,
  CheckCircle2
} from 'lucide-react';

export const Navbar = () => {
  const { 
    currentUser, 
    conversations, 
    setIsSDGModalOpen, 
    setIsCreatePostModalOpen, 
    setIsCreateProjectModalOpen,
    searchQuery,
    setSearchQuery 
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Calculate unread messages count
  const unreadCount = conversations.reduce((acc, c) => acc + (c.unreadCount || 0), 0);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/explore?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const navItems = [
    { label: 'Home', path: '/', icon: <Home className="w-4 h-4" /> },
    { label: 'Community Feed', path: '/feed', icon: <Rss className="w-4 h-4" /> },
    { label: 'Explore Innovations', path: '/explore', icon: <Compass className="w-4 h-4" /> },
    { 
      label: 'Messages', 
      path: '/messages', 
      icon: <MessageSquare className="w-4 h-4" />,
      badge: unreadCount > 0 ? unreadCount : null 
    },
    { label: 'Profile', path: `/profile/${currentUser.id}`, icon: <User className="w-4 h-4" /> }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#14213D] border-b border-slate-800/80 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo & SDG 9 Badge */}
          <div className="flex items-center gap-3">
            <Link 
              to="/" 
              className="flex items-center gap-2.5 group focus:outline-none"
              aria-label="InnovateHub Home"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-teal-500 to-orange-500 flex items-center justify-center p-0.5 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-[#14213D] rounded-[10px] flex items-center justify-center">
                  <span className="text-white font-extrabold text-base tracking-tighter">IH</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-extrabold text-lg tracking-tight leading-tight group-hover:text-blue-400 transition-colors">
                  Innovate<span className="text-teal-400">Hub</span>
                </span>
                <span className="text-[10px] text-slate-400 font-medium tracking-wider hidden sm:block">
                  SDG 9 PLATFORM
                </span>
              </div>
            </Link>

            {/* SDG 9 Indicator button */}
            <button
              onClick={() => setIsSDGModalOpen(true)}
              className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FD6925]/20 hover:bg-[#FD6925]/30 border border-[#FD6925]/40 text-[#ff8c53] text-xs font-bold transition-all"
              title="Click to learn about UN SDG 9"
            >
              <span className="w-2 h-2 rounded-full bg-[#FD6925] animate-ping" />
              <span>UN SDG 9</span>
              <Info className="w-3 h-3 text-[#ff8c53]" />
            </button>
          </div>

          {/* Search bar (Desktop) */}
          <form 
            onSubmit={handleSearchSubmit} 
            className="hidden lg:flex items-center flex-1 max-w-xs relative"
          >
            <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
            <input
              type="text"
              placeholder="Search projects, AI, IoT, #tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-slate-900/90 text-xs text-white placeholder:text-slate-400 rounded-xl border border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </form>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || 
                (item.path.startsWith('/profile') && location.pathname.startsWith('/profile') && location.pathname.includes(currentUser.id));

              return (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive: exactActive }) => {
                    const active = exactActive || (item.path === '/explore' && location.pathname.startsWith('/projects/'));
                    return `relative flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      active
                        ? 'text-white bg-blue-600/30 text-blue-400 border border-blue-500/40 shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`;
                  }}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="ml-1 px-1.5 py-0.2 bg-rose-500 text-white rounded-full text-[10px] font-bold">
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Action Buttons & Profile */}
          <div className="flex items-center gap-2">
            
            {/* Quick Action: New Post */}
            <button
              onClick={() => setIsCreatePostModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-sm transition-all"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Post</span>
            </button>

            {/* Quick Action: Showcase Project */}
            <button
              onClick={() => setIsCreateProjectModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-teal-300 bg-teal-950/60 hover:bg-teal-900/80 border border-teal-500/40 rounded-xl transition-all"
            >
              <Layers className="w-3.5 h-3.5 text-teal-400" />
              <span className="hidden xl:inline">New</span> Project
            </button>

            {/* Profile Menu Trigger */}
            <div className="relative">
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center gap-2 p-1 rounded-full hover:ring-2 hover:ring-blue-400/50 transition-all focus:outline-none"
                aria-label="User menu"
              >
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-8 h-8 rounded-full object-cover border-2 border-teal-500"
                />
              </button>

              {/* Profile Dropdown */}
              {profileDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-56 rounded-2xl bg-white shadow-2xl border border-slate-100 py-2 text-slate-800 z-50 animate-in fade-in slide-in-from-top-2"
                  onMouseLeave={() => setProfileDropdownOpen(false)}
                >
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="text-xs font-bold text-slate-900 leading-tight">{currentUser.name}</p>
                    <p className="text-[11px] text-slate-500 truncate">{currentUser.role}</p>
                    <div className="mt-1 flex items-center gap-1 text-[10px] text-[#ea580c] font-semibold">
                      <Sparkles className="w-3 h-3" /> Impact Score: {currentUser.impactScore}/100
                    </div>
                  </div>

                  <Link
                    to={`/profile/${currentUser.id}`}
                    onClick={() => setProfileDropdownOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
                  >
                    <User className="w-3.5 h-3.5 text-blue-600" /> View Full Profile
                  </Link>

                  <Link
                    to="/messages"
                    onClick={() => setProfileDropdownOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-teal-600" /> Collaborations & Chats
                  </Link>

                  <button
                    onClick={() => {
                      setProfileDropdownOpen(false);
                      setIsSDGModalOpen(true);
                    }}
                    className="w-full text-left flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
                  >
                    <Info className="w-3.5 h-3.5 text-orange-500" /> SDG 9 Goals Guide
                  </button>

                  <div className="pt-1 mt-1 border-t border-slate-100 px-4 py-1.5">
                    <span className="text-[10px] text-slate-400 font-mono">Demo Role: Active Innovator</span>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white md:hidden rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d1629] border-b border-slate-800 px-4 pt-3 pb-5 space-y-3">
          <form onSubmit={handleSearchSubmit} className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
            <input
              type="text"
              placeholder="Search projects & topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-900 text-xs text-white placeholder:text-slate-400 rounded-xl border border-slate-700"
            />
          </form>

          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium ${
                  isActive ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="px-2 py-0.5 bg-rose-500 text-white rounded-full text-xs font-bold">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="pt-2 border-t border-slate-800 flex items-center gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsCreatePostModalOpen(true);
              }}
              className="flex-1 py-2 text-center text-xs font-bold text-white bg-blue-600 rounded-xl"
            >
              + Create Post
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsCreateProjectModalOpen(true);
              }}
              className="flex-1 py-2 text-center text-xs font-bold text-teal-300 bg-teal-950 border border-teal-500/40 rounded-xl"
            >
              + Add Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
