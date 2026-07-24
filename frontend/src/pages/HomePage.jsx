import React from 'react';
import Hero from '../components/public/Hero';
import Services from '../components/public/Services';
import WhyChooseUs from '../components/public/WhyChooseUs';
import About from '../components/public/About';
import Stats from '../components/public/Stats';
import Testimonials from '../components/public/Testimonials';
import LeadForm from '../components/public/LeadForm';

const HomePage = () => {
  return (
    <div className="space-y-0">
      <Hero />
      <Services />
      <WhyChooseUs />
      <About />
      <Stats />
      <Testimonials />
      <LeadForm />
    </div>
  );
};

export default HomePage;
