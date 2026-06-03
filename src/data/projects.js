import { createProjectImage } from './mockImage';

export const portfolioCategories = [
  'All',
  'Content Creation',
  'Video Editing',
  'Social Media',
  'Branding',
  'Marketing Campaigns',
];

export const portfolioProjects = [
  {
    title: 'Neon Commerce Launch',
    category: 'Marketing Campaigns',
    description: 'A full-funnel product launch campaign blending creator content, paid social, and landing page refinement.',
    technologies: ['Meta Ads', 'Figma', 'Motion Graphics', 'SEO'],
    client: 'Aster Labs',
    results: 'Raised qualified leads by 214% in eight weeks.',
    image: createProjectImage('Neon Commerce Launch', '#6C63FF'),
  },
  {
    title: 'Creator Growth Engine',
    category: 'Content Creation',
    description: 'Content systems for a founder-led brand focused on authority building, audience retention, and weekly thought leadership.',
    technologies: ['Content Strategy', 'Copywriting', 'Notion', 'Analytics'],
    client: 'Northstack',
    results: 'Increased organic impressions by 3.8x.',
    image: createProjectImage('Creator Growth Engine', '#00D4FF'),
  },
  {
    title: 'Motion-First Launch Film',
    category: 'Video Editing',
    description: 'A cinematic product teaser and social cut-down package engineered for launches and remarketing.',
    technologies: ['After Effects', 'Premiere Pro', 'Sound Design'],
    client: 'Volt Studio',
    results: 'Improved video completion rates by 47%.',
    image: createProjectImage('Motion-First Launch Film', '#8B5CF6'),
  },
  {
    title: 'Social Presence Rebuild',
    category: 'Social Media',
    description: 'Platform refresh, publishing rhythm, and engagement playbooks for an underperforming brand account.',
    technologies: ['Instagram', 'LinkedIn', 'Canva', 'Scheduling Stack'],
    client: 'Studio Layer',
    results: 'Monthly engagement grew by 190%.',
    image: createProjectImage('Social Presence Rebuild', '#0EA5E9'),
  },
  {
    title: 'Brand Identity Refresh',
    category: 'Branding',
    description: 'A sharper identity system with updated color language, logo treatment, and digital guidelines.',
    technologies: ['Brand Guidelines', 'Typography', 'Identity Design'],
    client: 'Pulse Drive',
    results: 'Delivered a premium repositioning for new market entry.',
    image: createProjectImage('Brand Identity Refresh', '#22C55E'),
  },
  {
    title: 'Authority SEO Sprint',
    category: 'Marketing Campaigns',
    description: 'A content-led SEO sprint targeting commercial keywords, technical fixes, and internal linking upgrades.',
    technologies: ['Technical SEO', 'Keyword Research', 'Content Clusters'],
    client: 'Nova Health',
    results: 'Organic conversions grew by 138%.',
    image: createProjectImage('Authority SEO Sprint', '#F97316'),
  },
];