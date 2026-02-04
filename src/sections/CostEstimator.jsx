import React from 'react';
import { motion } from 'framer-motion';
import { HiHome, HiCube, HiLightningBolt, HiSparkles } from 'react-icons/hi';
import Card from '../components/Card';
import Button from '../components/Button';

const CostEstimator = () => {
  const interiorTypes = [
    {
      icon: <HiHome className="w-12 h-12" />,
      title: 'Full Home',
      description: 'Complete home interior solution',
      price: '₹5.5 Lakh',
      priceDetail: 'onwards for 2BHK',
      features: ['Living Room', 'Bedroom', 'Kitchen', 'Wardrobes'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <HiCube className="w-12 h-12" />,
      title: 'Kitchen',
      description: 'Modular kitchen designs',
      price: '₹1.2 Lakh',
      priceDetail: 'onwards',
      features: ['Modular Cabinets', 'Countertop', 'Hardware', 'Appliances'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <HiLightningBolt className="w-12 h-12" />,
      title: 'Wardrobe',
      description: 'Custom wardrobe solutions',
      price: '₹75,000',
      priceDetail: 'onwards',
      features: ['Sliding Doors', 'Internal Fittings', 'Mirror', 'Lighting'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <HiSparkles className="w-12 h-12" />,
      title: 'Bedroom',
      description: 'Complete bedroom interiors',
      price: '₹1.5 Lakh',
      priceDetail: 'onwards',
      features: ['Wardrobe', 'Bed', 'Side Tables', 'Study Unit'],
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-3">
            Get the estimate for your{' '}
            <span className="text-red-500">Wardrobe</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Calculate the approximate cost of doing up your home interiors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {interiorTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                hover={true} 
                padding="lg"
                className="h-full flex flex-col border-2 border-transparent hover:border-primary-200"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${type.gradient} flex items-center justify-center text-white mb-4`}>
                  {type.icon}
                </div>
                
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                  {type.title}
                </h3>
                
                <p className="text-gray-600 mb-4 flex-grow">
                  {type.description}
                </p>

                <div className="mb-4">
                  <div className="text-3xl font-bold text-primary-600 mb-1">
                    {type.price}
                  </div>
                  <div className="text-sm text-gray-500">
                    {type.priceDetail}
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" size="md" fullWidth>
                  View Details
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="primary" size="lg">
            Get Detailed Estimate
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CostEstimator;
