import { createAvatarImage } from './mockImage';

export const teamMembers = [
  {
    name: 'Ari Vale',
    role: 'Creative Director',
    bio: 'Leads brand systems and premium campaign direction with a strong visual and strategic point of view.',
    image: createAvatarImage('Ari Vale', '#0F53B8'),
  },
  {
    name: 'Mira Chen',
    role: 'Growth Strategist',
    bio: 'Builds performance roadmaps, conversion systems, and channel planning for measurable growth.',
    image: createAvatarImage('Mira Chen', '#931521'),
  },
  {
    name: 'Noah Cruz',
    role: 'Motion & Video Lead',
    bio: 'Shapes scroll-stopping visuals, edits, and motion narratives that elevate digital campaigns.',
    image: createAvatarImage('Noah Cruz', '#0C3994'),
  },
];