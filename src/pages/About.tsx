import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import type { AboutUs, Stat, Testimonial } from "../types";
import axios from "axios";
import CountUp from "../components/Countup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import PageHeader from '../components/PageHeader';

const API_BASE = 'http://127.0.0.1:8000/api';
const About = () => {
  const [testimonials, setTestimonials] = React.useState<Testimonial[]>([]);
  const [aboutUs, setAboutUs] = React.useState<AboutUs | null>(null);
  const [stats, setStats] = React.useState<Stat[]>([]);
  React.useEffect(() => {
    axios.get(`${API_BASE}/aboutus/`)
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setAboutUs(response.data[0]);
        } else {
          console.warn('No About Us data found.');
        }
      })
      .catch((error) => {
        console.error('Failed to fetch About Us data:', error);
      });
    axios.get(`${API_BASE}/stats/`).then(res => setStats(res.data));
    axios.get(`${API_BASE}/testimonials/`).then(response => setTestimonials(response.data))
      .catch(error => console.error('Failed to fetch testimonials:', error));
  }, []);
  return (
    <div className="font-inter">
      <Header />
      <PageHeader title="About" />
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left side */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-4">
            {aboutUs?.headline || 'Loading...'}
          </h2>
          <p className="mb-4 text-gray-700">
            {aboutUs?.paragraph1}
          </p>
          <p className="mb-4 text-gray-700">
            {aboutUs?.paragraph2}
          </p>
          <p className="text-gray-700">
            {aboutUs?.paragraph3}
          </p>
        </div>

        {/* Right side */}
        <div className="border-2 border-blue-200 p-4 rounded-lg">
          <img
            src={aboutUs?.image_url}
            alt="About section"
            className="w-full h-48 object-cover rounded mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">
            {aboutUs?.card_title}
          </h3>
          <p className="text-gray-700 mb-4">
            {aboutUs?.card_text}
          </p>
          <a
            href={aboutUs?.button_link || '#'}
            className="inline-block bg-[#3BB6DA] text-white px-4 py-2 rounded-full hover:bg-[#3498db] transition"
          >
            {aboutUs?.button_label}
          </a>
        </div>
      </section>

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

      {/*<section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Our Clients Says</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12">
          We take great pride in the trust our clients place in us. Their feedback reflects not only our commitment to excellence but also the meaningful partnerships we build. At Quantum, we continuously strive to deliver solutions that exceed expectations and drive long-term success.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.id} className="border rounded-lg p-6 relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white px-2">
                <FontAwesomeIcon icon={faQuoteLeft} className="text-primary text-3xl" />
              </div>
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-700 mb-4">{t.text}</p>
              <h4 className="font-semibold">{t.name}</h4>
              <span className="text-primary text-sm">{t.role}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-primary' : 'bg-gray-300'
                }`}
            ></span>
          ))}
        </div>
      </section>*/}

      < Footer />
    </div >
  );
};

export default About;