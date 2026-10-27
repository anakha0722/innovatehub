import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { 
  Heart, 
  MessageSquare, 
  Share2, 
  Bookmark, 
  Send, 
  Sparkles, 
  CornerDownRight, 
  Check, 
  UserPlus, 
  UserCheck 
} from 'lucide-react';

export const PostCard = ({ post }) => {
  const { 
    currentUser, 
    toggleLikePost, 
    toggleBookmarkPost, 
    addPostComment, 
    toggleFollowUser, 
    users, 
    showToast 
  } = useApp();

  const navigate = useNavigate();
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [copied, setCopied] = useState(false);

  const author = users.find((u) => u.id === post.authorId);
  const isAuthorCurrentUser = post.authorId === currentUser.id;

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    addPostComment(post.id, commentText);
    setCommentText('');
  };

  const handleShare = () => {
    navigator.clipboard?.writeText?.(window.location.origin + `/feed#${post.id}`);
    setCopied(true);
    showToast('Link copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article 
      id={post.id}
      className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow p-5 md:p-6 space-y-4"
    >
      {/* Post Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <Link 
            to={`/profile/${post.authorId}`}
            className="relative group shrink-0"
            title={`View ${post.authorName}'s profile`}
          >
            <img
              src={post.authorAvatar}
              alt={post.authorName}
              className="w-11 h-11 rounded-full object-cover border-2 border-slate-100 group-hover:border-blue-500 transition-colors"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
          </Link>

          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <Link
                to={`/profile/${post.authorId}`}
                className="font-bold text-sm text-slate-900 hover:text-blue-600 transition-colors"
              >
                {post.authorName}
              </Link>
              {post.sdgTarget && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-orange-100 text-[#ea580c] border border-orange-200">
                  SDG {post.sdgTarget}
                </span>
              )}
            </div>
            
            <p className="text-xs text-slate-500 line-clamp-1">
              {post.authorRole} • {post.authorOrg || 'InnovateHub Pioneer'}
            </p>
            <p className="text-[11px] text-slate-400">
              {post.timestamp}
            </p>
          </div>
        </div>

        {/* Follow author button if not current user */}
        {!isAuthorCurrentUser && author && (
          <button
            onClick={() => toggleFollowUser(post.authorId)}
            className={`inline-flex items-center gap-1 px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
              author.isFollowing
                ? 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                : 'bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200'
            }`}
          >
            {author.isFollowing ? (
              <>
                <UserCheck className="w-3.5 h-3.5" />
                <span>Following</span>
              </>
            ) : (
              <>
                <UserPlus className="w-3.5 h-3.5" />
                <span>Follow</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Post Text Content */}
      <div className="text-sm text-slate-800 leading-relaxed space-y-2 whitespace-pre-line">
        <p>{post.content}</p>
      </div>

      {/* Hashtags */}
      {post.hashtags && post.hashtags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-1">
          {post.hashtags.map((tag, idx) => (
            <button
              key={idx}
              onClick={() => navigate(`/explore?q=${encodeURIComponent(tag.replace('#', ''))}`)}
              className="px-2.5 py-0.5 text-xs font-medium text-blue-600 bg-blue-50/70 hover:bg-blue-100 rounded-lg transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* Post Image */}
      {post.image && (
        <div className="rounded-xl overflow-hidden border border-slate-100 max-h-96 w-full bg-slate-50">
          <img
            src={post.image}
            alt="Innovation visual"
            className="w-full h-full object-cover hover:scale-101 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      )}

      {/* Post Stats & Action Buttons */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-slate-500 text-xs">
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Like */}
          <button
            onClick={() => toggleLikePost(post.id)}
            className={`flex items-center gap-1.5 font-medium transition-colors p-1 rounded-lg hover:bg-rose-50 ${
              post.isLiked ? 'text-rose-600 font-bold' : 'hover:text-rose-600'
            }`}
          >
            <Heart className={`w-4 h-4 ${post.isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
            <span>{post.likesCount}</span>
          </button>

          {/* Comment */}
          <button
            onClick={() => setShowComments(!showComments)}
            className={`flex items-center gap-1.5 font-medium transition-colors p-1 rounded-lg hover:bg-blue-50 ${
              showComments ? 'text-blue-600 font-bold' : 'hover:text-blue-600'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>{post.comments?.length || 0}</span>
          </button>

          {/* Share */}
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 font-medium hover:text-teal-600 transition-colors p-1 rounded-lg hover:bg-teal-50"
            title="Share post link"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
            <span className="hidden sm:inline">{copied ? 'Copied' : 'Share'}</span>
          </button>
        </div>

        {/* Bookmark */}
        <button
          onClick={() => toggleBookmarkPost(post.id)}
          className={`flex items-center gap-1 font-medium transition-colors p-1 rounded-lg hover:bg-slate-100 ${
            post.isBookmarked ? 'text-blue-600 font-bold' : 'hover:text-blue-600'
          }`}
          title="Save post"
        >
          <Bookmark className={`w-4 h-4 ${post.isBookmarked ? 'fill-blue-600 text-blue-600' : ''}`} />
          <span className="hidden sm:inline">{post.isBookmarked ? 'Saved' : 'Save'}</span>
        </button>
      </div>

      {/* Expandable Comments Drawer */}
      {showComments && (
        <div className="pt-4 border-t border-slate-100 space-y-3 animate-in fade-in duration-200">
          
          {/* Comments List */}
          {post.comments && post.comments.length > 0 ? (
            <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
              {post.comments.map((comment) => (
                <div key={comment.id} className="flex items-start gap-2.5 text-xs bg-slate-50/80 p-3 rounded-xl border border-slate-100">
                  <Link to={`/profile/${comment.authorId}`} className="shrink-0">
                    <img
                      src={comment.authorAvatar}
                      alt={comment.authorName}
                      className="w-7 h-7 rounded-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <Link
                        to={`/profile/${comment.authorId}`}
                        className="font-bold text-slate-900 hover:text-blue-600"
                      >
                        {comment.authorName}
                      </Link>
                      <span className="text-[10px] text-slate-400">{comment.timestamp}</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed">{comment.content}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-400 italic text-center py-2">
              No comments yet. Start the SDG 9 discussion!
            </p>
          )}

          {/* Add Comment Input */}
          <form onSubmit={handleAddComment} className="flex items-center gap-2 pt-1">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-7 h-7 rounded-full object-cover shrink-0"
            />
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Add your constructive perspective or feedback..."
              className="flex-1 px-3 py-1.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white"
            />
            <button
              type="submit"
              disabled={!commentText.trim()}
              className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-semibold rounded-xl flex items-center gap-1 transition-all"
            >
              <Send className="w-3 h-3" />
              <span>Reply</span>
            </button>
          </form>
        </div>
      )}
    </article>
  );
};
