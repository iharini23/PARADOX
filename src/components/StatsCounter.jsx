import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function AnimatedNumber({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.7 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) {
      return undefined;
    }

    let current = 0;
    const duration = 1200;
    const stepTime = Math.max(16, Math.floor(duration / value));
    const timer = window.setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= value) {
        window.clearInterval(timer);
      }
    }, stepTime);

    return () => window.clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {inView ? count : 0}
      {suffix}
    </span>
  );
}

export default function StatsCounter({ stats }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="glass-panel rounded-3xl p-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
        >
          <p className="text-3xl font-semibold text-white">
            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
          </p>
          <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}