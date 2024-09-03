import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    id: 1,
    name: "John Doe",
    role: "Customer",
    text: "The service was outstanding! The barber was very professional and made sure I was comfortable throughout the whole process. Highly recommend!",
    imgSrc: "/assets/Photo.jpeg"
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Customer",
    text: "I had a great experience at this salon. The atmosphere was relaxing, and the staff was friendly and skilled. I'll definitely be coming back!",
    imgSrc: "/assets/photo1.jpeg"
  },
  {
    id: 3,
    name: "Robert Brown",
    role: "CEO",
    text: "Wishing the best of luck to this fantastic team! Their dedication to excellence in grooming services is unmatched. Keep up the great work!",
    imgSrc: "/assets/photo1.jpeg"
  }
];

const Reviews = () => {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">What Our Clients Say</h2>
        <motion.div
          className="flex overflow-x-auto whitespace-nowrap space-x-6"
          drag="x"
          dragConstraints={{ left: -500, right: 0 }}
        >
          {reviews.map((review) => (
            <motion.div 
              key={review.id} 
              className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 flex-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={review.imgSrc}
                alt={review.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-center">{review.name}</h3>
              <p className="text-sm text-center text-gray-600 mb-4">{review.role}</p>
              <p className="text-gray-800">{review.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
