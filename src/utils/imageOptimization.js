// Image optimization utilities
export const getOptimizedImageUrl = (originalPath, options = {}) => {
  const {
    width = null,
    height = null,
    quality = 80,
    format = 'webp'
  } = options;

  // If no optimization needed, return original
  if (!width && !height) {
    return originalPath;
  }

  // For now, return the original path
  // In a real implementation, you would integrate with an image optimization service
  // like Cloudinary, ImageKit, or implement server-side optimization
  return originalPath;
};

// Preload critical images
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

// Preload multiple images
export const preloadImages = (imageUrls) => {
  return Promise.all(imageUrls.map(url => preloadImage(url)));
};

// Get image dimensions from path (for responsive images)
export const getImageDimensions = (imagePath) => {
  const dimensions = {
    'Screenshot 2025-06-05 120402.png': { width: 1920, height: 1080 },
    'Screenshot 2025-06-26 131758.png': { width: 1920, height: 1080 },
    'Screenshot 2025-06-26 133422.png': { width: 1920, height: 1080 },
    'bos.png': { width: 1200, height: 800 },
    'plumber.png': { width: 1200, height: 800 },
    'kebap.png': { width: 1200, height: 800 },
    'job.png': { width: 1200, height: 800 },
    'hub.png': { width: 1200, height: 800 },
    'fitlife.png': { width: 1200, height: 800 },
    'event.png': { width: 1200, height: 800 },
    'estate.png': { width: 1200, height: 800 },
    'travel.png': { width: 1200, height: 800 },
    'edu.png': { width: 1200, height: 800 },
    'braintech.webp': { width: 800, height: 600 },
    'dynamic-website-examples.jpg': { width: 800, height: 600 },
    'sky.garden.jpg': { width: 800, height: 600 },
    'web-development-team-collaboration-illustration-yz5n469ruq1f8yb9-yz5n469ruq1f8yb9.png': { width: 600, height: 400 }
  };

  const fileName = imagePath.split('/').pop();
  return dimensions[fileName] || { width: 800, height: 600 };
};

// Generate responsive image srcset
export const generateSrcSet = (imagePath, sizes = [400, 800, 1200, 1600]) => {
  const basePath = imagePath.replace(/\.(png|jpg|jpeg|webp)$/, '');
  const extension = imagePath.match(/\.(png|jpg|jpeg|webp)$/)?.[1] || 'jpg';
  
  return sizes
    .map(size => `${getOptimizedImageUrl(imagePath, { width: size })} ${size}w`)
    .join(', ');
};

// Critical images that should be preloaded
export const CRITICAL_IMAGES = [
  '/images/braintech.webp',
  '/images/dynamic-website-examples.jpg',
  '/images/sky.garden.jpg'
];

// Lazy load images below the fold
export const shouldLazyLoad = (imagePath) => {
  const lazyLoadImages = [
    '/images/Screenshot 2025-06-05 120402.png',
    '/images/Screenshot 2025-06-26 131758.png',
    '/images/Screenshot 2025-06-26 133422.png',
    '/images/bos.png',
    '/images/plumber.png',
    '/images/kebap.png',
    '/images/job.png',
    '/images/hub.png',
    '/images/fitlife.png',
    '/images/event.png',
    '/images/estate.png',
    '/images/travel.png',
    '/images/edu.png'
  ];
  
  return lazyLoadImages.includes(imagePath);
}; 