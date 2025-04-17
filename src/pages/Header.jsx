import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isFeatureDropdownOpen, setIsFeatureDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const features = [
      {
        name: "AI-Health Recommendation",
        path: "/input-lifeStyle-detail",
        description: "Share your medical records securely"
      },
      {
        name: "Symptom Checker",
        path: "/blood-request",
        description: "Request or donate blood"
      },
      {
        name: "Health Prediction",
        path: "/risk-measurement",
        description: "Quick access to emergency information"
      },
      {
        name: "",
        path: "/health-analytics",
        description: "View your health insights"
      }
    ];

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
                  <Link to="/">
                    <button className="text-navy-800 font-bold hover:text-blue-600">
                     Home
                    </button>
                  </Link>
                  <Link to="/emergency">
                    <button className="text-navy-800 font-bold hover:text-blue-600">
                     Emergency Detail
                    </button>
                  </Link>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-6">
                <Link to="/medical-history-view" className="text-navy-800 font-bold hover:text-blue-600">
                  Medical History
                </Link>
                
                {/* Features Dropdown */}
                <div className="relative group">
                  <button 
                    className="text-navy-800 font-bold hover:text-blue-600 flex items-center gap-1"
                    onMouseEnter={() => setIsFeatureDropdownOpen(true)}
                    onClick={() => setIsFeatureDropdownOpen(!isFeatureDropdownOpen)}
                  >
                    Features
                    <svg 
                      className={`w-4 h-4 transition-transform ${isFeatureDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown Content */}
                  {isFeatureDropdownOpen && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 border border-gray-100"
                      onMouseLeave={() => setIsFeatureDropdownOpen(false)}
                    >
                      {features.map((feature, index) => (
                        <Link
                          key={index}
                          to={feature.path}
                          className="block px-4 py-2 hover:bg-blue-50 transition-colors duration-150"
                          onClick={() => setIsFeatureDropdownOpen(false)}
                        >
                          <div className="font-semibold text-navy-800">{feature.name}</div>
                          <div className="text-sm text-gray-500">{feature.description}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <button className="bg-blue-600 font-bold text-white px-4 py-2 rounded-full hover:bg-blue-700" >
                <Link to="/profile">Profile</Link>
                </button>
              </div>

              {/* Mobile Menu Button */}
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

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 py-4 px-4 shadow-lg">
                <div className="flex flex-col gap-4">
                  <Link to="/" className="text-navy-800 font-bold hover:text-blue-600">
                    <button className="text-navy-800 hover:text-blue-600 text-left py-2">
                      Home
                    </button>
                  </Link>
                  <Link to="/emergency" className="text-navy-800 font-bold hover:text-blue-600">
                    <button className="text-navy-800 hover:text-blue-600 text-left py-2">
                      Emergency Detail
                    </button>
                  </Link>
                  <Link to="/medical-history-view" className="text-navy-800 font-bold hover:text-blue-600">
                    Medical History
                  </Link>
                  
                  {/* Mobile Features Dropdown */}
                  <div className="space-y-2">
                    <button 
                      className="text-navy-800 font-bold hover:text-blue-600 text-left py-2 w-full flex items-center justify-between"
                      onClick={() => setIsFeatureDropdownOpen(!isFeatureDropdownOpen)}
                    >
                      Features
                      <svg 
                        className={`w-4 h-4 transition-transform ${isFeatureDropdownOpen ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {isFeatureDropdownOpen && (
                      <div className="pl-4 space-y-2">
                        {features.map((feature, index) => (
                          <Link
                            key={index}
                            to={feature.path}
                            className="block text-gray-600 hover:text-blue-600 py-2"
                            onClick={() => {
                              setIsFeatureDropdownOpen(false);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            {feature.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 w-full">
                    profile
                  </button>
                </div>
              </div>
            )}
          </nav>
        </>
    );
}

export default Header;