// src/components/ServicesSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  { title: "Gentle Care for Men", imgSrc: "/assets/services/Genle care for men.jpg" },
  { title: "Bridal & Grooming Glamour", imgSrc: "/assets/services/bride groom.jpg" },
  { title: "Kids' Hair & Beauty", imgSrc: "/assets/services/kids & saloon.jpg" },
  { title: "Charming Mehendi Art", imgSrc: "/assets/services/Mehendi.jpg" },
  { title: "Professional Makeup for Female", imgSrc: "/assets/services/professional female.jpg" },
  { title: "Hair Straightening Excellence", imgSrc: "/assets/services/straightning.jpg" },
  { title: "Personalized In-Home Care for Elderly and Physically Challenged Persons", imgSrc: "/assets/services/aged.jpg" },
  { title: "Gentle Care for Men", imgSrc: "/assets/services/Genle care for men.jpg" },
  { title: "Bridal & Grooming Glamour", imgSrc: "/assets/services/bride groom.jpg" },
  { title: "Kids' Hair & Beauty", imgSrc: "/assets/services/kids & saloon.jpg" },
  { title: "Charming Mehendi Art", imgSrc: "/assets/services/Mehendi.jpg" },
];

const ServicesSection = () => {
  const [drag, setDrag] = useState(false);

  return (
    <section className="relative py-16 px-4 bg-zinc-300">
      <div className="overflow-x-auto whitespace-nowrap">
        <motion.div
          className="flex space-x-6"
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
          onDragStart={() => setDrag(true)}
          onDragEnd={() => setDrag(false)}
          whileTap={{ cursor: 'grabbing' }}
        >
          {services.map((service, index) => (
            <div key={index} className="flex-none w-64 sm:w-80 md:w-96">
              <motion.img
                src={service.imgSrc}
                alt={service.title}
                className="w-full h-48 object-cover rounded-lg shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.5 }}
              />
              <h3 className="mt-4 text-lg font-bold text-center text-gray-800">{service.title}</h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
