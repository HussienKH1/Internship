import React, { useEffect, useState } from 'react'
import axios from 'axios'
import type { BlogPost, ContactInfo } from '../types'  // adjust the path if needed
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const API_BASE = 'http://127.0.0.1:8000/api';

const Footer = () => {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
    const [contact, setContact] = useState<ContactInfo | null>(null)

    useEffect(() => {
        axios.get(`${API_BASE}/blogposts/`).then(res => setBlogPosts(res.data));
        axios.get(`${API_BASE}/contactinfos/`)
            .then(response => {
                setContact(response.data[0]) // Assuming there's only one contact info
            })
            .catch(error => {
                console.error('Failed to fetch contact info:', error)
            })
    }, [])

    return (
        <footer className="bg-[#0d1b2a] text-white px-6 md:px-12 py-12">
            <div className="grid md:grid-cols-4 gap-8">
                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Have a Question?</h3>
                    <p className="flex items-start gap-2 text-sm mb-2">
                        <FontAwesomeIcon icon={faLocationDot} style={{ color: "primary", }} />
                        {contact ? contact.address : 'N/A'}
                    </p>
                    <p className="flex items-center gap-2 text-sm mb-2">
                        <FontAwesomeIcon icon={faPhone} style={{ color: "primary", }} />
                        {contact ? contact.phone : 'N/A'}
                    </p>
                    <p className="flex items-center gap-2 text-sm">
                        <FontAwesomeIcon icon={faEnvelope} style={{ color: "primary", }} />
                        {contact ? contact.email : 'N/A'}
                    </p>
                </div>

                {/* Recent Blog */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Recent Blog</h3>
                    {blogPosts.length > 0 ? (
                        blogPosts.map((post) => (
                            <div key={post.id} className="flex gap-3 mb-4">
                                <img src={post.image} alt={post.title} className="w-16 h-16 object-cover rounded" />
                                <div>
                                    <p className="text-sm hover:text-[#3BB6DA] cursor-pointer">{post.title}</p>
                                    <p className="text-xs text-gray-400">{post.date}</p>
                                    <p className="text-xs text-gray-400">👤 {post.author} &nbsp; 💬 {post.comment_count || 0}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-sm text-gray-400">No recent blog posts.</p>
                    )}
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link to="/" className="hover:text-[#3BB6DA] transition">
                                ➔ Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-[#3BB6DA] transition">
                                ➔ About
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" className="hover:text-[#3BB6DA] transition">
                                ➔ Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" className="hover:text-[#3BB6DA] transition">
                                ➔ Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog" className="hover:text-[#3BB6DA] transition">
                                ➔ Blog
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-[#3BB6DA] transition">
                                ➔ Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Subscribe */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Subscribe Us!</h3>
                    <input
                        type="email"
                        placeholder="Enter email address"
                        className="w-full bg-[#1b2a3a] px-4 py-2 rounded mb-2 text-sm placeholder:text-gray-400 outline-none"
                    />
                    <button className="w-full bg-[#3BB6DA] hover:bg-[#2ea7c8] text-white py-2 rounded text-sm font-semibold transition">
                        Subscribe
                    </button>

                    <h3 className="text-lg font-semibold mt-6 mb-4">Connect With Us</h3>
                    <div className="flex gap-4">
                        {contact?.facebook && (
                            <a href={contact.facebook} target="_blank" rel="noopener noreferrer"
                                className="bg-[#1b2a3a] hover:bg-[#3BB6DA] text-white w-8 h-8 flex items-center justify-center rounded-full transition">
                                <FaFacebookF />
                            </a>
                        )}
                        {contact?.twitter && (
                            <a href={contact.twitter} target="_blank" rel="noopener noreferrer"
                                className="bg-[#1b2a3a] hover:bg-[#3BB6DA] text-white w-8 h-8 flex items-center justify-center rounded-full transition">
                                <FaTwitter />
                            </a>
                        )}
                        {contact?.linkedin && (
                            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer"
                                className="bg-[#1b2a3a] hover:bg-[#3BB6DA] text-white w-8 h-8 flex items-center justify-center rounded-full transition">
                                <FaLinkedinIn />
                            </a>
                        )}
                        {contact?.instagram && (
                            <a href={contact.instagram} target="_blank" rel="noopener noreferrer"
                                className="bg-[#1b2a3a] hover:bg-[#3BB6DA] text-white w-8 h-8 flex items-center justify-center rounded-full transition">
                                <FaInstagram />
                            </a>
                        )}
                    </div>

                </div>
            </div>

            <div className="text-center text-sm text-gray-400 mt-8">
                Copyright ©{new Date().getFullYear()} All rights reserved |
                This template is made by Aboubaker Hussien Al Khatib
            </div>
        </footer>
    )
}

export default Footer
