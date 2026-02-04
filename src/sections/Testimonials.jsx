import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh & Priya Sharma',
      location: 'Mumbai',
      homeType: '3BHK Apartment',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&q=80',
      review: 'Prospace transformed our home beyond our expectations. The attention to detail and quality of work was exceptional. Our designer understood exactly what we wanted and delivered it perfectly within the promised timeline.',
      project: 'Full Home Interior'
    },
    {
      id: 2,
      name: 'Anita Desai',
      location: 'Bangalore',
      homeType: '2BHK Apartment',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      review: 'The modular kitchen designed by Prospace is a dream come true. Beautiful aesthetics combined with functionality. The project manager kept us updated at every step. Highly recommend their services!',
      project: 'Modular Kitchen'
    },
    {
      id: 3,
      name: 'Vikram Patel',
      location: 'Pune',
      homeType: 'Villa',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
      review: 'Outstanding experience from start to finish. The 3D designs helped us visualize everything perfectly. The execution was flawless and they completed the project 2 days ahead of schedule. The quality is top-notch!',
      project: 'Complete Villa Interior'
    },
    {
      id: 4,
      name: 'Meera & Karthik',
      location: 'Chennai',
      homeType: '3BHK Apartment',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
      review: 'We were impressed by the transparency in pricing and the quality of materials used. The wardrobe designs are stunning and very practical. The 10-year warranty gives us complete peace of mind.',
      project: 'Bedroom & Wardrobes'
    },
    {
      id: 5,
      name: 'Arjun Reddy',
      location: 'Hyderabad',
      homeType: '4BHK Penthouse',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      review: 'Prospace brought our vision to life with their innovative designs and professional approach. Every detail was perfect. The technology-driven design process made everything so smooth and efficient.',
      project: 'Luxury Home Interior'
    },
    {
      id: 6,
      name: 'Sneha Kapoor',
      location: 'Delhi',
      homeType: '2BHK Apartment',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
      review: 'Amazing work! The living room and dining area look absolutely stunning. The team was professional, punctual, and very accommodating to our requests. Worth every rupee spent!',
      project: 'Living & Dining'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of happy homeowners who transformed their spaces with Prospace
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Testimonial Display */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-xl p-8 md:p-12"
              >
                {/* Customer Image & Info */}
                <div className="flex flex-col items-center text-center md:text-left md:items-start">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-primary-100">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                    {testimonials[currentIndex].name}
                  </h3>
                  
                  <p className="text-gray-600 mb-2">
                    {testimonials[currentIndex].location} • {testimonials[currentIndex].homeType}
                  </p>
                  
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <HiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <div className="inline-block bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                    {testimonials[currentIndex].project}
                  </div>
                </div>

                {/* Review Content */}
                <div>
                  <div className="text-6xl text-primary-200 leading-none mb-4">"</div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                    {testimonials[currentIndex].review}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
                    <span className="text-sm text-gray-500">Verified Customer</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300"
            >
              <HiChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-primary-500' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300"
            >
              <HiChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Customer Count */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-4">
              Trusted by over <span className="font-bold text-primary-600">100,000+ families</span> across India
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
