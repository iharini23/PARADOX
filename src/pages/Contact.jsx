import { useState } from 'react';
import { Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import usePageMetadata from '../hooks/usePageMetadata';
import { submitContactForm } from '../services/agencyApi';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

const serviceOptions = [
  'Content Creation',
  'Video Editing',
  'Social Media Management',
  'Branding',
  'Graphic Design',
  'SEO Optimization',
  'Performance Marketing',
  'Marketing Strategy',
];

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export default function Contact() {
  usePageMetadata('Contact PARADOX | Digital Marketing Agency', 'Contact PARADOX for digital marketing, branding, SEO, and performance marketing projects.');
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: 'loading', message: 'Sending inquiry...' });

    try {
      await submitContactForm(form);
      setStatus({ type: 'success', message: 'Thanks. Your inquiry is ready for backend submission.' });
      setForm(initialForm);
    } catch {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
    }
  }

  return (
    <div className="section-shell section-spacing space-y-14">
      <SectionHeading
        eyebrow="Contact"
        title="A future-ready contact experience"
        description="The form is ready for a Spring Boot API, while still providing a polished user experience today."
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <GlassCard className="p-7">
          <form className="grid gap-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              <input className="input-shell" placeholder="Name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
              <input className="input-shell" placeholder="Email" type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <input className="input-shell" placeholder="Phone" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} />
              <select className="input-shell" value={form.service} onChange={(event) => setForm({ ...form, service: event.target.value })}>
                <option value="">Service Required</option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <textarea
              className="input-shell min-h-40"
              placeholder="Message"
              value={form.message}
              onChange={(event) => setForm({ ...form, message: event.target.value })}
            />
            <Button
              type="submit"
              variant="primary"
              disabled={status.type === 'loading'}
              className="w-full"
            >
              {status.type === 'loading' ? 'Sending...' : 'Submit Inquiry'}
            </Button>
            {status.message ? (
              <p className={`text-sm ${status.type === 'error' ? 'text-red-300' : 'text-secondary'}`}>{status.message}</p>
            ) : null}
          </form>
        </GlassCard>

        <div className="space-y-6">
          <GlassCard className="p-7">
            <h3 className="text-xl font-semibold text-white">Agency Details</h3>
            <div className="mt-5 space-y-4 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-secondary" />
                sujithamurugan17@gmail.com
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-secondary" />
                +91 8072042580
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-secondary" />
                Remote-first, Global Delivery
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-7">
            <h3 className="text-xl font-semibold text-white">Social Media</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-secondary/50 hover:bg-white/10 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                    {social.label}
                  </a>
                );
              })}
            </div>
          </GlassCard>

          <GlassCard className="p-7">
            <h3 className="text-xl font-semibold text-white">Prepared For Future Integration</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              This contact flow can be connected directly to a Spring Boot endpoint, MongoDB records, and an admin dashboard without changing the page layout.
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}