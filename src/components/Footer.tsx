import React, { useEffect, useState } from 'react';
import axios from 'axios';
import type { BlogPost, ContactInfo } from '../types';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const API_BASE = 'http://127.0.0.1:8000/api';

const Footer = () => {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [contact, setContact] = useState<ContactInfo | null>(null);

    useEffect(() => {
        axios.get(`${API_BASE}/blogposts/`).then(res => setBlogPosts(res.data));
        axios.get(`${API_BASE}/contactinfos/`)
            .then(response => {
                setContact(response.data[0]);
            })
            .catch(error => {
                console.error('Failed to fetch contact info:', error);
            });
    }, []);

    return (
        <footer className="bg-[#0d1b2a] text-white px-6 md:px-12 py-12">
            <div className="grid md:grid-cols-4 gap-10">
                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-1">Have a Question?</h3>
                    <div className="w-10 h-[2px] bg-red-600 mb-4"></div>
                    <p className="flex items-start gap-2 text-sm mb-2">
                        <FontAwesomeIcon icon={faLocationDot} className="text-red-600 mt-1" />
                        {contact ? `${contact.city}, ${contact.street}` : 'N/A'}
                    </p>
                    <p className="flex items-center gap-2 text-sm mb-2">
                        <FontAwesomeIcon icon={faPhone} className="text-red-600" />
                        {contact?.phone || 'N/A'}
                    </p>
                    <p className="flex items-center gap-2 text-sm">
                    <FontAwesomeIcon icon={faEnvelope} className="text-red-600" />
                    {contact?.email ? (
                        <a
                        href={`mailto:${contact.email}`}
                        className="relative inline-block text-white transition-colors duration-300 hover:text-red-600"
                        >
                        {contact.email}
                        <span className="absolute left-0 bottom-0 h-[1.5px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ) : (
                        'N/A'
                    )}
                    </p>

                </div>

                {/* Recent Blog */}
                <div>
                    <h3 className="text-lg font-semibold mb-1">Recent Blog</h3>
                    <div className="w-10 h-[2px] bg-red-600 mb-4"></div>
                    {blogPosts.length > 0 ? (
                        blogPosts.slice(0, 2).map((post) => (
                            <div key={post.id} className="flex gap-3 mb-4">
                                <img src={post.image} alt={post.title} className="w-16 h-16 object-cover rounded" />
                                <div>
                                    <p className="text-sm hover:text-red-500 cursor-pointer transition">{post.title}</p>
                                    <p className="text-xs text-gray-400">{post.date}</p>
                                    <p className="text-xs text-gray-400">👤 {post.author} &nbsp; 💬 {post.comment_count || 0}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-sm text-gray-400">No recent blog posts.</p>
                    )}
                </div>

                {/* Quick Links - 2 Columns */}
                <div>
                    <h3 className="text-lg font-semibold mb-1">Links</h3>
                    <div className="w-10 h-[2px] bg-red-600 mb-4"></div>
                    <ul className="grid grid-cols-2 gap-2 text-sm">
                        {[
                            { to: '/', label: 'Home' },
                            { to: '/team', label: 'Team' },
                            { to: '/about', label: 'About' },
                            { to: '/services', label: 'Services' },
                            { to: '/projects', label: 'Projects' },
                            { to: '/blog', label: 'Blog' },
                            { to: '/contact', label: 'Contact' },
                        ].map((link, i) => (
                            <li key={i}>
                                <Link to={link.to} className="hover:text-red-500 transition">➔ {link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* join */}
                <div>
                    <h3 className="text-lg font-semibold mb-1">Join Us!</h3>
                    <div className="w-10 h-[2px] bg-red-600 mb-4"></div>
                    <p className="text-sm text-gray-300 mb-4">
                        We’re always looking for passionate people. Explore our open roles and be part of the team!
                    </p>
                    <Link
                        to="/jobs"
                        className="block w-full text-center bg-red-600 hover:bg-red-700 text-white py-2 rounded text-sm font-semibold transition"
                    >
                        View Job Openings
                    </Link>

                    <h3 className="text-lg font-semibold mt-6 mb-1">Connect With Us</h3>
                    <div className="w-10 h-[2px] bg-red-600 mb-4"></div>
                    <div className="flex gap-4">
                        {contact?.facebook && (
                            <a href={contact.facebook} target="_blank" rel="noopener noreferrer"
                                className="bg-[#1b2a3a] hover:bg-red-600 text-white w-8 h-8 flex items-center justify-center rounded-full transition">
                                <FaFacebookF />
                            </a>
                        )}
                        {contact?.twitter && (
                            <a href={contact.twitter} target="_blank" rel="noopener noreferrer"
                                className="bg-[#1b2a3a] hover:bg-red-600 text-white w-8 h-8 flex items-center justify-center rounded-full transition">
                                <FaTwitter />
                            </a>
                        )}
                        {contact?.linkedin && (
                            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer"
                                className="bg-[#1b2a3a] hover:bg-red-600 text-white w-8 h-8 flex items-center justify-center rounded-full transition">
                                <FaLinkedinIn />
                            </a>
                        )}
                        {contact?.instagram && (
                            <a href={contact.instagram} target="_blank" rel="noopener noreferrer"
                                className="bg-[#1b2a3a] hover:bg-red-600 text-white w-8 h-8 flex items-center justify-center rounded-full transition">
                                <FaInstagram />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="text-center text-sm text-gray-400 mt-12 border-t border-gray-800 pt-6">
                Copyright ©{new Date().getFullYear()} All rights reserved |
                Made by <span className="text-white font-medium">Aboubaker Hussien Al Khatib</span>
            </div>
        </footer>
    );
};

export default Footer;
