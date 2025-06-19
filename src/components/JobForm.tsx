import React, { useState, useEffect } from 'react';
import axios from 'axios';
import type { Job, JobApplicationFormData } from '../types';
import { useParams } from 'react-router-dom';

const API_BASE = 'http://localhost:8000/api';

const JobApplicationForm: React.FC = () => {
  const { jobId } = useParams(); // 👈 get jobId from URL
  const [jobs, setJobs] = useState<Job[]>([]);
  const [formData, setFormData] = useState<JobApplicationFormData>({
    job: jobId || '', // 👈 pre-fill job if available
    name: '',
    email: '',
    resume: null,
    cover_letter: '',
  });

  useEffect(() => {
    axios
      .get<Job[]>(`${API_BASE}/jobs/`)
      .then((res) => setJobs(res.data))
      .catch((err) => console.error('Failed to fetch jobs:', err));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    const target = e.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      setFormData(prev => ({
        ...prev,
        [name]: target.files![0],
      }));
    }
    else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.resume) return alert('Please upload your resume.');

    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(formData.resume.type)) return alert('Upload PDF or Word document.');
    if (formData.resume.size > 5 * 1024 * 1024) return alert('File must be < 5MB');

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value instanceof File) data.append(key, value);
      else if (value !== null) data.append(key, String(value));
    });

    axios
      .post(`${API_BASE}/applications/`, data)
      .then(() => alert('Application submitted!'))
      .catch((err) => console.error('Failed to submit application:', err));
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4 max-w-xl mx-auto my-10">
      <select name="job" onChange={handleChange} required className="border p-2 w-full">
        <option value="">Select a job</option>
        {jobs.map((job) => (
          <option key={job.id} value={job.id} selected={String(job.id) === jobId}>
            {job.title}
          </option>
        ))}
      </select>
      <input type="text" name="name" placeholder="Your name" onChange={handleChange} required className="border p-2 w-full" />
      <input type="email" name="email" placeholder="Your email" onChange={handleChange} required className="border p-2 w-full" />
      <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleChange} required className="border p-2 w-full" />
      <textarea name="cover_letter" placeholder="Cover letter" onChange={handleChange} className="border p-2 w-full" />
      <button type="submit" className="bg-primary text-white px-6 py-2 rounded hover:bg-cyan-600 transition">
        Submit Application
      </button>
    </form>
  );
};

export default JobApplicationForm;
