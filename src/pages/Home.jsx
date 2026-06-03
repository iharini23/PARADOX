import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, ShieldCheck, Users } from 'lucide-react';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import StatsCounter from '../components/StatsCounter';
import TestimonialCard from '../components/TestimonialCard';
import usePageMetadata from '../hooks/usePageMetadata';
import { services } from '../data/services';
import { stats, trustLabels } from '../data/stats';
import { testimonials } from '../data/testimonials';

export default function Home() {
  usePageMetadata(
    'PARADOX | Digital Marketing Agency',
    'PARADOX builds premium digital marketing experiences through content, branding, performance marketing, SEO, and video.',
  );

  return (
    <div className="home-theme">
      <section className="section-shell section-spacing relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden home-theme">
        <div className="absolute inset-0 -z-10">
          {/* Left warm accent (logo red) */}
          <div
            className="absolute left-[-12%] top-6 h-80 w-80 rounded-full blur-3xl animate-shimmer"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(224,58,58,0.24), transparent 35%)',
            }}
          />

          {/* Right cool accent (logo blue) */}
          <div
            className="absolute right-[-6%] top-20 h-96 w-96 rounded-full blur-3xl animate-float"
            style={{
              background: 'radial-gradient(circle at 70% 30%, rgba(16,120,255,0.18), transparent 35%)',
            }}
          />

          {/* Center subtle lift */}
          <div
            className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]"
            style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.04), transparent 40%)' }}
          />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="home-kicker inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
              Premium Digital Agency
            </span>
            <h1 className="mt-6 max-w-4xl bg-gradient-to-r from-[#ffb0b0] via-[#f3f8ff] to-[#9fd2ff] bg-clip-text text-5xl font-semibold leading-tight text-transparent sm:text-6xl lg:text-7xl">
              Transforming Brands Into Digital Experiences
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              PARADOX creates sleek, high-performance brand systems for ambitious companies that want to stand out, scale faster, and convert better.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/portfolio" className="home-primary-btn">
                View Portfolio <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/contact" variant="secondary">
                Contact Us
              </Button>
              <Button href="#trust" variant="ghost" className="px-2">
                <PlayCircle className="h-5 w-5" /> Watch Intro
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
              <div className="home-pill flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <ShieldCheck className="h-4 w-4 text-secondary" /> Reliable Delivery
              </div>
              <div className="home-pill flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <Users className="h-4 w-4 text-secondary" /> Cross-Functional Team
              </div>
            </div>
          </motion.div>

          <motion.div className="relative" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
            <GlassCard className="relative overflow-hidden p-5">
              <div className="absolute inset-0 bg-gradient-to-br from-white/8 to-transparent" />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-secondary">Agency Snapshot</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">Futuristic Growth Stack</h2>
                  </div>
                  <div className="home-live rounded-2xl border border-secondary/20 bg-secondary/10 px-4 py-2 text-sm text-secondary">
                    Live
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {['Strategy', 'Content', 'Design', 'Paid Media'].map((item, index) => (
                    <div key={item} className="home-panel-cell rounded-3xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">0{index + 1}</p>
                      <p className="mt-3 text-lg font-semibold text-white">{item}</p>
                      <p className="mt-2 text-sm text-slate-300">Structured for growth, clarity, and premium presentation.</p>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      <section id="trust" className="section-shell home-block pb-12">
        <GlassCard className="p-6 sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-secondary">Client Trust</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Built for founders, startups, and growing brands</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {trustLabels.map((label) => (
                <span key={label} className="home-pill rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  {label}
                </span>
              ))}
            </div>
          </div>
        </GlassCard>
      </section>

      <section className="section-shell section-spacing home-block space-y-12">
        <SectionHeading
          eyebrow="Performance Metrics"
          title="Numbers that reflect strategic execution"
          description="We combine design, content, and performance systems to create measurable digital momentum."
        />
        <StatsCounter stats={stats} />
      </section>

      <section className="section-shell section-spacing home-block space-y-12">
        <SectionHeading
          eyebrow="Services Preview"
          title="Everything needed to launch and scale a digital brand"
          description="Our service stack spans the creative and growth layers required for premium digital agency execution."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.slice(0, 4).map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="section-shell section-spacing home-block space-y-12">
        <SectionHeading
          eyebrow="Testimonials Preview"
          title="Trusted by teams that need results and presentation"
          description="Hereâ€™s a snapshot of what clients say after working with PARADOX."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {testimonials.slice(0, 2).map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </section>

      <section className="section-shell section-spacing home-block pb-28">
        <GlassCard className="home-cta-card flex flex-col gap-8 p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary">Next Step</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Ready to create a sharper digital presence?</h2>
            <p className="text-sm leading-7 text-slate-300">
              Explore the portfolio, review case studies, or contact PARADOX to plan your next campaign.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button to="/case-studies" variant="secondary">
              View Case Studies
            </Button>
            <Button to="/contact" className="home-primary-btn">
              Start a Project <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}