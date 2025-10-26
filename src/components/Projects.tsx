import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  accuracy?: string;
  github: string;
  tags: string[];
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Prostate Cancer Detection",
      description: "Diagnostic tool for medical images with research-based approach",
      accuracy: "90% precision",
      github: "https://github.com/Eman-Sarfraz/prostate-cancer-detection",
      tags: ["Computer Vision", "Medical AI", "Research"]
    },
    {
      title: "Handwritten Character Recognition",
      description: "CNN-based digit recognition system",
      accuracy: "98% accuracy",
      github: "https://github.com/Eman-Sarfraz/handwritten-character-recognition",
      tags: ["Deep Learning", "CNN", "OCR"]
    },
    {
      title: "Movie Revenue Prediction",
      description: "Ensemble ML models for box office forecasting",
      accuracy: "85% accuracy",
      github: "https://github.com/Eman-Sarfraz/movie-revenue-prediction",
      tags: ["Machine Learning", "Ensemble Methods", "Prediction"]
    },
    {
      title: "Gesture-Based Game Controller",
      description: "Real-time hand-tracking for controlling games",
      github: "https://github.com/Eman-Sarfraz/gesture-game-controller",
      tags: ["Computer Vision", "Real-time", "Gaming"]
    },
    {
      title: "WanderNest Travel Guide Platform",
      description: "Personalized travel recommender system",
      github: "https://github.com/Eman-Sarfraz/wandernest",
      tags: ["React", "Node.js", "APIs", "Vercel"]
    },
    {
      title: "Virtual Calculator (OCR-Based)",
      description: "Parses and evaluates hand-drawn math expressions",
      github: "https://github.com/Eman-Sarfraz/virtual-calculator",
      tags: ["OCR", "Computer Vision", "Math Processing"]
    },
    {
      title: "Morphological Operations Web App",
      description: "Browser-based tool for dilation/erosion filters",
      github: "https://github.com/Eman-Sarfraz/morphological-ops",
      tags: ["Web App", "Image Processing", "Computer Vision"]
    },
    {
      title: "Boutique Management System",
      description: "Inventory and sales automation system",
      github: "https://github.com/Eman-Sarfraz/boutique-management",
      tags: ["Full Stack", "Management System", "Automation"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair italic text-gray-800 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collection of AI and machine learning projects showcasing expertise in 
              computer vision, deep learning, and intelligent system development.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  {/* Project Header */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-cyan-600 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-500 transition-colors duration-200"
                    >
                      <Github size={20} />
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Accuracy Badge */}
                  {project.accuracy && (
                    <div className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                      {project.accuracy}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub Link */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4">
              Want to see more of my work?
            </p>
            <a
              href="https://github.com/Eman-Sarfraz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-gray-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Github size={20} />
              Visit My GitHub for More Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;