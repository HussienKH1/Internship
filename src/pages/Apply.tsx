import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobApplicationForm from '../components/JobForm';

const ApplyPage = () => {
    return (
        <div className="font-inter">
            <Header />
            <main className="max-w-4xl mx-auto px-6 py-16">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Apply for a Job</h1>
                <JobApplicationForm />
            </main>
            <Footer />
        </div>
    );
};

export default ApplyPage;
