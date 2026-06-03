const variants = {
  primary: 'bg-primary text-white hover:bg-secondary shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/20',
  secondary: 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300',
  ghost: 'text-primary hover:bg-primary/5 hover:text-secondary',
};

export default function Button({ to, href, variant = 'primary', className = '', children, ...props }) {
  const base = `inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${variants[variant]} ${className}`;
  const target = href || to;

  if (target) {
    return (
      <a href={target} className={base} {...props}>
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