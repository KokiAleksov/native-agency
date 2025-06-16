import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaArrowRight } from 'react-icons/fa';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Get the API URL based on environment
  const API_URL = import.meta.env.PROD 
    ? 'https://nativeagency.info/api/send-quote'  // Production URL
    : 'http://localhost:3001/api/send-quote';     // Development URL

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Error:', error);
      setSubmitError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Get a Quote
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Let's discuss how we can help transform your digital presence
          </motion.p>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Company Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-green-400 transition-colors duration-300"
          >
            <h2 className="text-3xl font-bold text-green-400 mb-6">Transform Your Digital Presence</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              At NΛTIVE, we're more than just a web design agency. We're your strategic partner in digital growth, 
              combining creative excellence with technical expertise to deliver exceptional results.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl text-green-400 mt-1">🎯</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Strategic Approach</h3>
                  <p className="text-gray-300">Data-driven strategies tailored to your business goals</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl text-green-400 mt-1">💡</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Creative Excellence</h3>
                  <p className="text-gray-300">Innovative designs that capture your brand essence</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl text-green-400 mt-1">⚡</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Technical Expertise</h3>
                  <p className="text-gray-300">Cutting-edge development for optimal performance</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl text-green-400 mt-1">📈</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Growth Focus</h3>
                  <p className="text-gray-300">Results-oriented solutions that drive business growth</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quote Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-green-400 transition-colors duration-300"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-black placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-black placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-black placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors duration-300"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-black placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors duration-300"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-black placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors duration-300"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-colors duration-300 ${
                  isSubmitting || submitSuccess
                    ? 'bg-green-400/50 cursor-not-allowed'
                    : 'bg-green-400 text-gray-900 hover:bg-green-300'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                    Submitting...
                  </>
                ) : submitSuccess ? (
                  <>
                    <FaCheck className="text-xl" />
                    Submitted Successfully!
                  </>
                ) : (
                  <>
                    Submit Request <FaArrowRight />
                  </>
                )}
              </motion.button>
              
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg"
                >
                  <p className="font-semibold">Error:</p>
                  <p className="mt-1">{submitError}</p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuoteForm; 