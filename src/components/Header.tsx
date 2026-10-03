import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navigation = ['Projects', 'Experience', 'Education', 'Contact'];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'border-b border-slate-200 bg-cream/90 shadow-sm backdrop-blur-lg' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <button onClick={() => scrollToSection('home')} className={`font-display text-xl font-semibold tracking-tight ${isScrolled ? 'text-ink' : 'text-white'}`}>
          Eman<span className="text-teal-400">.</span>
        </button>
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <button key={item} onClick={() => scrollToSection(item)} className={`text-sm font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-teal-700' : 'text-slate-300 hover:text-white'}`}>
              {item}
            </button>
          ))}
          <a href="/MY_CV.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-teal-400 px-4 py-2 text-sm font-semibold text-ink transition hover:bg-teal-300">
            View CV <ArrowUpRight size={15} />
          </a>
        </div>
        <button aria-label="Toggle navigation" onClick={() => setIsMenuOpen(!isMenuOpen)} className={`md:hidden ${isScrolled ? 'text-ink' : 'text-white'}`}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-cream px-6 py-4 shadow-lg md:hidden">
          {navigation.map((item) => (
            <button key={item} onClick={() => scrollToSection(item)} className="block w-full border-b border-slate-200 py-3 text-left text-sm font-medium text-slate-700 last:border-0">
              {item}
            </button>
          ))}
          <a href="/MY_CV.pdf" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white">Open CV <ArrowUpRight size={15} /></a>
        </div>
      )}
    </header>
  );
};

export default Header;
