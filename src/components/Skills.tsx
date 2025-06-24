import { Code, Database, Palette, Smartphone } from 'lucide-react';
import React from 'react'

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-6 h-6" />,
      skills: ["React.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"]
    },
    {
      title: "Styling & UI",
      icon: <Palette className="w-6 h-6" />,
      skills: ["Tailwind CSS", "Responsive Design", "CSS Grid", "Flexbox", "SCSS"]
    },
    {
      title: "State & Tools",
      icon: <Database className="w-6 h-6" />,
      skills: ["Redux", "Redux Toolkit", "Git", "npm/yarn", "Webpack"]
    },
    {
      title: "Development",
      icon: <Smartphone className="w-6 h-6" />,
      skills: ["Mobile-First Design", "Cross-Browser Testing", "Performance Optimization", "Accessibility"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">Skills & Technologies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-blue-500">{category.icon}</div>
                <h3 className="text-lg font-semibold text-slate-800">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-slate-600">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills
