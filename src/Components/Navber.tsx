
import logo from "../assets/logo-text.png"
import hamburger from "../assets/hamburger.png"

export default function Navbar() {
    return (
        <nav className=" container bg-white border-b border-gray-100 px-6 py-3.5">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Left: Logo Section */}
                <div className='block md:hidden'>
                    <img src={hamburger} alt="" />
                </div>

                <div>
                    <img src={logo} alt="" />
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#" className="text-sm font-semibold text-pink-600">
                        Home
                    </a>
                    <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                        Technologies
                    </a>
                    <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                        Projects
                    </a>
                    <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                        About
                    </a>
                    <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                        Contact
                    </a>
                </div>


                <div className="flex items-center gap-4">
                    <button className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors px-3 py-2">
                        Sign In
                    </button>
                    <button className="text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 transition-colors px-5 py-2 rounded-full shadow-sm">
                        Sign Up
                    </button>
                </div>

            </div>
        </nav>
    );
}