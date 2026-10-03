import React from 'react';
import { ArrowUpRight, Briefcase } from 'lucide-react';

interface ExperienceItem { role: string; organization: string; period: string; detail: string; }

const experiences: ExperienceItem[] = [
  { role: 'Artificial Intelligence Consultant', organization: 'Nexariza', period: 'Aug 2025 — Present', detail: 'Translating machine learning ideas into practical solutions while contributing to AI product and strategic initiatives.' },
  { role: 'Machine Learning Intern', organization: 'Elevvo Pathways', period: 'Jul 2025 — Aug 2025', detail: 'Built predictive PyTorch and Scikit-learn classification baselines and automated validation metrics across experimental splits.' },
  { role: 'Vice President', organization: 'IEEE UCP Student Branch', period: 'Sep 2024 — Aug 2025', detail: 'Directed technical initiatives, workshops, and an executive team of 10 while helping members turn learning into action.' },
  { role: 'Machine Learning Intern', organization: 'CodeAlpha', period: 'Aug 2024', detail: 'Built end-to-end preprocessing and augmentation pipelines in NumPy and Pandas for benchmark neural models.' },
  { role: 'Intern', organization: 'Shaukat Khanum Memorial Cancer Hospital', period: 'Mar 2024 — Apr 2024', detail: 'Supported data-driven communication and campaign work in a mission-focused healthcare environment.' },
];

const Experience: React.FC = () => (
  <section id="experience" className="bg-slate-100 py-28 text-ink">
    <div className="mx-auto max-w-6xl px-6">
      <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
        <div><p className="section-kicker">The journey</p><h2 className="section-title">From <span className="text-teal-700">experiments</span> to impact.</h2><p className="mt-6 max-w-sm leading-7 text-slate-600">Experience across research, product thinking, and community leadership has taught me to make technical work useful, explainable, and collaborative.</p><a href="https://www.linkedin.com/in/eman-sarfraz-146a8728a/" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-ink underline decoration-teal-400 decoration-2 underline-offset-4">View LinkedIn <ArrowUpRight size={16} /></a></div>
        <div className="space-y-0 border-l border-slate-300 pl-7 md:pl-10">{experiences.map((item) => <div key={`${item.organization}-${item.role}`} className="relative border-b border-slate-300 py-7 first:pt-0 last:border-0"><span className="absolute -left-[2.05rem] top-8 h-3 w-3 rounded-full border-2 border-slate-100 bg-teal-600 md:-left-[2.55rem]" /><div className="flex flex-col justify-between gap-2 md:flex-row md:items-start"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-teal-700">{item.organization}</p><h3 className="mt-2 font-display text-2xl">{item.role}</h3></div><span className="text-sm font-medium text-slate-500">{item.period}</span></div><p className="mt-3 max-w-2xl leading-7 text-slate-600">{item.detail}</p></div>)}</div>
      </div>
      <div className="mt-20 grid gap-4 sm:grid-cols-3"><div className="rounded-2xl bg-ink p-6 text-white"><Briefcase className="mb-8 text-teal-300" size={22} /><p className="font-display text-3xl">5+</p><p className="mt-2 text-sm text-slate-400">roles across AI, research, and leadership</p></div><div className="rounded-2xl border border-slate-200 bg-white p-6"><p className="font-display text-3xl text-teal-700">10</p><p className="mt-2 text-sm text-slate-600">team members led as IEEE Vice President</p></div><div className="rounded-2xl border border-slate-200 bg-white p-6"><p className="font-display text-3xl text-teal-700">3.85</p><p className="mt-2 text-sm text-slate-600">/ 4.00 CGPA with Academic Gold Medal</p></div></div>
    </div>
  </section>
);

export default Experience;
