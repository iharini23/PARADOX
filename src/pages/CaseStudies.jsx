import { motion } from 'framer-motion';
import CaseStudyCard from '../components/CaseStudyCard';
import SectionHeading from '../components/SectionHeading';
import usePageMetadata from '../hooks/usePageMetadata';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudies() {
  usePageMetadata('Case Studies | PARADOX', 'Read detailed case study showcases for PARADOX marketing campaigns, strategy, execution, and results.');

  return (
    <div className="section-shell section-spacing space-y-14">
      <SectionHeading
        eyebrow="Case Studies"
        title="Detailed agency showcases with clear strategy and outcomes"
        description="Each case study follows a professional structure so future backend content can slot in cleanly."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {caseStudies.map((caseStudy, index) => (
          <motion.div
            key={caseStudy.clientName}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <CaseStudyCard caseStudy={caseStudy} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}