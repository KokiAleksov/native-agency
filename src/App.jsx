import { useState, useEffect, useRef } from 'react'
import { Routes, Route, useNavigate, Link, useLocation } from 'react-router-dom'
import { FaBullseye, FaGlobe, FaLightbulb, FaHandshake, FaShoppingCart, FaSearch, FaBolt, FaTools } from 'react-icons/fa'
import './App.css'
import './styles/StatsCounter.css'
import './styles/Pages.css'
import './styles/image-optimization.css'
import QuoteForm from './components/QuoteForm'
import StatsCounter from './components/StatsCounter'
import Services from './pages/Services'
import About from './pages/About'
import OurProducts from './pages/OurProducts'
import OurWorkCarousel from './components/OurWorkCarousel'
import ScrollToTop from './components/ScrollToTop'
import ProjectDetail from './pages/ProjectDetail'
import Footer from './components/Footer'
import OptimizedImage from './components/OptimizedImage'
import { preloadImages, CRITICAL_IMAGES } from './utils/imageOptimization'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const websiteProcessScrollRef = useRef(null)
  const whyChooseRef = useRef(null)
  const processSectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Preload critical images
  useEffect(() => {
    preloadImages(CRITICAL_IMAGES).catch(console.error)
  }, [])

  useEffect(() => {
    const el = websiteProcessScrollRef.current
    if (!el) return
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault()
        el.scrollLeft += e.deltaY
      }
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.why-choose-item')
            items.forEach((item) => {
              item.classList.remove('animate')
              void item.offsetWidth
              item.classList.add('animate')
            })
          } else {
            const items = entry.target.querySelectorAll('.why-choose-item')
            items.forEach((item) => {
              item.classList.remove('animate')
            })
          }
        })
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (whyChooseRef.current) {
      const items = whyChooseRef.current.querySelectorAll('.why-choose-item')
      items.forEach((item) => {
        item.classList.remove('animate')
      })

      observer.observe(whyChooseRef.current)
      const fallbackTimeout = setTimeout(() => {
        const items = whyChooseRef.current.querySelectorAll('.why-choose-item')
        items.forEach((item) => {
          if (!item.classList.contains('animate')) {
            item.classList.add('animate')
          }
        })
      }, 1000)

      return () => {
        if (whyChooseRef.current) {
          observer.unobserve(whyChooseRef.current)
        }
        clearTimeout(fallbackTimeout)
      }
    }
  }, [location.pathname])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.process-step')
            items.forEach((item, index) => {
              item.classList.remove('animate')
              void item.offsetWidth
              setTimeout(() => {
                item.classList.add('animate')
              }, index * 200)
            })
          } else {
            const items = entry.target.querySelectorAll('.process-step')
            items.forEach((item) => {
              item.classList.remove('animate')
            })
          }
        })
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (processSectionRef.current) {
      const items = processSectionRef.current.querySelectorAll('.process-step')
      items.forEach((item) => {
        item.classList.remove('animate')
      })

      observer.observe(processSectionRef.current)
      const fallbackTimeout = setTimeout(() => {
        const items = processSectionRef.current.querySelectorAll('.process-step')
        items.forEach((item, index) => {
          if (!item.classList.contains('animate')) {
            setTimeout(() => {
              item.classList.add('animate')
            }, index * 200)
          }
        })
      }, 1000)

      return () => {
        if (processSectionRef.current) {
          observer.unobserve(processSectionRef.current)
        }
        clearTimeout(fallbackTimeout)
      }
    }
  }, [location.pathname])

  const menuItems = [
    { title: 'Services', link: '/services' },
    { title: 'Our Products', link: '/products' },
    { title: 'About', link: '/about' },
    { title: 'Book a Meeting', link: '/quote' }
  ]

  const handleQuoteClick = () => {
    navigate('/quote')
  }

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault()
      window.location.reload()
    }
  }

  const processSteps = [
    {
      number: '01',
      title: 'Web Strategy',
      desc: 'We craft data-driven strategies that transform your digital presence. Through comprehensive research and analysis, we build a clear roadmap for your online success.',
      bullets: [
        { text: 'Identify and understand your target audience segments' },
        { text: 'Analyze user pain points and define unique value propositions' },
        { text: 'Establish clear KPIs to measure success' },
        { text: 'Create a strategic roadmap for sustainable growth' }
      ],
    },
    {
      number: '02',
      title: 'Planning & Information Architecture',
      desc: 'We design intuitive user journeys that convert. Our structured approach ensures your content is organized for maximum engagement and seamless user experience.',
      bullets: [
        { text: 'Map user flows and create a strategic sitemap' },
        { text: 'Design conversion-focused wireframes' },
        { text: 'Develop consistent, on-brand messaging architecture' }
      ],
    },
    {
      number: '03',
      title: 'Creative Design',
      desc: 'We bring your brand to life through stunning, purposeful design. Our award-winning team creates visually compelling experiences that engage and convert.',
      bullets: [
        { text: 'Design intuitive user interfaces that guide conversions' },
        { text: 'Create engaging interactive elements and animations' },
        { text: 'Develop custom illustrations that reflect your brand' },
        { text: 'Implement SEO and accessibility best practices' }
      ],
    },
    {
      number: '04',
      title: 'Responsive Development',
      desc: 'We build fast, flexible websites that perform across all devices. Our development approach prioritizes speed, accessibility, and search engine visibility.',
      bullets: [
        { text: 'Analyze user behavior across different channels' },
        { text: 'Develop responsive, performance-optimized interfaces' },
        { text: 'Conduct thorough cross-device testing' }
      ],
    },
    {
      number: '05',
      title: 'Quality Assurance (QA)',
      desc: 'We ensure excellence in every detail. Our rigorous QA process guarantees a flawless digital experience that meets the highest standards.',
      bullets: [
        { text: 'Maintain transparent client communication throughout' },
        { text: 'Conduct comprehensive design and functionality testing' },
        { text: 'Implement robust security measures and protocols' }
      ],
    },
    {
      number: '06',
      title: 'Launch & Optimization',
      desc: 'We don\'t just launch websites - we launch success stories. Our comprehensive support ensures your site performs optimally from day one and continues to grow.',
      bullets: [
        { text: 'Execute a proven launch protocol' },
        { text: 'Provide ongoing maintenance and performance optimization' },
        { text: 'Develop and implement growth-focused marketing strategies' }
      ],
    },
  ]

  return (
    <div className="app main-bg min-h-screen flex flex-col">
      <ScrollToTop />
      <nav className={`navbar main-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <Link to="/" className="logo" onClick={handleLogoClick}>NΛTIVE</Link>
          <div className="nav-actions">
            <button className="quote-btn" onClick={handleQuoteClick}>BOOK A MEETING</button>
            <div className={`menu-icon ${isMenuOpen ? 'menu-icon-close' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? '✕' : '☰'} MENU
            </div>
          </div>
        </div>
      </nav>

      {/* Side Menu Panel */}
      <div className={`side-menu ${isMenuOpen ? 'active' : ''}`}>
        {/* Close button for mobile */}
        <button className="side-menu-close" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">✕</button>
        <div className="menu-content">
          {menuItems.map((item, index) => (
            <div key={index} className="menu-item">
              <Link 
                to={item.link} 
                className="menu-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title.split('').map((char, i) => (
                  <span key={i} className={`menu-char ${char === ' ' ? 'menu-char-space' : ''}`} style={{ animationDelay: `${i * 0.05}s` }}>
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Backdrop */}
      <div className={`menu-backdrop ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}></div>

      <Routes>
        <Route path="/quote" element={<QuoteForm />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<OurProducts />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
        <Route path="/" element={
          <>
            <section className="hero hero-overlay">
              <div className="hero-content">
                <div className="hero-label">PREMIUM WEB DESIGN AGENCY</div>
                <h1 className="hero-title">WE GROW<br/>BRANDS ONLINE</h1>
                <p className="hero-subheadline">Custom Websites, Branding & Digital Marketing</p>
                <button className="cta-button" onClick={handleQuoteClick}>BOOK A MEETING <span className="arrow">&rarr;</span></button>
              </div>
              <div className="hero-bg-slider">
                <div className="mockup-track">
                  {/* First set - All product images */}
                  <div className="mockup-slide mockup1">
                    <OptimizedImage 
                      src="/images/Screenshot 2025-06-26 131758.png" 
                      alt="Cult Fit" 
                      className="mockup-img" 
                      loading="eager"
                    />
                  </div>
                  <div className="mockup-slide mockup2">
                    <OptimizedImage 
                      src="/images/Screenshot 2025-06-26 133422.png" 
                      alt="Pearl Dental" 
                      className="mockup-img" 
                      loading="eager"
                    />
                  </div>
                  <div className="mockup-slide mockup3">
                    <OptimizedImage 
                      src="/images/bos.png" 
                      alt="Bo's Coffee" 
                      className="mockup-img" 
                      loading="eager"
                    />
                  </div>
                  <div className="mockup-slide mockup4">
                    <OptimizedImage 
                      src="/images/plumber.png" 
                      alt="Plumber Service" 
                      className="mockup-img" 
                      loading="eager"
                    />
                  </div>
                  <div className="mockup-slide mockup5">
                    <OptimizedImage 
                      src="/images/kebap.png" 
                      alt="FoodExpress" 
                      className="mockup-img" 
                      loading="eager"
                    />
                  </div>
                  <div className="mockup-slide mockup6">
                    <OptimizedImage 
                      src="/images/fitlife.png" 
                      alt="FitLife" 
                      className="mockup-img" 
                      loading="eager"
                    />
                  </div>
                  <div className="mockup-slide mockup7">
                    <OptimizedImage 
                      src="/images/estate.png" 
                      alt="RealEstateHub" 
                      className="mockup-img" 
                      loading="eager"
                    />
                  </div>
                  <div className="mockup-slide mockup8">
                    <OptimizedImage 
                      src="/images/hub.png" 
                      alt="ConnectHub" 
                      className="mockup-img" 
                      loading="eager"
                    />
                  </div>
                  <div className="mockup-slide mockup9">
                    <OptimizedImage 
                      src="/images/event.png" 
                      alt="EventMaster" 
                      className="mockup-img" 
                      loading="eager"
                    />
                  </div>
                  <div className="mockup-slide mockup10">
                    <OptimizedImage 
                      src="/images/travel.png" 
                      alt="TravelPlanner" 
                      className="mockup-img" 
                      loading="eager"
                    />
                  </div>
                  <div className="mockup-slide mockup11">
                    <OptimizedImage 
                      src="/images/job.png" 
                      alt="Job Platform" 
                      className="mockup-img" 
                      loading="eager"
                    />
                  </div>
                  {/* Second set (duplicate for seamless loop) */}
                  <div className="mockup-slide mockup1">
                    <OptimizedImage 
                      src="/images/Screenshot 2025-06-26 131758.png" 
                      alt="Cult Fit" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup2">
                    <OptimizedImage 
                      src="/images/Screenshot 2025-06-26 133422.png" 
                      alt="Pearl Dental" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup3">
                    <OptimizedImage 
                      src="/images/bos.png" 
                      alt="Bo's Coffee" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup4">
                    <OptimizedImage 
                      src="/images/plumber.png" 
                      alt="Plumber Service" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup5">
                    <OptimizedImage 
                      src="/images/kebap.png" 
                      alt="FoodExpress" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup6">
                    <OptimizedImage 
                      src="/images/fitlife.png" 
                      alt="FitLife" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup7">
                    <OptimizedImage 
                      src="/images/estate.png" 
                      alt="RealEstateHub" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup8">
                    <OptimizedImage 
                      src="/images/hub.png" 
                      alt="ConnectHub" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup9">
                    <OptimizedImage 
                      src="/images/event.png" 
                      alt="EventMaster" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup10">
                    <OptimizedImage 
                      src="/images/travel.png" 
                      alt="TravelPlanner" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup11">
                    <OptimizedImage 
                      src="/images/job.png" 
                      alt="Job Platform" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  {/* Third set (duplicate for seamless loop) */}
                  <div className="mockup-slide mockup1">
                    <OptimizedImage 
                      src="/images/Screenshot 2025-06-26 131758.png" 
                      alt="Cult Fit" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup2">
                    <OptimizedImage 
                      src="/images/Screenshot 2025-06-26 133422.png" 
                      alt="Pearl Dental" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup3">
                    <OptimizedImage 
                      src="/images/bos.png" 
                      alt="Bo's Coffee" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup4">
                    <OptimizedImage 
                      src="/images/plumber.png" 
                      alt="Plumber Service" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup5">
                    <OptimizedImage 
                      src="/images/kebap.png" 
                      alt="FoodExpress" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup6">
                    <OptimizedImage 
                      src="/images/fitlife.png" 
                      alt="FitLife" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup7">
                    <OptimizedImage 
                      src="/images/estate.png" 
                      alt="RealEstateHub" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup8">
                    <OptimizedImage 
                      src="/images/hub.png" 
                      alt="ConnectHub" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup9">
                    <OptimizedImage 
                      src="/images/event.png" 
                      alt="EventMaster" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup10">
                    <OptimizedImage 
                      src="/images/travel.png" 
                      alt="TravelPlanner" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup5"></div>
                </div>
              </div>
              {/* Second (reverse) slider */}
              <div className="hero-bg-slider reverse">
                <div className="mockup-track reverse">
                  {/* First set - All product images */}
                  <div className="mockup-slide mockup1">
                    <OptimizedImage 
                      src="/images/Screenshot 2025-06-26 131758.png" 
                      alt="Cult Fit" 
                      className="mockup-img" 
                      loading="eager"
                    />
                  </div>
                  <div className="mockup-slide mockup2">
                    <OptimizedImage 
                      src="/images/Screenshot 2025-06-26 133422.png" 
                      alt="Pearl Dental" 
                      className="mockup-img" 
                      loading="eager"
                    />
                  </div>
                  <div className="mockup-slide mockup3">
                    <OptimizedImage 
                      src="/images/bos.png" 
                      alt="Bo's Coffee" 
                      className="mockup-img" 
                      loading="eager"
                    />
                  </div>
                  <div className="mockup-slide mockup4">
                    <OptimizedImage 
                      src="/images/plumber.png" 
                      alt="Plumber Service" 
                      className="mockup-img" 
                      loading="eager"
                    />
                  </div>
                  <div className="mockup-slide mockup5">
                    <OptimizedImage 
                      src="/images/kebap.png" 
                      alt="FoodExpress" 
                      className="mockup-img" 
                      loading="eager"
                    />
                  </div>
                  <div className="mockup-slide mockup6">
                    <OptimizedImage 
                      src="/images/fitlife.png" 
                      alt="FitLife" 
                      className="mockup-img" 
                      loading="eager"
                    />
                  </div>
                  <div className="mockup-slide mockup7">
                    <OptimizedImage 
                      src="/images/estate.png" 
                      alt="RealEstateHub" 
                      className="mockup-img" 
                      loading="eager"
                    />
                  </div>
                  <div className="mockup-slide mockup8">
                    <OptimizedImage 
                      src="/images/hub.png" 
                      alt="ConnectHub" 
                      className="mockup-img" 
                      loading="eager"
                    />
                  </div>
                  <div className="mockup-slide mockup9">
                    <OptimizedImage 
                      src="/images/event.png" 
                      alt="EventMaster" 
                      className="mockup-img" 
                      loading="eager"
                    />
                  </div>
                  <div className="mockup-slide mockup10">
                    <OptimizedImage 
                      src="/images/travel.png" 
                      alt="TravelPlanner" 
                      className="mockup-img" 
                      loading="eager"
                    />
                  </div>
                  <div className="mockup-slide mockup11">
                    <OptimizedImage 
                      src="/images/job.png" 
                      alt="Job Platform" 
                      className="mockup-img" 
                      loading="eager"
                    />
                  </div>
                  {/* Second set (duplicate for seamless loop) */}
                  <div className="mockup-slide mockup1">
                    <OptimizedImage 
                      src="/images/Screenshot 2025-06-26 131758.png" 
                      alt="Cult Fit" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup2">
                    <OptimizedImage 
                      src="/images/Screenshot 2025-06-26 133422.png" 
                      alt="Pearl Dental" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup3">
                    <OptimizedImage 
                      src="/images/bos.png" 
                      alt="Bo's Coffee" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup4">
                    <OptimizedImage 
                      src="/images/plumber.png" 
                      alt="Plumber Service" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup5">
                    <OptimizedImage 
                      src="/images/kebap.png" 
                      alt="FoodExpress" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup6">
                    <OptimizedImage 
                      src="/images/fitlife.png" 
                      alt="FitLife" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup7">
                    <OptimizedImage 
                      src="/images/estate.png" 
                      alt="RealEstateHub" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup8">
                    <OptimizedImage 
                      src="/images/hub.png" 
                      alt="ConnectHub" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup9">
                    <OptimizedImage 
                      src="/images/event.png" 
                      alt="EventMaster" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup10">
                    <OptimizedImage 
                      src="/images/travel.png" 
                      alt="TravelPlanner" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup11">
                    <OptimizedImage 
                      src="/images/job.png" 
                      alt="Job Platform" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  {/* Third set (duplicate for seamless loop) */}
                  <div className="mockup-slide mockup1">
                    <OptimizedImage 
                      src="/images/Screenshot 2025-06-26 131758.png" 
                      alt="Cult Fit" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup2">
                    <OptimizedImage 
                      src="/images/Screenshot 2025-06-26 133422.png" 
                      alt="Pearl Dental" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup3">
                    <OptimizedImage 
                      src="/images/bos.png" 
                      alt="Bo's Coffee" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup4">
                    <OptimizedImage 
                      src="/images/plumber.png" 
                      alt="Plumber Service" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup5">
                    <OptimizedImage 
                      src="/images/kebap.png" 
                      alt="FoodExpress" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup6">
                    <OptimizedImage 
                      src="/images/fitlife.png" 
                      alt="FitLife" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup7">
                    <OptimizedImage 
                      src="/images/estate.png" 
                      alt="RealEstateHub" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup8">
                    <OptimizedImage 
                      src="/images/hub.png" 
                      alt="ConnectHub" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup9">
                    <OptimizedImage 
                      src="/images/event.png" 
                      alt="EventMaster" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup10">
                    <OptimizedImage 
                      src="/images/travel.png" 
                      alt="TravelPlanner" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="mockup-slide mockup11">
                    <OptimizedImage 
                      src="/images/job.png" 
                      alt="Job Platform" 
                      className="mockup-img" 
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="partners-section">
              <div className="partners-container">
                <div className="partners-slider">
                  <div className="partners-track">
                    {/* First set */}
                    <img src="/images/logo/disney-logo-png_seeklogo-41972.png" alt="Disney" className="partner-logo" />
                    <img src="/images/logo/Wolt-Logo.png" alt="Wolt" className="partner-logo" />
                    <img src="/images/logo/bumble.png" alt="Bumble" className="partner-logo" />
                    <img src="/images/logo/booking.png" alt="Booking" className="partner-logo" />
                    <img src="/images/logo/opera.png" alt="Opera" className="partner-logo" />
                    {/* Second set */}
                    <img src="/images/logo/disney-logo-png_seeklogo-41972.png" alt="Disney" className="partner-logo" />
                    <img src="/images/logo/Wolt-Logo.png" alt="Wolt" className="partner-logo" />
                    <img src="/images/logo/bumble.png" alt="Bumble" className="partner-logo" />
                    <img src="/images/logo/opera.png" alt="Opera" className="partner-logo" />
                    <img src="/images/logo/booking.png" alt="Booking" className="partner-logo" />
                    {/* Third set */}
                    <img src="/images/logo/Wolt-Logo.png" alt="Wolt" className="partner-logo" />
                    <img src="/images/logo/bumble.png" alt="Bumble" className="partner-logo" />
                    <img src="/images/logo/booking.png" alt="Booking" className="partner-logo" />
                    <img src="/images/logo/opera.png" alt="Opera" className="partner-logo" />
                  </div>
                </div>
              </div>
            </section>

            <OurWorkCarousel />

            <div className="section-divider">
              <div className="divider-line"></div>
              <div className="divider-content">
                <span className="divider-text">Redefining Excellence in the Digital Era</span>
              </div>
              <div className="divider-line"></div>
            </div>

            <section className="agency-section">
              <div className="agency-content">
                <div className="agency-left">
                  <h2 className="agency-title">Creative Web Agency<br />Delivering Custom Solutions</h2>
                  <ul className="agency-features">
                    <li><span className="checkmark">✔</span> Custom Web Design Solutions <span className="highlight">To Drive Conversions</span></li>
                    <li><span className="checkmark">✔</span> Effective Marketing Campaigns <span className="highlight">To Generate Growth</span></li>
                    <li><span className="checkmark">✔</span> Tailored Branding Strategies <span className="highlight">To Optimize Audience Interaction</span></li>
                  </ul>
                  <p className="agency-desc">
                    Native Agency is a web design company & digital marketing agency focused on growing brands online. We create effective brand strategies, custom web design, development, and digital marketing solutions to generate greater brand engagement and conversions. We work closely with our clients to ensure each project meets their brand guidelines and business goals and provide technical and marketing expertise to ensure optimal results.
                  </p>
                </div>
                <div className="agency-right">
                  <OptimizedImage 
                    src="/images/web-development-team-collaboration-illustration-yz5n469ruq1f8yb9-yz5n469ruq1f8yb9.png" 
                    alt="Web Development Team Collaboration Illustration" 
                    className="agency-banner" 
                    loading="lazy"
                  />
                </div>
              </div>
            </section>

            <section className="website-process-section" ref={processSectionRef}>
              <div className="website-process-title-group">
                <h2 className="website-process-title">Website Design Process</h2>
                <p className="website-process-desc">
                  Take a peek behind the curtain and explore the custom web design process our team follows.<br/>
                  We build custom sites for brands of all sizes that deliver <span className="highlight-link">measurable results</span>.
                </p>
              </div>
              <div className="website-process-container">
                {processSteps.map((step, idx) => (
                  <div className="process-step" key={step.number}>
                    <div className="process-step-header">
                      <span className="process-step-number">{step.number}</span>
                      <h3>{step.title}</h3>
                    </div>
                    <p className="process-step-desc">{step.desc}</p>
                    <ul className="process-step-bullets">
                      {step.bullets.map((bullet, index) => (
                        <li key={index} className="process-bullet-item">
                          {bullet.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <StatsCounter />

            <section className="why-choose-section" ref={whyChooseRef}>
              <div className="why-choose-title-group">
                <h2 className="why-choose-title">Why Choose Professional Web Design Company?</h2>
                <p className="why-choose-desc">
                  Partner with us to transform your digital presence and achieve your business goals.<br/>
                  Our expertise and proven track record make us the ideal choice for your web design needs.
                </p>
              </div>
              <div className="why-choose-content">
                <div className="why-choose-item">
                  <div className="why-choose-icon">
                    <FaBullseye className="text-2xl" />
                  </div>
                  <div className="why-choose-text">
                    <h3>Have A Clear Web Strategy</h3>
                    <p>Before launching your digital presence, having a well-defined plan is crucial. Our experts conduct thorough research on your industry, competitors, and target market to develop a tailored digital strategy that aligns with your goals.</p>
                  </div>
                </div>

                <div className="why-choose-item">
                  <div className="why-choose-icon">
                    <FaGlobe className="text-2xl" />
                  </div>
                  <div className="why-choose-text">
                    <h3>Build A Strong Online Presence</h3>
                    <p>Establishing a strong and professional online presence positions you as a leader in your industry. We've successfully guided numerous clients in building their online authority and are ready to help you achieve the same.</p>
                  </div>
                </div>

                <div className="why-choose-item">
                  <div className="why-choose-icon">
                    <FaLightbulb className="text-2xl" />
                  </div>
                  <div className="why-choose-text">
                    <h3>Boost Conversion Rates</h3>
                    <p>Our expert website designers focus on optimizing your website for an exceptional user experience, transforming visitors into loyal customers. We ensure your site is designed to engage and convert, driving higher conversion rates.</p>
                  </div>
                </div>

                <div className="why-choose-item">
                  <div className="why-choose-icon">
                    <FaHandshake className="text-2xl" />
                  </div>
                  <div className="why-choose-text">
                    <h3>Increase User Engagement</h3>
                    <p>Professional website design keeps visitors on your site longer, reducing bounce rates. Our designers create intuitive, easy-to-navigate websites that enhance user engagement and improve conversion rates.</p>
                  </div>
                </div>

                <div className="why-choose-item">
                  <div className="why-choose-icon">
                    <FaShoppingCart className="text-2xl" />
                  </div>
                  <div className="why-choose-text">
                    <h3>Custom eCommerce Design</h3>
                    <p>Our award-winning designers craft e-Stores with user interfaces that captivate your customers and maximize your revenue. We ensure your online store not only attracts but retains customers effectively.</p>
                  </div>
                </div>

                <div className="why-choose-item">
                  <div className="why-choose-icon">
                    <FaSearch className="text-2xl" />
                  </div>
                  <div className="why-choose-text">
                    <h3>Search Engine Optimization</h3>
                    <p>We implement proven SEO strategies to enhance your website's search engine ranking and drive organic traffic, helping you reach a broader audience.</p>
                  </div>
                </div>

                <div className="why-choose-item">
                  <div className="why-choose-icon">
                    <FaBolt className="text-2xl" />
                  </div>
                  <div className="why-choose-text">
                    <h3>Optimize Load Times</h3>
                    <p>Our experts optimize your website's load times, ensuring fast performance that keeps visitors engaged and boosts your conversion rates.</p>
                  </div>
                </div>

                <div className="why-choose-item">
                  <div className="why-choose-icon">
                    <FaTools className="text-2xl" />
                  </div>
                  <div className="why-choose-text">
                    <h3>Ongoing Support</h3>
                    <p>With professional website design services, you benefit from continuous support and maintenance. Our team is committed to ensuring your website remains optimized and performs at its best long after launch.</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        } />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
