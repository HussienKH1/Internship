import React, { useEffect, useState } from 'react';
import axios from 'axios';
import type { Project } from '../types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

const API_BASE = 'http://localhost:8000/api';

const ProjectsPage: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get<Project[]>(`${API_BASE}/projects/`)
            .then((res) => setProjects(res.data))
            .catch((err) => console.error('Failed to fetch projects:', err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="font-inter">
            <Header />
            <PageHeader title="Projects" />

            <main className="max-w-6xl mx-auto px-6 py-16">
                {loading ? (
                    <p className="text-gray-600">Loading projects...</p>
                ) : projects.length === 0 ? (
                    <p className="text-gray-500">No projects available.</p>
                ) : (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-5">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-1">
                                        {project.title}
                                    </h2>
                                    <p className="text-gray-500 text-sm mb-2">
                                        {project.client && <>Client: {project.client} · </>}
                                        {project.year && <>Year: {project.year}</>}
                                    </p>
                                    <p className="text-gray-700 text-sm line-clamp-3">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default ProjectsPage;
