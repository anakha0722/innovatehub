import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ToastContainer } from './components/Toast';
import { SDG9ExplainerModal } from './components/SDG9ExplainerModal';
import { CreatePostModal } from './components/CreatePostModal';
import { CreateProjectModal } from './components/CreateProjectModal';

// Pages
import { HomePage } from './pages/HomePage';
import { FeedPage } from './pages/FeedPage';
import { ExplorePage } from './pages/ExplorePage';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage';
import { ProfilePage } from './pages/ProfilePage';
import { MessagesPage } from './pages/MessagesPage';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// 404 Fallback
const NotFoundPage = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 space-y-4">
      <div className="w-16 h-16 rounded-2xl bg-orange-100 text-[#ea580c] flex items-center justify-center font-black text-2xl">
        404
      </div>
      <h2 className="text-xl font-bold text-slate-900">Page Not Found</h2>
      <p className="text-xs text-slate-500 max-w-sm">
        The innovation page or profile you are looking for has been moved or does not exist.
      </p>
      <a
        href="/"
        className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm"
      >
        Return to Home Page
      </a>
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
          {/* Universal Header Navigation */}
          <Navbar />

          {/* Page Routing */}
          <div className="flex-1">
            <Routes>
              {/* Page 1: Home / Landing */}
              <Route path="/" element={<HomePage />} />

              {/* Page 2: Community Feed */}
              <Route path="/feed" element={<FeedPage />} />

              {/* Page 3: Explore Innovations */}
              <Route path="/explore" element={<ExplorePage />} />

              {/* Page 4: Project Details / Showcase */}
              <Route path="/projects/:id" element={<ProjectDetailsPage />} />

              {/* Page 5: User Profile */}
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/profile/:id" element={<ProfilePage />} />

              {/* Page 6: Messages / Collaboration */}
              <Route path="/messages" element={<MessagesPage />} />

              {/* Catch-all */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>

          {/* Universal Footer */}
          <Footer />

          {/* Global Floating Modals & Feedback Notifications */}
          <ToastContainer />
          <SDG9ExplainerModal />
          <CreatePostModal />
          <CreateProjectModal />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
