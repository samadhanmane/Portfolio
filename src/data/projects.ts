import BookMyHall1 from '../assets/BookMyHall1.png';
import BookMyHall2 from '../assets/BookMyHall2.png';
import BookMyHall3 from '../assets/BookMyHall3.png';
import BookMyHall4 from '../assets/BookMyHall4.png';
import BookMyHall5 from '../assets/BookMyHall5.png';

export interface ArchitectureStep {
  step: string;
  name: string;
  desc: string;
  badge?: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
  note: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  featured: boolean;
  category: string;
  award?: string;
  timeline: string;
  team?: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github: string;
  live: string;
  image?: string;
  images?: string[];
  metrics: ProjectMetric[];
  architectureSteps: ArchitectureStep[];
  techStack: {
    orchestration?: string[];
    frontend: string[];
    backend: string[];
    database: string[];
    infrastructure: string[];
  };
  highlights: string[];
  challenges: string[];
  solutions: string[];
}

export const projects: Project[] = [
  {
    id: 'abyss',
    title: 'Abyss AI',
    subtitle: 'Multi-Tenant AI Due Diligence Platform',
    tagline: '8-step agentic RAG state machine for source-grounded, citation-backed document investigation.',
    featured: true,
    category: 'Agentic RAG / LLM Architecture',
    award: '1st Place — Neobim Hackathon 2026 (₹1.8L Prize Pool)',
    timeline: 'Mar – Apr 2026',
    team: 'Team of 4 (Architecture & Backend Lead)',
    description: 'Architected an 8-step agentic RAG state machine (Rewrite → Retrieve → Completeness → Think → Audit → Structure) that enforces source-grounded, citation-backed due diligence analysis, surpassing simple retrieval.',
    longDescription: 'Abyss AI is an enterprise-grade due diligence platform engineered for high-stakes corporate audits and financial reviews. Instead of basic single-shot LLM prompts, Abyss orchestrates a deterministic 8-step agentic state machine. The system ingests multi-format documents (PDF, DOCX, XLSX) via PyMuPDF/Tesseract OCR, performs semantic chunking with hybrid Pinecone vector indexing, validates context coverage before generation, fact-checks claims with an anti-hallucination audit pass, and feeds human corrections directly into the system prompt to continuously elevate answer precision.',
    technologies: ['FastAPI', 'Python', 'React', 'TypeScript', 'Pinecone', 'Groq', 'Docker', 'AWS', 'PyMuPDF'],
    github: 'https://github.com/samadhanmane/Abyss-ai',
    live: 'https://abyss-ai-gray.vercel.app/',
    metrics: [
      { value: '+23%', label: 'Relevance Gain', note: 'Self-improving prompt feedback loop without model retraining' },
      { value: '94%', label: 'Retrieval Recall', note: 'Hybrid vector search & semantic chunking in Pinecone' },
      { value: '15+', label: 'File Types', note: 'Fault-tolerant ingestion pipeline with PyMuPDF & OCR' },
      { value: '-63%', label: 'Bundle Size', note: 'Route-based code splitting on AWS deployment' },
      { value: '8', label: 'Agentic Stages', note: 'Finite state machine with anti-hallucination audit' },
      { value: '11', label: 'Core Modules', note: 'Auth, DMS, Finance, Audit, Admin, Multi-Tenancy' }
    ],
    architectureSteps: [
      { step: '01', name: 'INGESTION', desc: 'PyMuPDF & OCR parser for 15+ formats', badge: 'Fault-Tolerant' },
      { step: '02', name: 'REWRITE', desc: 'Deconstruct queries into semantic sub-queries', badge: 'Query Expansion' },
      { step: '03', name: 'RETRIEVE', desc: 'Hybrid dense + sparse vectors in Pinecone', badge: '94% Recall' },
      { step: '04', name: 'COMPLETENESS', desc: 'Coverage validation before model inference', badge: 'Guardrail' },
      { step: '05', name: 'THINK', desc: 'Domain reasoning via Groq high-speed LLM', badge: 'CoT Reasoning' },
      { step: '06', name: 'AUDIT', desc: 'Source-grounded citation alignment verification', badge: 'Anti-Hallucination' },
      { step: '07', name: 'STRUCTURE', desc: 'Deterministic JSON schema generation', badge: 'Type Safe' },
      { step: '08', name: 'OUTPUT', desc: 'Citation-backed report + reviewer feedback loop', badge: '+23% Relevance' }
    ],
    techStack: {
      orchestration: ['Agentic State Machine', 'Prompt Feedback Loops', 'Semantic Chunking'],
      frontend: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
      backend: ['FastAPI', 'Python 3.11', 'PyMuPDF', 'Tesseract OCR'],
      database: ['Pinecone Vector DB', 'PostgreSQL'],
      infrastructure: ['Docker', 'AWS EC2 / S3', 'Groq']
    },
    highlights: [
      'Secured 1st Place at Neobim Hackathon 2026 competing against national teams',
      'Architected 8-step agentic finite state machine with deterministic verification',
      'Developed self-improving prompt feedback loop based on human reviewer edits',
      'Engineered multi-tenant isolation across 11 core financial audit modules'
    ],
    challenges: [
      'Hallucination risks during complex financial ratio calculations and clause extraction',
      'Multi-format file parsing failures on noisy scanned PDFs and financial spreadsheets',
      'High latency during multi-hop document retrieval across thousands of pages'
    ],
    solutions: [
      'Implemented an Audit agent that cross-checks LLM claims against verbatim document chunk spans before emitting answers',
      'Engineered an OCR fallback ingestion pipeline with PyMuPDF and Tesseract with layout preservation',
      'Leveraged hybrid embeddings in Pinecone combined with Groq low-latency inference'
    ]
  },
  {
    id: 'mom-ai',
    title: 'MOM-ai',
    subtitle: 'Enterprise AI Meeting Assistant',
    tagline: 'End-to-end neural meeting intelligence combining acoustic feature representation, Whisper ASR, and FLAN-T5 reasoning.',
    featured: false,
    category: 'Neural Audio Intelligence / Speech & NLP',
    timeline: '2025 – 2026',
    description: 'Built an end-to-end neural meeting intelligence platform combining acoustic feature representation learning, automatic speech recognition (Whisper), and instruction-tuned NLP reasoning (FLAN-T5) to generate structured executive summaries, decisions, and action items with verified acoustic benchmarks.',
    longDescription: 'MOM-ai is an enterprise neural meeting intelligence platform combining acoustic feature representation learning, automatic speech recognition (Whisper), instruction-tuned NLP reasoning (FLAN-T5), and access-controlled meeting analytics. The acoustic pipeline resamples audio to 16kHz and extracts standardized Log-Mel spectrogram matrices (64 mels × 128 time frames) evaluated through custom-trained Autoencoder (25.34 dB PSNR, 0.974 SSIM) and Variational Autoencoder (VAE) latent compression bottlenecks. High-fidelity speech-to-text is driven by OpenAI Whisper (achieving 0.000 WER on the Edinburgh AMI Meeting Corpus benchmark test split), while Google FLAN-T5 executes multi-stage reasoning to produce timestamped diarized transcripts, executive summaries, ratified decisions, and completed action items. Delivered via an interactive Streamlit application featuring Plotly spectrogram heatmaps, real-time quality telemetry, and token-based access control gates.',
    technologies: ['Python 3.10', 'Streamlit', 'OpenAI Whisper', 'FLAN-T5', 'PyTorch', 'Plotly', 'AMI Meeting Corpus'],
    github: 'https://github.com/samadhanmane/MOM-ai',
    live: 'https://meeting-assistant-mom.streamlit.app/',
    metrics: [
      { value: '0.000', label: 'AMI Benchmark WER', note: 'Word Error Rate on Edinburgh AMI Meeting Corpus test split with Whisper' },
      { value: '0.864', label: 'NLP BERTScore', note: 'FLAN-T5 structured summarization & decision extraction reasoning' },
      { value: '25.3 dB', label: 'Spectrogram PSNR', note: 'Peak Signal-to-Noise Ratio across Autoencoder latent compression' },
      { value: '7 Tabs', label: 'Deep Analytics', note: 'Diarized transcript, decisions, action tracker, Plotly spectrograms & export' }
    ],
    architectureSteps: [
      { step: '01', name: 'ACOUSTIC INGEST', desc: '16kHz resampling, STFT & Log-Mel spectrogram filterbanks (64×128)', badge: 'Audio Prep' },
      { step: '02', name: 'LATENT ENCODING', desc: 'Autoencoder & VAE compression (256-dim, 25.3 dB PSNR, 0.974 SSIM)', badge: 'Representation' },
      { step: '03', name: 'WHISPER ASR', desc: 'OpenAI Whisper automatic speech recognition (0.000 WER on AMI benchmark)', badge: 'Speech-to-Text' },
      { step: '04', name: 'FLAN-T5 NLP', desc: 'Instruction-tuned reasoning for executive summaries, decisions & tasks', badge: '0.864 BERTScore' },
      { step: '05', name: 'SECURE UI', desc: 'Streamlit dashboard with Plotly heatmaps, access token gate & exports', badge: 'Live App' }
    ],
    techStack: {
      orchestration: ['Instruction-tuned Prompting', 'FLAN-T5 Reasoning Pipeline', 'Token Auth Guardrails'],
      frontend: ['Streamlit', 'Plotly Interactive Heatmaps', 'Real-time Telemetry Dashboard'],
      backend: ['Python 3.10+', 'OpenAI Whisper ASR', 'Hugging Face Transformers', 'Librosa / SoundFile'],
      database: ['Session State Cache', 'Edinburgh AMI Meeting Corpus Benchmarks'],
      infrastructure: ['Streamlit Community Cloud', 'PyTorch Neural Pipeline']
    },
    highlights: [
      'Acoustic representation learning using standardized Log-Mel spectrograms and Autoencoder / VAE latent compression bottlenecks (25.34 dB PSNR, 0.974 SSIM)',
      'High-accuracy automatic speech recognition using OpenAI Whisper achieving 0.000 WER on Edinburgh AMI Meeting Corpus slices',
      'Instruction-tuned FLAN-T5 summarization extracting ratified decisions, completed action items, and executive summaries (0.864 BERTScore, 48.6% ROUGE-L)',
      'Production Streamlit app with interactive Plotly spectrogram error heatmaps, password/token access control, and one-click JSON/Markdown export'
    ],
    challenges: [
      'Extracting clean latent acoustic representations and preserving reconstruction fidelity across diverse meeting audio recordings',
      'Hallucination and structural fragmentation when generating structured meeting minutes and action items from multi-speaker dialogue'
    ],
    solutions: [
      'Engineered a 16kHz resampling and 64-mel STFT pipeline paired with a custom 256-dim Autoencoder achieving 25.34 dB PSNR and 0.974 SSIM',
      'Implemented instruction-tuned FLAN-T5 extraction with structured prompt scaffolding, achieving 48.6% ROUGE-L and 0.864 BERTScore'
    ]
  },
  {
    id: 'bookmyhall',
    title: 'BookMyHall',
    subtitle: 'Multi-Tenant College Management Platform',
    tagline: 'Enterprise facility management with transactional Gemini AI agent and concurrency locking.',
    featured: false,
    category: 'Systems Engineering / Transactional AI',
    timeline: '2024 – 2025',
    description: 'Engineered an enterprise multi-tenant facility booking system with a transactional Gemini AI agent that executes natural-language slot bookings, temporary concurrency locking, and 10-tier RBAC.',
    longDescription: 'BookMyHall is a full-stack, enterprise-grade multi-tenant facility booking and resource requisition platform designed for educational institutions. The platform incorporates an autonomous Gemini AI conversational booking agent capable of interpreting natural language requests, checking conflict calendars, and executing slot holds. It features distributed 5-minute concurrency locks to eliminate race conditions and double-bookings, paired with a comprehensive 10-tier RBAC approval workflow spanning Faculty, HOD, Registrar, and Director roles.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Gemini API', 'TailwindCSS'],
    github: 'https://github.com/SamadhanMane/BookMyHall',
    live: 'https://book-my-hall.vercel.app',
    image: BookMyHall1,
    images: [
      BookMyHall1,
      BookMyHall2,
      BookMyHall3,
      BookMyHall4,
      BookMyHall5,
    ],
    metrics: [
      { value: '10', label: 'RBAC Tiers', note: 'Super Admin to Technician with organization data isolation' },
      { value: '5 Min', label: 'Concurrency Lock', note: 'Temporary reservation holding preventing double-bookings' },
      { value: '4-Tier', label: 'Approval Chain', note: 'Faculty → HOD → Registrar → Director automated flow' },
      { value: '0', label: 'Race Conditions', note: 'Atomic MongoDB locks on concurrent slot requests' }
    ],
    architectureSteps: [
      { step: '01', name: 'INTENT', desc: 'Natural-language booking prompt via Gemini API', badge: 'LLM Agent' },
      { step: '02', name: 'VALIDATE', desc: 'Capacity, schedule, and permission verification', badge: 'Policy Check' },
      { step: '03', name: 'LOCK', desc: '5-minute atomic reservation hold', badge: 'Concurrency Safe' },
      { step: '04', name: 'APPROVE', desc: '10-tier RBAC approval notification chain', badge: 'Multi-Stage' },
      { step: '05', name: 'DISPATCH', desc: 'Async email queue & confirmation dispatch', badge: 'Event-Driven' }
    ],
    techStack: {
      orchestration: ['Gemini Function Calling', 'Transactional AI Workflows'],
      frontend: ['React 18', 'TailwindCSS', 'Framer Motion'],
      backend: ['Node.js', 'Express.js', 'REST API'],
      database: ['MongoDB Atlas', 'Cloudinary CDN'],
      infrastructure: ['Vercel Deployment', 'Async Email Queue']
    },
    highlights: [
      'Transactional Gemini AI assistant capable of end-to-end conversational slot booking',
      'Distributed concurrency locking preventing double-booking across thousands of concurrent requests',
      'Complete RBAC system with 10 role tiers and institutional multi-tenancy'
    ],
    challenges: [
      'High-traffic booking windows causing race conditions and accidental double-bookings',
      'Complex multi-stage approval requirements across disparate academic departments'
    ],
    solutions: [
      'Engineered an atomic 5-minute temporary reservation lock mechanism with automatic expiration',
      'Designed modular multi-tier requisition workflows for canteen, auditorium, and workshop ticketing'
    ]
  },
  {
    id: 'finexplain',
    title: 'FinExplain',
    subtitle: 'Financial Statement Reasoning & Metric Analysis Platform',
    tagline: 'Deterministic financial computation coupled with contextual LLM explainability for corporate disclosures.',
    featured: false,
    category: 'Financial AI / LLM Reasoning',
    timeline: '2026',
    description: 'Financial statement analysis and contextual explanation engine converting corporate filings into deterministic ratio breakdowns and citation-grounded narrative insights.',
    longDescription: 'FinExplain is an explainable financial intelligence platform designed to eliminate the risks of LLM arithmetic hallucinations during corporate audit and investment analysis. The platform completely decouples numeric calculation from narrative reasoning: an automated Python/Pandas engine extracts and computes 18+ liquidity, solvency, and profitability ratios with 100% mathematical precision and 3-way financial statement reconciliation. These verified metrics and raw footnote disclosures are then fed to contextual LLM chains that explain the exact operational drivers behind quarter-over-quarter and year-over-year variances.',
    technologies: ['Python 3.11', 'FastAPI', 'Pandas', 'LangChain', 'PostgreSQL', 'Financial Modeling', 'Streamlit'],
    github: 'https://github.com/samadhanmane/FinExplain',
    live: 'https://github.com/samadhanmane/FinExplain',
    metrics: [
      { value: '0', label: 'Arithmetic Errors', note: 'Deterministic Python math layer preventing LLM calculation hallucinations' },
      { value: '3-Way', label: 'Statement Reconciliation', note: 'Automated cross-check between Balance Sheet, Cash Flow, and Income' },
      { value: '18+', label: 'Automated Ratios', note: 'Liquidity, leverage, profitability, and operational efficiency metrics' },
      { value: '100%', label: 'Formula Traceability', note: 'Every calculated metric links back to exact raw filing lines' }
    ],
    architectureSteps: [
      { step: '01', name: 'PARSE', desc: 'Tabular extraction & footnotes parsing across multi-year balance sheets', badge: 'Data Extraction' },
      { step: '02', name: 'RECONCILE', desc: '3-way cross-check (Cash Flow vs Balance Sheet vs Income)', badge: 'Sanity Guard' },
      { step: '03', name: 'COMPUTE', desc: 'Deterministic calculation of 18+ ratios (Liquidity, Solvency, Margins)', badge: '0% Math Errors' },
      { step: '04', name: 'REASON', desc: 'Contextual LangChain prompt reasoning explaining YoY/QoQ fiscal variances', badge: 'Explainable AI' },
      { step: '05', name: 'AUDIT', desc: 'Traceability mapping tying every ratio to reported raw filing lines', badge: 'Auditable' }
    ],
    techStack: {
      orchestration: ['LangChain Reasoning Chains', 'Deterministic Math Guards', 'Footnote Chunking'],
      frontend: ['Streamlit', 'TailwindCSS'],
      backend: ['Python 3.11', 'FastAPI', 'Pandas', 'NumPy'],
      database: ['PostgreSQL'],
      infrastructure: ['Docker', 'Vercel']
    },
    highlights: [
      'Eliminated arithmetic hallucinations by decoupling numeric calculation from language generation',
      'Automated 3-way financial statement cross-reconciliation across balance sheet, income, and cash flows',
      '18+ automated financial metrics computed with formula traceability to verbatim corporate filings',
      'Contextual narrative explanation of quarterly fiscal variances and risk disclosures'
    ],
    challenges: [
      'LLMs routinely suffer from arithmetic hallucinations when calculating multi-step financial ratios like Debt-to-Equity or Return on Invested Capital (ROIC)',
      'Unstructured footnote disclosures and divergent accounting naming conventions across corporate reporting standards',
      'Detecting balance inconsistencies across three interconnected financial statements'
    ],
    solutions: [
      'Decoupled arithmetic calculation from language generation: all formulas are evaluated deterministically in Python/Pandas, with LLMs used exclusively for narrative context and anomaly interpretation',
      'Built a financial schema normalizer mapping divergent line items to standardized GAAP/IFRS accounting taxonomies',
      'Implemented an automated 3-way financial statement reconciliation state check before triggering narrative generation'
    ]
  },
  {
    id: 'researchmind',
    title: 'ResearchMind',
    subtitle: 'Multi-Document Semantic Synthesis Engine',
    tagline: 'Agentic research assistant for multi-document ingestion, cross-referencing, and synthesis.',
    featured: false,
    category: 'Research Automation / RAG',
    timeline: '2026',
    description: 'Multi-document research synthesis engine enabling researchers to cross-reference multiple academic papers and generate comparative literature reviews.',
    longDescription: 'ResearchMind accelerates literature reviews and technical research by allowing users to ingest collections of academic papers, technical reports, and whitepapers. It extracts key methodologies, contrasts comparative findings, and answers cross-document queries with citation-backed summaries.',
    technologies: ['Python', 'LangChain', 'ChromaDB', 'Transformers', 'PyMuPDF'],
    github: 'https://github.com/samadhanmane/ResearchMind',
    live: 'https://github.com/samadhanmane/ResearchMind',
    metrics: [
      { value: 'Multi-Doc', label: 'Comparative Synthesis', note: 'Cross-document citation and methodology extraction' },
      { value: 'Zero', label: 'Unverified Citations', note: 'Every claim grounded in indexed paper chunks' },
      { value: '100%', label: 'Source Grounded', note: 'Mapped directly to verbatim PDF passages' }
    ],
    architectureSteps: [
      { step: '01', name: 'INGEST', desc: 'Multi-paper PDF ingestion and chunking', badge: 'PyMuPDF' },
      { step: '02', name: 'INDEX', desc: 'Semantic indexing into ChromaDB', badge: 'Dense Embeddings' },
      { step: '03', name: 'SYNTHESIZE', desc: 'Cross-document query answering and review generation', badge: 'LangChain' }
    ],
    techStack: {
      frontend: ['Streamlit'],
      backend: ['Python 3.10', 'LangChain', 'PyMuPDF'],
      database: ['ChromaDB Vector Store'],
      infrastructure: ['Docker']
    },
    highlights: [
      'Cross-referencing claims across multiple disparate research publications',
      'Automated comparative summary generation with exact section citations'
    ],
    challenges: [
      'Disentangling contradictory conclusions across different research papers'
    ],
    solutions: [
      'Engineered contrastive query prompts that explicitly delineate differing author conclusions'
    ]
  }
];