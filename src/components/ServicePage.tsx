import React from 'react';

interface ServicePageProps {
  title: string;
}

const ServicePage: React.FC<ServicePageProps> = ({ title }) => {
  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-8 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-8">
            {title}
          </h1>
          <p className="text-lg text-gray-600">
            Service page coming soon...
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
