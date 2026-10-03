import React from 'react';
import { Award, BookOpen, GraduationCap } from 'lucide-react';

const Education: React.FC = () => (
  <section id="education" className="bg-cream py-28 text-ink">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mb-14"><p className="section-kicker">Foundation</p><h2 className="section-title">Curious by training.<br /><span className="text-teal-700">Research-led by choice.</span></h2></div>
      <div className="grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
        <div className="rounded-2xl bg-ink p-8 text-white md:p-10"><GraduationCap size={28} className="text-teal-300" /><p className="mt-12 text-xs font-bold uppercase tracking-[.18em] text-teal-300">Sep 2025 — Present · Paris, France</p><h3 className="mt-3 font-display text-3xl">M2 Artificial Intelligence</h3><p className="mt-2 text-slate-300">Université Paris-Saclay</p><div className="mt-10 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2"><div><p className="text-sm text-slate-400">Research interests</p><p className="mt-2 text-sm leading-6 text-slate-200">Continual learning, multimodal systems, reliable AI, and reinforcement learning.</p></div><div><p className="text-sm text-slate-400">Languages</p><p className="mt-2 text-sm leading-6 text-slate-200">English (C1) · Urdu (native) · French (A1)</p></div></div></div>
        <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-10"><Award size={28} className="text-teal-700" /><p className="mt-12 text-xs font-bold uppercase tracking-[.18em] text-teal-700">Nov 2022 — Jul 2026 · Lahore, Pakistan</p><h3 className="mt-3 font-display text-3xl">BS Artificial Intelligence</h3><p className="mt-2 text-slate-600">University of Central Punjab</p><div className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1.5 text-sm font-bold text-teal-800"><Award size={15} /> Gold Medal · Merit Scholarship</div><p className="mt-6 text-sm leading-7 text-slate-600">Graduated with a 3.85 / 4.00 CGPA, building a foundation across machine learning, deep learning, computer vision, NLP, and statistical methods.</p></div>
      </div>
      <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-8 md:p-10"><div className="flex items-center gap-3"><BookOpen size={22} className="text-teal-700" /><h3 className="font-display text-2xl">Technical toolkit</h3></div><div className="mt-7 flex flex-wrap gap-2">{['Python', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Computer Vision', 'LLMs', 'Generative AI', 'Flask', 'Next.js', 'Docker', 'Git / GitHub', 'SQL', 'C++', 'LaTeX'].map((skill) => <span key={skill} className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">{skill}</span>)}</div></div>
    </div>
  </section>
);

export default Education;
