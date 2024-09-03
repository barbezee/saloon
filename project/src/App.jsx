import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Element, scroller } from 'react-scroll';

import Navbar from './components/Navbar';
import HeroSection from './components/Herosection';
import ServiceSection from './components/ServiceSection';
import BookingForm from './components/BookingForm';
import ServicesSection from './components/ServicesSection';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import FAQs from './components/FAQs';
import TermsConditions from './components/TermsConditions';
import About from './components/About';

const App = () => {
  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      smooth: true,
      offset: -70, // Adjust based on your navbar height
      duration: 500,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar scrollToSection={scrollToSection} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Element name="services">
                <ServiceSection />
              </Element>
              <Element name="bookings">
                <BookingForm />
              </Element>
              <Element name="services-section">
                <ServicesSection />
              </Element>
              <Reviews />
              <FAQs />
              <TermsConditions />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
