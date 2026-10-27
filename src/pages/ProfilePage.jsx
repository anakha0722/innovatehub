import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ProjectCard } from '../components/ProjectCard';
import { PostCard } from '../components/PostCard';
import { 
  UserCheck, 
  UserPlus, 
  MessageSquare, 
  Share2, 
  Edit3, 
  Sparkles, 
  MapPin, 
  Building, 
  Layers, 
  Rss, 
  Award, 
  CheckCircle2, 
  Bookmark, 
  X,
  ShieldCheck,
  Calendar
} from 'lucide-react';

export const ProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { 
    currentUser, 
    users, 
    projects, 
    posts, 
    toggleFollowUser, 
    showToast 
  } = useApp();

  // Active tab state
  const [activeTab, setActiveTab] = useState('projects');
  const [editModalOpen, setEditModalOpen] = useState(false);

  // Determine user to show
  const profileUser = (!id || id === 'current' || id === currentUser.id)
    ? currentUser
    : (users.find((u) => u.id === id || u.username.toLowerCase() === id.toLowerCase()) || users[0]);

  const isCurrentUser = profileUser.id === currentUser.id;

  // Editable bio state for demo
  const [editedBio, setEditedBio] = useState(profileUser.bio || '');
  const [editedRole, setEditedRole] = useState(profileUser.role || '');

  // User's projects and posts
  const userProjects = projects.filter((p) => p.creatorId === profileUser.id);
  const userPosts = posts.filter((p) => p.authorId === profileUser.id);
  const savedProjects = isCurrentUser ? projects.filter((p) => p.isBookmarked) : [];

  const handleSaveProfile = (e) => {
    e.preventDefault();
    profileUser.bio = editedBio;
    profileUser.role = editedRole;
    setEditModalOpen(false);
    showToast('Profile updated successfully!');
  };

  const handleShareProfile = () => {
    navigator.clipboard?.writeText?.(window.location.href);
    showToast('Profile URL copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-6 sm:py-8">
      
      {/* Edit Profile Modal */}
      {editModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl border border-slate-100 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">Edit Innovator Profile</h3>
              <button 
                onClick={() => setEditModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Professional Role
                </label>
                <input
                  type="text"
                  value={editedRole}
                  onChange={(e) => setEditedRole(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Bio & SDG 9 Mission
                </label>
                <textarea
                  rows={3}
                  value={editedBio}
                  onChange={(e) => setEditedBio(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Profile Card & Banner */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden">
          
          {/* Cover Photo */}
          <div className="h-48 sm:h-64 w-full bg-slate-900 relative">
            <img
              src={profileUser.cover || 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80'}
              alt="Cover"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            
            {/* SDG 9 Score pill top right */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/20 text-white text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-teal-300" />
              <span>SDG 9 Impact: {profileUser.impactScore || 94}/100</span>
            </div>
          </div>

          {/* Profile Header Details */}
          <div className="px-6 sm:px-8 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between -mt-16 sm:-mt-20 gap-4 mb-6">
              
              {/* Avatar + Main Info */}
              <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 text-center sm:text-left">
                <div className="relative">
                  <img
                    src={profileUser.avatar}
                    alt={profileUser.name}
                    className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl object-cover border-4 border-white shadow-xl bg-white"
                  />
                  <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white shadow" />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <h1 className="text-xl sm:text-2xl font-black text-slate-900">
                      {profileUser.name}
                    </h1>
                    <ShieldCheck className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-600">
                    {profileUser.role}
                  </p>
                  <p className="text-xs text-slate-400">
                    @{profileUser.username} • {profileUser.organization}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-center sm:justify-end gap-2.5 flex-wrap">
                {isCurrentUser ? (
                  <button
                    onClick={() => setEditModalOpen(true)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
                  >
                    <Edit3 className="w-3.5 h-3.5 text-slate-600" />
                    <span>Edit Profile</span>
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => toggleFollowUser(profileUser.id)}
                      className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
                        profileUser.isFollowing
                          ? 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}
                    >
                      {profileUser.isFollowing ? (
                        <>
                          <UserCheck className="w-4 h-4" />
                          <span>Following</span>
                        </>
                      ) : (
                        <>
                          <UserPlus className="w-4 h-4" />
                          <span>Follow</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => navigate(`/messages?user=${profileUser.id}`)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-200 text-xs font-bold transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Message</span>
                    </button>
                  </>
                )}

                <button
                  onClick={handleShareProfile}
                  className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
                  title="Share profile"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Bio & Meta */}
            <div className="space-y-4 max-w-3xl">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {profileUser.bio}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {profileUser.location || 'Zurich, Switzerland'}
                </span>
                <span className="flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-slate-400" />
                  {profileUser.organization || 'Global Tech Lab'}
                </span>
              </div>

              {/* Followers / Following Stats */}
              <div className="flex items-center gap-6 pt-2 border-t border-slate-100 text-xs">
                <div>
                  <strong className="text-slate-900 font-bold text-sm">
                    {profileUser.followersCount}
                  </strong>{' '}
                  <span className="text-slate-500">Followers</span>
                </div>
                <div>
                  <strong className="text-slate-900 font-bold text-sm">
                    {profileUser.followingCount}
                  </strong>{' '}
                  <span className="text-slate-500">Following</span>
                </div>
                <div>
                  <strong className="text-teal-600 font-bold text-sm">
                    {userProjects.length}
                  </strong>{' '}
                  <span className="text-slate-500">Innovations</span>
                </div>
              </div>

            </div>

          </div>

          {/* Profile Navigation Tabs */}
          <div className="px-6 sm:px-8 border-t border-slate-100 flex items-center gap-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab('projects')}
              className={`flex items-center gap-2 py-3.5 px-3 border-b-2 font-bold text-xs whitespace-nowrap transition-all ${
                activeTab === 'projects'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Showcased Innovations ({userProjects.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('posts')}
              className={`flex items-center gap-2 py-3.5 px-3 border-b-2 font-bold text-xs whitespace-nowrap transition-all ${
                activeTab === 'posts'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Rss className="w-4 h-4" />
              <span>Community Posts ({userPosts.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('about')}
              className={`flex items-center gap-2 py-3.5 px-3 border-b-2 font-bold text-xs whitespace-nowrap transition-all ${
                activeTab === 'about'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Skills & Credentials</span>
            </button>

            {isCurrentUser && (
              <button
                onClick={() => setActiveTab('saved')}
                className={`flex items-center gap-2 py-3.5 px-3 border-b-2 font-bold text-xs whitespace-nowrap transition-all ${
                  activeTab === 'saved'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Bookmark className="w-4 h-4" />
                <span>Saved Innovations ({savedProjects.length})</span>
              </button>
            )}
          </div>

        </div>

        {/* Tab Content Display */}
        <div className="space-y-6">
          
          {/* TAB 1: PROJECTS */}
          {activeTab === 'projects' && (
            <div>
              {userProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {userProjects.map((proj) => (
                    <ProjectCard key={proj.id} project={proj} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-slate-200/80 p-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-800">No showcased projects yet</h4>
                  <p className="text-xs text-slate-500">
                    {isCurrentUser ? 'Publish your SDG 9 prototype to make it discoverable.' : 'This innovator has not showcased any projects yet.'}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: POSTS */}
          {activeTab === 'posts' && (
            <div className="max-w-2xl mx-auto space-y-4">
              {userPosts.length > 0 ? (
                userPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))
              ) : (
                <div className="bg-white rounded-2xl border border-slate-200/80 p-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                    <Rss className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-800">No posts in community feed</h4>
                  <p className="text-xs text-slate-500">
                    {isCurrentUser ? 'Share an update in the Community Feed to engage with peers.' : 'No posts published yet.'}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: ABOUT & SKILLS */}
          {activeTab === 'about' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Skills */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 space-y-4 shadow-sm">
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  Technical Skills & Disciplines
                </h3>
                <div className="flex flex-wrap gap-2">
                  {profileUser.skills?.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Topics & Interests
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {profileUser.interests?.map((interest, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Achievements & Credential Badges */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 space-y-4 shadow-sm">
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#ea580c]" />
                  SDG 9 Recognitions & Milestones
                </h3>

                <div className="space-y-3">
                  {profileUser.achievements?.map((ach, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-slate-800 leading-snug">
                        {ach}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 4: SAVED (Current User only) */}
          {activeTab === 'saved' && isCurrentUser && (
            <div>
              {savedProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {savedProjects.map((proj) => (
                    <ProjectCard key={proj.id} project={proj} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-slate-200/80 p-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                    <Bookmark className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-800">No saved innovations yet</h4>
                  <p className="text-xs text-slate-500">
                    Bookmark innovations in Explore to reference them here.
                  </p>
                  <Link
                    to="/explore"
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold"
                  >
                    Explore Projects
                  </Link>
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
