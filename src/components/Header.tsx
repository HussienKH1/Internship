import React, { useEffect, useState } from 'react'
import type { ContactInfo } from '../types'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const API_BASE = 'http://127.0.0.1:8000/api';
const Header = () => {
    const [contact, setContact] = useState<ContactInfo | null>(null)

    useEffect(() => {
        axios.get(`${API_BASE}/contactinfos/`)
            .then(response => {
                setContact(response.data[0])
            })
            .catch(error => {
                console.error('Failed to fetch contact info:', error)
            })
    }, [])

    const navItems = [
        { label: 'Home', to: '/' },
        { label: 'Team', to: '/team' },
        { label: 'About', to: '/about' },
        { label: 'Projects', to: '/projects' },
        { label: 'Services', to: '/services' },
        { label: 'Blog', to: '/blog' },
        { label: 'Contact', to: '/contact' },
    ]
    return (
        <>
            {/* Top Bar */}
            <div className="bg-white px-6 py-3 shadow-sm text-sm flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0">
                <div className="flex items-center gap-2 font-bold text-lg text-primary">
                    <span className="text-primary">●</span>
                    {contact ? contact.name : 'N/A'}
                </div>
                <div className="flex flex-wrap items-center gap-8 text-sm text-black">
                    <div className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faEnvelope} className="text-primary text-3xl mt-1" />
                        <div>
                            <div className="font-bold">Email</div>
                            <div>{contact ? contact.email : 'youremail@email.com'}</div>
                        </div>
                    </div>
                    <div className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faPhone} className="text-primary text-3xl mt-1" />
                        <div>
                            <div className="font-bold">Call Us</div>
                            <div>phone: {contact ? contact.phone : '+1235 2355 98'}</div>
                        </div>
                    </div>
                </div>

                <button className="bg-primary hover:bg-cyan-500 text-white px-5 py-2 rounded-full font-medium shadow-md transition">
                    Free Consulting
                </button>
            </div>

            {/* Navbar */}
            <nav className="bg-dark text-white px-24 py-3 flex justify-between items-center">
                <ul className="flex gap-10 text-sm font-medium">
                    {navItems.map((item) => (
                        <li key={item.label} className="relative group">
                            <Link
                                to={item.to}
                                className={`hover:text-primary ${location.pathname === item.to ? 'text-primary' : ''
                                    }`}
                            >
                                {item.label}
                                <span
                                    className={`absolute left-0 -bottom-1 h-0.5 bg-primary transition-all duration-700 ${location.pathname === item.to ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}
                                ></span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-4">
                    {/* Search box */}
                    {/*<div className="flex items-center bg-[#132238] px-4 py-2 rounded-full">
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent outline-none text-sm text-white placeholder:text-gray-400"
                        />
                        <span className="ml-2">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-primary" />
                        </span>
                    </div>*/}

                    {/* Clean Join Us Button */}
                    <Link
                        to="/jobs"
                        className="bg-primary text-white px-5 py-2 rounded-full hover:bg-white hover:text-primary border border-primary transition-colors duration-300"
                    >
                        Join Us
                    </Link>
                </div>


            </nav>
        </>
    )
}

export default Header
