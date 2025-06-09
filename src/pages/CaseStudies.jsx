import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChartLine, FaUsers, FaRocket, FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [counters, setCounters] = useState({});

  const caseStudies = [
    {
      title: 'E-commerce Transformation',
      client: 'Fashion Retailer',
      description: 'Complete website redesign and development resulting in 150% increase in online sales.',
      image: '/images/case-study-1.jpg',
      video: '/videos/case-study-1.mp4',
      metrics: {
        salesIncrease: 150,
        conversionRate: 45,
        bounceRate: 25
      },
      icon: <FaChartLine />,
      clientLogo: '/images/client-logo-1.png',
      testimonial: "The team delivered exceptional results that transformed our online presence and significantly boosted our sales."
    },
    {
      title: 'Brand Revitalization',
      client: 'Tech Startup',
      description: 'Comprehensive brand strategy and digital presence overhaul leading to 200% growth in market share.',
      image: '/images/case-study-2.jpg',
      metrics: {
        marketShare: 200,
        engagement: 85,
        leads: 300
      },
      icon: <FaUsers />
    },
    {
      title: 'Digital Marketing Campaign',
      client: 'B2B Service Provider',
      description: 'Strategic digital marketing campaign resulting in 300% increase in qualified leads.',
      image: '/images/case-study-3.jpg',
      metrics: {
        leadIncrease: 300,
        cpc: 35,
        roi: 450
      },
      icon: <FaRocket />
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isPlaying, caseStudies.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const study = caseStudies[currentIndex];
            Object.entries(study.metrics).forEach(([key, value]) => {
              animateCounter(key, value);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('metrics-container');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [currentIndex]);

  const animateCounter = (key, target) => {
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const current = Math.floor(progress * target);
      setCounters(prev => ({ ...prev, [key]: current }));

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
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
            Case Studies
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Discover how we've helped businesses achieve their digital goals
          </motion.p>
        </motion.div>
      </section>

      <section className="relative max-w-7xl mx-auto px-4 py-12">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-[#112240] rounded-2xl shadow-lg overflow-hidden border border-[#1d2d50]"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative group">
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={caseStudies[currentIndex].image} 
                      alt={caseStudies[currentIndex].title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-[#64ffda] text-[#0a192f] p-4 rounded-full"
                        onClick={() => {/* Handle video play */}}
                      >
                        <FaPlay />
                      </motion.button>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <img 
                      src={caseStudies[currentIndex].clientLogo} 
                      alt="Client Logo"
                      className="h-12 w-auto bg-white/90 p-2 rounded-lg"
                    />
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-[#64ffda] text-[#0a192f] p-3 rounded-full">
                      {caseStudies[currentIndex].icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-[#ccd6f6]">{caseStudies[currentIndex].title}</h2>
                      <p className="text-[#64ffda]">{caseStudies[currentIndex].client}</p>
                    </div>
                  </div>

                  <p className="text-[#8892b0] mb-8 leading-relaxed">{caseStudies[currentIndex].description}</p>

                  <div id="metrics-container" className="grid grid-cols-3 gap-4 mb-8">
                    {Object.entries(caseStudies[currentIndex].metrics).map(([key, value]) => (
                      <motion.div 
                        key={key}
                        className="text-center p-4 bg-[#1d2d50] rounded-lg"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-3xl font-bold text-[#64ffda] mb-1">
                          {counters[key] || 0}%
                        </div>
                        <div className="text-sm text-[#8892b0] capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <blockquote className="border-l-4 border-[#64ffda] pl-4 italic text-[#8892b0] mb-8">
                    "{caseStudies[currentIndex].testimonial}"
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#64ffda] text-[#0a192f] p-3 rounded-full shadow-lg"
              onClick={prevSlide}
            >
              <FaChevronLeft />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#64ffda] text-[#0a192f] p-3 rounded-full shadow-lg"
              onClick={nextSlide}
            >
              <FaChevronRight />
            </motion.button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {caseStudies.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-[#64ffda]' : 'bg-[#1d2d50]'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies; 