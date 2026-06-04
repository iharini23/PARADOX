// Rebranded Theme
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1300);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <LoadingScreen key="loader" />
      ) : (
        <MainLayout key="layout">
          <Home />
        </MainLayout>
      )}
    </AnimatePresence>
  );
}