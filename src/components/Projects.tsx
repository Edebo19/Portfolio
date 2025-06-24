import { Github, ExternalLink, Lock } from "lucide-react";
import React from 'react';
import { easeInOut, easeOut, motion } from 'framer-motion';

const Projects: React.FC = () => {
    const projects = [
        {
            id: 1,
            title: "Mental health and Wellness",
            role: "Frontend Developer/Team Lead",
            description:
                "Capstone project. Built React components and integrated Redux for appointments scheduling.",
            tech: ["React", "Redux", "Javascript", "Tailwind CSS"],
            live: "https://mindpal-11.vercel.app/",
            github: "https://github.com/Edebo19/MindpalFinalProject",
            isRepoPrivate: false,
        },
        {
            id: 2,
            title: "Logistics",
            role: "Collaborating Frontend Developer",
            description:
                "Developed responsive admin dashboard UI with Tailwind CSS and connected APIs for order Tracking",
            tech: ["React", "Tailwind CSS", "Typescript", "Redux Toolkit"],
            live: "https://emeraldexpress.vercel.app/",
            github: "",
            isRepoPrivate: true,
            privateNote: "Repo is private",
        },
        {
            id: 3,
            title: "Portfolio Website",
            role: "Full Stack Developer",
            description:
                "Personal portfolio showcasing projects, skills, and contact info built with Next.js and Tailwind CSS.",
            tech: ["React", "Tailwind CSS", "Framer Motion"],
            live: "https://edebo.vercel.app",
            github: "https://github.com/Edebo19/Portfolio",
            isRepoPrivate: false,
        },
        {
            id: 4,
            title: "Weather App",
            role: "Frontend Developer",
            description:
                "Weather app with dummy authentication built with React and Tailwind CSS and consumption of external Api",
            tech: ["React", "Tailwind CSS", "RapidApi"],
            live: "https://weather-wise-one-mu.vercel.app",
            github: "https://github.com/Edebo19/WeatherApp",
            isRepoPrivate: false,
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
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
            y: -8,
            scale: 1.02,
            transition: {
                duration: 0.3,
                ease: easeInOut
            }
        }
    };

    const techTagVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.3,
                ease: easeOut
            }
        }),
        hover: {
            scale: 1.1,
            transition: { duration: 0.2 }
        }
    };

    const linkVariants = {
        hover: {
            scale: 1.05,
            x: 3,
            transition: {
                duration: 0.2,
                ease: easeInOut
            }
        }
    };

    const iconVariants = {
        hover: {
            rotate: [0, -10, 10, 0],
            transition: {
                duration: 0.5,
                ease: easeInOut
            }
        }
    };

    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2 
                    className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Featured Projects
                </motion.h2>
                
                <motion.p 
                    className="text-center text-slate-600 max-w-2xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    Here are some of the projects I've worked on recently — a mix of solo and collaborative efforts. Each project demonstrates my experience with modern frontend technologies like React, Redux, and Tailwind CSS, and reflects my focus on building responsive, user-friendly interfaces.
                </motion.p>

                <motion.div 
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {projects.map((project, projectIndex) => (
                        <motion.div
                            key={project.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            <div className="p-6">
                                <motion.h3 
                                    className="text-xl font-semibold text-slate-800 mb-2"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: projectIndex * 0.1 + 0.3, duration: 0.5 }}
                                >
                                    {project.title}
                                </motion.h3>
                                
                                <motion.p 
                                    className="text-slate-600 mb-2"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: projectIndex * 0.1 + 0.4, duration: 0.5 }}
                                >
                                    {project.role}
                                </motion.p>
                                
                                <motion.p 
                                    className="text-slate-600 mb-4 leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: projectIndex * 0.1 + 0.5, duration: 0.5 }}
                                >
                                    {project.description}
                                </motion.p>
                                
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, index) => (
                                        <motion.span
                                            key={index}
                                            className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded cursor-pointer"
                                            variants={techTagVariants}
                                            initial="hidden"
                                            animate="visible"
                                            whileHover="hover"
                                            custom={index}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                                
                                <motion.div 
                                    className="flex gap-4 items-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: projectIndex * 0.1 + 0.7, duration: 0.5 }}
                                >
                                    {project.isRepoPrivate ? (
                                        <motion.span 
                                            className="flex items-center gap-2 text-slate-500 italic"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <motion.div variants={iconVariants} whileHover="hover">
                                                <Lock size={16} />
                                            </motion.div>
                                            {project.privateNote || "Private Repo"}
                                        </motion.span>
                                    ) : (
                                        <motion.a
                                            href={project.github}
                                            className="flex items-center gap-2 text-slate-600 hover:text-blue-500 transition-colors duration-200"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            variants={linkVariants}
                                            whileHover="hover"
                                        >
                                            <motion.div variants={iconVariants} whileHover="hover">
                                                <Github size={16} />
                                            </motion.div>
                                            Code
                                        </motion.a>
                                    )}
                                    <motion.a
                                        href={project.live}
                                        className="flex items-center gap-2 text-slate-600 hover:text-cyan-500 transition-colors duration-200"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variants={linkVariants}
                                        whileHover="hover"
                                    >
                                        <motion.div variants={iconVariants} whileHover="hover">
                                            <ExternalLink size={16} />
                                        </motion.div>
                                        Live Demo
                                    </motion.a>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;