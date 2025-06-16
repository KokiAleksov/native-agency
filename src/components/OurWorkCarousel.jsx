import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import './OurWorkCarousel.css';

const projects = [
  {
    id: 'zinio-office',
    image: '/images/Screenshot 2025-06-05 120402.png',
    title: 'Zinio Office',
  },
  {
    id: 'tourism-malaysia',
    image: '/images/dynamic-website-examples.jpg',
    title: 'Tourism Malaysia',
  },
  {
    id: 'truman',
    image: '/images/braintech.webp',
    title: 'Truman',
  },
  {
    id: 'sky-garden',
    image: '/images/sky.garden.jpg',
    title: 'Sky Garden',
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
        <h2>Our Work</h2>
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
                  <img src={project.image} alt={project.title} className="work-card-img" />
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