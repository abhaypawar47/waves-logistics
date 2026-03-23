const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#021e2f]/90 via-[#043753]/80 to-primary/20 z-5"></div>
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1571244222371-0b0b60f3c92b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container-custom text-center md:text-left">
        <div className="max-w-4xl mx-auto md:mx-0 animate-slide-up">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 text-white text-sm font-medium border border-white/20">
            <i className="fas fa-globe-americas mr-2"></i> Global logistics
            partner
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white tracking-tight">
            Seamless supply chains, <br />
            <span className="text-accent">ocean-driven precision</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mt-6 max-w-2xl">
            Waves Logistics delivers end-to-end freight forwarding, warehousing,
            and smart logistics solutions across 6 continents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center md:justify-start">
            <button className="bg-accent hover:bg-accent-dark text-gray-900 font-bold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Start Shipping <i className="fas fa-arrow-right ml-2"></i>
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-full transition-all duration-300">
              Explore Services
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/20 max-w-3xl">
            <div>
              <p className="text-white/70 text-xs">TRUSTED SINCE</p>
              <p className="text-white text-xl font-bold">2025</p>
            </div>
            <div>
              <p className="text-white/70 text-xs">GLOBAL PARTNERS</p>
              <p className="text-white text-xl font-bold">200+</p>
            </div>
            <div>
              <p className="text-white/70 text-xs">SHIPMENTS/MONTH</p>
              <p className="text-white text-xl font-bold">12K+</p>
            </div>
            <div>
              <p className="text-white/70 text-xs">COUNTRIES</p>
              <p className="text-white text-xl font-bold">85+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
