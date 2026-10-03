import React from 'react';
import { ArrowUpRight, ExternalLink, Github, Star } from 'lucide-react';

interface Project { title: string; description: string; tags: string[]; github?: string; demo?: string; featured?: boolean; }

const projects: Project[] = [
  { title: 'Detectra AI', description: 'Multimodal video intelligence platform combining object recognition, action recognition, and audio analysis in one practical workflow.', tags: ['Multimodal AI', 'Vision Transformers', 'Audio Analysis'], demo: 'https://detectra-ai.vercel.app/', featured: true },
  { title: 'Continual Learning Benchmark', description: 'Research benchmark comparing continual-learning architectures under distribution shifts, with emphasis on robustness and adaptation.', tags: ['Research', 'Continual Learning', 'Evaluation'], github: 'https://github.com/Eman-Sarfraz/Continual-Learning-Benchmark-TRACE', featured: true },
  { title: 'HUAC — Offline RL', description: 'Uncertainty-aware offline reinforcement learning with deep ensemble epistemic uncertainty, IQ-LS regression, and portfolio optimization.', tags: ['Offline RL', 'Uncertainty', 'Deep Ensembles'], github: 'https://github.com/Eman-Sarfraz/Offline-RL-Research-HUAC', featured: true },
  { title: 'AI Shopping Advisor', description: 'LangGraph-powered agent that decomposes user requirements and combines structured product information with pricing data.', tags: ['LLM Agents', 'LangGraph', 'Recommendations'], github: 'https://github.com/Eman-Sarfraz' },
  { title: 'NewsNova AI Aggregator', description: 'Automated news ingestion, semantic deduplication, and LLM-based article summarization backed by scheduled data workflows.', tags: ['NLP', 'LLMs', 'PostgreSQL'], github: 'https://github.com/Eman-Sarfraz/newsnova-AI-news-aggregator-project' },
  { title: 'Prostate Cancer Detection', description: 'Deep learning pipeline for prostate cancer malignancy classification from MRI scans, including preprocessing and deployment work.', tags: ['Medical AI', 'Deep Learning', 'Flask'], github: 'https://github.com/Eman-Sarfraz/Prostate-Cancer-detection' },
];

const Projects: React.FC = () => (
  <section id="projects" className="bg-cream py-28 text-ink">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div><p className="section-kicker">Selected work</p><h2 className="section-title">Research with a<br /><span className="text-teal-700">working prototype.</span></h2></div>
        <p className="max-w-md text-base leading-7 text-slate-600">A focused selection of experiments and applications that show how I think: rigorous about the model, practical about the outcome.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article key={project.title} className={`group relative flex min-h-[290px] flex-col overflow-hidden rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${project.featured ? 'border-ink bg-ink text-white md:col-span-1' : 'border-slate-200 bg-white'}`}>
            <div className="mb-10 flex items-center justify-between"><span className={`font-mono text-xs ${project.featured ? 'text-teal-300' : 'text-teal-700'}`}>0{index + 1} / PROJECT</span>{project.featured && <Star size={17} className="text-teal-300" />}</div>
            <h3 className="font-display text-2xl leading-tight">{project.title}</h3>
            <p className={`mt-3 text-sm leading-6 ${project.featured ? 'text-slate-300' : 'text-slate-600'}`}>{project.description}</p>
            <div className="mt-auto flex flex-wrap gap-2 pt-6">{project.tags.map((tag) => <span key={tag} className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${project.featured ? 'bg-white/10 text-teal-100' : 'bg-slate-100 text-slate-600'}`}>{tag}</span>)}</div>
            <div className="mt-5 flex gap-4 text-sm font-semibold">{project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1.5 ${project.featured ? 'text-teal-300' : 'text-ink hover:text-teal-700'}`}>GitHub <Github size={14} /></a>}{project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-teal-700">Live demo <ExternalLink size={14} /></a>}</div>
          </article>
        ))}
      </div>
      <div className="mt-10 text-center"><a href="https://github.com/Eman-Sarfraz?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-ink underline decoration-teal-400 decoration-2 underline-offset-4 transition hover:text-teal-700">See all repositories <ArrowUpRight size={16} /></a></div>
    </div>
  </section>
);

export default Projects;
