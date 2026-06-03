import Button from '../components/Button';
import GlassCard from '../components/GlassCard';

export default function NotFound() {
  return (
    <div className="section-shell section-spacing flex justify-center">
      <GlassCard className="max-w-xl p-10 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-secondary">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Page not found</h1>
        <p className="mt-4 text-sm leading-7 text-slate-300">The requested page does not exist. Return to the homepage to continue exploring PARADOX.</p>
        <div className="mt-8 flex justify-center">
          <Button to="/">Back Home</Button>
        </div>
      </GlassCard>
    </div>
  );
}