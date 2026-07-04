import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';
import usePageMetadata from '../hooks/usePageMetadata';
import { portfolioCategories, portfolioProjects } from '../data/projects';

export default function Portfolio() {
  usePageMetadata('Portfolio | PARADOX', 'Explore curated portfolio projects showing PARADOX digital agency work across content, video, branding, and marketing campaigns.');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return portfolioProjects;
    }

    return portfolioProjects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="section-shell section-spacing space-y-14">
      <SectionHeading
        eyebrow="Portfolio"
        title="The most important page, designed to showcase premium results"
        description="Filter projects by category and review the strategy, execution, and outcomes behind each mock case study."
      />

      <GlassCard className="flex flex-wrap gap-3 p-4">
        {portfolioCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 text-sm font-bold uppercase border-2 border-black rounded-none transition-all duration-200 ${
              activeCategory === category
                ? 'bg-primary text-white shadow-[2px_2px_0px_#000000] translate-x-[2px] translate-y-[2px]'
                : 'bg-white text-black shadow-[4px_4px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px]'
            }`}
          >
            {category}
          </button>
        ))}
      </GlassCard>

      <div className="grid gap-6 lg:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}