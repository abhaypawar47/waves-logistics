import { useEffect, useRef } from "react";
import "./Insights.css";

const Insights = () => {
  const articles = [
    {
      title: "Waves Logistics launches AI-driven route optimization",
      date: "March 15, 2025",
      category: "Innovation",
      img: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Expanding into Southeast Asia: new hubs in Vietnam & Thailand",
      date: "March 02, 2025",
      category: "Expansion",
      img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Shipping peak season outlook: capacity & rates 2025",
      date: "February 18, 2025",
      category: "Market update",
      img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  const cardsRef = useRef([]);

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
    <section id="insights" className="insights-section">
      {/* Background */}
      <div className="insights-background">
        <div className="insights-overlay"></div>
        <div
          className="insights-image"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></div>
      </div>

      {/* Decorative elements */}
      <div className="insights-blur-circle"></div>
      <div className="insights-blur-circle-2"></div>

      <div className="insights-container">
        {/* Header */}
        <div className="insights-header">
          <div className="insights-header-left">
            <div className="insights-badge">
              <i className="fas fa-newspaper"></i> WAVES INSIGHTS
            </div>
            <h2 className="insights-title">
              Latest logistics <br />
              <span className="insights-title-accent">news & stories</span>
            </h2>
          </div>
          <button className="insights-view-all">
            View all articles
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        {/* Articles Grid */}
        <div className="insights-grid">
          {articles.map((item, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="insights-card"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="insights-card-inner">
                <div className="insights-card-image">
                  <img src={item.img} alt={item.title} />
                  <div className="insights-card-overlay"></div>
                </div>
                <div className="insights-card-content">
                  <div className="insights-card-meta">
                    <span className="insights-category">
                      <i className="fas fa-tag"></i> {item.category}
                    </span>
                    <span className="insights-date">
                      <i className="fas fa-calendar-alt"></i> {item.date}
                    </span>
                  </div>
                  <h3 className="insights-card-title">{item.title}</h3>
                  <a href="#" className="insights-read-more">
                    Read more
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
