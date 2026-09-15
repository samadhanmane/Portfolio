import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#F3F1EA]/10 bg-[#0C0C0B] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="space-y-2 font-mono text-xs">
          <div className="font-bold text-[#F3F1EA] tracking-widest uppercase">
            SAMADHAN DAYANAND MANE
          </div>
          <div className="text-[#A7A59D]">
            AI ENGINEER · CONVERSATIONAL AI & RAG ARCHITECTURES
          </div>
          <div className="text-[#6E6C65] text-[11px]">
            PUNE, MAHARASHTRA, INDIA · © 2026 SAMADHAN MANE
          </div>
        </div>

        <div className="flex flex-col md:items-end space-y-3 font-mono text-xs text-[#A7A59D]">
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/samadhanmane"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#E89A3C] transition-colors"
            >
              GITHUB ↗
            </a>
            <a
              href="https://linkedin.com/in/samadhan-mane"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#E89A3C] transition-colors"
            >
              LINKEDIN ↗
            </a>
            <a
              href="mailto:samadhanmane2324@gmail.com"
              className="hover:text-[#E89A3C] transition-colors"
            >
              EMAIL ↗
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 border border-[#F3F1EA]/10 rounded hover:border-[#E89A3C] hover:text-[#E89A3C] transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
          <div className="text-[11px] text-[#6E6C65]">
            Built with Python, curiosity & too many terminal tabs.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
