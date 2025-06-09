import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/QuoteForm.css';

const QuoteForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setShowSuccess(true);
  };

  if (showSuccess) {
    return (
      <div className="quote-success">
        <div className="success-content">
          <div className="success-icon">✓</div>
          <h2>Thank You!</h2>
          <p>Your quote request has been submitted successfully. We'll get back to you within 24 hours.</p>
          <button className="back-home" onClick={() => navigate('/')}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quote-form-container">
      <div className="company-info">
        <h2>Transform Your Digital Presence</h2>
        <p>
          At NΛTIVE, we're more than just a web design agency. We're your strategic partner in digital growth, 
          combining creative excellence with technical expertise to deliver exceptional results.
        </p>
        
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">🎯</div>
            <div className="feature-text">
              <strong>Strategic Approach</strong>
              <p>Data-driven strategies tailored to your business goals</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">💡</div>
            <div className="feature-text">
              <strong>Creative Excellence</strong>
              <p>Innovative designs that capture your brand essence</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">⚡</div>
            <div className="feature-text">
              <strong>Technical Expertise</strong>
              <p>Cutting-edge development for optimal performance</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📈</div>
            <div className="feature-text">
              <strong>Growth Focus</strong>
              <p>Results-oriented solutions that drive business growth</p>
            </div>
          </div>
        </div>

        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>
      </div>

      <div className="quote-form-wrapper">
        <div className="form-header">
          <h1>Request a Quote</h1>
          <p>Fill out the form below and we'll get back to you shortly</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder=" "
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="name" className="form-label">Full Name</label>
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="email" className="form-label">Email Address</label>
            </div>

            <div className="form-group">
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-input"
                placeholder=" "
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <label htmlFor="phone" className="form-label">Phone Number</label>
            </div>

            <div className="form-group">
              <input
                type="text"
                id="company"
                name="company"
                className="form-input"
                placeholder=" "
                value={formData.company}
                onChange={handleChange}
              />
              <label htmlFor="company" className="form-label">Company Name</label>
            </div>

            <div className="form-group">
              <select
                id="projectType"
                name="projectType"
                className="form-input"
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option value="">Select Project Type</option>
                <option value="web">Web Development</option>
                <option value="mobile">Mobile App Development</option>
                <option value="design">UI/UX Design</option>
                <option value="marketing">Digital Marketing</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <select
                id="budget"
                name="budget"
                className="form-input"
                value={formData.budget}
                onChange={handleChange}
                required
              >
                <option value="">Select Budget Range</option>
                <option value="small">$1,000 - $5,000</option>
                <option value="medium">$5,000 - $10,000</option>
                <option value="large">$10,000 - $25,000</option>
                <option value="enterprise">$25,000+</option>
              </select>
            </div>

            <div className="form-group full-width">
              <textarea
                id="message"
                name="message"
                className="form-input"
                placeholder=" "
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              />
              <label htmlFor="message" className="form-label">Project Details</label>
            </div>
          </div>

          <button
            type="submit"
            className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm; 