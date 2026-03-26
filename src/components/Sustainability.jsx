import { useEffect, useRef } from "react";
import "./Sustainability.css";

const Sustainability = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" },
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => {
      if (leftRef.current) observer.unobserve(leftRef.current);
      if (rightRef.current) observer.unobserve(rightRef.current);
    };
  }, []);

  return (
    <section id="sustainability" className="sustainability-section">
      {/* Background with overlay */}
      <div className="sustainability-background">
        <div className="sustainability-overlay"></div>
        <div
          className="sustainability-image"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1761489179730-5a11d5d7449a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></div>
      </div>

      {/* Decorative blur circles */}
      <div className="sustainability-blur-circle"></div>
      <div className="sustainability-blur-circle-2"></div>

      <div className="sustainability-container">
        <div className="sustainability-grid">
          {/* Left side - Image */}
          <div className="sustainability-image-wrapper" ref={leftRef}>
            <div className="sustainability-image-card">
              <img
                src="https://images.unsplash.com/photo-1629096346363-b96e4d9634a1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="green logistics"
                className="sustainability-image-main"
              />
              <div className="sustainability-image-badge">
                <i className="fas fa-seedling"></i> Carbon Neutral Initiative
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="sustainability-content-wrapper" ref={rightRef}>
            <div className="sustainability-card">
              <div className="sustainability-icon">
                <i className="fas fa-leaf"></i>
              </div>

              <h2 className="sustainability-title">
                Sustainability at
                <br />
                <span className="sustainability-title-accent">our core</span>
              </h2>

              <p className="sustainability-description">
                We are committed to carbon-neutral shipping, alternative fuels,
                and optimizing routes to reduce environmental footprint. Partner
                with a greener supply chain.
              </p>

              <div className="sustainability-stats">
                <div className="sustainability-stat">
                  <div className="sustainability-stat-value">-32%</div>
                  <div className="sustainability-stat-label">
                    CO₂ intensity since 2023
                  </div>
                </div>
                <div className="sustainability-stat-divider"></div>
                <div className="sustainability-stat">
                  <div className="sustainability-stat-value">15+</div>
                  <div className="sustainability-stat-label">
                    Eco-hubs worldwide
                  </div>
                </div>
              </div>

              <button className="sustainability-button">
                Explore ESG Report
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
