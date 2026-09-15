import React from 'react';
import { Trophy, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';

export const ProofSection: React.FC = () => {
  return (
    <section id="recognition" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#F3F1EA]/10">
      <div className="flex items-center space-x-3 font-mono text-xs text-[#A7A59D] uppercase tracking-widest mb-10">
        <span className="text-[#E89A3C]">02</span>
        <span>//</span>
        <span>TECHNICAL PROOF & BENCHMARK VALIDATION</span>
      </div>

      {/* Editorial High-Contrast Typography Layout */}
      <div className="bg-[#131311] border border-[#F3F1EA]/15 rounded-lg p-8 sm:p-12 lg:p-16 relative overflow-hidden">
        {/* Subtle geometric watermark */}
        <div className="absolute right-4 top-4 font-mono text-[100px] sm:text-[140px] font-bold text-[#F3F1EA]/[0.02] pointer-events-none select-none leading-none">
          01
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center space-x-2.5 font-mono text-xs text-[#E89A3C] bg-[#E89A3C]/10 border border-[#E89A3C]/30 px-3 py-1.5 rounded">
              <span className="w-2 h-2 rounded-full bg-[#E89A3C] animate-pulse" />
              <span className="font-semibold tracking-wider uppercase">NATIONAL COMPETITION WINNER</span>
            </div>

            <div className="space-y-3">
              <div className="font-mono text-xs tracking-widest text-[#A7A59D] uppercase">
                NEOBIM HACKATHON · 2026
              </div>
              <h3 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F3F1EA] tracking-tight leading-[1.08]">
                1st Place Winner
              </h3>
              <p className="font-sans text-xl sm:text-2xl text-[#E89A3C] font-medium">
                ₹1,80,000 Prize Pool Award
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#A7A59D] leading-relaxed max-w-2xl">
              Recognized for <strong className="text-[#F3F1EA] font-medium">Abyss AI</strong>, awarded 1st place across national teams for its novel 8-step agentic state machine, deterministic verification layer, and immediate production readiness.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 font-mono text-xs">
              <a
                href="https://github.com/samadhanmane/Abyss-ai"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 text-[#F3F1EA] hover:text-[#E89A3C] border-b border-[#F3F1EA]/30 pb-0.5 transition-colors"
              >
                <span>INSPECT WINNING REPOSITORY</span>
                <ArrowUpRight size={14} />
              </a>
              <span className="text-[#6E6C65]">•</span>
              <a
                href="https://abyss-ai-gray.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 text-[#A7A59D] hover:text-[#F3F1EA] transition-colors"
              >
                <span>VIEW LIVE DEPLOYMENT</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Metric / Credibility Column */}
          <div className="lg:col-span-4 bg-[#0C0C0B] border border-[#F3F1EA]/10 rounded p-6 space-y-6">
            <div className="space-y-1 pb-4 border-b border-[#F3F1EA]/10">
              <div className="font-mono text-xs text-[#A7A59D] uppercase">PROJECT</div>
              <div className="font-sans text-lg font-bold text-[#F3F1EA]">Abyss AI Due Diligence</div>
            </div>

            <div className="space-y-1 pb-4 border-b border-[#F3F1EA]/10">
              <div className="font-mono text-xs text-[#A7A59D] uppercase">KEY CRITERIA</div>
              <div className="text-xs text-[#A7A59D] space-y-1.5 mt-2">
                <div className="flex items-center space-x-2 text-[#F3F1EA]">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  <span>Deterministic Audit Layer</span>
                </div>
                <div className="flex items-center space-x-2 text-[#F3F1EA]">
                  <Zap size={14} className="text-[#E89A3C]" />
                  <span>Agentic Finite State Machine</span>
                </div>
                <div className="flex items-center space-x-2 text-[#F3F1EA]">
                  <Trophy size={14} className="text-[#E89A3C]" />
                  <span>Production-Grade Architecture</span>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-mono text-xs text-[#A7A59D] uppercase">TEAM STRUCTURE</div>
              <div className="font-mono text-xs text-[#F3F1EA]">Team of 4 · Architecture & Backend Lead</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
