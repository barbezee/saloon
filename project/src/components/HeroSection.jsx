// src/components/HeroSection.jsx
import React from 'react';

function HeroSection() {
  return (
    <section 
      className="bg-cover bg-center py-16"
      style={{ backgroundImage: "url('/assets/pic2.jpg')" }} // Use the new background image
    >
      <div className="bg-black bg-opacity-30 text-white py-8 px-6 md:px-12"> {/* Change text color to black */}
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            "Your Perfect Haircut Awaits!"
          </h1>
          <p className="text-xl mb-6">
            Experience top-notch grooming with our expert barbers.
            Book your appointment now and step out in style!
          </p>
          <a href="#bookings" className="inline-block bg-blue-500 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-blue-600">
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
