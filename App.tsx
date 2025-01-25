import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Download, ChevronRight, User, Briefcase, GraduationCap, Code, Award, Star, Coffee, Brain, Globe } from 'lucide-react';
import NavLink from './components/NavLink';
import Section from './components/Section';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="glass-effect fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Portfolio
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#education">Education</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-300 hover:text-white">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass-effect">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink href="#home" mobile>Home</NavLink>
              <NavLink href="#about" mobile>About</NavLink>
              <NavLink href="#education" mobile>Education</NavLink>
              <NavLink href="#skills" mobile>Skills</NavLink>
              <NavLink href="#projects" mobile>Projects</NavLink>
              <NavLink href="#contact" mobile>Contact</NavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <Section id="home" className="pt-24 md:pt-32 gradient-bg">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-8">
            <div className="space-y-4">
              <p className="text-sm md:text-base text-blue-300 font-medium">Welcome to my portfolio</p>
              <h1 className="text-4xl md:text-7xl font-bold">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                   Gnaneswar
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                Transforming ideas into reality through code
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/RAMANABOYINAGNANESWAR" target='_blank' className="text-gray-300 hover:text-white transform hover:scale-110 transition-all">
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/ramanaboyina-gnaneswar-215392230/" target='_blank' className="text-gray-300 hover:text-white transform hover:scale-110 transition-all">
                <Linkedin size={28} />
              </a>
              <a href="mailto:gnanignaneswar13@gmail.com" target='_blank' className="text-gray-300 hover:text-white transform hover:scale-110 transition-all">
                <Mail size={28} />
              </a>
            </div>
            <button className="group flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
              <Download size={20} className="mr-2" />
              <a href="https://drive.google.com/uc?export=download&id=1q88DcKiRNKUphlmWhdzXZx7Z1FlR6317" target='_blank' download>Download Resume</a>

              <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-30"></div>
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600"
                alt="Coding workspace"
                className="relative float-animation rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent"></div>
        <div className="relative">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <p className="text-gray-300 text-lg leading-relaxed">
                I am B.Tech student specializing in Computer Science and Engineering. 
                Passionate about technology and innovation, I am actively seeking opportunities to 
                apply my knowledge and skills in a professional setting.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-center p-4 glass-effect rounded-lg transform hover:scale-105 transition-all">
                  <User className="text-blue-400 mr-4" size={24} />
                  <span>Based in Nellore</span>
                </div>
                <div className="flex items-center p-4 glass-effect rounded-lg transform hover:scale-105 transition-all">
                  <GraduationCap className="text-purple-400 mr-4" size={24} />
                  <span>B.Tech in Computer Science</span>
                </div>
                <div className="flex items-center p-4 glass-effect rounded-lg transform hover:scale-105 transition-all">
                  <Briefcase className="text-blue-400 mr-4" size={24} />
                  <span>Open to Job Opportunities </span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 space-y-6">
              <h3 className="text-2xl font-semibold mb-8">Key Expertise</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 glass-effect rounded-xl transform hover:scale-105 transition-all">
                  <Code className="text-blue-400 mb-4" size={32} />
                  <h4 className="text-xl font-medium mb-2">Machine Learning</h4>
                  <p className="text-gray-300">Appying the theoritical in Machine Learning related Projects</p>
                </div>
                <div className="p-6 glass-effect rounded-xl transform hover:scale-105 transition-all">
                  <Brain className="text-purple-400 mb-4" size={32} />
                  <h4 className="text-xl font-medium mb-2">Problem Solving</h4>
                  <p className="text-gray-300">Data Structures & Algorithms</p>
                </div>
                <div className="p-6 glass-effect rounded-xl transform hover:scale-105 transition-all">
                  <Globe className="text-blue-400 mb-4" size={32} />
                  <h4 className="text-xl font-medium mb-2">Technologies</h4>
                  <p className="text-gray-300">Dealing with modern AI tools and technologies</p>
                </div>
                <div className="p-6 glass-effect rounded-xl transform hover:scale-105 transition-all">
                  <Coffee className="text-purple-400 mb-4" size={32} />
                  <h4 className="text-xl font-medium mb-2">Quick Learner</h4>
                  <p className="text-gray-300">Adaptable to new technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Add more sections as needed */}
    </div>
  );
}

export default App;