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
        'WordPress Development',
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
      icon: <FaChartLine className="service-icon" />
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
      icon: <FaPalette className="service-icon" />
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
    <div className="min-h-screen bg-[#0a192f] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-[#112240] to-[#0a192f] opacity-50"></div>
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
      
      <section className="relative py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#64ffda] to-[#4cd8b2]"
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

      <section className="relative max-w-7xl mx-auto px-4 py-12">
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
              className="group bg-[#112240] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-[#1d2d50] relative overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#64ffda]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="text-4xl text-[#64ffda] mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex items-center text-[#8892b0] group-hover:text-[#ccd6f6] transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-2 h-2 bg-[#64ffda] rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      <h4 className="text-lg font-semibold text-white mb-2">{feature}</h4>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-[#64ffda] text-[#0a192f] font-semibold py-3 px-6 rounded-lg hover:bg-[#4cd8b2] transition-colors duration-300 flex items-center justify-center"
                    onClick={() => window.location.href = service.ctaLink}
                  >
                    <span className="text-white font-medium">Start Your Project</span>
                    <FaArrowRight className="ml-2" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full text-[#64ffda] font-semibold py-3 px-6 rounded-lg border border-[#64ffda] hover:bg-[#64ffda]/10 transition-colors duration-300 flex items-center justify-center"
                    onClick={() => setExpandedService(expandedService === index ? null : index)}
                  >
                    <span className="text-white font-medium">Learn More</span>
                    <FaChevronDown className={`ml-2 transform transition-transform duration-300 ${expandedService === index ? 'rotate-180' : ''}`} />
                  </motion.button>
                </div>

                <AnimatePresence>
                  {expandedService === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 overflow-hidden"
                    >
                      <p className="text-[#8892b0] leading-relaxed">
                        {service.longDescription}
                      </p>
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