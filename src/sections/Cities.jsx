import React from 'react';
import { motion } from 'framer-motion';
import { HiLocationMarker } from 'react-icons/hi';

const Cities = () => {
  const cities = [
    { name: 'Mumbai', projects: '15,000+' },
    { name: 'Delhi', projects: '12,000+' },
    { name: 'Bangalore', projects: '18,000+' },
    { name: 'Hyderabad', projects: '10,000+' },
    { name: 'Chennai', projects: '9,000+' },
    { name: 'Pune', projects: '8,500+' },
    { name: 'Kolkata', projects: '7,000+' },
    { name: 'Ahmedabad', projects: '6,500+' },
    { name: 'Jaipur', projects: '5,000+' },
    { name: 'Lucknow', projects: '4,500+' },
    { name: 'Chandigarh', projects: '4,000+' },
    { name: 'Kochi', projects: '3,500+' },
    { name: 'Indore', projects: '3,000+' },
    { name: 'Coimbatore', projects: '2,800+' },
    { name: 'Nagpur', projects: '2,500+' },
    { name: 'Visakhapatnam', projects: '2,200+' },
  ];

  return (
    <section id="cities" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
            Cities We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Prospace is present in major cities across India, 
            bringing premium interior solutions to your doorstep
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg hover:border-primary-300 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-500 transition-colors">
                <HiLocationMarker className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-heading font-bold text-gray-900 mb-1">
                {city.name}
              </h3>
              <p className="text-sm text-gray-500">
                {city.projects} homes
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Don't see your city? We're expanding rapidly!
          </p>
          <button className="text-primary-600 font-semibold hover:text-primary-700 underline">
            Request Service in Your City
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Cities;
