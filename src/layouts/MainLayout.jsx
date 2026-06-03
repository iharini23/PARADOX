import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ScrollToTopButton from '../components/ScrollToTopButton';

function ScrollTopOnMount() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return null;
}

export default function MainLayout({ children }) {

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-slate-800">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-secondary/5 blur-3xl" />

      <ScrollTopOnMount />
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          key="single-page"
          className="relative isolate"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}