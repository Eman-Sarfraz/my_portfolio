import React from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(127,231,218,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(127,231,218,.12)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute -right-40 top-20 h-[30rem] w-[30rem] rounded-full bg-teal-500/10 blur-3xl" />
      <div className="relative mx-auto flex min-h-[720px] max-w-6xl items-center px-6 pb-20 pt-32">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-300/30 bg-teal-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[.18em] text-teal-200">
            <span className="h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_12px_#7fe7da]" /> Open to research, internships & roles
          </div>
          <p className="mb-5 text-sm font-medium uppercase tracking-[.22em] text-teal-300">AI Engineer · Researcher · Builder</p>
          <h1 className="max-w-4xl font-display text-5xl leading-[.98] tracking-tight text-white sm:text-7xl lg:text-8xl">Building AI that learns, sees, and <span className="text-teal-300">creates impact.</span></h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">I’m Eman Sarfraz, an M2 Artificial Intelligence student at Université Paris-Saclay. I work across machine learning, deep learning, computer vision, reinforcement learning, and LLM-powered systems.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button onClick={scrollToProjects} className="inline-flex items-center gap-2 rounded-full bg-teal-300 px-6 py-3.5 text-sm font-bold text-ink transition hover:-translate-y-1 hover:bg-teal-200">Explore my work <ArrowDown size={17} /></button>
            <a href="https://github.com/Eman-Sarfraz?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-teal-300 hover:text-teal-200">View my work <ArrowUpRight size={17} /></a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-5 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2"><MapPin size={15} className="text-teal-300" /> Paris, France</span>
            <a href="mailto:eman.sarfraz@universite-paris-saclay.fr" className="inline-flex items-center gap-2 transition hover:text-teal-200"><Mail size={15} className="text-teal-300" /> Academic email</a>
            <a href="https://www.linkedin.com/in/eman-sarfraz-146a8728a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-teal-200"><Linkedin size={17} /></a>
            <a href="https://github.com/Eman-Sarfraz?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition hover:text-teal-200"><Github size={17} /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
