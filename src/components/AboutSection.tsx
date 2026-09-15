import React from 'react';
import { Download, ExternalLink, GraduationCap, MapPin, Mail, ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#F3F1EA]/10">
      <div className="flex items-center space-x-3 font-mono text-xs text-[#A7A59D] uppercase tracking-widest mb-4">
        <span className="text-[#E89A3C]">05</span>
        <span>//</span>
        <span>BACKGROUND & PERSPECTIVE</span>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Left column: Profile photo and quick credentials */}
        <div className="lg:col-span-4 space-y-6">
          <div className="relative bg-[#131311] border border-[#F3F1EA]/10 rounded-lg p-3 max-w-sm">
            <div className="aspect-[4/5] rounded overflow-hidden bg-[#0C0C0B]">
              <img
                src="/Samadhan_Prof.jpg"
                alt="Samadhan Mane — AI Engineer"
                className="w-full h-full object-cover grayscale contrast-105 hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="p-3 pt-4 space-y-1 font-mono text-xs">
              <div className="text-[#F3F1EA] font-semibold">SAMADHAN DAYANAND MANE</div>
              <div className="text-[#E89A3C] text-[11px]">AI / ML SYSTEMS ENGINEER</div>
              <div className="flex items-center space-x-1.5 text-[#A7A59D] text-[11px] pt-1">
                <MapPin size={12} className="text-[#6E6C65]" />
                <span>PUNE, MAHARASHTRA, INDIA</span>
              </div>
            </div>
          </div>

          {/* Education card */}
          <div className="p-5 bg-[#131311] border border-[#F3F1EA]/10 rounded-lg space-y-2 max-w-sm">
            <div className="flex items-center space-x-2 font-mono text-xs text-[#E89A3C] uppercase">
              <GraduationCap size={15} />
              <span>EDUCATION</span>
            </div>
            <div className="font-sans text-base font-bold text-[#F3F1EA]">
              MIT Academy of Engineering, Pune
            </div>
            <div className="text-xs text-[#A7A59D]">
              B.Tech in Computer Engineering (2023 – 2027)
            </div>
            <div className="font-mono text-xs text-[#F3F1EA] pt-1">
              CGPA: <span className="text-[#E89A3C] font-bold">7.49</span> / 10.0
            </div>
          </div>
        </div>

        {/* Right column: Editorial narrative */}
        <div className="lg:col-span-8 space-y-8">
          <div>
            <h2 className="font-sans text-fluid-section font-bold tracking-tight text-[#F3F1EA] leading-tight">
              “I’m interested in the space between models and products.”
            </h2>
          </div>

          <div className="space-y-5 text-base sm:text-lg text-[#A7A59D] leading-relaxed font-normal">
            <p>
              I am a final-year Computer Engineering student at MIT Academy of Engineering, Pune, specializing in AI/ML engineering and production-grade intelligent systems.
            </p>
            <p>
              While standard machine learning workflows stop at training notebooks or isolated prompt completions, my work concentrates on the engineering required to make large language models reliable: <strong className="text-[#F3F1EA] font-medium">agentic finite state machines, deterministic context completeness checks, hybrid retrieval pipelines, and anti-hallucination citation audits.</strong>
            </p>
            <p>
              Whether designing an 8-step agentic RAG workflow that won 1st Place at the Neobim Hackathon or engineering concurrency locks for a multi-tenant enterprise system, I prioritize architecture that solves tangible problems with measurable results.
            </p>
          </div>

          {/* Quick Resume fast-track banner */}
          <div className="p-6 sm:p-8 bg-[#131311] border border-[#E89A3C]/30 rounded-lg space-y-4">
            <div className="space-y-1">
              <span className="font-mono text-xs text-[#E89A3C] uppercase tracking-wider block">
                RECRUITER / FOUNDER FAST-TRACK
              </span>
              <h3 className="font-sans text-xl font-bold text-[#F3F1EA]">
                Want the full technical story?
              </h3>
              <p className="text-sm text-[#A7A59D]">
                Download my resume for an end-to-end breakdown of systems, architecture decisions, and verified project outcomes.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-1 font-mono text-xs">
              <a
                href="/Samadhan_resume.pdf"
                download="Samadhan_Mane_AIML_Resume.pdf"
                className="inline-flex items-center space-x-2 bg-[#E89A3C] text-[#0C0C0B] px-5 py-2.5 rounded font-semibold hover:bg-[#F3F1EA] transition-colors"
              >
                <Download size={15} />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>
              <a
                href="/Samadhan_resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 border border-[#F3F1EA]/20 text-[#F3F1EA] px-5 py-2.5 rounded hover:border-[#E89A3C] transition-colors"
              >
                <span>VIEW IN BROWSER</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
