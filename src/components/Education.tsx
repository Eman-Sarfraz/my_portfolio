import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const certifications = [
    "Machine Learning - Stanford University",
    "Introduction to Computer Vision and Image Processing - IBM",
    "Machine Learning Operations (MLOps) - Google Cloud Training",
    "AI in Project Management",
    "Fundamentals of LLMs - Hugging Face",
    "AI for Medical Diagnosis by Deep Learning.AI",
    "Problem Solving - HackerRank",
    "Basic Generative Adversarial Networks - DeepLearning.AI"
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-beige-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair italic text-gray-800 mb-6">
              Education & Certifications
            </h2>
            <p className="text-xl text-gray-600">
              Academic foundation and professional certifications in AI and machine learning.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <div className="animate-fade-in-up">
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-cyan-100 rounded-full">
                    <GraduationCap size={24} className="text-cyan-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Academic Background</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      BS Artificial Intelligence
                    </h4>
                    <p className="text-gray-600 mb-2">
                      University of Central Punjab
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>Graduation: June 2026</span>
                      </div>
                    </div>
                    <div className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full">
                      CGPA: 3.8/4.0
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h5 className="font-semibold text-gray-700 mb-3">Core Subjects</h5>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                      <span>• Machine Learning</span>
                      <span>• Deep Learning</span>
                      <span>• Computer Vision</span>
                      <span>• Natural Language Processing</span>
                      <span>• Data Structures</span>
                      <span>• Algorithm Analysis</span>
                      <span>• Statistics & Probability</span>
                      <span>• Linear Algebra</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="animate-fade-in-up animation-delay-200">
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-cyan-100 rounded-full">
                    <Award size={24} className="text-cyan-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Professional Certifications</h3>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-cyan-50 transition-colors duration-200"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{cert}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>For more certifications, visit my LinkedIn profile</span>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {['Stanford University', 'DeepLearning.AI', 'Google Cloud', 'IBM', 'Hugging Face', 'HackerRank'].map((platform) => (
                      <span
                        key={platform}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;