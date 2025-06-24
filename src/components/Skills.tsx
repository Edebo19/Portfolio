import { Code, Database, Palette, Smartphone } from 'lucide-react';
import React from 'react';
import { easeInOut, easeOut, motion } from 'framer-motion';

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
      skills: ["Tailwind CSS", "Responsive Design", "CSS Grid", "Flexbox"]
    },
    {
      title: "State & Tools",
      icon: <Database className="w-6 h-6" />,
      skills: ["Redux", "Redux Toolkit", "Git", "npm"]
    },
    {
      title: "Development",
      icon: <Smartphone className="w-6 h-6" />,
      skills: ["Mobile-First Design", "Cross-Browser Testing", "Performance Optimization", "Accessibility"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3,
        ease: easeInOut
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: easeOut
      }
    })
  };

  const iconVariants = {
    hover: {
      rotate: 360,
      scale: 1.2,
      transition: {
        duration: 0.5,
        ease: easeInOut
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Skills & Technologies
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  className="text-blue-500"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-lg font-semibold text-slate-800">{category.title}</h3>
              </div>
              
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    className="text-slate-600"
                    variants={skillVariants}
                    initial="hidden"
                    animate="visible"
                    custom={skillIndex}
                    whileHover={{ 
                      x: 5, 
                      color: "#3b82f6",
                      transition: { duration: 0.2 } 
                    }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;