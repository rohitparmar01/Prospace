import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import Button from '../components/Button';

const DesignGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Modular Kitchens', 'Living Rooms', 'Bedrooms', 'Wardrobes', 'Bathrooms'];

  const designs = [
    {
      id: 1,
      category: 'Modular Kitchens',
      title: 'Contemporary Kitchen',
      style: 'Modern Minimalist',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
      price: '₹2.5L'
    },
    {
      id: 2,
      category: 'Living Rooms',
      title: 'Elegant Living Space',
      style: 'Contemporary',
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
      price: '₹3.2L'
    },
    {
      id: 3,
      category: 'Bedrooms',
      title: 'Master Bedroom Suite',
      style: 'Luxury Modern',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80',
      price: '₹2.8L'
    },
    {
      id: 4,
      category: 'Wardrobes',
      title: 'Walk-in Wardrobe',
      style: 'Premium',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      price: '₹1.5L'
    },
    {
      id: 5,
      category: 'Modular Kitchens',
      title: 'Island Kitchen',
      style: 'Scandinavian',
      image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80',
      price: '₹3.5L'
    },
    {
      id: 6,
      category: 'Living Rooms',
      title: 'Cozy Living Room',
      style: 'Warm Contemporary',
      image: 'https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=800&q=80',
      price: '₹2.9L'
    },
    {
      id: 7,
      category: 'Bedrooms',
      title: 'Kids Bedroom',
      style: 'Playful Modern',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80',
      price: '₹1.8L'
    },
    {
      id: 8,
      category: 'Bathrooms',
      title: 'Spa Bathroom',
      style: 'Luxury',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
      price: '₹2.2L'
    }
  ];

  const filteredDesigns = activeCategory === 'All' 
    ? designs 
    : designs.filter(design => design.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
            Design Ideas & Inspiration
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of stunning interior designs 
            to find inspiration for your dream home.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDesigns.map((design, index) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-sm font-medium mb-1 text-primary-300">
                    {design.style}
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    {design.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">{design.price}</span>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-500 hover:text-white transition-colors">
                      <HiArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Info Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                {design.category}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            View All Designs
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignGallery;
