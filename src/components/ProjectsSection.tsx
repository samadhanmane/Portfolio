import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Github, Cpu, ShieldCheck, Database, Layers, CheckCircle2, ChevronRight, Zap, RefreshCw, Terminal, ExternalLink, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projects, Project, ArchitectureStep } from '../data/projects';

export const ProjectsSection: React.FC = () => {
  const navigate = useNavigate();
  const [activeAbyssStep, setActiveAbyssStep] = useState<number>(2); // Default to RETRIEVE
  const [activeMomStep, setActiveMomStep] = useState<number>(1);
  const [activeBookStep, setActiveBookStep] = useState<number>(2);

  const abyssProject = projects.find(p => p.id === 'abyss')!;
  const momProject = projects.find(p => p.id === 'mom-ai')!;
  const bookProject = projects.find(p => p.id === 'bookmyhall')!;
  const finProject = projects.find(p => p.id === 'finexplain')!;

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-20">
        <div className="flex items-center space-x-3 font-mono text-xs text-[#A7A59D] uppercase tracking-widest mb-3">
          <span className="text-[#E89A3C]">01</span>
          <span>//</span>
          <span>SELECTED WORK & PRODUCTION SYSTEMS</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#F3F1EA]/10">
          <div>
            <h2 className="font-sans text-fluid-section font-bold tracking-tight text-[#F3F1EA]">
              Production AI Systems
            </h2>
            <p className="mt-3 text-lg text-[#A7A59D] max-w-2xl font-normal leading-relaxed">
              Engineered end-to-end around agentic state machines, hybrid retrieval, anti-hallucination guardrails, and observable software architecture.
            </p>
          </div>
          <span className="font-mono text-xs text-[#A7A59D]">
            4 VERIFIED SYSTEMS
          </span>
        </div>
      </div>

      <div className="space-y-32">
        {/* =========================================================
            PROJECT 01: ABYSS (FLAGSHIP FEATURED CASE STUDY)
        ========================================================= */}
        <article className="relative bg-[#131311] border border-[#F3F1EA]/10 rounded-lg p-6 sm:p-10 lg:p-12 transition-all hover:border-[#F3F1EA]/20">
          {/* Header Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#F3F1EA]/10">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-2xl font-bold text-[#E89A3C]">01</span>
              <span className="h-4 w-[1px] bg-[#F3F1EA]/20" />
              <div className="flex items-center space-x-2 bg-[#E89A3C]/10 border border-[#E89A3C]/30 px-2.5 py-1 rounded text-[11px] font-mono font-medium text-[#E89A3C]">
                <Award size={13} />
                <span>1ST PLACE · NEOBIM HACKATHON 2026 (₹1.8L)</span>
              </div>
            </div>
            <div className="font-mono text-xs text-[#A7A59D]">
              FASTAPI · PINECONE · GROQ · DOCKER · AWS
            </div>
          </div>

          {/* Title and Intro */}
          <div className="mt-8 grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F3F1EA] tracking-tight">
                Abyss AI
              </h3>
              <p className="font-mono text-sm text-[#E89A3C] uppercase tracking-wider">
                Multi-Tenant AI Due Diligence Platform
              </p>
              <p className="text-base sm:text-lg text-[#A7A59D] leading-relaxed pt-2">
                Architected an <strong className="text-[#F3F1EA] font-semibold">8-step agentic RAG state machine</strong> (Rewrite → Retrieve → Completeness → Think → Audit → Structure) that enforces source-grounded, citation-backed due diligence analysis, surpassing simple retrieval.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4 font-mono text-xs">
                <a
                  href="https://abyss-ai-gray.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 bg-[#E89A3C] text-[#0C0C0B] px-5 py-2.5 rounded font-semibold hover:bg-[#F3F1EA] transition-colors"
                >
                  <span>LIVE PLATFORM</span>
                  <ArrowUpRight size={15} />
                </a>
                <a
                  href="https://github.com/samadhanmane/Abyss-ai"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 border border-[#F3F1EA]/20 text-[#F3F1EA] px-5 py-2.5 rounded hover:border-[#E89A3C] hover:text-[#E89A3C] transition-colors bg-[#171715]"
                >
                  <Github size={15} />
                  <span>GITHUB REPO</span>
                </a>
                <button
                  onClick={() => navigate('/projects/abyss')}
                  className="inline-flex items-center space-x-2 text-[#A7A59D] hover:text-[#F3F1EA] px-3 py-2.5 transition-colors"
                >
                  <span>VIEW CASE STUDY</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Editorial Data Callouts */}
            <div className="lg:col-span-5 bg-[#0C0C0B] border border-[#F3F1EA]/10 rounded-lg p-6 space-y-5">
              <div className="font-mono text-xs text-[#A7A59D] uppercase tracking-wider flex items-center justify-between pb-3 border-b border-[#F3F1EA]/10">
                <span>SYSTEM PERFORMANCE METRICS</span>
                <span className="text-[#E89A3C]">PROD AUDIT</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-l-2 border-[#E89A3C] pl-3 py-1">
                  <div className="font-sans text-3xl font-bold text-[#F3F1EA]">+23%</div>
                  <div className="text-xs text-[#A7A59D] mt-0.5">Relevance Boost</div>
                  <div className="text-[10px] text-[#6E6C65] font-mono mt-1">Prompt feedback loops</div>
                </div>
                <div className="border-l-2 border-[#F3F1EA]/40 pl-3 py-1">
                  <div className="font-sans text-3xl font-bold text-[#F3F1EA]">94%</div>
                  <div className="text-xs text-[#A7A59D] mt-0.5">Retrieval Recall</div>
                  <div className="text-[10px] text-[#6E6C65] font-mono mt-1">Hybrid Pinecone vectors</div>
                </div>
                <div className="border-l-2 border-[#F3F1EA]/40 pl-3 py-1">
                  <div className="font-sans text-3xl font-bold text-[#F3F1EA]">15+</div>
                  <div className="text-xs text-[#A7A59D] mt-0.5">File Formats</div>
                  <div className="text-[10px] text-[#6E6C65] font-mono mt-1">PyMuPDF + OCR pipeline</div>
                </div>
                <div className="border-l-2 border-[#F3F1EA]/40 pl-3 py-1">
                  <div className="font-sans text-3xl font-bold text-[#F3F1EA]">-63%</div>
                  <div className="text-xs text-[#A7A59D] mt-0.5">Bundle Size</div>
                  <div className="text-[10px] text-[#6E6C65] font-mono mt-1">Route code splitting</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive 8-Step State Machine Visualization */}
          <div className="mt-12 pt-8 border-t border-[#F3F1EA]/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <span className="font-mono text-xs text-[#E89A3C] uppercase tracking-wider block">
                  AGENTIC STATE MACHINE ARCHITECTURE
                </span>
                <span className="text-sm text-[#A7A59D]">
                  Interactive execution flow: select any state to inspect pipeline guardrails.
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#A7A59D]">
                STAGE {abyssProject.architectureSteps[activeAbyssStep].step} OF 08
              </span>
            </div>

            {/* Stepper Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
              {abyssProject.architectureSteps.map((step, idx) => {
                const isActive = activeAbyssStep === idx;
                return (
                  <button
                    key={step.step}
                    onClick={() => setActiveAbyssStep(idx)}
                    className={`text-left p-3 rounded border transition-all duration-200 focus:outline-none ${
                      isActive
                        ? 'bg-[#191917] border-[#E89A3C] shadow-sm'
                        : 'bg-[#0C0C0B]/60 border-[#F3F1EA]/10 hover:border-[#F3F1EA]/30'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[11px] mb-1.5">
                      <span className={isActive ? 'text-[#E89A3C] font-bold' : 'text-[#6E6C65]'}>
                        {step.step}
                      </span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#E89A3C]" />}
                    </div>
                    <div className={`font-mono text-xs font-semibold tracking-tight truncate ${
                      isActive ? 'text-[#F3F1EA]' : 'text-[#A7A59D]'
                    }`}>
                      {step.name}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Step Deep-Dive Inspector */}
            <div className="mt-4 p-5 bg-[#0C0C0B] border border-[#F3F1EA]/15 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-xs text-[#E89A3C] uppercase font-semibold">
                    STAGE {abyssProject.architectureSteps[activeAbyssStep].step}: {abyssProject.architectureSteps[activeAbyssStep].name}
                  </span>
                  <span className="font-mono text-[10px] bg-[#191917] text-[#A7A59D] px-2 py-0.5 rounded border border-[#F3F1EA]/10">
                    {abyssProject.architectureSteps[activeAbyssStep].badge}
                  </span>
                </div>
                <p className="text-sm text-[#F3F1EA] font-normal">
                  {abyssProject.architectureSteps[activeAbyssStep].desc}
                </p>
              </div>
              <div className="font-mono text-[11px] text-[#A7A59D] shrink-0">
                AUDIT ENGINE: <span className="text-emerald-400">DETERMINISTIC GUARD</span>
              </div>
            </div>
          </div>
        </article>

        {/* =========================================================
            PROJECT 02: MOM-ai (NEURAL MEETING INTELLIGENCE)
        ========================================================= */}
        <article className="relative bg-[#131311] border border-[#F3F1EA]/10 rounded-lg p-6 sm:p-10 lg:p-12 transition-all hover:border-[#F3F1EA]/20">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#F3F1EA]/10">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-2xl font-bold text-[#A7A59D]">02</span>
              <span className="h-4 w-[1px] bg-[#F3F1EA]/20" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#A7A59D]">
                NEURAL MEETING INTELLIGENCE
              </span>
            </div>
            <div className="font-mono text-xs text-[#A7A59D]">
              PYTHON · STREAMLIT · WHISPER · FLAN-T5 · PYTORCH · PLOTLY
            </div>
          </div>

          <div className="mt-8 grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F3F1EA] tracking-tight">
                MOM-ai
              </h3>
              <p className="font-mono text-sm text-[#E89A3C] uppercase tracking-wider">
                Enterprise AI Meeting Assistant
              </p>
              <p className="text-base sm:text-lg text-[#A7A59D] leading-relaxed pt-2">
                End-to-end neural meeting intelligence platform combining acoustic feature representation learning, OpenAI Whisper speech recognition (0.000 WER on AMI corpus), and instruction-tuned Google FLAN-T5 reasoning for automated transcripts, decisions, and action items.
              </p>

              {/* Neural Acoustic Pipeline Highlight */}
              <div className="p-4 bg-[#0C0C0B] border border-[#F3F1EA]/10 rounded-lg space-y-2">
                <span className="font-mono text-xs text-[#E89A3C] uppercase tracking-wider block">
                  LATENT ACOUSTIC COMPRESSION & FLAN-T5 REASONING
                </span>
                <p className="text-xs text-[#A7A59D] leading-relaxed">
                  Standardizes 16kHz <strong className="text-[#F3F1EA]">Log-Mel spectrograms</strong> (64×128) evaluated via custom <strong className="text-[#F3F1EA]">Autoencoder / VAE bottlenecks</strong> (25.3 dB PSNR, 0.974 SSIM). Coupled with <strong className="text-[#F3F1EA]">OpenAI Whisper</strong> for high-fidelity ASR and <strong className="text-[#F3F1EA]">FLAN-T5</strong> achieving <strong className="text-[#F3F1EA]">0.864 BERTScore</strong> and 48.6% ROUGE-L.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 pt-4 font-mono text-xs">
                <a
                  href="https://meeting-assistant-mom.streamlit.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 bg-[#E89A3C] text-[#0C0C0B] px-5 py-2.5 rounded font-semibold hover:bg-[#F3F1EA] transition-colors"
                >
                  <span>LIVE PLATFORM</span>
                  <ArrowUpRight size={15} />
                </a>
                <a
                  href="https://github.com/samadhanmane/MOM-ai"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 border border-[#F3F1EA]/20 text-[#F3F1EA] px-5 py-2.5 rounded hover:border-[#E89A3C] hover:text-[#E89A3C] transition-colors bg-[#171715]"
                >
                  <Github size={15} />
                  <span>GITHUB REPO</span>
                </a>
                <button
                  onClick={() => navigate('/projects/mom-ai')}
                  className="inline-flex items-center space-x-2 text-[#A7A59D] hover:text-[#F3F1EA] px-3 py-2.5 transition-colors"
                >
                  <span>VIEW CASE STUDY</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Metrics */}
            <div className="lg:col-span-5 bg-[#0C0C0B] border border-[#F3F1EA]/10 rounded-lg p-6 space-y-5">
              <div className="font-mono text-xs text-[#A7A59D] uppercase tracking-wider flex items-center justify-between pb-3 border-b border-[#F3F1EA]/10">
                <span>ACOUSTIC & NLP BENCHMARKS</span>
                <span className="text-emerald-400">VERIFIED</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-baseline justify-between border-b border-[#F3F1EA]/5 pb-3">
                  <div>
                    <div className="text-sm font-semibold text-[#F3F1EA]">Whisper Benchmark WER</div>
                    <div className="text-xs text-[#6E6C65]">Edinburgh AMI Meeting Corpus</div>
                  </div>
                  <div className="font-mono text-2xl font-bold text-[#E89A3C]">0.000</div>
                </div>
                <div className="flex items-baseline justify-between border-b border-[#F3F1EA]/5 pb-3">
                  <div>
                    <div className="text-sm font-semibold text-[#F3F1EA]">NLP FLAN-T5 BERTScore</div>
                    <div className="text-xs text-[#6E6C65]">Executive summary & decision reasoning</div>
                  </div>
                  <div className="font-mono text-2xl font-bold text-[#F3F1EA]">0.864</div>
                </div>
                <div className="flex items-baseline justify-between">
                  <div>
                    <div className="text-sm font-semibold text-[#F3F1EA]">Latent Autoencoder PSNR</div>
                    <div className="text-xs text-[#6E6C65]">Spectrogram reconstruction fidelity</div>
                  </div>
                  <div className="font-mono text-sm font-bold text-[#E89A3C]">25.3 dB</div>
                </div>
              </div>
            </div>
          </div>

          {/* Flow Pipeline */}
          <div className="mt-10 pt-6 border-t border-[#F3F1EA]/10">
            <span className="font-mono text-xs text-[#A7A59D] uppercase tracking-wider block mb-4">
              DATA FLOW PIPELINE
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 font-mono text-xs">
              {momProject.architectureSteps.map((step, idx) => (
                <div key={step.step} className="p-3 bg-[#0C0C0B] border border-[#F3F1EA]/10 rounded">
                  <div className="text-[10px] text-[#E89A3C] mb-1">{step.step} // {step.badge}</div>
                  <div className="font-semibold text-[#F3F1EA]">{step.name}</div>
                  <div className="text-[11px] text-[#A7A59D] mt-1 font-sans">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* =========================================================
            PROJECT 03: BOOKMYHALL (ENTERPRISE MULTI-TENANT PLATFORM)
        ========================================================= */}
        <article className="relative bg-[#131311] border border-[#F3F1EA]/10 rounded-lg p-6 sm:p-10 lg:p-12 transition-all hover:border-[#F3F1EA]/20">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#F3F1EA]/10">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-2xl font-bold text-[#A7A59D]">03</span>
              <span className="h-4 w-[1px] bg-[#F3F1EA]/20" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#A7A59D]">
                ENTERPRISE SYSTEMS ENGINEERING
              </span>
            </div>
            <div className="font-mono text-xs text-[#A7A59D]">
              REACT · NODE.JS · MONGODB ATLAS · GEMINI API
            </div>
          </div>

          <div className="mt-8 grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F3F1EA] tracking-tight">
                BookMyHall
              </h3>
              <p className="font-mono text-sm text-[#E89A3C] uppercase tracking-wider">
                Multi-Tenant College Management Platform
              </p>
              <p className="text-base sm:text-lg text-[#A7A59D] leading-relaxed pt-2">
                Engineered an enterprise multi-tenant facility booking system powered by an autonomous <strong className="text-[#F3F1EA]">transactional Gemini AI agent</strong> capable of executing natural-language slot holds with <strong className="text-[#F3F1EA]">5-minute temporary concurrency locking</strong> to eliminate race conditions.
              </p>

              {/* RBAC Architecture note */}
              <div className="p-4 bg-[#0C0C0B] border border-[#F3F1EA]/10 rounded-lg space-y-2">
                <span className="font-mono text-xs text-[#E89A3C] uppercase tracking-wider block">
                  MULTI-STAGE RBAC APPROVAL WORKFLOW
                </span>
                <p className="text-xs text-[#A7A59D] leading-relaxed">
                  Designed a 10-tier role-based access control architecture with organization-isolated data. Powers hierarchical sign-offs for canteen requisitions (Faculty → HOD → Registrar → Director) and maintenance ticketing with automated email queues.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 pt-4 font-mono text-xs">
                <a
                  href="https://book-my-hall.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 bg-[#E89A3C] text-[#0C0C0B] px-5 py-2.5 rounded font-semibold hover:bg-[#F3F1EA] transition-colors"
                >
                  <span>LIVE PLATFORM</span>
                  <ArrowUpRight size={15} />
                </a>
                <a
                  href="https://github.com/SamadhanMane/BookMyHall"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 border border-[#F3F1EA]/20 text-[#F3F1EA] px-5 py-2.5 rounded hover:border-[#E89A3C] hover:text-[#E89A3C] transition-colors bg-[#171715]"
                >
                  <Github size={15} />
                  <span>GITHUB REPO</span>
                </a>
                <button
                  onClick={() => navigate('/projects/bookmyhall')}
                  className="inline-flex items-center space-x-2 text-[#A7A59D] hover:text-[#F3F1EA] px-3 py-2.5 transition-colors"
                >
                  <span>VIEW CASE STUDY</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Screenshots preview */}
            <div className="lg:col-span-5 space-y-3">
              <div className="aspect-video bg-[#0C0C0B] border border-[#F3F1EA]/15 rounded-lg overflow-hidden relative group">
                <img
                  src={bookProject.image}
                  alt="BookMyHall Platform Screenshot"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute bottom-3 left-3 bg-[#0C0C0B]/90 backdrop-blur-sm border border-[#F3F1EA]/10 px-2.5 py-1 rounded font-mono text-[10px] text-[#A7A59D]">
                  BOOKMYHALL ADMIN & BOOKING INTERFACE
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {bookProject.images?.slice(1, 5).map((img, i) => (
                  <div key={i} className="aspect-video bg-[#0C0C0B] border border-[#F3F1EA]/10 rounded overflow-hidden">
                    <img src={img} alt={`View ${i + 2}`} className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* =========================================================
            PROJECT 04: FINEXPLAIN (FINANCIAL AI)
        ========================================================= */}
        <article className="relative bg-[#131311] border border-[#F3F1EA]/10 rounded-lg p-6 sm:p-10 lg:p-12 transition-all hover:border-[#F3F1EA]/20">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#F3F1EA]/10">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-2xl font-bold text-[#A7A59D]">04</span>
              <span className="h-4 w-[1px] bg-[#F3F1EA]/20" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#A7A59D]">
                FINANCIAL AI / EXPLAINABILITY
              </span>
            </div>
            <div className="font-mono text-xs text-[#A7A59D]">
              PYTHON · FASTAPI · PANDAS · LANGCHAIN · POSTGRESQL
            </div>
          </div>

          <div className="mt-8 grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F3F1EA] tracking-tight">
                FinExplain
              </h3>
              <p className="font-mono text-sm text-[#E89A3C] uppercase tracking-wider">
                Financial Statement Reasoning & Metric Analysis Platform
              </p>
              <p className="text-base sm:text-lg text-[#A7A59D] leading-relaxed pt-2">
                Engineered a <strong className="text-[#F3F1EA] font-semibold">deterministic financial computation layer</strong> completely decoupled from LLM reasoning — automated Python/Pandas pipelines calculate 18+ ratios with <strong className="text-[#F3F1EA] font-semibold">0 arithmetic hallucinations</strong>, then feed verified metrics to contextual LLM chains for narrative explanation.
              </p>

              {/* Key Differentiator */}
              <div className="p-4 bg-[#0C0C0B] border border-[#E89A3C]/20 rounded-lg space-y-2">
                <span className="font-mono text-xs text-[#E89A3C] uppercase tracking-wider block">
                  CORE ARCHITECTURAL PRINCIPLE
                </span>
                <p className="text-xs text-[#A7A59D] leading-relaxed">
                  LLMs <strong className="text-[#F3F1EA]">never touch arithmetic</strong> — all ratios (Debt-to-Equity, ROIC, margins) compute deterministically in Python/Pandas. LLMs explain <em>why</em> a metric changed, never <em>what</em> it equals. This eliminates the #1 failure mode in AI-driven financial analysis.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 pt-4 font-mono text-xs">
                <a
                  href="https://github.com/samadhanmane/FinExplain"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 bg-[#E89A3C] text-[#0C0C0B] px-5 py-2.5 rounded font-semibold hover:bg-[#F3F1EA] transition-colors"
                >
                  <Github size={15} />
                  <span>VIEW REPOSITORY</span>
                </a>
                <button
                  onClick={() => navigate('/projects/finexplain')}
                  className="inline-flex items-center space-x-2 border border-[#F3F1EA]/20 text-[#F3F1EA] px-5 py-2.5 rounded hover:border-[#E89A3C] hover:text-[#E89A3C] transition-colors bg-[#171715]"
                >
                  <span>FULL CASE STUDY</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Metrics Dashboard */}
            <div className="lg:col-span-5 bg-[#0C0C0B] border border-[#F3F1EA]/10 rounded-lg p-6 space-y-5">
              <div className="font-mono text-xs text-[#A7A59D] uppercase tracking-wider flex items-center justify-between pb-3 border-b border-[#F3F1EA]/10">
                <span>COMPUTATION INTEGRITY</span>
                <span className="text-emerald-400">DETERMINISTIC</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-l-2 border-[#E89A3C] pl-3 py-1">
                  <div className="font-sans text-3xl font-bold text-[#F3F1EA]">0</div>
                  <div className="text-xs text-[#A7A59D] mt-0.5">Arithmetic Errors</div>
                  <div className="text-[10px] text-[#6E6C65] font-mono mt-1">Python math layer</div>
                </div>
                <div className="border-l-2 border-[#F3F1EA]/40 pl-3 py-1">
                  <div className="font-sans text-3xl font-bold text-[#F3F1EA]">3-Way</div>
                  <div className="text-xs text-[#A7A59D] mt-0.5">Reconciliation</div>
                  <div className="text-[10px] text-[#6E6C65] font-mono mt-1">BS ↔ CF ↔ IS cross-check</div>
                </div>
                <div className="border-l-2 border-[#F3F1EA]/40 pl-3 py-1">
                  <div className="font-sans text-3xl font-bold text-[#F3F1EA]">18+</div>
                  <div className="text-xs text-[#A7A59D] mt-0.5">Automated Ratios</div>
                  <div className="text-[10px] text-[#6E6C65] font-mono mt-1">Liquidity, leverage, margins</div>
                </div>
                <div className="border-l-2 border-[#F3F1EA]/40 pl-3 py-1">
                  <div className="font-sans text-3xl font-bold text-[#F3F1EA]">100%</div>
                  <div className="text-xs text-[#A7A59D] mt-0.5">Formula Traceability</div>
                  <div className="text-[10px] text-[#6E6C65] font-mono mt-1">Raw filing line mapping</div>
                </div>
              </div>
            </div>
          </div>

          {/* Compact Pipeline Strip */}
          <div className="mt-10 pt-6 border-t border-[#F3F1EA]/10">
            <span className="font-mono text-xs text-[#A7A59D] uppercase tracking-wider block mb-4">
              DETERMINISTIC EXECUTION PIPELINE
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 font-mono text-xs">
              {finProject.architectureSteps.map((step, idx) => (
                <div key={step.step} className="p-3 bg-[#0C0C0B] border border-[#F3F1EA]/10 rounded">
                  <div className="text-[10px] text-[#E89A3C] mb-1">{step.step} // {step.badge}</div>
                  <div className="font-semibold text-[#F3F1EA]">{step.name}</div>
                  <div className="text-[11px] text-[#A7A59D] mt-1 font-sans">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* =========================================================
            ADDITIONAL SYSTEMS & APPLIED AI RESEARCH
        ========================================================= */}
        <div className="pt-12 border-t border-[#F3F1EA]/10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="font-mono text-xs text-[#E89A3C] uppercase tracking-wider block">
                ADDITIONAL SYSTEMS & APPLIED AI RESEARCH
              </span>
              <h4 className="font-sans text-xl sm:text-2xl font-bold text-[#F3F1EA] mt-1">
                Domain-Specific LLM Architectures
              </h4>
            </div>
            <span className="font-mono text-xs text-[#A7A59D] hidden sm:inline-block">
              1 CURATED REPOSITORY
            </span>
          </div>

          <div className="max-w-2xl">
            {/* ResearchMind */}
            <div className="p-6 bg-[#131311] border border-[#F3F1EA]/10 rounded-lg hover:border-[#F3F1EA]/25 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-[11px]">
                  <span className="text-[#E89A3C]">RESEARCH AUTOMATION / RAG</span>
                  <span className="text-[#6E6C65]">LANGCHAIN · CHROMADB · NLP</span>
                </div>
                <h5 className="font-sans text-xl font-bold text-[#F3F1EA]">
                  ResearchMind
                </h5>
                <p className="text-xs text-[#A7A59D] leading-relaxed">
                  Multi-document research synthesis engine enabling researchers to cross-reference multiple academic papers, extract comparative methodologies, and generate citation-grounded literature reviews.
                </p>
                <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px]">
                  <span className="px-2 py-0.5 bg-[#0C0C0B] border border-[#F3F1EA]/10 rounded text-[#F3F1EA]">
                    Multi-Doc Comparative
                  </span>
                  <span className="px-2 py-0.5 bg-[#0C0C0B] border border-[#F3F1EA]/10 rounded text-[#F3F1EA]">
                    Zero Hallucinated Citations
                  </span>
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between font-mono text-xs">
                <a
                  href="https://github.com/samadhanmane/ResearchMind"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 text-[#E89A3C] hover:text-[#F3F1EA] transition-colors"
                >
                  <Github size={13} />
                  <span>GITHUB REPO</span>
                  <ArrowUpRight size={13} />
                </a>
                <button
                  onClick={() => navigate('/projects/researchmind')}
                  className="inline-flex items-center space-x-1 text-[#A7A59D] hover:text-[#F3F1EA] transition-colors"
                >
                  <span>CASE STUDY</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
