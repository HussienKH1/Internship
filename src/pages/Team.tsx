import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import axios from 'axios';

type TeamMember = {
    id: number;
    name: string;
    photo: string;
    description: string;
    linkedin: string;
    email: string;
};

const API_BASE = 'http://127.0.0.1:8000/api';

const Team = () => {
    const [team, setTeam] = useState<TeamMember[]>([]);

    useEffect(() => {
        axios.get(`${API_BASE}/teammembers/`)
            .then(res => setTeam(res.data))
            .catch(err => console.error('Error fetching team:', err));
    }, []);

    return (
        <div className="font-inter">
            <Header />
            <PageHeader title="Team" />
            <section
                className="min-h-screen bg-cover bg-center bg-no-repeat py-20"
                style={{ backgroundImage: "url('/team-bg.jpg')" }}
            >
                <div className="bg-white bg-opacity-90 w-full h-full py-16 px-6 md:px-20">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-start">
                        {team.map(member => (
                            <React.Fragment key={member.id}>
                                {/* Profile Card */}
                                <div className="flex justify-center md:justify-start">
                                    <div
                                        className="w-72 rounded-md text-center shadow-lg p-6 transition-all duration-500 ease-in-out
                                        bg-red-600 hover:bg-gradient-to-b hover:from-red-400 hover:to-red-100 group"
                                    >
                                        <img
                                            src={member.photo}
                                            alt={member.name}
                                            className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <h3 className="text-lg font-bold text-white group-hover:text-[#0d1b2a]">
                                            {member.name}
                                        </h3>

                                        {/* Social icons */}
                                        <div className="mt-2 flex justify-center gap-3">
                                            <a href={`mailto:${member.email}`} className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-red-600">
                                                ✉️
                                            </a>
                                            <a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-red-600"
                                            >
                                                in
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="md:col-span-2 space-y-6 text-gray-800 text-justify">
                                    <p>{member.description}</p>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Team;