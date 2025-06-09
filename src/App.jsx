import { useState, useEffect, useRef } from 'react'
import { Routes, Route, useNavigate, Link, useLocation } from 'react-router-dom'
import './App.css'
import './styles/StatsCounter.css'
import './styles/Pages.css'
import QuoteForm from './components/QuoteForm'
import StatsCounter from './components/StatsCounter'
import Services from './pages/Services'
import CaseStudies from './pages/CaseStudies'
import About from './pages/About'
import Footer from './components/Footer'
import OurWorkCarousel from './components/OurWorkCarousel'
import ScrollToTop from './components/ScrollToTop'
import ProjectDetail from './pages/ProjectDetail'

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
              item.classList.add('animate')
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
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.process-step')
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate')
              }, index * 200)
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
  }, [])

  const menuItems = [
    { title: 'Services', link: '/services' },
    { title: 'Case Studies', link: '/case-studies' },
    { title: 'About', link: '/about' },
    { title: 'Contact', link: '/contact' }
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
      icon: '/images/process-strategy.svg',
      number: '01',
      title: 'Web Strategy',
      desc: 'We use in-depth research and analysis as key pillars to build a step-by-step plan that expands your digital presence and drives online growth.',
      bullets: [
        'Identify your target audiences',
        'Analyze user pain-points & define your UVPs',
        'Define key performance indicators (KPIs)',
        'Create a roadmap to growing your brand online',
      ],
    },
    {
      icon: '/images/process-architecture.svg',
      number: '02',
      title: 'Planning & Information Architecture',
      desc: 'We utilize proven techniques to map your content, meet user intentions and create an engaging user experience. We ensure seamless user journeys to key conversion points.',
      bullets: [
        'Develop a base-level user flow & sitemap',
        'Utilize wireframing to create a seamless conversion funnel',
        'Add on-brand, consistent messaging to your structure',
      ],
    },
    {
      icon: '/images/process-design.svg',
      number: '03',
      title: 'Creative Design',
      desc: 'This stage is where you will see your site come to life. Our award-winning designers implement your unique branding elements to add your identity to your custom web design.',
      bullets: [
        'Thoughtfully place design features to guide the user journey',
        'Utilize interactive videos & animations',
        'Create custom, branded illustrations',
        'Ensure accessibility & search engine optimization',
      ],
    },
    {
      icon: '/images/process-dev.svg',
      number: '04',
      title: 'Responsive Development',
      desc: 'A responsive website is fast, accessible and easy to navigate. It automatically scales to various screen sizes and devices, driving user experience and climbing search engine rankings.',
      bullets: [
        'Gather touchpoint & user-channel insights',
        'Transform your wireframes into a flexible UI',
        'Test across devices before approval & launch',
      ],
    },
    {
      icon: '/images/process-qa.svg',
      number: '05',
      title: 'Quality Assurance (QA)',
      desc: 'We pride ourselves on delivering measurable results and professional outcomes. We guarantee a high-quality digital experience for your brand.',
      bullets: [
        'Actively involve our clients throughout every project',
        'Meticulously test all designs to catch errors',
        'Use tried-and-tested tools to secure before launch',
      ],
    },
    {
      icon: '/images/process-launch.svg',
      number: '06',
      title: 'Launch & Optimization',
      desc: 'Our end-to-end website design services cover both launch and post-launch support. We monitor, test and optimize your website elements to ensure every part of your site is functioning optimally.',
      bullets: [
        'Follow a strict protocol for every website launch',
        'Offer post-launch maintenance & optimization',
        'Implement a digital marketing plan to drive awareness',
      ],
    },
  ];

  return (
    <div className="app main-bg min-h-screen flex flex-col">
      <ScrollToTop />
      <nav className={`navbar main-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <Link to="/" className="logo" onClick={handleLogoClick}>NΛTIVE</Link>
          <div className="nav-actions">
            <button className="quote-btn" onClick={handleQuoteClick}>REQUEST A QUOTE</button>
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
                  <span key={i} className="menu-char" style={{ animationDelay: `${i * 0.05}s` }}>
                    {char}
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
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
        <Route path="/" element={
          <>
            <section className="hero hero-overlay">
              <div className="hero-content">
                <div className="hero-label">PREMIUM WEB DESIGN AGENCY</div>
                <h1 className="hero-title">WE GROW<br/>BRANDS ONLINE</h1>
                <p className="hero-subheadline">Custom Websites, Branding & Digital Marketing</p>
                <button className="cta-button" onClick={handleQuoteClick}>REQUEST A QUOTE <span className="arrow">&rarr;</span></button>
              </div>
              <div className="hero-bg-slider">
                <div className="mockup-track">
                  {/* First set */}
                  <div className="mockup-slide mockup1">
                    <img src="/images/Screenshot 2025-06-05 120402.png" alt="Screenshot" className="mockup-img" />
                  </div>
                  <div className="mockup-slide mockup2">
                    <img src="/images/dynamic-website-examples.jpg" alt="Dynamic Website Examples" className="mockup-img" />
                  </div>
                  <div className="mockup-slide mockup3">
                    <img src="/images/braintech.webp" alt="Braintech Hero" className="mockup-img" />
                  </div>
                  <div className="mockup-slide mockup4">
                    <img src="/images/sky.garden.jpg" alt="Sky Garden" className="mockup-img" />
                  </div>
                  <div className="mockup-slide mockup5"></div>
                  {/* Second set (duplicate) */}
                  <div className="mockup-slide mockup1">
                    <img src="/images/Screenshot 2025-06-05 120402.png" alt="Screenshot" className="mockup-img" />
                  </div>
                  <div className="mockup-slide mockup2">
                    <img src="/images/dynamic-website-examples.jpg" alt="Dynamic Website Examples" className="mockup-img" />
                  </div>
                  <div className="mockup-slide mockup3">
                    <img src="/images/braintech.webp" alt="Braintech Hero" className="mockup-img" />
                  </div>
                  <div className="mockup-slide mockup4">
                    <img src="/images/sky.garden.jpg" alt="Sky Garden" className="mockup-img" />
                  </div>
                  <div className="mockup-slide mockup5"></div>
                  {/* Third set (duplicate) */}
                  <div className="mockup-slide mockup1">
                    <img src="/images/Screenshot 2025-06-05 120402.png" alt="Screenshot" className="mockup-img" />
                  </div>
                  <div className="mockup-slide mockup2">
                    <img src="/images/dynamic-website-examples.jpg" alt="Dynamic Website Examples" className="mockup-img" />
                  </div>
                  <div className="mockup-slide mockup3">
                    <img src="/images/braintech.webp" alt="Braintech Hero" className="mockup-img" />
                  </div>
                  <div className="mockup-slide mockup4">
                    <img src="/images/sky.garden.jpg" alt="Sky Garden" className="mockup-img" />
                  </div>
                  <div className="mockup-slide mockup5"></div>
                </div>
              </div>
              {/* Second (reverse) slider */}
              <div className="hero-bg-slider reverse">
                <div className="mockup-track reverse">
                  {/* First set */}
                  <div className="mockup-slide mockup1">
                    <img src="/images/Screenshot 2025-06-05 120402.png" alt="Screenshot" className="mockup-img" />
                  </div>
                  <div className="mockup-slide mockup2">
                    <img src="/images/dynamic-website-examples.jpg" alt="Dynamic Website Examples" className="mockup-img" />
                  </div>
                  <div className="mockup-slide mockup3">
                    <img src="/images/braintech.webp" alt="Braintech Hero" className="mockup-img" />
                  </div>
                  <div className="mockup-slide mockup4">
                    <img src="/images/sky.garden.jpg" alt="Sky Garden" className="mockup-img" />
                  </div>
                  <div className="mockup-slide mockup5"></div>
                  {/* Second set (duplicate) */}
                  <div className="mockup-slide mockup1">
                    <img src="/images/Screenshot 2025-06-05 120402.png" alt="Screenshot" className="mockup-img" />
                  </div>
                  <div className="mockup-slide mockup2">
                    <img src="/images/dynamic-website-examples.jpg" alt="Dynamic Website Examples" className="mockup-img" />
                  </div>
                  <div className="mockup-slide mockup3">
                    <img src="/images/braintech.webp" alt="Braintech Hero" className="mockup-img" />
                  </div>
                  <div className="mockup-slide mockup4">
                    <img src="/images/sky.garden.jpg" alt="Sky Garden" className="mockup-img" />
                  </div>
                  <div className="mockup-slide mockup5"></div>
                  {/* Third set (duplicate) */}
                  <div className="mockup-slide mockup1">
                    <img src="/images/Screenshot 2025-06-05 120402.png" alt="Screenshot" className="mockup-img" />
                  </div>
                  <div className="mockup-slide mockup2">
                    <img src="/images/dynamic-website-examples.jpg" alt="Dynamic Website Examples" className="mockup-img" />
                  </div>
                  <div className="mockup-slide mockup3">
                    <img src="/images/braintech.webp" alt="Braintech Hero" className="mockup-img" />
                  </div>
                  <div className="mockup-slide mockup4">
                    <img src="/images/sky.garden.jpg" alt="Sky Garden" className="mockup-img" />
                  </div>
                  <div className="mockup-slide mockup5"></div>
                </div>
              </div>
            </section>

            <section className="partners-section">
              <div className="partners-container">
                <div className="partners-slider">
                  <div className="partners-track">
                    {/* First set */}
                    <img src="/images/logo/disney-logo-png_seeklogo-41972.png" alt="Disney" className="partner-logo" />
                    <img src="/images/logo/images.jpeg" alt="Partner 2" className="partner-logo" />
                    <img src="/images/logo/Wolt-Logo.png" alt="Wolt" className="partner-logo" />
                    <img src="/images/partner-nokia.svg" alt="Nokia" className="partner-logo" />
                    <img src="/images/partner-bumble.svg" alt="Bumble" className="partner-logo" />
                    <img src="/images/partner-schibsted.svg" alt="Schibsted" className="partner-logo" />
                    <img src="/images/partner-opera.svg" alt="Opera" className="partner-logo" />
                    <img src="/images/partner-bonterra.svg" alt="Bonterra" className="partner-logo" />
                    <img src="/images/partner-zoom.svg" alt="Zoom" className="partner-logo" />
                    {/* Second set */}
                    <img src="/images/logo/disney-logo-png_seeklogo-41972.png" alt="Disney" className="partner-logo" />
                    <img src="/images/logo/images.jpeg" alt="Partner 2" className="partner-logo" />
                    <img src="/images/logo/Wolt-Logo.png" alt="Wolt" className="partner-logo" />
                    <img src="/images/partner-nokia.svg" alt="Nokia" className="partner-logo" />
                    <img src="/images/partner-bumble.svg" alt="Bumble" className="partner-logo" />
                    <img src="/images/partner-schibsted.svg" alt="Schibsted" className="partner-logo" />
                    <img src="/images/partner-opera.svg" alt="Opera" className="partner-logo" />
                    <img src="/images/partner-bonterra.svg" alt="Bonterra" className="partner-logo" />
                    <img src="/images/partner-zoom.svg" alt="Zoom" className="partner-logo" />
                    {/* Third set */}
                    <img src="/images/logo/disney-logo-png_seeklogo-41972.png" alt="Disney" className="partner-logo" />
                    <img src="/images/logo/images.jpeg" alt="Partner 2" className="partner-logo" />
                    <img src="/images/logo/Wolt-Logo.png" alt="Wolt" className="partner-logo" />
                    <img src="/images/partner-nokia.svg" alt="Nokia" className="partner-logo" />
                    <img src="/images/partner-bumble.svg" alt="Bumble" className="partner-logo" />
                    <img src="/images/partner-schibsted.svg" alt="Schibsted" className="partner-logo" />
                    <img src="/images/partner-opera.svg" alt="Opera" className="partner-logo" />
                    <img src="/images/partner-bonterra.svg" alt="Bonterra" className="partner-logo" />
                    <img src="/images/partner-zoom.svg" alt="Zoom" className="partner-logo" />
                  </div>
                </div>
              </div>
            </section>

            <OurWorkCarousel />

            <div className="section-divider">
              <div className="divider-line"></div>
              <div className="divider-content">
                <span className="divider-text">Crafting Digital Excellence</span>
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
                    <li><span className="checkmark">✔</span> Tailored Branding Strategies <span className="highlight">To Drive Engagement</span></li>
                  </ul>
                  <p className="agency-desc">
                    Digital Silk is a web design company & digital marketing agency focused on growing brands online. We create effective brand strategies, custom web design, development, and digital marketing solutions to generate greater brand engagement and conversions. We work closely with our clients to ensure each project meets their brand guidelines and business goals and provide technical and marketing expertise to ensure optimal results.
                  </p>
                </div>
                <div className="agency-right">
                  <img src="/images/award-trophy.png" alt="Award Trophy" className="agency-trophy" />
                  <div className="agency-mockups">
                    <img src="/images/agency-mockup1.jpg" alt="Mockup 1" className="agency-mockup" />
                    <img src="/images/agency-mockup2.jpg" alt="Mockup 2" className="agency-mockup" />
                    <img src="/images/agency-mockup3.jpg" alt="Mockup 3" className="agency-mockup" />
                  </div>
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
                      <img src={step.icon} alt="" className="process-step-icon" />
                      <h3>{step.title}</h3>
                    </div>
                    <p className="process-step-desc">{step.desc}</p>
                    <ul className="process-step-bullets">
                      {step.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
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
                  <div className="why-choose-icon">🎯</div>
                  <div className="why-choose-text">
                    <h3>Have A Clear Web Strategy</h3>
                    <p>Before launching your digital presence, having a well-defined plan is crucial. Our experts conduct thorough research on your industry, competitors, and target market to develop a tailored digital strategy that aligns with your goals.</p>
                  </div>
                </div>

                <div className="why-choose-item">
                  <div className="why-choose-icon">🌐</div>
                  <div className="why-choose-text">
                    <h3>Build A Strong Online Presence</h3>
                    <p>Establishing a strong and professional online presence positions you as a leader in your industry. We've successfully guided numerous clients in building their online authority and are ready to help you achieve the same.</p>
                  </div>
                </div>

                <div className="why-choose-item">
                  <div className="why-choose-icon">💡</div>
                  <div className="why-choose-text">
                    <h3>Boost Conversion Rates</h3>
                    <p>Our expert website designers focus on optimizing your website for an exceptional user experience, transforming visitors into loyal customers. We ensure your site is designed to engage and convert, driving higher conversion rates.</p>
                  </div>
                </div>

                <div className="why-choose-item">
                  <div className="why-choose-icon">🤝</div>
                  <div className="why-choose-text">
                    <h3>Increase User Engagement</h3>
                    <p>Professional website design keeps visitors on your site longer, reducing bounce rates. Our designers create intuitive, easy-to-navigate websites that enhance user engagement and improve conversion rates.</p>
                  </div>
                </div>

                <div className="why-choose-item">
                  <div className="why-choose-icon">🛍️</div>
                  <div className="why-choose-text">
                    <h3>Custom eCommerce Design</h3>
                    <p>Our award-winning designers craft e-Stores with user interfaces that captivate your customers and maximize your revenue. We ensure your online store not only attracts but retains customers effectively.</p>
                  </div>
                </div>

                <div className="why-choose-item">
                  <div className="why-choose-icon">🔍</div>
                  <div className="why-choose-text">
                    <h3>Search Engine Optimization</h3>
                    <p>We implement proven SEO strategies to enhance your website's search engine ranking and drive organic traffic, helping you reach a broader audience.</p>
                  </div>
                </div>

                <div className="why-choose-item">
                  <div className="why-choose-icon">⚡</div>
                  <div className="why-choose-text">
                    <h3>Optimize Load Times</h3>
                    <p>Our experts optimize your website's load times, ensuring fast performance that keeps visitors engaged and boosts your conversion rates.</p>
                  </div>
                </div>

                <div className="why-choose-item">
                  <div className="why-choose-icon">🛠️</div>
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
