import { Star } from 'lucide-react';
import GlassCard from './GlassCard';

export default function TestimonialCard({ testimonial }) {
  return (
    <GlassCard className="h-full p-6">
      <div className="flex items-center gap-4">
        <img src={testimonial.image} alt={testimonial.name} className="h-14 w-14 rounded-2xl object-cover" />
        <div>
          <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
          <p className="text-sm text-slate-400">{testimonial.company}</p>
        </div>
      </div>

      <div className="mt-5 flex gap-1 text-yellow-300">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>

      <p className="mt-4 text-sm leading-7 text-slate-300">{testimonial.review}</p>
    </GlassCard>
  );
}