import { Link } from 'react-router-dom';

const variants = {
  primary: 'bg-gradient-to-r from-primary to-secondary text-white shadow-glow hover:shadow-cyan',
  secondary: 'border border-white/15 bg-white/5 text-white hover:border-secondary/50 hover:bg-white/10',
  ghost: 'text-slate-200 hover:bg-white/5 hover:text-white',
};

export default function Button({ to, href, variant = 'primary', className = '', children, ...props }) {
  const base = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={base} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={base} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={base} {...props}>
      {children}
    </button>
  );
}