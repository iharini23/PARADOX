import GlassCard from './GlassCard';

export default function CaseStudyCard({ caseStudy }) {
  return (
    <GlassCard className="h-full p-7">
      <div className="flex items-center gap-3">
        <div className="h-3 w-3 rounded-full bg-secondary shadow-cyan" />
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">{caseStudy.clientName}</p>
      </div>
      <div className="mt-6 space-y-5 text-sm leading-7 text-slate-300">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white">Problem</p>
          <p className="mt-2">{caseStudy.problem}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white">Strategy</p>
          <p className="mt-2">{caseStudy.strategy}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white">Execution</p>
          <p className="mt-2">{caseStudy.execution}</p>
        </div>
        <div className="rounded-2xl border border-secondary/15 bg-secondary/5 p-4 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">Results</p>
          <p className="mt-2 leading-7 text-slate-200">{caseStudy.results}</p>
        </div>
      </div>
    </GlassCard>
  );
}