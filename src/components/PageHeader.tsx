import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  title: string;
  bgImageUrl?: string; // optional background image
}

const PageHeader: React.FC<Props> = ({ title, bgImageUrl }) => {
  const location = useLocation();
  const path = location.pathname.split('/')[1];

  return (
    <div
      className="relative w-full h-[500px] md:h-[650px] flex items-center justify-center text-white text-center"
      style={{
        backgroundColor: !bgImageUrl ? '#dc2626' : undefined,
        backgroundImage: bgImageUrl ? `url(${bgImageUrl})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{title}</h1>
        <p className="text-sm md:text-base">
          <Link to="/" className="hover:underline text-white">Home</Link>
          <span className="mx-2">/</span>
          <span className="capitalize">{path}</span>
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
