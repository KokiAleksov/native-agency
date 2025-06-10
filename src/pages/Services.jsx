import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaChartLine, FaPalette, FaArrowRight, FaChevronDown } from 'react-icons/fa';

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      title: 'Web Design & Development',
      description: 'Custom, responsive websites that drive conversions and deliver exceptional user experiences.',
      features: [
        'Custom Web Design',
        'E-commerce Solutions',
        'React Development',
        'UI/UX Design'
      ],
      longDescription: 'We create stunning, high-performance websites that not only look great but also drive results. Our development process combines cutting-edge technology with user-centered design principles.',
      icon: <FaCode className="service-icon" />,
      ctaText: 'Start Your Project',
      ctaLink: '/contact'
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic digital marketing solutions to grow your online presence and drive business growth.',
      features: [
        'SEO Optimization',
        'Content Marketing',
        'Social Media Management',
        'PPC Advertising'
      ],
      longDescription: 'Our digital marketing strategies are data-driven and results-focused. We help businesses increase their online visibility, generate qualified leads, and achieve sustainable growth through targeted campaigns and optimization.',
      icon: <FaChartLine className="service-icon" />,
      ctaText: 'Learn More',
      ctaLink: '/contact'
    },
    {
      title: 'Brand Strategy',
      description: 'Comprehensive brand development and strategy to establish your unique market position.',
      features: [
        'Brand Identity Design',
        'Brand Messaging',
        'Market Research',
        'Competitive Analysis'
      ],
      longDescription: 'We help businesses build strong, memorable brands that resonate with their target audience. Our brand strategy services combine creative thinking with market insights to create compelling brand stories.',
      icon: <FaPalette className="service-icon" />,
      ctaText: 'Get Started',
      ctaLink: '/contact'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-0">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto mt-24"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-white"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Comprehensive digital solutions to help your business thrive
          </motion.p>
        </motion.div>
      </section>

      <section className="relative max-w-6xl mx-auto px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-gray-900/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-800 hover:border-green-400 relative overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="text-4xl text-green-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      {feature}
                    </motion.div>
                  ))}
                </div>

                <button
                  onClick={() => setExpandedService(expandedService === index ? null : index)}
                  className="w-full flex items-center justify-between text-green-400 hover:text-green-300 transition-colors duration-300"
                >
                  <span className="font-semibold">{service.ctaText}</span>
                  <FaChevronDown 
                    className={`transform transition-transform duration-300 ${
                      expandedService === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {expandedService === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 overflow-hidden"
                    >
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {service.longDescription}
                      </p>
                      <a
                        href={service.ctaLink}
                        className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-300"
                      >
                        Learn more <FaArrowRight className="ml-2" />
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Services; 