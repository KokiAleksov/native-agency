import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import './OurProducts.css';

const products = [
  {
    id: 'cult-fit',
    title: 'Cult Fit',
    category: 'Gym & Welness',
    image: '/images/Screenshot 2025-06-26 131758.png',
    description: 'A modern health and fitness platform that transformed how people approach wellness.',
    technologies: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 'pearl-dental',
    title: 'Pearl Dental',
    category: 'Dental service',
    image: '/images/Screenshot 2025-06-26 133422.png',
    description: 'Contemporary office space design with smart technology integration.',
    technologies: ['Vue.js', 'Express', 'PostgreSQL']
  },
  {
    id: 'bos-coffee',
    title: 'Bo\'s Coffee',
    category: 'Coffee shop',
    image: '/images/bos.png',
    description: "A premium coffee shop platform enhancing customer experience and brand loyalty through digital engagement.",
    technologies: ['Next.js', 'GraphQL', 'AWS']
  },
  {
    id: 'plumber',
    title: 'Pearl Dental',
    category: '#1 Plumbing Company in NYC',
    image: '/images/plumber.png',
    description: "A reliable plumbing service platform designed to streamline bookings and connect NYC residents with certified professionals.",
    technologies: ['React', 'Firebase', 'Stripe']
  },
  {
    id: 'food-delivery',
    title: 'FoodExpress',
    category: 'Food & Delivery',
    image: '/images/kebap.png',
    description: 'Advanced food delivery platform with real-time tracking.',
    technologies: ['React', 'Firebase', 'Google Maps API']
  },
  {
    id: 'fitness-app',
    title: 'FitLife',
    category: 'Fitness',
    image: '/images/fitlife.png',
    description: 'Personalized fitness tracking and workout planning application.',
    technologies: ['React', 'Firebase', 'Redux']
  },
  {
    id: 'real-estate-hub',
    title: 'RealEstateHub',
    category: 'Real Estate',
    image: '/images/estate.png',
    description: 'Modern real estate platform with virtual tours and AI-powered recommendations.',
    technologies: ['React', 'Firebase', 'Three.js']
  },
  {
    id: 'social-network',
    title: 'ConnectHub',
    category: 'Social Media',
    image: '/images/hub.png',
    description: 'Professional networking platform with advanced matching algorithms.',
    technologies: ['React', 'Firebase', 'Socket.io']
  },
  {
    id: 'event-planner',
    title: 'EventMaster',
    category: 'Events',
    image: '/images/event.png',
    description: 'Comprehensive event planning and management platform.',
    technologies: ['React', 'Firebase', 'FullCalendar']
  },
  {
    id: 'travel-planner',
    title: 'TravelPlanner',
    category: 'Travel',
    image: '/images/travel.png',
    description: 'Intelligent travel planning and booking platform.',
    technologies: ['React', 'Firebase', 'Google Places API']
  },
];

const OurProducts = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section className="our-products-section">
      <div className="our-products-header">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Products
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore our portfolio of innovative web solutions
        </motion.p>
      </div>

      <div className="products-grid">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="product-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => handleProjectClick(product.id)}
            style={{ cursor: 'pointer' }}
          >
            <div className="product-image-container">
              <img src={product.image} alt={product.title} className="product-image" />
              <div className="product-overlay">
                <Link to={`/project/${product.id}`} className="view-project">
                  View Project
                </Link>
              </div>
            </div>
            <div className="product-content">
              <span className="product-category">{product.category}</span>
              <h2 className="product-title">{product.title}</h2>
              <p className="product-description">{product.description}</p>
              <div className="product-technologies">
                {product.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurProducts; 