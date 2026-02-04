import React from 'react';
import { motion } from 'framer-motion';
import { HiUserGroup, HiCube, HiCalendar, HiCog, HiKey } from 'react-icons/hi';

const HowItWorks = () => {
  const steps = [
    {
      icon: <HiUserGroup className="w-8 h-8" />,
      number: '01',
      title: 'Meet Designer',
      description: 'Connect with our expert designers to discuss your vision, requirements, and budget.',
      color: 'blue'
    },
    {
      icon: <HiCube className="w-8 h-8" />,
      number: '02',
      title: 'Get 3D Designs',
      description: 'Receive photorealistic 3D renders and detailed designs within 7 days.',
      color: 'purple'
    },
    {
      icon: <HiCalendar className="w-8 h-8" />,
      number: '03',
      title: 'Book Prospace',
      description: 'Review the designs, finalize your choices, and approve the plan.',
      color: 'green'
    },
    {
      icon: <HiCog className="w-8 h-8" />,
      number: '04',
      title: 'Execution Begins',
      description: 'Our team starts manufacturing and installation with daily progress updates.',
      color: 'orange'
    },
    {
      icon: <HiKey className="w-8 h-8" />,
      number: '05',
      title: 'Move In',
      description: 'Your dream home is ready! Move in within 45 days with complete assurance.',
      color: 'teal'
    }
  ];

  const colorVariants = {
    blue: 'from-blue-500 to-cyan-500',
    purple: 'from-purple-500 to-pink-500',
    green: 'from-green-500 to-emerald-500',
    orange: 'from-orange-500 to-red-500',
    teal: 'from-teal-500 to-cyan-500'
  };

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
            How Prospace Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A simple, transparent process from design to delivery. 
            Your dream home in just 5 easy steps.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Step Number Circle */}
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${colorVariants[step.color]} flex items-center justify-center text-white font-bold text-2xl mb-4 shadow-lg mx-auto`}>
                    {step.number}
                  </div>

                  {/* Icon Container */}
                  <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center text-primary-600 mb-4 mx-auto">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile Connector */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <svg className="w-6 h-6 text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Book a free consultation with our design experts today
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Journey
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
