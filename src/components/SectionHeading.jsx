export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <span className="rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-secondary">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="text-sm leading-7 text-slate-300 sm:text-base">{description}</p> : null}
    </div>
  );
}