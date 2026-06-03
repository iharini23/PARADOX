import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import usePageMetadata from '../hooks/usePageMetadata';
import { services } from '../data/services';

export default function Services() {
  usePageMetadata('Services | PARADOX', 'Explore PARADOX services including content creation, video editing, branding, SEO, and performance marketing.');

  return (
    <div className="section-shell section-spacing space-y-14">
      <SectionHeading
        eyebrow="Services"
        title="A complete digital agency service stack"
        description="Each offer is designed to work together so brands can launch, scale, and optimize with one cohesive system."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}