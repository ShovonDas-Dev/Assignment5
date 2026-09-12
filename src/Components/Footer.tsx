import logo from "../Assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-600 font-sans border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
        {/* Top Section */}
        <div className=" grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          
          <div className=" grid justify-center mx-auto  md:col-span-2 space-y-4">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            <div className="flex items-center gap-4 text-sm font-semibold text-gray-700 pt-2">
              <a href="#" className="hover:text-pink-500 transition-colors">GitHub</a>
              <a href="#" className="hover:text-pink-500 transition-colors">Twitter</a>
              <a href="#" className="hover:text-pink-500 transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Navigation Links */}
        <div className= "hidden md:grid md:grid-cols-3 md:gap-8 md:col-span-3">
              <div>
            <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-4">
              Product
            </h3>
            <ul className="space-y-2.5 not-last: text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Technologies</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Projects</a></li>
            </ul>
          </div>

          <div>
            <h3 className=" font-bold text-gray-900 text-sm tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 not-last: text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className=" font-bold text-sm text-gray-900 tracking-wider uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;