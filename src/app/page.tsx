// app/page.js
import React from 'react';

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-emerald-900 to-purple-900 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-emerald-800 to-purple-800 rounded-full filter blur-3xl opacity-20 animate-pulse-slower"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-emerald-700 to-purple-700 rounded-full filter blur-3xl opacity-15 animate-pulse-medium"></div>
        <div className="absolute bottom-1/4 left-1/3 w-60 h-60 bg-gradient-to-r from-purple-900 to-emerald-800 rounded-full filter blur-3xl opacity-15 animate-pulse-slow"></div>
      </div>
      
      {/* Grid Overlay */}
      <div className="fixed inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+PHBhdGggZD0iTTAgMEg1MFY1MEgwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')]"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-emerald-500/10 py-6 px-8 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wider">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-purple-500">NEXUS</span>
          <span className="text-white">STUDIO</span>
        </div>
        
        <div className="hidden md:flex space-x-10">
          {['Home', 'Projects', 'Services', 'About', 'Contact'].map((item) => (
            <a key={item} href="#" className="text-gray-300 hover:text-white transition-colors duration-300 group">
              {item}
              <span className="block h-0.5 bg-gradient-to-r from-emerald-400 to-purple-500 w-0 group-hover:w-full transition-all duration-500"></span>
            </a>
          ))}
        </div>
        
        <button className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 text-sm font-medium group">
          <span className="group-hover:tracking-widest transition-all">Get in Touch</span>
        </button>
      </nav>
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative z-10 pt-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-16 md:mb-0">
            <div className="text-sm uppercase tracking-[0.3em] text-emerald-400 mb-4">Innovative Digital Experiences</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block">Crafting</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-purple-500">Futuristic</span>
              <span>Digital Luxury</span>
            </h1>
            <p className="text-gray-300 text-lg mb-10 max-w-xl">
              We create premium digital experiences that blend cutting-edge technology with elegant design. 
              Our work transforms visions into immersive realities for the most discerning clients.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 text-base font-medium group">
                <span className="group-hover:tracking-wider transition-all">View Projects</span>
              </button>
              <button className="px-8 py-3.5 border border-emerald-500/30 rounded-full hover:bg-emerald-500/5 transition-all duration-300 text-base font-medium">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-emerald-500/10 to-purple-600/10 absolute -top-10 -left-10 animate-pulse"></div>
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-emerald-500/10 to-purple-600/10 absolute -bottom-10 -right-10 animate-pulse"></div>
              
              <div className="relative bg-black/30 backdrop-blur-lg border border-emerald-500/20 rounded-2xl overflow-hidden w-[420px] h-[420px] shadow-2xl shadow-emerald-500/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-r from-emerald-500/20 to-purple-600/20 animate-ping opacity-10"></div>
                </div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center p-10">
                  <div className="text-emerald-400 text-2xl font-bold mb-4">Digital Innovation</div>
                  <div className="grid grid-cols-3 gap-4">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="bg-black/40 backdrop-blur-sm border border-emerald-500/10 rounded-xl w-20 h-20 flex items-center justify-center">
                        <div className={`w-8 h-8 rounded-full ${i % 3 === 0 ? 'bg-emerald-500/30' : i % 3 === 1 ? 'bg-purple-500/30' : 'bg-emerald-500/20'}`}></div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <div className="text-xl font-light mb-2">Cutting-edge solutions</div>
                    <div className="text-sm text-gray-400">Premium digital experiences</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Preview */}
      <section className="py-28 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-emerald-400 mb-2">Featured Work</div>
              <h2 className="text-4xl font-bold">Premium <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-purple-500">Projects</span></h2>
            </div>
            <div className="text-emerald-300 hover:text-white transition-colors cursor-pointer">
              View all projects →
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-black/30 backdrop-blur-lg border border-emerald-500/20 rounded-2xl overflow-hidden group">
                <div className="h-56 bg-gradient-to-br from-emerald-900/50 to-purple-900/50 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-32 h-32 rounded-full ${item === 1 ? 'bg-emerald-500/20' : item === 2 ? 'bg-purple-500/20' : 'bg-gradient-to-r from-emerald-500/20 to-purple-500/20'} animate-pulse`}></div>
                  </div>
                  <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-purple-500 z-10">
                    0{item}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">Project Title {item}</h3>
                  <p className="text-gray-400 mb-4">Premium digital solution for luxury brand experience</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-emerald-900/30 text-emerald-300 rounded-full">UI/UX</span>
                    <span className="text-xs px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full">Development</span>
                    <span className="text-xs px-3 py-1 bg-emerald-900/30 text-emerald-300 rounded-full">Branding</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-emerald-900/20 to-purple-900/20 backdrop-blur-lg border border-emerald-500/20 rounded-3xl p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '15+', label: 'Years Experience' },
                { value: '240+', label: 'Projects' },
                { value: '98%', label: 'Client Satisfaction' },
                { value: '36', label: 'Awards Won' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-purple-500">
                    {stat.value}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="relative z-10 pt-20 pb-10 border-t border-emerald-500/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="text-2xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-purple-500">NEXUS</span>
                <span className="text-white">STUDIO</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Crafting premium digital experiences with futuristic design and cutting-edge technology.
              </p>
            </div>
            
            <div className="flex space-x-6">
              {['twitter', 'dribbble', 'instagram', 'linkedin'].map((social) => (
                <a key={social} href="#" className="w-12 h-12 rounded-full border border-emerald-500/20 flex items-center justify-center hover:bg-emerald-500/10 transition-colors">
                  <div className="w-5 h-5 bg-gradient-to-r from-emerald-400 to-purple-500 rounded-full"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="border-t border-emerald-500/10 mt-12 pt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Nexus Studio. All rights reserved.
          </div>
        </div>
      </footer>
      
      {/* Custom Animation Keyframes */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.15; }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.1; }
        }
        @keyframes pulse-medium {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.05; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slower 12s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-pulse-medium {
          animation: pulse-medium 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}
