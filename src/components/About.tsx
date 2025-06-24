import React from 'react'
import cover from '../assets/cover.jpg'
const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <p className="text-slate-600 text-[17px] leading-relaxed">
              My journey into frontend development began with a curiosity about how beautiful websites come to life. 
              Over the past <strong>1 year and 8 months</strong>, I've immersed myself in the world of React development, 
              building responsive and interactive user interfaces.
            </p>
            <p className="text-slate-600 text-[17px] leading-relaxed">
              I specialize in <strong>React.js</strong> with <strong>Redux</strong> for state management, and I love 
              styling with <strong>Tailwind CSS</strong> for its utility-first approach. Recently, I've been expanding 
              my skills with <strong>TypeScript</strong> to write more robust and maintainable code.
            </p>
            <p className="text-slate-600 text-[17px] leading-relaxed">
              I'm passionate about creating clean, accessible, and user-friendly interfaces that not only look great 
              but also provide exceptional user experiences.
            </p>
          </div>
          <div className="bg-gray-50 p-2 rounded-lg">
            <img src={cover} alt="" className='rounded-sm' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About
