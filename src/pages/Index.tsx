import React from 'react';
import { ArrowDown, Download, ArrowUpRight, Cpu, Layers, Terminal, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import SystemFlowVisualizer from '../components/SystemFlowVisualizer';
import ProjectsSection from '../components/ProjectsSection';
import OpenSourceSection from '../components/OpenSourceSection';
import ProofSection from '../components/ProofSection';
import EngineeringPrinciples from '../components/EngineeringPrinciples';
import SkillsSection from '../components/SkillsSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export const Index: React.FC = () => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0C0C0B] text-[#F3F1EA] min-h-screen selection:bg-[#E89A3C]/20 selection:text-[#F3F1EA] relative">
      {/* Navigation */}
      <Navigation />

      {/* =========================================================
          HERO SECTION — EDITORIAL AI SYSTEMS
      ========================================================= */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-20 sm:pt-24 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Subtle Generative System Flow Visualizer in background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <SystemFlowVisualizer />
        </div>

        {/* Top Editorial Metadata */}
        <div className="relative z-10 font-mono text-xs text-[#A7A59D] uppercase tracking-widest flex flex-wrap items-center justify-between gap-4 border-b border-[#F3F1EA]/10 pb-4">
          <div className="flex items-center space-x-2">
            <span className="text-[#E89A3C]">SAMADHAN MANE</span>
            <span>//</span>
            <span>PUNE, INDIA</span>
          </div>
          <div className="hidden sm:flex items-center space-x-3 text-[#A7A59D]">
            <span>AI / ML SYSTEMS</span>
            <span>•</span>
            <span>LLM ARCHITECTURE</span>
            <span>•</span>
            <span className="text-emerald-400">2023 — 2027</span>
          </div>
        </div>

        {/* Central Hero Typography & Statement */}
        <div className="relative z-10 my-auto py-4 sm:py-6 space-y-4 sm:space-y-5 max-w-5xl">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-[#E89A3C] tracking-wider uppercase bg-[#E89A3C]/10 border border-[#E89A3C]/20 px-3 py-1 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E89A3C] animate-pulse" />
            <span>AI ENGINEER · CONVERSATIONAL AI · RAG SYSTEMS · PYTHON</span>
          </div>

          <h1 className="font-sans text-fluid-hero font-extrabold tracking-tight text-[#F3F1EA] max-w-4xl">
            I build AI systems that move beyond the chatbot.
          </h1>

          <p className="font-sans text-lg sm:text-xl text-[#A7A59D] max-w-2xl font-normal leading-relaxed">
            Architecting production-grade AI systems across agentic state machines, hybrid vector retrieval, deterministic audit guardrails, and practical LLM applications.
          </p>

          {/* Primary Actions */}
          <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4 font-mono text-xs">
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center space-x-2 bg-[#E89A3C] text-[#0C0C0B] px-6 py-3.5 rounded font-bold hover:bg-[#F3F1EA] transition-all duration-200"
            >
              <span>VIEW SELECTED WORK</span>
              <ArrowDown size={14} />
            </button>

            <a
              href="/Samadhan_resume.pdf"
              download="Samadhan_Mane_AIML_Resume.pdf"
              className="inline-flex items-center space-x-2 border border-[#F3F1EA]/20 bg-[#131311] text-[#F3F1EA] px-6 py-3.5 rounded hover:border-[#E89A3C] hover:text-[#E89A3C] transition-colors"
            >
              <Download size={14} className="text-[#E89A3C]" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </a>

            <a
              href="https://github.com/samadhanmane"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1.5 border border-[#F3F1EA]/15 bg-[#131311] text-[#A7A59D] hover:text-[#F3F1EA] hover:border-[#F3F1EA]/30 px-5 py-3.5 rounded transition-colors"
            >
              <span>GITHUB</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Bottom Hero Anchor: Live Credibility Callouts */}
        <div className="relative z-10 mt-4 sm:mt-6 bg-[#131311]/80 border border-[#F3F1EA]/10 rounded-lg p-3 sm:p-4 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 font-mono text-xs text-[#A7A59D]">
          <div>
            <div className="text-[10px] text-[#6E6C65] uppercase">HACKATHON WINNER</div>
            <div className="text-[#F3F1EA] font-semibold mt-0.5">1st Place Neobim (₹1.8L)</div>
          </div>
          <div>
            <div className="text-[10px] text-[#6E6C65] uppercase">OPEN SOURCE PR</div>
            <div className="text-[#E89A3C] font-semibold mt-0.5">PipeHub AI (PR #3290)</div>
          </div>
          <div>
            <div className="text-[10px] text-[#6E6C65] uppercase">AGENTIC RAG</div>
            <div className="text-[#F3F1EA] font-semibold mt-0.5">8-Step State Machine</div>
          </div>
          <div>
            <div className="text-[10px] text-[#6E6C65] uppercase">RETRIEVAL RECALL</div>
            <div className="text-[#F3F1EA] font-semibold mt-0.5">94% Hybrid Pinecone</div>
          </div>
        </div>
      </section>

      {/* Main Editorial Narrative Sections */}
      <main>
        {/* Section 1: Selected Work & Flagship Case Studies */}
        <ProjectsSection />

        {/* Section 2: Open Source Engineering & Upstream Work */}
        <OpenSourceSection />

        {/* Section 3: Technical Proof & Neobim Recognition */}
        <ProofSection />

        {/* Section 4: Engineering Philosophy Manifesto */}
        <EngineeringPrinciples />

        {/* Section 5: Technical Stack & Taxonomy */}
        <SkillsSection />

        {/* Section 6: About, Background & Education */}
        <AboutSection />

        {/* Section 7: Direct Contact & Inquiry */}
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
};

export default Index;
