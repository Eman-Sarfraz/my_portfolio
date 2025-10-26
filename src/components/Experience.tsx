import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements?: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Chief Operating Officer (COO)",
      company: "Nexariza AI",
      period: "2025 – Present",
      description: "Leading operations and strategic initiatives at an AI startup focused on innovative machine learning solutions.",
      achievements: [
        "Overseeing operational strategy and business development",
        "Managing cross-functional teams and project delivery",
        "Driving AI product development and market expansion"
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "Elevvo Pathways",
      period: "2025",
      description: "Designed & deployed ML pipelines, optimized models for scalability.",
      achievements: [
        "Built robust ML pipelines for production environments",
        "Implemented model optimization techniques",
        "Enhanced system scalability and performance"
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "Code Alpha",
      period: "2024",
      description: "Built TensorFlow forecasting models with CI/CD integration.",
      achievements: [
        "Achieved +18% accuracy improvement in forecasting models",
        "Implemented CI/CD pipelines for model deployment",
        "Developed TensorFlow-based prediction systems"
      ]
    },
    {
      title: "Vice President of IEEE UCP Student Branch",
      company: "IEEE UCP",
      period: "Sep 2024 – Aug 2025",
      description: "Lead and directed all technical and educational initiatives for the branch, including the successful execution of multiple workshops and contests.",
      achievements: [
        "Demonstrated strong leadership by managing and mentoring a high-performing team of 10",
        "Successfully executed multiple workshops and contests",
        "Enhanced member technical skills and achieved organizational goals"
      ]
    },
    {
      title: "Co Lead Strategic Operations",
      company: "Innovation & Entrepreneurship Club",
      period: "Oct 2025 – Current",
      description: "Drive the club's long-term vision by developing strategic frameworks for innovation initiatives. My role involves planning and optimizing operational processes to maximize outreach and support for aspiring student entrepreneurs.",
      achievements: [
        "Developed strategic frameworks for innovation initiatives",
        "Optimized operational processes for maximum outreach",
        "Enhanced support systems for aspiring student entrepreneurs"
      ]
    },
    {
      title: "Marketing Intern",
      company: "Shaukat Khanum Hospital",
      period: "2024",
      description: "Enhanced donor engagement through data-driven campaigns.",
      achievements: [
        "Increased donor engagement by +15%",
        "Implemented data-driven marketing strategies",
        "Developed targeted campaign analytics"
      ]
    },
    {
      title: "Organizer",
      company: "UCP Takra",
      period: "Jan 2025 – Feb 2025",
      description: "Hosted and organized a dedicated segment, Somowar for the university's largest annual event Takaara UCP.",
      achievements: [
        "Directed a 6-member team through all stages of planning and execution",
        "Successfully delivered a high-profile competitive event",
        "Managed comprehensive event logistics and coordination"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair italic text-gray-800 mb-6">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-600">
              A journey through AI consulting, machine learning development, and leadership roles.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-gray-300"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 animate-fade-in-up ${
                  index % 2 === 0 ? 'md:ml-8' : 'md:mr-8 md:text-right'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className={`absolute w-4 h-4 bg-cyan-500 rounded-full border-4 border-white shadow-lg ${
                  index % 2 === 0 
                    ? 'left-2 md:left-auto md:-right-2' 
                    : 'left-2 md:left-auto md:-left-2'
                }`}></div>

                {/* Experience Card */}
                <div className={`ml-12 md:ml-0 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2 text-cyan-600">
                      <Briefcase size={20} />
                      <span className="text-sm font-medium">{exp.company}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  {exp.achievements && (
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;