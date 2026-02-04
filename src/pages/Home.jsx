import React from 'react';
import Header from '../sections/Header';
import Hero from '../sections/Hero';
import CostEstimator from '../sections/CostEstimator';
import Testimonials from '../sections/Testimonials';
import OneStopShop from '../sections/OneStopShop';
import DesignGallery from '../sections/DesignGallery';
import WhyChoose from '../sections/WhyChoose';
import TrophyCabinet from '../sections/TrophyCabinet';
import InTheNews from '../sections/InTheNews';
import FAQ from '../sections/FAQ';
import HowItWorks from '../sections/HowItWorks';
import Cities from '../sections/Cities';
import Footer from '../sections/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CostEstimator />
        <Testimonials />
        <OneStopShop />
        <DesignGallery />
        <WhyChoose />
        <TrophyCabinet />
        <InTheNews />
        <FAQ />
        <HowItWorks />
        <Cities />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
