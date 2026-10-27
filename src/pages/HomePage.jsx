import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ProjectCard } from '../components/ProjectCard';
import { PostCard } from '../components/PostCard';
import { SDG9_TARGETS } from '../data/initialData';
import { 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Users, 
  Globe2, 
  Building2, 
  Factory, 
  Leaf, 
  Cpu, 
  Compass, 
  Rss, 
  CheckCircle2, 
  TrendingUp, 
  Info,
  ShieldCheck,
  Zap
} from 'lucide-react';

export const HomePage = () => {
  const { projects, posts, stats, setIsSDGModalOpen, setIsCreatePostModalOpen } = useApp();
  const navigate = useNavigate();

  // Featured 3 projects for the home showcase
  const featuredProjects = projects.slice(0, 3);
  // Featured 2 latest posts
  const featuredPosts = posts.slice(0, 2);

  const targetIconMap = {
    Building2: <Building2 className="w-6 h-6 text-blue-600" />,
    Factory: <Factory className="w-6 h-6 text-amber-600" />,
    Leaf: <Leaf className="w-6 h-6 text-emerald-600" />,
    Cpu: <Cpu className="w-6 h-6 text-indigo-600" />,
    Wifi: <Zap className="w-6 h-6 text-rose-600" />
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#14213D] via-[#101a33] to-[#0b1325] text-white pt-16 pb-24 md:py-28">
        
        {/* Ambient Decorative Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-64 h-64 bg-[#FD6925]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            
            {/* Pill Header */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-slate-200">
              <span className="w-2 h-2 rounded-full bg-[#FD6925] animate-pulse" />
              <span>Dedicated to UN Sustainable Development Goal 9</span>
              <button 
                onClick={() => setIsSDGModalOpen(true)}
                className="text-teal-400 hover:text-teal-300 underline font-bold flex items-center ml-1"
              >
                Learn Target Specs <ArrowRight className="w-3 h-3 ml-0.5" />
              </button>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
              Connect Ideas.{' '}
              <span className="bg-gradient-to-r from-blue-400 via-teal-300 to-orange-400 bg-clip-text text-transparent">
                Build the Future.
              </span>
            </h1>

            {/* Subtitle / Intro */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              InnovateHub is the premier collaborative social media platform where students, designers, engineers, researchers, and entrepreneurs share breakthroughs, showcase prototypes, and co-develop sustainable infrastructure solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                to="/feed"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 transition-all hover:scale-102"
              >
                <Rss className="w-4 h-4" />
                <span>Join Community</span>
              </Link>

              <Link
                to="/explore"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 backdrop-blur-md transition-all hover:scale-102"
              >
                <Compass className="w-4 h-4 text-teal-400" />
                <span>Explore Innovations</span>
              </Link>
            </div>

            {/* Academic Credential badge */}
            <div className="pt-2">
              <span className="text-xs text-slate-400 font-mono tracking-wide">
                Design Process & Perspective • College Evaluation Capstone Project
              </span>
            </div>

          </div>

          {/* Key Metric Counters */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center hover:bg-white/10 transition-colors">
              <span className="block text-2xl sm:text-3xl font-black text-white">{stats.innovatorsCount}</span>
              <span className="text-xs text-slate-300 font-medium">Active Innovators</span>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center hover:bg-white/10 transition-colors">
              <span className="block text-2xl sm:text-3xl font-black text-teal-400">{stats.activeProjects}</span>
              <span className="text-xs text-slate-300 font-medium">SDG 9 Projects</span>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center hover:bg-white/10 transition-colors">
              <span className="block text-2xl sm:text-3xl font-black text-orange-400">{stats.countriesRepresented}</span>
              <span className="text-xs text-slate-300 font-medium">Countries Reached</span>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center hover:bg-white/10 transition-colors">
              <span className="block text-2xl sm:text-3xl font-black text-blue-400">{stats.carbonReducedTons}</span>
              <span className="text-xs text-slate-300 font-medium">CO₂ Tons Abated</span>
            </div>
          </div>

        </div>
      </section>


      {/* SDG 9 INTRODUCTION SECTION */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#FD6925]/10 text-[#ea580c]">
                <span>UN AGENDA 2030</span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Advancing Sustainable Development Goal 9
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Goal 9 focuses on building resilient infrastructure, promoting inclusive and sustainable industrialization, and fostering innovation. InnovateHub empowers developers to collaborate on tangible technologies that directly answer these critical targets.
              </p>
            </div>

            <button
              onClick={() => setIsSDGModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:border-slate-400 text-slate-800 text-xs font-bold transition-all shrink-0"
            >
              <span>View Target Details</span>
              <Info className="w-4 h-4 text-blue-600" />
            </button>
          </div>

          {/* Targets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SDG9_TARGETS.slice(0, 3).map((target) => (
              <div
                key={target.code}
                className="group p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm mb-5 group-hover:scale-110 transition-transform">
                  {targetIconMap[target.icon]}
                </div>
                
                <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-black bg-[#FD6925] text-white mb-2">
                  Target {target.code}
                </span>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {target.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {target.description}
                </p>

                <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-blue-600 font-semibold group-hover:text-blue-700">
                  <Link to={`/explore?target=${target.code}`} className="flex items-center gap-1">
                    <span>View Projects</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* FEATURED INNOVATIONS SECTION */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Breakthroughs</span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Innovative Projects Transforming SDG 9
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Explore real prototypes from leading researchers and engineering students.
              </p>
            </div>

            <Link
              to="/explore"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span>Explore All {projects.length} Innovations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 3 Featured Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((proj) => (
              <ProjectCard key={proj.id} project={proj} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all"
            >
              <Compass className="w-4 h-4 text-teal-400" />
              <span>Browse Full Innovation Directory</span>
            </Link>
          </div>

        </div>
      </section>


      {/* COMMUNITY HIGHLIGHTS & FEED PREVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left side: Why Join InnovateHub */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-800">
                <Users className="w-3.5 h-3.5" />
                <span>Global Ecosystem</span>
              </div>

              <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-snug">
                Where Engineers and Researchers Co-Create.
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Traditional academic silos delay sustainable infrastructure implementation. InnovateHub breaks the mold by fostering rapid prototyping discussions, peer feedback, and cross-border partnerships.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Direct Collaboration Requests</h4>
                    <p className="text-xs text-slate-600">Connect directly with creators of prototypes to offer testing datasets and skills.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Quantified SDG 9 Metrics</h4>
                    <p className="text-xs text-slate-600">Measure real CO2 tons prevented, infrastructure resilience gains, and uptime.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Open-Source Knowledge Sharing</h4>
                    <p className="text-xs text-slate-600">Freely inspect bill of materials, circuit telemetry, and geopolymer recipes.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setIsCreatePostModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all"
                >
                  <span>Share Your Breakthrough in Feed</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right side: Live Community Feed Preview */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between pb-2">
                <div className="flex items-center gap-2">
                  <Rss className="w-4 h-4 text-blue-600" />
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Recent Community Discussions
                  </h3>
                </div>
                <Link
                  to="/feed"
                  className="text-xs font-bold text-blue-600 hover:text-blue-700"
                >
                  View Live Feed →
                </Link>
              </div>

              <div className="space-y-4">
                {featuredPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>

              <div className="text-center pt-2">
                <Link
                  to="/feed"
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline"
                >
                  <span>Join the conversation in the Community Feed</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="bg-gradient-to-r from-blue-700 via-teal-600 to-[#14213D] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Ready to shape resilient infrastructure?
          </h2>
          <p className="text-slate-100 text-sm sm:text-base max-w-xl mx-auto">
            Join thousands of innovators solving real-world industrial and engineering challenges. Publish your project or explore open collaborations today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/explore"
              className="px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-slate-100 shadow-lg transition-all"
            >
              Explore Innovations
            </Link>
            <Link
              to="/feed"
              className="px-6 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 text-white font-bold text-xs border border-white/20 transition-all"
            >
              Open Community Feed
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
