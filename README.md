# 💼 Samadhan Mane — AI Engineer Portfolio

> **AI/ML Engineer** specializing in production-grade conversational AI, agentic RAG state machines, vector retrieval pipelines, and LLM orchestration.

🌐 **Live Portfolio:** [samadhanportfolio.vercel.app](https://samadhanportfolio.vercel.app)  
📫 **Contact:** [samadhanmane2324@gmail.com](mailto:samadhanmane2324@gmail.com) | [LinkedIn](https://linkedin.com/in/samadhan-mane) | [GitHub](https://github.com/samadhanmane)

---

## 🏆 Featured Proof & Recognition

- **1st Place Winner — Neobim Hackathon 2026 (₹1.8L Prize Pool)**  
  Awarded 1st place across national teams for **Abyss AI**, recognized for its novel 8-step agentic finite state machine, deterministic verification layer, and immediate production readiness.

---

## ⚡ Core Production Systems

1. **[Abyss AI](https://abyss-ai-gray.vercel.app/)** — *Multi-Tenant AI Due Diligence Platform*
   - Architected an 8-step agentic RAG state machine (Rewrite → Retrieve → Completeness → Think → Audit → Structure) that enforces source-grounded, citation-backed due diligence analysis.
   - Built a self-improving prompt feedback loop based on reviewer edits, boosting relevance by **+23%** without model retraining.
   - Fault-tolerant ingestion pipeline for 15+ formats using PyMuPDF & Tesseract OCR with **94% retrieval recall** via hybrid Pinecone indexing.
   - **Stack:** FastAPI, React, TypeScript, Pinecone, Groq, Docker, AWS.

2. **[MOM-ai](https://meeting-assistant-mom.streamlit.app/)** — *Enterprise AI Meeting Assistant* ([GitHub](https://github.com/samadhanmane/MOM-ai))
   - End-to-end neural meeting intelligence platform combining acoustic feature representation learning, automatic speech recognition, and instruction-tuned NLP reasoning.
   - Standardizes 16kHz audio into Log-Mel spectrogram matrices (64 mels × 128 frames) evaluated through custom-trained Autoencoder (25.34 dB PSNR, 0.974 SSIM) and VAE latent compression.
   - Speech-to-text driven by OpenAI Whisper (**0.000 WER** on Edinburgh AMI Meeting Corpus benchmark test split).
   - Structured reasoning & summarization via Google FLAN-T5 (**0.864 BERTScore**, 48.6% ROUGE-L) extracting timestamped diarized transcripts, executive summaries, ratified decisions, and completed action items.
   - **Stack:** Python 3.10, Streamlit, PyTorch, OpenAI Whisper, Google FLAN-T5, Plotly, Edinburgh AMI Meeting Corpus.

3. **[BookMyHall](https://book-my-hall.vercel.app/)** — *Multi-Tenant College Management Platform*
   - Enterprise facility management system powered by an autonomous transactional Gemini AI agent.
   - Distributed **5-minute concurrency locks** eliminating double-booking and race conditions.
   - 10-tier RBAC system with organization-isolated data and multi-stage approval hierarchies.
   - **Stack:** React, Node.js, Express.js, MongoDB Atlas, Gemini API, TailwindCSS.

---

## 🌐 Open Source Contributions

- **[PipeHub AI](https://github.com/pipeshub-ai/pipeshub-ai) — LLM Reasoning Configuration ([PR #3290](https://github.com/pipeshub-ai/pipeshub-ai/pull/3290))**
  - Contributed a fix to PipeHub AI's Python backend for Issue #3201 (`defaultReasoningEffort` not honored at model level).
  - Implemented 3-tier fallback precedence: `per-request override → model-level default → platform default`.
  - Added support for both root-level and nested configuration schemas.
  - Verified with **195/195 passing tests** (5/5 E2E integration, 190/190 unit tests); CodeRabbit review resolved.
  - **Technologies:** Python, Pytest, LLM Integration, Git, GitHub.

---

## 🛠️ Technical Stack & Tooling

- **AI / LLM Orchestration:** Agentic AI, RAG Pipelines, LangChain, LangGraph, LLM Integration, Prompt Engineering, Fine-Tuning, Transformers, Hugging Face
- **Data & Vector Stores:** Pinecone, ChromaDB, MongoDB Atlas, PostgreSQL, Semantic Chunking
- **Languages:** Python (FastAPI), TypeScript, JavaScript, SQL, Java, C++
- **Frameworks & Libraries:** TensorFlow, Keras, NumPy, Pandas, Scikit-learn, React 18, TailwindCSS
- **Deployment & Cloud:** AWS (EC2, S3), Docker, Git, GitHub Actions, Vercel

---

## 💻 Development & Building

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Compile production bundle
npm run build
```

---

## 📄 License

This project is licensed under the MIT License.

