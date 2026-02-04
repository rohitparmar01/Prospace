import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlus, HiMinus } from 'react-icons/hi';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Why do I need an interior designer?",
      answer: "An interior designer brings professional expertise, saves time, ensures optimal space utilization, and helps avoid costly mistakes. They have access to quality materials and can create cohesive designs that match your vision and budget."
    },
    {
      question: "Why is Livspace perfect for your home interior design?",
      answer: "Prospace offers end-to-end solutions with transparent pricing, 10-year warranty, 45-day delivery guarantee, and dedicated project managers. We use advanced 3D visualization technology and have completed 100,000+ projects across India."
    },
    {
      question: "What services are included under home interior design?",
      answer: "We provide complete interior solutions including modular kitchens, wardrobes, living room designs, bedroom interiors, false ceilings, TV units, study tables, crockery units, pooja units, and more. All with end-to-end execution."
    },
    {
      question: "How much does home interiors cost?",
      answer: "The cost depends on your requirements, space size, and material choices. Typically, a 2BHK full home interior starts from ₹5.5 lakhs. Get a personalized quote by filling out our form for accurate pricing."
    },
    {
      question: "What are the benefits for my project completion?",
      answer: "You get a dedicated project manager, milestone-based tracking, daily progress updates, quality checks at every stage, and guaranteed 45-day completion with 10-year warranty on all modular products."
    },
    {
      question: "What is the booking process design rights?",
      answer: "Simply book a consultation, meet our designer, review 3D designs, approve your plan, and we begin execution. The design rights remain with you, and you can request modifications during the review phase."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
            FAQs About Home Interior Design
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900 pr-4">
                  {index + 1}. {faq.question}
                </span>
                <span className="flex-shrink-0 text-gray-500">
                  {openIndex === index ? (
                    <HiMinus className="w-5 h-5" />
                  ) : (
                    <HiPlus className="w-5 h-5" />
                  )}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
