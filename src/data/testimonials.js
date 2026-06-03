import { createAvatarImage } from './mockImage';

export const testimonials = [
  {
    name: 'Daniel Reed',
    company: 'Aster Labs',
    review: 'PARADOX brought structure, speed, and a premium look to everything we launched. The campaign output felt world-class.',
    rating: 5,
    image: createAvatarImage('Daniel Reed', '#6C63FF'),
  },
  {
    name: 'Sophia Bennett',
    company: 'Northstack',
    review: 'Their team made our content consistent and measurable. We finally had a system that helped the brand grow every week.',
    rating: 5,
    image: createAvatarImage('Sophia Bennett', '#00D4FF'),
  },
  {
    name: 'Marcus Lee',
    company: 'Pulse Drive',
    review: 'The branding refresh completely changed how our audience perceived us. Everything now feels premium and intentional.',
    rating: 5,
    image: createAvatarImage('Marcus Lee', '#8B5CF6'),
  },
  {
    name: 'Elena Torres',
    company: 'Volt Studio',
    review: 'Our launch edits performed far better than expected. The motion work made the campaign feel alive from day one.',
    rating: 4,
    image: createAvatarImage('Elena Torres', '#22C55E'),
  },
];