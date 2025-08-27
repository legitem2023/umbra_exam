// components/FuturisticPortfolio.jsx
'use client';

import { useState, useEffect } from 'react';

const FuturisticPortfolio = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Add Font Awesome CSS
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Skills Data
  const skills = [
    { name: 'React/Next.js', level: 95 },
    { name: 'Node.js', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'MongoDB', level: 80 },
    { name: 'CSS/Tailwind', level: 95 },
    { name: 'AWS', level: 75 },
  ];

  // Projects Data
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      tags: ['Next.js', 'Stripe', 'MongoDB'],
    },
    {
      title: 'AI Content Generator',
      description: 'AI-powered content creation tool with GPT integration',
      tags: ['React', 'OpenAI', 'Node.js'],
    },
    {
      title: 'Crypto Dashboard',
      description: 'Real-time cryptocurrency tracking dashboard',
      tags: ['Next.js', 'WebSocket', 'Chart.js'],
    },
    {
      title: 'Task Management App',
      description: 'Productivity app with team collaboration features',
      tags: ['React', 'Firebase', 'Material UI'],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Animation */}
      <div className="fixed inset-0 z-0 opacity-20">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-emerald-500 to-purple-500 animate-pulse"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-gray-800 bg-black bg-opacity-70 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-purple-500 bg-clip-text text-transparent">
            DEV<span className="text-white">X</span>
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'skills', 'projects', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative py-2 text-sm uppercase tracking-wider font-medium ${
                  activeTab === tab ? 'text-emerald-400' : 'text-gray-400 hover:text-white'
                } transition-colors`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-purple-500"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button - Fixed visibility */}
          <button
            className="md:hidden p-2 rounded-md border border-gray-700 text-gray-400 hover:text-white hover:border-emerald-500 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <i className="fas fa-times text-xl"></i>
            ) : (
              <i className="fas fa-bars text-xl"></i>
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2 bg-black bg-opacity-90 border-t border-gray-800">
            {['home', 'skills', 'projects', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-3 px-4 text-sm uppercase font-medium rounded-md ${
                  activeTab === tab 
                    ? 'text-emerald-400 bg-emerald-900/20' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                } transition-colors`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Rest of your content remains the same */}
      <main className="relative z-10 container mx-auto px-4 py-12">
        {/* Home Section */}
        {activeTab === 'home' && (
          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Intro */}
              <div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Hi, I'm <span className="text-emerald-400">Robert Marquez</span>
                </h2>

                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                  I'm a passionate <span className="font-semibold text-white">Full Stack Web Developer</span> 
                  with a knack for crafting elegant and efficient digital solutions. With over 5 years of 
                  experience, I thrive on bringing ideas to life through clean, maintainable code and intuitive 
                  user interfaces. 
                </p>

                <div className="flex flex-wrap gap-4">
                  <button 
                    className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-lg font-medium text-sm sm:text-base"
                    onClick={() => setActiveTab('projects')}
                  >
                    View Projects
                  </button>
                  <button className="px-6 py-3 border border-gray-700 rounded-lg font-medium text-sm sm:text-base hover:border-emerald-500 transition-colors">
                    Download CV
                  </button>
                </div>
              </div>

              {/* Visual */}
              <div className="relative flex justify-center md:justify-end">
                <div className="aspect-square w-64 sm:w-80 md:w-96 rounded-full bg-gradient-to-br from-emerald-500/10 to-purple-500/10 p-12 flex items-center justify-center">
                  <div className="w-full h-full rounded-full border-2 border-emerald-500/30 relative">
                    <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 animate-ping"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-purple-500 bg-clip-text text-transparent">
                        DEV X
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating accents */}
                <div className="absolute -top-4 -left-4 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-lg border border-emerald-500/30 animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-lg border border-purple-500/30 animate-pulse"></div>
              </div>
            </div>
          </section>
        )}

        {/* Skills Section */}
        {activeTab === 'skills' && (
          <section className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-emerald-400 to-purple-500 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-gray-900 bg-opacity-50 rounded-xl p-6 border border-gray-800"
                >
                  <div className="flex justify-between mb-2 text-sm sm:text-base">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-emerald-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-purple-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeTab === 'projects' && (
          <section className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-emerald-400 to-purple-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-900 bg-opacity-50 rounded-xl p-6 border border-gray-800 hover:border-emerald-500 transition-all duration-300 group"
                >
                  <div className="mb-4 h-48 bg-gradient-to-br from-emerald-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                    <div className="text-5xl opacity-30 group-hover:opacity-50 transition-opacity">
                      <i className="fas fa-code"></i>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-emerald-900/30 text-emerald-400 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeTab === 'contact' && (
          <section className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-emerald-400 to-purple-500 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-900/30 flex items-center justify-center">
                      <i className="fas fa-envelope text-emerald-400"></i>
                    </div>
                    <div>
                      <p className="text-gray-400">Email</p>
                      <p>contact@devx.example</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center">
                      <i className="fas fa-phone text-purple-400"></i>
                    </div>
                    <div>
                      <p className="text-gray-400">Phone</p>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-900/30 flex items-center justify-center">
                      <i className="fas fa-map-marker-alt text-emerald-400"></i>
                    </div>
                    <div>
                      <p className="text-gray-400">Location</p>
                      <p>San Francisco, CA</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="text-xl font-bold mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    {['github', 'twitter', 'linkedin', 'dribbble'].map((platform) => (
                      <a
                        key={platform}
                        href="#"
                        className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-500 transition-colors"
                      >
                        <i className={`fab fa-${platform}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-900 bg-opacity-50 rounded-xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-400 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 bg-black bg-opacity-70 backdrop-blur-md py-8">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} DevX Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FuturisticPortfolio;
