import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Download, Terminal, Cpu } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Detect active section on scroll
      const sections = ['work', 'systems', 'proof', 'about', 'stack', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleHomeClick = () => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Work', target: 'projects' },
    { label: 'Open Source', target: 'opensource' },
    { label: 'Recognition', target: 'recognition' },
    { label: 'Principles', target: 'architecture' },
    { label: 'Stack', target: 'stack' },
    { label: 'About', target: 'about' },
    { label: 'Contact', target: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0C0C0B]/90 backdrop-blur-md border-b border-[#F3F1EA]/[0.07] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand mark / Identity */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handleHomeClick}
              className="group text-left flex items-center space-x-2 focus:outline-none"
              aria-label="Samadhan Mane Homepage"
            >
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#F3F1EA] group-hover:text-[#E89A3C] transition-colors">
                SAMADHAN / MANE
              </span>
            </button>
            <span className="hidden sm:inline-block h-3 w-[1px] bg-[#F3F1EA]/20" />
            <div className="hidden sm:flex items-center space-x-1.5 font-mono text-[11px] text-[#A7A59D] uppercase tracking-wider">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>AI Systems</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7" aria-label="Main Navigation">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.target)}
                className="group relative font-sans text-[13px] font-medium tracking-normal text-[#A7A59D] hover:text-[#F3F1EA] transition-colors focus:outline-none"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#E89A3C] transition-all duration-200 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Right Action: Resume & Links */}
          <div className="hidden sm:flex items-center space-x-3 font-mono text-xs">
            <a
              href="/Samadhan_resume.pdf"
              download="Samadhan_Mane_AIML_Resume.pdf"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 border border-[#F3F1EA]/15 rounded hover:border-[#E89A3C] hover:text-[#E89A3C] text-[#F3F1EA] transition-all bg-[#131311]"
            >
              <Download size={13} className="text-[#E89A3C]" />
              <span>RESUME</span>
            </a>
            <a
              href="https://github.com/samadhanmane"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-[#A7A59D] hover:text-[#F3F1EA] transition-colors"
              aria-label="GitHub Profile"
            >
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href="/Samadhan_resume.pdf"
              download="Samadhan_Mane_AIML_Resume.pdf"
              className="px-2.5 py-1 text-[11px] font-mono border border-[#F3F1EA]/15 rounded text-[#E89A3C]"
            >
              CV
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#F3F1EA] hover:text-[#E89A3C] transition-colors focus:outline-none"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-[#F3F1EA]/10 bg-[#0C0C0B]/98 backdrop-blur-xl px-6 py-6 transition-all">
          <div className="space-y-4">
            <div className="font-mono text-[10px] text-[#A7A59D] uppercase tracking-wider pb-2 border-b border-[#F3F1EA]/5 flex items-center justify-between">
              <span>INDEX</span>
              <span className="text-emerald-400">● AVAILABLE</span>
            </div>
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.target)}
                className="block w-full text-left font-sans text-base font-medium text-[#F3F1EA] hover:text-[#E89A3C] transition-colors py-1"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-[#F3F1EA]/10 flex flex-col space-y-3 font-mono text-xs">
              <a
                href="/Samadhan_resume.pdf"
                download="Samadhan_Mane_AIML_Resume.pdf"
                className="flex items-center justify-center space-x-2 py-2.5 bg-[#E89A3C] text-black font-semibold rounded"
              >
                <Download size={14} />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>
              <div className="flex justify-around pt-2 text-[#A7A59D]">
                <a href="https://github.com/samadhanmane" target="_blank" rel="noreferrer" className="hover:text-white">
                  GITHUB ↗
                </a>
                <a href="https://linkedin.com/in/samadhan-mane" target="_blank" rel="noreferrer" className="hover:text-white">
                  LINKEDIN ↗
                </a>
                <a href="mailto:samadhanmane2324@gmail.com" className="hover:text-white">
                  EMAIL ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
