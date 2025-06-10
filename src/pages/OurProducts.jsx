import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import './OurProducts.css';

const products = [
  {
    id: 'sky-garden',
    title: 'Sky Garden',
    category: 'Real Estate',
    image: '/images/sky.garden.jpg',
    description: 'A luxury residential development featuring modern architecture and sustainable living spaces.',
    technologies: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 'zinio-office',
    title: 'Zinio Office',
    category: 'Commercial',
    image: '/images/zinio.office.jpg',
    description: 'Contemporary office space design with smart technology integration.',
    technologies: ['Vue.js', 'Express', 'PostgreSQL']
  },
  {
    id: 'tourism-malaysia',
    title: 'Tourism Malaysia',
    category: 'Tourism',
    image: '/images/tourism.malaysia.jpg',
    description: 'Official tourism website showcasing Malaysia\'s rich cultural heritage and natural attractions.',
    technologies: ['Next.js', 'GraphQL', 'AWS']
  },
  {
    id: 'truman',
    title: 'Truman',
    category: 'Real Estate',
    image: '/images/truman.jpg',
    description: 'Premium residential project offering sophisticated urban living.',
    technologies: ['React', 'Firebase', 'Stripe']
  },
  {
    id: 'tech-hub',
    title: 'TechHub',
    category: 'Technology',
    image: '/images/tech.hub.jpg',
    description: 'Innovative tech community platform connecting developers and startups.',
    technologies: ['React', 'Firebase', 'Material-UI']
  },
  {
    id: 'eco-market',
    title: 'EcoMarket',
    category: 'E-commerce',
    image: '/images/eco.market.jpg',
    description: 'Sustainable marketplace for eco-friendly products and services.',
    technologies: ['Next.js', 'Firebase', 'Stripe']
  },
  {
    id: 'health-track',
    title: 'HealthTrack',
    category: 'Healthcare',
    image: '/images/health.track.jpg',
    description: 'Comprehensive health monitoring and wellness platform.',
    technologies: ['React', 'Firebase', 'Chart.js']
  },
  {
    id: 'edu-platform',
    title: 'EduPlatform',
    category: 'Education',
    image: '/images/edu.platform.jpg',
    description: 'Interactive learning management system with real-time collaboration.',
    technologies: ['React', 'Firebase', 'WebRTC']
  },
  {
    id: 'food-delivery',
    title: 'FoodExpress',
    category: 'Food & Delivery',
    image: '/images/food.express.jpg',
    description: 'Advanced food delivery platform with real-time tracking.',
    technologies: ['React', 'Firebase', 'Google Maps API']
  },
  {
    id: 'fitness-app',
    title: 'FitLife',
    category: 'Fitness',
    image: '/images/fit.life.jpg',
    description: 'Personalized fitness tracking and workout planning application.',
    technologies: ['React', 'Firebase', 'Redux']
  },
  {
    id: 'real-estate-hub',
    title: 'RealEstateHub',
    category: 'Real Estate',
    image: '/images/real.estate.hub.jpg',
    description: 'Modern real estate platform with virtual tours and AI-powered recommendations.',
    technologies: ['React', 'Firebase', 'Three.js']
  },
  {
    id: 'social-network',
    title: 'ConnectHub',
    category: 'Social Media',
    image: '/images/connect.hub.jpg',
    description: 'Professional networking platform with advanced matching algorithms.',
    technologies: ['React', 'Firebase', 'Socket.io']
  },
  {
    id: 'event-planner',
    title: 'EventMaster',
    category: 'Events',
    image: '/images/event.master.jpg',
    description: 'Comprehensive event planning and management platform.',
    technologies: ['React', 'Firebase', 'FullCalendar']
  },
  {
    id: 'job-portal',
    title: 'JobMatch',
    category: 'Employment',
    image: '/images/job.match.jpg',
    description: 'AI-powered job matching and recruitment platform.',
    technologies: ['React', 'Firebase', 'TensorFlow.js']
  },
  {
    id: 'travel-planner',
    title: 'TravelPlanner',
    category: 'Travel',
    image: '/images/travel.planner.jpg',
    description: 'Intelligent travel planning and booking platform.',
    technologies: ['React', 'Firebase', 'Google Places API']
  },
  {
    id: 'music-streaming',
    title: 'MusicStream',
    category: 'Entertainment',
    image: '/images/music.stream.jpg',
    description: 'Modern music streaming platform with social features.',
    technologies: ['React', 'Firebase', 'Web Audio API']
  },
  {
    id: 'task-manager',
    title: 'TaskMaster',
    category: 'Productivity',
    image: '/images/task.master.jpg',
    description: 'Advanced project management and task tracking application.',
    technologies: ['React', 'Firebase', 'DnD Kit']
  },
  {
    id: 'crypto-tracker',
    title: 'CryptoTracker',
    category: 'Finance',
    image: '/images/crypto.tracker.jpg',
    description: 'Real-time cryptocurrency tracking and portfolio management.',
    technologies: ['React', 'Firebase', 'WebSocket']
  },
  {
    id: 'pet-care',
    title: 'PetCare',
    category: 'Pet Services',
    image: '/images/pet.care.jpg',
    description: 'Comprehensive pet care and veterinary services platform.',
    technologies: ['React', 'Firebase', 'Stripe']
  }
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