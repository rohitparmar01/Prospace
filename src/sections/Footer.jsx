import React from 'react';
import { motion } from 'framer-motion';
import { 
  HiMail,
  HiPhone,
  HiLocationMarker 
} from 'react-icons/hi';
import { 
  FaFacebookSquare, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube 
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      'Full Home Interiors',
      'Modular Kitchen',
      'Wardrobes',
      'Bedroom Designs',
      'Living Room',
      'Bathroom Designs',
    ],
    company: [
      'About Us',
      'How It Works',
      'Design Ideas',
      'Careers',
      'Blog',
      'Press',
    ],
    support: [
      'Contact Us',
      'FAQs',
      'Customer Reviews',
      'Warranty',
      'Privacy Policy',
      'Terms & Conditions',
    ],
  };

  const socialLinks = [
    { icon: <FaFacebookSquare className="w-6 h-6" />, href: '#', label: 'Facebook' },
    { icon: <FaInstagram className="w-6 h-6" />, href: '#', label: 'Instagram' },
    { icon: <FaTwitter className="w-6 h-6" />, href: '#', label: 'Twitter' },
    { icon: <FaYoutube className="w-6 h-6" />, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-[#3d2952] text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <span className="text-2xl font-heading font-bold text-white">
                  Prospace
                </span>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                India's most trusted home interior brand. We deliver beautiful, 
                functional spaces with guaranteed quality and timely completion. 
                Transform your house into your dream home with Prospace.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <HiPhone className="w-5 h-5 text-primary-400" />
                  <span>1800-123-4567 (Toll Free)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <HiMail className="w-5 h-5 text-primary-400" />
                  <span>hello@prospace.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <HiLocationMarker className="w-5 h-5 text-primary-400" />
                  <span>20+ Cities Across India</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white font-heading font-bold text-lg mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-heading font-bold text-lg mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-white font-heading font-bold text-lg mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 pt-12 border-t border-gray-800"
        >
          <div className="max-w-md w-full">
            <h3 className="text-white font-heading font-bold text-lg mb-4">
              Get Design Inspiration
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for latest designs, trends, and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-500"
              />
              <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {currentYear} Prospace. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Awards/Badges */}
            <div className="flex items-center gap-4">
              <div className="text-xs text-gray-500">
                <span className="text-yellow-400">★★★★★</span> Rated 4.8/5
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
