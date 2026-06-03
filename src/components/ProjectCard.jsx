import GlassCard from './GlassCard';

export default function ProjectCard({ project }) {
  return (
    <GlassCard className="overflow-hidden">
      <img src={project.image} alt={project.title} className="h-60 w-full object-cover" />
      <div className="space-y-5 p-6">
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.25em] text-secondary">
          <span>{project.category}</span>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span>{project.client}</span>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Technologies</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span key={technology} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                {technology}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-secondary/15 bg-secondary/5 p-4 text-sm text-slate-200">
          <span className="block text-xs uppercase tracking-[0.3em] text-secondary">Results Achieved</span>
          <p className="mt-2 leading-7">{project.results}</p>
        </div>
      </div>
    </GlassCard>
  );
}