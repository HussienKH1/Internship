import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  title: string;
}

const PageHeader: React.FC<Props> = ({ title }) => {
  const location = useLocation();
  const path = location.pathname.split('/')[1];

  return (
    <div className="bg-[#2f64f5] py-20 text-center text-white">
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <p className="text-sm">
        <Link to="/" className="hover:underline">Home</Link>
        <span className="mx-1">&gt;</span>
        <span className="font-semibold capitalize">{path}</span>
      </p>
    </div>
  );
};

export default PageHeader;
