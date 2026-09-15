import React, { useState } from 'react';
import { GitPullRequest, ExternalLink, CheckCircle2, ChevronDown, ChevronUp, Terminal, ShieldCheck, Layers, GitFork, ArrowUpRight } from 'lucide-react';

export const OpenSourceSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="opensource" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#F3F1EA]/10">
      <div className="flex items-center space-x-3 font-mono text-xs text-[#A7A59D] uppercase tracking-widest mb-4">
        <span className="text-[#E89A3C]">02</span>
        <span>//</span>
        <span>OPEN SOURCE ENGINEERING & UPSTREAM CONTRIBUTIONS</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="font-sans text-fluid-section font-bold tracking-tight text-[#F3F1EA]">
            Open Source Work
          </h2>
          <p className="mt-3 text-lg text-[#A7A59D] max-w-2xl font-normal leading-relaxed">
            Direct upstream contributions to production open-source AI platforms and infrastructure.
          </p>
        </div>
        <div className="font-mono text-xs text-[#A7A59D]">
          ENTERPRISE AI PLATFORMS
        </div>
      </div>

      {/* Main Contribution Card: PipeHub AI */}
      <div className="bg-[#131311] border border-[#F3F1EA]/15 rounded-lg p-6 sm:p-10 transition-all hover:border-[#F3F1EA]/25">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#F3F1EA]/10">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-[#E89A3C]/10 border border-[#E89A3C]/30 rounded text-[#E89A3C]">
              <GitPullRequest size={18} />
            </div>
            <div>
              <span className="font-mono text-xs text-[#E89A3C] uppercase tracking-wider block">
                PIPEHUB AI // REPOSITORY CONTRIBUTION
              </span>
              <span className="font-mono text-[11px] text-[#A7A59D]">
                ROLE: OPEN SOURCE CONTRIBUTOR
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center space-x-1.5 font-mono text-[11px] text-[#E89A3C] bg-[#E89A3C]/10 border border-[#E89A3C]/25 px-2.5 py-1 rounded">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E89A3C] animate-pulse" />
              <span>PR #3290 · UNDER REVIEW</span>
            </span>
            <span className="font-mono text-[11px] text-[#A7A59D] border border-[#F3F1EA]/10 bg-[#0C0C0B] px-2.5 py-1 rounded hidden sm:inline-block">
              ISSUE #3201
            </span>
          </div>
        </div>

        {/* Content & Overview */}
        <div className="mt-8 grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#F3F1EA] tracking-tight">
              PipeHub AI — LLM Reasoning Configuration
            </h3>
            <p className="font-mono text-xs text-[#E89A3C] uppercase tracking-wider">
              Model-Level defaultReasoningEffort Fallback Precedence
            </p>
            <p className="text-base text-[#A7A59D] leading-relaxed">
              Contributed to an open-source AI platform by fixing model-level LLM reasoning-effort configuration and implementing request → model → platform fallback precedence. Added regression tests and validated the fix with 195 passing tests.
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Python', 'Pytest', 'LLMs', 'Open Source', 'Git / GitHub'].map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-2.5 py-1 bg-[#0C0C0B] border border-[#F3F1EA]/10 rounded text-[#F3F1EA]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4 font-mono text-xs">
              <a
                href="https://github.com/pipeshub-ai/pipeshub-ai/pull/3290"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 bg-[#E89A3C] text-[#0C0C0B] px-5 py-2.5 rounded font-semibold hover:bg-[#F3F1EA] transition-colors"
              >
                <span>VIEW PR #3290</span>
                <ArrowUpRight size={14} />
              </a>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center space-x-2 border border-[#F3F1EA]/20 bg-[#171715] text-[#F3F1EA] px-4 py-2.5 rounded hover:border-[#E89A3C] transition-colors"
              >
                <span>{isExpanded ? 'HIDE TECHNICAL DETAILS' : 'INSPECT ARCHITECTURAL FIX'}</span>
                {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
            </div>
          </div>

          {/* Test & Verification Metric Callouts */}
          <div className="lg:col-span-4 bg-[#0C0C0B] border border-[#F3F1EA]/10 rounded-lg p-6 space-y-4 font-mono text-xs">
            <div className="text-[#A7A59D] uppercase tracking-wider pb-2 border-b border-[#F3F1EA]/10 flex items-center justify-between">
              <span>TEST SUITE VERIFICATION</span>
              <span className="text-emerald-400">100% PASS</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[#A7A59D]">Total Passing Tests</span>
                <span className="text-[#F3F1EA] font-bold text-sm">195 / 195</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#A7A59D]">Unit Test Suite</span>
                <span className="text-emerald-400">190 / 190 Passed</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#A7A59D]">E2E Integration</span>
                <span className="text-emerald-400">5 / 5 Passed</span>
              </div>
              <div className="pt-2 border-t border-[#F3F1EA]/10 text-[11px] text-[#6E6C65] font-sans">
                CodeRabbit review investigation completed and accepted.
              </div>
            </div>
          </div>
        </div>

        {/* Expandable Technical Deep-Dive */}
        {isExpanded && (
          <div className="mt-8 pt-8 border-t border-[#F3F1EA]/10 space-y-6 font-sans">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Problem Analysis */}
              <div className="p-5 bg-[#0C0C0B] border border-[#F3F1EA]/10 rounded-lg space-y-2">
                <span className="font-mono text-xs text-[#E89A3C] uppercase tracking-wider block">
                  THE DEFECT (ISSUE #3201)
                </span>
                <p className="text-xs text-[#A7A59D] leading-relaxed">
                  Reasoning-capable models were falling back directly to the platform-wide <strong className="text-[#F3F1EA]">"high"</strong> reasoning effort instead of respecting reasoning effort configured at the individual model level. This could trigger request rejections on LLM providers or models that only support specific reasoning effort tiers.
                </p>
              </div>

              {/* What was Implemented */}
              <div className="p-5 bg-[#0C0C0B] border border-[#F3F1EA]/10 rounded-lg space-y-2">
                <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider block">
                  IMPLEMENTATION DETAILS
                </span>
                <ul className="text-xs text-[#A7A59D] space-y-1.5 leading-relaxed">
                  <li className="flex items-start space-x-1.5">
                    <span className="text-[#E89A3C] font-mono">•</span>
                    <span>Updated <code className="font-mono text-[11px] text-[#F3F1EA] bg-[#171715] px-1 py-0.5 rounded">_reasoning_effort_kwargs()</code> in <code className="font-mono text-[11px] text-[#F3F1EA]">app/utils/aimodels.py</code></span>
                  </li>
                  <li className="flex items-start space-x-1.5">
                    <span className="text-[#E89A3C] font-mono">•</span>
                    <span>Enforced 3-tier precedence: <strong>per-request override → model-level default → platform default</strong></span>
                  </li>
                  <li className="flex items-start space-x-1.5">
                    <span className="text-[#E89A3C] font-mono">•</span>
                    <span>Supported <code className="font-mono text-[11px] text-[#F3F1EA]">defaultReasoningEffort</code> in both root-level and nested configuration schemas</span>
                  </li>
                  <li className="flex items-start space-x-1.5">
                    <span className="text-[#E89A3C] font-mono">•</span>
                    <span>Preserved <code className="font-mono text-[11px] text-[#F3F1EA]">"none" → "low"</code> safety fallback and provider-specific mappings</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Code Review Dialogue note */}
            <div className="p-4 bg-[#171715] border border-[#F3F1EA]/10 rounded-lg flex items-start space-x-3 text-xs text-[#A7A59D]">
              <ShieldCheck size={16} className="text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#F3F1EA]">Code Review Resolution:</strong> During review, CodeRabbit identified a potential configuration-schema question. I investigated the concern by testing the proposed alternative, discovered that removing root-level lookups broke required integration tests, and documented why both configuration paths were intentionally supported. The review was accepted.
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OpenSourceSection;
