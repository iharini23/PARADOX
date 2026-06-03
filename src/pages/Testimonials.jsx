import { motion } from 'framer-motion';
import TestimonialCard from '../components/TestimonialCard';
import SectionHeading from '../components/SectionHeading';
import usePageMetadata from '../hooks/usePageMetadata';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  usePageMetadata('Testimonials | PARADOX', 'See mock client testimonials and ratings for the PARADOX digital marketing agency frontend.');

  return (
    <div className="section-shell section-spacing space-y-14">
      <SectionHeading
        eyebrow="Testimonials"
        title="Client feedback styled for a premium agency showcase"
        description="Designed with mock data and future API integration in mind, while keeping the visual language polished and credible."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <TestimonialCard testimonial={testimonial} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}