import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

const Contact: React.FC = () => (
  <section id="contact" className="bg-teal-300 py-28 text-ink">
    <div className="mx-auto max-w-6xl px-6">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
        <div><p className="section-kicker text-teal-950/70">Let’s start a conversation</p><h2 className="max-w-3xl font-display text-5xl leading-[1.02] tracking-tight sm:text-7xl">Have a problem worth researching?</h2><p className="mt-7 max-w-xl text-lg leading-8 text-teal-950/75">I’m currently open to AI research opportunities, internships, engineering roles, and PhD conversations. If the work sits at the intersection of learning and real-world impact, I’d love to hear about it.</p><a href="mailto:eman.sarfraz@universite-paris-saclay.fr" className="mt-9 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-white transition hover:bg-slate-800">Email me <ArrowUpRight size={17} /></a></div>
        <div className="space-y-3"><a href="mailto:eman.sarfraz@universite-paris-saclay.fr" className="flex items-center justify-between border-b border-teal-950/20 py-4 text-sm font-semibold transition hover:pl-2"><span className="flex items-center gap-3"><Mail size={18} /> eman.sarfraz@universite-paris-saclay.fr</span><ArrowUpRight size={16} /></a><a href="https://www.linkedin.com/in/eman-sarfraz-146a8728a/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border-b border-teal-950/20 py-4 text-sm font-semibold transition hover:pl-2"><span className="flex items-center gap-3"><Linkedin size={18} /> LinkedIn</span><ArrowUpRight size={16} /></a><a href="https://github.com/Eman-Sarfraz?tab=repositories" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border-b border-teal-950/20 py-4 text-sm font-semibold transition hover:pl-2"><span className="flex items-center gap-3"><Github size={18} /> GitHub repositories</span><ArrowUpRight size={16} /></a></div>
      </div>
    </div>
  </section>
);

export default Contact;
