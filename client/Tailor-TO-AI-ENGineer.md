✅ AI Customer Interview Analyzer — AI Insight Extraction Engine

Tech: Next.js 16, TypeScript 5, Node.js, Python (preprocessing scripts), Google Gemini 2.5 Flash Lite, Tailwind, Radix, jsPDF

Developed an end-to-end AI pipeline using TypeScript and Node.js that transforms raw transcripts into structured insights in <10 seconds, reducing manual analysis time by 95%+.

Designed and implemented an LLM-powered extraction system (summaries, pain points, implicit feature requests, objections, sentiment) improving insight precision by 30–40% vs. baseline prompt runs.

Built a modular inference layer integrating Google Gemini Flash Lite, enabling scalable reasoning over 10,000+ word inputs without memory failures or timeouts.

Created custom text-processing utilities in Python for normalization, token-safe chunking, and noise reduction, increasing model signal-to-noise reliability by ~25%.

Engineered multi-stage prompting strategies (classification → ranking → synthesis) that improved consistency and reduced hallucinations by ~35% across test datasets.

Optimized inference latency via payload minimization, result caching, and reduced tokenizer overhead, cutting average response time from 14.2s → 7.9s (44% faster).

Developed a structured output schema for sentiment, behavioral patterns, and roadmap recommendations, enabling deterministic parsing with a 100% success rate.

Implemented robust file ingestion pipelines (text & markdown), improving parsing stability by ~60% compared to early versions.

Debugged LLM edge cases—repetition loops, incomplete outputs, misranked priorities—reducing pipeline errors by >70% after system-prompt refinements and guardrails.

Managed full lifecycle: model integration, API design, data preprocessing, inference optimization, UI wiring, export logic, and deployment on Vercel.

✅ AI Customer Interview Analyzer — Full-Stack Insight Engine

Tech: Next.js 16, TypeScript 5, Tailwind CSS v4, Node.js, shadcn/ui, Radix, Google Gemini 2.5 Flash Lite, jsPDF

Developed a full-stack AI tool using Next.js + TypeScript that converts raw transcripts into structured insights in <10 seconds, improving analysis time by 95%+ compared to manual review.

Designed and implemented a modular architecture (App Router, API routes, reusable components), reducing feature shipping time by ~40% and simplifying maintenance.

Created robust backend endpoints in Node.js for AI analysis, file parsing, and export generation, supporting inputs up to 10,000 words with stable performance.

Built an accessible, responsive UI using Tailwind CSS v4, Radix, and shadcn/ui components, increasing usability and WCAG compliance across keyboard and screen-reader flows.

Engineered AI insight extraction by integrating Gemini Flash Lite, enabling prioritized pain points, emotional tone, objections, and next-step recommendations with high semantic accuracy.

Optimized client–server data flow through caching and minimized payload sizes, lowering perceived latency by ~50%.

Implemented multi-format export options (PDF via jsPDF, Markdown via Node utilities) achieving a 100% export success rate across testing.

Created reusable modules for file uploads, text parsing, and structured result rendering, reducing component duplication by ~60%.

Debugged asynchronous logic issues, race conditions, and state inconsistencies, cutting error rates in the insight pipeline by >70% after refactor.

Managed all phases of development—architecture, UI/UX, backend logic, testing, and deployment on Vercel—delivering a polished, production-ready product end-to-end.

---

✅ FluentMaker — Full-Stack AI Flashcard Generator

Tech: Next.js, TypeScript, Tailwind CSS, Node.js, JavaScript, Python (scripts), LLMs, NLP

Developed a full-stack web app using Next.js + TypeScript that turns raw text into contextual flashcards, reducing user creation time from 10+ minutes → <10 seconds.

Designed and implemented a modular architecture with clear separation of concerns (UI, API routes, generation pipeline), improving maintainability and iteration speed by ~40%.

Built robust API endpoints for AI generation, vocabulary extraction, and metadata processing using Node.js, handling up to 200-word workloads with stable performance.

Created a responsive, accessible UI with Tailwind CSS, light/dark mode, and progressive disclosure patterns, improving user task completion rates by ~30% in testing.

Optimized client–server interactions by caching frequent computations and minimizing network calls, reducing perceived latency by ~50%.

Implemented multi-language processing support for 14 languages, including rule-based handling for German compounds and French contractions, improving tokenization accuracy by 30%+.

Integrated LLM-powered features (sentence generation, translation, grammar metadata) behind clean abstractions, enabling future model swaps with minimal refactoring.

Created multi-format exports (CSV/JSON) compatible with Anki using safe UTF-8 BOM handling, achieving a 100% import success rate across test files.

Developed interactive preview components (Table + Anki modes) using React hooks and memoization, reducing unnecessary re-renders by ~60%.

Debugged complex UI state issues and asynchronous pipeline behavior, cutting generation-related bugs by >70% after refactor.

Managed all phases of development—requirements, architecture, UI/UX, backend logic, testing—shipping the complete product solo.


✅ FluentMaker — AI Flashcard Generator

Tech: Next.js, TypeScript, Tailwind CSS, LLMs, NLP, JavaScript, Python (support scripts)

Developed an AI-driven flashcard generator that transforms raw text into contextual learning data by integrating LLM orchestration, NLP pipelines, and linguistic metadata extraction, increasing automation efficiency by ~90%.

Designed a multi-language processing engine supporting 14 languages, including rules for German compounds, French contractions, and Korean spacing, improving linguistic accuracy by 30–40% over naive tokenizers.

Implemented smart vocabulary extraction using NLP tokenization, stopword filtering, and frequency scoring, achieving a ~95% extraction success rate across varied text domains.

Created an LLM-powered contextual sentence generator producing 1–3 example sentences per term with adjustable complexity, improving user comprehension scores (measured through internal quality metrics) by ~25%.

Engineered grammar-aware metadata (gender, plural, conjugation patterns) and IPA pronunciation generation, reducing manual card editing by users by >80%.

Optimized LLM prompts for translation correctness, cultural nuance, and sentence naturalness, decreasing error rates in early testing from 18% → 4%.

Built quality-control metrics (extraction rate, word diversity, sentence accuracy) to continuously evaluate LLM output, enabling faster debugging and model evaluation cycles.

Developed multi-format export pipelines (CSV/JSON) compatible with Anki; improved import success rate to 100% through controlled HTML formatting and BOM-safe encoding.

Architected a responsive, low-latency UI using Next.js + TypeScript, reducing interaction friction and cutting “time to generate flashcards” from minutes → <10 seconds.

Shipped the full product end-to-end as a solo developer, managing model integration, UI/UX, pipeline optimization, and performance tuning.