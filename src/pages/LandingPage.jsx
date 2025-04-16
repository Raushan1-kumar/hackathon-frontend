import { Button } from "@/components/ui/button";
import React from "react";
import { MdEmergency } from "react-icons/md";
import { Link } from "react-router-dom";
import Header from "./Header";

function LandingPage() {
  return (
    <div className="min-h-screen  dark:bg-gray-900">
      <Header />
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
      <div className="flex flex-col md:flex-row justify-center z-20 gap-4 md:gap-8 items-center flex-wrap">
      <Link to="/emergency">
       <Button
          variant="destructive"
          className="border-2 rounded-2xl cursor-pointer p-8 w-72 text-2xl border-gray-300 hover:bg-gray-600 hover:text-white"
        >
          Emergency Detail
        </Button>
        </Link>
        <Link to="/medical-history-view">
        <Button
          variant="destructive"
          className="border-2 cursor-pointer rounded-2xl p-8 w-72 text-2xl border-gray-300 hover:bg-gray-600 hover:text-white"
        >
          Medical Records
        </Button>
        </Link>
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

      <div className="flex flex-col md:flex-row justify-center z-20 gap-4 md:gap-8 items-center flex-wrap">
      <Link to="/blood-request/add">
       <Button
          variant="destructive"
          className="border-2 cursor-pointer rounded-2xl p-8 w-72 text-2xl border-gray-300 hover:bg-gray-600 hover:text-white"
        >
        Add Blood Request
        </Button>
        </Link>
        <Button
          variant="destructive"
          className="border-2 cursor-pointer rounded-2xl p-8 w-72 text-2xl border-gray-300 hover:bg-gray-600 hover:text-white"
        >
          <Link to="/blood-request/list">View Blood Requests</Link>
        </Button>
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
              <Link to="/docs-page">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
                 Read Our Docs
              </button>
              </Link>
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
