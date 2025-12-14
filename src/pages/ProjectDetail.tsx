"use client";

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { projects } from "../data/projects";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ProjectDetail() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const project = projects.find((p) => p.id === id);

    const handleBackClick = () => {
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            navigate("/");
        }
    };

    if (!project) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center p-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">
                        프로젝트를 찾을 수 없습니다
                    </h1>
                    <button
                        onClick={() => navigate("/")}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                        홈으로 돌아가기
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50" style={{ paddingTop: "7rem", paddingBottom: "4.2rem" }}>
            <div className="w-[88%] max-w-7xl mx-auto">
                {/* Back Button */}
                <button
                    onClick={handleBackClick}
                    className="w-[42px] h-[42px] bg-gray-100 rounded border-none cursor-pointer opacity-80 hover:opacity-100 transition-opacity mb-6"
                    aria-label="뒤로 가기 버튼"
                >
                    <ArrowLeft className="w-5 h-5 mx-auto text-gray-700" />
                </button>

                <section>
                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 py-6">
                        {project.title}
                    </h1>

                    {/* Project Description */}
                    {project.description && (
                        <div className="bg-gray-100 rounded-lg p-4 mb-6 text-gray-700 leading-relaxed">
                            <p className="whitespace-pre-line">{project.description}</p>
                            {project.longDescription && (
                                <p className="mt-4">{project.longDescription}</p>
                            )}
                        </div>
                    )}

                    {/* Main Image */}
                    {project.image && (
                        <div className="mb-8 rounded-lg overflow-hidden bg-white shadow-md">
                            <ImageWithFallback
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto"
                            />
                        </div>
                    )}

                    {/* Project Info Section */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 py-6">
                        주요 정보 및 링크 정보
                    </h2>
                    <div className="bg-gray-100 rounded-lg p-4 mb-6">
                        <dl className="space-y-4">
                            {project.duration && (
                                <div className="flex gap-4">
                                    <dt className="w-24 font-bold text-gray-700 flex-shrink-0">
                                        기간
                                    </dt>
                                    <dd className="text-gray-600">{project.duration}</dd>
                                </div>
                            )}

                            {project.features && project.features.length > 0 && (
                                <div className="flex gap-4">
                                    <dt className="w-24 font-bold text-gray-700 flex-shrink-0">
                                        주요 기능
                                    </dt>
                                    <dd className="text-gray-600">
                                        <ul className="list-disc list-inside space-y-1">
                                            {project.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    </dd>
                                </div>
                            )}

                            {project.technologies && project.technologies.length > 0 && (
                                <div className="flex gap-4">
                                    <dt className="w-24 font-bold text-gray-700 flex-shrink-0">
                                        주요 기술
                                    </dt>
                                    <dd className="text-gray-600">
                                        {project.technologies.join(", ")}
                                    </dd>
                                </div>
                            )}

                            {project.role && (
                                <div className="flex gap-4">
                                    <dt className="w-24 font-bold text-gray-700 flex-shrink-0">
                                        역할
                                    </dt>
                                    <dd className="text-gray-600">{project.role}</dd>
                                </div>
                            )}

                            {project.team && (
                                <div className="flex gap-4">
                                    <dt className="w-24 font-bold text-gray-700 flex-shrink-0">
                                        팀 구성
                                    </dt>
                                    <dd className="text-gray-600 whitespace-pre-line">
                                        {project.team}
                                    </dd>
                                </div>
                            )}

                            {project.github && project.github !== "#" && (
                                <div className="flex gap-4">
                                    <dt className="w-24 font-bold text-gray-700 flex-shrink-0">
                                        깃허브
                                    </dt>
                                    <dd>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block px-3 py-1.5 bg-green-500 text-white rounded-md text-sm hover:bg-green-600 transition-colors"
                                        >
                                            깃허브 URL
                                        </a>
                                    </dd>
                                </div>
                            )}

                            {project.live && project.live !== "#" && (
                                <div className="flex gap-4">
                                    <dt className="w-24 font-bold text-gray-700 flex-shrink-0">
                                        URL
                                    </dt>
                                    <dd>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block px-3 py-1.5 bg-green-500 text-white rounded-md text-sm hover:bg-green-600 transition-colors"
                                        >
                                            배포 URL
                                        </a>
                                    </dd>
                                </div>
                            )}
                        </dl>
                    </div>

                    {/* Troubleshooting Section */}
                    {(project.challenges || project.solutions) && (
                        <>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 py-6">
                                트러블슈팅
                            </h2>
                            <div className="bg-gray-100 rounded-lg p-4 mb-6">
                                {project.challenges && (
                                    <div className="mb-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                                            도전 과제
                                        </h3>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            {project.challenges.map((challenge, index) => (
                                                <li key={index}>{challenge}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {project.solutions && (
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                                            해결 방법
                                        </h3>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            {project.solutions.map((solution, index) => (
                                                <li key={index}>{solution}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </>
                    )}

                    {/* Architecture Section */}
                    {project.architecture && (
                        <>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 py-6">
                                프로젝트 기록
                            </h2>
                            <div className="bg-gray-100 rounded-lg p-4">
                                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                                    {project.architecture}
                                </div>
                            </div>
                        </>
                    )}
                </section>
            </div>
        </div>
    );
}
