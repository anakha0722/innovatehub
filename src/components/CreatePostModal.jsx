import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Image as ImageIcon, Hash, Sparkles, Send } from 'lucide-react';

const SUGGESTED_HASHTAGS = ['#SmartCities', '#GreenTech', '#AI', '#Innovation', '#ResilientInfrastructure', '#CleanEnergy', '#Robotics'];

const SAMPLE_PRESET_IMAGES = [
  { label: 'Smart Grid', url: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Green Concrete', url: 'https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Inspection Drone', url: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Clean Water', url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80' }
];

export const CreatePostModal = () => {
  const { isCreatePostModalOpen, setIsCreatePostModalOpen, createNewPost, currentUser } = useApp();

  const [content, setContent] = useState('');
  const [selectedTarget, setSelectedTarget] = useState('9.4');
  const [selectedTags, setSelectedTags] = useState(['#Innovation', '#GreenTech']);
  const [imageUrl, setImageUrl] = useState('');
  const [showImageOptions, setShowImageOptions] = useState(false);

  if (!isCreatePostModalOpen) return null;

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    createNewPost({
      content,
      image: imageUrl.trim() || null,
      sdgTarget: selectedTarget,
      hashtags: selectedTags
    });

    setContent('');
    setImageUrl('');
    setSelectedTags(['#Innovation', '#GreenTech']);
    setShowImageOptions(false);
    setIsCreatePostModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-100 p-6"
        role="dialog"
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-10 h-10 rounded-full object-cover border border-slate-200"
            />
            <div>
              <h3 className="text-base font-bold text-slate-900">Create Innovation Post</h3>
              <p className="text-xs text-slate-500">Posting as {currentUser.name}</p>
            </div>
          </div>
          <button
            onClick={() => setIsCreatePostModalOpen(false)}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="pt-4 space-y-4">
          <textarea
            rows={4}
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Share an innovation breakthrough, research hypothesis, or sustainable infrastructure challenge..."
            className="w-full p-3.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none placeholder:text-slate-400"
          />

          {/* SDG 9 Target Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Align with SDG 9 Target
            </label>
            <div className="flex flex-wrap gap-2">
              {[
                { code: '9.1', label: '9.1 Resilient Infrastructure' },
                { code: '9.2', label: '9.2 Sustainable Industry' },
                { code: '9.4', label: '9.4 Clean Retrofit' },
                { code: '9.5', label: '9.5 Research & Tech' },
                { code: '9.c', label: '9.c Digital ICT' }
              ].map((target) => (
                <button
                  type="button"
                  key={target.code}
                  onClick={() => setSelectedTarget(target.code)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedTarget === target.code
                      ? 'bg-[#FD6925] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {target.label}
                </button>
              ))}
            </div>
          </div>

          {/* Hashtag picker */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1">
              <Hash className="w-3.5 h-3.5 text-blue-500" /> Topic Hashtags
            </label>
            <div className="flex flex-wrap gap-1.5">
              {SUGGESTED_HASHTAGS.map((tag) => {
                const isSelected = selectedTags.includes(tag);
                return (
                  <button
                    type="button"
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Optional Image */}
          <div>
            <button
              type="button"
              onClick={() => setShowImageOptions(!showImageOptions)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ImageIcon className="w-4 h-4" />
              {showImageOptions ? 'Hide media attachment' : 'Attach project visual or choose sample image'}
            </button>

            {showImageOptions && (
              <div className="mt-2.5 p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
                <input
                  type="url"
                  placeholder="Paste image URL (e.g. https://...)"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500"
                />
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">
                    Or select sample visual:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {SAMPLE_PRESET_IMAGES.map((preset) => (
                      <button
                        type="button"
                        key={preset.label}
                        onClick={() => setImageUrl(preset.url)}
                        className={`px-2.5 py-1 text-xs rounded-md border transition-all ${
                          imageUrl === preset.url
                            ? 'bg-blue-100 border-blue-400 text-blue-700 font-semibold'
                            : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>

                {imageUrl && (
                  <div className="relative mt-2 rounded-lg overflow-hidden h-32 border border-slate-200">
                    <img src={imageUrl} alt="Preview" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => setImageUrl('')}
                      className="absolute top-1 right-1 p-1 bg-black/60 text-white rounded-full hover:bg-black"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Action Bar */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              Posts are visible to global SDG 9 innovators
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsCreatePostModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!content.trim()}
                className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl shadow-md shadow-blue-500/20 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                Publish Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
