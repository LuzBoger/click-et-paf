import React from 'react';
import { services } from '../data/Services'


const Services = () => {
  return (
    <section id="services" className="py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-6">Nos Services</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white rounded-lg p-6"
        >
          <div className="text-6xl mb-4 text-indigo-500">{service.icon}</div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            {service.title}
          </h3>
          <p className="text-gray-700">{service.description}</p>
        </div>
      ))}
    </div>
    </div>
    </section>

  );
};

export default Services;