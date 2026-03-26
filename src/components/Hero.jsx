import React, { useEffect, useRef } from "react";
import "./Hero.css";

const Hero = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" },
    );

    const currentStatsRef = statsRef.current;
    if (currentStatsRef) {
      observer.observe(currentStatsRef);
    }

    return () => {
      if (currentStatsRef) {
        observer.unobserve(currentStatsRef);
      }
    };
  }, []);

  return (
    <section className="hero-section" id="home">
      {/* Background with parallax */}
      <div className="hero-background">
        <div className="hero-overlay" />
        <div
          className="hero-image"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1571244222371-0b0b60f3c92b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-container">
          <div className="hero-inner">
            {/* Badge */}
            <div className="hero-badge">
              <i className="fas fa-globe-americas" /> Global logistics partner
            </div>

            {/* Heading */}
            <h1 className="hero-title">
              Seamless supply chains,{" "}
              <span className="hero-title-accent">ocean-driven precision</span>
            </h1>

            {/* Description */}
            <p className="hero-description">
              Waves Logistics delivers end-to-end freight forwarding,
              warehousing, and smart logistics solutions across 6 continents.
            </p>

            {/* Buttons */}
            <div className="hero-buttons">
              <button className="hero-btn-primary" type="button">
                Start Shipping <i className="fas fa-arrow-right" />
              </button>
              <button className="hero-btn-secondary" type="button">
                Explore Services
              </button>
            </div>

            {/* Stats */}
            <div className="hero-stats" ref={statsRef}>
              <div className="hero-stat-item">
                <p className="hero-stat-label">TRUSTED SINCE</p>
                <p className="hero-stat-value">2020</p>
              </div>
              <div className="hero-stat-item">
                <p className="hero-stat-label">GLOBAL PARTNERS</p>
                <p className="hero-stat-value">200+</p>
              </div>
              <div className="hero-stat-item">
                <p className="hero-stat-label">SHIPMENTS/MONTH</p>
                <p className="hero-stat-value">12K+</p>
              </div>
              <div className="hero-stat-item">
                <p className="hero-stat-label">COUNTRIES</p>
                <p className="hero-stat-value">85+</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <div className="hero-scroll-mouse" />
        <div className="hero-scroll-arrow">
          <i className="fas fa-chevron-down" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
