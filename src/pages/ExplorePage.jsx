import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ProjectCard } from '../components/ProjectCard';
import { 
  Search, 
  Filter, 
  PlusCircle, 
  Rss, 
  Compass, 
  Layers, 
  Sparkles, 
  Building2, 
  Factory, 
  Leaf, 
  Cpu, 
  X,
  ArrowRight
} from 'lucide-react';

const CATEGORIES = [
  'All Categories',
  'Sustainable Infrastructure',
  'Clean Energy',
  'AI & Robotics',
  'Green Technology',
  'Smart Cities'
];

const TARGETS = [
  { code: 'all', label: 'All Targets' },
  { code: '9.1', label: '9.1 Resilient Infra' },
  { code: '9.2', label: '9.2 Sustainable Industry' },
  { code: '9.4', label: '9.4 Clean Retrofit' },
  { code: '9.5', label: '9.5 Research & Tech' }
];

export const ExplorePage = () => {
  const { projects, setIsCreateProjectModalOpen } = useApp();
  const [searchParams, setSearchParams] = useSearchParams();

  const queryParam = searchParams.get('q') || '';
  const categoryParam = searchParams.get('category') || 'All Categories';
  const targetParam = searchParams.get('target') || 'all';

  const [localSearch, setLocalSearch] = useState(queryParam);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedTarget, setSelectedTarget] = useState(targetParam);

  // Sync with searchParams if URL changes
  useEffect(() => {
    if (queryParam) setLocalSearch(queryParam);
    if (categoryParam) setSelectedCategory(categoryParam);
    if (targetParam) setSelectedTarget(targetParam);
  }, [queryParam, categoryParam, targetParam]);

  // Update query params when filters change
  const handleFilterUpdate = (category, target, search) => {
    const params = {};
    if (category && category !== 'All Categories') params.category = category;
    if (target && target !== 'all') params.target = target;
    if (search && search.trim()) params.q = search.trim();
    setSearchParams(params);
  };

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    handleFilterUpdate(cat, selectedTarget, localSearch);
  };

  const handleTargetSelect = (target) => {
    setSelectedTarget(target);
    handleFilterUpdate(selectedCategory, target, localSearch);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleFilterUpdate(selectedCategory, selectedTarget, localSearch);
  };

  const clearAllFilters = () => {
    setLocalSearch('');
    setSelectedCategory('All Categories');
    setSelectedTarget('all');
    setSearchParams({});
  };

  // Filter projects
  const filteredProjects = projects.filter((proj) => {
    // Search query
    if (localSearch.trim()) {
      const q = localSearch.toLowerCase();
      const matchTitle = proj.title.toLowerCase().includes(q);
      const matchDesc = proj.problem?.toLowerCase().includes(q) || proj.solution?.toLowerCase().includes(q) || proj.subtitle?.toLowerCase().includes(q);
      const matchCreator = proj.creatorName.toLowerCase().includes(q);
      const matchTags = proj.tags?.some((t) => t.toLowerCase().includes(q));
      const matchTech = proj.techStack?.some((t) => t.toLowerCase().includes(q));

      if (!matchTitle && !matchDesc && !matchCreator && !matchTags && !matchTech) {
        return false;
      }
    }

    // Category
    if (selectedCategory !== 'All Categories') {
      if (proj.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }
    }

    // Target
    if (selectedTarget !== 'all') {
      if (proj.sdgTarget !== selectedTarget) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header & Navigation Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-teal-100 text-teal-700">
                <Compass className="w-5 h-5" />
              </span>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                Explore Innovations
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-slate-500">
              Browse breakthrough engineering solutions, open prototypes, and climate-resilient designs.
            </p>
          </div>

          {/* Action CTAs: Feed Link + Showcase Project */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <Link
              to="/feed"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-bold border border-blue-200 transition-colors"
            >
              <Rss className="w-4 h-4" />
              <span>Go to Community Feed</span>
            </Link>

            <button
              onClick={() => setIsCreateProjectModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-sm transition-all"
            >
              <PlusCircle className="w-4 h-4 text-teal-400" />
              <span>Showcase Project</span>
            </button>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          
          {/* Search bar */}
          <form onSubmit={handleSearchSubmit} className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by keywords, materials (e.g. geopolymer), technologies (e.g. IoT, Rust, ROS), or creator name..."
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              className="w-full pl-10 pr-24 py-3 bg-slate-50 rounded-xl text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
            {localSearch && (
              <button
                type="button"
                onClick={() => {
                  setLocalSearch('');
                  handleFilterUpdate(selectedCategory, selectedTarget, '');
                }}
                className="absolute right-12 top-3 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              type="submit"
              className="absolute right-2 top-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-colors"
            >
              Search
            </button>
          </form>

          {/* Category Filter Pills */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              Filter by Category:
            </span>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategorySelect(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* SDG 9 Target Filters */}
          <div className="space-y-1.5 pt-2 border-t border-slate-100">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              Filter by SDG 9 Target:
            </span>
            <div className="flex flex-wrap gap-2">
              {TARGETS.map((t) => (
                <button
                  key={t.code}
                  onClick={() => handleTargetSelect(t.code)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedTarget === t.code
                      ? 'bg-[#FD6925] text-white shadow-sm'
                      : 'bg-orange-50/70 text-[#ea580c] hover:bg-orange-100 border border-orange-200/60'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Filter Indicators & Reset */}
          {(selectedCategory !== 'All Categories' || selectedTarget !== 'all' || localSearch.trim()) && (
            <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
              <span className="text-slate-500">
                Filtered view showing <strong className="text-slate-900">{filteredProjects.length}</strong> {filteredProjects.length === 1 ? 'project' : 'projects'}
              </span>
              <button
                onClick={clearAllFilters}
                className="text-rose-600 hover:text-rose-700 font-bold flex items-center gap-1"
              >
                <X className="w-3.5 h-3.5" />
                <span>Clear All Filters</span>
              </button>
            </div>
          )}

        </div>

        {/* Results Counter & Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider">
              {filteredProjects.length} {filteredProjects.length === 1 ? 'Innovation Found' : 'Innovations Found'}
            </h2>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200/80 p-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                No matching SDG 9 projects found
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Try loosening your search keywords or reset category filters. Or be the first to publish a solution for this challenge!
              </p>
              <div className="pt-2 flex items-center justify-center gap-3">
                <button
                  onClick={clearAllFilters}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
                >
                  Clear Filters
                </button>
                <button
                  onClick={() => setIsCreateProjectModalOpen(true)}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold"
                >
                  + Add New Project
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Community Banner Link */}
        <div className="p-6 bg-gradient-to-r from-[#14213D] to-blue-900 rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base font-bold">
              Have an early-stage SDG 9 hypothesis or finding?
            </h3>
            <p className="text-xs text-slate-300">
              Share updates in the Community Feed to get feedback from other researchers and students.
            </p>
          </div>
          <Link
            to="/feed"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs shrink-0 transition-colors"
          >
            <Rss className="w-4 h-4" />
            <span>Join Community Feed</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
