import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Expanded static project data for all projects
const projectsData = {
  'zinio-office': {
    title: 'Zinio Office',
    subtitle: 'Modern Office Management Platform',
    images: [
      '/images/Screenshot 2025-06-05 120402.png',
      '/images/Screenshot 2025-06-05 120402.png',
      '/images/Screenshot 2025-06-05 120402.png',
      '/images/Screenshot 2025-06-05 120402.png'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    year: '2023',
    client: 'Zinio Technologies',
    description: 'A modern office space management platform that revolutionized how companies handle their workspace.',
    features: [
      'Real-time workspace booking system',
      'Interactive floor plans',
      'Resource management',
      'Analytics dashboard',
    ],
    liveUrl: 'https://zinio-office.com',
  },
  'tourism-malaysia': {
    title: 'Tourism Malaysia',
    subtitle: 'Immersive Digital Tourism Platform',
    images: [
      '/images/dynamic-website-examples.jpg',
      '/images/dynamic-website-examples.jpg',
      '/images/dynamic-website-examples.jpg',
      '/images/dynamic-website-examples.jpg'
    ],
    technologies: ['Next.js', 'Three.js', 'Tailwind CSS', 'GraphQL'],
    year: '2023',
    client: 'Tourism Malaysia',
    description: "An immersive digital platform showcasing Malaysia's rich cultural heritage and tourist destinations.",
    features: [
      'Interactive 3D destination viewer',
      'Multilingual support',
      'Virtual tour experiences',
      'Travel planning tools',
    ],
    liveUrl: 'https://tourism-malaysia.com',
  },
  'truman': {
    title: 'Truman',
    subtitle: 'AI-Powered Customer Service Platform',
    images: [
      '/images/braintech.webp',
      '/images/braintech.webp',
      '/images/braintech.webp',
      '/images/braintech.webp'
    ],
    technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
    year: '2023',
    client: 'Truman AI',
    description: 'A cutting-edge AI-powered customer service platform that transformed client support operations.',
    features: [
      'AI chatbot integration',
      'Sentiment analysis',
      'Automated ticket routing',
      'Performance analytics',
    ],
    liveUrl: 'https://truman.ai',
  },
  'sky-garden': {
    title: 'Sky Garden',
    subtitle: 'Urban Farming Community Platform',
    images: [
      '/images/sky.garden.jpg',
      '/images/sky.garden.jpg',
      '/images/sky.garden.jpg',
      '/images/sky.garden.jpg'
    ],
    technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Docker'],
    year: '2023',
    client: 'Sky Garden Initiative',
    description: 'An innovative urban farming platform connecting communities with sustainable agriculture solutions.',
    features: [
      'Community garden management',
      'Crop planning tools',
      'Weather integration',
      'Marketplace for produce',
    ],
    liveUrl: 'https://sky-garden.org',
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
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - View ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />


              {/* Image Counter */}

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
                className="group cursor-pointer bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-4">{project.subtitle}</p>
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