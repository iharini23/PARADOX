const variants = {
  primary: 'bg-primary text-white shadow-[4px_4px_0px_#000000] hover:shadow-[0px_0px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px]',
  secondary: 'bg-white text-black shadow-[4px_4px_0px_#000000] hover:shadow-[0px_0px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px]',
  ghost: 'text-primary hover:text-secondary hover:-translate-y-0.5',
};

export default function Button({ to, href, variant = 'primary', className = '', children, ...props }) {
  const isGhost = variant === 'ghost';
  const base = `inline-flex items-center justify-center gap-2 font-bold uppercase transition-all duration-200 ${
    isGhost
      ? 'px-4 py-2 text-sm'
      : 'px-6 py-3.5 text-base border-2 border-black rounded-none'
  } ${variants[variant]} ${className}`;
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