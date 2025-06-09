import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="footer-logo">NΛTIVE</h2>
            <p className="footer-tagline">
              Transforming ideas into digital excellence. We craft innovative solutions that drive business growth and create lasting impact.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">Facebook</a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/case-studies">Case Studies</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </div>

          <div className="footer-services">
            <h3>Our Services</h3>
            <ul>
              <li>Web Design & Development</li>
              <li>E-commerce Solutions</li>
              <li>Digital Marketing</li>
              <li>Brand Strategy</li>
              <li>UI/UX Design</li>
              <li>SEO Optimization</li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Get in Touch</h3>
            <div className="contact-info">
              <p>📍 123 Business Street, City, Country</p>
              <p>📞 (123) 456-7890</p>
              <p>✉️ info@native.agency</p>
            </div>
            <button className="footer-cta">REQUEST A QUOTE</button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <p>&copy; {new Date().getFullYear()} NΛTIVE. All rights reserved.</p>
            <div className="legal-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 