import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import OptimizedImage from './OptimizedImage';
import 'swiper/css';
import 'swiper/css/pagination';
import './OurWorkCarousel.css';

const projects = [
  {
    id: 'cult-fit',
    image: '/images/Screenshot 2025-06-26 131758.png',
    title: 'Cult Fit',
  },
  {
    id: 'pearl-dental',
    image: '/images/Screenshot 2025-06-26 133422.png',
    title: 'Pearl Dental',
  },
  {
    id: 'bos-coffee',
    image: '/images/bos.png',
    title: 'Bo\'s Coffee',
  },
  {
    id: 'plumber',
    image: '/images/plumber.png',
    title: 'UNC LOG Plumber',
  },
];

const OurWorkCarousel = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <section className="our-work-section">
      <div className="our-work-header">
        <Link to="/products" className="our-work-link">
          <h2>Our Work</h2>
        </Link>
        <p>A Selection of Signature Projects</p>
      </div>
      <div className="our-work-swiper-container">
        <Swiper
          ref={swiperRef}
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ 
            clickable: true, 
            dynamicBullets: true 
          }}
          className="our-work-swiper"
          breakpoints={{
            640: { 
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: { 
              slidesPerView: 3,
              spaceBetween: 30
            }
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <Link to={`/project/${project.id}`} className="work-card">
                <div className="work-card-image-container">
                  <OptimizedImage 
                    src={project.image} 
                    alt={project.title} 
                    className="work-card-img" 
                    loading="lazy"
                  />
                  <div className="work-card-overlay">
                    <span className="view-project">View Project</span>
                  </div>
                </div>
                <div className="work-card-title">{project.title}</div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-navigation">
          <button onClick={handlePrev} className="nav-button">
            <FaChevronLeft />
          </button>
          <button onClick={handleNext} className="nav-button">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurWorkCarousel; 