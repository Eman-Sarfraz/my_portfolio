import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle, BarChart3 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'emansarfraz.tech@gmail.com',
      href: 'mailto:emansarfraz.tech@gmail.com',
      color: 'text-red-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Eman-Sarfraz',
      href: 'https://github.com/Eman-Sarfraz',
      color: 'text-gray-800'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/eman-sarfraz-146a8728a',
      href: 'https://linkedin.com/in/eman-sarfraz-146a8728a',
      color: 'text-blue-600'
    },
    {
      icon: BarChart3,
      label: 'Kaggle',
      value: 'kaggle.com/emansarfraz',
      href: 'https://www.kaggle.com/emansarfraz',
      color: 'text-cyan-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-beige-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair italic text-gray-800 mb-6">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to collaborate on your next AI project? I'd love to hear about your ideas 
              and discuss how we can work together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                {contactLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <div className={`p-3 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors duration-200`}>
                      <link.icon size={24} className={link.color} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 group-hover:text-cyan-600 transition-colors duration-200">
                        {link.label}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {link.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 p-6 bg-cyan-50 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-3">Available for:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    AI/ML Consulting Projects
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    Computer Vision Solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    Full-time Opportunities
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    Research
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    Technical Collaborations
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-up animation-delay-200">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Message Sent!</h4>
                    <p className="text-gray-600">Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-200 resize-vertical"
                        placeholder="Tell me about your project or idea..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-cyan-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-cyan-600 transition-colors duration-200 flex items-center justify-center gap-2 transform hover:scale-105"
                    >
                      <Send size={20} />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;