import React, { useState } from 'react';
import { Cpu, Terminal, Database, Cloud, Layers, Check } from 'lucide-react';

interface SkillGroup {
  id: string;
  category: string;
  description: string;
  icon: any;
  items: string[];
}

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const groups: SkillGroup[] = [
    {
      id: 'ai-core',
      category: 'AI & LLM Orchestration',
      description: 'Production architectures, autonomous agents, and grounded retrieval chains.',
      icon: Cpu,
      items: [
        'Machine Learning',
        'Deep Learning',
        'Agentic AI',
        'RAG Pipelines',
        'LangChain',
        'LangGraph',
        'LLM Integration',
        'Prompt Engineering',
        'Fine-Tuning',
        'Transformers',
        'NLP',
        'Hugging Face',
        'Neural Networks'
      ]
    },
    {
      id: 'data-vector',
      category: 'Vector & Data Infrastructure',
      description: 'High-throughput similarity search, document stores, and state persistence.',
      icon: Database,
      items: [
        'Pinecone Vector DB',
        'ChromaDB',
        'MongoDB Atlas',
        'PostgreSQL',
        'PyMuPDF',
        'Tesseract OCR',
        'Semantic Chunking',
        'Hybrid Embeddings'
      ]
    },
    {
      id: 'languages',
      category: 'Programming Languages',
      description: 'Core languages utilized for backend services, algorithms, and frontend interfaces.',
      icon: Terminal,
      items: [
        'Python (FastAPI)',
        'TypeScript',
        'JavaScript',
        'SQL',
        'Java',
        'C++'
      ]
    },
    {
      id: 'frameworks',
      category: 'ML & Web Frameworks',
      description: 'Scientific computing, tensor manipulation, and user interfaces.',
      icon: Layers,
      items: [
        'TensorFlow',
        'Keras',
        'Scikit-Learn',
        'NumPy',
        'Pandas',
        'React 18',
        'TailwindCSS',
        'Streamlit',
        'Node.js / Express'
      ]
    },
    {
      id: 'cloud-devops',
      category: 'Cloud & Infrastructure',
      description: 'Containerization, scalable hosting, and automated deployment pipelines.',
      icon: Cloud,
      items: [
        'AWS (EC2, S3)',
        'Docker',
        'Git & GitHub Actions',
        'Vercel',
        'RESTful APIs'
      ]
    }
  ];

  return (
    <section id="stack" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#F3F1EA]/10">
      <div className="flex items-center space-x-3 font-mono text-xs text-[#A7A59D] uppercase tracking-widest mb-4">
        <span className="text-[#E89A3C]">04</span>
        <span>//</span>
        <span>TECHNICAL TAXONOMY & TOOLING</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="font-sans text-fluid-section font-bold tracking-tight text-[#F3F1EA]">
            Engineered Stack
          </h2>
          <p className="mt-3 text-lg text-[#A7A59D] max-w-2xl font-normal leading-relaxed">
            Strictly categorized by architectural responsibility. No arbitrary percentage bars—only real technologies proven in production.
          </p>
        </div>
        <div className="font-mono text-xs text-[#A7A59D]">
          5 ARCHITECTURAL DOMAINS
        </div>
      </div>

      {/* Grid of Categorized Skill Blocks */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group, idx) => {
          const Icon = group.icon;
          return (
            <div
              key={group.id}
              className={`p-6 sm:p-8 bg-[#131311] border border-[#F3F1EA]/10 rounded-lg hover:border-[#F3F1EA]/25 transition-all flex flex-col justify-between ${
                idx === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-[#0C0C0B] border border-[#F3F1EA]/10 rounded text-[#E89A3C]">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-sans text-lg font-bold text-[#F3F1EA] tracking-tight">
                    {group.category}
                  </h3>
                </div>
                <p className="text-xs text-[#A7A59D] mb-6 leading-relaxed">
                  {group.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs px-2.5 py-1 bg-[#0C0C0B] border border-[#F3F1EA]/10 rounded text-[#F3F1EA] hover:border-[#E89A3C]/50 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F3F1EA]/5 font-mono text-[10px] text-[#6E6C65] uppercase flex justify-between">
                <span>VERIFIED SKILLSET</span>
                <span className="text-[#E89A3C]">PRODUCTION READY</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
