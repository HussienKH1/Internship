import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Footer from '../components/Footer';
import Header from '../components/Header';
import axios from 'axios';
import type { HeroSlide, Service, Stat, BlogPost } from '../types';
import CountUp from "../components/Countup";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'


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
            
            {/*<section
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
            </section>*/}
            
            {/* Hero Swiper Section */}
            <section className="w-full h-[80vh] relative">
                {/* Custom Arrows */}
                <div className="swiper-button-prev bg-white w-12 h-12 flex items-center justify-center text-black text-2xl absolute top-1/2 -translate-y-1/2 left-4 z-10 shadow-md cursor-pointer">
                </div>
                <div className="swiper-button-next bg-white w-12 h-12 flex items-center justify-center text-black text-2xl absolute top-1/2 -translate-y-1/2 right-4 z-10 shadow-md cursor-pointer">
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                    navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    loop={true}
                    className="w-full h-full"
                >
                    {heroSlides.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <div className="relative w-full h-full">
                        <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-light text-center px-6">
                            {slide.title}
                            </h2>
                        </div>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom pagination styling injected via <style> */}
                <style>
                    {`
                    .swiper-pagination-bullet {
                        width: 20px;
                        height: 5px;
                        border-radius: 0;
                        background: white;
                        opacity: 1;
                        margin: 0 4px !important;
                    }
                    .swiper-pagination-bullet-active {
                        background: #dc2626 !important; /* red-600 */
                    }
                    `}
                </style>
            </section>



            {/* Services Section */}
            <section className="px-6 md:px-12 py-20 bg-white text-red-600">
            {/* Section Heading */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold uppercase">What We Do</h2>
                <p className="mt-2 text-gray-600 text-sm">Explore our core services and story of success</p>
            </div>

            {/* Services + Story Grid */}
            <div className="grid md:grid-cols-3 gap-12 items-start">
                {/* Services List */}
                <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
                {services.map((service, i) => (
                    <div
                    key={i}
                    className="relative rounded-lg p-6 bg-red-50 text-red-600 shadow-md transition duration-300 hover:bg-red-600 hover:text-white"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)' }}
                    >
                    <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                    <p className="text-sm">{service.description}</p>
                    </div>
                ))}
                </div>

                {/* Success Story */}
                <div className="border-l-2 border-red-100 pl-6">
                <img
                    src="/your-success-image.jpg"
                    alt="Success"
                    className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Read Our Success Story for Inspiration
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...
                </p>
                <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full shadow-md transition">
                    Contact us
                </button>
                </div>
            </div>
            </section>


            {/* Stats Section */}
            <section className="relative bg-red-600 bg-opacity-90 text-white py-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-10">
                You Always Get the Best Guidance
            </h2>

            <div className="max-w-5xl mx-auto bg-white text-red-600 grid [grid-template-columns:repeat(auto-fit,minmax(120px,1fr))] gap-6 px-4 py-10 rounded-lg shadow-lg">
                {stats.map((stat, i) => (
                <div key={i} className="text-center">
                    <div className="text-3xl font-bold">
                    <CountUp end={stat.value} />
                    </div>
                    <div className="w-6 h-[2px] bg-red-600 mx-auto my-2"></div>
                    <div className="uppercase text-xs tracking-wide font-semibold text-red-700">
                    {stat.label}
                    </div>
                </div>
                ))}
            </div>
            </section>


            {/* Best Services Section */}
            <section className="px-6 md:px-12 py-20 bg-white text-center">
            <h2 className="text-3xl font-bold text-red-600 mb-4">Our Best Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, i) => (
                <div
                    key={i}
                    className="group border border-red-100 rounded-lg px-6 py-10 transition duration-300 hover:bg-red-600 hover:text-white cursor-pointer shadow-sm"
                >
                    <div className="text-4xl mb-4 transition group-hover:scale-110">{service.icon}</div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-white">{service.title}</h3>
                    <p className="text-sm text-gray-600 group-hover:text-white transition">
                    {service.description}
                    </p>
                </div>
                ))}
            </div>
            </section>

            {/* Blog Section */}
            <section className="px-6 md:px-12 py-20 bg-white text-center">
                <h2 className="text-3xl font-bold text-red-600 mb-4">Recent Blog</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                    Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.
                </p>

                <div className="grid md:grid-cols-3 gap-6 text-left">
                    {blogPosts.map((post, i) => (
                    <div
                        key={i}
                        className="relative border border-red-100 rounded-lg overflow-hidden shadow-sm group hover:shadow-lg transition"
                    >
                        <div className="relative">
                        <img src={post.image} alt="Blog" className="w-full h-56 object-cover" />
                        <div className="absolute left-0 top-0 bg-red-600 text-white text-center px-2 py-2">
                            <div className="text-xl font-bold leading-none">{post.date}</div>
                            <div className="text-xs">{post.month}</div>
                            <div className="text-xs">{post.year}</div>
                        </div>
                        </div>

                        <div className="p-5">
                        <h3 className="text-lg font-semibold text-red-700 mb-2 group-hover:text-red-600 transition">
                            {post.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">{post.description}</p>

                        <div className="flex justify-between items-center text-sm text-red-600">
                            <button className="bg-red-600 hover:bg-red-700 text-white text-xs px-4 py-2 rounded-full transition">
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
            </section>


            <Footer />
        </div>
    );
};

export default Home;
