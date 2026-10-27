import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Heart, Bookmark, Users, ArrowRight, ShieldCheck, Tag } from 'lucide-react';

export const ProjectCard = ({ project, showCollabButton = true }) => {
  const { toggleLikeProject, toggleBookmarkProject } = useApp();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/projects/${project.id}`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Production Ready':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Field Tested':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Seeking Collaborators':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Prototype':
      default:
        return 'bg-amber-50 text-amber-700 border-amber-200';
    }
  };

  return (
    <div 
      onClick={handleCardClick}
      className="group flex flex-col bg-white rounded-2xl border border-slate-200/80 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 overflow-hidden cursor-pointer"
    >
      {/* Image Container with Badges */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />

        {/* SDG Target & Category */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
          <span className="px-2.5 py-1 rounded-lg text-[11px] font-black bg-[#FD6925] text-white shadow-md">
            SDG {project.sdgTarget}
          </span>
          <span className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-900/80 backdrop-blur-md text-white border border-white/20">
            {project.category}
          </span>
        </div>

        {/* Stage Badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border backdrop-blur-md ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
        </div>

        {/* Title preview in image overlay */}
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-white font-bold text-base leading-snug line-clamp-2 drop-shadow-md">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 p-5 flex flex-col justify-between space-y-4">
        
        {/* Subtitle / summary */}
        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
          {project.subtitle || project.problem}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack?.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-medium"
            >
              {tech}
            </span>
          ))}
          {project.techStack?.length > 3 && (
            <span className="px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-500 text-[10px] font-medium">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        {/* Creator Info */}
        <div 
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/profile/${project.creatorId}`);
          }}
          className="flex items-center justify-between pt-3 border-t border-slate-100 hover:bg-slate-50 -mx-5 px-5 py-2 transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <img
              src={project.creatorAvatar}
              alt={project.creatorName}
              className="w-7 h-7 rounded-full object-cover border border-slate-200"
            />
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-slate-900 hover:text-blue-600 transition-colors">
                {project.creatorName}
              </span>
              <span className="text-[10px] text-slate-400 truncate max-w-[150px]">
                {project.creatorRole}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
            <Users className="w-3.5 h-3.5 text-blue-500" />
            <span>{project.collaboratorsCount || 0}</span>
          </div>
        </div>

        {/* Card Footer: Interactions & Link */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleLikeProject(project.id);
              }}
              className={`flex items-center gap-1 text-xs font-medium transition-colors ${
                project.isLiked ? 'text-rose-600 font-bold' : 'text-slate-500 hover:text-rose-600'
              }`}
              title="Approve innovation"
            >
              <Heart className={`w-4 h-4 ${project.isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
              <span>{project.likesCount}</span>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleBookmarkProject(project.id);
              }}
              className={`flex items-center gap-1 text-xs font-medium transition-colors ${
                project.isBookmarked ? 'text-blue-600 font-bold' : 'text-slate-500 hover:text-blue-600'
              }`}
              title="Bookmark project"
            >
              <Bookmark className={`w-4 h-4 ${project.isBookmarked ? 'fill-blue-600 text-blue-600' : ''}`} />
            </button>
          </div>

          <div className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:translate-x-0.5 transition-transform">
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

      </div>
    </div>
  );
};
