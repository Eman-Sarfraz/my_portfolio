import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-beige-50">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Gradient Blobs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse animation-delay-200"></div>
        <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-gradient-to-r from-teal-400/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse animation-delay-400"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-beige-400/15 to-cyan-400/15 rounded-full blur-2xl animate-pulse animation-delay-600"></div>
        
        {/* Neural Network Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="neuralGrid" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="currentColor" className="text-gray-400">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
              </circle>
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-300"/>
            </pattern>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6b7280" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#neuralGrid)" />
          
          {/* Animated Neural Connections */}
          <g className="animate-pulse">
            <line x1="100" y1="200" x2="300" y2="150" stroke="url(#neuralGradient)" strokeWidth="2" opacity="0.4">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
            </line>
            <line x1="300" y1="150" x2="500" y2="250" stroke="url(#neuralGradient)" strokeWidth="2" opacity="0.4">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2.5s" repeatCount="indefinite" />
            </line>
            <line x1="200" y1="400" x2="400" y2="300" stroke="url(#neuralGradient)" strokeWidth="2" opacity="0.4">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" />
            </line>
            <line x1="600" y1="200" x2="800" y2="350" stroke="url(#neuralGradient)" strokeWidth="2" opacity="0.4">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="1.8s" repeatCount="indefinite" />
            </line>
          </g>
          
          {/* Neural Nodes */}
          <circle cx="100" cy="200" r="4" fill="#22d3ee" opacity="0.6">
            <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="300" cy="150" r="4" fill="#6b7280" opacity="0.6">
            <animate attributeName="r" values="3;6;3" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="500" cy="250" r="4" fill="#22d3ee" opacity="0.6">
            <animate attributeName="r" values="3;6;3" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="800" cy="350" r="4" fill="#6b7280" opacity="0.6">
            <animate attributeName="r" values="3;6;3" dur="1.8s" repeatCount="indefinite" />
          </circle>
        </svg>

        {/* Floating Geometric Elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 border-2 border-cyan-400/60 rotate-45 animate-bounce opacity-40"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 border-2 border-gray-400/60 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/5 w-5 h-5 bg-gradient-to-r from-cyan-400/60 to-gray-400/60 rotate-12 animate-spin opacity-40" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-beige-400/60 rounded-full animate-ping opacity-40"></div>

        {/* Interactive Mouse Follower */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-400/5 to-gray-400/5 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>

        {/* Additional Geometric Patterns */}
        <div className="absolute top-16 right-20 w-8 h-8 border border-gray-300/50 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 left-16 w-6 h-6 border-2 border-cyan-400/40 rounded-full animate-bounce animation-delay-400"></div>
        <div className="absolute top-1/2 left-10 w-4 h-4 bg-gray-400/30 transform rotate-45 animate-pulse animation-delay-800"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-16 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up">
            <span className="font-playfair italic bg-gradient-to-r from-gray-800 via-cyan-600 to-gray-700 bg-clip-text text-transparent drop-shadow-lg">
              Eman Sarfraz
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-2xl md:text-3xl lg:text-4xl text-gray-600 mb-16 animate-fade-in-up animation-delay-200 font-light leading-tight">
            <span className="italic bg-gradient-to-r from-cyan-600 to-gray-600 bg-clip-text text-transparent">
              AI Engineer
            </span>
          </p>

          {/* About Me Section */}
          <div className="max-w-5xl mx-auto animate-fade-in-up animation-delay-400">
            <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-500">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 left-4 w-16 h-16 border-2 border-cyan-400 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
                <div className="absolute top-8 right-8 w-12 h-12 border-2 border-purple-400 rotate-45 animate-pulse"></div>
                <div className="absolute bottom-6 left-8 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-bounce animation-delay-200"></div>
                <div className="absolute bottom-8 right-12 w-6 h-6 border border-gray-400 rotate-12 animate-pulse animation-delay-400"></div>
                
                {/* Flowing Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                  <path d="M 50 150 Q 200 50 350 150" stroke="url(#aboutGradient)" strokeWidth="2" fill="none" opacity="0.3">
                    <animate attributeName="stroke-dasharray" values="0,1000;1000,0;0,1000" dur="4s" repeatCount="indefinite" />
                  </path>
                  <path d="M 50 200 Q 200 250 350 200" stroke="url(#aboutGradient)" strokeWidth="2" fill="none" opacity="0.3">
                    <animate attributeName="stroke-dasharray" values="1000,0;0,1000;1000,0" dur="5s" repeatCount="indefinite" />
                  </path>
                  <defs>
                    <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="50%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              
              {/* Glowing Corner Accents */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-br-full"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-purple-400/20 to-transparent rounded-tl-full"></div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
                <span className="relative">
                  About Me
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
                </span>
              </h3>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
                  I'm Eman Sarfraz, an AI Engineer with expertise in Machine Learning, Deep Learning, 
                  and Computer Vision. I specialize in building intelligent 
                  systems that can see, understand, and predict with remarkable accuracy.
                </p>
                
                <div className="flex flex-wrap justify-center gap-3 my-6">
                  {['Machine Learning', 'Deep Learning', 'Computer Vision'].map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:border-cyan-400 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-purple-50 hover:text-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in-up"
                      style={{ animationDelay: `${600 + index * 100}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
                  My work combines technical expertise with creative problem-solving, delivering 
                  high-accuracy models that create real-world impact. I'm passionate about pushing 
                  the boundaries of AI to create scalable, accessible solutions that transform businesses 
                  and simplify lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;