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

  return (
    <section
      id="insights"
      className="relative py-20 bg-gray-50 overflow-hidden"
    >
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0 opacity-70">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></div>
      </div>

      <div className="relative z-10 container-custom">
        <div className="flex flex-wrap justify-between items-end mb-12">
          <div>
            <span className="text-primary font-semibold text-sm">
              WAVES INSIGHTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              Latest logistics news & stories
            </h2>
          </div>
          <button className="text-primary font-semibold border-b-2 border-primary pb-1 mt-4 hover:text-accent transition">
            View all articles →
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-white/20"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={item.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  alt={item.title}
                />
              </div>
              <div className="p-6">
                <div className="flex gap-2 text-xs text-primary font-semibold mb-2 flex-wrap">
                  <span className="bg-blue-50/80 backdrop-blur-sm px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-gray-600">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <a
                  href="#"
                  className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all"
                >
                  Read more{" "}
                  <i className="fas fa-chevron-right ml-1 text-xs"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
