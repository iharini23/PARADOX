import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { navigationLinks } from '../data/navigation';
import { services } from '../data/services';

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="section-shell section-spacing grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-6">
          <Logo />
          <p className="max-w-md text-sm leading-7 text-slate-300">
            PARADOX crafts premium digital marketing experiences for brands that want to move faster, look sharper, and grow with intention.
          </p>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-secondary/50 hover:bg-secondary/10"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-secondary">Quick Links</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            {navigationLinks.map((link) => (
              <li key={link.path}>
                <Link className="transition hover:text-white" to={link.path}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-secondary">Services</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            {services.slice(0, 5).map((service) => (
              <li key={service.title}>{service.title}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary">Agency</h3>
          <p className="text-sm leading-7 text-slate-300">
            Future-ready setup for upcoming backend, admin dashboard, project management, and contact API integration.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col gap-3 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} PARADOX. All rights reserved.</p>
          <p>Built for a premium digital marketing experience.</p>
        </div>
      </div>
    </footer>
  );
}