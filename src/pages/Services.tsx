import React, { useEffect, useState } from 'react';
import axios from 'axios';
import type { Service } from '../types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

const API_BASE = 'http://localhost:8000/api';

const ServicesPage: React.FC = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get<Service[]>(`${API_BASE}/services/`)
            .then((res) => setServices(res.data))
            .catch((err) => console.error('Error fetching services:', err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="font-inter">
            <Header />
            <PageHeader title="Services" />
            <main className="max-w-6xl mx-auto px-6 py-16">
                <h1 className="text-4xl font-bold text-gray-800 mb-10">Our Services</h1>

                {loading ? (
                    <p className="text-gray-600">Loading services...</p>
                ) : services.length === 0 ? (
                    <p className="text-gray-500">No services found.</p>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => (
                            <div key={service.id} className="bg-white shadow p-6 rounded-lg border hover:shadow-lg transition">
                                <div className="text-4xl text-primary mb-4">
                                    <i className={service.icon}></i>
                                </div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h2>
                                <p className="text-gray-600 text-sm">{service.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default ServicesPage;
