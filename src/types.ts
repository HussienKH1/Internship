export interface HeroSlide {
    id: number;
    image: string;
    title: string;
    highlight: string;
    description: string;
    button_text: string;
}

export interface Service {
    id: number;
    title: string;
    icon: string;
    description: string;
}

export interface Stat {
    id: number;
    value: number;
    label: string;
}

export interface BlogPost {
    id: number;
    image: string;
    title: string;
    description: string;
    date: string;
    month: string;
    year: string;
    author: string;
    comment_count?: number;
}

export interface ContactInfo {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
}

export interface AboutUs {
    id: number;
    headline: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    image_url: string;
    card_title: string;
    card_text: string;
    button_label: string;
    button_link: string;
}

export interface CountupProps {
    end: number;
    duration?: number;
}

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    text: string;
    image: string;
}

export interface Job {
    id: number;
    title: string;
    description: string;
}

export interface JobApplication {
    id: number;
    job: number;
    name: string;
    email: string;
    resume: string;
    cover_letter?: string | null;
    submitted_at: string;
}

export interface JobApplicationFormData {
    job: string; // or number, depending on your form setup
    name: string;
    email: string;
    resume: File | null;
    cover_letter: string;
}

export interface Service {
    id: number;
    title: string;
    description: string;
    icon: string;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    client?: string;
    year?: number;
}

