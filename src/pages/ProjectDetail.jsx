import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';

// Expanded static project data for all projects
const projectsData = {
  'cult-fit': {
    title: 'Cult Fit',
    subtitle: 'Modern health and fitness platform',
    images: [
      '/images/Screenshot 2025-06-26 131758.png',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    year: '2023',
    client: 'Cult.fit',
    description: 'A modern health and fitness platform that transformed how people approach wellness.',
    features: [
      'Online class booking system',
      'Personalized workout plans',
      'Trainer and program discovery',
      'Nutrition and lifestyle guidance',
    ],
    liveUrl: 'https://www.cult.fit/',
  },
  'pearl-dental': {
    title: 'Pearl Dental',
    subtitle: 'Immersive Digital Tourism Platform',
    images: [
      '/images/Screenshot 2025-06-26 133422.png',
    ],
    technologies: ['Next.js', 'Three.js', 'Tailwind CSS', 'GraphQL'],
    year: '2025',
    client: 'Pearl Dental studio',
    description: "A modern dental care platform offering seamless appointment booking and personalized oral health services.",
    features: [
      "Online appointment scheduling",
      "Dentist profile and service browsing",
      "Treatment history and reminders",
      "Patient education and tips for oral hygiene",
    ],
    liveUrl: 'https://pearlcares.com/',
  },
  'bos-coffee': {
    title: 'Bo\'s Coffee',
    subtitle: 'Bo\'s Coffee highlights Philippine coffee',
    images: [
      '/images/bos.png',
    ],
    technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
    year: '2025',
    client: 'Bo\'s Coffee shop',
    description: "A premium coffee shop platform enhancing customer experience and brand loyalty through digital engagement.",
    features: [
      "Online menu and ordering system",
      "Store locator with map integration",
      "Loyalty and rewards program",
      "Promotions and personalized offers",
    ],
    liveUrl: 'https://www.boscoffee.com/',
  },
  'plumber': {
    title: 'UNC LOG Plumber',
    subtitle: '#1 Plumbing Company in NYC',
    images: [
      '/images/plumber.png',
    ],
    technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Docker'],
    year: '2025',
    client: 'UNCLOG NYC',
    description: "A reliable plumbing service platform designed to streamline bookings and connect NYC residents with certified professionals.",
    features: [
      "Instant plumber booking system",
      "Service tracking and updates",
      "Emergency repair requests",
      "Customer reviews and ratings",
    ],
    liveUrl: 'https://unclognyc.com/',
  },
  'food-delivery': {
    title: 'FoodExpress',
    subtitle: 'Advanced food delivery platform',
    images: [
      '/images/kebap.png',
    ],
    technologies: ['React', 'Firebase', 'Google Maps API', 'Stripe'],
    year: '2024',
    client: 'FoodExpress Inc.',
    description: 'Advanced food delivery platform with real-time tracking and seamless ordering experience.',
    features: [
      'Real-time order tracking',
      'Restaurant discovery and menu browsing',
      'Secure payment processing',
      'Driver location and ETA updates',
      'Order history and favorites',
    ],
    liveUrl: 'https://www.foodexpress.ro/',
  },
  'fitness-app': {
    title: 'FitLife',
    subtitle: 'Personalized fitness tracking platform',
    images: [
      '/images/fitlife.png',
    ],
    technologies: ['React', 'Firebase', 'Redux', 'Chart.js'],
    year: '2024',
    client: 'FitLife Technologies',
    description: 'Personalized fitness tracking and workout planning application with AI-powered recommendations.',
    features: [
      'Personalized workout plans',
      'Progress tracking and analytics',
      'Nutrition planning and calorie counting',
      'Social features and challenges',
      'Integration with fitness devices',
    ],
    liveUrl: 'https://fitlifebrands.com/',
  },
  'real-estate-hub': {
    title: 'RealEstateHub',
    subtitle: 'Modern real estate platform',
    images: [
      '/images/estate.png',
    ],
    technologies: ['React', 'Firebase', 'Three.js', 'AI/ML'],
    year: '2024',
    client: 'RealEstateHub Corp.',
    description: 'Modern real estate platform with virtual tours and AI-powered recommendations for property discovery.',
    features: [
      'Virtual property tours with 3D visualization',
      'AI-powered property recommendations',
      'Advanced search and filtering',
      'Mortgage calculator and financing tools',
      'Agent and client communication platform',
    ],
    liveUrl: 'https://exprealestatehub.com/',
  },
  'social-network': {
    title: 'ConnectHub',
    subtitle: 'Professional networking platform',
    images: [
      '/images/hub.png',
    ],
    technologies: ['React', 'Firebase', 'Socket.io', 'Node.js'],
    year: '2024',
    client: 'ConnectHub Networks',
    description: 'Professional networking platform with advanced matching algorithms and real-time communication.',
    features: [
      'Professional profile creation and networking',
      'Advanced matching algorithms',
      'Real-time messaging and video calls',
      'Job posting and application system',
      'Industry-specific communities and groups',
    ],
    liveUrl: 'https://connecthub.io/',
  },
  'event-planner': {
    title: 'EventMaster',
    subtitle: 'Comprehensive event planning platform',
    images: [
      '/images/event.png',
    ],
    technologies: ['React', 'Firebase', 'FullCalendar', 'Stripe'],
    year: '2024',
    client: 'EventMaster Solutions',
    description: 'Comprehensive event planning and management platform for seamless event organization.',
    features: [
      'Event creation and management dashboard',
      'Ticket sales and registration system',
      'Venue booking and vendor management',
      'Real-time event analytics and reporting',
      'Mobile app for event attendees',
    ],
    liveUrl: 'https://eventmaster.ie/',
  },
  'travel-planner': {
    title: 'Stippl',
    subtitle: 'Intelligent travel planning platform',
    images: [
      '/images/travel.png',
    ],
    technologies: ['React', 'Firebase', 'Google Places API', 'Maps API'],
    year: '2024',
    client: 'TravelPlanner International',
    description: 'Intelligent travel planning and booking platform with AI-powered itinerary suggestions.',
    features: [
      'AI-powered travel itinerary planning',
      'Hotel and flight booking integration',
      'Local attraction and restaurant recommendations',
      'Travel budget tracking and management',
      'Travel community and reviews',
    ],
    liveUrl: 'https://stippl.io/',
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectsData[projectId];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const handleLiveUrlClick = () => {
    window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
  };

  if (!project) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="text-center p-8 rounded-2xl bg-gray-900/80 border border-green-400/20 shadow-lg">
            <h1 className="text-4xl font-bold text-green-400 mb-4">Project Not Found</h1>
            <button
                onClick={() => navigate(-1)}
                className="px-6 py-2 rounded-full bg-green-400 text-gray-900 font-semibold hover:bg-green-300 transition-all duration-300"
            >
              Go Back
            </button>
          </div>
        </div>
    );
  }

  return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-0">
        {/* Back Button */}
        <div className="max-w-6xl mx-auto px-8 mt-24 mb-4">
          <button
              onClick={() => navigate(-1)}
              className="px-6 py-2 rounded-full bg-green-400 text-gray-900 font-semibold hover:bg-green-300 transition-all duration-200 shadow"
          >
            ← Back
          </button>
        </div>
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-6xl mx-auto gap-12">
          <div className="flex-1">
            <h2 className="text-lg text-green-400 font-semibold mb-2 uppercase tracking-wider">{project.subtitle}</h2>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-xl">{project.description}</p>
            <div className="flex flex-wrap gap-3 mb-8">
              {project.technologies.map((tech, idx) => (
                  <span key={idx} className="bg-green-400 text-gray-900 font-bold px-4 py-2 rounded-full text-sm shadow-md tracking-wide">
                {tech}
              </span>
              ))}
            </div>
            <div className="flex gap-8 mb-8">
              <div>
                <div className="text-xs text-green-400 font-bold uppercase mb-1">Client</div>
                <div className="text-white font-semibold">{project.client}</div>
              </div>
              <div>
                <div className="text-xs text-green-400 font-bold uppercase mb-1">Year</div>
                <div className="text-white font-semibold">{project.year}</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center -mt-16">
            <div className="relative w-full max-w-3xl">
              {/* Main Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-2xl border-4 border-gray-800">
                <OptimizedImage
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} - View ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    loading="eager"
                />
              </div>

              {/* Live Site Button */}
              <div className="mt-6 flex justify-center">
                <button
                    onClick={handleLiveUrlClick}
                    className="px-8 py-3 bg-gradient-to-r from-green-400 to-green-500 text-gray-900 font-bold rounded-full text-lg shadow-lg hover:from-green-300 hover:to-green-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2"
                >
                  <span>Visit Site</span>
                  <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </button>
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex gap-4 mt-4 justify-center">
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="max-w-4xl mx-auto px-8 pb-16">
          <h3 className="text-2xl font-bold text-green-400 mb-4">Key Features</h3>
          <ul className="list-disc list-inside text-lg text-gray-200 space-y-2 pl-4">
            {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
            ))}
          </ul>
        </section>
        {/* Other Projects Section */}
        <section className="max-w-6xl mx-auto px-8 pb-24">
          <h3 className="text-2xl font-bold text-green-400 mb-8">See Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(projectsData)
                .filter(([id]) => id !== projectId)
                .map(([id, project]) => (
                    <div
                        key={id}
                        onClick={() => navigate(`/project/${id}`)}
                        className="group cursor-pointer bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20 flex flex-col h-full"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden flex-shrink-0">
                        <OptimizedImage
                            src={project.images[0]}
                            alt={project.title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h4 className="text-xl font-bold mb-2 text-white group-hover:text-green-400 transition-colors duration-300">
                            {project.title}
                          </h4>
                          <p className="text-gray-200 text-sm">{project.subtitle}</p>
                        </div>
                      </div>
                      <div className="p-6 flex-grow">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech, idx) => (
                              <span
                                  key={idx}
                                  className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full"
                              >
                        {tech}
                      </span>
                          ))}
                          {project.technologies.length > 3 && (
                              <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                          )}
                        </div>
                      </div>
                    </div>
                ))}
          </div>
        </section>
      </div>
  );
};

export default ProjectDetail;