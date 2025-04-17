import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { MdMedicalServices, MdEmergency } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const menuOptions = [
    {
      title: "Emergency Access",
      icon: "fa-kit-medical",
      path: "/emergency",
    },
    {
      title: "Medical Records",
      icon: "fa-file-medical",
      path: "/records",
    },
    {
      title: "Share",
      icon: "fa-share-nodes",
      path: "/share",
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 p-4 md:p-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="animate-pulse h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          <div className="animate-pulse h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="animate-pulse h-32 bg-gray-200 dark:bg-gray-700 rounded-lg"
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative bg-white dark:bg-gray-900 p-4 md:p-8 pb-20">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-inter">
            Medical Wallet
          </h1>
          <button className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center" onClick={()=>{navigate('/login')}}>
            <CgProfile className="text-2xl text-gray-900 dark:text-white" />
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {menuOptions.map((option) => (
            <button
              key={option.title}
              onClick={() => (navigate(option.path))}
              className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-700 transition-colors duration-200 group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <i
                  className={`fas ${option.icon} text-3xl text-gray-900 dark:text-white group-hover:text-white`}
                ></i>
                <span className="text-lg font-inter text-gray-900 dark:text-white group-hover:text-white">
                  {option.title}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-3xl mx-auto px-4">
            <div className="flex justify-between items-center py-3">
              <button
                onClick={() => (navigate("/"))}
                className="flex flex-col items-center space-y-1 w-16"
              >
                <AiFillHome className="text-2xl text-gray-900 dark:text-white" />
                <span className="text-xs text-gray-900 dark:text-white font-inter">
                  Home
                </span>
              </button>

              <button
                onClick={() => (navigate("/emergency") )}
                className="flex flex-col items-center space-y-1 w-16"
              >
                <MdEmergency className="text-2xl text-gray-900 dark:text-white" />
                <span className="text-xs text-gray-900 dark:text-white font-inter">
                  Emergency
                </span>
              </button>

              <button
                onClick={() => (navigate("/records"))}
                className="flex flex-col items-center space-y-1 w-16"
              >
                <MdMedicalServices className="text-2xl text-gray-900 dark:text-white" />
                <span className="text-xs text-gray-900 dark:text-white font-inter">
                  Medical
                </span>
              </button>

              <button
                onClick={() => (navigate("/profile"))}
                className="flex flex-col items-center space-y-1 w-16"
              >
                <CgProfile className="text-2xl text-gray-900 dark:text-white" />
                <span className="text-xs text-gray-900 dark:text-white font-inter">
                  Profile
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;