import React from "react";
import { Link } from "react-router-dom";

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    return ( 
        <>
           <nav className="bg-white backdrop-blur-sm fixed w-full top-0 z-50 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex bg-cover items-center gap-8">
            <img
              src="\Image\WhatsApp Image 2025-04-14 at 16.23.00_05ec6860.jpg"
              
              alt="Vida Logo"
              className="h-10"
            />
            <div className="hidden md:flex gap-6">
              <button className="text-navy-800 font-bold hover:text-blue-600">
               <Link to="/">Home</Link>
              </button>
              <button className="text-navy-800 font-bold hover:text-blue-600">
                <Link to="/add-emergency-detail">Emergency Details</Link>
              </button>
            </div>
          </div>

        
          <div className="hidden md:flex items-center gap-6">
            <Link to="/input-detail" className="text-navy-800 font-bold hover:text-blue-600">
             Medical Data
            </Link>
            <Link to="/share" className="text-navy-800 font-bold hover:text-blue-600">
              Share Medical Data
            </Link>
            <button className="bg-blue-600 font-bold text-white px-4 py-2 rounded-full hover:bg-blue-700">
              Contact Us
            </button>
          </div>

         
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

      
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 py-4 px-4 shadow-lg">
            <div className="flex flex-col gap-4">
              <button className="text-navy-800 hover:text-blue-600 text-left py-2">
              <Link to="/" className="text-navy-800 font-bold hover:text-blue-600">Home</Link>
              </button>
              <button className="text-navy-800 hover:text-blue-600 text-left py-2">
              <Link to="/add-emergency-detail" className="text-navy-800 font-bold hover:text-blue-600">Add Emergency Details</Link>
              </button>
              <Link to="/input-detail" className="text-navy-800 font-bold hover:text-blue-600">
             Medical Data
            </Link>
            
              <Link to="/share" className="text-navy-800 font-bold hover:text-blue-600">
              Share Medical Data
            </Link>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 w-full">
                Contact Us
              </button>
              <Link to="/profile-page" className="rounded-full cursor-pointer bg-green-200 w-10 h-10">
                <div className="w-12 h-12">
                </div>
              </Link>
            </div>
          </div>
        )}
      </nav>
        </>
     );
}

export default Header;