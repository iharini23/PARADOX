import { Sparkles } from 'lucide-react';

export default function Logo({ compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-full overflow-hidden bg-primary/10 border border-primary/20 shadow-sm">
        <img
          src="/PARADOX_LOGO1.png"
          alt="PARADOX"
          className="h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const parent = e.currentTarget.parentElement;
            if (parent) parent.querySelector('.logo-fallback')?.classList.remove('hidden');
          }}
        />

        <div className="logo-fallback hidden">
          <Sparkles className="h-5 w-5 text-primary" />
        </div>
      </div>

      {!compact ? (
        <div>
          <p className="text-lg font-bold leading-none text-slate-900 tracking-tight">PARADOX</p>
          <p className="text-xs uppercase tracking-[0.3em] font-semibold text-slate-500 mt-1">Digital Marketing Agency</p>
        </div>
      ) : null}
    </div>
  );
}