import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import AppRoutes from './routes/AppRoutes';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1300);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? <LoadingScreen key="loader" /> : <AppRoutes key="routes" />}
    </AnimatePresence>
  );
}