import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { navigationLinks } from '../data/navigation';
import Button from './Button';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? 'top-3 bg-white/90 border-slate-200/80 shadow-xl shadow-slate-200/20 py-2.5'
          : 'top-6 bg-white/75 border-slate-200/50 shadow-lg shadow-slate-100/10 py-3.5'
      }`}
    >
      <div className="mx-auto w-full px-6 flex h-12 items-center justify-between">
        <a href="#home" aria-label="PARADOX home" className="transition-transform duration-200 hover:scale-[1.02]">
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition-all duration-200 hover:bg-slate-100/80 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contact" className="px-5 py-2.5 text-xs uppercase tracking-wider font-bold">
            Get Access
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border-2 border-black bg-white text-black shadow-[2px_2px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[0px_0px_0px_#000000] transition-all duration-150 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-5 w-5" strokeWidth={2.5} /> : <Menu className="h-5 w-5" strokeWidth={2.5} />}
        </button>
      </div>

      <div
        className={`${
          open
            ? 'max-h-screen border-t border-slate-100/80 mt-3 bg-white/95 rounded-b-2xl shadow-inner'
            : 'max-h-0'
        } overflow-hidden transition-all duration-300 lg:hidden`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
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