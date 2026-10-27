import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { PostCard } from '../components/PostCard';
import { SidebarLeft } from '../components/SidebarLeft';
import { SidebarRight } from '../components/SidebarRight';
import { 
  Sparkles, 
  Rss, 
  Image as ImageIcon, 
  Hash, 
  Send, 
  Filter, 
  TrendingUp, 
  ShieldCheck, 
  Compass, 
  PlusCircle,
  Layers
} from 'lucide-react';

const FEED_FILTERS = [
  { id: 'all', label: 'All Discussions' },
  { id: 'trending', label: 'Trending' },
  { id: 'sdg9', label: 'SDG 9 Milestones' },
  { id: 'following', label: 'Following' }
];

const QUICK_TAGS = ['All', '#SmartCities', '#GreenTech', '#AI', '#Innovation', '#ResilientInfrastructure'];

export const FeedPage = () => {
  const { 
    posts, 
    currentUser, 
    createNewPost, 
    users, 
    setIsCreatePostModalOpen 
  } = useApp();

  const [activeFilter, setActiveFilter] = useState('all');
  const [activeTag, setActiveTag] = useState('All');
  
  // In-feed quick composer state
  const [quickText, setQuickText] = useState('');
  const [quickTarget, setQuickTarget] = useState('9.4');
  const [showImageInput, setShowImageInput] = useState(false);
  const [quickImageUrl, setQuickImageUrl] = useState('');

  const handleQuickPostSubmit = (e) => {
    e.preventDefault();
    if (!quickText.trim()) return;

    createNewPost({
      content: quickText,
      image: quickImageUrl.trim() || null,
      sdgTarget: quickTarget,
      hashtags: ['#Innovation', '#SDG9', activeTag !== 'All' ? activeTag : '#SmartCities']
    });

    setQuickText('');
    setQuickImageUrl('');
    setShowImageInput(false);
  };

  // Filter posts
  const filteredPosts = posts.filter((post) => {
    // Tag filter
    if (activeTag !== 'All') {
      const hasTag = post.hashtags?.some((t) => t.toLowerCase() === activeTag.toLowerCase());
      if (!hasTag) return false;
    }

    // Tab filter
    if (activeFilter === 'following') {
      const author = users.find((u) => u.id === post.authorId);
      return author?.isFollowing || post.authorId === currentUser.id;
    }
    if (activeFilter === 'trending') {
      return (post.likesCount || 0) > 150;
    }
    if (activeFilter === 'sdg9') {
      return !!post.sdgTarget;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT COLUMN: Profile Widget & Nav (Hidden on Mobile/Tablet, visible on desktop) */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-20">
              <SidebarLeft />
            </div>
          </div>

          {/* CENTER COLUMN: Social Feed & Post Creator */}
          <main className="lg:col-span-6 space-y-5">
            
            {/* Page Header Banner */}
            <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                  <Rss className="w-5 h-5" />
                </div>
                <div>
                  <h1 className="text-base font-bold text-slate-900 leading-tight">
                    Community Feed
                  </h1>
                  <p className="text-xs text-slate-500">
                    Live updates from researchers & engineers advancing SDG 9
                  </p>
                </div>
              </div>

              <Link
                to="/explore"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
              >
                <Compass className="w-3.5 h-3.5 text-teal-600" />
                <span className="hidden sm:inline">Explore Projects</span>
              </Link>
            </div>

            {/* Quick Create Post Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 md:p-5 space-y-3">
              <div className="flex items-start gap-3">
                <Link to={`/profile/${currentUser.id}`}>
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200 hover:ring-2 hover:ring-blue-500 transition-all shrink-0"
                  />
                </Link>

                <div className="flex-1">
                  <textarea
                    rows={2}
                    value={quickText}
                    onChange={(e) => setQuickText(e.target.value)}
                    placeholder="Share an innovation breakthrough, prototype update, or research insight..."
                    className="w-full text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 bg-slate-50 rounded-xl p-3 border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none transition-all"
                  />
                </div>
              </div>

              {/* Collapsible Image URL input */}
              {showImageInput && (
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <input
                    type="url"
                    placeholder="Paste image URL (e.g. https://images.unsplash.com/...)"
                    value={quickImageUrl}
                    onChange={(e) => setQuickImageUrl(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-blue-500"
                  />
                  {quickImageUrl && (
                    <div className="relative h-28 rounded-lg overflow-hidden border border-slate-200">
                      <img src={quickImageUrl} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              )}

              {/* Bottom bar of quick composer */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowImageInput(!showImageInput)}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    <ImageIcon className="w-3.5 h-3.5 text-blue-500" />
                    <span>Media</span>
                  </button>

                  <select
                    value={quickTarget}
                    onChange={(e) => setQuickTarget(e.target.value)}
                    className="px-2 py-1 text-[11px] font-semibold bg-orange-50 text-[#ea580c] border border-orange-200 rounded-lg focus:outline-none"
                    title="Select SDG 9 Target"
                  >
                    <option value="9.1">SDG 9.1 Resilient Infra</option>
                    <option value="9.2">SDG 9.2 Sustainable Industry</option>
                    <option value="9.4">SDG 9.4 Clean Retrofit</option>
                    <option value="9.5">SDG 9.5 Research & Tech</option>
                    <option value="9.c">SDG 9.c Digital ICT</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsCreatePostModalOpen(true)}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-800"
                  >
                    Full Editor
                  </button>
                  <button
                    onClick={handleQuickPostSubmit}
                    disabled={!quickText.trim()}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-bold shadow-sm transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Post</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Feed Filters Tabs */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 space-y-2">
              <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
                {FEED_FILTERS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveFilter(tab.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                      activeFilter === tab.id
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Hashtag Quick Filters */}
              <div className="flex items-center gap-1.5 overflow-x-auto pt-1 border-t border-slate-100 scrollbar-none">
                <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider shrink-0 pl-1">
                  Tag:
                </span>
                {QUICK_TAGS.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(tag)}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-medium transition-colors shrink-0 ${
                      activeTag === tag
                        ? 'bg-teal-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Posts Stream */}
            <div className="space-y-4">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))
              ) : (
                <div className="bg-white rounded-2xl border border-slate-200/80 p-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                    <Filter className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-800">No posts found</h3>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Try clearing the hashtag filter or change tabs to view more conversations.
                  </p>
                  <button
                    onClick={() => {
                      setActiveFilter('all');
                      setActiveTag('All');
                    }}
                    className="px-4 py-2 bg-blue-50 text-blue-600 rounded-xl text-xs font-bold hover:bg-blue-100"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>

          </main>

          {/* RIGHT COLUMN: Trending Topics, Suggested Innovators, Challenge */}
          <div className="lg:col-span-3">
            <div className="sticky top-20 space-y-4">
              <SidebarRight />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
