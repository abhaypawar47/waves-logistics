const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Ready to move your business forward?
            </h2>
            <p className="text-white/80 text-lg mb-6">
              Get a custom logistics plan from our experts. Quote within 24h.
            </p>
            <div className="flex gap-5 flex-wrap mb-6">
              <div>
                <i className="fas fa-phone-alt text-accent mr-2"></i> +1 (888)
                937-8374
              </div>
              <div>
                <i className="fas fa-envelope text-accent mr-2"></i>{" "}
                hello@waveslogistics.com
              </div>
            </div>
            <div className="flex gap-4">
              <i className="fab fa-linkedin-in text-2xl hover:text-accent transition cursor-pointer"></i>
              <i className="fab fa-twitter text-2xl hover:text-accent transition cursor-pointer"></i>
              <i className="fab fa-facebook-f text-2xl hover:text-accent transition cursor-pointer"></i>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full name"
                className="w-full bg-transparent border border-white/30 rounded-xl p-3 text-white placeholder-white/60 focus:outline-none focus:border-accent transition"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-transparent border border-white/30 rounded-xl p-3 text-white placeholder-white/60 focus:outline-none focus:border-accent transition"
              />
              <textarea
                rows="3"
                placeholder="Cargo details or question"
                className="w-full bg-transparent border border-white/30 rounded-xl p-3 text-white placeholder-white/60 focus:outline-none focus:border-accent transition"
              ></textarea>
              <button className="bg-accent hover:bg-accent-dark text-gray-900 font-bold py-3 px-6 rounded-xl transition w-full">
                Request consultation →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
