// src/components/FAQs.jsx
import React, { useState } from 'react';

function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a wide range of grooming services including haircuts, beard trims, shaves, and more. You can check out our full list of services on the Services page."
    },
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment through our website by selecting your preferred service, choosing a date and time, and providing your contact details."
    },
    {
      question: "Do you offer home service?",
      answer: "Yes, we do offer home grooming services. You can book a home service appointment through our website or by contacting us directly."
    },
    {
      question: "What are your working hours?",
      answer: "Our working hours are from 6:00 AM to 10:00 PM, Monday to Saturday. We are closed on Sundays."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including cash, credit/debit cards, and digital payments like Google Pay and Paytm."
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left text-lg font-semibold text-gray-800"
              >
                {faq.question}
                <span className="float-right">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="mt-4 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQs;
