import { useEffect, useRef } from "react";
import "./Footer.css";

const Footer = () => {
  const footerRef = useRef(null);

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

    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer" ref={footerRef}>
      {/* Background with subtle gradient */}
      <div className="footer-background">
        <div className="footer-overlay"></div>
      </div>

      {/* Decorative elements */}
      <div className="footer-blur-circle"></div>

      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-column">
            <div className="footer-logo">
              WAVES
              <span className="footer-logo-accent"> LOGISTICS</span>
            </div>
            <p className="footer-address">
              Office No. 910, A Wing Grohitam Society
              <br />
              Near APMC Market, Sector 19 Vashi,
              <br />
              Navi Mumbai 400703 India
            </p>
            <div className="footer-contact-badge">
              <i className="fas fa-map-marker-alt"></i>
              Global Logistics Partner
            </div>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-list">
              <li>
                <a href="#services" className="footer-link">
                  <i className="fas fa-chevron-right"></i>
                  Ocean Freight
                </a>
              </li>
              <li>
                <a href="#services" className="footer-link">
                  <i className="fas fa-chevron-right"></i>
                  Air Freight
                </a>
              </li>
              <li>
                <a href="#services" className="footer-link">
                  <i className="fas fa-chevron-right"></i>
                  Warehousing
                </a>
              </li>
              <li>
                <a href="#services" className="footer-link">
                  <i className="fas fa-chevron-right"></i>
                  Customs Brokerage
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-list">
              <li>
                <a href="#about" className="footer-link">
                  <i className="fas fa-chevron-right"></i>
                  About Waves
                </a>
              </li>
              <li>
                <a href="#careers" className="footer-link">
                  <i className="fas fa-chevron-right"></i>
                  Careers
                </a>
              </li>
              <li>
                <a href="#sustainability" className="footer-link">
                  <i className="fas fa-chevron-right"></i>
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#press" className="footer-link">
                  <i className="fas fa-chevron-right"></i>
                  Press Room
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-column">
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-list">
              <li>
                <a href="#track" className="footer-link">
                  <i className="fas fa-chevron-right"></i>
                  Track Shipment
                </a>
              </li>
              <li>
                <a href="#portal" className="footer-link">
                  <i className="fas fa-chevron-right"></i>
                  Customer Portal
                </a>
              </li>
              <li>
                <a href="#faq" className="footer-link">
                  <i className="fas fa-chevron-right"></i>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#compliance" className="footer-link">
                  <i className="fas fa-chevron-right"></i>
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2026 Waves Logistics — Empowering global supply chains. All
              trademarks reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#privacy" className="footer-bottom-link">
                Privacy Policy
              </a>
              <span className="footer-bottom-divider">|</span>
              <a href="#terms" className="footer-bottom-link">
                Terms of Service
              </a>
              <span className="footer-bottom-divider">|</span>
              <a href="#cookies" className="footer-bottom-link">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button onClick={scrollToTop} className="footer-back-to-top">
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
