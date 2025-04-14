import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { HiClipboardCopy } from "react-icons/hi";

function Share() {
  const [loading, setLoading] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [selectedRecords, setSelectedRecords] = useState([]);
  const [expirationTime, setExpirationTime] = useState("24");
  const [generatedLink, setGeneratedLink] = useState("");
  const [error, setError] = useState("");

  const records = [
    { id: 1, title: "Annual Physical Report", type: "document" },
    { id: 2, title: "Cardiology Consultation", type: "document" },
    { id: 3, title: "Blood Work Analysis", type: "test" },
    { id: 4, title: "X-Ray Results", type: "test" },
    { id: 5, title: "COVID-19 Booster", type: "vaccination" },
    { id: 6, title: "Flu Vaccine", type: "vaccination" },
  ];

  const expirationOptions = [
    { value: "1", label: "1 Hour" },
    { value: "24", label: "24 Hours" },
    { value: "72", label: "3 Days" },
    { value: "168", label: "7 Days" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleRecordToggle = (recordId) => {
    setSelectedRecords((prev) =>
      prev.includes(recordId)
        ? prev.filter((id) => id !== recordId)
        : [...prev, recordId]
    );
  };

  const generateShareLink = () => {
    if (selectedRecords.length === 0) {
      setError("Please select at least one record to share");
      return;
    }

    const dummyLink = `https://medicalwallet.example/share/${Math.random()
      .toString(36)
      .substring(7)}`;
    setGeneratedLink(dummyLink);
    setError("");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 p-4 md:p-8">
     
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="animate-pulse h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="animate-pulse h-64 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-4 md:p-8">
         <nav className="bg-white border-b border-gray-200 dark:border-gray-700 fixed w-full top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img
                src="/Image/WhatsApp Image 2025-04-14 at 16.23.00_05ec6860.jpg"
                alt="Vida Logo"
                className="h-8 w-auto"
              />
              <div className="hidden md:flex items-center space-x-8 ml-10">
                <Link to="/Share Medical Data" className=" text-black  hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                  Enterprise
                </Link>
                <Link to="/individuals" className="text-gray-900 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                  Individuals
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/input-medical" className="text-gray-900  hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                Add Medical Data
              </Link>
              <Link to="/login" className="text-gray-900  hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                Login
              </Link>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                Contact Sales
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-900  hover:text-gray-600 dark:hover:text-gray-300"
              >
                {isMobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
            </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden border-t dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/share" className="block px-3 py-2 text-gray-900 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                Share Medical Data
              </Link>
              <Link to="/input-detail" className="block px-3 py-2 text-gray-900  hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                Add Medical Data
              </Link>
              <Link to="/login" className="block px-3 py-2 text-gray-900  hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                Login
              </Link>
              <button className="w-full mt-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>


      <div className="max-w-3xl  mt-12 mx-auto">
        <div className="flex items-center mb-8">
          <button
            onClick={() => (window.location.href = "/")}
            className="mr-4 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
          >
            <i className="fas fa-arrow-left text-xl"></i>
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-inter">
            Share Records
          </h1>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white font-inter">
              Select Records to Share
            </h2>
            <div className="space-y-3">
              {records.map((record) => (
                <div
                  key={record.id}
                  className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <input
                    type="checkbox"
                    id={`record-${record.id}`}
                    checked={selectedRecords.includes(record.id)}
                    onChange={() => handleRecordToggle(record.id)}
                    className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <label
                    htmlFor={`record-${record.id}`}
                    className="ml-3 font-inter text-gray-900 dark:text-white"
                  >
                    {record.title}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white font-inter">
              Set Expiration Time
            </h2>
            <select
              value={expirationTime}
              onChange={(e) => setExpirationTime(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-inter"
            >
              {expirationOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {error && (
            <div className="text-red-500 dark:text-red-400 font-inter">
              {error}
            </div>
          )}

          <button
            onClick={generateShareLink}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-inter transition-colors duration-200"
          >
            Generate Share Link
          </button>

          {generatedLink && (
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white font-inter">
                Share Link Generated
              </h2>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={generatedLink}
                  readOnly
                  className="w-full p-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white font-inter"
                />
                <button
                  onClick={() => navigator.clipboard.writeText(generatedLink)}
                  className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg"
                >
                 <HiClipboardCopy className="text-xl text-gray-900 dark:text-white" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Share;