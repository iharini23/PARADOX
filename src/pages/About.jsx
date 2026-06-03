import { motion } from 'framer-motion';
import { BadgeCheck, Rocket, Target, Users } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import SectionHeading from '../components/SectionHeading';
import usePageMetadata from '../hooks/usePageMetadata';
import { teamMembers } from '../data/team';

const pillars = [
  { icon: Users, title: 'Who We Are', text: 'A multidisciplinary digital marketing team blending strategy, creative, and performance into one delivery model.' },
  { icon: Target, title: 'Mission', text: 'Help ambitious brands communicate better, convert faster, and build long-term digital equity.' },
  { icon: Rocket, title: 'Vision', text: 'Become the premium launch partner for brands building modern, future-facing experiences online.' },
  { icon: BadgeCheck, title: 'Why Choose PARADOX', text: 'We make work that feels premium, ships consistently, and is built to measure impact from the start.' },
];

export default function About() {
  usePageMetadata('About PARADOX | Digital Marketing Agency', 'Learn more about PARADOX, our mission, vision, and team behind the premium agency experience.');

  return (
    <div className="section-shell section-spacing space-y-14">
      <SectionHeading
        eyebrow="About PARADOX"
        title="A digital agency built for modern brand momentum"
        description="We design, produce, and optimize marketing experiences that feel premium while staying grounded in measurable growth."
      />

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <GlassCard className="h-full p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-secondary ring-1 ring-white/10">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{pillar.text}</p>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>

      <section className="grid gap-6 lg:grid-cols-2">
        <GlassCard className="p-7">
          <p className="text-xs uppercase tracking-[0.3em] text-secondary">Who We Are</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">Small team, strong systems, premium output</h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            PARADOX operates like a modern product studio for marketing. The team combines planning, content, design, and growth thinking to support brands that want one partner for execution.
          </p>
        </GlassCard>

        <GlassCard className="p-7">
          <p className="text-xs uppercase tracking-[0.3em] text-secondary">Approach</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">Built to scale with your future backend and admin systems</h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            This frontend is structured to support future Spring Boot, MongoDB, admin dashboard, and project management integrations without reworking the UI layer.
          </p>
        </GlassCard>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Team Introduction"
          title="The minds behind the marketing engine"
          description="Static team data for now, ready to plug into a backend-powered profile system later."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <GlassCard className="overflow-hidden p-6">
                <img src={member.image} alt={member.name} className="h-56 w-full rounded-2xl object-cover" />
                <h3 className="mt-5 text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-secondary">{member.role}</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">{member.bio}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}