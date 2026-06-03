import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { navigationLinks } from '../data/navigation';
import Button from './Button';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="section-shell flex h-20 items-center justify-between">
        <a href="#home" aria-label="PARADOX home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contact" className="px-5 py-2 text-xs uppercase tracking-wider font-bold">
            Get Access
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={`${open ? 'max-h-screen border-t border-slate-100 bg-white shadow-lg' : 'max-h-0'} overflow-hidden transition-all duration-300 lg:hidden`}>
        <div className="section-shell flex flex-col gap-1 py-4">
          {navigationLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}