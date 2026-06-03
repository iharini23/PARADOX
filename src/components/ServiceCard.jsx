import { ArrowRight } from 'lucide-react';
import Button from './Button';
import GlassCard from './GlassCard';

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <GlassCard className="group h-full p-6 transition hover:-translate-y-1 hover:border-secondary/30">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 text-secondary ring-1 ring-secondary/20 transition group-hover:scale-105">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
      <div className="mt-6">
        <Button to="/contact" variant="ghost" className="px-0 text-secondary hover:bg-transparent hover:text-white">
          Learn More <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </GlassCard>
  );
}