import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { X, Sparkles, Plus, Layers, Target, CheckCircle2 } from 'lucide-react';

const CATEGORIES = [
  'Sustainable Infrastructure',
  'Clean Energy',
  'AI & Robotics',
  'Green Technology',
  'Smart Cities'
];

export const CreateProjectModal = () => {
  const { isCreateProjectModalOpen, setIsCreateProjectModalOpen, createNewProject } = useApp();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState('Sustainable Infrastructure');
  const [sdgTarget, setSdgTarget] = useState('9.4');
  const [status, setStatus] = useState('Prototype');
  const [problem, setProblem] = useState('');
  const [solution, setSolution] = useState('');
  const [techStackStr, setTechStackStr] = useState('IoT Sensors, Edge Computing, Python');
  const [image, setImage] = useState('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80');

  if (!isCreateProjectModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !problem.trim() || !solution.trim()) return;

    const techStack = techStackStr
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    const newId = createNewProject({
      title,
      subtitle,
      category,
      sdgTarget,
      status,
      problem,
      solution,
      techStack,
      image
    });

    setIsCreateProjectModalOpen(false);
    navigate(`/projects/${newId}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 md:p-8"
        role="dialog"
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Showcase New SDG 9 Project</h3>
              <p className="text-xs text-slate-500">Publish your innovation to the global directory</p>
            </div>
          </div>
          <button
            onClick={() => setIsCreateProjectModalOpen(false)}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="pt-5 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Project Title *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., SolarPulse: Autonomous Industrial Microgrid Controller"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              One-Line Summary / Subtitle
            </label>
            <input
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              placeholder="e.g., Slashing fossil fuel generator runtime across rural manufacturing plants"
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-500 bg-white"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                SDG 9 Target
              </label>
              <select
                value={sdgTarget}
                onChange={(e) => setSdgTarget(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-500 bg-white"
              >
                <option value="9.1">9.1 Resilient Infrastructure</option>
                <option value="9.2">9.2 Sustainable Industry</option>
                <option value="9.4">9.4 Clean Industrial Retrofit</option>
                <option value="9.5">9.5 Research & Tech</option>
                <option value="9.c">9.c Digital ICT</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Development Stage
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-500 bg-white"
              >
                <option value="Concept">Concept</option>
                <option value="Prototype">Prototype</option>
                <option value="Field Tested">Field Tested</option>
                <option value="Seeking Collaborators">Seeking Collaborators</option>
                <option value="Production Ready">Production Ready</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Problem Statement *
            </label>
            <textarea
              rows={2}
              required
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              placeholder="What industrial, environmental, or infrastructural bottleneck does this project address?"
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-500 resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Proposed Solution & Innovation *
            </label>
            <textarea
              rows={2}
              required
              value={solution}
              onChange={(e) => setSolution(e.target.value)}
              placeholder="How does your engineering solution resolve this challenge?"
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-500 resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Technologies Used (comma separated)
            </label>
            <input
              type="text"
              value={techStackStr}
              onChange={(e) => setTechStackStr(e.target.value)}
              placeholder="e.g. IoT, Rust, Computer Vision, LoRaWAN"
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Cover Image URL
            </label>
            <input
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="https://..."
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => setIsCreateProjectModalOpen(false)}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-500/20 transition-all"
            >
              <Plus className="w-4 h-4" />
              Publish Innovation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
