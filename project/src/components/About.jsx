// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/assets/About_Us.jpg')" }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Who We Are?</h1>
        <p className="text-lg">
          We are a startup based out of Banglore, with salons in multiple locations across the INDIA. 
          Our mission is to provide high-quality grooming services to our clients with the convenience 
          of booking appointments online. Whether you're looking for a quick trim or a complete makeover, 
          our expert stylists are here to help you look and feel your best. Join us at one of our 
          locations and experience the best in grooming services.
        </p>
      </div>
    </section>
  );
};

export default About;
