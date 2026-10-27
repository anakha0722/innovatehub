import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { X, Handshake, Send, CheckCircle2 } from 'lucide-react';

export const CollabModal = ({ isOpen, onClose, project, recipient }) => {
  const { requestCollaboration } = useApp();
  const navigate = useNavigate();

  const [skills, setSkills] = useState('IoT Hardware Prototyping & React UI');
  const [note, setNote] = useState('Hi! I would love to contribute to this project. I have direct experience in edge sensors and would like to help test prototype integration.');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!project || !recipient) return;

    requestCollaboration({
      projectId: project.id,
      recipientId: recipient.id,
      skillsOffered: skills,
      note: note
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      navigate('/messages');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 md:p-7"
        role="dialog"
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <Handshake className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Request Collaboration</h3>
              <p className="text-xs text-slate-500">
                Partner with {recipient?.name} on SDG 9 innovation
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Collaboration Request Sent!</h4>
            <p className="text-sm text-slate-600 max-w-xs">
              Opening chat conversation with {recipient?.name}...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="pt-5 space-y-4">
            {/* Project context pill */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-700">
              <span className="font-semibold text-slate-900">Target Project: </span>
              {project?.title}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Your Skills & Value Add
              </label>
              <input
                type="text"
                required
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                placeholder="e.g., Computer Vision, Environmental Chemistry, UI/UX"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Proposal Message / Technical Note
              </label>
              <textarea
                rows={4}
                required
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Describe how your expertise can advance this project's SDG 9 milestone..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 transition-all"
              >
                <Send className="w-4 h-4" />
                Send Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
