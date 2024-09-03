import React, { useState } from 'react';

const TermsConditions = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const terms = [
    
    { title: "Appointment Cancellation Policy", description: "Appointments must be canceled or rescheduled at least 4 hours in advance to avoid a cancellation fee." },
    { title: "Payment Terms", description: "Full payment is required at the time of service. We accept cash, credit/debit cards, and digital payments." },
    { title: "Refund Policy", description: "All sales are final. Refunds are not provided for services rendered, but adjustments can be made if there are any issues." },
    { title: "Privacy Policy", description: "Personal information collected during the booking process will be used solely for providing services and will not be shared with third parties." },
    { title: "Children’s Services", description: "Children under the age of 12 must be accompanied by an adult during their appointment." },
    { title: "Late Arrivals", description: "Late arrivals may result in a shortened service time or rescheduling, depending on availability." },
    { title: "Health and Safety", description: "Clients are required to disclose any medical conditions or allergies that may affect the provision of services." },
    { title: "Promotions and Discounts", description: "Promotions and discounts cannot be combined and are subject to specific terms and conditions." },
    { title: "Client Conduct", description: "We reserve the right to refuse service to anyone exhibiting inappropriate behavior towards staff or other clients." },
    { title: "Product Use", description: "Any products purchased from us are for personal use only and may not be resold or distributed." },
    { title: "Intellectual Property", description: "All content, including images and text, on our website is protected by copyright and may not be used without permission." },
    { title: "Changes to Terms", description: "We reserve the right to modify these terms and conditions at any time, with changes effective upon posting to our website." },
    { title: "Governing Law", description: "These terms and conditions are governed by the laws of the jurisdiction in which our business operates." },
  ];

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto max-w-3xl">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-blue-500 text-white p-4 rounded-lg mb-6 text-left flex justify-between items-center"
        >
          <span className="text-xl font-semibold">Terms and Conditions</span>
          <svg
            className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className={`space-y-6 ${isOpen ? 'block' : 'hidden'}`}>
          {terms.map((term, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">{term.title}</h2>
              <p>{term.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TermsConditions;
