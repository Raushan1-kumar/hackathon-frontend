import React from "react";

function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);


  return (
    <div className="min-h-screen  dark:bg-gray-900">
     
      <nav className="bg-white backdrop-blur-sm fixed w-full top-0 z-50 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <img
              src="https://ucarecdn.com/e8c2c5ac-2643-46b4-8b07-de38785c2eb3/-/format/auto/"
              alt="Vida Logo"
              className="h-8"
            />
            <div className="hidden md:flex gap-6">
              <button className="text-navy-800 hover:text-blue-600">
                Enterprise
              </button>
              <button className="text-navy-800 hover:text-blue-600">
                Individuals
              </button>
            </div>
          </div>

        
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-navy-800 hover:text-blue-600">
              Resources
            </a>
            <a href="#" className="text-navy-800 hover:text-blue-600">
              About
            </a>
            <a href="#" className="text-navy-800 hover:text-blue-600">
              Login
            </a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
              Contact Sales
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
                Enterprise
              </button>
              <button className="text-navy-800 hover:text-blue-600 text-left py-2">
                Individuals
              </button>
              <a href="#" className="text-navy-800 hover:text-blue-600 py-2">
                Resources
              </a>
              <a href="#" className="text-navy-800 hover:text-blue-600 py-2">
                About
              </a>
              <a href="#" className="text-navy-800 hover:text-blue-600 py-2">
                Login
              </a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 w-full">
                Contact Sales
              </button>
            </div>
          </div>
        )}
      </nav>

      <div className="pt-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 py-16">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Your goals, our expertise – for better employee health
              </h1>
              <p className="text-gray-300 text-lg">
                Vida specializes in providing effective, virtual care for
                obesity and related conditions. Our approach combines human
                expertise with advanced technology to deliver personalized
                treatment at scale.
              </p>
            </div>
            <div className="flex-1 relative">
              <div className="bg-blue-100 rounded-3xl p-6 relative">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                  alt="Healthcare Professional"
                  className="rounded-2xl w-full h-80 object-cover"
                />
                <div className="absolute -left-8 bottom-12">
                  <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
                    alt="Doctor"
                    className="w-16 h-16 rounded-full border-4 border-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Healthcare savings for your bottom line
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Improve outcomes, cut costs, and make a difference in the lives of
            your employees with Vida's proven suite of solutions.
          </p>
        </div>
      </div>


      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Personalized programming. Seamless integration. Real results.
              </h2>
              <p className="text-gray-300">
                We treat the full spectrum of obesity and related chronic
                conditions, with programs tailored to address unique related
                needs.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
                See our programs
              </button>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6"
                alt="Mobile App"
                className="rounded-2xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;