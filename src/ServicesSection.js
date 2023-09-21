import React from 'react';

const ServicesSection = () => {
  return (
    <section className="container mx-auto mt-8 p-8">
      <h2 className="text-2xl mb-4 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-residential-bg bg-cover rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">Residential Construction</h3>
          <p>We specialize in constructing homes that meet your needs and style.</p>
        </div>
        <div className="p-6 bg-commercial-bg bg-cover rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">Commercial Construction</h3>
          <p>From office spaces to shopping complexes, we bring your visions to life.</p>
        </div>
        <div className="p-6 bg-renovation-bg bg-cover rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">Renovations</h3>
          <p>Revamp your space with our renovation services tailored to your preferences.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;