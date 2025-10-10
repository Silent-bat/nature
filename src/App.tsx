import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import JournalPage from './pages/JournalPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Loader from './components/Loader';
import { Toaster } from "@/components/ui/sonner"
import TopicPage from './pages/TopicPage';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // Corresponds to loader animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader />}
      </AnimatePresence>
      
      {!loading && (
        <Layout>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/explorer" element={<ExplorePage />} />
              <Route path="/journal" element={<JournalPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/topic/:slug" element={<TopicPage />} />
            </Routes>
          </AnimatePresence>
        </Layout>
      )}
      <Toaster />
    </>
  );
}

export default App;
