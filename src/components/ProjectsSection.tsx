"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { projects } from "../data/projects";

export function ProjectsSection() {
    const navigate = useNavigate();

    const featuredProjects = projects.filter((p) => p.featured);
    const otherProjects = projects.filter((p) => !p.featured);

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl text-gray-900 mb-6 font-bold">
                        My Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
                    <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                        다양한 웹 애플리케이션을 제작하기 위해 <br />
                        React, Spring Boot, Python을 사용한 프로젝트입니다.
                    </p>
                </motion.div>

                {/* Featured Projects */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <Card
                                className="group bg-white border-gray-200 overflow-hidden hover:border-blue-300 transition-all duration-500 shadow-sm hover:shadow-md cursor-pointer"
                                onClick={() => navigate(`/project/${project.id}`)}
                            >
                                <div className="relative overflow-hidden">
                                    <ImageWithFallback
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-300" />

                                    <div className="absolute top-4 right-4 flex space-x-2">
                                        {project.github &&
                                            project.github !== "#" && (
                                                <a
                                                    href={project.github}
                                                    onClick={(e) =>
                                                        e.stopPropagation()
                                                    }
                                                    className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md"
                                                >
                                                    <Github className="w-5 h-5" />
                                                </a>
                                            )}
                                        {project.live &&
                                            project.live !== "#" && (
                                                <a
                                                    href={project.live}
                                                    onClick={(e) =>
                                                        e.stopPropagation()
                                                    }
                                                    className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md"
                                                >
                                                    <ExternalLink className="w-5 h-5" />
                                                </a>
                                            )}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-600 mb-4 leading-relaxed whitespace-pre-line">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm border border-blue-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Other Projects */}
                <h3 className="text-2xl font-semibold text-center mb-8">
                    Other Projects
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Card
                                className="group bg-gray-50 border-gray-200 hover:border-blue-300 transition-all duration-300 h-full shadow-sm hover:shadow-md cursor-pointer"
                                onClick={() =>
                                    navigate(`/project/${project.id}`)
                                }
                            >
                                <ImageWithFallback
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />

                                <div className="p-4">
                                    <h4 className="text-lg font-semibold mb-2 group-hover:text-blue-600">
                                        {project.title}
                                    </h4>

                                    <p className="text-gray-600 text-sm mb-3 line-clamp-3 whitespace-pre-line">
                                        {project.description}
                                    </p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button
                        variant="outline"
                        className="border-blue-500 text-blue-600"
                    >
                        View All Projects
                    </Button>
                </div>
            </div>
        </section>
    );
}
