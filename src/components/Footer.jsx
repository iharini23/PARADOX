import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { navigationLinks } from '../data/navigation';
import Logo from './Logo';

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
      <div className="section-shell py-16 grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr] items-start">
        <div className="space-y-6">
          {/* Render our clean Logo component with the new branding */}
          <Logo />

          <p className="max-w-md text-sm leading-relaxed text-slate-400">
            PARADOX (operated by House of Roas LLP) is a conversion-focused performance marketing agency. We design, script, write, and manage high-ROI acquisition systems.
          </p>

          <div className="flex flex-wrap gap-2.5">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition hover:border-primary/50 hover:bg-primary/10 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-5">Quick Navigation</h3>
          <ul className="space-y-3 text-sm font-semibold">
            {navigationLinks.map((link) => (
              <li key={link.path}>
                <a className="transition hover:text-white" href={link.path}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-5">Our Philosophy</h3>
          <p className="text-sm leading-relaxed text-slate-400">
            We operate under a simple principle: generate more value than we charge. No lock-in, fully attribution-audited campaigns.
          </p>
          <div className="mt-4 p-4 rounded-xl border border-white/5 bg-white/5 text-xs text-slate-500 leading-relaxed">
            LLP Registration: House of Roas LLP. Gurugram, Haryana.
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 bg-slate-950">
        <div className="section-shell flex flex-col gap-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright &copy; {new Date().getFullYear()} | PARADOX (House of Roas LLP). All rights reserved.</p>
          <p>Modeled after impactxl.in design system.</p>
        </div>
      </div>
    </footer>
  );
}