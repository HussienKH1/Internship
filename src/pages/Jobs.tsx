import React, { useEffect, useState } from 'react';
import axios from 'axios';
import type { Job } from '../types';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

const API_BASE = 'http://127.0.0.1:8000/api';

const JobScreen: React.FC = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${API_BASE}/jobs/`)
            .then(res => setJobs(res.data))
            .catch(err => console.error('Error fetching jobs:', err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="font-inter">
            <Header />
            <PageHeader title="Careers" />

            {/* Job Listings Section */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                <h1 className="text-4xl font-bold text-red-600 mb-10">Join Our Team</h1>

                {loading ? (
                    <p className="text-gray-600">Loading jobs...</p>
                ) : jobs.length === 0 ? (
                    <p className="text-gray-500">No open positions available at the moment.</p>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2">
                        {jobs.map(job => (
                            <div key={job.id} className="bg-white p-6 border border-red-100 rounded-lg shadow-md hover:shadow-lg transition">
                                <h2 className="text-2xl font-semibold text-red-600 mb-2 hover:underline hover:decoration-red-600 hover:underline-offset-4 transition-all">{job.title}</h2>
                                <p className="text-gray-700 line-clamp-3 mb-4">{job.description}</p>
                                <Link
                                    to={`/apply/${job.id}`}
                                    className="inline-block text-sm text-white bg-red-600 px-5 py-2 rounded-full hover:bg-red-700 transition"
                                >
                                    Apply Now
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </section>
            <Footer />
        </div>
    );
};

export default JobScreen;
