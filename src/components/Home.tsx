import React from 'react'
import bg from '../assets/bg.jpg'

const Home: React.FC = () => {
  return (
    <section id="home" style={{background:`url(${bg})`, backgroundSize:"100%", backgroundPosition:"center", backgroundRepeat:"no-repeat"}} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-300 mb-6">
            Hi, I'm <span className="text-blue-500">Okelemu Peace</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8">
            A Frontend Developer
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting beautiful, responsive web experiences with React, Redux, and modern frontend technologies. 
            Passionate about clean code and intuitive user interfaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border cursor-pointer border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home
