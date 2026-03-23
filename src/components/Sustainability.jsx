const Sustainability = () => {
  return (
    <section
      id="sustainability"
      className="relative py-20 bg-white overflow-hidden"
    >
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0 opacity-100">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1761489179730-5a11d5d7449a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></div>
      </div>

      {/* Decorative blur circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#e6f3ff] rounded-full blur-3xl opacity-40 z-0"></div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1629096346363-b96e4d9634a1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="green logistics"
                className="rounded-xl shadow-2xl object-cover w-full h-80 md:h-96"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-white/20">
              <i className="fas fa-leaf text-4xl text-green-700 mb-4"></i>
              <h2 className="text-4xl font-bold text-gray-900 mb-5">
                Sustainability at our core
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                We are committed to carbon-neutral shipping, alternative fuels,
                and optimizing routes to reduce environmental footprint. Partner
                with a greener supply chain.
              </p>
              <div className="flex gap-5 mb-8">
                <div>
                  <span className="text-3xl font-black text-primary">-32%</span>
                  <p className="text-gray-600 text-sm">
                    CO₂ intensity since 2023
                  </p>
                </div>
                <div>
                  <span className="text-3xl font-black text-primary">15+</span>
                  <p className="text-gray-600 text-sm">Eco-hubs worldwide</p>
                </div>
              </div>
              <button className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
                Explore ESG Report →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
