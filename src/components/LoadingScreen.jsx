import { motion } from 'framer-motion';
import Logo from './Logo';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-dark"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="flex flex-col items-center gap-6">
        <Logo compact />
        <div className="h-1.5 w-40 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-primary to-secondary bg-[length:200%_100%] animate-shimmer" />
        </div>
      </div>
    </motion.div>
  );
}