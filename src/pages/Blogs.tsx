import React, { useEffect, useState } from 'react';
import axios from 'axios';
import type { BlogPost } from '../types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

const API_BASE = 'http://localhost:8000/api';

const BlogsPage: React.FC = () => {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`${API_BASE}/blogposts/`)
            .then((res) => setBlogs(res.data))
            .catch((err) => console.error('Error fetching blog posts:', err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="font-inter">
            <Header />
            <PageHeader title="Blog" />
            <main className="max-w-6xl mx-auto px-6 py-16">
                <h1 className="text-4xl font-bold text-gray-800 mb-10">Latest Blog Posts</h1>

                {loading ? (
                    <p className="text-gray-600">Loading blog posts...</p>
                ) : blogs.length === 0 ? (
                    <p className="text-gray-500">No blog posts available.</p>
                ) : (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {blogs.map((post) => (
                            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                                <div className="p-5">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                                    <p className="text-sm text-gray-500 mb-2">
                                        {post.month} {post.year} · by {post.author}
                                    </p>
                                    <p className="text-gray-700 text-sm line-clamp-3">{post.description}</p>
                                    <div className="text-xs text-gray-400 mt-2">
                                        {post.comment_count} comment{post.comment_count !== 1 ? 's' : ''}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default BlogsPage;
