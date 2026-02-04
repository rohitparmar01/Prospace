import React from 'react';
import { motion } from 'framer-motion';
import { 
  HiShieldCheck, 
  HiStar, 
  HiUserGroup, 
  HiCurrencyRupee, 
  HiChip,
  HiClock 
} from 'react-icons/hi';
import Card from '../components/Card';

const WhyChoose = () => {
  const features = [
    {
      icon: <HiShieldCheck className="w-10 h-10" />,
      title: 'Flat 10-Year Warranty',
      description: 'Industry-leading warranty on all modular products with hassle-free claims and lifetime support.',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: <HiStar className="w-10 h-10" />,
      title: 'Quality Materials',
      description: 'Premium materials sourced from trusted brands ensuring durability and aesthetic excellence.',
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      icon: <HiUserGroup className="w-10 h-10" />,
      title: 'Dedicated Project Manager',
      description: 'Single point of contact who manages your entire project from design to delivery.',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: <HiCurrencyRupee className="w-10 h-10" />,
      title: 'Transparent Pricing',
      description: 'No hidden costs. What you see is what you pay. Fixed price guarantee with detailed breakup.',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: <HiChip className="w-10 h-10" />,
      title: 'Technology-Driven Designs',
      description: 'Advanced 3D visualization, VR walkthroughs, and cutting-edge design software for precision.',
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      icon: <HiClock className="w-10 h-10" />,
      title: '45-Day Delivery',
      description: 'Guaranteed on-time completion with milestone-based tracking and regular progress updates.',
      gradient: 'from-red-500 to-rose-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
            Why Choose Prospace
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the difference with our customer-first approach, 
            premium quality, and commitment to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover={true} padding="lg" className="h-full group">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '100K+', label: 'Happy Customers' },
              { number: '20+', label: 'Cities Covered' },
              { number: '98%', label: 'Satisfaction Rate' },
              { number: '10', label: 'Years Warranty' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base opacity-90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;
