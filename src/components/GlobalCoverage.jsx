const GlobalCoverage = () => {
  const regions = [
    "Americas: USA, Canada, Brazil, Mexico",
    "Europe: Germany, UK, France, Italy, Netherlands",
    "Asia-Pacific: Japan, China, Singapore, Australia",
    "Middle East & Africa: UAE, South Africa, Kenya",
  ];

  return (
    <section
      id="coverage"
      className="relative py-20 bg-[#f4f9fe] overflow-hidden"
    >
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0 opacity-100">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1703194531119-e8b98a555cb6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></div>
      </div>

      <div className="relative z-10 container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left content with semi-transparent card for readability */}
          <div className="lg:w-1/2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-white/20">
              <span className="text-primary font-semibold text-sm tracking-wide">
                WORLDWIDE NETWORK
              </span>
              <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-5">
                Your cargo, <br />
                anywhere & everywhere
              </h2>
              <p className="text-gray-700 mb-8">
                Waves Logistics operates through 45+ owned offices and 200+
                partner agents in key trade lanes. From Tokyo to Toronto,
                Hamburg to Hong Kong — seamless coverage.
              </p>
              <ul className="space-y-3">
                {regions.map((region, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <i className="fas fa-check-circle text-primary text-lg"></i>
                    <span className="text-gray-800 font-medium">{region}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
                View full network →
              </button>
            </div>
          </div>

          {/* Right side image */}
          <div className="lg:w-1/2 relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-4 overflow-hidden border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1519992599773-1e1d4029929d?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="global map visualization"
                className="rounded-xl w-full object-cover h-80 md:h-96 transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold text-primary shadow-lg">
                <i className="fas fa-map-marker-alt mr-1"></i> 200+ global
                gateways
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalCoverage;
