import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiUser, HiPhone, HiLocationMarker, HiCheckCircle, HiClock, HiHome } from 'react-icons/hi';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
  });

  const cities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 
    'Pune', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Lucknow'
  ];

  const trustBadges = [
    {
      icon: <HiCheckCircle className="w-8 h-8" />,
      title: '10-Year Warranty',
      description: 'On all modular products'
    },
    {
      icon: <HiClock className="w-8 h-8" />,
      title: '45-Day Move-in',
      description: 'Guaranteed on-time delivery'
    },
    {
      icon: <HiHome className="w-8 h-8" />,
      title: '100K+ Homes',
      description: 'Designed & delivered'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
    alert('Thank you! Our team will contact you shortly.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative min-h-screen flex items-end pt-20">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&q=80" 
          alt="Beautiful Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          {/* Left Content - Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Home to beautiful interiors
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Get beautiful interiors for your new home in just 45 days. 
              Hassle-free process with 10-year warranty.
            </motion.p>

            {/* Trust Badges */}
            <motion.div 
              className="flex flex-wrap gap-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-white">
                    {badge.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">{badge.title}</h3>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-md ml-auto"
          >
            <div className="bg-white rounded-xl shadow-2xl p-6">
              <h2 className="text-xl font-heading font-bold text-gray-900 mb-1">
                Get Estimate For Your Home
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                Calculate the approximate cost of doing up your home
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  icon={<HiUser />}
                  required
                />

                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  icon={<HiPhone />}
                  required
                />

                <Select
                  name="city"
                  placeholder="Select Your City"
                  value={formData.city}
                  onChange={handleChange}
                  options={cities}
                  icon={<HiLocationMarker />}
                  required
                />

                <Button 
                  type="submit" 
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold"
                  size="lg" 
                  fullWidth
                >
                  Calculate Estimate
                </Button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting, you agree to receive calls and emails from Prospace
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
