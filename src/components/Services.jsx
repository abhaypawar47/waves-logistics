import { useState, useEffect, useRef } from "react";
import "./Services.css";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const cardsRef = useRef([]);

  const services = [
    {
      icon: "fa-ship",
      title: "Ocean Freight",
      desc: "FCL, LCL, breakbulk & specialized cargo with global carrier network.",
      detailedDesc:
        "Comprehensive ocean freight solutions with real-time vessel tracking, dedicated support, and competitive rates across all major trade lanes.",
      metrics: ["200+ Routes", "98% On-Time", "Global Network"],
      color: "#00a8e8",
    },
    {
      icon: "fa-plane",
      title: "Air Freight",
      desc: "Express & economy air solutions with real-time tracking & priority handling.",
      detailedDesc:
        "Time-critical air freight solutions with priority boarding, customs clearance, and door-to-door tracking capabilities.",
      metrics: ["24/7 Tracking", "Priority Boarding", "Global Hubs"],
      color: "#6bc5f2",
    },
    {
      icon: "fa-truck-fast",
      title: "Road & Rail",
      desc: "Intermodal connectivity across Europe, Asia & Americas.",
      detailedDesc:
        "Seamless intermodal transportation combining road and rail for optimal efficiency and reduced carbon footprint.",
      metrics: ["Intermodal", "Carbon Efficient", "Real-Time GPS"],
      color: "#0088c2",
    },
    {
      icon: "fa-warehouse",
      title: "Warehousing",
      desc: "Smart distribution centers, inventory management & cross-docking.",
      detailedDesc:
        "State-of-the-art warehousing with AI-powered inventory management, cross-docking, and just-in-time delivery.",
      metrics: ["AI-Powered", "Cross-Docking", "Just-in-Time"],
      color: "#00a8e8",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        {/* Header Card - Now with its own background */}
        <div className="services-header-card">
          <div className="services-badge">
            <i className="fas fa-cube"></i> Core Capabilities
          </div>
          <h2 className="services-title">
            Integrated logistics
            <br />
            <span className="services-title-accent">solutions</span>
          </h2>
          <div className="services-divider"></div>
          <p className="services-description">
            End-to-end supply chain management tailored to your industry needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className={`service-card ${activeIndex === idx ? "active" : ""}`}
              onMouseEnter={() => setActiveIndex(idx)}
              onMouseLeave={() => setActiveIndex(null)}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="service-card-inner">
                {/* Icon */}
                <div
                  className="service-icon"
                  style={{ background: `${service.color}15` }}
                >
                  <i
                    className={`fas ${service.icon}`}
                    style={{ color: service.color }}
                  ></i>
                </div>

                {/* Content */}
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description-short">{service.desc}</p>

                {/* Expanded Details */}
                <div className="service-expanded">
                  <p className="service-description-detailed">
                    {service.detailedDesc}
                  </p>
                  <div className="service-metrics">
                    {service.metrics.map((metric, i) => (
                      <div key={i} className="service-metric">
                        <i className="fas fa-check-circle"></i>
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Learn More Link */}
                <div className="service-learn-more">
                  <span>Learn more</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="services-stats">
          <div className="services-stat">
            <div className="services-stat-value">150+</div>
            <div className="services-stat-label">Countries Served</div>
          </div>
          <div className="services-stat-divider"></div>
          <div className="services-stat">
            <div className="services-stat-value">24/7</div>
            <div className="services-stat-label">Global Support</div>
          </div>
          <div className="services-stat-divider"></div>
          <div className="services-stat">
            <div className="services-stat-value">99.8%</div>
            <div className="services-stat-label">Delivery Success</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
