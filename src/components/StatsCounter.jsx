import React, { useState, useEffect, useRef } from 'react';

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    satisfaction: 0,
    years: 0,
    clients: 0
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    const targetValues = {
      projects: 500,
      satisfaction: 98,
      years: 15,
      clients: 1000
    };

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        projects: Math.floor(targetValues.projects * progress),
        satisfaction: Math.floor(targetValues.satisfaction * progress),
        years: Math.floor(targetValues.years * progress),
        clients: Math.floor(targetValues.clients * progress)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible]);

  const stats = [
    { value: counts.projects, suffix: '+', label: 'Projects Completed' },
    { value: counts.satisfaction, suffix: '%', label: 'Client Satisfaction' },
    { value: counts.years, suffix: '+', label: 'Years Experience' },
    { value: counts.clients, suffix: '+', label: 'Happy Clients' }
  ];

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-content">
        <div className="stats-header">
          <h2 className="stats-title">Proven Results That Speak for Themselves</h2>
          <p className="stats-subtitle">
            Join hundreds of satisfied clients who have transformed their digital presence with our expertise.<br/>
            Our track record of success is backed by real numbers and real results.
          </p>
        </div>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-value">
                {stat.value}
                <span className="stat-suffix">{stat.suffix}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter; 