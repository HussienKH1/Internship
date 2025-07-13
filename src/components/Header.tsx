import React, { useEffect, useState } from 'react';
import type { ContactInfo } from '../types';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const API_BASE = 'http://127.0.0.1:8000/api';

const Header = () => {
    const location = useLocation();
    const [contact, setContact] = useState<ContactInfo | null>(null);

    useEffect(() => {
        axios.get(`${API_BASE}/contactinfos/`)
            .then(response => setContact(response.data[0]))
            .catch(error => console.error('Failed to fetch contact info:', error));
    }, []);

    const navItems = [
        { label: 'Home', to: '/' },
        { label: 'About Us', to: '/about' },
        { label: 'Our Projects', to: '/projects' },
        { label: 'Team', to: '/team' },
        { label: 'Blog', to: '/blog' },
        { label: 'Contact', to: '/contact' },
    ];

    return (
        <>
            {/* Top Contact Bar */}
            <div className="bg-white border-b border-gray-200 py-4">
            <div className="max-w-screen-xl mx-auto px-4 md:px-10 text-sm flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                {/* Logo */}
            <Link to="/" className="inline-block">
                <div className="flex items-center gap-2 font-bold text-xl text-black hover:text-red-600 transition">
                    <span className="text-red-600 text-4xl font-bold -ml-2">▰</span>
                    <span className="tracking-wide">{contact ? contact.name : 'N/A'}</span>
                </div>
            </Link>


                {/* Contact Info */}
                <div className="flex flex-wrap items-center justify-center gap-8 text-black">
                {/* Location */}
                <div className="flex items-start gap-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-600 text-2xl mt-1" />
                    <div>
                    <div className="font-bold">{contact?.city || ''}</div>
                    <div className="text-gray-600">{contact?.street || ''}</div>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-2">
                    <FontAwesomeIcon icon={faPhone} className="text-red-600 text-2xl mt-1" />
                    <div>
                    <div className="font-bold">{contact?.phone || 'N/A'}</div>
                    <div className="text-gray-600">Toll free</div>
                    </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-2">
                    <FontAwesomeIcon icon={faEnvelope} className="text-red-600 text-2xl mt-1" />
                    <div>
                        <a
                            href={`mailto:${contact?.email || 'info@gmail.com'}`}
                            className="font-bold text-black hover:text-red-600 transition-colors"
                        >
                            {contact?.email || 'info@gmail.com'}
                        </a>
                        <div className="text-gray-600">{contact?.street || ''}</div>
                    </div>
                </div>
                </div>
            </div>
            </div>


            {/* Navigation Menu */}
            <nav className="bg-red-600 px-10 py-2 flex justify-center">
                <ul className="flex flex-wrap justify-center md:justify-start gap-8 p-8 text-lg font-bold uppercase text-white font-oswald">

                    {navItems.map((item) => (
                        <li key={item.label} className="relative group ">
                            <Link
                                to={item.to}
                                className={`transition-colors duration-500 ${
                                    location.pathname === item.to ? 'text-black' : 'text-white hover:text-black'
                                }`}
                            >
                                {item.label}
                                <span
                                    className={`absolute left-0 -bottom-1 h-0.5 bg-black transition-all duration-500 ${
                                        location.pathname === item.to ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}
                                ></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Header;
