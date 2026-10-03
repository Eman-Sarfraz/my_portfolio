import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-ink text-slate-100">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-ink py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Eman Sarfraz. Building practical intelligence.</p>
          <p>Paris, France · Lahore, Pakistan</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
