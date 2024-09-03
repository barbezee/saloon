// src/components/ServiceSection.jsx
import React from 'react';

function ServiceSection() {
  return (
    <section 
      className="bg-cover bg-center py-16"
      style={{ backgroundImage: "url('/assets/FirstPic.jpg')" }} // Relative path from the public directory
    >
      <div className="bg-black bg-opacity-50 text-white py-8 px-6 md:px-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Premium Haircuts & Beauty Services
          </h2>
          <p className="text-lg mb-6">
            We provide top-notch haircut and beauty salon services for both men and women. Book your slot at our salon or have our experienced barbers and beauty artists come to your location at your convenience.
          </p>
          <a href="#bookings" className="inline-block bg-blue-500 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-blue-600">
             CHECK OUT TRENDING HAIR STYLES
          </a>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
