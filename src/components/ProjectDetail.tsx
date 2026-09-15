import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, ChevronLeft, ChevronRight, X, Award, ShieldCheck, Zap, Layers, Database, Cpu } from 'lucide-react';
import { projects } from '../data/projects';
import Navigation from './Navigation';
import Footer from './Footer';

export const ProjectDetail: React.FC = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0C0C0B] text-[#F3F1EA] flex flex-col justify-between">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 py-32 text-center">
          <h1 className="font-sans text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-[#A7A59D] mb-8">The requested case study could not be located.</p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center space-x-2 bg-[#E89A3C] text-[#0C0C0B] px-6 py-2.5 rounded font-mono text-xs font-semibold"
          >
            <ArrowLeft size={14} />
            <span>RETURN TO INDEX</span>
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const nextImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  return (
    <div className="min-h-screen bg-[#0C0C0B] text-[#F3F1EA] selection:bg-[#E89A3C]/20 selection:text-[#F3F1EA]">
      <Navigation />

      <main className="pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Back navigation */}
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center space-x-2 font-mono text-xs text-[#A7A59D] hover:text-[#E89A3C] transition-colors mb-10 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>RETURN TO SELECTED WORK</span>
        </button>

        {/* Case Study Header */}
        <header className="border-b border-[#F3F1EA]/10 pb-12 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs text-[#E89A3C] uppercase tracking-wider bg-[#E89A3C]/10 border border-[#E89A3C]/20 px-2.5 py-1 rounded">
              {project.category}
            </span>
            {project.award && (
              <span className="font-mono text-xs text-[#E89A3C] uppercase tracking-wider bg-[#E89A3C]/10 border border-[#E89A3C]/30 px-2.5 py-1 rounded flex items-center space-x-1.5">
                <Award size={13} />
                <span>{project.award}</span>
              </span>
            )}
            <span className="font-mono text-xs text-[#6E6C65]">
              {project.timeline} {project.team ? `• ${project.team}` : ''}
            </span>
          </div>

          <h1 className="font-sans text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F3F1EA]">
            {project.title}
          </h1>
          <p className="font-mono text-base sm:text-lg text-[#E89A3C]">
            {project.subtitle}
          </p>
          <p className="text-lg sm:text-xl text-[#A7A59D] max-w-4xl font-normal leading-relaxed">
            {project.longDescription}
          </p>

          {/* Direct CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4 font-mono text-xs">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 bg-[#E89A3C] text-[#0C0C0B] px-6 py-3 rounded font-semibold hover:bg-[#F3F1EA] transition-colors"
              >
                <span>OPEN LIVE APPLICATION</span>
                <ExternalLink size={14} />
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 border border-[#F3F1EA]/20 bg-[#131311] text-[#F3F1EA] px-6 py-3 rounded hover:border-[#E89A3C] hover:text-[#E89A3C] transition-colors"
            >
              <Github size={15} />
              <span>SOURCE CODE REPOSITORY</span>
            </a>
          </div>
        </header>

        {/* Metrics Overview */}
        <section className="py-12 border-b border-[#F3F1EA]/10">
          <div className="font-mono text-xs text-[#A7A59D] uppercase tracking-widest mb-6">
            // VERIFIED PRODUCTION METRICS
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.metrics.map((metric, i) => (
              <div key={i} className="p-5 bg-[#131311] border border-[#F3F1EA]/10 rounded-lg">
                <div className="font-sans text-3xl sm:text-4xl font-extrabold text-[#F3F1EA]">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold text-[#E89A3C] mt-1">
                  {metric.label}
                </div>
                <div className="text-[11px] text-[#A7A59D] mt-1.5 leading-tight">
                  {metric.note}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture Pipeline Stepper */}
        <section className="py-14 border-b border-[#F3F1EA]/10">
          <div className="font-mono text-xs text-[#E89A3C] uppercase tracking-widest mb-2">
            // PIPELINE ARCHITECTURE
          </div>
          <h2 className="font-sans text-2xl font-bold text-[#F3F1EA] mb-6">
            Execution Flow & System Guardrails
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-6">
            {project.architectureSteps.map((step, idx) => (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`p-3 rounded text-left border transition-all ${
                  activeStep === idx
                    ? 'bg-[#191917] border-[#E89A3C]'
                    : 'bg-[#131311] border-[#F3F1EA]/10 hover:border-[#F3F1EA]/25'
                }`}
              >
                <div className="font-mono text-[10px] text-[#A7A59D] mb-1">
                  STAGE {step.step}
                </div>
                <div className="font-mono text-xs font-semibold text-[#F3F1EA] truncate">
                  {step.name}
                </div>
              </button>
            ))}
          </div>

          <div className="p-6 bg-[#131311] border border-[#E89A3C]/30 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="font-mono text-xs font-bold text-[#E89A3C]">
                  {project.architectureSteps[activeStep].step} // {project.architectureSteps[activeStep].name}
                </span>
                <span className="font-mono text-[10px] bg-[#0C0C0B] px-2 py-0.5 rounded border border-[#F3F1EA]/10 text-[#A7A59D]">
                  {project.architectureSteps[activeStep].badge}
                </span>
              </div>
              <p className="text-sm sm:text-base text-[#F3F1EA]">
                {project.architectureSteps[activeStep].desc}
              </p>
            </div>
            <div className="font-mono text-xs text-emerald-400 shrink-0">
              ● ACTIVE STATE VERIFIED
            </div>
          </div>
        </section>

        {/* FinExplain Deep-Dive: Architectural Innovation (only for finexplain) */}
        {project.id === 'finexplain' && (
          <section className="py-14 border-b border-[#F3F1EA]/10 space-y-10">
            <div>
              <div className="font-mono text-xs text-[#E89A3C] uppercase tracking-widest mb-2">
                // ARCHITECTURAL INNOVATION
              </div>
              <h2 className="font-sans text-2xl font-bold text-[#F3F1EA] mb-6">
                Why This Architecture Matters
              </h2>
            </div>

            {/* Problem → Solution Framework */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-[#131311] border border-red-500/20 rounded-lg space-y-3">
                <div className="font-mono text-xs text-red-400 uppercase tracking-wider flex items-center space-x-2">
                  <Zap size={14} />
                  <span>THE PROBLEM WITH LLM FINANCIAL ANALYSIS</span>
                </div>
                <p className="text-sm text-[#A7A59D] leading-relaxed">
                  Standard LLM-driven financial analysis routinely <strong className="text-[#F3F1EA]">hallucinates arithmetic</strong>. When asked to compute multi-step ratios like Debt-to-Equity, Return on Invested Capital (ROIC), or operating margins, language models return plausible-sounding but <strong className="text-[#F3F1EA]">mathematically incorrect results</strong>. This happens because LLMs are language predictors, not calculators — they approximate numeric relationships through token probability, not deterministic computation.
                </p>
                <p className="text-sm text-[#A7A59D] leading-relaxed">
                  In financial auditing and investment analysis, a single arithmetic error can cascade into catastrophically wrong conclusions about a company's solvency, liquidity, or profitability.
                </p>
              </div>

              <div className="p-6 bg-[#131311] border border-emerald-500/20 rounded-lg space-y-3">
                <div className="font-mono text-xs text-emerald-400 uppercase tracking-wider flex items-center space-x-2">
                  <ShieldCheck size={14} />
                  <span>FINEXPLAIN'S SOLUTION: STRICT SEPARATION</span>
                </div>
                <p className="text-sm text-[#A7A59D] leading-relaxed">
                  FinExplain enforces a strict architectural boundary: <strong className="text-[#F3F1EA]">all numeric calculations execute deterministically in Python/Pandas</strong> with formula traceability back to raw filing line items. LLMs are used <em>exclusively</em> for contextual narrative reasoning.
                </p>
                <p className="text-sm text-[#A7A59D] leading-relaxed">
                  The LLM explains <em>why</em> a ratio changed quarter-over-quarter (e.g., "operating margin dropped due to increased SG&A spending"), but it never computes <em>what</em> the ratio equals. This makes it <strong className="text-[#F3F1EA]">structurally impossible</strong> for the model to fabricate financial figures.
                </p>
              </div>
            </div>

            {/* 3-Way Reconciliation */}
            <div className="p-6 bg-[#131311] border border-[#E89A3C]/20 rounded-lg space-y-4">
              <div className="font-mono text-xs text-[#E89A3C] uppercase tracking-wider">
                3-WAY FINANCIAL STATEMENT RECONCILIATION
              </div>
              <p className="text-sm text-[#A7A59D] leading-relaxed max-w-4xl">
                Before any computed metric reaches the LLM reasoning layer, an automated sanity guard performs a <strong className="text-[#F3F1EA]">3-way cross-check across Balance Sheet, Cash Flow Statement, and Income Statement</strong>. This catches data extraction errors, misaligned fiscal periods, and accounting standard inconsistencies (GAAP vs IFRS). If reconciliation fails, the pipeline <strong className="text-[#F3F1EA]">halts and flags discrepancies</strong> rather than generating misleading analysis built on corrupted inputs.
              </p>
              <div className="grid sm:grid-cols-3 gap-3 font-mono text-xs">
                <div className="p-3 bg-[#0C0C0B] border border-[#F3F1EA]/10 rounded text-center">
                  <div className="text-[#E89A3C] font-bold mb-1">BALANCE SHEET</div>
                  <div className="text-[#A7A59D]">Assets = Liabilities + Equity</div>
                </div>
                <div className="p-3 bg-[#0C0C0B] border border-[#F3F1EA]/10 rounded text-center">
                  <div className="text-[#E89A3C] font-bold mb-1">CASH FLOW</div>
                  <div className="text-[#A7A59D]">Operating + Investing + Financing</div>
                </div>
                <div className="p-3 bg-[#0C0C0B] border border-[#F3F1EA]/10 rounded text-center">
                  <div className="text-[#E89A3C] font-bold mb-1">INCOME STMT</div>
                  <div className="text-[#A7A59D]">Revenue − Expenses = Net Income</div>
                </div>
              </div>
            </div>

            {/* Ratio Categories */}
            <div className="space-y-4">
              <div className="font-mono text-xs text-[#A7A59D] uppercase tracking-wider">
                18+ AUTOMATED RATIO CATEGORIES
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                <div className="p-4 bg-[#131311] border border-[#F3F1EA]/10 rounded-lg">
                  <div className="font-mono text-xs text-[#E89A3C] font-bold mb-2">LIQUIDITY</div>
                  <ul className="text-xs text-[#A7A59D] space-y-1">
                    <li>Current Ratio</li>
                    <li>Quick Ratio</li>
                    <li>Cash Ratio</li>
                    <li>Working Capital</li>
                  </ul>
                </div>
                <div className="p-4 bg-[#131311] border border-[#F3F1EA]/10 rounded-lg">
                  <div className="font-mono text-xs text-[#E89A3C] font-bold mb-2">LEVERAGE</div>
                  <ul className="text-xs text-[#A7A59D] space-y-1">
                    <li>Debt-to-Equity</li>
                    <li>Debt-to-Assets</li>
                    <li>Interest Coverage</li>
                    <li>Equity Multiplier</li>
                  </ul>
                </div>
                <div className="p-4 bg-[#131311] border border-[#F3F1EA]/10 rounded-lg">
                  <div className="font-mono text-xs text-[#E89A3C] font-bold mb-2">PROFITABILITY</div>
                  <ul className="text-xs text-[#A7A59D] space-y-1">
                    <li>Gross Margin</li>
                    <li>Operating Margin</li>
                    <li>Net Profit Margin</li>
                    <li>ROE / ROA / ROIC</li>
                  </ul>
                </div>
                <div className="p-4 bg-[#131311] border border-[#F3F1EA]/10 rounded-lg">
                  <div className="font-mono text-xs text-[#E89A3C] font-bold mb-2">EFFICIENCY</div>
                  <ul className="text-xs text-[#A7A59D] space-y-1">
                    <li>Asset Turnover</li>
                    <li>Inventory Turnover</li>
                    <li>Receivables Turnover</li>
                    <li>Days Sales Outstanding</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pipeline Design Principle */}
            <div className="p-6 bg-[#131311] border border-[#F3F1EA]/15 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-xs text-[#E89A3C] uppercase font-semibold">
                    DESIGN PRINCIPLE
                  </span>
                  <span className="font-mono text-[10px] bg-[#0C0C0B] text-[#A7A59D] px-2 py-0.5 rounded border border-[#F3F1EA]/10">
                    ANTI-HALLUCINATION GUARANTEE
                  </span>
                </div>
                <p className="text-sm text-[#F3F1EA] font-normal max-w-3xl">
                  Pipeline stages 01–03 (PARSE → RECONCILE → COMPUTE) execute <strong>entirely deterministically</strong> in Python — no LLM is invoked until all numbers are verified and reconciled. Stage 04 (REASON) receives pre-computed, validated metrics as input context, making it structurally impossible for the model to fabricate financial figures. Stage 05 (AUDIT) maps every generated insight back to the specific raw filing line that produced it.
                </p>
              </div>
              <div className="font-mono text-[11px] text-[#A7A59D] shrink-0">
                COMPUTATION: <span className="text-emerald-400">DETERMINISTIC</span>
              </div>
            </div>
          </section>
        )}

        {/* Deep Dive: Challenges & Solutions */}
        <section className="py-14 border-b border-[#F3F1EA]/10 grid md:grid-cols-2 gap-10">
          <div className="p-6 bg-[#131311] border border-[#F3F1EA]/10 rounded-lg space-y-4">
            <h3 className="font-mono text-xs text-[#E89A3C] uppercase tracking-wider flex items-center space-x-2">
              <Zap size={14} />
              <span>TECHNICAL CHALLENGES</span>
            </h3>
            <ul className="space-y-3 text-sm text-[#A7A59D] leading-relaxed">
              {project.challenges.map((c, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <span className="text-[#E89A3C] font-mono text-xs mt-0.5">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-[#131311] border border-[#F3F1EA]/10 rounded-lg space-y-4">
            <h3 className="font-mono text-xs text-emerald-400 uppercase tracking-wider flex items-center space-x-2">
              <ShieldCheck size={14} />
              <span>ENGINEERING SOLUTIONS</span>
            </h3>
            <ul className="space-y-3 text-sm text-[#A7A59D] leading-relaxed">
              {project.solutions.map((s, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <span className="text-emerald-400 font-mono text-xs mt-0.5">•</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Media / Screenshot Lightbox if images exist */}
        {project.images && project.images.length > 0 && (
          <section className="py-14 border-b border-[#F3F1EA]/10">
            <div className="font-mono text-xs text-[#A7A59D] uppercase tracking-widest mb-6">
              // INTERFACE & VISUAL EVIDENCE
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {project.images.map((img, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setCurrentImageIndex(i);
                    setIsFullscreen(true);
                  }}
                  className="aspect-video bg-[#131311] border border-[#F3F1EA]/10 rounded-lg overflow-hidden cursor-pointer group relative"
                >
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-[#0C0C0B]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center font-mono text-xs text-[#F3F1EA]">
                    VIEW FULLSCREEN ↗
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Fullscreen Lightbox Modal */}
        {isFullscreen && project.images && (
          <div className="fixed inset-0 z-50 bg-[#0C0C0B]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-6 right-6 p-2 text-[#A7A59D] hover:text-[#F3F1EA]"
            >
              <X size={24} />
            </button>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-[#131311] border border-[#F3F1EA]/10 rounded-full text-[#F3F1EA] hover:border-[#E89A3C]"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="max-w-5xl max-h-[85vh] overflow-hidden rounded-lg border border-[#F3F1EA]/20">
              <img
                src={project.images[currentImageIndex]}
                alt="Fullscreen View"
                className="w-full h-full object-contain"
              />
            </div>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-[#131311] border border-[#F3F1EA]/10 rounded-full text-[#F3F1EA] hover:border-[#E89A3C]"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Technology Stack Taxonomy */}
        <section className="py-14">
          <div className="font-mono text-xs text-[#A7A59D] uppercase tracking-widest mb-4">
            // COMPLETE STACK TAXONOMY
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-3 py-1.5 bg-[#131311] border border-[#F3F1EA]/10 rounded text-[#F3F1EA]"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;