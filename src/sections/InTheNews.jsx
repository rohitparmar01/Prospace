import React from 'react';
import { motion } from 'framer-motion';

const InTheNews = () => {
  const newsLogos = [
    { name: 'Bloomberg', logo: 'Bloomberg' },
    { name: 'Business Today', logo: 'Business Today' },
    { name: 'CNBC', logo: 'CNBC' },
    { name: 'Entrepreneur', logo: 'Entrepreneur' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-8">
            In the news
          </h2>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-12">
          {newsLogos.map((news, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
            >
              <div className="text-2xl font-bold text-gray-700">
                {news.logo}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InTheNews;
