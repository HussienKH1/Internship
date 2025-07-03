import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Footer from '../components/Footer';
import Header from '../components/Header';
import axios from 'axios';
import type { HeroSlide, Service, Stat, BlogPost } from '../types';
import CountUp from "../components/Countup";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const API_BASE = 'http://127.0.0.1:8000/api';

const Home = () => {
    const [heroSlides, setHeroSlides] = useState<HeroSlide[]>([]);
    const [services, setServices] = useState<Service[]>([]);
    const [stats, setStats] = useState<Stat[]>([]);
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    useEffect(() => {
        axios.get(`${API_BASE}/heroslides/`).then(res => setHeroSlides(res.data));
        axios.get(`${API_BASE}/services/`).then(res => setServices(res.data));
        axios.get(`${API_BASE}/stats/`).then(res => setStats(res.data));
        axios.get(`${API_BASE}/bestservices/`).then(res => setServices(res.data));
        axios.get(`${API_BASE}/blogposts/`).then(res => setBlogPosts(res.data));
    }, []);

    return (
        <div className="font-inter">
            <Header />
            
            <section
                className="w-full h-screen bg-cover bg-center relative flex items-center justify-center text-white"
                style={{ backgroundImage: "url('/hero-bg.jpg')" }} // replace with your image path
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 text-left max-w-xl px-6">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Home</h1>
                    <p className="text-lg font-semibold leading-relaxed text-white">
                        Bridgeview Business Partners is a global people operation (HR), leadership development and training consulting firm, providing successful outcomes to US and global nonprofits humanitarian and education organizations, technology, and renewal energy startups.
                    </p>
                </div>
            </section>
            
            {/* Hero Swiper Section */}
             {/* <section className="w-full h-[80vh]">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    loop={true}
                    className="w-full h-full"
                >
                    {heroSlides.map((slide, i) => (
                        <SwiperSlide key={i}>
                            <div className="relative w-full h-full">
                                <img src={slide.image} className="w-full h-full object-cover" alt={slide.title} />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-center px-10">
                                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
                                        {slide.title} <span className="text-primary">{slide.highlight}</span>
                                    </h1>
                                    <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-xl">
                                        {slide.description}
                                    </p>
                                    <button className="bg-primary hover:opacity-90 text-white px-6 py-3 rounded-full font-semibold">
                                        {slide.button_text}
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>*/}

            {/* Services Section */}
            {/*<section className="px-6 md:px-12 py-20 bg-white">
                <div className="grid md:grid-cols-3 gap-12 items-start">
                    <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
                        {services.map((service, i) => (
                            <div key={i}
                                className="relative rounded-lg p-6 bg-light text-primary shadow-md transition duration-300 hover:bg-primary hover:text-white"
                                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)' }}>
                                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                                <p className="text-sm">{service.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="border-l pl-6">
                        <img src="/your-success-image.jpg" alt="Success"
                            className="w-full h-48 object-cover rounded-lg mb-6" />
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Read Our Success Story for Inspiration</h3>
                        <p className="text-gray-600 text-sm mb-4">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...
                        </p>
                        <button className="bg-primary hover:opacity-90 text-white px-5 py-2 rounded-full shadow-md transition">
                            Contact us
                        </button>
                    </div>
                </div>
            </section>*/}

            {/* Stats Section */}
            {/*<section className="relative bg-primary bg-opacity-90 text-white py-16 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-10">
                    You Always Get the Best Guidance
                </h2>
                <div className="max-w-5xl mx-auto bg-white text-gray-900 grid [grid-template-columns:repeat(auto-fit,minmax(120px,1fr))] gap-6 px-4 py-10 rounded-lg shadow-lg">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-3xl font-bold">
                                <CountUp end={stat.value} />
                            </div>
                            <div className="w-6 h-[2px] bg-primary mx-auto my-2"></div>
                            <div className="uppercase text-xs tracking-wide font-semibold text-gray-700">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </section>*/}

            {/* Best Services Section */}
            {/*<section className="px-6 md:px-12 py-20 bg-white text-center">
                <h2 className="text-3xl font-bold text-[#0d1b2a] mb-4">Our Best Services</h2>
                <p className="text-[#4b5563] max-w-2xl mx-auto mb-12">
                    Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <div key={i}
                            className="group border border-gray-200 rounded-lg px-6 py-10 transition duration-300 hover:bg-[#3BB6DA] hover:text-white cursor-pointer shadow-sm">
                            <div className="text-4xl mb-4 transition group-hover:scale-110">{service.icon}</div>
                            <h3 className="text-lg font-semibold mb-2 group-hover:text-white">
                                {service.title}
                            </h3>
                            <p className="text-sm text-gray-600 group-hover:text-white transition">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>*/}

            {/* Blog Section */}
            {/*<section className="px-6 md:px-12 py-20 bg-white text-center">
                <h2 className="text-3xl font-bold text-[#0d1b2a] mb-4">Recent Blog</h2>
                <p className="text-[#4b5563] max-w-2xl mx-auto mb-12">
                    Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                    {blogPosts.map((post, i) => (
                        <div key={i} className="relative border border-gray-200 rounded-lg overflow-hidden shadow-sm group hover:shadow-lg transition">
                            <div className="relative">
                                <img src={post.image} alt="Blog" className="w-full h-56 object-cover" />
                                <div className="absolute left-0 top-0 bg-[#3BB6DA] text-white text-center px-2 py-2">
                                    <div className="text-xl font-bold leading-none">{post.date}</div>
                                    <div className="text-xs">{post.month}</div>
                                    <div className="text-xs">{post.year}</div>
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-[#0d1b2a] mb-2 group-hover:text-[#3BB6DA] transition">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">{post.description}</p>
                                <div className="flex justify-between items-center text-sm text-[#459DB0]">
                                    <button className="bg-[#3BB6DA] hover:bg-[#2ea7c8] text-white text-xs px-4 py-2 rounded-full transition">
                                        Read More →
                                    </button>
                                    <div className="flex items-center gap-2">
                                        <span>{post.author}</span>
                                        <span>💬 {post.comment_count || 0}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>*/}

            <Footer />
        </div>
    );
};

export default Home;
