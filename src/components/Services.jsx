const Services = () => {
  const services = [
    {
      icon: "fa-ship",
      title: "Ocean Freight",
      desc: "FCL, LCL, breakbulk & specialized cargo with global carrier network.",
      color: "from-blue-700 to-cyan-700",
    },
    {
      icon: "fa-plane",
      title: "Air Freight",
      desc: "Express & economy air solutions with real-time tracking & priority handling.",
      color: "from-sky-600 to-blue-800",
    },
    {
      icon: "fa-truck-fast",
      title: "Road & Rail",
      desc: "Intermodal connectivity across Europe, Asia & Americas.",
      color: "from-indigo-600 to-blue-700",
    },
    {
      icon: "fa-warehouse",
      title: "Warehousing",
      desc: "Smart distribution centers, inventory management & cross-docking.",
      color: "from-teal-600 to-cyan-700",
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-white overflow-hidden">
      {/* Subtle background image overlay */}
      <div className="absolute inset-0 z-0 opacity-100">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></div>
      </div>

      <div className="relative z-10 container-custom">
        {/* Header Section with Background Card */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 text-center shadow-lg border border-white/20">
            <span className="text-primary font-semibold tracking-wider text-sm uppercase">
              Core Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-5">
              Integrated logistics solutions
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 text-lg">
              End-to-end supply chain management tailored to your industry
              needs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 hover:bg-white"
            >
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white text-2xl mb-6 shadow-md`}
              >
                <i className={`fas ${s.icon}`}></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {s.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{s.desc}</p>
              <div className="mt-5 flex items-center text-primary font-medium group-hover:translate-x-2 transition cursor-pointer">
                Learn more <i className="fas fa-arrow-right ml-2 text-sm"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
