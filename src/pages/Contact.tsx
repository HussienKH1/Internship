import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { ContactInfo } from "../types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import PageHeaderbg from '../assets/bg.jpg'

const API_BASE = 'http://localhost:8000/api';
const Contact = () => {
    const [contact, setContact] = React.useState<ContactInfo | null>(null);
    React.useEffect(() => {
        axios.get(`${API_BASE}/contactinfos/`)
            .then(res => setContact(res.data[0])) // assuming only one record
            .catch(err => console.error('Failed to fetch contact info:', err));
    }, []);
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        axios.post(`${API_BASE}/contactmessages/`, formData)
            .then(() => {
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', subject: '', message: '' });
            })
            .catch(err => {
                console.error('Failed to send message:', err);
                alert('Something went wrong. Please try again.');
            });
    };
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/jobs');
    };
    return (
        <div className="font-inter">
            <Header />
            <PageHeader title="Contact Us" bgImageUrl={PageHeaderbg}/>

            <section className="py-12 bg-white text-[#dc2626]">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center divide-y md:divide-y-0 md:divide-x divide-white/30">
                    
                    {/* Address */}
                    <div className="px-6 py-6">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl mb-2 text-[#dc2626]" />
                    <h4 className="font-semibold mb-1">Address:</h4>
                    <p className="whitespace-pre-line text-sm">
                        {contact 
                        ? `${contact.street || ''}\n${contact.city || ''}` 
                        : 'Loading...'}
                    </p>
                    </div>

                    {/* Phone */}
                    <div className="px-6 py-6">
                    <FontAwesomeIcon icon={faPhone} className="text-2xl mb-2 text-[#dc2626]" />
                    <h4 className="font-semibold mb-1">Phone:</h4>
                    <p className="text-sm">{contact ? contact.phone : 'Loading...'}</p>
                    </div>

                    {/* Email */}
                    <div className="px-6 py-6">
                    <FontAwesomeIcon icon={faEnvelope} className="text-2xl mb-2 text-[#dc2626]" />
                    <h4 className="font-semibold mb-1">Email:</h4>
                    <p className="text-sm">
                        {contact?.email ? (
                        <a href={`mailto:${contact.email}`} className="hover:underline hover:text-white/80 transition">
                            {contact.email}
                        </a>
                        ) : (
                        'Loading...'
                        )}
                    </p>
                    </div>

                </div>
            </section>


            <section className="py-12 bg-white text-center">
            <h2 className="text-2xl font-semibold mb-2 text-red-600">If you got any questions</h2>
            <p className="text-gray-700 mb-8">Please do not hesitate to send us a message</p>

            <form
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto bg-gray-50 p-8 rounded shadow space-y-4 text-left"
            >
                <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-red-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-red-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 border border-red-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <textarea
                name="message"
                placeholder="Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-red-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button
                type="submit"
                className="relative overflow-hidden px-8 py-3 rounded-full border-2 border-red-600 bg-red-600 text-white font-medium transition-colors duration-300 hover:bg-transparent hover:text-red-600"
                >
                <span className="relative z-10">Send Message</span>
                <span className="absolute inset-0 rounded-full animate-border-spin border-red-600"></span>
                </button>
            </form>
            </section>

            <section className="py-16 bg-white text-center">
            <h2 className="text-3xl font-bold mb-4 text-red-600">Want to Join Our Team?</h2>
            <p className="max-w-2xl mx-auto text-gray-700 mb-8">
                We’re always looking for talented individuals who are passionate about making a difference.
                Explore our open positions and become part of a dynamic, innovative team.
            </p>
            <button
                onClick={handleClick}
                className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-transparent hover:text-red-600 hover:border hover:border-red-600 transition duration-300"
            >
                View Open Jobs
            </button>
            </section>

            <Footer />
        </div>
    );
};
export default Contact;