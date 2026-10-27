import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { CollabModal } from '../components/CollabModal';
import { ProjectCard } from '../components/ProjectCard';
import { 
  ArrowLeft, 
  Heart, 
  Bookmark, 
  Share2, 
  Handshake, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck, 
  Tag, 
  Cpu, 
  Globe2, 
  Send, 
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Layers,
  Sparkles
} from 'lucide-react';

export const ProjectDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { 
    projects, 
    users, 
    currentUser, 
    toggleLikeProject, 
    toggleBookmarkProject, 
    toggleFollowUser,
    showToast 
  } = useApp();

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isCollabModalOpen, setIsCollabModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Local comments for this project showcase
  const [comments, setComments] = useState([
    {
      id: 'pc-1',
      authorName: 'Dr. Elena Rostova',
      authorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      authorRole: 'CleanTech Systems Architect',
      timestamp: '1 day ago',
      content: 'Remarkable alignment with SDG 9.4. Have you benchmarked the thermal degradation curve under continuous high-load cycles?'
    },
    {
      id: 'pc-2',
      authorName: 'Sophia Chen',
      authorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      authorRole: 'Robotics Specialist',
      timestamp: '18 hours ago',
      content: 'We can adapt our drone telemetry platform to transmit your edge metrics over 5G. Let me know if you would like to collaborate!'
    }
  ]);
  const [commentInput, setCommentInput] = useState('');

  // Find project
  const project = projects.find((p) => p.id === id) || projects[0];
  const creator = users.find((u) => u.id === project.creatorId) || {
    id: project.creatorId,
    name: project.creatorName,
    role: project.creatorRole,
    avatar: project.creatorAvatar,
    organization: 'InnovateHub Pioneer',
    followersCount: 520,
    impactScore: 92
  };

  const isCreatorCurrentUser = creator.id === currentUser.id;

  // Related projects
  const relatedProjects = projects
    .filter((p) => p.id !== project.id && (p.category === project.category || p.sdgTarget === project.sdgTarget))
    .slice(0, 3);

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!commentInput.trim()) return;

    const newComment = {
      id: 'pc-' + Date.now(),
      authorName: currentUser.name,
      authorAvatar: currentUser.avatar,
      authorRole: currentUser.role,
      timestamp: 'Just now',
      content: commentInput.trim()
    };

    setComments([...comments, newComment]);
    setCommentInput('');
    showToast('Technical comment submitted!');
  };

  const handleShare = () => {
    navigator.clipboard?.writeText?.(window.location.href);
    setCopied(true);
    showToast('Project link copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const galleryImages = project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : [project.image];

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-8">
      
      {/* Collaboration Request Modal */}
      <CollabModal
        isOpen={isCollabModalOpen}
        onClose={() => setIsCollabModalOpen(false)}
        project={project}
        recipient={creator}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Breadcrumb & Back Button */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate('/explore')}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Explore Innovations</span>
          </button>

          <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400">
            <Link to="/explore" className="hover:text-slate-600">Explore</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-700 font-semibold">{project.category}</span>
          </div>
        </div>

        {/* Project Header Banner */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 md:p-8 space-y-6">
          
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-lg text-xs font-black bg-[#FD6925] text-white shadow-sm">
                  SDG TARGET {project.sdgTarget}
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                  {project.category}
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {project.status || 'Active Prototype'}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                {project.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
                {project.subtitle || project.problem}
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <button
                onClick={() => toggleLikeProject(project.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                  project.isLiked
                    ? 'bg-rose-50 border-rose-200 text-rose-600'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                <Heart className={`w-4 h-4 ${project.isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                <span>{project.likesCount} Likes</span>
              </button>

              <button
                onClick={() => toggleBookmarkProject(project.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                  project.isBookmarked
                    ? 'bg-blue-50 border-blue-200 text-blue-600'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${project.isBookmarked ? 'fill-blue-600 text-blue-600' : ''}`} />
                <span>{project.isBookmarked ? 'Saved' : 'Save'}</span>
              </button>

              <button
                onClick={handleShare}
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
                title="Share project"
              >
                <Share2 className="w-4 h-4" />
              </button>

              {/* Request Collaboration Button */}
              {!isCreatorCurrentUser && (
                <button
                  onClick={() => setIsCollabModalOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-lg shadow-blue-500/20 transition-all hover:scale-102"
                >
                  <Handshake className="w-4 h-4" />
                  <span>Request Collaboration</span>
                </button>
              )}
            </div>
          </div>

          {/* Creator Information Strip */}
          <div className="p-4 bg-slate-50/80 rounded-2xl border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Link 
              to={`/profile/${creator.id}`}
              className="flex items-center gap-3 group"
            >
              <img
                src={creator.avatar}
                alt={creator.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm group-hover:ring-2 group-hover:ring-blue-500 transition-all"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {creator.name}
                  </span>
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                </div>
                <p className="text-xs text-slate-500">
                  {creator.role} • {creator.organization || 'Global Tech Lab'}
                </p>
              </div>
            </Link>

            <div className="flex items-center gap-3">
              {!isCreatorCurrentUser && (
                <>
                  <button
                    onClick={() => toggleFollowUser(creator.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      creator.isFollowing
                        ? 'bg-slate-200 text-slate-700'
                        : 'bg-white border border-slate-200 text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    {creator.isFollowing ? 'Following' : 'Follow Creator'}
                  </button>

                  <Link
                    to={`/messages?user=${creator.id}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-50 text-teal-700 border border-teal-200 text-xs font-semibold hover:bg-teal-100 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Message</span>
                  </Link>
                </>
              )}

              <Link
                to={`/profile/${creator.id}`}
                className="text-xs font-semibold text-blue-600 hover:underline"
              >
                View Profile →
              </Link>
            </div>
          </div>

        </div>

        {/* Gallery & Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT 7 COLS: Gallery & Problem / Solution Narrative */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Visual Gallery */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-5 space-y-3">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-900">
                <img
                  src={galleryImages[activeImageIdx]}
                  alt="Showcase Visual"
                  className="w-full h-full object-cover transition-all duration-300"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-mono border border-white/20">
                  Visual {activeImageIdx + 1} of {galleryImages.length}
                </div>
              </div>

              {/* Gallery Thumbnails */}
              {galleryImages.length > 1 && (
                <div className="flex items-center gap-2.5 overflow-x-auto pb-1">
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIdx(idx)}
                      className={`relative w-20 h-16 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                        activeImageIdx === idx ? 'border-blue-600 ring-2 ring-blue-500/30' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Structured Engineering Sections */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 md:p-8 space-y-8">
              
              {/* Problem Statement */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider">
                    The Infrastructure & Industrial Bottleneck
                  </h3>
                </div>
                <div className="p-4 bg-rose-50/50 rounded-2xl border border-rose-100 text-sm text-slate-700 leading-relaxed">
                  {project.problem}
                </div>
              </div>

              {/* Proposed Solution */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider">
                    Proposed Solution & Technical Architecture
                  </h3>
                </div>
                <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100 text-sm text-slate-700 leading-relaxed">
                  {project.solution}
                </div>
              </div>

              {/* Technologies Used */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-blue-600" />
                  Technologies, Sensors & Toolchains
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack?.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Collaborative Discussion / Technical Comments */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 md:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  Peer Review & Technical Comments ({comments.length})
                </h3>
                <span className="text-xs text-slate-400 font-medium">Open Review</span>
              </div>

              {/* Add Comment Input */}
              <form onSubmit={handleAddComment} className="space-y-3">
                <textarea
                  rows={3}
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                  placeholder="Ask a technical question, suggest an optimization, or propose a test harness..."
                  className="w-full p-3.5 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none"
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={!commentInput.trim()}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-bold shadow-sm transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Review</span>
                  </button>
                </div>
              </form>

              {/* Comments Feed */}
              <div className="space-y-4 pt-2 border-t border-slate-100">
                {comments.map((c) => (
                  <div key={c.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={c.authorAvatar}
                          alt={c.authorName}
                          className="w-7 h-7 rounded-full object-cover"
                        />
                        <div>
                          <span className="text-xs font-bold text-slate-900">{c.authorName}</span>
                          <span className="text-[10px] text-slate-400 block">{c.authorRole}</span>
                        </div>
                      </div>
                      <span className="text-[11px] text-slate-400">{c.timestamp}</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed pl-9">
                      {c.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT 5 COLS: SDG 9 Impact Metrics & Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* SDG 9 Direct Impact Card */}
            <div className="bg-gradient-to-br from-slate-900 to-[#14213D] text-white rounded-3xl p-6 md:p-7 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-xl bg-[#FD6925] flex items-center justify-center font-black text-sm">
                    9
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">SDG 9 Impact Card</h4>
                    <p className="text-[11px] text-teal-300 font-medium">Target {project.sdgTarget}</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-slate-300">
                  Verified Metric
                </span>
              </div>

              {/* Quantified Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                {project.sdgImpact?.metrics?.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="block text-base sm:text-lg font-black text-teal-300">
                      {m.value}
                    </span>
                    <span className="text-[11px] text-slate-300">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
                <p>{project.sdgImpact?.description}</p>
              </div>

              {/* Collaboration CTA button */}
              {!isCreatorCurrentUser && (
                <button
                  onClick={() => setIsCollabModalOpen(true)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 text-white font-bold text-xs shadow-lg shadow-teal-500/20 transition-all"
                >
                  <Handshake className="w-4 h-4" />
                  <span>Request Collaboration on this Project</span>
                </button>
              )}
            </div>

            {/* Project Collaboration Stats & Tags */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 space-y-4">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Project Information
              </h4>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Active Collaborators</span>
                  <span className="font-bold text-slate-900">{project.collaboratorsCount || 0}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Category</span>
                  <span className="font-bold text-blue-600">{project.category}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Stage</span>
                  <span className="font-bold text-emerald-600">{project.status}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">SDG Alignment</span>
                  <span className="font-bold text-[#ea580c]">Goal 9 (Industry & Infra)</span>
                </div>
              </div>

              {/* Tags */}
              <div className="pt-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Keywords & Topics:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags?.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Related SDG 9 Innovations */}
            {relatedProjects.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Related SDG 9 Projects
                </h4>
                <div className="space-y-3">
                  {relatedProjects.map((rp) => (
                    <Link
                      key={rp.id}
                      to={`/projects/${rp.id}`}
                      className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-slate-200/80 hover:border-blue-400 shadow-sm transition-all group"
                    >
                      <img
                        src={rp.image}
                        alt={rp.title}
                        className="w-16 h-14 rounded-xl object-cover shrink-0"
                      />
                      <div className="min-w-0">
                        <span className="text-[10px] font-bold text-[#ea580c] block">
                          SDG {rp.sdgTarget}
                        </span>
                        <h5 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 truncate transition-colors">
                          {rp.title}
                        </h5>
                        <p className="text-[10px] text-slate-400 truncate">
                          By {rp.creatorName}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
