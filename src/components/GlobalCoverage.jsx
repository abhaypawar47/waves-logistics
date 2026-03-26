import { useEffect, useRef } from "react";
import "./GlobalCoverage.css";

const GlobalCoverage = () => {
  const regions = [
    "Americas: USA, Canada, Brazil, Mexico",
    "Europe: Germany, UK, France, Italy, Netherlands",
    "Asia-Pacific: Japan, China, Singapore, Australia",
    "Middle East & Africa: UAE, South Africa, Kenya",
  ];

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
    <section id="coverage" className="coverage-section">
      {/* Background with subtle overlay */}
      <div className="coverage-background">
        <div className="coverage-overlay"></div>
        <div
          className="coverage-image"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1703194531119-e8b98a555cb6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></div>
      </div>

      <div className="coverage-container">
        <div className="coverage-grid">
          {/* Left content */}
          <div className="coverage-left" ref={leftRef}>
            <div className="coverage-card">
              <div className="coverage-badge">
                <i className="fas fa-globe"></i> WORLDWIDE NETWORK
              </div>
              <h2 className="coverage-title">
                Your cargo, <br />
                <span className="coverage-title-accent">
                  anywhere & everywhere
                </span>
              </h2>
              <p className="coverage-description">
                Waves Logistics operates through 45+ owned offices and 200+
                partner agents in key trade lanes. From Tokyo to Toronto,
                Hamburg to Hong Kong — seamless coverage.
              </p>
              <ul className="coverage-list">
                {regions.map((region, i) => (
                  <li key={i} className="coverage-list-item">
                    <i className="fas fa-check-circle"></i>
                    <span>{region}</span>
                  </li>
                ))}
              </ul>
              <button className="coverage-button">
                View full network
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>

          {/* Right side image */}
          <div className="coverage-right" ref={rightRef}>
            <div className="coverage-image-card">
              <img
                src="https://images.unsplash.com/photo-1519992599773-1e1d4029929d?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="global map visualization"
                className="coverage-map-image"
              />
              <div className="coverage-badge-floating">
                <i className="fas fa-map-marker-alt"></i> 200+ global gateways
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalCoverage;
