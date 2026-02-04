import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

const OneStopShop = () => {
  const categories = [
    {
      title: 'Modular interiors',
      description: 'Functional spaces, wardrobe and storage',
      image: 'https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=600&q=80',
    },
    {
      title: 'Full home interiors',
      description: 'Turnkey interior solutions for your home',
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80',
    },
    {
      title: 'Luxury interiors',
      description: 'Tailored designs from leading designers',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    },
    {
      title: 'Renovations',
      description: 'Expert solutions to renovate your home',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
            One-stop shop for all things interiors
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Be it end-to-end interiors, renovation or modular solutions, we have it all for your home or office. 
            With a wide range of furniture & decor, we have your back from start to finish.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/3]">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {category.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {category.description}
              </p>
              <button className="text-primary-600 font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Explore
                <HiArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OneStopShop;
