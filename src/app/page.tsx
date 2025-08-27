// components/FuturisticPortfolio.jsx
'use client';

import { useState, useEffect, useRef } from 'react';

const FuturisticPortfolio = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [direction, setDirection] = useState('right');
  const [isAnimating, setIsAnimating] = useState(false);
  const prevTabRef = useRef('home');

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

  const handleTabChange = (tab:any) => {
    if (tab === activeTab || isAnimating) return;
    
    setIsAnimating(true);
    const tabs = ['home', 'skills', 'projects', 'contact'];
    const currentIndex = tabs.indexOf(activeTab);
    const newIndex = tabs.indexOf(tab);
    
    // Determine animation direction
    setDirection(newIndex > currentIndex ? 'left' : 'right');
    
    // Update previous tab reference
    prevTabRef.current = activeTab;
    
    // Change tab after a small delay to allow animation to start
    setTimeout(() => {
      setActiveTab(tab);
      setMobileMenuOpen(false);
    }, 100);
    
    // Reset animation state after transition completes
    setTimeout(() => setIsAnimating(false), 500);
  };

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

  // Animation classes based on direction
  const getAnimationClass = (tab:any) => {
    if (tab !== activeTab) return 'hidden';
    
    if (direction === 'right') {
      return 'animate-slide-in-right';
    } else {
      return 'animate-slide-in-left';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Add custom CSS for animations */}
      <style jsx global>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.5s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.5s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        /* Progress bar animation */
        .skill-bar {
          transition: width 1.5s ease-out;
        }
        
        /* Hover effects for project cards */
        .project-card {
          transition: all 0.3s ease;
        }
        
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px -5px rgba(16, 185, 129, 0.3);
        }
        
        /* Button hover effects */
        .gradient-button {
          background-size: 200% 100%;
          transition: background-position 0.5s ease;
        }
        
        .gradient-button:hover {
          background-position: 100% 0;
        }
      `}</style>

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
          <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-purple-500 bg-clip-text text-transparent animate-fade-in">
            DEV<span className="text-white">X</span>
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'skills', 'projects', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`relative py-2 text-sm uppercase tracking-wider font-medium ${
                  activeTab === tab ? 'text-emerald-400' : 'text-gray-400 hover:text-white'
                } transition-all duration-300`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-purple-500 animate-fade-in"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md border border-gray-700 text-gray-400 hover:text-white hover:border-emerald-500 transition-all duration-300"
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

        {/* Mobile Nav with animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-64' : 'max-h-0'}`}>
          <div className="px-4 pb-4 space-y-2 bg-black bg-opacity-90 border-t border-gray-800">
            {['home', 'skills', 'projects', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`block w-full text-left py-3 px-4 text-sm uppercase font-medium rounded-md ${
                  activeTab === tab 
                    ? 'text-emerald-400 bg-emerald-900/20' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                } transition-all duration-300 transform hover:translate-x-2`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content with Transitions */}
      <main className="relative z-10 container mx-auto px-4 py-12 overflow-hidden">
        {/* Home Section */}
        <div className={activeTab === 'home' ? getAnimationClass('home') : 'hidden'}>
          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Intro */}
              <div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                  Hi, I'm <span className="text-emerald-400">Robert Marquez</span>
                </h2>

                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 animate-fade-in">
                  I'm a passionate <span className="font-semibold text-white">Full Stack Web Developer</span> 
                  with a knack for crafting elegant and efficient digital solutions. With over 5 years of 
                  experience, I thrive on bringing ideas to life through clean, maintainable code and intuitive 
                  user interfaces. 
                </p>

                <div className="flex flex-wrap gap-4 animate-fade-in">
                  <button 
                    className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-lg font-medium text-sm sm:text-base gradient-button"
                    onClick={() => handleTabChange('projects')}
                  >
                    View Projects
                  </button>
                  <button className="px-6 py-3 border border-gray-700 rounded-lg font-medium text-sm sm:text-base hover:border-emerald-500 transition-all duration-300 transform hover:-translate-y-1">
                    Download CV
                  </button>
                </div>
              </div>

              {/* Visual */}
              <div className="relative flex justify-center md:justify-end">
                <div className="aspect-square w-64 sm:w-80 md:w-96 rounded-full bg-gradient-to-br from-emerald-500/10 to-purple-500/10 p-12 flex items-center justify-center animate-fade-in">
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
        </div>

        {/* Skills Section */}
        <div className={activeTab === 'skills' ? getAnimationClass('skills') : 'hidden'}>
          <section className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center animate-fade-in">
              <span className="bg-gradient-to-r from-emerald-400 to-purple-500 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-gray-900 bg-opacity-50 rounded-xl p-6 border border-gray-800 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between mb-2 text-sm sm:text-base">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-emerald-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-purple-500 skill-bar"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Projects Section */}
        <div className={activeTab === 'projects' ? getAnimationClass('projects') : 'hidden'}>
          <section className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center animate-fade-in">
              <span className="bg-gradient-to-r from-emerald-400 to-purple-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-900 bg-opacity-50 rounded-xl p-6 border border-gray-800 project-card animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4 h-48 bg-gradient-to-br from-emerald-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                    <div className="text-5xl opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                      <i className="fas fa-code"></i>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-emerald-900/30 text-emerald-400 rounded-full text-xs transition-all duration-300 hover:bg-emerald-900/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Contact Section */}
        <div className={activeTab === 'contact' ? getAnimationClass('contact') : 'hidden'}>
          <section className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center animate-fade-in">
              <span className="bg-gradient-to-r from-emerald-400 to-purple-500 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-bold mb-6 animate-fade-in">Contact Information</h3>
                <div className="space-y-4">
                  {[
                    { icon: 'envelope', platform: 'Email', value: 'contact@devx.example', color: 'emerald' },
                    { icon: 'phone', platform: 'Phone', value: '+1 (555) 123-4567', color: 'purple' },
                    { icon: 'map-marker-alt', platform: 'Location', value: 'San Francisco, CA', color: 'emerald' }
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-4 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={`w-12 h-12 rounded-full bg-${item.color}-900/30 flex items-center justify-center transition-all duration-300 hover:scale-110`}>
                        <i className={`fas fa-${item.icon} text-${item.color}-400`}></i>
                      </div>
                      <div>
                        <p className="text-gray-400">{item.platform}</p>
                        <p>{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <h4 className="text-xl font-bold mb-4 animate-fade-in">Follow Me</h4>
                  <div className="flex space-x-4">
                    {['github', 'twitter', 'linkedin', 'dribbble'].map((platform, index) => (
                      <a
                        key={platform}
                        href="#"
                        className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <i className={`fab fa-${platform}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-900 bg-opacity-50 rounded-xl p-8 border border-gray-800 animate-fade-in">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form className="space-y-6">
                  <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <label className="block text-gray-400 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition-all duration-300"
                    />
                  </div>
                  <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <label className="block text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition-all duration-300"
                    />
                  </div>
                  <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <label className="block text-gray-400 mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition-all duration-300"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-lg font-medium gradient-button animate-fade-in"
                    style={{ animationDelay: '0.4s' }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 bg-black bg-opacity-70 backdrop-blur-md py-8">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm animate-fade-in">
          <p>© {new Date().getFullYear()} DevX Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FuturisticPortfolio;
