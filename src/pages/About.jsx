import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaLightbulb, FaAward, FaHandshake, FaHeart, FaLinkedin, FaTwitter, FaGithub, FaChevronRight } from 'react-icons/fa';

const About = () => {
  const [activeTimelineItem, setActiveTimelineItem] = useState(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const teamMembers = [
    {
      name: 'Jovan Pendev',
      position: 'Co-Founder & Creative Director',
      image: 'https://placehold.co/400x400/112240/64ffda?text=JP',
      bio: 'Visionary creative director with expertise in brand development and digital innovation.',
      longBio: 'Jovan co-founded our agency with a passion for creating meaningful digital experiences. With extensive experience in creative direction, he leads our design team in developing innovative solutions that connect brands with their audiences.',
      social: {},
      skills: ['Creative Direction', 'Brand Strategy', 'UI/UX Design', 'Visual Identity', 'Design Systems', 'User Research', 'Prototyping', 'Design Leadership']
    },
    {
      name: 'Nikola Aleksov',
      position: 'Co-Founder & Lead Developer',
      image: 'https://placehold.co/400x400/112240/64ffda?text=NA',
      bio: 'Technical architect specializing in scalable web applications and emerging technologies.',
      longBio: 'Nikola brings deep technical expertise to our agency as co-founder and lead developer. He architects robust, scalable solutions and leads our development team in implementing cutting-edge technologies.',
      social: {},
      skills: ['Full Stack Development', 'React/Next.js', 'Node.js/Express', 'Python/Django', 'Database Design', 'API Architecture', 'DevOps', 'Cloud Infrastructure', 'Performance Optimization']
    },
    {
      name: 'Michael Chen',
      position: 'Digital Strategist',
      image: 'https://placehold.co/400x400/112240/64ffda?text=MC',
      bio: 'Specializes in digital marketing and growth strategies.',
      longBio: 'Michael combines data-driven insights with creative thinking to develop effective digital strategies that drive business growth.',
      social: {},
      skills: ['Digital Marketing', 'Analytics', 'Strategy']
    }
  ];

  const stats = [
    { number: '10+', label: 'Years Experience', icon: <FaAward /> },
    { number: '140+', label: 'Projects Completed', icon: <FaHandshake /> },
    { number: '10+', label: 'Team Members', icon: <FaHeart /> },
    { number: '15+', label: 'Industry Awards', icon: <FaLightbulb /> }
  ];

  const timeline = [
    {
      year: '2014',
      title: 'Company Founded',
      description: 'Started with a small team of passionate developers and designers.',
      milestone: true
    },
    {
      year: '2016',
      title: 'First Major Client',
      description: 'Secured our first enterprise client and expanded our team.',
      milestone: true
    },
    {
      year: '2018',
      title: 'International Expansion',
      description: 'Opened offices in multiple countries and established global partnerships.',
      milestone: true
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Launched innovative digital solutions and expanded service offerings.',
      milestone: true
    },
    {
      year: '2024',
      title: 'Industry Leadership',
      description: 'Recognized as a leading digital agency with cutting-edge solutions.',
      milestone: true
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Pushing boundaries and embracing new technologies',
      icon: <FaLightbulb />,
      color: 'from-[#64ffda] to-[#4cd8b2]'
    },
    {
      title: 'Excellence',
      description: 'Delivering exceptional quality in everything we do',
      icon: <FaAward />,
      color: 'from-[#ff6b6b] to-[#ff8e8e]'
    },
    {
      title: 'Collaboration',
      description: 'Working together to achieve extraordinary results',
      icon: <FaHandshake />,
      color: 'from-[#4dabf7] to-[#74c0fc]'
    },
    {
      title: 'Integrity',
      description: 'Building trust through honest and transparent relationships',
      icon: <FaHeart />,
      color: 'from-[#ffd43b] to-[#fcc419]'
    }
  ];

  // Add error handling for images
  const ImageWithFallback = ({ src, alt, className }) => {
    const [error, setError] = useState(false);
    
    return (
      <img 
        src={error ? 'https://placehold.co/400x400/112240/64ffda?text=Image+Not+Found' : src}
        alt={alt}
        className={className}
        onError={() => setError(true)}
      />
    );
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
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            We're a team of digital innovators passionate about creating exceptional online experiences
          </motion.p>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900/50 rounded-2xl shadow-lg p-8 mb-12 border border-gray-800 hover:border-green-400 transition-colors duration-300 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent"></div>
          <div className="relative">
            <h2 className="text-3xl font-bold text-green-400 mb-6">Our Mission</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Founded in 2014, we've grown from a small team of passionate developers into a full-service
                digital agency. Our mission is to help businesses thrive in the digital landscape through
                innovative solutions and strategic thinking.
              </p>
              <p>
                We believe in the power of technology to transform businesses and create meaningful
                connections with customers. Every project we undertake is an opportunity to push boundaries
                and deliver exceptional results.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center bg-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-green-400 transition-colors duration-300"
            >
              <div className="text-4xl text-green-400 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 transform -translate-x-1/2"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-green-400 transition-colors duration-300 cursor-pointer"
                      onClick={() => setActiveTimelineItem(activeTimelineItem === index ? null : index)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-white">{item.year}</span>
                        <FaChevronRight className={`text-gray-400 transform transition-transform duration-300 ${
                          activeTimelineItem === index ? 'rotate-90' : ''
                        }`} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: activeTimelineItem === index ? 'auto' : 0,
                          opacity: activeTimelineItem === index ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-300 leading-relaxed">{item.description}</p>
                      </motion.div>
                    </motion.div>
                  </div>
                  <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-green-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group bg-gray-900/50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-green-400"
              >
                <div className="relative">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex space-x-4">
                      {Object.entries(member.social).map(([platform, url]) => (
                        <motion.a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-green-400 text-gray-900 p-3 rounded-full hover:bg-green-300 transition-colors duration-300"
                        >
                          {platform === 'linkedin' && <FaLinkedin />}
                          {platform === 'twitter' && <FaTwitter />}
                          {platform === 'github' && <FaGithub />}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <div className="text-green-400 font-medium">{member.position}</div>
                  <p className="text-gray-300 mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 rounded-full text-sm bg-gray-800 text-green-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gray-900/50 rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-green-400"
              >
                <div className="text-4xl mb-4 flex justify-center text-green-400">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About; 