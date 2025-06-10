import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaSitemap, FaPalette, FaCode, FaCheckCircle, FaRocket } from 'react-icons/fa';

const DesignProcess = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Web Strategy',
      icon: <FaSearch className="text-3xl" />,
      description: 'We use in-depth research and analysis as key pillars to build a step-by-step plan that expands your digital presence and drives online growth.',
      features: [
        'Identify your target audiences',
        'Analyze user pain-points & define your UVPs',
        'Define key performance indicators (KPIs)',
        'Create a roadmap to growing your brand online'
      ]
    },
    {
      number: '02',
      title: 'Planning & Information Architecture',
      icon: <FaSitemap className="text-3xl" />,
      description: 'We utilize proven techniques to map your content, meet user intentions and create an engaging user experience. We ensure seamless user journeys to key conversion points.',
      features: [
        'Develop a base-level user flow & sitemap',
        'Utilize wireframing to create a seamless conversion funnel',
        'Add on-brand, consistent messaging to your structure'
      ]
    },
    {
      number: '03',
      title: 'Creative Design',
      icon: <FaPalette className="text-3xl" />,
      description: 'This stage is where you will see your site come to life. Our award-winning designers implement your unique branding elements to add your identity to your custom web design.',
      features: [
        'Thoughtfully place design features to guide the user journey',
        'Utilize interactive videos & animations',
        'Create custom, branded illustrations',
        'Ensure accessibility & search engine optimization'
      ]
    },
    {
      number: '04',
      title: 'Responsive Development',
      icon: <FaCode className="text-3xl" />,
      description: 'A responsive website is fast, accessible and easy to navigate. It automatically scales to various screen sizes and devices, driving user experience and climbing search engine rankings.',
      features: [
        'Gather touchpoint & user-channel insights',
        'Transform your wireframes into a flexible UI',
        'Test across devices before approval & launch'
      ]
    },
    {
      number: '05',
      title: 'Quality Assurance (QA)',
      icon: <FaCheckCircle className="text-3xl" />,
      description: 'We pride ourselves on delivering measurable results and professional outcomes. We guarantee a high-quality digital experience for your brand.',
      features: [
        'Actively involve our clients throughout every project',
        'Meticulously test all designs to catch errors',
        'Use tried-and-tested tools to secure before launch'
      ]
    },
    {
      number: '06',
      title: 'Launch & Optimization',
      icon: <FaRocket className="text-3xl" />,
      description: 'Our end-to-end website design services cover both launch and post-launch support. We monitor, test and optimize your website elements to ensure every part of your site is functioning optimally.',
      features: [
        'Follow a strict protocol for every website launch',
        'Offer post-launch maintenance & optimization',
        'Implement a digital marketing plan to drive awareness'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-0">
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
            Website Design Process
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Take a peek behind the curtain and explore the custom web design process our team follows.
            We build custom sites for brands of all sizes that deliver measurable results.
          </motion.p>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-8 py-12">
        <div className="space-y-24">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connector Line */}
              {index < processSteps.length - 1 && (
                <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-gray-700 transform -translate-x-1/2"></div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Number and Icon */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center text-2xl font-bold text-green-400">
                      {step.number}
                    </div>
                    <div className="text-green-400 lg:hidden">
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-10">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-green-400 transition-colors duration-300"
                  >
                    <div className="flex items-start gap-6">
                      <div className="hidden lg:block text-green-400">
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">{step.description}</p>
                        <ul className="space-y-3">
                          {step.features.map((feature, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: idx * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start gap-3 text-gray-300"
                            >
                              <span className="text-green-400 mt-1">•</span>
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DesignProcess; 