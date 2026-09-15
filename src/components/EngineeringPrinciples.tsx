import React from 'react';

interface Principle {
  number: string;
  title: string;
  summary: string;
  detail: string;
}

export const EngineeringPrinciples: React.FC = () => {
  const principles: Principle[] = [
    {
      number: '01',
      title: 'Build systems, not demos.',
      summary: 'Raw model prompts do not constitute software.',
      detail: 'Production AI demands deterministic state machines, typed schemas, retry budgets, circuit breakers, and end-to-end observability.'
    },
    {
      number: '02',
      title: 'Ground AI outputs in evidence.',
      summary: 'Hallucination is unacceptable in high-stakes domains.',
      detail: 'Every generated claim must trace back to verbatim document spans through an explicit audit layer and verifiable citation graphs.'
    },
    {
      number: '03',
      title: 'Measure what matters.',
      summary: 'Evaluate pipeline recall over vanity benchmarks.',
      detail: 'Focus on retrieval recall at k, token economy, latency budgets, and real-world failure rate distribution rather than generic perplexity scores.'
    },
    {
      number: '04',
      title: 'Design for failure.',
      summary: 'Probabilistic models will inevitably produce anomalies.',
      detail: 'Engineer fallback pathways, deterministic schema validation, and graceful degradation before user-facing delivery.'
    },
    {
      number: '05',
      title: 'Keep humans in the loop.',
      summary: 'Treat corrections as compounding training signal.',
      detail: 'Capture reviewer edits into dynamic system-prompt feedback loops to systematically improve accuracy without expensive retraining cycles.'
    }
  ];

  return (
    <section id="architecture" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#F3F1EA]/10">
      <div className="flex items-center space-x-3 font-mono text-xs text-[#A7A59D] uppercase tracking-widest mb-4">
        <span className="text-[#E89A3C]">03</span>
        <span>//</span>
        <span>ENGINEERING PHILOSOPHY & MANIFESTO</span>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
        <div className="lg:col-span-5">
          <h2 className="font-sans text-fluid-section font-bold tracking-tight text-[#F3F1EA]">
            How I think about AI Systems
          </h2>
        </div>
        <div className="lg:col-span-7">
          <p className="text-base sm:text-lg text-[#A7A59D] leading-relaxed">
            The gap between a compelling notebook demo and production-grade enterprise software is vast. Here are the five engineering commitments that govern my system architectures.
          </p>
        </div>
      </div>

      {/* Principles List */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {principles.map((p, idx) => (
          <div
            key={p.number}
            className={`p-6 sm:p-8 bg-[#131311] border border-[#F3F1EA]/10 rounded-lg hover:border-[#F3F1EA]/25 transition-all duration-200 flex flex-col justify-between ${
              idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
            }`}
          >
            <div>
              <div className="font-mono text-xs font-bold text-[#E89A3C] mb-6">
                {p.number} // PRINCIPLE
              </div>
              <h3 className="font-sans text-xl font-bold text-[#F3F1EA] mb-2 tracking-tight">
                {p.title}
              </h3>
              <p className="font-sans text-sm font-medium text-[#A7A59D] mb-4">
                {p.summary}
              </p>
            </div>
            <p className="font-sans text-xs text-[#6E6C65] leading-relaxed border-t border-[#F3F1EA]/5 pt-4">
              {p.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EngineeringPrinciples;
