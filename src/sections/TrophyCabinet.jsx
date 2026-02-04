import React from 'react';
import { motion } from 'framer-motion';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';

const TrophyCabinet = () => {
  const awards = [
    {
      title: "India's Most Trusted Brand",
      subtitle: "Research by White Page",
      image: "https://via.placeholder.com/150x150/3B82F6/FFFFFF?text=Trusted+Brand"
    },
    {
      title: "Best Interior Design Solution Brand",
      subtitle: "ET Best Brands 2023",
      image: "https://via.placeholder.com/150x150/10B981/FFFFFF?text=Best+Brand"
    },
    {
      title: "Innovative Startup",
      subtitle: "Economic Times",
      image: "https://via.placeholder.com/150x150/F59E0B/FFFFFF?text=Innovative"
    },
    {
      title: "India's Most Innovative Company",
      subtitle: "HomeImprovement",
      image: "https://via.placeholder.com/150x150/8B5CF6/FFFFFF?text=Innovative+Co"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
            Our trophy cabinet
          </h2>
        </motion.div>

        <div className="relative">
          <div className="flex items-center justify-center gap-6 overflow-x-auto pb-4">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 bg-white rounded-lg p-6 text-center w-48 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                </div>
                <h3 className="font-semibold text-sm text-gray-900 mb-1">
                  {award.title}
                </h3>
                <p className="text-xs text-gray-500">
                  {award.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrophyCabinet;
