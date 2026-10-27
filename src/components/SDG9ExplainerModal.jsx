import React from 'react';
import { useApp } from '../context/AppContext';
import { SDG9_TARGETS } from '../data/initialData';
import { X, Building2, Factory, Leaf, Cpu, Wifi, Award, ExternalLink, Globe2 } from 'lucide-react';

export const SDG9ExplainerModal = () => {
  const { isSDGModalOpen, setIsSDGModalOpen } = useApp();

  if (!isSDGModalOpen) return null;

  const targetIconMap = {
    Building2: <Building2 className="w-5 h-5" />,
    Factory: <Factory className="w-5 h-5" />,
    Leaf: <Leaf className="w-5 h-5" />,
    Cpu: <Cpu className="w-5 h-5" />,
    Wifi: <Wifi className="w-5 h-5" />
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 md:p-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-5 border-b border-slate-100">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#FD6925] text-white flex flex-col items-center justify-center font-black shadow-lg shadow-orange-500/20">
              <span className="text-xs uppercase tracking-wider font-bold">Goal</span>
              <span className="text-2xl leading-none">9</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-[#ea580c]">
                  UN Sustainable Development Goal
                </span>
                <span className="text-xs text-slate-400 font-medium">Agenda 2030</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-1">
                Industry, Innovation and Infrastructure
              </h2>
            </div>
          </div>
          <button
            onClick={() => setIsSDGModalOpen(false)}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="py-6 space-y-6">
          <div className="p-4 bg-gradient-to-r from-orange-50/70 to-amber-50/70 border border-orange-100 rounded-xl text-slate-700 text-sm md:text-base leading-relaxed">
            <p className="font-medium text-slate-900 mb-1">
              "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation."
            </p>
            Economic growth, social development, and climate action are heavily dependent on investments in infrastructure, sustainable industrial development, and technological progress. InnovateHub directly bridges students, engineers, and researchers to co-create solutions.
          </div>

          <div>
            <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Globe2 className="w-5 h-5 text-blue-600" />
              Key SDG 9 Targets Addressed by InnovateHub
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {SDG9_TARGETS.map((target) => (
                <div
                  key={target.code}
                  className="p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all bg-slate-50/60"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-md text-xs font-bold bg-[#FD6925] text-white">
                      Target {target.code}
                    </span>
                    <span className="text-slate-500">
                      {targetIconMap[target.icon]}
                    </span>
                  </div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">
                    {target.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {target.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Context for Design Process and Perspective */}
          <div className="p-4 rounded-xl bg-slate-900 text-white space-y-2">
            <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" /> Academic Subject Alignment: Design Process & Perspective
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              This platform applies human-centered design principles (Empathize, Define, Ideate, Prototype, Test) to solve complex systemic challenges under SDG 9. InnovateHub enables rapid feedback loops between creators and domain experts worldwide.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <a
            href="https://sdgs.un.org/goals/goal9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-700"
          >
            Learn more at UN SDG Portal <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => setIsSDGModalOpen(false)}
            className="px-5 py-2 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-sm"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
