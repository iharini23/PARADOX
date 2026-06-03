import { Sparkles } from 'lucide-react';

export default function Logo({ compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-full overflow-hidden bg-white/5 shadow-glow">
        {/* Place `paradox-logo.png` at project root (public/paradox-logo.png) or serve at `/paradox-logo.png` */}
        <img
          src="/PARADOX_LOGO1.png"
          alt="PARADOX"
          className="h-full w-full object-cover"
          onError={(e) => {
            // fallback to the Sparkles icon if the image isn't available
            // eslint-disable-next-line no-param-reassign
            e.currentTarget.style.display = 'none';
            const parent = e.currentTarget.parentElement;
            if (parent) parent.querySelector('.logo-fallback')?.classList.remove('hidden');
          }}
        />

        <div className="logo-fallback hidden">
          <Sparkles className="h-5 w-5 text-white" />
        </div>
      </div>

      {!compact ? (
        <div>
          <p className="text-lg font-semibold leading-none text-white">PARADOX</p>
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Digital Marketing Agency</p>
        </div>
      ) : null}
    </div>
  );
}