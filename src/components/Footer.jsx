const Footer = () => {
  return (
    <footer className="bg-[#02182b] text-gray-300 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="text-2xl font-extrabold text-white">
              WAVES LOGISTICS
            </div>
            <p className="mt-3 text-sm">
              Powering global trade with smart, reliable, and sustainable
              logistics solutions.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition cursor-pointer">
                Ocean Freight
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Air Freight
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Warehousing
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Customs Brokerage
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition cursor-pointer">
                About Waves
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Careers
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Sustainability
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Press Room
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition cursor-pointer">
                Track Shipment
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Customer Portal
              </li>
              <li className="hover:text-white transition cursor-pointer">
                FAQ
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Compliance
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © 2025 Waves Logistics — Empowering global supply chains. All
          trademarks reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
